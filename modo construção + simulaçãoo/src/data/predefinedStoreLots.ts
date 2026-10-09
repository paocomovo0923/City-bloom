import { Door, FloorData, FurnitureObject, HouseState, Roof, Wall, WindowItem } from '../types/sims';
import { getInitialHouseState } from './starterHouse';
import { detectRooms } from '../systems/roomTopology';
import { getFurnitureFootprint } from '../utils/furnitureFootprints';

interface StoreFurnitureSeed {
  type: string;
  name: string;
  x: number;
  z: number;
  rotation?: number;
}

interface StoreStyle {
  wallMaterial: string;
  floorMaterial: string;
  roofMaterial: string;
  roofType: Roof['type'];
  items: StoreFurnitureSeed[];
}

const STORE_STYLES: Record<string, StoreStyle> = {
  bakery: {
    wallMaterial: 'beige', floorMaterial: 'tile_ceramic', roofMaterial: 'roof_terracotta', roofType: 'gabled',
    items: [
      { type: 'counter', name: 'Balcão da padaria', x: 2.2, z: 3.2 },
      { type: 'cash_register', name: 'Caixa da padaria', x: 1.2, z: 3.2 },
      { type: 'display_case', name: 'Vitrine de doces', x: -1, z: 3.3 },
      { type: 'bookshelf', name: 'Prateleira de pães', x: -5.1, z: -1.4, rotation: 90 },
      { type: 'bookshelf', name: 'Prateleira de doces', x: 5.1, z: -1.4, rotation: 90 },
      { type: 'table', name: 'Mesa de degustação', x: -3.1, z: 2.5 },
      { type: 'chair', name: 'Cadeira de cliente', x: -3.1, z: 1.2 },
      { type: 'fridge', name: 'Geladeira de ingredientes', x: 5.3, z: -4.4, rotation: 90 },
      { type: 'plant_tree', name: 'Ficus da entrada', x: 6, z: 5.1 },
    ],
  },
  cafe: {
    wallMaterial: 'wood', floorMaterial: 'wood_oak', roofMaterial: 'roof_shingle_dark', roofType: 'hipped',
    items: [
      { type: 'counter', name: 'Balcão do café', x: 4.5, z: 3.2, rotation: 90 },
      { type: 'cash_register', name: 'Caixa do café', x: 4.5, z: 2.2, rotation: 90 },
      { type: 'menu_board', name: 'Menu do dia', x: -5.6, z: 5.8 },
      { type: 'fridge', name: 'Geladeira de bebidas', x: 6, z: -4.5 },
      { type: 'table', name: 'Mesa da janela', x: -4.5, z: 3.1 },
      { type: 'chair', name: 'Cadeira da janela', x: -4.5, z: 1.8 },
      { type: 'table', name: 'Mesa central', x: -1, z: -1.1 },
      { type: 'chair', name: 'Cadeira central 1', x: -2.1, z: -1.1 },
      { type: 'chair', name: 'Cadeira central 2', x: 0.1, z: -1.1 },
      { type: 'plant', name: 'Planta de mesa', x: -1, z: -1.1 },
      { type: 'plant_tree', name: 'Ficus do café', x: -6.2, z: -5.2 },
      { type: 'floor_lamp', name: 'Luminária de ambiente', x: 6, z: 5.1 },
    ],
  },
  restaurant: {
    wallMaterial: 'brick', floorMaterial: 'stone_slate', roofMaterial: 'roof_terracotta', roofType: 'gabled',
    items: [
      { type: 'counter', name: 'Balcão de atendimento', x: 5.4, z: 3.4, rotation: 90 },
      { type: 'table', name: 'Mesa para dois', x: -4.6, z: 3.2 },
      { type: 'chair', name: 'Cadeira mesa 1', x: -5.7, z: 3.2 },
      { type: 'chair', name: 'Cadeira mesa 2', x: -3.5, z: 3.2 },
      { type: 'table', name: 'Mesa familiar', x: -1.2, z: -1.2 },
      { type: 'chair', name: 'Cadeira família 1', x: -2.3, z: -1.2 },
      { type: 'chair', name: 'Cadeira família 2', x: -0.1, z: -1.2 },
      { type: 'fridge', name: 'Geladeira da cozinha', x: 5.4, z: -4.5 },
      { type: 'stove', name: 'Fogão da cozinha', x: 2.8, z: -4.6, rotation: 90 },
      { type: 'plant_tree', name: 'Ficus do salão', x: -6.1, z: -5.1 },
    ],
  },
  pharmacy: {
    wallMaterial: 'white', floorMaterial: 'tile_ceramic', roofMaterial: 'roof_metal', roofType: 'flat',
    items: [
      { type: 'counter', name: 'Balcão da farmácia', x: 0, z: 3.3 },
      { type: 'bookshelf', name: 'Gôndola de cuidados', x: -5.4, z: -1.3, rotation: 90 },
      { type: 'bookshelf', name: 'Gôndola de saúde', x: 5.4, z: -1.3, rotation: 90 },
      { type: 'bookshelf', name: 'Estante de produtos', x: 0, z: -4.8 },
      { type: 'chair', name: 'Cadeira de espera', x: -4.8, z: 4.3 },
      { type: 'plant', name: 'Planta de recepção', x: 6.1, z: 5.3 },
    ],
  },
  market: {
    wallMaterial: 'green', floorMaterial: 'tile_ceramic', roofMaterial: 'roof_metal', roofType: 'flat',
    items: [
      { type: 'counter', name: 'Caixa do mercado', x: 5.5, z: 3.3, rotation: 90 },
      { type: 'bookshelf', name: 'Gôndola de mercearia 1', x: -4.5, z: 2.1 },
      { type: 'bookshelf', name: 'Gôndola de mercearia 2', x: -1.2, z: 2.1 },
      { type: 'bookshelf', name: 'Gôndola de mercearia 3', x: 2.1, z: 2.1 },
      { type: 'fridge', name: 'Geladeira de bebidas', x: -5.7, z: -4.5, rotation: 90 },
      { type: 'fridge', name: 'Geladeira de laticínios', x: -3.2, z: -4.5, rotation: 90 },
      { type: 'plant_tree', name: 'Árvore da entrada', x: 6.2, z: 5.1 },
    ],
  },
  shop: {
    wallMaterial: 'beige', floorMaterial: 'wood_dark', roofMaterial: 'roof_shingle_dark', roofType: 'hipped',
    items: [
      { type: 'counter', name: 'Balcão da loja', x: 4.8, z: 3.1, rotation: 90 },
      { type: 'display_case', name: 'Vitrine central', x: 0, z: 1.8 },
      { type: 'cash_register', name: 'Caixa da loja', x: 4.8, z: 2.1, rotation: 90 },
      { type: 'bookshelf', name: 'Expositor lateral 1', x: -5.5, z: -1.4, rotation: 90 },
      { type: 'bookshelf', name: 'Expositor lateral 2', x: 5.5, z: -1.4, rotation: 90 },
      { type: 'table', name: 'Mesa de exposição', x: -1.4, z: -1 },
      { type: 'plant_tree', name: 'Planta da vitrine', x: -6.1, z: 5.1 },
    ],
  },
};

