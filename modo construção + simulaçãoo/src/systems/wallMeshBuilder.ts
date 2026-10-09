import * as THREE from 'three';
import { Wall, Door, WindowItem, WallCutMode } from '../types/sims';
import { getWallMaterial } from '../utils/proceduralTextures';

export interface WallBuilderOptions {
  currentFloor: number;
  wallCutMode: WallCutMode;
  camera: THREE.Camera;
  cameraTarget: THREE.Vector3;
}

interface WallOpening {
  start: number;
  end: number;
  type: 'door' | 'window';
}

interface NodeData {
  x: number;
  z: number;
  floor: number;
  incidentWallCount: number;
  maxHeight: number;
  material: string;
  isCutaway: boolean;
}

/**
 * WallMeshBuilder: High-performance architectural wall construction system.
 * - Joins walls by their collision centers with seamless junction nodes.
 * - Guarantees true height, volume, and realistic architectural thickness (0.22m).
 * - Applies unified metric UV texturing to prevent stretching across walls.
 * - Utilizes instancing (InstancedMesh) for corner junction columns, baseboard trims, and top capping rails.
 */
export class WallMeshBuilder {
  private baseboardMat: THREE.MeshStandardMaterial;
  private crownMat: THREE.MeshStandardMaterial;
  private topCapMat: THREE.MeshStandardMaterial; // Dark slate architectural top cap as seen in The Sims Mobile

