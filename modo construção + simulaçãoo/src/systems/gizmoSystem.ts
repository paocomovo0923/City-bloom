import * as THREE from 'three';
import { Roof, Room, Wall } from '../types/sims';

export type GizmoHandleType =
  // Roof handles (matching Image 2)
  | 'roof_height'
  | 'roof_width_pos'
  | 'roof_width_neg'
  | 'roof_depth_pos'
  | 'roof_depth_neg'
  | 'roof_curve'
  // Room handles (matching Image 1)
  | 'room_push_pos_x'
  | 'room_push_neg_x'
  | 'room_push_pos_z'
  | 'room_push_neg_z'
  | 'room_height'
  // Wall handles
  | 'wall_push'
  | 'wall_end_start'
  | 'wall_end_finish';

export interface GizmoDragEvent {
  handleType: GizmoHandleType;
  targetId: string;
  deltaX: number;
  deltaY: number;
  deltaZ: number;
  totalDistance: number;
}

/**
 * Procedural 3D Gizmo System for The Sims 4 Style Build Mode.
 * Renders stylized 3D directional arrows, curvature balls, and height handles
 * matching the user's reference images.
 */
export class GizmoSystem {
  public gizmoGroup: THREE.Group = new THREE.Group();
  private highlightedMesh: THREE.Mesh | null = null;
  private originalColor: THREE.Color = new THREE.Color();

