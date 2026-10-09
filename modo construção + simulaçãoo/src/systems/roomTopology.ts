import { Room, Wall } from '../types/sims';

const LOT_MIN = -12;
const LOT_MAX = 12;

interface CellCoord { x: number; z: number }
type Edge = [number, number, number, number];

function blockedEdge(x1: number, z1: number, x2: number, z2: number, walls: Wall[]) {
  const minX = Math.min(x1, x2), maxX = Math.max(x1, x2);
  const minZ = Math.min(z1, z2), maxZ = Math.max(z1, z2);
  for (const wall of walls) {
    const wMinX = Math.min(wall.x1, wall.x2), wMaxX = Math.max(wall.x1, wall.x2);
    const wMinZ = Math.min(wall.z1, wall.z2), wMaxZ = Math.max(wall.z1, wall.z2);
    if (wall.z1 === wall.z2 && minZ === maxZ && wall.z1 === minZ && minX >= wMinX && maxX <= wMaxX)
      return wall.id;
    if (wall.x1 === wall.x2 && minX === maxX && wall.x1 === minX && minZ >= wMinZ && maxZ <= wMaxZ)
      return wall.id;
  }
  return undefined;
}

function neighbors(cell: CellCoord): Array<{ x: number; z: number; edge: Edge }> {
  const { x, z } = cell;
  return [
    { x: x + 1, z, edge: [x + 1, z, x + 1, z + 1] },
    { x: x - 1, z, edge: [x, z, x, z + 1] },
    { x, z: z + 1, edge: [x, z + 1, x + 1, z + 1] },
    { x, z: z - 1, edge: [x, z, x + 1, z] },
  ];
}

export function detectRooms(floorNumber: number, walls: Wall[], existingRooms: Room[] = []): Room[] {
  if (walls.length < 3) return [];
  const minWallX = Math.min(...walls.flatMap(wall => [wall.x1, wall.x2]));
  const maxWallX = Math.max(...walls.flatMap(wall => [wall.x1, wall.x2]));
  const minWallZ = Math.min(...walls.flatMap(wall => [wall.z1, wall.z2]));
  const maxWallZ = Math.max(...walls.flatMap(wall => [wall.z1, wall.z2]));
  const minX = Math.max(LOT_MIN, Math.floor(minWallX) - 1);
  const maxX = Math.min(LOT_MAX, Math.ceil(maxWallX) + 1);
  const minZ = Math.max(LOT_MIN, Math.floor(minWallZ) - 1);
  const maxZ = Math.min(LOT_MAX, Math.ceil(maxWallZ) + 1);
  const key = (x: number, z: number) => `${x},${z}`;

  const outside = new Set<string>(), queue: CellCoord[] = [];
  const enqueue = (x: number, z: number) => {
    const cellKey = key(x, z);
    if (!outside.has(cellKey)) { outside.add(cellKey); queue.push({ x, z }); }
  };
  for (let x = minX; x < maxX; x++) { enqueue(x, minZ); enqueue(x, maxZ - 1); }
  for (let z = minZ + 1; z < maxZ - 1; z++) { enqueue(minX, z); enqueue(maxX - 1, z); }

  for (let head = 0; head < queue.length; head++) {
    const current = queue[head];
    for (const next of neighbors(current)) {
      if (next.x < minX || next.x >= maxX || next.z < minZ || next.z >= maxZ) continue;
      const nextKey = key(next.x, next.z);
      if (!outside.has(nextKey) && !blockedEdge(...next.edge, walls)) enqueue(next.x, next.z);
    }
  }

  const inside = new Set<string>();
  for (let x = minX; x < maxX; x++) for (let z = minZ; z < maxZ; z++)
    if (!outside.has(key(x, z))) inside.add(key(x, z));

  const visited = new Set<string>(), groups: CellCoord[][] = [];
  for (const startKey of inside) {
    if (visited.has(startKey)) continue;
    const [sx, sz] = startKey.split(',').map(Number), cells: CellCoord[] = [{ x: sx, z: sz }];
    visited.add(startKey);
    for (let head = 0; head < cells.length; head++) {
      for (const next of neighbors(cells[head])) {
        const nextKey = key(next.x, next.z);
        if (inside.has(nextKey) && !visited.has(nextKey) && !blockedEdge(...next.edge, walls)) {
          visited.add(nextKey); cells.push({ x: next.x, z: next.z });
        }
      }
    }
    groups.push(cells);
  }

  return groups.map((cells, index) => {
    const bounds = cells.reduce((result, cell) => ({
      minX: Math.min(result.minX, cell.x), maxX: Math.max(result.maxX, cell.x + 1),
      minZ: Math.min(result.minZ, cell.z), maxZ: Math.max(result.maxZ, cell.z + 1),
    }), { minX: Infinity, maxX: -Infinity, minZ: Infinity, maxZ: -Infinity });
    const wallIds = new Set<string>();
    for (const cell of cells) for (const edge of [
      [cell.x + 1, cell.z, cell.x + 1, cell.z + 1], [cell.x, cell.z, cell.x, cell.z + 1],
      [cell.x, cell.z + 1, cell.x + 1, cell.z + 1], [cell.x, cell.z, cell.x + 1, cell.z],
    ] as Edge[]) {
      const id = blockedEdge(...edge, walls); if (id) wallIds.add(id);
    }
    const matched = existingRooms.find(room => room.floor === floorNumber &&
      room.cells.some(oldCell => cells.some(cell => cell.x === oldCell.x && cell.z === oldCell.z)));
    return {
      id: matched?.id || `room_${floorNumber}_${Date.now()}_${index}`,
      floor: floorNumber, bounds, cells, wallIds: Array.from(wallIds), floorMaterial: matched?.floorMaterial || 'wood_oak',
    };
  });
}