function makeWall(id: string, x1: number, z1: number, x2: number, z2: number, material: string): Wall {
  return { id, floor: 1, x1, z1, x2, z2, height: 3.2, thickness: 0.22, material };
}

export function createPredefinedStoreLot(storeType: string): HouseState {
  const base = getInitialHouseState();
  const style = STORE_STYLES[storeType] || STORE_STYLES.shop;
  const walls = [
    makeWall('store_left', -8, -7, -8, 7, style.wallMaterial),
    makeWall('store_right', 8, -7, 8, 7, style.wallMaterial),
    makeWall('store_back', -8, -7, 8, -7, style.wallMaterial),
    makeWall('store_front', -8, 7, 8, 7, style.wallMaterial),
    makeWall('store_storage_left', 3, -7, 3, -4, 'gray'),
    makeWall('store_storage_back', 3, -4, 8, -4, 'gray'),
  ];
  const rooms = detectRooms(1, walls).map((room, index) => ({
    ...room,
    name: index === 0 ? 'Área de atendimento' : 'Estoque',
    floorMaterial: style.floorMaterial,
  }));
  const doors: Door[] = [
    { id: 'store_entry', floor: 1, x: 0, z: 7, rotation: 0, name: 'Entrada da loja', cost: 0 },
  ];
  const windows: WindowItem[] = [
    { id: 'store_display_left', floor: 1, x: -4.6, z: 7, rotation: 0, name: 'Vitrine esquerda', cost: 0 },
    { id: 'store_display_right', floor: 1, x: 4.6, z: 7, rotation: 0, name: 'Vitrine direita', cost: 0 },
  ];
  const objects: FurnitureObject[] = style.items.map((item, index) => {
    const footprint = getFurnitureFootprint(item.type);
    return {
      id: `store_fixture_${index + 1}`,
      floor: 1,
      type: item.type,
      name: item.name,
      x: item.x,
      y: 0,
      z: item.z,
      rotation: item.rotation || 0,
      scale: 1,
      width: footprint.width,
      depth: footprint.depth,
      cost: 0,
    };
  });
  const roofs: Roof[] = [{
    id: 'store_roof', floor: 1, type: style.roofType, x: 0, z: 0, width: 16, depth: 14,
    height: style.roofType === 'flat' ? 1 : 2.6, pitchCurve: 0, overhang: 0.4,
    material: style.roofMaterial, rotation: 0, cost: 0,
  }];
  const storeFloor: FloorData = { walls, rooms, doors, windows, objects, roofs };
  return { ...base, currentFloor: 1, floors: { ...base.floors, 1: storeFloor } };
}

export function getPredefinedStoreName(storeType: string, cityName: string): string {
  const labels: Record<string, string> = {
    bakery: 'Padaria artesanal', cafe: 'Café de esquina', restaurant: 'Restaurante de bairro',
    pharmacy: 'Farmácia de bairro', market: 'Mercado local', supermarket: 'Supermercado',
    shop: 'Loja de bairro', store_m: 'Loja de departamentos', workshop: 'Oficina',
  };
  return labels[storeType] || cityName;
}