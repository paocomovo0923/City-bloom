import * as THREE from 'three';
import { Roof } from '../types/sims';
import { getRoofMaterial } from '../utils/proceduralTextures';

/**
 * Procedural 3D Roof Mesh Builder.
 * Generates Hipped, Gabled, Half-Gabled, Mansard, and Flat roofs
 * with authentic The Sims 4 styling, eave overhangs, fascia trims, and curvature support.
 */
export class RoofMeshBuilder {
  private trimMaterial: THREE.MeshStandardMaterial;
  private ridgeMaterial: THREE.MeshStandardMaterial;

  constructor() {
    // White/cream fascia trim (beiral) matching The Sims 4 reference in image.png #2
    this.trimMaterial = new THREE.MeshStandardMaterial({
      color: 0xf1f5f9,
      roughness: 0.35,
      metalness: 0.05,
    });
    // Dark ridge cap material
    this.ridgeMaterial = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      roughness: 0.4,
      metalness: 0.1,
    });
  }

  /**
   * Builds 3D roof group for a given Roof data object.
   */
  public buildRoof(roof: Roof, floorBaseY: number): THREE.Group {
    const group = new THREE.Group();
    group.name = `Roof_${roof.id}`;
    group.userData = { type: 'roof', data: roof };

    const {
      type = 'hipped',
      x,
      z,
      width = 6,
      depth = 6,
      height = 2.2,
      pitchCurve = 0,
      overhang = 0.35,
      material = 'roof_shingle_dark',
      rotation = 0,
    } = roof;

    const roofMat = getRoofMaterial(material);

    // Group position and rotation
    group.position.set(x, floorBaseY + 3.0, z); // Sits on top of the walls of current floor (3m height)
    group.rotation.y = THREE.MathUtils.degToRad(rotation);

    // Effective dimensions with eave overhang
    const halfW = width / 2 + overhang;
    const halfD = depth / 2 + overhang;
    const h = Math.max(0.6, height);

    switch (type) {
      case 'hipped':
        this.buildHippedRoof(group, halfW, halfD, h, pitchCurve, roofMat);
        break;
      case 'gabled':
        this.buildGabledRoof(group, halfW, halfD, h, pitchCurve, roofMat);
        break;
      case 'half_gabled':
        this.buildHalfGabledRoof(group, halfW, halfD, h, pitchCurve, roofMat);
        break;
      case 'mansard':
        this.buildMansardRoof(group, halfW, halfD, h, roofMat);
        break;
      case 'flat':
      default:
        this.buildFlatRoof(group, halfW, halfD, roofMat);
        break;
    }

    // Add perimeter Fascia Trim (Beiral com moldura branca/clara estilo The Sims 4)
    this.buildFasciaTrim(group, halfW, halfD, 0.14, 0.08);

    return group;
  }

  /**
   * Hipped Roof (Quatro Águas / Piramidal) - Matches Image 2!
   */
  private buildHippedRoof(
    group: THREE.Group,
    halfW: number,
    halfD: number,
    h: number,
    curve: number,
    roofMat: THREE.Material
  ) {
    // 4 triangular or trapezoidal sloping planes meeting at a central ridge or apex
    const isSquare = Math.abs(halfW - halfD) < 0.1;
    const ridgeHalfLen = isSquare ? 0 : Math.max(0, Math.abs(halfW - halfD));
    const ridgeAlongX = halfW >= halfD;

    // Subdivided slope planes so we can apply curvature (curvatura da água)
    const segments = Math.abs(curve) > 0.05 ? 12 : 2;

    const createCurvedSlope = (
      p1: THREE.Vector3,
      p2: THREE.Vector3,
      p3: THREE.Vector3,
      p4: THREE.Vector3
    ) => {
      const geo = new THREE.BufferGeometry();
      const positions: number[] = [];
      const uvs: number[] = [];
      const indices: number[] = [];

      for (let i = 0; i <= segments; i++) {
        const t = i / segments;
        // Apply vertical quadratic arch curvature if curve != 0
        const sag = Math.sin(t * Math.PI) * curve * 0.45;

        // Interpolate left and right edges
        const left = new THREE.Vector3().lerpVectors(p1, p4, t);
        const right = new THREE.Vector3().lerpVectors(p2, p3, t);
        left.y += sag;
        right.y += sag;

        positions.push(left.x, left.y, left.z);
        positions.push(right.x, right.y, right.z);

        uvs.push(0, t * 2);
        uvs.push(2, t * 2);

        if (i < segments) {
          const row1 = i * 2;
          const row2 = (i + 1) * 2;
          indices.push(row1, row1 + 1, row2);
          indices.push(row1 + 1, row2 + 1, row2);
        }
      }

      geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
      geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
      geo.setIndex(indices);
      geo.computeVertexNormals();

      const mesh = new THREE.Mesh(geo, roofMat);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      mesh.userData = { isRoofSurface: true };
      group.add(mesh);
    };

    if (ridgeAlongX) {
      const rX = ridgeHalfLen;
      // Front slope (-Z)
      createCurvedSlope(
        new THREE.Vector3(-halfW, 0, -halfD),
        new THREE.Vector3(halfW, 0, -halfD),
        new THREE.Vector3(rX, h, 0),
        new THREE.Vector3(-rX, h, 0)
      );
      // Back slope (+Z)
      createCurvedSlope(
        new THREE.Vector3(halfW, 0, halfD),
        new THREE.Vector3(-halfW, 0, halfD),
        new THREE.Vector3(-rX, h, 0),
        new THREE.Vector3(rX, h, 0)
      );
      // Left slope (-X)
      createCurvedSlope(
        new THREE.Vector3(-halfW, 0, halfD),
        new THREE.Vector3(-halfW, 0, -halfD),
        new THREE.Vector3(-rX, h, 0),
        new THREE.Vector3(-rX, h, 0)
      );
      // Right slope (+X)
      createCurvedSlope(
        new THREE.Vector3(halfW, 0, -halfD),
        new THREE.Vector3(halfW, 0, halfD),
        new THREE.Vector3(rX, h, 0),
        new THREE.Vector3(rX, h, 0)
      );

      // Central Ridge Cap if prolonged
      if (rX > 0.1) {
        const capGeo = new THREE.BoxGeometry(rX * 2 + 0.1, 0.08, 0.18);
        const capMesh = new THREE.Mesh(capGeo, this.ridgeMaterial);
        capMesh.position.set(0, h + 0.02, 0);
        group.add(capMesh);
      }
    } else {
      const rZ = ridgeHalfLen;
      // Left slope (-X)
      createCurvedSlope(
        new THREE.Vector3(-halfW, 0, halfD),
        new THREE.Vector3(-halfW, 0, -halfD),
        new THREE.Vector3(0, h, -rZ),
        new THREE.Vector3(0, h, rZ)
      );
      // Right slope (+X)
      createCurvedSlope(
        new THREE.Vector3(halfW, 0, -halfD),
        new THREE.Vector3(halfW, 0, halfD),
        new THREE.Vector3(0, h, rZ),
        new THREE.Vector3(0, h, -rZ)
      );
      // Front slope (-Z)
      createCurvedSlope(
        new THREE.Vector3(-halfW, 0, -halfD),
        new THREE.Vector3(halfW, 0, -halfD),
        new THREE.Vector3(0, h, -rZ),
        new THREE.Vector3(0, h, -rZ)
      );
      // Back slope (+Z)
      createCurvedSlope(
        new THREE.Vector3(halfW, 0, halfD),
        new THREE.Vector3(-halfW, 0, halfD),
        new THREE.Vector3(0, h, rZ),
        new THREE.Vector3(0, h, rZ)
      );

      if (rZ > 0.1) {
        const capGeo = new THREE.BoxGeometry(0.18, 0.08, rZ * 2 + 0.1);
        const capMesh = new THREE.Mesh(capGeo, this.ridgeMaterial);
        capMesh.position.set(0, h + 0.02, 0);
        group.add(capMesh);
      }
    }
  }

  /**
   * Gabled Roof (Duas Águas) with triangular gable walls.
   */
  private buildGabledRoof(
    group: THREE.Group,
    halfW: number,
    halfD: number,
    h: number,
    curve: number,
    roofMat: THREE.Material
  ) {
    const segments = Math.abs(curve) > 0.05 ? 12 : 2;

    const createCurvedSlope = (
      p1: THREE.Vector3,
      p2: THREE.Vector3,
      p3: THREE.Vector3,
      p4: THREE.Vector3
    ) => {
      const geo = new THREE.BufferGeometry();
      const positions: number[] = [];
      const uvs: number[] = [];
      const indices: number[] = [];

      for (let i = 0; i <= segments; i++) {
        const t = i / segments;
        const sag = Math.sin(t * Math.PI) * curve * 0.45;

        const left = new THREE.Vector3().lerpVectors(p1, p4, t);
        const right = new THREE.Vector3().lerpVectors(p2, p3, t);
        left.y += sag;
        right.y += sag;

        positions.push(left.x, left.y, left.z);
        positions.push(right.x, right.y, right.z);

        uvs.push(0, t * 2);
        uvs.push(2, t * 2);

        if (i < segments) {
          const row1 = i * 2;
          const row2 = (i + 1) * 2;
          indices.push(row1, row1 + 1, row2);
          indices.push(row1 + 1, row2 + 1, row2);
        }
      }

      geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
      geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
      geo.setIndex(indices);
      geo.computeVertexNormals();

      const mesh = new THREE.Mesh(geo, roofMat);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      mesh.userData = { isRoofSurface: true };
      group.add(mesh);
    };

    // Slope 1 (front: -Z to ridge at Z=0)
    createCurvedSlope(
      new THREE.Vector3(-halfW, 0, -halfD),
      new THREE.Vector3(halfW, 0, -halfD),
      new THREE.Vector3(halfW, h, 0),
      new THREE.Vector3(-halfW, h, 0)
    );

    // Slope 2 (back: +Z to ridge at Z=0)
    createCurvedSlope(
      new THREE.Vector3(halfW, 0, halfD),
      new THREE.Vector3(-halfW, 0, halfD),
      new THREE.Vector3(-halfW, h, 0),
      new THREE.Vector3(halfW, h, 0)
    );

    // Triangular Gable Walls at -X and +X ends
    const gableGeo = new THREE.BufferGeometry();
    const gVerts = [
      // Left gable (-X)
      -halfW + 0.1, 0, -halfD + 0.1,
      -halfW + 0.1, 0, halfD - 0.1,
      -halfW + 0.1, h - 0.05, 0,
      // Right gable (+X)
      halfW - 0.1, 0, halfD - 0.1,
      halfW - 0.1, 0, -halfD + 0.1,
      halfW - 0.1, h - 0.05, 0,
    ];
    gableGeo.setAttribute('position', new THREE.Float32BufferAttribute(gVerts, 3));
    gableGeo.computeVertexNormals();
    const gableMesh = new THREE.Mesh(gableGeo, this.trimMaterial);
    group.add(gableMesh);

    // Ridge Cap along apex
    const capGeo = new THREE.BoxGeometry(halfW * 2 + 0.2, 0.08, 0.2);
    const capMesh = new THREE.Mesh(capGeo, this.ridgeMaterial);
    capMesh.position.set(0, h + 0.02, 0);
    group.add(capMesh);
  }

  /**
   * Half-Gabled / Skillion Roof (Meia Água).
   */
  private buildHalfGabledRoof(
    group: THREE.Group,
    halfW: number,
    halfD: number,
    h: number,
    curve: number,
    roofMat: THREE.Material
  ) {
    const geo = new THREE.BufferGeometry();
    const positions: number[] = [];
    const uvs: number[] = [];
    const indices: number[] = [];
    const segments = 10;

    for (let i = 0; i <= segments; i++) {
      const t = i / segments;
      const zVal = -halfD + t * (halfD * 2);
      const yVal = t * h + Math.sin(t * Math.PI) * curve * 0.4;

      positions.push(-halfW, yVal, zVal);
      positions.push(halfW, yVal, zVal);

      uvs.push(0, t * 2);
      uvs.push(2, t * 2);

      if (i < segments) {
        const row1 = i * 2;
        const row2 = (i + 1) * 2;
        indices.push(row1, row1 + 1, row2);
        indices.push(row1 + 1, row2 + 1, row2);
      }
    }

    geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
    geo.setIndex(indices);
    geo.computeVertexNormals();

    const mesh = new THREE.Mesh(geo, roofMat);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    group.add(mesh);

    // Back wall
    const backGeo = new THREE.PlaneGeometry(halfW * 2, h);
    const backMesh = new THREE.Mesh(backGeo, this.trimMaterial);
    backMesh.position.set(0, h / 2, halfD);
    group.add(backMesh);
  }

  /**
   * Mansard Roof (Dual Pitch).
   */
  private buildMansardRoof(
    group: THREE.Group,
    halfW: number,
    halfD: number,
    h: number,
    roofMat: THREE.Material
  ) {
    const curbH = h * 0.65;
    const curbInsetW = halfW * 0.35;
    const curbInsetD = halfD * 0.35;

    // Lower steep slopes (Hipped style)
    this.buildHippedRoof(group, halfW, halfD, curbH, 0, roofMat);

    // Upper shallow deck/roof
    const upperW = halfW - curbInsetW;
    const upperD = halfD - curbInsetD;
    const upperGroup = new THREE.Group();
    upperGroup.position.set(0, curbH, 0);
    this.buildHippedRoof(upperGroup, upperW, upperD, h - curbH, 0, roofMat);
    group.add(upperGroup);
  }

  /**
   * Modern Flat Roof with parapet perimeter.
   */
  private buildFlatRoof(
    group: THREE.Group,
    halfW: number,
    halfD: number,
    roofMat: THREE.Material
  ) {
    // Flat roof deck
    const deckGeo = new THREE.BoxGeometry(halfW * 2, 0.12, halfD * 2);
    const deckMesh = new THREE.Mesh(deckGeo, roofMat);
    deckMesh.position.set(0, 0.06, 0);
    deckMesh.receiveShadow = true;
    group.add(deckMesh);

    // Parapet borders
    const parapetH = 0.45;
    const parapetThick = 0.22;

    const createParapetWall = (w: number, d: number, xPos: number, zPos: number) => {
      const pGeo = new THREE.BoxGeometry(w, parapetH, d);
      const pMesh = new THREE.Mesh(pGeo, this.trimMaterial);
      pMesh.position.set(xPos, parapetH / 2 + 0.1, zPos);
      pMesh.castShadow = true;
      group.add(pMesh);
    };

    createParapetWall(halfW * 2, parapetThick, 0, -halfD + parapetThick / 2);
    createParapetWall(halfW * 2, parapetThick, 0, halfD - parapetThick / 2);
    createParapetWall(parapetThick, halfD * 2 - parapetThick * 2, -halfW + parapetThick / 2, 0);
    createParapetWall(parapetThick, halfD * 2 - parapetThick * 2, halfW - parapetThick / 2, 0);
  }

  /**
   * Fascia Trim (Beiral com moldura) along the roof base.
   */
  private buildFasciaTrim(
    group: THREE.Group,
    halfW: number,
    halfD: number,
    height: number,
    depth: number
  ) {
    const trimGroup = new THREE.Group();
    trimGroup.name = 'FasciaTrim';

    // Front & Back
    const fbGeo = new THREE.BoxGeometry(halfW * 2 + depth * 2, height, depth);
    const frontTrim = new THREE.Mesh(fbGeo, this.trimMaterial);
    frontTrim.position.set(0, -height / 2, -halfD - depth / 2);
    trimGroup.add(frontTrim);

    const backTrim = new THREE.Mesh(fbGeo, this.trimMaterial);
    backTrim.position.set(0, -height / 2, halfD + depth / 2);
    trimGroup.add(backTrim);

    // Left & Right
    const lrGeo = new THREE.BoxGeometry(depth, height, halfD * 2);
    const leftTrim = new THREE.Mesh(lrGeo, this.trimMaterial);
    leftTrim.position.set(-halfW - depth / 2, -height / 2, 0);
    trimGroup.add(leftTrim);

    const rightTrim = new THREE.Mesh(lrGeo, this.trimMaterial);
    rightTrim.position.set(halfW + depth / 2, -height / 2, 0);
    trimGroup.add(rightTrim);

    group.add(trimGroup);
  }
}
