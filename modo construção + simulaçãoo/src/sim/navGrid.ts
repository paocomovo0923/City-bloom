import { Door, FurnitureObject, Wall } from '../types/sims';
import { getFurnitureFootprint } from '../utils/furnitureFootprints';

const CELL = 0.5;
const HALF = 14;
const SIZE = Math.round((HALF * 2) / CELL);
const NON_BLOCKING = new Set(['rug', 'wall_art', 'ceiling_lamp', 'tv_wall']);

export interface Point { x: number; z: number }

export class NavGrid {
  private blocked = new Uint8Array(SIZE * SIZE);

  rebuild(walls: Wall[], doors: Door[], objects: FurnitureObject[]) {
    this.blocked.fill(0);

    for (const wall of walls) {
      const len = Math.hypot(wall.x2 - wall.x1, wall.z2 - wall.z1);
      const steps = Math.max(2, Math.ceil(len / (CELL / 3)));
      for (let i = 0; i <= steps; i++) {
        const t = i / steps;
        const x = wall.x1 + (wall.x2 - wall.x1) * t;
        const z = wall.z1 + (wall.z2 - wall.z1) * t;
        const nearDoor = doors.some((d) => Math.hypot(d.x - x, d.z - z) < 0.55);
        if (nearDoor) continue;
        this.markDisc(x, z, 0.28);
      }
    }

    for (const obj of objects) {
      if (NON_BLOCKING.has(obj.type)) continue;
      const fp = getFurnitureFootprint(obj.type);
      const rot = (((obj.rotation || 0) % 360) + 360) % 360;
      const swap = Math.round(rot / 90) % 2 === 1;
      const w = (swap ? fp.depth : fp.width) * (obj.scale || 1);
      const d = (swap ? fp.width : fp.depth) * (obj.scale || 1);
      this.markRect(obj.x - w / 2 + 0.08, obj.z - d / 2 + 0.08, obj.x + w / 2 - 0.08, obj.z + d / 2 - 0.08);
    }
  }

  private toCell(v: number) {
    return Math.floor((v + HALF) / CELL);
  }

  private center(c: number) {
    return c * CELL - HALF + CELL / 2;
  }

  private markDisc(x: number, z: number, r: number) {
    this.markRect(x - r, z - r, x + r, z + r);
  }

  private markRect(x1: number, z1: number, x2: number, z2: number) {
    const cx1 = Math.max(0, this.toCell(x1));
    const cz1 = Math.max(0, this.toCell(z1));
    const cx2 = Math.min(SIZE - 1, this.toCell(x2));
    const cz2 = Math.min(SIZE - 1, this.toCell(z2));
    for (let cz = cz1; cz <= cz2; cz++) {
      for (let cx = cx1; cx <= cx2; cx++) this.blocked[cz * SIZE + cx] = 1;
    }
  }

  private isFree(cx: number, cz: number) {
    return cx >= 0 && cz >= 0 && cx < SIZE && cz < SIZE && this.blocked[cz * SIZE + cx] === 0;
  }

  isWalkable(x: number, z: number) {
    return this.isFree(this.toCell(x), this.toCell(z));
  }

  nearestFree(p: Point, maxRadius = 8): Point | null {
    const sx = this.toCell(p.x);
    const sz = this.toCell(p.z);
    if (this.isFree(sx, sz)) return p;
    for (let r = 1; r <= maxRadius; r++) {
      let best: Point | null = null;
      let bestD = Infinity;
      for (let dz = -r; dz <= r; dz++) {
        for (let dx = -r; dx <= r; dx++) {
          if (Math.max(Math.abs(dx), Math.abs(dz)) !== r) continue;
          if (!this.isFree(sx + dx, sz + dz)) continue;
          const c = { x: this.center(sx + dx), z: this.center(sz + dz) };
          const dist = Math.hypot(c.x - p.x, c.z - p.z);
          if (dist < bestD) { bestD = dist; best = c; }
        }
      }
      if (best) return best;
    }
    return null;
  }

  findPath(from: Point, to: Point): Point[] | null {
    const start = this.nearestFree(from, 4);
    const goal = this.nearestFree(to, 8);
    if (!start || !goal) return null;
    const sx = this.toCell(start.x), sz = this.toCell(start.z);
    const gx = this.toCell(goal.x), gz = this.toCell(goal.z);
    const startIdx = sz * SIZE + sx;
    const goalIdx = gz * SIZE + gx;

    const g = new Float32Array(SIZE * SIZE).fill(Infinity);
    const parent = new Int32Array(SIZE * SIZE).fill(-1);
    const closed = new Uint8Array(SIZE * SIZE);
    const open: number[] = [startIdx];
    const f = new Float32Array(SIZE * SIZE).fill(Infinity);
    g[startIdx] = 0;
    f[startIdx] = Math.hypot(gx - sx, gz - sz);

    let iterations = 0;
    while (open.length > 0 && iterations++ < 6000) {
      let bi = 0;
      for (let i = 1; i < open.length; i++) if (f[open[i]] < f[open[bi]]) bi = i;
      const cur = open[bi];
      open.splice(bi, 1);
      if (cur === goalIdx) break;
      closed[cur] = 1;
      const cx = cur % SIZE, cz = (cur / SIZE) | 0;
      for (let dz = -1; dz <= 1; dz++) {
        for (let dx = -1; dx <= 1; dx++) {
          if (!dx && !dz) continue;
          const nx = cx + dx, nz = cz + dz;
          if (!this.isFree(nx, nz)) continue;
          if (dx && dz && (!this.isFree(cx + dx, cz) || !this.isFree(cx, cz + dz))) continue;
          const ni = nz * SIZE + nx;
          if (closed[ni]) continue;
          const cost = g[cur] + (dx && dz ? 1.4142 : 1);
          if (cost < g[ni]) {
            g[ni] = cost;
            parent[ni] = cur;
            f[ni] = cost + Math.hypot(gx - nx, gz - nz);
            if (!open.includes(ni)) open.push(ni);
          }
        }
      }
    }

    if (parent[goalIdx] === -1 && goalIdx !== startIdx) return null;
    const cells: Point[] = [];
    let c = goalIdx;
    while (c !== -1 && c !== startIdx) {
      cells.push({ x: this.center(c % SIZE), z: this.center((c / SIZE) | 0) });
      c = parent[c];
    }
    cells.reverse();
    if (cells.length > 0) cells[cells.length - 1] = goal;
    else cells.push(goal);
    return this.smooth(start, cells);
  }

  private lineOfSight(a: Point, b: Point) {
    const dist = Math.hypot(b.x - a.x, b.z - a.z);
    const steps = Math.ceil(dist / (CELL / 3));
    for (let i = 1; i < steps; i++) {
      const t = i / steps;
      const x = a.x + (b.x - a.x) * t;
      const z = a.z + (b.z - a.z) * t;
      if (!this.isWalkable(x, z)) return false;
      if (!this.isWalkable(x + 0.15, z) || !this.isWalkable(x - 0.15, z) || !this.isWalkable(x, z + 0.15) || !this.isWalkable(x, z - 0.15)) return false;
    }
    return true;
  }

  private smooth(start: Point, cells: Point[]): Point[] {
    const out: Point[] = [];
    let anchor = start;
    let i = 0;
    while (i < cells.length) {
      let j = cells.length - 1;
      while (j > i && !this.lineOfSight(anchor, cells[j])) j--;
      out.push(cells[j]);
      anchor = cells[j];
      i = j + 1;
    }
    return out;
  }
}
