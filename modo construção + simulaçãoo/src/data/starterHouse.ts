import { HouseState, Wall, FurnitureObject, Door, WindowItem, Roof } from '../types/sims';
import { detectRooms } from '../systems/roomTopology';

export function getInitialHouseState(): HouseState {
  const floor1Walls: Wall[] = [
    // Living Room Outer Walls (x: -5 to 2, z: -3 to 4)
    { id: 'w1', floor: 1, x1: -5, z1: -3, x2: 2, z2: -3, height: 2.8, thickness: 0.2, material: 'white' },
    { id: 'w2', floor: 1, x1: 2, z1: -3, x2: 2, z2: 4, height: 2.8, thickness: 0.2, material: 'white' },
    { id: 'w3', floor: 1, x1: 2, z1: 4, x2: -5, z2: 4, height: 2.8, thickness: 0.2, material: 'white' },
    { id: 'w4', floor: 1, x1: -5, z1: 4, x2: -5, z2: -3, height: 2.8, thickness: 0.2, material: 'white' },

    // Bedroom Partition (x: 2 to 7, z: -3 to 4)
    { id: 'w5', floor: 1, x1: 2, z1: -3, x2: 7, z2: -3, height: 2.8, thickness: 0.2, material: 'beige' },
    { id: 'w6', floor: 1, x1: 7, z1: -3, x2: 7, z2: 4, height: 2.8, thickness: 0.2, material: 'beige' },
    { id: 'w7', floor: 1, x1: 7, z1: 4, x2: 2, z2: 4, height: 2.8, thickness: 0.2, material: 'beige' },

    // Bathroom (x: -5 to -1, z: -7 to -3)
    { id: 'w8', floor: 1, x1: -5, z1: -7, x2: -1, z2: -7, height: 2.8, thickness: 0.2, material: 'blue' },
    { id: 'w9', floor: 1, x1: -1, z1: -7, x2: -1, z2: -3, height: 2.8, thickness: 0.2, material: 'blue' },
    { id: 'w10', floor: 1, x1: -5, z1: -7, x2: -5, z2: -3, height: 2.8, thickness: 0.2, material: 'blue' },
  ];

  const floor1Doors: Door[] = [
    { id: 'd1', floor: 1, x: -1, z: 4, rotation: 0, name: 'Porta de Entrada', cost: 120 },
    { id: 'd2', floor: 1, x: 2, z: 0, rotation: 90, name: 'Porta Quarto', cost: 120 },
    { id: 'd3', floor: 1, x: -3, z: -3, rotation: 0, name: 'Porta Banheiro', cost: 120 },
  ];

  const floor1Windows: WindowItem[] = [
    { id: 'win1', floor: 1, x: -3, z: 4, rotation: 0, name: 'Janela Sala', cost: 90 },
    { id: 'win2', floor: 1, x: 5, z: 4, rotation: 0, name: 'Janela Quarto', cost: 90 },
    { id: 'win3', floor: 1, x: 7, z: 0, rotation: 90, name: 'Janela Lateral', cost: 90 },
  ];

  const floor1Furniture: FurnitureObject[] = [
    // Living room items
    { id: 'f1', floor: 1, type: 'sofa', name: 'Sofá Conforto', x: -1.5, y: 0, z: -0.5, rotation: 0, scale: 1, width: 2, depth: 1, cost: 350 },
    { id: 'f2', floor: 1, type: 'tv', name: 'Smart TV 4K', x: -1.5, y: 0, z: 2.5, rotation: 180, scale: 1, width: 1.8, depth: 0.5, cost: 420 },
    { id: 'f3', floor: 1, type: 'plant', name: 'Planta Tropical', x: 1, y: 0, z: 2.8, rotation: 0, scale: 1, width: 0.8, depth: 0.8, cost: 75 },
    { id: 'f4', floor: 1, type: 'lamp', name: 'Abajur Suave', x: -4, y: 0, z: -1.5, rotation: 0, scale: 1, width: 0.5, depth: 0.5, cost: 95 },

    // Bedroom items
    { id: 'f5', floor: 1, type: 'bed', name: 'Cama Casal', x: 4.5, y: 0, z: -1.5, rotation: 0, scale: 1, width: 2, depth: 2.2, cost: 500 },
    { id: 'f6', floor: 1, type: 'cabinet', name: 'Roupeiro', x: 6, y: 0, z: 2, rotation: 270, scale: 1, width: 1.2, depth: 0.6, cost: 280 },

    // Bathroom items
    { id: 'f7', floor: 1, type: 'toilet', name: 'Vaso Sanitário', x: -2.5, y: 0, z: -5.8, rotation: 0, scale: 1, width: 0.8, depth: 0.8, cost: 150 },
    { id: 'f8', floor: 1, type: 'bath', name: 'Banheira Spa', x: -4, y: 0, z: -5.5, rotation: 90, scale: 1, width: 1.6, depth: 0.9, cost: 650 },
  ];

  // Auto detect initial rooms with robust fallback
  let initialRooms = detectRooms(1, floor1Walls);
  if (!initialRooms || initialRooms.length === 0) {
    const livingCells: { x: number; z: number }[] = [];
    for (let x = -5; x < 2; x++) {
      for (let z = -3; z < 4; z++) {
        livingCells.push({ x, z });
      }
    }
    const bedroomCells: { x: number; z: number }[] = [];
    for (let x = 2; x < 7; x++) {
      for (let z = -3; z < 4; z++) {
        bedroomCells.push({ x, z });
      }
    }
    const bathCells: { x: number; z: number }[] = [];
    for (let x = -5; x < -1; x++) {
      for (let z = -7; z < -3; z++) {
        bathCells.push({ x, z });
      }
    }
    initialRooms = [
      {
        id: 'room_living_init',
        floor: 1,
        bounds: { minX: -5, maxX: 2, minZ: -3, maxZ: 4 },
        cells: livingCells,
        wallIds: ['w1', 'w2', 'w3', 'w4'],
        floorMaterial: 'wood_oak',
      },
      {
        id: 'room_bedroom_init',
        floor: 1,
        bounds: { minX: 2, maxX: 7, minZ: -3, maxZ: 4 },
        cells: bedroomCells,
        wallIds: ['w5', 'w6', 'w7', 'w2'],
        floorMaterial: 'wood_dark',
      },
      {
        id: 'room_bath_init',
        floor: 1,
        bounds: { minX: -5, maxX: -1, minZ: -7, maxZ: -3 },
        cells: bathCells,
        wallIds: ['w8', 'w9', 'w10', 'w1'],
        floorMaterial: 'tile_ceramic',
      },
    ];
  } else {
    initialRooms.forEach((r) => {
      // Check if it's the bathroom (z < -3)
      if (r.bounds.maxZ <= -3) {
        r.floorMaterial = 'tile_ceramic';
      } else if (r.bounds.minX >= 2) {
        // Bedroom
        r.floorMaterial = 'wood_dark';
      } else {
        // Living room
        r.floorMaterial = 'wood_oak';
      }
    });
  }

  const floor1Roofs: Roof[] = [
    {
      id: 'roof_main',
      floor: 1,
      type: 'hipped',
      x: 1,
      z: 0.5,
      width: 12,
      depth: 7,
      height: 2.2,
      pitchCurve: 0,
      overhang: 0.35,
      material: 'roof_shingle_dark',
      rotation: 0,
      cost: 450,
    },
    {
      id: 'roof_bath',
      floor: 1,
      type: 'gabled',
      x: -3,
      z: -5,
      width: 4,
      depth: 4,
      height: 1.6,
      pitchCurve: 0,
      overhang: 0.35,
      material: 'roof_shingle_dark',
      rotation: 0,
      cost: 200,
    },
  ];

  return {
    currentFloor: 1,
    money: {
      coins: 2589,
      cash: 141,
    },
    floors: {
      1: {
        walls: floor1Walls,
        rooms: initialRooms,
        doors: floor1Doors,
        windows: floor1Windows,
        objects: floor1Furniture,
        roofs: floor1Roofs,
      },
      2: {
        walls: [],
        rooms: [],
        doors: [],
        windows: [],
        objects: [],
        roofs: [],
      },
      3: {
        walls: [],
        rooms: [],
        doors: [],
        windows: [],
        objects: [],
        roofs: [],
      },
    },
  };
}
