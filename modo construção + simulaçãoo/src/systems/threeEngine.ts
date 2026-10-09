import * as THREE from 'three';
import {
  Wall,
  Door,
  WindowItem,
  FurnitureObject,
  Room,
  Roof,
  RoofType,
  BuildToolMode,
  CameraViewMode,
  WallCutMode,
} from '../types/sims';
import { getFloorMaterial, getWallMaterial, getGrassTexture } from '../utils/proceduralTextures';
import {
  createFurnitureMesh,
  createDoorMesh,
  createWindowMesh,
  getFurnitureFootprint,
} from '../utils/furnitureModels';
import { buildRoomFloorGeometry } from './roomDetection';
import { WallMeshBuilder } from './wallMeshBuilder';
import { RoofMeshBuilder } from './roofMeshBuilder';
import { GizmoSystem, GizmoHandleType } from './gizmoSystem';

export interface EngineCallbacks {
  onWallCreated?: (wall: { x1: number; z1: number; x2: number; z2: number }) => void;
  onWallsCreatedBatch?: (walls: Array<{ x1: number; z1: number; x2: number; z2: number }>) => void;
  onContinuousWallStep?: (wall: { x1: number; z1: number; x2: number; z2: number }) => void;
  onObjectPlaced?: (object: { type: string; name: string; x: number; z: number; rotation: number }) => void;
  onDoorPlaced?: (door: { x: number; z: number; rotation: number; wallId?: string }) => void;
  onWindowPlaced?: (win: { x: number; z: number; rotation: number; wallId?: string }) => void;
  onRoofPlaced?: (roof: { type: RoofType; x: number; z: number; width: number; depth: number; height: number; material: string }) => void;
  onObjectSelected?: (obj: FurnitureObject | null, screenPos?: { x: number; y: number }) => void;
  onObjectPositionUpdate?: (obj: FurnitureObject, screenPos: { x: number; y: number }) => void;
  onWallClicked?: (wall: Wall) => void;
  onRoomClicked?: (room: Room) => void;
  onRoofClicked?: (roof: Roof) => void;
  onRoofUpdated?: (roof: Roof) => void;
  onRoomResized?: (room: Room, newBounds: { minX: number; maxX: number; minZ: number; maxZ: number }) => void;
  onWallResized?: (wall: Wall, updates: Partial<Wall>) => void;
  onFloorTilePlaced?: (tile: { x: number; z: number; floor: number; material: string }) => void;
  onItemDeleted?: (type: 'wall' | 'object' | 'door' | 'window' | 'roof', id: string) => void;
  onLengthUpdate?: (length: number | null, dimensionText?: string) => void;
}

export class ThreeSimsEngine {
  public container: HTMLElement;
  public scene: THREE.Scene;
  public camera: THREE.PerspectiveCamera;
  public renderer: THREE.WebGLRenderer;
  private animFrameId: number = 0;
  private isPaused: boolean = false;

  // Camera navigation state
  public viewMode: CameraViewMode = 'free';
  private cameraTarget: THREE.Vector3 = new THREE.Vector3(0, 0, 0);
  private cameraSpherical: THREE.Spherical = new THREE.Spherical(28, Math.PI / 3.5, Math.PI / 4);
  private isPointerDown: boolean = false;
  private pointerButton: number = -1;
  private prevPointerX: number = 0;
  private prevPointerY: number = 0;
  private touchDistance: number = 0;
  private touchAngle: number = 0;
  private twoFingerPanStart: { x: number; y: number } | null = null;

  // Raycasting & Interaction
  private raycaster: THREE.Raycaster = new THREE.Raycaster();
  private pointer: THREE.Vector2 = new THREE.Vector2();
  private groundPlane: THREE.Plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
  private raycastPlaneMesh: THREE.Mesh;

  // Engine state
  public currentFloor: number = 1;
  public toolMode: BuildToolMode = 'none';
  public selectedCatalogItem: any = null;
  public selectedObject: FurnitureObject | null = null;
  public wallCutMode: WallCutMode = 'cutaway';
  private callbacks: EngineCallbacks = {};

  // Wall Building State
  private wallStartPoint: { x: number; z: number } | null = null;
  private ghostWallGroup: THREE.Group = new THREE.Group();

  // Furniture / Door / Window Ghost Placement
  private ghostObjectGroup: THREE.Group | null = null;
  private ghostRotation: number = 0;
  private ghostPosition: THREE.Vector3 = new THREE.Vector3();
  private isPlacementValid: boolean = true;

  // Scene Objects Groups
  private terrainGroup: THREE.Group = new THREE.Group();
  private gridGroup: THREE.Group = new THREE.Group();
  private wallsGroup: THREE.Group = new THREE.Group();
  private roomsGroup: THREE.Group = new THREE.Group();
  private doorsGroup: THREE.Group = new THREE.Group();
  private windowsGroup: THREE.Group = new THREE.Group();
  private furnitureGroup: THREE.Group = new THREE.Group();
  private roofsGroup: THREE.Group = new THREE.Group();
  private selectionHelper: THREE.BoxHelper | null = null;

  // Roof & Gizmo Builders
  private roofBuilder: RoofMeshBuilder = new RoofMeshBuilder();
  public gizmoSystem: GizmoSystem = new GizmoSystem();
  public showRoofs: boolean = true;

  // Selected entities for The Sims 4 Style Editing
  public selectedRoof: Roof | null = null;
  public selectedRoom: Room | null = null;
  public selectedWall: Wall | null = null;

  // Gizmo dragging state
  public isDraggingGizmo: boolean = false;
  private activeGizmoHandle: GizmoHandleType | null = null;
  private activeGizmoTargetId: string | null = null;

  // Data cache
  private wallsData: Wall[] = [];
  private roomsData: Room[] = [];
  private doorsData: Door[] = [];
  private windowsData: WindowItem[] = [];
  private objectsData: FurnitureObject[] = [];
  private roofsData: Roof[] = [];