  // Materials
  private whiteArrowMat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    emissive: 0x222222,
    roughness: 0.2,
    metalness: 0.1,
  });

  private goldArrowMat = new THREE.MeshStandardMaterial({
    color: 0xf59e0b,
    emissive: 0x451a03,
    roughness: 0.3,
    metalness: 0.2,
  });

  private whiteSphereMat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    emissive: 0x333333,
    roughness: 0.2,
    metalness: 0.1,
  });

  private borderMat = new THREE.MeshBasicMaterial({
    color: 0x1e293b,
  });

  constructor() {
    this.gizmoGroup.name = 'SimsGizmoGroup';
  }

  /**
   * Helper to build a stylized The Sims conical 3D arrow with shaft.
   */
  private createArrowMesh(
    length: number = 0.8,
    headRadius: number = 0.28,
    headLength: number = 0.45,
    material: THREE.Material
  ): THREE.Group {
    const arrowGroup = new THREE.Group();

    // Shaft
    const shaftGeo = new THREE.CylinderGeometry(0.08, 0.08, length - headLength, 16);
    shaftGeo.translate(0, (length - headLength) / 2, 0);
    const shaft = new THREE.Mesh(shaftGeo, material);
    arrowGroup.add(shaft);

    // Cone Head
    const headGeo = new THREE.ConeGeometry(headRadius, headLength, 16);
    headGeo.translate(0, length - headLength / 2, 0);
    const head = new THREE.Mesh(headGeo, material);
    arrowGroup.add(head);

    return arrowGroup;
  }

  /**
   * Builds The Sims 4 Roof Gizmo (Matching Image 2).
   */
  public buildRoofGizmo(roof: Roof, floorBaseY: number): THREE.Group {
    this.clear();
    const group = new THREE.Group();
    group.name = `Gizmo_Roof_${roof.id}`;

    const {
      x,
      z,
      width = 6,
      depth = 6,
      height = 2.2,
      overhang = 0.35,
    } = roof;

    const roofBaseY = floorBaseY + 3.0;
    const halfW = width / 2 + overhang;
    const halfD = depth / 2 + overhang;
    const h = Math.max(0.6, height);

    // 1. Top Upward Vertical Arrow (Roof Pitch / Height)
    const topArrow = this.createArrowMesh(1.1, 0.32, 0.55, this.whiteArrowMat.clone());
    topArrow.position.set(x, roofBaseY + h + 0.1, z);
    topArrow.userData = {
      isGizmo: true,
      handleType: 'roof_height' as GizmoHandleType,
      targetId: roof.id,
    };
    group.add(topArrow);

    // 2. Four Eave Horizontal Directional Arrows (+X, -X, +Z, -Z)
    // +X (Right)
    const posXArrow = this.createArrowMesh(0.9, 0.26, 0.45, this.whiteArrowMat.clone());
    posXArrow.position.set(x + halfW + 0.1, roofBaseY + 0.1, z);
    posXArrow.rotation.z = -Math.PI / 2;
    posXArrow.userData = {
      isGizmo: true,
      handleType: 'roof_width_pos' as GizmoHandleType,
      targetId: roof.id,
    };
    group.add(posXArrow);

    // -X (Left)
    const negXArrow = this.createArrowMesh(0.9, 0.26, 0.45, this.whiteArrowMat.clone());
    negXArrow.position.set(x - halfW - 0.1, roofBaseY + 0.1, z);
    negXArrow.rotation.z = Math.PI / 2;
    negXArrow.userData = {
      isGizmo: true,
      handleType: 'roof_width_neg' as GizmoHandleType,
      targetId: roof.id,
    };
    group.add(negXArrow);

    // +Z (Back)
    const posZArrow = this.createArrowMesh(0.9, 0.26, 0.45, this.whiteArrowMat.clone());
    posZArrow.position.set(x, roofBaseY + 0.1, z + halfD + 0.1);
    posZArrow.rotation.x = Math.PI / 2;
    posZArrow.userData = {
      isGizmo: true,
      handleType: 'roof_depth_pos' as GizmoHandleType,
      targetId: roof.id,
    };
    group.add(posZArrow);

    // -Z (Front)
    const negZArrow = this.createArrowMesh(0.9, 0.26, 0.45, this.whiteArrowMat.clone());
    negZArrow.position.set(x, roofBaseY + 0.1, z - halfD - 0.1);
    negZArrow.rotation.x = -Math.PI / 2;
    negZArrow.userData = {
      isGizmo: true,
      handleType: 'roof_depth_neg' as GizmoHandleType,
      targetId: roof.id,
    };
    group.add(negZArrow);

    // 3. White Spherical Curvature Handles on the slopes (Matching Image 2 white balls!)
    const curveSphereGeo = new THREE.SphereGeometry(0.24, 24, 24);
    const slopeSphere1 = new THREE.Mesh(curveSphereGeo, this.whiteSphereMat.clone());
    slopeSphere1.position.set(x, roofBaseY + h * 0.55, z - halfD * 0.45);
    slopeSphere1.userData = {
      isGizmo: true,
      handleType: 'roof_curve' as GizmoHandleType,
      targetId: roof.id,
    };
    group.add(slopeSphere1);

    const slopeSphere2 = new THREE.Mesh(curveSphereGeo, this.whiteSphereMat.clone());
    slopeSphere2.position.set(x, roofBaseY + h * 0.55, z + halfD * 0.45);
    slopeSphere2.userData = {
      isGizmo: true,
      handleType: 'roof_curve' as GizmoHandleType,
      targetId: roof.id,
    };
    group.add(slopeSphere2);

    this.gizmoGroup.add(group);
    return group;
  }

  /**
   * Builds The Sims 4 Room Block Gizmos (Matching Image 1).
   * Yellow/Gold stylized 3D directional arrows for pushing/pulling sides and vertical height.
   */
  public buildRoomGizmo(room: Room, floorBaseY: number): THREE.Group {
    this.clear();
    const group = new THREE.Group();
    group.name = `Gizmo_Room_${room.id}`;

    const { minX, maxX, minZ, maxZ } = room.bounds;
    const midX = (minX + maxX) / 2;
    const midZ = (minZ + maxZ) / 2;
    const wallH = 3.0;

    // Glowing perimeter outline box on floor (The Sims 4 room highlight)
    const outlineGroup = new THREE.Group();
    const boxW = maxX - minX;
    const boxD = maxZ - minZ;

    const linePoints = [
      new THREE.Vector3(minX, floorBaseY + 0.05, minZ),
      new THREE.Vector3(maxX, floorBaseY + 0.05, minZ),
      new THREE.Vector3(maxX, floorBaseY + 0.05, maxZ),
      new THREE.Vector3(minX, floorBaseY + 0.05, maxZ),
      new THREE.Vector3(minX, floorBaseY + 0.05, minZ),
    ];
    const lineGeo = new THREE.BufferGeometry().setFromPoints(linePoints);
    const lineMat = new THREE.LineBasicMaterial({ color: 0xf59e0b, linewidth: 3 });
    const outlineLine = new THREE.Line(lineGeo, lineMat);
    outlineGroup.add(outlineLine);
    group.add(outlineGroup);

    // 1. Four Golden Push/Pull Arrows on Room Faces (Image 1 "ROOM BLOCKS")
    // East (+X)
    const eastArrow = this.createArrowMesh(1.0, 0.32, 0.5, this.goldArrowMat.clone());
    eastArrow.position.set(maxX + 0.15, floorBaseY + 1.2, midZ);
    eastArrow.rotation.z = -Math.PI / 2;
    eastArrow.userData = {
      isGizmo: true,
      handleType: 'room_push_pos_x' as GizmoHandleType,
      targetId: room.id,
    };
    group.add(eastArrow);

    // West (-X)
    const westArrow = this.createArrowMesh(1.0, 0.32, 0.5, this.goldArrowMat.clone());
    westArrow.position.set(minX - 0.15, floorBaseY + 1.2, midZ);
    westArrow.rotation.z = Math.PI / 2;
    westArrow.userData = {
      isGizmo: true,
      handleType: 'room_push_neg_x' as GizmoHandleType,
      targetId: room.id,
    };
    group.add(westArrow);

    // South (+Z)
    const southArrow = this.createArrowMesh(1.0, 0.32, 0.5, this.goldArrowMat.clone());
    southArrow.position.set(midX, floorBaseY + 1.2, maxZ + 0.15);
    southArrow.rotation.x = Math.PI / 2;
    southArrow.userData = {
      isGizmo: true,
      handleType: 'room_push_pos_z' as GizmoHandleType,
      targetId: room.id,
    };
    group.add(southArrow);

    // North (-Z)
    const northArrow = this.createArrowMesh(1.0, 0.32, 0.5, this.goldArrowMat.clone());
    northArrow.position.set(midX, floorBaseY + 1.2, minZ - 0.15);
    northArrow.rotation.x = -Math.PI / 2;
    northArrow.userData = {
      isGizmo: true,
      handleType: 'room_push_neg_z' as GizmoHandleType,
      targetId: room.id,
    };
    group.add(northArrow);

    // 2. Vertical Height Arrow in Center (Image 1 double/height arrow)
    const heightArrow = this.createArrowMesh(1.2, 0.36, 0.55, this.goldArrowMat.clone());
    heightArrow.position.set(midX, floorBaseY + wallH + 0.2, midZ);
    heightArrow.userData = {
      isGizmo: true,
      handleType: 'room_height' as GizmoHandleType,
      targetId: room.id,
    };
    group.add(heightArrow);

    this.gizmoGroup.add(group);
    return group;
  }

  /**
   * Builds Wall Gizmo for individual wall editing.
   */
  public buildWallGizmo(wall: Wall, floorBaseY: number): THREE.Group {
    this.clear();
    const group = new THREE.Group();
    group.name = `Gizmo_Wall_${wall.id}`;

    const midX = (wall.x1 + wall.x2) / 2;
    const midZ = (wall.z1 + wall.z2) / 2;
    const dx = wall.x2 - wall.x1;
    const dz = wall.z2 - wall.z1;
    const len = Math.hypot(dx, dz);
    const ux = dx / (len || 1);
    const uz = dz / (len || 1);
    const nx = -uz;
    const nz = ux;

    const angle = Math.atan2(dz, dx);

    // 1. Perpendicular Push/Pull Arrow (along normal)
    const pushArrow = this.createArrowMesh(0.9, 0.28, 0.45, this.goldArrowMat.clone());
    pushArrow.position.set(midX + nx * 0.25, floorBaseY + 1.4, midZ + nz * 0.25);
    pushArrow.rotation.y = -Math.atan2(nz, nx) + Math.PI / 2;
    pushArrow.rotation.z = -Math.PI / 2;
    pushArrow.userData = {
      isGizmo: true,
      handleType: 'wall_push' as GizmoHandleType,
      targetId: wall.id,
    };
    group.add(pushArrow);

    // 2. Wall Length End Spheres/Handles
    const endGeo = new THREE.SphereGeometry(0.2, 16, 16);
    const startHandle = new THREE.Mesh(endGeo, this.goldArrowMat.clone());
    startHandle.position.set(wall.x1, floorBaseY + 1.4, wall.z1);
    startHandle.userData = {
      isGizmo: true,
      handleType: 'wall_end_start' as GizmoHandleType,
      targetId: wall.id,
    };
    group.add(startHandle);

    const finishHandle = new THREE.Mesh(endGeo, this.goldArrowMat.clone());
    finishHandle.position.set(wall.x2, floorBaseY + 1.4, wall.z2);
    finishHandle.userData = {
      isGizmo: true,
      handleType: 'wall_end_finish' as GizmoHandleType,
      targetId: wall.id,
    };
    group.add(finishHandle);

    this.gizmoGroup.add(group);
    return group;
  }

  /**
   * Clears all currently rendered gizmos.
   */
  public clear() {
    while (this.gizmoGroup.children.length > 0) {
      const child = this.gizmoGroup.children[0];
      this.gizmoGroup.remove(child);
    }
    this.highlightedMesh = null;
  }

  /**
   * Highlights a hovered gizmo handle.
   */
  public highlightHandle(mesh: THREE.Mesh | null) {
    if (this.highlightedMesh === mesh) return;

    if (this.highlightedMesh && (this.highlightedMesh.material as THREE.MeshStandardMaterial).emissive) {
      (this.highlightedMesh.material as THREE.MeshStandardMaterial).emissive.copy(this.originalColor);
    }

    this.highlightedMesh = mesh;

    if (mesh && (mesh.material as THREE.MeshStandardMaterial).emissive) {
      this.originalColor.copy((mesh.material as THREE.MeshStandardMaterial).emissive);
      // Bright cyan/gold highlight
      (mesh.material as THREE.MeshStandardMaterial).emissive.setHex(0x06b6d4);
    }
  }
}