  constructor() {
    this.baseboardMat = new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      roughness: 0.6,
      metalness: 0.05,
    });
    this.crownMat = new THREE.MeshStandardMaterial({
      color: 0xf1f5f9,
      roughness: 0.5,
    });
    // Dark slate top cap trim (matching The Sims Mobile wall top border in image.png)
    this.topCapMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      roughness: 0.4,
      metalness: 0.2,
    });
  }

  /**
   * Helper to create a volumetric box geometry with unified metric UV coordinates.
   */
  private createUnifiedBoxGeometry(
    length: number,
    height: number,
    thickness: number,
    distStart: number,
    yBottom: number,
    textureScale: number = 1.0
  ): THREE.BufferGeometry {
    const geo = new THREE.BoxGeometry(length, height, thickness);
    const uvs = geo.attributes.uv;

    // Face order in Three.js BoxGeometry:
    // 0, 1: +X, -X (caps / thickness ends)
    // 2, 3: +Y, -Y (top, bottom)
    // 4, 5: +Z, -Z (front, back main wall faces)

    const u0 = distStart / textureScale;
    const u1 = (distStart + length) / textureScale;
    const v0 = yBottom / textureScale;
    const v1 = (yBottom + height) / textureScale;

    // Front face (+Z)
    // Vertex order for +Z: top-left, top-right, bottom-left, bottom-right
    uvs.setXY(16, u0, v1);
    uvs.setXY(17, u1, v1);
    uvs.setXY(18, u0, v0);
    uvs.setXY(19, u1, v0);

    // Back face (-Z)
    uvs.setXY(20, u1, v1);
    uvs.setXY(21, u0, v1);
    uvs.setXY(22, u1, v0);
    uvs.setXY(23, u0, v0);

    uvs.needsUpdate = true;
    return geo;
  }

  /**
   * Builds the entire 3D wall mesh hierarchy for the scene.
   */
  public build(
    walls: Wall[],
    doors: Door[],
    windows: WindowItem[],
    options: WallBuilderOptions
  ): THREE.Group {
    const rootGroup = new THREE.Group();
    rootGroup.name = 'WallsMeshRoot';

    const { currentFloor, wallCutMode, camera, cameraTarget } = options;

    // 1. Identify collision-center nodes (endpoints)
    const nodeMap = new Map<string, NodeData>();
    const nodeKey = (x: number, z: number, floor: number) =>
      `${x.toFixed(2)}_${z.toFixed(2)}_${floor}`;

    // Helper to calculate wall height and cut state for the 3 user-specified modes:
    // 1: Padrão (Corte: frente baixa ~0.45m para ver interior, traseira alta 3.0m)
    // 2: Paredes Altas (Todas as paredes completas 3.0m)
    // 3: Paredes Baixas (Todas as paredes baixas ~0.45m / "sem parede" / planta baixa)
    const computeWallHeight = (wall: Wall) => {
      const fullH = 3.0;
      const lowH = 0.45;

      if (wall.floor !== currentFloor) {
        return { height: fullH, isCutaway: false };
      }

      // Mode 2: 'full' -> All walls are high
      if (wallCutMode === 'full') {
        return { height: fullH, isCutaway: false };
      }

      // Mode 3: 'down' -> All walls are low ("sem parede")
      if (wallCutMode === 'down') {
        return { height: lowH, isCutaway: true };
      }

      // Mode 1: 'cutaway' -> Front walls facing camera are low, back walls remain high
      const midX = (wall.x1 + wall.x2) / 2;
      const midZ = (wall.z1 + wall.z2) / 2;

      const viewDirX = cameraTarget.x - camera.position.x;
      const viewDirZ = cameraTarget.z - camera.position.z;
      const viewDist = Math.hypot(viewDirX, viewDirZ) || 1;
      const normVx = viewDirX / viewDist;
      const normVz = viewDirZ / viewDist;

      const camToWallX = midX - camera.position.x;
      const camToWallZ = midZ - camera.position.z;
      const projDist = camToWallX * normVx + camToWallZ * normVz;

      if (projDist < viewDist * 0.98) {
        return { height: lowH, isCutaway: true };
      }

      return { height: fullH, isCutaway: false };
    };

    // 2. Pre-process walls and build node graph
    for (const wall of walls) {
      const fl = wall.floor;
      const k1 = nodeKey(wall.x1, wall.z1, fl);
      const k2 = nodeKey(wall.x2, wall.z2, fl);

      const { height: wallHeight, isCutaway } = computeWallHeight(wall);

      // Record nodes
      const updateNode = (key: string, x: number, z: number) => {
        let node = nodeMap.get(key);
        if (!node) {
          node = {
            x,
            z,
            floor: fl,
            incidentWallCount: 0,
            maxHeight: wallHeight,
            material: wall.material || 'white',
            isCutaway,
          };
          nodeMap.set(key, node);
        }
        node.incidentWallCount += 1;
        node.maxHeight = Math.max(node.maxHeight, wallHeight);
        if (!isCutaway) node.isCutaway = false; // Stay tall if any connected wall is tall
      };

      updateNode(k1, wall.x1, wall.z1);
      updateNode(k2, wall.x2, wall.z2);
    }

    // Arrays to collect transforms for InstancedMesh trims
    const baseboardMatrices: THREE.Matrix4[] = [];
    const crownMatrices: THREE.Matrix4[] = [];
    const topCapMatrices: THREE.Matrix4[] = [];

    const dummy = new THREE.Object3D();

    // 3. Build Wall Bodies with Openings and Collision Center Offset
    for (const wall of walls) {
      const isCurrentFloor = wall.floor === currentFloor;
      const isBelow = wall.floor < currentFloor;

      const dx = wall.x2 - wall.x1;
      const dz = wall.z2 - wall.z1;
      const totalLength = Math.hypot(dx, dz);
      if (totalLength < 0.05) continue;

      const ux = dx / totalLength;
      const uz = dz / totalLength;
      const nx = -uz;
      const nz = ux;
      const angle = Math.atan2(dz, dx);

      const thickness = wall.thickness || 0.22;
      const halfThick = thickness / 2;
      const floorBaseY = (wall.floor - 1) * 3;

      const { height: wallHeight } = computeWallHeight(wall);
      let opacity = 1.0;
      let transparent = false;

      if (isBelow) {
        opacity = 0.45;
        transparent = true;
      }

      // Walls now extend seamlessly to endpoints without thick corner posts
      const effectiveStart = 0;
      const effectiveEnd = totalLength;
      if (effectiveEnd <= effectiveStart + 0.02) continue;

      const wallGroup = new THREE.Group();
      wallGroup.userData = { type: 'wall', data: wall };

      const wallMat = getWallMaterial(wall.material || 'white').clone() as THREE.MeshStandardMaterial;
      if (transparent) {
        wallMat.transparent = true;
        wallMat.opacity = opacity;
      }

      // Find doors and windows intersecting this wall
      const openings: WallOpening[] = [];
      if (wallHeight > 1.2) {
        // Doors
        for (const door of doors) {
          if (door.floor !== wall.floor) continue;
          const deltaX = door.x - wall.x1;
          const deltaZ = door.z - wall.z1;
          const t = deltaX * ux + deltaZ * uz;
          const distPerp = Math.abs(deltaX * nx + deltaZ * nz);

          if (distPerp < 0.45 && t >= effectiveStart - 0.2 && t <= effectiveEnd + 0.2) {
            const openStart = Math.max(effectiveStart, t - 0.52);
            const openEnd = Math.min(effectiveEnd, t + 0.52);
            if (openEnd > openStart + 0.1) {
              openings.push({ start: openStart, end: openEnd, type: 'door' });
            }
          }
        }

        // Windows
        for (const win of windows) {
          if (win.floor !== wall.floor) continue;
          const deltaX = win.x - wall.x1;
          const deltaZ = win.z - wall.z1;
          const t = deltaX * ux + deltaZ * uz;
          const distPerp = Math.abs(deltaX * nx + deltaZ * nz);

          if (distPerp < 0.45 && t >= effectiveStart - 0.2 && t <= effectiveEnd + 0.2) {
            const openStart = Math.max(effectiveStart, t - 0.62);
            const openEnd = Math.min(effectiveEnd, t + 0.62);
            if (openEnd > openStart + 0.1) {
              openings.push({ start: openStart, end: openEnd, type: 'window' });
            }
          }
        }
      }

      openings.sort((a, b) => a.start - b.start);

      // Merge overlapping openings
      const mergedOpenings: WallOpening[] = [];
      for (const op of openings) {
        if (mergedOpenings.length === 0) {
          mergedOpenings.push(op);
        } else {
          const last = mergedOpenings[mergedOpenings.length - 1];
          if (op.start <= last.end + 0.05) {
            last.end = Math.max(last.end, op.end);
          } else {
            mergedOpenings.push(op);
          }
        }
      }

      // Helper function to build a segment
      const addSegment = (tStart: number, tEnd: number, yBottom: number, yTop: number, isSolid: boolean) => {
        const segLen = tEnd - tStart;
        const segH = yTop - yBottom;
        if (segLen < 0.02 || segH < 0.02) return;

        const tMid = tStart + segLen / 2;
        const posX = wall.x1 + ux * tMid;
        const posZ = wall.z1 + uz * tMid;
        const posY = floorBaseY + yBottom + segH / 2;

        const geo = this.createUnifiedBoxGeometry(segLen, segH, thickness, tStart, yBottom);
        const mesh = new THREE.Mesh(geo, wallMat);
        mesh.position.set(posX, posY, posZ);
        mesh.rotation.y = -angle;
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        wallGroup.add(mesh);

        // Baseboard trim transform
        if (yBottom === 0 && wallHeight > 0.4) {
          const baseH = 0.12;
          dummy.position.set(posX, floorBaseY + baseH / 2, posZ);
          dummy.rotation.set(0, -angle, 0);
          dummy.scale.set(segLen, baseH, thickness + 0.015);
          dummy.updateMatrix();
          baseboardMatrices.push(dummy.matrix.clone());
        }

        // Crown molding trim transform (if wall reaches full height)
        if (yTop >= wallHeight && wallHeight >= 2.4) {
          const crownH = 0.06;
          dummy.position.set(posX, floorBaseY + wallHeight - crownH / 2, posZ);
          dummy.rotation.set(0, -angle, 0);
          dummy.scale.set(segLen, crownH, thickness + 0.015);
          dummy.updateMatrix();
          crownMatrices.push(dummy.matrix.clone());
        }

        // Dark Slate Top Capping Trim (The Sims Mobile signature aesthetic)
        if (yTop >= wallHeight) {
          const capH = 0.05;
          dummy.position.set(posX, floorBaseY + wallHeight + capH / 2, posZ);
          dummy.rotation.set(0, -angle, 0);
          dummy.scale.set(segLen + 0.01, capH, thickness + 0.025);
          dummy.updateMatrix();
          topCapMatrices.push(dummy.matrix.clone());
        }
      };

      // Generate segments with cutouts
      let curT = effectiveStart;
      for (const op of mergedOpenings) {
        if (op.start > curT + 0.01) {
          addSegment(curT, op.start, 0, wallHeight, true);
        }

        if (op.type === 'door') {
          // Empty space from 0 to 2.25m, lintel block above
          if (wallHeight > 2.25) {
            addSegment(op.start, op.end, 2.25, wallHeight, false);
          }
        } else if (op.type === 'window') {
          // Sill below window
          addSegment(op.start, op.end, 0, Math.min(0.65, wallHeight), false);
          // Lintel above window
          if (wallHeight > 1.95) {
            addSegment(op.start, op.end, 1.95, wallHeight, false);
          }
        }

        curT = op.end;
      }

      if (curT < effectiveEnd - 0.01) {
        addSegment(curT, effectiveEnd, 0, wallHeight, true);
      }

      rootGroup.add(wallGroup);
    }

    // 4. Create InstancedMeshes for Architectural Trims (Baseboard, Crown, Capping)
    const unitBoxGeo = new THREE.BoxGeometry(1, 1, 1);

    // C. Top Capping Trims InstancedMesh
    if (topCapMatrices.length > 0) {
      const instTopCap = new THREE.InstancedMesh(unitBoxGeo, this.topCapMat, topCapMatrices.length);
      instTopCap.castShadow = true;
      for (let i = 0; i < topCapMatrices.length; i++) {
        instTopCap.setMatrixAt(i, topCapMatrices[i]);
      }
      instTopCap.instanceMatrix.needsUpdate = true;
      rootGroup.add(instTopCap);
    }

    // D. Baseboard Trims InstancedMesh
    if (baseboardMatrices.length > 0) {
      const instBaseboard = new THREE.InstancedMesh(unitBoxGeo, this.baseboardMat, baseboardMatrices.length);
      for (let i = 0; i < baseboardMatrices.length; i++) {
        instBaseboard.setMatrixAt(i, baseboardMatrices[i]);
      }
      instBaseboard.instanceMatrix.needsUpdate = true;
      rootGroup.add(instBaseboard);
    }

    // E. Crown Molding Trims InstancedMesh
    if (crownMatrices.length > 0) {
      const instCrown = new THREE.InstancedMesh(unitBoxGeo, this.crownMat, crownMatrices.length);
      for (let i = 0; i < crownMatrices.length; i++) {
        instCrown.setMatrixAt(i, crownMatrices[i]);
      }
      instCrown.instanceMatrix.needsUpdate = true;
      rootGroup.add(instCrown);
    }

    return rootGroup;
  }
}