  // Architectural Trims Reusable Materials
  private baseboardMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.35 });
  private crownMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.3 });

  constructor(container: HTMLElement, callbacks: EngineCallbacks = {}) {
    this.container = container;
    this.callbacks = callbacks;

    // Scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x9bd4e4); // Cheerful daytime sky
    this.scene.fog = new THREE.FogExp2(0x9bd4e4, 0.012);

    // Camera
    const aspect = container.clientWidth / container.clientHeight || 1;
    this.camera = new THREE.PerspectiveCamera(45, aspect, 0.5, 200);
    this.updateCameraPosition();

    // Renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(this.renderer.domElement);

    // Invisible Raycast plane at active floor height
    const planeGeo = new THREE.PlaneGeometry(100, 100);
    planeGeo.rotateX(-Math.PI / 2);
    const planeMat = new THREE.MeshBasicMaterial({ visible: false });
    this.raycastPlaneMesh = new THREE.Mesh(planeGeo, planeMat);
    this.scene.add(this.raycastPlaneMesh);

    // Add Scene groups
    this.scene.add(this.terrainGroup);
    this.scene.add(this.gridGroup);
    this.scene.add(this.roomsGroup);
    this.scene.add(this.wallsGroup);
    this.scene.add(this.doorsGroup);
    this.scene.add(this.windowsGroup);
    this.scene.add(this.furnitureGroup);
    this.scene.add(this.roofsGroup);
    this.scene.add(this.gizmoSystem.gizmoGroup);
    this.scene.add(this.ghostWallGroup);

    // Setup Lighting, Terrain & Grid
    this.setupLighting();
    this.buildTerrain();
    this.buildGrid();

    // Input listeners
    this.bindEvents();

    // Start render loop
    this.startAnimationLoop();
  }

  // Backward compatibility getter/setter for cutawayMode
  public get cutawayMode(): boolean {
    return this.wallCutMode === 'cutaway';
  }
  public set cutawayMode(val: boolean) {
    this.wallCutMode = val ? 'cutaway' : 'full';
    this.rebuildWalls();
  }

  public setWallCutMode(mode: WallCutMode) {
    this.wallCutMode = mode;
    this.rebuildWalls();
  }

  private setupLighting() {
    // Ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    this.scene.add(ambientLight);

    // Sun directional light
    const sunLight = new THREE.DirectionalLight(0xfffaed, 1.25);
    sunLight.position.set(20, 35, 20);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 2048;
    sunLight.shadow.mapSize.height = 2048;
    sunLight.shadow.camera.near = 0.5;
    sunLight.shadow.camera.far = 80;
    const d = 16;
    sunLight.shadow.camera.left = -d;
    sunLight.shadow.camera.right = d;
    sunLight.shadow.camera.top = d;
    sunLight.shadow.camera.bottom = -d;
    sunLight.shadow.bias = -0.0003;
    this.scene.add(sunLight);

    // Soft sky hemisphere light
    const hemiLight = new THREE.HemisphereLight(0xbbe1fa, 0x5a7d36, 0.45);
    hemiLight.position.set(0, 40, 0);
    this.scene.add(hemiLight);
  }

  private buildTerrain() {
    this.terrainGroup.clear();

    // Lush lawn grass plane
    const grassGeo = new THREE.PlaneGeometry(36, 36);
    const grassMat = new THREE.MeshStandardMaterial({
      map: getGrassTexture(),
      roughness: 0.9,
      metalness: 0.05,
    });
    const grassMesh = new THREE.Mesh(grassGeo, grassMat);
    grassMesh.rotation.x = -Math.PI / 2;
    grassMesh.position.y = -0.02;
    grassMesh.receiveShadow = true;
    this.terrainGroup.add(grassMesh);

    // Lot boundary curb / sidewalk
    const curbMat = new THREE.MeshStandardMaterial({ color: 0xd6d3d1, roughness: 0.9 });
    const lotSize = 24; // -12 to 12
    const curbThickness = 0.4;
    const curbHeight = 0.08;

    // 4 curbs around lot
    const curbTop = new THREE.Mesh(new THREE.BoxGeometry(lotSize + curbThickness, curbHeight, curbThickness), curbMat);
    curbTop.position.set(0, curbHeight / 2, -lotSize / 2);
    const curbBottom = curbTop.clone();
    curbBottom.position.z = lotSize / 2;

    const curbLeft = new THREE.Mesh(new THREE.BoxGeometry(curbThickness, curbHeight, lotSize), curbMat);
    curbLeft.position.set(-lotSize / 2, curbHeight / 2, 0);
    const curbRight = curbLeft.clone();
    curbRight.position.x = lotSize / 2;

    this.terrainGroup.add(curbTop, curbBottom, curbLeft, curbRight);

    // Decorative hedges / trees on outskirts for Sims neighborhood charm
    const hedgeMat = new THREE.MeshStandardMaterial({ color: 0x3d782e, roughness: 0.7 });
    for (let i = -14; i <= 14; i += 4) {
      if (Math.abs(i) > 2) {
        const bush = new THREE.Mesh(new THREE.DodecahedronGeometry(0.8, 1), hedgeMat);
        bush.position.set(i, 0.7, -13.5);
        bush.castShadow = true;
        this.terrainGroup.add(bush);
      }
    }
  }

  private buildGrid() {
    this.gridGroup.clear();

    // Floor-specific building grid
    const size = 24;
    const divisions = 24;
    const gridHelper = new THREE.GridHelper(size, divisions, 0x4080ff, 0x94a3b8);
    gridHelper.position.y = (this.currentFloor - 1) * 3 + 0.01;
    (gridHelper.material as THREE.Material).opacity = 0.4;
    (gridHelper.material as THREE.Material).transparent = true;
    gridHelper.name = 'gridHelper';
    this.gridGroup.add(gridHelper);

    // Cursor cell highlight
    const cursorGeo = new THREE.PlaneGeometry(1, 1);
    cursorGeo.rotateX(-Math.PI / 2);
    const cursorMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      opacity: 0.4,
      transparent: true,
      side: THREE.DoubleSide,
    });
    const cursorMesh = new THREE.Mesh(cursorGeo, cursorMat);
    cursorMesh.name = 'cursorHighlight';
    cursorMesh.visible = false;
    this.gridGroup.add(cursorMesh);
  }

  public setFloor(floor: number) {
    this.currentFloor = Math.max(1, Math.min(3, floor));
    this.groundPlane.constant = -(this.currentFloor - 1) * 3;
    this.raycastPlaneMesh.position.y = (this.currentFloor - 1) * 3;
    this.buildGrid();
    this.rebuildScene();
  }

  public setToolMode(mode: BuildToolMode, catalogItem: any = null) {
    this.toolMode = mode;
    this.selectedCatalogItem = catalogItem;
    this.wallStartPoint = null;
    this.removeGhostWall();

    if (mode === 'furniture' || mode === 'door' || mode === 'window') {
      this.setGhostItem(catalogItem);
    } else {
      this.setGhostItem(null);
    }

    if (this.selectedObject && mode !== 'none') {
      this.highlightSelectedObject(null);
    }
  }

  public setCameraView(mode: CameraViewMode) {
    this.viewMode = mode;
    if (mode === 'top') {
      // Top-down view: look straight down, preserve horizontal center & zoom distance
      this.cameraSpherical.phi = 0.05;
      this.cameraSpherical.radius = Math.max(16, this.cameraSpherical.radius);
    } else if (mode === 'iso') {
      // Classic isometric angle, snapped to nearest 45 degree quadrant relative to current view
      this.cameraSpherical.phi = Math.PI / 3.2;
      const step = Math.PI / 2;
      this.cameraSpherical.theta =
        Math.round((this.cameraSpherical.theta - Math.PI / 4) / step) * step + Math.PI / 4;
    } else {
      // Free 3D mode: retain current user orientation, ensuring valid pitch range
      this.cameraSpherical.phi = Math.min(Math.PI / 2 - 0.08, Math.max(0.25, this.cameraSpherical.phi));
    }
    this.updateCameraPosition();
  }

  public setCallbacks(callbacks: EngineCallbacks) {
    this.callbacks = callbacks;
  }

  public setPaused(paused: boolean) {
    if (this.isPaused === paused) return;
    this.isPaused = paused;
    if (paused) {
      cancelAnimationFrame(this.animFrameId);
      return;
    }

    const width = this.container.clientWidth;
    const height = this.container.clientHeight;
    if (width > 0 && height > 0) {
      this.renderer.setSize(width, height);
      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();
    }
    this.animFrameId = requestAnimationFrame(this.renderFrame);
  }

  private wallBuilder: WallMeshBuilder = new WallMeshBuilder();

  private updateCameraPosition() {
    this.cameraSpherical.phi = Math.max(0.05, Math.min(Math.PI / 2 - 0.05, this.cameraSpherical.phi));
    this.cameraSpherical.radius = Math.max(8, Math.min(55, this.cameraSpherical.radius));

    const offset = new THREE.Vector3().setFromSpherical(this.cameraSpherical);
    this.camera.position.copy(this.cameraTarget).add(offset);
    this.camera.lookAt(this.cameraTarget);

    if (this.wallCutMode === 'cutaway') {
      this.rebuildWalls();
    }

    if (this.selectedObject && this.callbacks.onObjectPositionUpdate) {
      const pos = this.getScreenPositionForObject(this.selectedObject);
      if (pos) {
        this.callbacks.onObjectPositionUpdate(this.selectedObject, pos);
      }
    }
  }

  public getScreenPositionForObject(obj: FurnitureObject): { x: number; y: number } | null {
    const v = new THREE.Vector3(obj.x, (obj.floor - 1) * 3 + 0.6, obj.z);
    v.project(this.camera);

    const rect = this.container.getBoundingClientRect();
    const x = ((v.x + 1) * rect.width) / 2 + rect.left;
    const y = ((-v.y + 1) * rect.height) / 2 + rect.top;
    return { x, y };
  }

  // Data Synchronization from React State
  public syncData(
    walls: Wall[],
    rooms: Room[],
    doors: Door[],
    windows: WindowItem[],
    objects: FurnitureObject[],
    roofs: Roof[] = []
  ) {
    this.wallsData = walls;
    this.roomsData = rooms;
    this.doorsData = doors;
    this.windowsData = windows;
    this.objectsData = objects;
    this.roofsData = roofs;

    this.rebuildScene();
  }

  private rebuildScene() {
    this.rebuildWalls();
    this.rebuildRooms();
    this.rebuildDoors();
    this.rebuildWindows();
    this.rebuildFurniture();
    this.rebuildRoofs();
  }

  // Toggle Roofs Visibility
  public setShowRoofs(show: boolean) {
    this.showRoofs = show;
    this.roofsGroup.visible = show;
    if (!show && this.selectedRoof) {
      this.selectedRoof = null;
      this.gizmoSystem.clear();
    }
  }

  // Rebuild 3D Roofs
  public rebuildRoofs() {
    this.roofsGroup.clear();
    if (!this.showRoofs) return;

    for (const roof of this.roofsData) {
      if (roof.floor > this.currentFloor) continue;
      const floorBaseY = (roof.floor - 1) * 3;
      const roofMesh = this.roofBuilder.buildRoof(roof, floorBaseY);
      this.roofsGroup.add(roofMesh);
    }
  }

  // Selection & Gizmo Display Methods
  public selectRoof(roof: Roof | null) {
    this.selectedRoof = roof;
    this.selectedRoom = null;
    this.selectedWall = null;
    this.highlightSelectedObject(null);

    if (roof) {
      const floorBaseY = (roof.floor - 1) * 3;
      this.gizmoSystem.buildRoofGizmo(roof, floorBaseY);
    } else {
      this.gizmoSystem.clear();
    }
  }

  public selectRoom(room: Room | null) {
    this.selectedRoom = room;
    this.selectedRoof = null;
    this.selectedWall = null;
    this.highlightSelectedObject(null);

    if (room) {
      const floorBaseY = (room.floor - 1) * 3;
      this.gizmoSystem.buildRoomGizmo(room, floorBaseY);
    } else {
      this.gizmoSystem.clear();
    }
  }

  public selectWall(wall: Wall | null) {
    this.selectedWall = wall;
    this.selectedRoof = null;
    this.selectedRoom = null;
    this.highlightSelectedObject(null);

    if (wall) {
      const floorBaseY = (wall.floor - 1) * 3;
      this.gizmoSystem.buildWallGizmo(wall, floorBaseY);
    } else {
      this.gizmoSystem.clear();
    }
  }

  public clearSelection() {
    this.selectedRoof = null;
    this.selectedRoom = null;
    this.selectedWall = null;
    this.highlightSelectedObject(null);
    this.gizmoSystem.clear();
  }

  // =========================================================================
  // ARCHITECTURAL WALL MESH BUILDER INTEGRATION
  // Joins walls by their collision centers, provides real volume, thickness (0.22m),
  // and unified texturing coords with high-performance instancing!
  // =========================================================================
  private rebuildWalls() {
    this.wallsGroup.clear();

    const currentWalls = this.wallsData.filter((w) => w.floor <= this.currentFloor);
    if (currentWalls.length === 0) return;

    const builtWalls = this.wallBuilder.build(
      currentWalls,
      this.doorsData,
      this.windowsData,
      {
        currentFloor: this.currentFloor,
        wallCutMode: this.wallCutMode,
        camera: this.camera,
        cameraTarget: this.cameraTarget,
      }
    );

    this.wallsGroup.add(builtWalls);
  }

  private rebuildRooms() {
    this.roomsGroup.clear();

    for (const room of this.roomsData) {
      if (room.floor > this.currentFloor) continue;
      if (!room.cells || room.cells.length === 0) continue;

      const geo = buildRoomFloorGeometry(room.cells);
      const mat = getFloorMaterial(room.floorMaterial || 'wood_oak');

      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.y = (room.floor - 1) * 3;
      mesh.receiveShadow = true;
      mesh.renderOrder = 2;
      mesh.userData = { type: 'room', data: room };

      this.roomsGroup.add(mesh);
    }
  }

  private rebuildDoors() {
    this.doorsGroup.clear();

    for (const door of this.doorsData) {
      if (door.floor > this.currentFloor) continue;

      const meshGroup = createDoorMesh();
      meshGroup.position.set(door.x, (door.floor - 1) * 3, door.z);
      meshGroup.rotation.y = THREE.MathUtils.degToRad(door.rotation || 0);
      meshGroup.userData = { type: 'door', data: door };

      this.doorsGroup.add(meshGroup);
    }
  }

  private rebuildWindows() {
    this.windowsGroup.clear();

    for (const win of this.windowsData) {
      if (win.floor > this.currentFloor) continue;

      const meshGroup = createWindowMesh();
      meshGroup.position.set(win.x, (win.floor - 1) * 3, win.z);
      meshGroup.rotation.y = THREE.MathUtils.degToRad(win.rotation || 0);
      meshGroup.userData = { type: 'window', data: win };

      this.windowsGroup.add(meshGroup);
    }
  }

  private rebuildFurniture() {
    this.furnitureGroup.clear();

    for (const obj of this.objectsData) {
      if (obj.floor > this.currentFloor) continue;

      const meshGroup = createFurnitureMesh(obj.type, obj.colorVariant || 0);
      meshGroup.position.set(obj.x, (obj.floor - 1) * 3, obj.z);
      meshGroup.rotation.y = THREE.MathUtils.degToRad(obj.rotation || 0);
      meshGroup.userData = { type: 'furniture', data: obj };

      this.furnitureGroup.add(meshGroup);
    }

    if (this.selectedObject) {
      this.highlightSelectedObject(this.selectedObject);
    }
  }

  // Highlighting selected object
  public highlightSelectedObject(obj: FurnitureObject | null) {
    this.selectedObject = obj;
    if (this.selectionHelper) {
      this.scene.remove(this.selectionHelper);
      this.selectionHelper = null;
    }

    if (!obj) return;

    const target = this.furnitureGroup.children.find(
      (c) => c.userData.type === 'furniture' && c.userData.data.id === obj.id
    );

    if (target) {
      this.selectionHelper = new THREE.BoxHelper(target, 0x38bdf8);
      this.scene.add(this.selectionHelper);
    }
  }

  // Real-time ghost wall & Room preview while dragging
  private updateGhostWall(x1: number, z1: number, x2: number, z2: number) {
    this.removeGhostWall();

    const floorY = (this.currentFloor - 1) * 3;
    const ghostMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.65,
    });

    if (this.toolMode === 'wall_room') {
      // Room Box Tool: 4 walls forming a room rectangle
      const minX = Math.min(x1, x2);
      const maxX = Math.max(x1, x2);
      const minZ = Math.min(z1, z2);
      const maxZ = Math.max(z1, z2);
      const w = maxX - minX;
      const d = maxZ - minZ;

      if (w < 1 || d < 1) {
        if (this.callbacks.onLengthUpdate) this.callbacks.onLengthUpdate(null);
        return;
      }

      // North wall
      const geoN = new THREE.BoxGeometry(w, 2.8, 0.2);
      const meshN = new THREE.Mesh(geoN, ghostMat);
      meshN.position.set((minX + maxX) / 2, floorY + 1.4, minZ);
      this.ghostWallGroup.add(meshN);

      // South wall
      const geoS = new THREE.BoxGeometry(w, 2.8, 0.2);
      const meshS = new THREE.Mesh(geoS, ghostMat);
      meshS.position.set((minX + maxX) / 2, floorY + 1.4, maxZ);
      this.ghostWallGroup.add(meshS);

      // West wall
      const geoW = new THREE.BoxGeometry(0.2, 2.8, d);
      const meshW = new THREE.Mesh(geoW, ghostMat);
      meshW.position.set(minX, floorY + 1.4, (minZ + maxZ) / 2);
      this.ghostWallGroup.add(meshW);

      // East wall
      const geoE = new THREE.BoxGeometry(0.2, 2.8, d);
      const meshE = new THREE.Mesh(geoE, ghostMat);
      meshE.position.set(maxX, floorY + 1.4, (minZ + maxZ) / 2);
      this.ghostWallGroup.add(meshE);

      // Transparent floor preview
      const floorPlaneGeo = new THREE.PlaneGeometry(w, d);
      floorPlaneGeo.rotateX(-Math.PI / 2);
      const floorPlaneMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.25 });
      const floorPreview = new THREE.Mesh(floorPlaneGeo, floorPlaneMat);
      floorPreview.position.set((minX + maxX) / 2, floorY + 0.02, (minZ + maxZ) / 2);
      this.ghostWallGroup.add(floorPreview);

      if (this.callbacks.onLengthUpdate) {
        this.callbacks.onLengthUpdate(Math.round(w), `${Math.round(w)}m × ${Math.round(d)}m`);
      }
    } else {
      // Straight Wall or Continuous Wall
      const dx = Math.abs(x2 - x1);
      const dz = Math.abs(z2 - z1);
      let targetX2 = x2;
      let targetZ2 = z2;

      if (dx >= dz) {
        targetZ2 = z1; // horizontal lock
      } else {
        targetX2 = x1; // vertical lock
      }

      const dist = Math.hypot(targetX2 - x1, targetZ2 - z1);
      if (dist < 0.1) {
        if (this.callbacks.onLengthUpdate) this.callbacks.onLengthUpdate(null);
        return;
      }

      const geo = new THREE.BoxGeometry(dist, 2.8, 0.2);
      const mesh = new THREE.Mesh(geo, ghostMat);
      const angle = Math.atan2(targetZ2 - z1, targetX2 - x1);
      mesh.rotation.y = -angle;
      mesh.position.set((x1 + targetX2) / 2, floorY + 1.4, (z1 + targetZ2) / 2);
      this.ghostWallGroup.add(mesh);

      if (this.callbacks.onLengthUpdate) {
        this.callbacks.onLengthUpdate(Math.round(dist), `${Math.round(dist)}m`);
      }
    }
  }

  private removeGhostWall() {
    while (this.ghostWallGroup.children.length > 0) {
      const obj = this.ghostWallGroup.children[0] as THREE.Mesh;
      this.ghostWallGroup.remove(obj);
      if (obj.geometry) obj.geometry.dispose();
      if (obj.material) {
        if (Array.isArray(obj.material)) obj.material.forEach((m) => m.dispose());
        else obj.material.dispose();
      }
    }
    if (this.callbacks.onLengthUpdate) {
      this.callbacks.onLengthUpdate(null);
    }
  }

  // Ghost object (Furniture / Door / Window)
  public setGhostItem(item: any) {
    this.selectedCatalogItem = item;
    if (this.ghostObjectGroup) {
      this.scene.remove(this.ghostObjectGroup);
      this.ghostObjectGroup = null;
    }

    if (!item) return;

    if (item.type === 'furniture') {
      this.ghostObjectGroup = createFurnitureMesh(item.subType || 'sofa');
    } else if (item.type === 'door') {
      this.ghostObjectGroup = createDoorMesh();
    } else if (item.type === 'window') {
      this.ghostObjectGroup = createWindowMesh();
    } else if (item.type === 'roof') {
      const dummyRoof: Roof = {
        id: 'ghost_roof',
        floor: this.currentFloor,
        type: item.roofType || 'hipped',
        x: 0,
        z: 0,
        width: item.width || 6,
        depth: item.depth || 6,
        height: item.height || 2.2,
        pitchCurve: 0,
        overhang: 0.35,
        material: item.materialKey || 'roof_shingle_dark',
        rotation: 0,
      };
      this.ghostObjectGroup = this.roofBuilder.buildRoof(dummyRoof, 0);
    }

    if (this.ghostObjectGroup) {
      this.ghostObjectGroup.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.material = child.material.clone();
          child.material.transparent = true;
          child.material.opacity = 0.7;
        }
      });
      this.ghostObjectGroup.visible = false;
      this.scene.add(this.ghostObjectGroup);
    }
  }

  public rotateGhost() {
    this.ghostRotation = (this.ghostRotation + 90) % 360;
    if (this.ghostObjectGroup) {
      this.ghostObjectGroup.rotation.y = THREE.MathUtils.degToRad(this.ghostRotation);
    }
    if (this.selectedObject) {
      this.selectedObject.rotation = (this.selectedObject.rotation + 90) % 360;
      this.rebuildFurniture();
    }
  }

  private updateGhostObject(point: THREE.Vector3) {
    if (!this.ghostObjectGroup || !this.selectedCatalogItem) return;

    const floorY = (this.currentFloor - 1) * 3;
    let snapX = this.snapCoord(point.x, 0.5);
    let snapZ = this.snapCoord(point.z, 0.5);

    if (this.selectedCatalogItem.type === 'door' || this.selectedCatalogItem.type === 'window') {
      const nearest = this.findNearestWall(point.x, point.z);
      if (nearest) {
        snapX = nearest.x;
        snapZ = nearest.z;
        this.ghostRotation = nearest.rotation;
        this.isPlacementValid = true;
      } else {
        this.isPlacementValid = false;
      }
    } else {
      // Furniture collision and lot boundary check
      const footprint = getFurnitureFootprint(this.selectedCatalogItem.subType || 'sofa');
      const isRotated = (this.ghostRotation / 90) % 2 !== 0;
      const halfW = (isRotated ? footprint.depth : footprint.width) / 2;
      const halfD = (isRotated ? footprint.width : footprint.depth) / 2;

      const lotLimit = 11.5;
      let valid = Math.abs(snapX) + halfW <= lotLimit && Math.abs(snapZ) + halfD <= lotLimit;

      // Collision detection with existing furniture on this floor
      if (valid) {
        for (const obj of this.objectsData) {
          if (obj.floor !== this.currentFloor) continue;
          if (this.selectedObject && obj.id === this.selectedObject.id) continue;

          const objFp = getFurnitureFootprint(obj.type);
          const objRotated = (obj.rotation / 90) % 2 !== 0;
          const objHW = (objRotated ? objFp.depth : objFp.width) / 2;
          const objHD = (objRotated ? objFp.width : objFp.depth) / 2;

          // AABB collision check
          if (
            Math.abs(snapX - obj.x) < halfW + objHW - 0.1 &&
            Math.abs(snapZ - obj.z) < halfD + objHD - 0.1
          ) {
            valid = false;
            break;
          }
        }
      }

      this.isPlacementValid = valid;
    }

    this.ghostPosition.set(snapX, floorY, snapZ);
    this.ghostObjectGroup.position.copy(this.ghostPosition);
    this.ghostObjectGroup.rotation.y = THREE.MathUtils.degToRad(this.ghostRotation);
    this.ghostObjectGroup.visible = true;

    // Tint red if invalid, green/normal if valid
    this.ghostObjectGroup.traverse((c) => {
      if (c instanceof THREE.Mesh) {
        if (!this.isPlacementValid) {
          c.material.color.setHex(0xef4444);
        } else {
          c.material.color.setHex(0x22c55e);
        }
      }
    });
  }

  private findNearestWall(x: number, z: number, maxDist: number = 1.2): { x: number; z: number; rotation: number; wall: Wall } | null {
    let bestDist = maxDist;
    let result = null;

    for (const wall of this.wallsData) {
      if (wall.floor !== this.currentFloor) continue;

      const isHorizontal = wall.z1 === wall.z2;
      if (isHorizontal) {
        const minX = Math.min(wall.x1, wall.x2);
        const maxX = Math.max(wall.x1, wall.x2);
        if (x >= minX - 0.2 && x <= maxX + 0.2) {
          const dist = Math.abs(z - wall.z1);
          if (dist < bestDist) {
            bestDist = dist;
            result = {
              x: Math.round(x),
              z: wall.z1,
              rotation: 0,
              wall,
            };
          }
        }
      } else {
        // Vertical wall
        const minZ = Math.min(wall.z1, wall.z2);
        const maxZ = Math.max(wall.z1, wall.z2);
        if (z >= minZ - 0.2 && z <= maxZ + 0.2) {
          const dist = Math.abs(x - wall.x1);
          if (dist < bestDist) {
            bestDist = dist;
            result = {
              x: wall.x1,
              z: Math.round(z),
              rotation: 90,
              wall,
            };
          }
        }
      }
    }

    return result;
  }

  // User input handling (Mouse & Touch)
  private bindEvents() {
    const el = this.container;

    // Mouse events
    el.addEventListener('mousedown', this.onMouseDown.bind(this));
    window.addEventListener('mousemove', this.onMouseMove.bind(this));
    window.addEventListener('mouseup', this.onMouseUp.bind(this));
    el.addEventListener('wheel', this.onWheel.bind(this), { passive: false });
    el.addEventListener('contextmenu', (e) => e.preventDefault());

    // Touch events for mobile
    el.addEventListener('touchstart', this.onTouchStart.bind(this), { passive: false });
    el.addEventListener('touchmove', this.onTouchMove.bind(this), { passive: false });
    el.addEventListener('touchend', this.onTouchEnd.bind(this));

    // Window resize
    window.addEventListener('resize', this.onWindowResize.bind(this));
  }

  private onMouseDown(e: MouseEvent) {
    this.isPointerDown = true;
    this.pointerButton = e.button;
    this.prevPointerX = e.clientX;
    this.prevPointerY = e.clientY;

    if (e.button === 0) {
      // 1. Check Gizmo interaction first!
      const rect = this.container.getBoundingClientRect();
      this.pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      this.pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      this.raycaster.setFromCamera(this.pointer, this.camera);

      const gizHits = this.raycaster.intersectObjects(this.gizmoSystem.gizmoGroup.children, true);
      if (gizHits.length > 0) {
        let gObj: THREE.Object3D | null = gizHits[0].object;
        while (gObj && !gObj.userData?.isGizmo && gObj.parent && gObj.parent !== this.gizmoSystem.gizmoGroup) {
          gObj = gObj.parent;
        }
        if (gObj && gObj.userData?.isGizmo) {
          this.isDraggingGizmo = true;
          this.activeGizmoHandle = gObj.userData.handleType;
          this.activeGizmoTargetId = gObj.userData.targetId;
          return;
        }
      }

      const point = this.getIntersection(e);
      if (!point) return;

      if (this.toolMode === 'wall' || this.toolMode === 'wall_continuous' || this.toolMode === 'wall_room') {
        const sx = this.snapCoord(point.x);
        const sz = this.snapCoord(point.z);
        this.wallStartPoint = { x: sx, z: sz };
      } else if (
        this.toolMode === 'none' ||
        this.toolMode === 'delete' ||
        this.toolMode === 'floor_paint' ||
        this.toolMode === 'wall_paint' ||
        this.toolMode === 'roof_paint' ||
        this.toolMode === 'select_room' ||
        this.toolMode === 'select_wall'
      ) {
        this.handleClickInteraction(e);
      }
    }
  }

  private onMouseMove(e: MouseEvent) {
    const point = this.getIntersection(e);

    // Update cursor cell highlight
    const cursor = this.gridGroup.getObjectByName('cursorHighlight');
    if (cursor && point) {
      cursor.position.set(Math.floor(point.x) + 0.5, (this.currentFloor - 1) * 3 + 0.015, Math.floor(point.z) + 0.5);
      cursor.visible = true;
    }

    // Hover handle highlight if not dragging
    if (!this.isPointerDown) {
      const rect = this.container.getBoundingClientRect();
      this.pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      this.pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      this.raycaster.setFromCamera(this.pointer, this.camera);
      const gizHits = this.raycaster.intersectObjects(this.gizmoSystem.gizmoGroup.children, true);
      if (gizHits.length > 0) {
        let gObj: THREE.Object3D | null = gizHits[0].object;
        while (gObj && !gObj.userData?.isGizmo && gObj.parent && gObj.parent !== this.gizmoSystem.gizmoGroup) {
          gObj = gObj.parent;
        }
        if (gObj && gObj.userData?.isGizmo) {
          this.gizmoSystem.highlightHandle(gizHits[0].object as THREE.Mesh);
          this.container.style.cursor = 'grab';
        } else {
          this.gizmoSystem.highlightHandle(null);
          this.container.style.cursor = 'default';
        }
      } else {
        this.gizmoSystem.highlightHandle(null);
        this.container.style.cursor = 'default';
      }
    }

    if (this.isPointerDown) {
      const dx = e.clientX - this.prevPointerX;
      const dy = e.clientY - this.prevPointerY;
      this.prevPointerX = e.clientX;
      this.prevPointerY = e.clientY;

      // Handle Gizmo Dragging (The Sims 4 Style Handles!)
      if (this.isDraggingGizmo && this.activeGizmoHandle && this.activeGizmoTargetId) {
        // A. Roof Gizmos
        const targetRoof = this.roofsData.find((r) => r.id === this.activeGizmoTargetId);
        if (targetRoof) {
          if (this.activeGizmoHandle === 'roof_height') {
            targetRoof.height = Math.max(0.6, Math.min(4.5, targetRoof.height - dy * 0.025));
          } else if (this.activeGizmoHandle === 'roof_width_pos') {
            targetRoof.width = Math.max(2, Math.min(24, targetRoof.width + dx * 0.05));
          } else if (this.activeGizmoHandle === 'roof_width_neg') {
            targetRoof.width = Math.max(2, Math.min(24, targetRoof.width - dx * 0.05));
          } else if (this.activeGizmoHandle === 'roof_depth_pos') {
            targetRoof.depth = Math.max(2, Math.min(24, targetRoof.depth + dy * 0.05));
          } else if (this.activeGizmoHandle === 'roof_depth_neg') {
            targetRoof.depth = Math.max(2, Math.min(24, targetRoof.depth - dy * 0.05));
          } else if (this.activeGizmoHandle === 'roof_curve') {
            targetRoof.pitchCurve = Math.max(-0.8, Math.min(0.8, targetRoof.pitchCurve - dy * 0.02));
          }

          this.rebuildRoofs();
          this.gizmoSystem.buildRoofGizmo(targetRoof, (targetRoof.floor - 1) * 3);
          if (this.callbacks.onRoofUpdated) {
            this.callbacks.onRoofUpdated(targetRoof);
          }
          return;
        }

        // B. Room Gizmos
        const targetRoom = this.roomsData.find((rm) => rm.id === this.activeGizmoTargetId);
        if (targetRoom) {
          if (this.activeGizmoHandle === 'room_push_pos_x') {
            const step = Math.sign(dx);
            if (Math.abs(dx) > 15) {
              const newMax = targetRoom.bounds.maxX + step;
              if (newMax - targetRoom.bounds.minX >= 2 && newMax <= 12) {
                targetRoom.bounds.maxX = newMax;
                this.callbacks.onRoomResized?.(targetRoom, targetRoom.bounds);
                this.gizmoSystem.buildRoomGizmo(targetRoom, (targetRoom.floor - 1) * 3);
              }
            }
          } else if (this.activeGizmoHandle === 'room_push_neg_x') {
            const step = Math.sign(dx);
            if (Math.abs(dx) > 15) {
              const newMin = targetRoom.bounds.minX + step;
              if (targetRoom.bounds.maxX - newMin >= 2 && newMin >= -12) {
                targetRoom.bounds.minX = newMin;
                this.callbacks.onRoomResized?.(targetRoom, targetRoom.bounds);
                this.gizmoSystem.buildRoomGizmo(targetRoom, (targetRoom.floor - 1) * 3);
              }
            }
          } else if (this.activeGizmoHandle === 'room_push_pos_z') {
            const step = Math.sign(dy);
            if (Math.abs(dy) > 15) {
              const newMax = targetRoom.bounds.maxZ + step;
              if (newMax - targetRoom.bounds.minZ >= 2 && newMax <= 12) {
                targetRoom.bounds.maxZ = newMax;
                this.callbacks.onRoomResized?.(targetRoom, targetRoom.bounds);
                this.gizmoSystem.buildRoomGizmo(targetRoom, (targetRoom.floor - 1) * 3);
              }
            }
          } else if (this.activeGizmoHandle === 'room_push_neg_z') {
            const step = Math.sign(dy);
            if (Math.abs(dy) > 15) {
              const newMin = targetRoom.bounds.minZ + step;
              if (targetRoom.bounds.maxZ - newMin >= 2 && newMin >= -12) {
                targetRoom.bounds.minZ = newMin;
                this.callbacks.onRoomResized?.(targetRoom, targetRoom.bounds);
                this.gizmoSystem.buildRoomGizmo(targetRoom, (targetRoom.floor - 1) * 3);
              }
            }
          }
          return;
        }

        // C. Wall Gizmos
        const targetWall = this.wallsData.find((w) => w.id === this.activeGizmoTargetId);
        if (targetWall && this.activeGizmoHandle === 'wall_push') {
          const isHorizontal = targetWall.z1 === targetWall.z2;
          if (isHorizontal && Math.abs(dy) > 12) {
            const step = Math.sign(dy);
            targetWall.z1 += step;
            targetWall.z2 += step;
            this.rebuildWalls();
            this.gizmoSystem.buildWallGizmo(targetWall, (targetWall.floor - 1) * 3);
            this.callbacks.onWallResized?.(targetWall, { z1: targetWall.z1, z2: targetWall.z2 });
          } else if (!isHorizontal && Math.abs(dx) > 12) {
            const step = Math.sign(dx);
            targetWall.x1 += step;
            targetWall.x2 += step;
            this.rebuildWalls();
            this.gizmoSystem.buildWallGizmo(targetWall, (targetWall.floor - 1) * 3);
            this.callbacks.onWallResized?.(targetWall, { x1: targetWall.x1, x2: targetWall.x2 });
          }
          return;
        }
      }

      if (this.pointerButton === 2 || (this.pointerButton === 0 && e.altKey)) {
        // Rotate camera with right click or Alt+LeftClick
        this.cameraSpherical.theta -= dx * 0.008;
        this.cameraSpherical.phi -= dy * 0.008;
        this.updateCameraPosition();
      } else if (this.pointerButton === 1 || (this.pointerButton === 0 && e.shiftKey)) {
        // Pan camera with middle click or Shift+LeftClick
        this.panCamera(dx, dy);
      } else if (this.pointerButton === 0) {
        // Left click dragging: Wall preview
        if (
          (this.toolMode === 'wall' || this.toolMode === 'wall_continuous' || this.toolMode === 'wall_room') &&
          this.wallStartPoint &&
          point
        ) {
          const ex = this.snapCoord(point.x);
          const ez = this.snapCoord(point.z);
          this.updateGhostWall(this.wallStartPoint.x, this.wallStartPoint.z, ex, ez);
        }
      }
    } else {
      // Hovering with ghost item
      if (point && this.ghostObjectGroup) {
        this.updateGhostObject(point);
      }
    }
  }

  private onMouseUp(e: MouseEvent) {
    if (this.isDraggingGizmo) {
      this.isDraggingGizmo = false;
      this.activeGizmoHandle = null;
      this.activeGizmoTargetId = null;
    }

    if (!this.isPointerDown) return;
    this.isPointerDown = false;

    if (e.button === 0) {
      const point = this.getIntersection(e);

      if (
        (this.toolMode === 'wall' || this.toolMode === 'wall_continuous' || this.toolMode === 'wall_room') &&
        this.wallStartPoint &&
        point
      ) {
        const ex = this.snapCoord(point.x);
        const ez = this.snapCoord(point.z);

        if (this.toolMode === 'wall_room') {
          // Room tool creates 4 walls
          const minX = Math.min(this.wallStartPoint.x, ex);
          const maxX = Math.max(this.wallStartPoint.x, ex);
          const minZ = Math.min(this.wallStartPoint.z, ez);
          const maxZ = Math.max(this.wallStartPoint.z, ez);

          if (maxX - minX >= 1 && maxZ - minZ >= 1) {
            const wallsBatch = [
              { x1: minX, z1: minZ, x2: maxX, z2: minZ },
              { x1: maxX, z1: minZ, x2: maxX, z2: maxZ },
              { x1: maxX, z1: maxZ, x2: minX, z2: maxZ },
              { x1: minX, z1: maxZ, x2: minX, z2: minZ },
            ];
            if (this.callbacks.onWallsCreatedBatch) {
              this.callbacks.onWallsCreatedBatch(wallsBatch);
            }
          }
          this.wallStartPoint = null;
          this.removeGhostWall();
        } else {
          // Single Straight wall
          const dx = Math.abs(ex - this.wallStartPoint.x);
          const dz = Math.abs(ez - this.wallStartPoint.z);
          const targetX2 = dx >= dz ? ex : this.wallStartPoint.x;
          const targetZ2 = dx >= dz ? this.wallStartPoint.z : ez;

          const dist = Math.hypot(targetX2 - this.wallStartPoint.x, targetZ2 - this.wallStartPoint.z);

          if (dist >= 1) {
            const newWall = {
              x1: this.wallStartPoint.x,
              z1: this.wallStartPoint.z,
              x2: targetX2,
              z2: targetZ2,
            };

            if (this.callbacks.onWallCreated) {
              this.callbacks.onWallCreated(newWall);
            }

            if (this.toolMode === 'wall_continuous') {
              this.wallStartPoint = { x: targetX2, z: targetZ2 };
              this.removeGhostWall();
              return;
            }
          }

          this.wallStartPoint = null;
          this.removeGhostWall();
        }
      } else if (
        this.toolMode === 'furniture' ||
        this.toolMode === 'door' ||
        this.toolMode === 'window' ||
        this.toolMode === 'roof'
      ) {
        if (this.isPlacementValid && this.selectedCatalogItem && point) {
          this.confirmObjectPlacement();
        }
      }
    }
  }

  private onWheel(e: WheelEvent) {
    e.preventDefault();
    this.cameraSpherical.radius += e.deltaY * 0.025;
    this.updateCameraPosition();
  }

  // Mobile Touch Controls
  private onTouchStart(e: TouchEvent) {
    e.preventDefault();
    if (e.touches.length === 1) {
      const touch = e.touches[0];
      this.isPointerDown = true;
      this.pointerButton = 0;
      this.prevPointerX = touch.clientX;
      this.prevPointerY = touch.clientY;

      const point = this.getIntersection({ clientX: touch.clientX, clientY: touch.clientY });
      if (!point) return;

      if (this.toolMode === 'wall' || this.toolMode === 'wall_continuous' || this.toolMode === 'wall_room') {
        const sx = this.snapCoord(point.x);
        const sz = this.snapCoord(point.z);
        this.wallStartPoint = { x: sx, z: sz };
      } else if (this.toolMode === 'furniture' || this.toolMode === 'door' || this.toolMode === 'window') {
        this.updateGhostObject(point);
      } else {
        this.handleClickInteraction({ clientX: touch.clientX, clientY: touch.clientY });
      }
    } else if (e.touches.length === 2) {
      const t1 = e.touches[0];
      const t2 = e.touches[1];
      this.touchDistance = Math.hypot(t2.clientX - t1.clientX, t2.clientY - t1.clientY);
      this.touchAngle = Math.atan2(t2.clientY - t1.clientY, t2.clientX - t1.clientX);
      this.twoFingerPanStart = {
        x: (t1.clientX + t2.clientX) / 2,
        y: (t1.clientY + t2.clientY) / 2,
      };
      this.wallStartPoint = null;
      this.removeGhostWall();
    }
  }

  private onTouchMove(e: TouchEvent) {
    e.preventDefault();
    if (e.touches.length === 1 && this.isPointerDown) {
      const touch = e.touches[0];
      const point = this.getIntersection({ clientX: touch.clientX, clientY: touch.clientY });

      if (
        (this.toolMode === 'wall' || this.toolMode === 'wall_continuous' || this.toolMode === 'wall_room') &&
        this.wallStartPoint &&
        point
      ) {
        const ex = this.snapCoord(point.x);
        const ez = this.snapCoord(point.z);
        this.updateGhostWall(this.wallStartPoint.x, this.wallStartPoint.z, ex, ez);
      } else if (this.ghostObjectGroup && point) {
        this.updateGhostObject(point);
      } else if (this.toolMode === 'none') {
        const dx = touch.clientX - this.prevPointerX;
        const dy = touch.clientY - this.prevPointerY;
        this.prevPointerX = touch.clientX;
        this.prevPointerY = touch.clientY;
        this.cameraSpherical.theta -= dx * 0.008;
        this.cameraSpherical.phi -= dy * 0.008;
        this.updateCameraPosition();
      }
    } else if (e.touches.length === 2) {
      const t1 = e.touches[0];
      const t2 = e.touches[1];

      // Pinch Zoom
      const dist = Math.hypot(t2.clientX - t1.clientX, t2.clientY - t1.clientY);
      const deltaDist = dist - this.touchDistance;
      this.touchDistance = dist;
      this.cameraSpherical.radius -= deltaDist * 0.06;

      // Two finger rotation
      const angle = Math.atan2(t2.clientY - t1.clientY, t2.clientX - t1.clientX);
      const deltaAngle = angle - this.touchAngle;
      this.touchAngle = angle;
      this.cameraSpherical.theta -= deltaAngle * 0.8;

      // Two finger Pan
      if (this.twoFingerPanStart) {
        const midX = (t1.clientX + t2.clientX) / 2;
        const midY = (t1.clientY + t2.clientY) / 2;
        const panDx = midX - this.twoFingerPanStart.x;
        const panDy = midY - this.twoFingerPanStart.y;
        this.twoFingerPanStart = { x: midX, y: midY };
        this.panCamera(panDx, panDy);
      }

      this.updateCameraPosition();
    }
  }

  private onTouchEnd(e: TouchEvent) {
    if (e.touches.length === 0) {
      if (
        this.isPointerDown &&
        (this.toolMode === 'wall' || this.toolMode === 'wall_continuous' || this.toolMode === 'wall_room') &&
        this.wallStartPoint
      ) {
        // Complete touch wall
        if (this.toolMode === 'wall_room' && this.ghostWallGroup.children.length > 0) {
          // Complete room batch
        }
        this.wallStartPoint = null;
        this.removeGhostWall();
      } else if (this.toolMode === 'furniture' || this.toolMode === 'door' || this.toolMode === 'window') {
        if (this.isPlacementValid && this.selectedCatalogItem) {
          this.confirmObjectPlacement();
        }
      }

      this.isPointerDown = false;
      this.twoFingerPanStart = null;
    }
  }

  private confirmObjectPlacement() {
    const item = this.selectedCatalogItem;
    if (!item) return;

    if (item.type === 'furniture' && this.callbacks.onObjectPlaced) {
      this.callbacks.onObjectPlaced({
        type: item.subType || 'sofa',
        name: item.name,
        x: this.ghostPosition.x,
        z: this.ghostPosition.z,
        rotation: this.ghostRotation,
      });
    } else if (item.type === 'door' && this.callbacks.onDoorPlaced) {
      this.callbacks.onDoorPlaced({
        x: this.ghostPosition.x,
        z: this.ghostPosition.z,
        rotation: this.ghostRotation,
      });
    } else if (item.type === 'window' && this.callbacks.onWindowPlaced) {
      this.callbacks.onWindowPlaced({
        x: this.ghostPosition.x,
        z: this.ghostPosition.z,
        rotation: this.ghostRotation,
      });
    } else if (item.type === 'roof' && this.callbacks.onRoofPlaced) {
      this.callbacks.onRoofPlaced({
        type: item.roofType || 'hipped',
        x: this.ghostPosition.x,
        z: this.ghostPosition.z,
        width: item.width || 6,
        depth: item.depth || 6,
        height: item.height || 2.2,
        material: item.materialKey || 'roof_shingle_dark',
      });
    }
  }

  private handleClickInteraction(e: { clientX: number; clientY: number }) {
    const rect = this.container.getBoundingClientRect();
    this.pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    this.pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

    this.raycaster.setFromCamera(this.pointer, this.camera);

    // 0. Check Roofs (Top-most elevation, raycast first)
    if (this.showRoofs) {
      const roofHits = this.raycaster.intersectObjects(this.roofsGroup.children, true);
      if (roofHits.length > 0) {
        let topObj: THREE.Object3D | null = roofHits[0].object;
        while (topObj && (!topObj.userData || topObj.userData.type !== 'roof') && topObj.parent && topObj.parent !== this.roofsGroup) {
          topObj = topObj.parent;
        }
        if (topObj && topObj.userData?.type === 'roof') {
          const roofData: Roof = topObj.userData.data;
          if (this.toolMode === 'delete') {
            if (this.callbacks.onItemDeleted) {
              this.callbacks.onItemDeleted('roof', roofData.id);
              this.gizmoSystem.clear();
            }
          } else if (this.toolMode === 'roof_paint' && this.selectedCatalogItem?.materialKey) {
            roofData.material = this.selectedCatalogItem.materialKey;
            this.rebuildRoofs();
            this.callbacks.onRoofUpdated?.(roofData);
          } else {
            this.selectRoof(roofData);
            if (this.callbacks.onRoofClicked) {
              this.callbacks.onRoofClicked(roofData);
            }
          }
          return;
        }
      }
    }

    // 1. Check Furniture
    const furnHits = this.raycaster.intersectObjects(this.furnitureGroup.children, true);
    if (furnHits.length > 0) {
      let topObj: THREE.Object3D | null = furnHits[0].object;
      while (topObj && topObj.parent && topObj.parent !== this.furnitureGroup) {
        if (topObj.userData && topObj.userData.type === 'furniture') break;
        topObj = topObj.parent;
      }
      if (topObj && topObj.userData.type === 'furniture') {
        const furnData: FurnitureObject = topObj.userData.data;
        if (this.toolMode === 'delete') {
          if (this.callbacks.onItemDeleted) {
            this.callbacks.onItemDeleted('object', furnData.id);
          }
        } else {
          this.highlightSelectedObject(furnData);
          if (this.callbacks.onObjectSelected) {
            this.callbacks.onObjectSelected(furnData, { x: e.clientX, y: e.clientY });
          }
        }
        return;
      }
    }

    // 2. Check Doors
    const doorHits = this.raycaster.intersectObjects(this.doorsGroup.children, true);
    if (doorHits.length > 0) {
      let topObj: THREE.Object3D | null = doorHits[0].object;
      while (topObj && topObj.parent && topObj.parent !== this.doorsGroup) {
        if (topObj.userData && topObj.userData.type === 'door') break;
        topObj = topObj.parent;
      }
      if (topObj && topObj.userData.type === 'door') {
        const doorData: Door = topObj.userData.data;
        if (this.toolMode === 'delete' && this.callbacks.onItemDeleted) {
          this.callbacks.onItemDeleted('door', doorData.id);
        }
        return;
      }
    }

    // 3. Check Windows
    const winHits = this.raycaster.intersectObjects(this.windowsGroup.children, true);
    if (winHits.length > 0) {
      let topObj: THREE.Object3D | null = winHits[0].object;
      while (topObj && topObj.parent && topObj.parent !== this.windowsGroup) {
        if (topObj.userData && topObj.userData.type === 'window') break;
        topObj = topObj.parent;
      }
      if (topObj && topObj.userData.type === 'window') {
        const winData: WindowItem = topObj.userData.data;
        if (this.toolMode === 'delete' && this.callbacks.onItemDeleted) {
          this.callbacks.onItemDeleted('window', winData.id);
        }
        return;
      }
    }

    // 4. Check Walls (recursive intersection into wall groups)
    const wallHits = this.raycaster.intersectObjects(this.wallsGroup.children, true);
    if (wallHits.length > 0) {
      let topObj: THREE.Object3D | null = wallHits[0].object;
      while (topObj && topObj.parent && topObj.parent !== this.wallsGroup) {
        if (topObj.userData && topObj.userData.type === 'wall') break;
        topObj = topObj.parent;
      }
      if (topObj && topObj.userData && topObj.userData.type === 'wall') {
        const wallData: Wall = topObj.userData.data;
        if (this.toolMode === 'delete') {
          if (this.callbacks.onItemDeleted) {
            this.callbacks.onItemDeleted('wall', wallData.id);
            this.gizmoSystem.clear();
          }
        } else if (this.toolMode === 'wall_paint' && this.selectedCatalogItem?.materialKey) {
          if (this.callbacks.onWallClicked) {
            this.callbacks.onWallClicked(wallData);
          }
        } else {
          // Select Wall with The Sims 4 Wall Gizmo!
          this.selectWall(wallData);
          if (this.callbacks.onWallClicked) {
            this.callbacks.onWallClicked(wallData);
          }
        }
        return;
      }
    }

    // 5. Check Rooms (Floor surfaces)
    const roomHits = this.raycaster.intersectObjects(this.roomsGroup.children, true);
    if (roomHits.length > 0) {
      let rObj: THREE.Object3D | null = roomHits[0].object;
      while (rObj && (!rObj.userData || rObj.userData.type !== 'room') && rObj.parent && rObj.parent !== this.roomsGroup) {
        rObj = rObj.parent;
      }
      const roomData: Room = rObj?.userData?.data || roomHits[0].object.userData.data;
      if (roomData) {
        if (this.toolMode === 'floor_paint' && this.selectedCatalogItem?.materialKey) {
          if (this.callbacks.onRoomClicked) {
            this.callbacks.onRoomClicked(roomData);
          }
        } else {
          // Select Room with The Sims 4 Room Block Gizmo!
          this.selectRoom(roomData);
          if (this.callbacks.onRoomClicked) {
            this.callbacks.onRoomClicked(roomData);
          }
        }
        return;
      }
    }

    // 6. Ground tile paint when floor_paint mode is active
    if (this.toolMode === 'floor_paint') {
      const planeHits = this.raycaster.intersectObject(this.raycastPlaneMesh, false);
      if (planeHits.length > 0) {
        const pt = planeHits[0].point;
        const cx = Math.floor(pt.x);
        const cz = Math.floor(pt.z);
        const foundRoom = this.roomsData.find(
          (r) => r.floor === this.currentFloor && r.cells && r.cells.some((c) => c.x === cx && c.z === cz)
        );
        if (foundRoom && this.callbacks.onRoomClicked) {
          this.callbacks.onRoomClicked(foundRoom);
          return;
        } else if (this.callbacks.onFloorTilePlaced && this.selectedCatalogItem?.materialKey) {
          this.callbacks.onFloorTilePlaced({
            x: cx,
            z: cz,
            floor: this.currentFloor,
            material: this.selectedCatalogItem.materialKey,
          });
          return;
        }
      }
    }

    // Clicked empty ground: clear selection
    this.clearSelection();
    if (this.callbacks.onObjectSelected) {
      this.callbacks.onObjectSelected(null);
    }
  }

  private panCamera(dx: number, dy: number) {
    const panSpeed = 0.025;
    const right = new THREE.Vector3(1, 0, 0).applyQuaternion(this.camera.quaternion);
    right.y = 0;
    right.normalize();

    const forward = new THREE.Vector3(0, 0, -1).applyQuaternion(this.camera.quaternion);
    forward.y = 0;
    forward.normalize();

    this.cameraTarget.addScaledVector(right, -dx * panSpeed);
    this.cameraTarget.addScaledVector(forward, dy * panSpeed);

    this.cameraTarget.x = Math.max(-18, Math.min(18, this.cameraTarget.x));
    this.cameraTarget.z = Math.max(-18, Math.min(18, this.cameraTarget.z));

    this.updateCameraPosition();
  }

  private onWindowResize() {
    if (!this.container) return;
    const width = this.container.clientWidth;
    const height = this.container.clientHeight;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  private snapCoord(val: number, step: number = 1.0): number {
    return Math.round(val / step) * step;
  }

  private getIntersection(e: { clientX: number; clientY: number }): THREE.Vector3 | null {
    const rect = this.container.getBoundingClientRect();
    this.pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    this.pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

    this.raycaster.setFromCamera(this.pointer, this.camera);
    const intersects = this.raycaster.intersectObject(this.raycastPlaneMesh);
    if (intersects.length > 0) {
      return intersects[0].point;
    }
    return null;
  }

  private renderFrame = () => {
    if (this.isPaused) return;
    this.animFrameId = requestAnimationFrame(this.renderFrame);
    if (this.selectionHelper) this.selectionHelper.update();
    this.renderer.render(this.scene, this.camera);
  };

  private startAnimationLoop() {
    this.animFrameId = requestAnimationFrame(this.renderFrame);
  }

  public dispose() {
    cancelAnimationFrame(this.animFrameId);
    this.renderer.dispose();
    if (this.renderer.domElement.parentElement) {
      this.renderer.domElement.parentElement.removeChild(this.renderer.domElement);
    }
  }
}
