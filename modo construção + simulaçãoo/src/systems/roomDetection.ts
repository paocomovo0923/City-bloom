import * as THREE from 'three';
import { Wall, Room } from '../types/sims';

const LOT_MIN = -12;
const LOT_MAX = 12;

interface CellCoord {
  x: number;
  z: number;
}

// Checks if an edge between (x1,z1) and (x2,z2) is blocked by a wall
function isEdgeBlocked(
  x1: number,
  z1: number,
  x2: number,
  z2: number,
  walls: Wall[]
): { blocked: boolean; wallId?: string } {
  // Edge is either horizontal or vertical of length 1
  const minX = Math.min(x1, x2);
  const maxX = Math.max(x1, x2);
  const minZ = Math.min(z1, z2);
  const maxZ = Math.max(z1, z2);

  for (const w of walls) {
    const wMinX = Math.min(w.x1, w.x2);
    const wMaxX = Math.max(w.x1, w.x2);
    const wMinZ = Math.min(w.z1, w.z2);
    const wMaxZ = Math.max(w.z1, w.z2);

    // Is it a horizontal wall?
    if (w.z1 === w.z2 && minZ === maxZ && w.z1 === minZ) {
      if (minX >= wMinX && maxX <= wMaxX) {
        return { blocked: true, wallId: w.id };
      }
    }
    // Is it a vertical wall?
    if (w.x1 === w.x2 && minX === maxX && w.x1 === minX) {
      if (minZ >= wMinZ && maxZ <= wMaxZ) {
        return { blocked: true, wallId: w.id };
      }
    }
  }

  return { blocked: false };
}

