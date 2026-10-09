export interface Wall {
  id: string;
  floor: number;
  x1: number;
  z1: number;
  x2: number;
  z2: number;
  height: number;
  thickness: number;
  material: string; // 'white' | 'beige' | 'gray' | 'blue' | 'green' | 'wood' | 'brick'
}

export interface Door {
  id: string;
  floor: number;
  wallId?: string;
  x: number;
  z: number;
  rotation: number; // 0, 90, 180, 270
  name: string;
  cost: number;
}

export interface WindowItem {
  id: string;
  floor: number;
  wallId?: string;
  x: number;
  z: number;
  rotation: number;
  name: string;
  cost: number;
}

export interface FurnitureObject {
  id: string;
  floor: number;
  type: string;
  name: string;
  x: number;
  y: number;
  z: number;
  rotation: number; // 0, 90, 180, 270
  scale: number;
  width: number;
  depth: number;
  cost: number;
  colorVariant?: number;
}

export interface Room {
  id: string;
  floor: number;
  name?: string;
  bounds: { minX: number; maxX: number; minZ: number; maxZ: number };
  cells: { x: number; z: number }[];
  wallIds: string[];
  floorMaterial: string; // 'wood_oak' | 'tile_ceramic' | 'stone_slate' | 'carpet_blue' | 'wood_dark'
}

export type RoofType = 'hipped' | 'gabled' | 'half_gabled' | 'mansard' | 'flat';

export interface Roof {
  id: string;
  floor: number;
  type: RoofType;
  x: number;          // Center X
  z: number;          // Center Z
  width: number;      // Width in meters (X direction before rotation)
  depth: number;      // Depth in meters (Z direction before rotation)
  height: number;     // Ridge height (1.0m to 4.0m)
  pitchCurve: number; // Curvature: -1.0 to 1.0 (0 = straight)
  overhang: number;   // Eave overhang in meters (e.g. 0.35m)
  material: string;   // 'roof_shingle_dark' | 'roof_terracotta' | 'roof_slate' | 'roof_metal' | 'roof_wood_shake'
  rotation: number;   // 0, 90, 180, 270
  trimColor?: string;
  cost?: number;
}

export interface FloorData {
  walls: Wall[];
  rooms: Room[];
  doors: Door[];
  windows: WindowItem[];
  objects: FurnitureObject[];
  roofs: Roof[];
}

export interface HouseState {
  currentFloor: number;
  floors: Record<number, FloorData>;
  money: {
    coins: number;
    cash: number;
  };
}

export type BuildToolMode =
  | 'none'
  | 'wall'
  | 'wall_continuous'
  | 'wall_room'
  | 'door'
  | 'window'
  | 'floor_paint'
  | 'wall_paint'
  | 'furniture'
  | 'roof'
  | 'roof_paint'
  | 'select_room'
  | 'select_wall'
  | 'delete';

export type CameraViewMode = 'free' | 'top' | 'iso';

export type WallCutMode = 'full' | 'cutaway' | 'down';

export interface CatalogItem {
  id: string;
  name: string;
  icon: string;
  type: 'wall' | 'door' | 'window' | 'furniture' | 'floor_material' | 'wall_material' | 'roof' | 'roof_material';
  subType?: string;
  cost: number;
  width?: number;
  depth?: number;
  height?: number;
  materialKey?: string;
  category?: string;
  roofType?: RoofType;
}

export interface ActionHistory {
  type:
    | 'CREATE_WALL'
    | 'CREATE_WALLS_BATCH'
    | 'DELETE_WALL'
    | 'UPDATE_WALL'
    | 'PLACE_OBJECT'
    | 'MOVE_OBJECT'
    | 'ROTATE_OBJECT'
    | 'DELETE_OBJECT'
    | 'PLACE_DOOR'
    | 'DELETE_DOOR'
    | 'PLACE_WINDOW'
    | 'DELETE_WINDOW'
    | 'CHANGE_FLOOR'
    | 'CHANGE_WALL_MATERIAL'
    | 'CHANGE_VARIANT'
    | 'CREATE_ROOF'
    | 'UPDATE_ROOF'
    | 'DELETE_ROOF'
    | 'UPDATE_ROOM'
    | 'DELETE_ROOM'
    | 'DEMOLISH_LOT';
  data: any;
  undoData: any;
}