export function detectRooms(floorNumber: number, walls: Wall[], existingRooms: Room[] = []): Room[] {
  if (walls.length < 3) return [];

  // Find min and max wall bounds to optimize search space
  let minWallX = Infinity, maxWallX = -Infinity;
  let minWallZ = Infinity, maxWallZ = -Infinity;
  for (const w of walls) {
    minWallX = Math.min(minWallX, w.x1, w.x2);
    maxWallX = Math.max(maxWallX, w.x1, w.x2);
    minWallZ = Math.min(minWallZ, w.z1, w.z2);
    maxWallZ = Math.max(maxWallZ, w.z1, w.z2);
  }

  const boundMinX = Math.max(LOT_MIN, Math.floor(minWallX) - 1);
  const boundMaxX = Math.min(LOT_MAX, Math.ceil(maxWallX) + 1);
  const boundMinZ = Math.max(LOT_MIN, Math.floor(minWallZ) - 1);
  const boundMaxZ = Math.min(LOT_MAX, Math.ceil(maxWallZ) + 1);

  const cellKey = (x: number, z: number) => `${x},${z}`;

  // Flood-fill exterior cells starting from the bounding perimeter
  const outsideCells = new Set<string>();
  const queue: CellCoord[] = [];

  // Enqueue perimeter cells
  for (let x = boundMinX; x < boundMaxX; x++) {
    queue.push({ x, z: boundMinZ });
    queue.push({ x, z: boundMaxZ - 1 });
    outsideCells.add(cellKey(x, boundMinZ));
    outsideCells.add(cellKey(x, boundMaxZ - 1));
  }
  for (let z = boundMinZ + 1; z < boundMaxZ - 1; z++) {
    queue.push({ x: boundMinX, z });
    queue.push({ x: boundMaxX - 1, z });
    outsideCells.add(cellKey(boundMinX, z));
    outsideCells.add(cellKey(boundMaxX - 1, z));
  }

  while (queue.length > 0) {
    const current = queue.shift()!;

    // 4 Neighbors: East, West, North, South
    const neighbors: { x: number; z: number; edge: [number, number, number, number] }[] = [
      { x: current.x + 1, z: current.z, edge: [current.x + 1, current.z, current.x + 1, current.z + 1] }, // East edge
      { x: current.x - 1, z: current.z, edge: [current.x, current.z, current.x, current.z + 1] },         // West edge
      { x: current.x, z: current.z + 1, edge: [current.x, current.z + 1, current.x + 1, current.z + 1] }, // North edge
      { x: current.x, z: current.z - 1, edge: [current.x, current.z, current.x + 1, current.z] },         // South edge
    ];

    for (const n of neighbors) {
      if (n.x >= boundMinX && n.x < boundMaxX && n.z >= boundMinZ && n.z < boundMaxZ) {
        const key = cellKey(n.x, n.z);
        if (!outsideCells.has(key)) {
          // Check if passage from current to n is blocked by any wall
          const check = isEdgeBlocked(n.edge[0], n.edge[1], n.edge[2], n.edge[3], walls);
          if (!check.blocked) {
            outsideCells.add(key);
            queue.push({ x: n.x, z: n.z });
          }
        }
      }
    }
  }

  // Any cell inside bounds that is NOT outside is interior!
  const interiorCells = new Set<string>();
  for (let x = boundMinX; x < boundMaxX; x++) {
    for (let z = boundMinZ; z < boundMaxZ; z++) {
      const k = cellKey(x, z);
      if (!outsideCells.has(k)) {
        interiorCells.add(k);
      }
    }
  }

  if (interiorCells.size === 0) {
    return [];
  }

  // Group interior cells into distinct rooms via connected components
  const visited = new Set<string>();
  const rawRooms: CellCoord[][] = [];

  for (const k of interiorCells) {
    if (visited.has(k)) continue;

    const [sx, sz] = k.split(',').map(Number);
    const roomCells: CellCoord[] = [];
    const roomQueue: CellCoord[] = [{ x: sx, z: sz }];
    visited.add(k);

    while (roomQueue.length > 0) {
      const curr = roomQueue.shift()!;
      roomCells.push(curr);

      const neighbors = [
        { x: curr.x + 1, z: curr.z, edge: [curr.x + 1, curr.z, curr.x + 1, curr.z + 1] },
        { x: curr.x - 1, z: curr.z, edge: [curr.x, curr.z, curr.x, curr.z + 1] },
        { x: curr.x, z: curr.z + 1, edge: [curr.x, curr.z + 1, curr.x + 1, curr.z + 1] },
        { x: curr.x, z: curr.z - 1, edge: [curr.x, curr.z, curr.x + 1, curr.z] },
      ];

      for (const n of neighbors) {
        const nk = cellKey(n.x, n.z);
        if (interiorCells.has(nk) && !visited.has(nk)) {
          const check = isEdgeBlocked(n.edge[0], n.edge[1], n.edge[2], n.edge[3], walls);
          if (!check.blocked) {
            visited.add(nk);
            roomQueue.push({ x: n.x, z: n.z });
          }
        }
      }
    }

    if (roomCells.length > 0) {
      rawRooms.push(roomCells);
    }
  }

  // Create room data objects
  const rooms: Room[] = rawRooms.map((cells, index) => {
    let minX = Infinity, maxX = -Infinity;
    let minZ = Infinity, maxZ = -Infinity;
    for (const c of cells) {
      minX = Math.min(minX, c.x);
      maxX = Math.max(maxX, c.x + 1);
      minZ = Math.min(minZ, c.z);
      maxZ = Math.max(maxZ, c.z + 1);
    }

    // Collect wall IDs bounding this room
    const wallIdSet = new Set<string>();
    for (const c of cells) {
      const edges: [number, number, number, number][] = [
        [c.x + 1, c.z, c.x + 1, c.z + 1],
        [c.x, c.z, c.x, c.z + 1],
        [c.x, c.z + 1, c.x + 1, c.z + 1],
        [c.x, c.z, c.x + 1, c.z],
      ];
      for (const edge of edges) {
        const res = isEdgeBlocked(edge[0], edge[1], edge[2], edge[3], walls);
        if (res.blocked && res.wallId) {
          wallIdSet.add(res.wallId);
        }
      }
    }

    // Match with existing room to preserve custom floor material
    let floorMaterial = 'wood_oak';
    const matched = existingRooms.find((er) => {
      if (er.floor !== floorNumber) return false;
      const overlaps = er.cells.some((ec) => cells.some((c) => c.x === ec.x && c.z === ec.z));
      return overlaps;
    });
    if (matched) {
      floorMaterial = matched.floorMaterial;
    }

    return {
      id: matched ? matched.id : `room_${floorNumber}_${Date.now()}_${index}`,
      floor: floorNumber,
      bounds: { minX, maxX, minZ, maxZ },
      cells,
      wallIds: Array.from(wallIdSet),
      floorMaterial,
    };
  });

  return rooms;
}

/**
 * Creates an exact 3D Mesh for a room based on its enclosed cells.
 * Perfectly handles arbitrary polygons, L-shapes, T-shapes with correct UVs.
 */
export function buildRoomFloorGeometry(cells: CellCoord[]): THREE.BufferGeometry {
  const positions: number[] = [];
  const normals: number[] = [];
  const uvs: number[] = [];

  for (const c of cells) {
    const x0 = c.x;
    const x1 = c.x + 1;
    const z0 = c.z;
    const z1 = c.z + 1;
    const y = 0.04; // Distinctly above terrain (which sits at -0.02)

    // Triangle 1: (x0, y, z0) -> (x0, y, z1) -> (x1, y, z1) [Counter-Clockwise facing +Y Up]
    positions.push(
      x0, y, z0,
      x0, y, z1,
      x1, y, z1
    );
    normals.push(0, 1, 0, 0, 1, 0, 0, 1, 0);
    uvs.push(x0, z0, x0, z1, x1, z1);

    // Triangle 2: (x0, y, z0) -> (x1, y, z1) -> (x1, y, z0) [Counter-Clockwise facing +Y Up]
    positions.push(
      x0, y, z0,
      x1, y, z1,
      x1, y, z0
    );
    normals.push(0, 1, 0, 0, 1, 0, 0, 1, 0);
    uvs.push(x0, z0, x1, z1, x1, z0);
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
  geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geometry.computeVertexNormals();

  return geometry;
}
