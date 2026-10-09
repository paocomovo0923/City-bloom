import React, { useEffect, useRef, useState, useCallback } from 'react';
import {
  HouseState,
  CatalogItem,
  BuildToolMode,
  CameraViewMode,
  WallCutMode,
  FurnitureObject,
  ActionHistory,
  Wall,
  Door,
  WindowItem,
  Room,
  Roof,
  RoofType,
} from './types/sims';
import { getInitialHouseState } from './data/starterHouse';
import { createPredefinedStoreLot, getPredefinedStoreName } from './data/predefinedStoreLots';
import { detectRooms } from './systems/roomTopology';
import { HUDTop } from './components/HUDTop';
import { CatalogHUD } from './components/CatalogHUD';
import { SimsInspectorHUD } from './components/SimsInspectorHUD';
import { GameplayHUD, SimCharacter } from './components/GameplayHUD';
import { TheSimsPopup } from './components/TheSimsPopup';
import { DemolishModal } from './components/DemolishModal';
import { ScalePanel } from './components/ScalePanel';
import { CheatConsole, ConsoleLogEntry } from './components/CheatConsole';
import { executeCheatCommand } from './systems/cheatManager';

const STORAGE_KEY = 'sims_mobile_house_data_v3';
const LOT_STORAGE_PREFIX = `${STORAGE_KEY}:lot:`;

function isHouseLotEmpty(house: HouseState): boolean {
  return Object.values(house.floors).every((floor) =>
    floor.walls.length === 0 && floor.rooms.length === 0 && floor.doors.length === 0 &&
    floor.windows.length === 0 && floor.objects.length === 0 && (floor.roofs || []).length === 0
  );
}

export default function App() {
  // Game Screen Mode: 'mode-gameplay' | 'mode-build' | 'mode-city'
  const [screenMode, setScreenMode] = useState<'mode-gameplay' | 'mode-build' | 'mode-city'>('mode-city');
  const [isLotDemolished, setIsLotDemolished] = useState<boolean>(false);
  const [selectedLot, setSelectedLot] = useState<{
    id: string;
    name: string;
    area: number;
    category: 'res' | 'com';
    buildingType: string;
    cityCell?: { x: number; z: number };
  }>({ id: 'starter-home', name: 'Casa inicial', area: 576, category: 'res', buildingType: 'starter-home' });
  const [toastMessage, setToastMessage] = useState<string>('Modo Gameplay');
  const [isToastVisible, setIsToastVisible] = useState<boolean>(false);

  // House State & Persistence
  const [houseState, setHouseState] = useState<HouseState>(() => {
    try {
      const saved = localStorage.getItem(`${LOT_STORAGE_PREFIX}starter-home`) || localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // Fallback
    }
    return getInitialHouseState();
  });

  // Undo / Redo Stacks
  const [undoStack, setUndoStack] = useState<ActionHistory[]>([]);
  const [redoStack, setRedoStack] = useState<ActionHistory[]>([]);

  // Engine & 3D Interaction
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<import('./systems/threeEngine').ThreeSimsEngine | null>(null);
  const cityFrameRef = useRef<HTMLIFrameElement>(null);
  const returnModeRef = useRef<'mode-gameplay' | 'mode-build'>('mode-gameplay');

  // Build Tools, Active Item & Modes
  const [currentFloor, setCurrentFloor] = useState<number>(houseState.currentFloor || 1);
  const [activeTool, setActiveTool] = useState<BuildToolMode>('none');
  const [selectedCatalogItem, setSelectedCatalogItem] = useState<CatalogItem | null>(null);
  const [cameraMode, setCameraMode] = useState<CameraViewMode>('free');
  const [wallCutMode, setWallCutMode] = useState<WallCutMode>('cutaway');
  const [wallLength, setWallLength] = useState<number | null>(null);
  const [dimensionText, setDimensionText] = useState<string | null>(null);

  // Selected Object on Scene
  const [selectedObject, setSelectedObject] = useState<FurnitureObject | null>(null);
  const [contextMenuPos, setContextMenuPos] = useState<{ x: number; y: number } | null>(null);

  // The Sims 4 Style Selected Entities & Roof Visibility
  const [selectedRoof, setSelectedRoof] = useState<Roof | null>(null);
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [selectedWall, setSelectedWall] = useState<Wall | null>(null);
  const [showRoofs, setShowRoofs] = useState<boolean>(true);

  // UI Panels
  const [isScaleOpen, setIsScaleOpen] = useState<boolean>(false);
  const [uiScale, setUiScale] = useState<number>(100);
  const [isDemolishModalOpen, setIsDemolishModalOpen] = useState<boolean>(false);

  // Cheat System States
  const [isCheatConsoleOpen, setIsCheatConsoleOpen] = useState<boolean>(false);
  const [cheatLogs, setCheatLogs] = useState<ConsoleLogEntry[]>([]);
  const [freeRealEstate, setFreeRealEstate] = useState<boolean>(false);
  const [moveObjects, setMoveObjects] = useState<boolean>(false);

  // Keyboard shortcut Ctrl + Shift + C for Cheat Console
  useEffect(() => {
    const handleGlobalKeydown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'c' || e.key === 'C')) {
        e.preventDefault();
        setIsCheatConsoleOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleGlobalKeydown);
    return () => window.removeEventListener('keydown', handleGlobalKeydown);
  }, []);

  // Keep a ref to latest houseState & currentFloor for callbacks
  const houseStateRef = useRef(houseState);
  houseStateRef.current = houseState;
  const currentFloorRef = useRef(currentFloor);
  currentFloorRef.current = currentFloor;

  // Gameplay Sims
  const [householdSims, setHouseholdSims] = useState<SimCharacter[]>([
    {
      id: 0,
      name: 'Sim 1',
      icon: 'fa-user-ninja',
      mood: 'mood-happy',
      queue: [
        { id: 1, name: 'Regar Planta', icon: 'fa-seedling' },
        { id: 2, name: 'Usar Computador', icon: 'fa-laptop' },
      ],
    },
    {
      id: 1,
      name: 'Sim 2',
      icon: 'fa-user-astronaut',
      mood: 'mood-uncomfortable',
      queue: [{ id: 3, name: 'Dormir', icon: 'fa-bed' }],
    },
    {
      id: 2,
      name: 'Sim 3',
      icon: 'fa-user-tie',
      mood: 'mood-happy',
      queue: [
        { id: 4, name: 'Comer', icon: 'fa-utensils' },
        { id: 5, name: 'Tomar Banho', icon: 'fa-bath' },
      ],
    },
  ]);
  const [activeSimIndex, setActiveSimIndex] = useState<number>(0);

  // Helper: Toast notification
  const showToast = useCallback((msg: string) => {
    setToastMessage(msg);
    setIsToastVisible(true);
    setTimeout(() => {
      setIsToastVisible(false);
    }, 2000);
  }, []);

  // Execute Cheat Command Handler
  const handleExecuteCheatCommand = useCallback(
    (rawCmd: string) => {
      const timestamp = new Date().toLocaleTimeString();
      const newLog: ConsoleLogEntry = {
        id: `log_${Date.now()}_${Math.random()}`,
        type: 'command',
        text: `> ${rawCmd}`,
        timestamp,
      };

      const context = {
        coins: houseState.money.coins,
        cash: houseState.money.cash,
        playerLevel: 34,
        freeRealEstate,
        moveObjects,
        simsCount: householdSims.length,
        floorCount: Object.keys(houseState.floors).length,
      };

      const result = executeCheatCommand(rawCmd, context);

      if (!result.success) {
        setCheatLogs((prev) => [
          ...prev,
          newLog,
          {
            id: `log_err_${Date.now()}`,
            type: 'error',
            text: result.message,
            timestamp,
          },
        ]);
        showToast(result.message);
        return;
      }

      if (result.effect === 'money' && result.value) {
        const { mode, amount } = result.value;
        setHouseState((prev) => {
          const curCoins = prev.money.coins;
          const newCoins = mode === 'set' ? amount : curCoins + amount;
          return {
            ...prev,
            money: { ...prev.money, coins: Math.max(0, newCoins) },
          };
        });
      } else if (result.effect === 'cash' && result.value) {
        const { amount } = result.value;
        setHouseState((prev) => ({
          ...prev,
          money: { ...prev.money, cash: prev.money.cash + amount },
        }));
      } else if (result.effect === 'freerealestate') {
        setFreeRealEstate(result.value);
      } else if (result.effect === 'moveobjects') {
        setMoveObjects(result.value);
        if (engineRef.current) {
          engineRef.current.setMoveObjects(result.value);
        }
      } else if (result.effect === 'maxmotives') {
        setHouseholdSims((prev) =>
          prev.map((s) => ({ ...s, mood: 'mood-happy' }))
        );
      } else if (result.effect === 'addsim') {
        const simName = result.value;
        const newSim: SimCharacter = {
          id: householdSims.length,
          name: simName,
          icon: 'fa-user',
          mood: 'mood-happy',
          queue: [],
        };
        setHouseholdSims((prev) => [...prev, newSim]);
      } else if (result.effect === 'clear') {
        setCheatLogs([]);
        return;
      }

      setCheatLogs((prev) => [
        ...prev,
        newLog,
        {
          id: `log_res_${Date.now()}`,
          type: 'success',
          text: result.message,
          timestamp,
        },
      ]);
      showToast(result.message);
    },
    [freeRealEstate, moveObjects, householdSims.length, showToast, houseState.money.coins, houseState.money.cash, houseState.floors]
  );

  // Save to localStorage
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;
    const persist = () => {
      if (timer) clearTimeout(timer);
      try {
        const serialized = JSON.stringify(houseState);
        localStorage.setItem(`${LOT_STORAGE_PREFIX}${selectedLot.id}`, serialized);
        if (selectedLot.id === 'starter-home') localStorage.setItem(STORAGE_KEY, serialized);
      } catch {
        // Storage limits
      }
      if (selectedLot.id !== 'starter-home') {
        cityFrameRef.current?.contentWindow?.postMessage({
          source: 'cityhost',
          type: 'lot-updated',
          lot: {
            id: selectedLot.id,
            name: selectedLot.name,
            category: selectedLot.category,
            buildingType: selectedLot.buildingType,
            cityCell: selectedLot.cityCell,
            hasStructure: !isHouseLotEmpty(houseState),
          },
        }, window.location.origin);
      }
    };
    timer = setTimeout(persist, 220);
    window.addEventListener('pagehide', persist);
    return () => {
      if (timer) clearTimeout(timer);
      window.removeEventListener('pagehide', persist);
    };
  }, [houseState, selectedLot]);

  useEffect(() => {
    setIsLotDemolished(isHouseLotEmpty(houseState));
  }, [houseState]);

  // Wall Creation (Single straight wall)
  const handleCreateWall = useCallback((coords: { x1: number; z1: number; x2: number; z2: number }) => {
    const cost = 50;
    const fl = currentFloorRef.current;
    if (houseStateRef.current.money.coins < cost) {
      showToast('Simoleons insuficientes!');
      return;
    }

    const newWall: Wall = {
      id: `wall_${fl}_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
      floor: fl,
      x1: coords.x1,
      z1: coords.z1,
      x2: coords.x2,
      z2: coords.z2,
      height: 2.8,
      thickness: 0.22,
      material: 'white',
    };

    setHouseState((prev) => {
      const cur = prev.floors[fl] || { walls: [], rooms: [], doors: [], windows: [], objects: [] };
      const updatedWalls = [...cur.walls, newWall];
      const updatedRooms = detectRooms(fl, updatedWalls, cur.rooms);

      return {
        ...prev,
        money: { ...prev.money, coins: Math.max(0, prev.money.coins - cost) },
        floors: {
          ...prev.floors,
          [fl]: { ...cur, walls: updatedWalls, rooms: updatedRooms },
        },
      };
    });

    setUndoStack((prev) => [
      ...prev,
      {
        type: 'CREATE_WALL',
        data: newWall,
        undoData: newWall.id,
      },
    ]);
    setRedoStack([]);
    showToast('Parede construída!');
  }, [showToast]);

  // Batch Wall Creation (Cômodo / Quarto Completo - 4 paredes)
  const handleCreateWallsBatch = useCallback((wallsCoords: Array<{ x1: number; z1: number; x2: number; z2: number }>) => {
    const fl = currentFloorRef.current;
    const totalCost = wallsCoords.length * 50;
    if (houseStateRef.current.money.coins < totalCost) {
      showToast('Simoleons insuficientes!');
      return;
    }

    const newWalls: Wall[] = wallsCoords.map((c, i) => ({
      id: `wall_${fl}_${Date.now()}_${i}_${Math.floor(Math.random() * 1000)}`,
      floor: fl,
      x1: c.x1,
      z1: c.z1,
      x2: c.x2,
      z2: c.z2,
      height: 2.8,
      thickness: 0.22,
      material: 'white',
    }));

    setHouseState((prev) => {
      const cur = prev.floors[fl] || { walls: [], rooms: [], doors: [], windows: [], objects: [] };
      const updatedWalls = [...cur.walls, ...newWalls];
      const updatedRooms = detectRooms(fl, updatedWalls, cur.rooms);

      return {
        ...prev,
        money: { ...prev.money, coins: Math.max(0, prev.money.coins - totalCost) },
        floors: {
          ...prev.floors,
          [fl]: { ...cur, walls: updatedWalls, rooms: updatedRooms },
        },
      };
    });

    setUndoStack((prev) => [
      ...prev,
      {
        type: 'CREATE_WALLS_BATCH',
        data: newWalls,
        undoData: newWalls.map((w) => w.id),
      },
    ]);
    setRedoStack([]);
    showToast('Novo cômodo criado com 4 paredes!');
  }, [showToast]);

  // Place Furniture Object
  const handlePlaceObject = useCallback((data: {
    type: string;
    name: string;
    x: number;
    z: number;
    rotation: number;
  }) => {
    const fl = currentFloorRef.current;
    const cost = 100;
    if (houseStateRef.current.money.coins < cost) {
      showToast('Simoleons insuficientes!');
      return;
    }

    const newObj: FurnitureObject = {
      id: `furn_${fl}_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
      floor: fl,
      type: data.type,
      name: data.name,
      x: data.x,
      y: 0,
      z: data.z,
      rotation: data.rotation,
      scale: 1,
      width: 1,
      depth: 1,
      cost,
    };

    setHouseState((prev) => {
      const cur = prev.floors[fl] || { walls: [], rooms: [], doors: [], windows: [], objects: [] };
      return {
        ...prev,
        money: { ...prev.money, coins: Math.max(0, prev.money.coins - cost) },
        floors: {
          ...prev.floors,
          [fl]: { ...cur, objects: [...cur.objects, newObj] },
        },
      };
    });

    setUndoStack((prev) => [
      ...prev,
      {
        type: 'PLACE_OBJECT',
        data: newObj,
        undoData: newObj.id,
      },
    ]);
    setRedoStack([]);
    showToast(`${data.name} posicionado!`);
  }, [showToast]);

  // Place Door
  const handlePlaceDoor = useCallback((data: { x: number; z: number; rotation: number }) => {
    const fl = currentFloorRef.current;
    const cost = 120;
    if (houseStateRef.current.money.coins < cost) {
      showToast('Simoleons insuficientes!');
      return;
    }

    const newDoor: Door = {
      id: `door_${fl}_${Date.now()}`,
      floor: fl,
      x: data.x,
      z: data.z,
      rotation: data.rotation,
      name: 'Porta',
      cost,
    };

    setHouseState((prev) => {
      const cur = prev.floors[fl] || { walls: [], rooms: [], doors: [], windows: [], objects: [] };
      return {
        ...prev,
        money: { ...prev.money, coins: Math.max(0, prev.money.coins - cost) },
        floors: {
          ...prev.floors,
          [fl]: { ...cur, doors: [...cur.doors, newDoor] },
        },
      };
    });

    setUndoStack((prev) => [
      ...prev,
      {
        type: 'PLACE_DOOR',
        data: newDoor,
        undoData: newDoor.id,
      },
    ]);
    setRedoStack([]);
    showToast('Porta instalada com abertura na parede!');
  }, [showToast]);

  // Place Window
  const handlePlaceWindow = useCallback((data: { x: number; z: number; rotation: number }) => {
    const fl = currentFloorRef.current;
    const cost = 90;
    if (houseStateRef.current.money.coins < cost) {
      showToast('Simoleons insuficientes!');
      return;
    }

    const newWin: WindowItem = {
      id: `win_${fl}_${Date.now()}`,
      floor: fl,
      x: data.x,
      z: data.z,
      rotation: data.rotation,
      name: 'Janela',
      cost,
    };

    setHouseState((prev) => {
      const cur = prev.floors[fl] || { walls: [], rooms: [], doors: [], windows: [], objects: [] };
      return {
        ...prev,
        money: { ...prev.money, coins: Math.max(0, prev.money.coins - cost) },
        floors: {
          ...prev.floors,
          [fl]: { ...cur, windows: [...cur.windows, newWin] },
        },
      };
    });

    setUndoStack((prev) => [
      ...prev,
      {
        type: 'PLACE_WINDOW',
        data: newWin,
        undoData: newWin.id,
      },
    ]);
    setRedoStack([]);
    showToast('Janela instalada com abertura na parede!');
  }, [showToast]);

  // Wall Click (Wall Painting or Individual Wall Gizmo Selection)
  const handleWallClick = useCallback((wall: Wall) => {
    const fl = currentFloorRef.current;
    if (selectedCatalogItem?.materialKey) {
      const newMat = selectedCatalogItem.materialKey;
      const prevMat = wall.material;

      setHouseState((prev) => {
        const cur = prev.floors[fl];
        return {
          ...prev,
          floors: {
            ...prev.floors,
            [fl]: {
              ...cur,
              walls: cur.walls.map((w) => (w.id === wall.id ? { ...w, material: newMat } : w)),
            },
          },
        };
      });

      setUndoStack((prev) => [
        ...prev,
        {
          type: 'CHANGE_WALL_MATERIAL',
          data: { wallId: wall.id, material: newMat },
          undoData: { wallId: wall.id, material: prevMat },
        },
      ]);
      setRedoStack([]);
      showToast(`Revestimento de parede aplicado: ${selectedCatalogItem.name}`);
    } else {
      setSelectedWall(wall);
      setSelectedRoof(null);
      setSelectedRoom(null);
      setSelectedObject(null);
      if (engineRef.current) {
        engineRef.current.selectWall(wall);
      }
    }
  }, [selectedCatalogItem, showToast]);

  // Room Click (Floor Painting or Room Block Gizmo Selection)
  const handleRoomClick = useCallback((room: any) => {
    const fl = currentFloorRef.current;
    if (selectedCatalogItem?.materialKey) {
      const newMat = selectedCatalogItem.materialKey;
      const prevMat = room.floorMaterial;

      setHouseState((prev) => {
        const cur = prev.floors[fl];
        return {
          ...prev,
          floors: {
            ...prev.floors,
            [fl]: {
              ...cur,
              rooms: cur.rooms.map((r) => (r.id === room.id ? { ...r, floorMaterial: newMat } : r)),
            },
          },
        };
      });

      setUndoStack((prev) => [
        ...prev,
        {
          type: 'CHANGE_FLOOR',
          data: { roomId: room.id, material: newMat },
          undoData: { roomId: room.id, material: prevMat },
        },
      ]);
      setRedoStack([]);
      showToast(`Piso aplicado: ${selectedCatalogItem.name}`);
    } else {
      setSelectedRoom(room);
      setSelectedRoof(null);
      setSelectedWall(null);
      setSelectedObject(null);
      if (engineRef.current) {
        engineRef.current.selectRoom(room);
      }
    }
  }, [selectedCatalogItem, showToast]);

  // =========================================================================
  // THE SIMS 4 ROOF SYSTEM HANDLERS
  // =========================================================================
  const handleRoofPlaced = useCallback(
    (roofData: { type: RoofType; x: number; z: number; width: number; depth: number; height: number; material: string }) => {
      const fl = currentFloorRef.current;
      const newRoof: Roof = {
        id: `roof_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
        floor: fl,
        type: roofData.type,
        x: roofData.x,
        z: roofData.z,
        width: roofData.width,
        depth: roofData.depth,
        height: roofData.height,
        pitchCurve: 0,
        overhang: 0.35,
        material: roofData.material,
        rotation: 0,
        cost: 350,
      };

      setHouseState((prev) => {
        const cur = prev.floors[fl];
        return {
          ...prev,
          floors: {
            ...prev.floors,
            [fl]: {
              ...cur,
              roofs: [...(cur.roofs || []), newRoof],
            },
          },
        };
      });

      setUndoStack((prev) => [
        ...prev,
        {
          type: 'CREATE_ROOF',
          data: newRoof,
          undoData: newRoof.id,
        },
      ]);
      setRedoStack([]);
      setSelectedRoof(newRoof);
      if (engineRef.current) {
        engineRef.current.selectRoof(newRoof);
      }
      showToast('Telhado instalado! Use os gizmos 3D estilo The Sims 4 para ajustar.');
    },
    [showToast]
  );

  const handleRoofClicked = useCallback((roof: Roof) => {
    setSelectedRoof(roof);
    setSelectedRoom(null);
    setSelectedWall(null);
    setSelectedObject(null);
    if (engineRef.current) {
      engineRef.current.selectRoof(roof);
    }
  }, []);

  const handleRoofUpdated = useCallback((updatedRoof: Roof) => {
    const fl = updatedRoof.floor;
    setHouseState((prev) => {
      const cur = prev.floors[fl];
      return {
        ...prev,
        floors: {
          ...prev.floors,
          [fl]: {
            ...cur,
            roofs: (cur.roofs || []).map((r) => (r.id === updatedRoof.id ? updatedRoof : r)),
          },
        },
      };
    });
    setSelectedRoof(updatedRoof);
  }, []);

  const handleDeleteRoof = useCallback(
    (roofId: string) => {
      const fl = currentFloorRef.current;
      setHouseState((prev) => {
        const cur = prev.floors[fl];
        return {
          ...prev,
          floors: {
            ...prev.floors,
            [fl]: {
              ...cur,
              roofs: (cur.roofs || []).filter((r) => r.id !== roofId),
            },
          },
        };
      });
      setSelectedRoof(null);
      if (engineRef.current) {
        engineRef.current.selectRoof(null);
      }
      showToast('Telhado removido!');
    },
    [showToast]
  );

  const handleRotateRoof = useCallback((roofId: string) => {
    const fl = currentFloorRef.current;
    setHouseState((prev) => {
      const cur = prev.floors[fl];
      return {
        ...prev,
        floors: {
          ...prev.floors,
          [fl]: {
            ...cur,
            roofs: (cur.roofs || []).map((r) =>
              r.id === roofId ? { ...r, rotation: (r.rotation + 90) % 360 } : r
            ),
          },
        },
      };
    });
  }, []);

  const handleToggleRoofs = useCallback(() => {
    setShowRoofs((prev) => {
      const next = !prev;
      if (engineRef.current) {
        engineRef.current.setShowRoofs(next);
      }
      showToast(next ? 'Telhados 3D Visíveis' : 'Telhados Ocultos (Vista Interior)');
      return next;
    });
  }, [showToast]);

  // =========================================================================
  // ROOM EDITING & ROOF GENERATION HANDLERS
  // =========================================================================
  const handleRoomResized = useCallback((room: Room, newBounds: { minX: number; maxX: number; minZ: number; maxZ: number }) => {
    const fl = room.floor;
    setHouseState((prev) => {
      const cur = prev.floors[fl];
      const updatedRooms = cur.rooms.map((r) => (r.id === room.id ? { ...r, bounds: newBounds } : r));
      return {
        ...prev,
        floors: {
          ...prev.floors,
          [fl]: {
            ...cur,
            rooms: updatedRooms,
          },
        },
      };
    });
  }, []);

  const handleGenerateRoofForRoom = useCallback((room: Room) => {
    const fl = room.floor;
    const w = Math.max(3, room.bounds.maxX - room.bounds.minX);
    const d = Math.max(3, room.bounds.maxZ - room.bounds.minZ);
    const cx = (room.bounds.minX + room.bounds.maxX) / 2;
    const cz = (room.bounds.minZ + room.bounds.maxZ) / 2;

    const newRoof: Roof = {
      id: `roof_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
      floor: fl,
      type: 'hipped',
      x: cx,
      z: cz,
      width: w,
      depth: d,
      height: 2.2,
      pitchCurve: 0,
      overhang: 0.35,
      material: 'roof_shingle_dark',
      rotation: 0,
      cost: 350,
    };

    setHouseState((prev) => {
      const cur = prev.floors[fl];
      return {
        ...prev,
        floors: {
          ...prev.floors,
          [fl]: {
            ...cur,
            roofs: [...(cur.roofs || []), newRoof],
          },
        },
      };
    });

    setSelectedRoof(newRoof);
    setSelectedRoom(null);
    if (engineRef.current) {
      engineRef.current.selectRoof(newRoof);
    }
    showToast('Telhado gerado sob medida para este cômodo!');
  }, [showToast]);

  const handleDeleteRoom = useCallback((room: Room) => {
    const fl = room.floor;
    setHouseState((prev) => {
      const cur = prev.floors[fl];
      return {
        ...prev,
        floors: {
          ...prev.floors,
          [fl]: {
            ...cur,
            rooms: cur.rooms.filter((r) => r.id !== room.id),
          },
        },
      };
    });
    setSelectedRoom(null);
    if (engineRef.current) {
      engineRef.current.selectRoom(null);
    }
    showToast('Cômodo excluído!');
  }, [showToast]);

  const handlePaintRoomFloor = useCallback((room: Room, materialKey: string) => {
    const fl = room.floor;
    setHouseState((prev) => {
      const cur = prev.floors[fl];
      return {
        ...prev,
        floors: {
          ...prev.floors,
          [fl]: {
            ...cur,
            rooms: cur.rooms.map((r) => (r.id === room.id ? { ...r, floorMaterial: materialKey } : r)),
          },
        },
      };
    });
    showToast('Piso aplicado em todo o cômodo!');
  }, [showToast]);

  const handlePaintRoomWalls = useCallback((room: Room, materialKey: string) => {
    const fl = room.floor;
    setHouseState((prev) => {
      const cur = prev.floors[fl];
      const wallIdSet = new Set(room.wallIds || []);
      return {
        ...prev,
        floors: {
          ...prev.floors,
          [fl]: {
            ...cur,
            walls: cur.walls.map((w) => (wallIdSet.has(w.id) ? { ...w, material: materialKey } : w)),
          },
        },
      };
    });
    showToast('Revestimento aplicado em todas as paredes do cômodo!');
  }, [showToast]);

  // =========================================================================
  // WALL EDITING HANDLERS
  // =========================================================================
  const handleWallResized = useCallback((wall: Wall, updates: Partial<Wall>) => {
    const fl = wall.floor;
    setHouseState((prev) => {
      const cur = prev.floors[fl];
      return {
        ...prev,
        floors: {
          ...prev.floors,
          [fl]: {
            ...cur,
            walls: cur.walls.map((w) => (w.id === wall.id ? { ...w, ...updates } : w)),
          },
        },
      };
    });
  }, []);

  const handleUpdateWall = useCallback((wall: Wall, updates: Partial<Wall>) => {
    const fl = wall.floor;
    setHouseState((prev) => {
      const cur = prev.floors[fl];
      return {
        ...prev,
        floors: {
          ...prev.floors,
          [fl]: {
            ...cur,
            walls: cur.walls.map((w) => (w.id === wall.id ? { ...w, ...updates } : w)),
          },
        },
      };
    });
    setSelectedWall((prev) => (prev ? { ...prev, ...updates } : null));
    showToast('Parede atualizada!');
  }, [showToast]);

  const handleDeleteWall = useCallback((wallId: string) => {
    const fl = currentFloorRef.current;
    setHouseState((prev) => {
      const cur = prev.floors[fl];
      return {
        ...prev,
        floors: {
          ...prev.floors,
          [fl]: {
            ...cur,
            walls: cur.walls.filter((w) => w.id !== wallId),
          },
        },
      };
    });
    setSelectedWall(null);
    if (engineRef.current) {
      engineRef.current.selectWall(null);
    }
    showToast('Parede removida!');
  }, [showToast]);

  const handleCloseSelection = useCallback(() => {
    setSelectedRoof(null);
    setSelectedRoom(null);
    setSelectedWall(null);
    if (engineRef.current) {
      engineRef.current.clearSelection();
    }
  }, []);

  // Floor Tile Placed (Painting or adding custom floor tile/room)
  const handleFloorTilePlaced = useCallback(
    (tile: { x: number; z: number; floor: number; material: string }) => {
      const fl = tile.floor;
      setHouseState((prev) => {
        const cur = prev.floors[fl];
        const existingRoomIdx = cur.rooms.findIndex(
          (r) => r.cells && r.cells.some((c) => c.x === tile.x && c.z === tile.z)
        );

        if (existingRoomIdx >= 0) {
          const updatedRooms = [...cur.rooms];
          updatedRooms[existingRoomIdx] = {
            ...updatedRooms[existingRoomIdx],
            floorMaterial: tile.material,
          };
          return {
            ...prev,
            floors: {
              ...prev.floors,
              [fl]: {
                ...cur,
                rooms: updatedRooms,
              },
            },
          };
        } else {
          const customFloorRoomId = `floor_tile_${tile.x}_${tile.z}_${Date.now()}`;
          const newRoom: Room = {
            id: customFloorRoomId,
            floor: fl,
            bounds: { minX: tile.x, maxX: tile.x + 1, minZ: tile.z, maxZ: tile.z + 1 },
            cells: [{ x: tile.x, z: tile.z }],
            wallIds: [],
            floorMaterial: tile.material,
          };
          return {
            ...prev,
            floors: {
              ...prev.floors,
              [fl]: {
                ...cur,
                rooms: [...cur.rooms, newRoom],
              },
            },
          };
        }
      });
      showToast('Piso aplicado!');
    },
    [showToast]
  );

  // Delete item with Sledgehammer
  const handleDeleteItem = useCallback((type: 'wall' | 'object' | 'door' | 'window', id: string) => {
    const fl = currentFloorRef.current;
    let deletedRecord: any = null;

    setHouseState((prev) => {
      const cur = prev.floors[fl];
      let refund = 0;

      let updatedWalls = cur.walls;
      let updatedObjects = cur.objects;
      let updatedDoors = cur.doors;
      let updatedWindows = cur.windows;

      if (type === 'wall') {
        const found = cur.walls.find((w) => w.id === id);
        if (found) {
          refund = 40;
          deletedRecord = found;
        }
        updatedWalls = cur.walls.filter((w) => w.id !== id);
      } else if (type === 'object') {
        const found = cur.objects.find((o) => o.id === id);
        if (found) {
          refund = Math.round((found.cost || 100) * 0.8);
          deletedRecord = found;
        }
        updatedObjects = cur.objects.filter((o) => o.id !== id);
      } else if (type === 'door') {
        const found = cur.doors.find((d) => d.id === id);
        if (found) {
          refund = 90;
          deletedRecord = found;
        }
        updatedDoors = cur.doors.filter((d) => d.id !== id);
      } else if (type === 'window') {
        const found = cur.windows.find((w) => w.id === id);
        if (found) {
          refund = 70;
          deletedRecord = found;
        }
        updatedWindows = cur.windows.filter((w) => w.id !== id);
      }

      const updatedRooms = detectRooms(fl, updatedWalls, cur.rooms);

      return {
        ...prev,
        money: { ...prev.money, coins: prev.money.coins + refund },
        floors: {
          ...prev.floors,
          [fl]: {
            ...cur,
            walls: updatedWalls,
            rooms: updatedRooms,
            doors: updatedDoors,
            windows: updatedWindows,
            objects: updatedObjects,
          },
        },
      };
    });

    if (deletedRecord) {
      const actionTypeMap = {
        wall: 'DELETE_WALL',
        object: 'DELETE_OBJECT',
        door: 'DELETE_DOOR',
        window: 'DELETE_WINDOW',
      } as const;

      setUndoStack((prev) => [
        ...prev,
        {
          type: actionTypeMap[type],
          data: id,
          undoData: deletedRecord,
        },
      ]);
      setRedoStack([]);
    }

    showToast('Item removido com sucesso!');
  }, [showToast]);

  // Rotate Selected Object
  const handleRotateSelectedObject = useCallback(() => {
    if (!selectedObject) return;
    const fl = currentFloorRef.current;
    const prevRot = selectedObject.rotation;
    const newRot = (prevRot + 90) % 360;

    setHouseState((prev) => {
      const cur = prev.floors[fl];
      return {
        ...prev,
        floors: {
          ...prev.floors,
          [fl]: {
            ...cur,
            objects: cur.objects.map((o) => (o.id === selectedObject.id ? { ...o, rotation: newRot } : o)),
          },
        },
      };
    });

    setSelectedObject({ ...selectedObject, rotation: newRot });
    if (engineRef.current) {
      engineRef.current.rotateGhost();
    }

    setUndoStack((prev) => [
      ...prev,
      {
        type: 'ROTATE_OBJECT',
        data: { id: selectedObject.id, rotation: newRot },
        undoData: { id: selectedObject.id, rotation: prevRot },
      },
    ]);
    setRedoStack([]);
    showToast(`Girado para ${newRot}°`);
  }, [selectedObject, showToast]);

  const handleMoveSelectedObject = useCallback(() => {
    if (!selectedObject) return;
    const catalogItem: CatalogItem = {
      id: `move_${selectedObject.id}`,
      name: selectedObject.name,
      icon: 'fa-couch',
      type: 'furniture',
      subType: selectedObject.type,
      cost: 0,
    };
    setSelectedCatalogItem(catalogItem);
    setActiveTool('furniture');

    if (engineRef.current) {
      engineRef.current.setGhostItem(
        catalogItem,
        selectedObject.rotation,
        selectedObject.colorVariant || 0
      );
    }

    // Remove from placed objects while repositioning
    handleDeleteItem('object', selectedObject.id);
    setSelectedObject(null);
    setContextMenuPos(null);
    showToast('Posicione o objeto no novo local');
  }, [selectedObject, handleDeleteItem, showToast]);

  const handleDuplicateSelectedObject = useCallback(() => {
    if (!selectedObject) return;
    const catalogItem: CatalogItem = {
      id: `dup_${Date.now()}`,
      name: selectedObject.name,
      icon: 'fa-clone',
      type: 'furniture',
      subType: selectedObject.type,
      cost: selectedObject.cost || 100,
    };
    setSelectedCatalogItem(catalogItem);
    setActiveTool('furniture');
    setSelectedObject(null);
    setContextMenuPos(null);
    showToast(`Posicione a cópia de ${selectedObject.name}`);
  }, [selectedObject, showToast]);

  const handleSellSelectedObject = useCallback(() => {
    if (!selectedObject) return;
    handleDeleteItem('object', selectedObject.id);
    setSelectedObject(null);
    setContextMenuPos(null);
  }, [selectedObject, handleDeleteItem]);

  const handleConfirmSelectedObject = useCallback(() => {
    setSelectedObject(null);
    setContextMenuPos(null);
    if (engineRef.current) engineRef.current.highlightSelectedObject(null);
    showToast('Posicionamento confirmado!');
  }, [showToast]);

  const handleVariantChange = useCallback((variantIndex: number) => {
    if (!selectedObject) return;
    const fl = currentFloorRef.current;
    const oldVariant = selectedObject.colorVariant || 0;

    setHouseState((prev) => {
      const cur = prev.floors[fl];
      return {
        ...prev,
        floors: {
          ...prev.floors,
          [fl]: {
            ...cur,
            objects: cur.objects.map((o) =>
              o.id === selectedObject.id ? { ...o, colorVariant: variantIndex } : o
            ),
          },
        },
      };
    });

    setSelectedObject((prev) => (prev ? { ...prev, colorVariant: variantIndex } : null));

    setUndoStack((prev) => [
      ...prev,
      {
        type: 'CHANGE_VARIANT',
        data: { id: selectedObject.id, colorVariant: variantIndex },
        undoData: { id: selectedObject.id, colorVariant: oldVariant },
      },
    ]);
    setRedoStack([]);
  }, [selectedObject]);

  // Robust Undo System
  const handleUndo = useCallback(() => {
    if (undoStack.length === 0) return;
    const lastAction = undoStack[undoStack.length - 1];
    const newUndoStack = undoStack.slice(0, -1);
    const fl = currentFloorRef.current;

    setHouseState((prev) => {
      const cur = prev.floors[fl];

      switch (lastAction.type) {
        case 'CREATE_WALL': {
          const wallId = lastAction.undoData;
          const updatedWalls = cur.walls.filter((w) => w.id !== wallId);
          const updatedRooms = detectRooms(fl, updatedWalls, cur.rooms);
          return {
            ...prev,
            money: { ...prev.money, coins: prev.money.coins + 50 },
            floors: { ...prev.floors, [fl]: { ...cur, walls: updatedWalls, rooms: updatedRooms } },
          };
        }
        case 'CREATE_WALLS_BATCH': {
          const wallIds: string[] = lastAction.undoData;
          const updatedWalls = cur.walls.filter((w) => !wallIds.includes(w.id));
          const updatedRooms = detectRooms(fl, updatedWalls, cur.rooms);
          const refund = wallIds.length * 50;
          return {
            ...prev,
            money: { ...prev.money, coins: prev.money.coins + refund },
            floors: { ...prev.floors, [fl]: { ...cur, walls: updatedWalls, rooms: updatedRooms } },
          };
        }
        case 'DELETE_WALL': {
          const wall: Wall = lastAction.undoData;
          const updatedWalls = [...cur.walls, wall];
          const updatedRooms = detectRooms(fl, updatedWalls, cur.rooms);
          return {
            ...prev,
            money: { ...prev.money, coins: Math.max(0, prev.money.coins - 40) },
            floors: { ...prev.floors, [fl]: { ...cur, walls: updatedWalls, rooms: updatedRooms } },
          };
        }
        case 'PLACE_OBJECT': {
          const objId = lastAction.undoData;
          return {
            ...prev,
            money: { ...prev.money, coins: prev.money.coins + 100 },
            floors: {
              ...prev.floors,
              [fl]: { ...cur, objects: cur.objects.filter((o) => o.id !== objId) },
            },
          };
        }
        case 'DELETE_OBJECT': {
          const obj: FurnitureObject = lastAction.undoData;
          return {
            ...prev,
            money: { ...prev.money, coins: Math.max(0, prev.money.coins - (obj.cost || 100) * 0.8) },
            floors: {
              ...prev.floors,
              [fl]: { ...cur, objects: [...cur.objects, obj] },
            },
          };
        }
        case 'ROTATE_OBJECT': {
          const { id, rotation } = lastAction.undoData;
          return {
            ...prev,
            floors: {
              ...prev.floors,
              [fl]: {
                ...cur,
                objects: cur.objects.map((o) => (o.id === id ? { ...o, rotation } : o)),
              },
            },
          };
        }
        case 'PLACE_DOOR': {
          const doorId = lastAction.undoData;
          return {
            ...prev,
            money: { ...prev.money, coins: prev.money.coins + 120 },
            floors: {
              ...prev.floors,
              [fl]: { ...cur, doors: cur.doors.filter((d) => d.id !== doorId) },
            },
          };
        }
        case 'DELETE_DOOR': {
          const door: Door = lastAction.undoData;
          return {
            ...prev,
            money: { ...prev.money, coins: Math.max(0, prev.money.coins - 90) },
            floors: {
              ...prev.floors,
              [fl]: { ...cur, doors: [...cur.doors, door] },
            },
          };
        }
        case 'PLACE_WINDOW': {
          const winId = lastAction.undoData;
          return {
            ...prev,
            money: { ...prev.money, coins: prev.money.coins + 90 },
            floors: {
              ...prev.floors,
              [fl]: { ...cur, windows: cur.windows.filter((w) => w.id !== winId) },
            },
          };
        }
        case 'DELETE_WINDOW': {
          const win: WindowItem = lastAction.undoData;
          return {
            ...prev,
            money: { ...prev.money, coins: Math.max(0, prev.money.coins - 70) },
            floors: {
              ...prev.floors,
              [fl]: { ...cur, windows: [...cur.windows, win] },
            },
          };
        }
        case 'CHANGE_WALL_MATERIAL': {
          const { wallId, material } = lastAction.undoData;
          return {
            ...prev,
            floors: {
              ...prev.floors,
              [fl]: {
                ...cur,
                walls: cur.walls.map((w) => (w.id === wallId ? { ...w, material } : w)),
              },
            },
          };
        }
        case 'CHANGE_FLOOR': {
          const { roomId, material } = lastAction.undoData;
          return {
            ...prev,
            floors: {
              ...prev.floors,
              [fl]: {
                ...cur,
                rooms: cur.rooms.map((r) => (r.id === roomId ? { ...r, floorMaterial: material } : r)),
              },
            },
          };
        }
        case 'CHANGE_VARIANT': {
          const { id, colorVariant } = lastAction.undoData;
          return {
            ...prev,
            floors: {
              ...prev.floors,
              [fl]: {
                ...cur,
                objects: cur.objects.map((o) => (o.id === id ? { ...o, colorVariant } : o)),
              },
            },
          };
        }
        case 'DEMOLISH_LOT': {
          const restoredFloors = lastAction.undoData.floors;
          setIsLotDemolished(isHouseLotEmpty({ ...prev, floors: restoredFloors }));
          return {
            ...prev,
            floors: restoredFloors,
          };
        }
        default:
          return prev;
      }
    });

    setRedoStack((prev) => [...prev, lastAction]);
    setUndoStack(newUndoStack);
    showToast('Ação desfeita!');
  }, [undoStack, showToast]);

  // Robust Redo System
  const handleRedo = useCallback(() => {
    if (redoStack.length === 0) return;
    const action = redoStack[redoStack.length - 1];
    const newRedoStack = redoStack.slice(0, -1);
    const fl = currentFloorRef.current;

    setHouseState((prev) => {
      const cur = prev.floors[fl];

      switch (action.type) {
        case 'CREATE_WALL': {
          const wall: Wall = action.data;
          const updatedWalls = [...cur.walls, wall];
          const updatedRooms = detectRooms(fl, updatedWalls, cur.rooms);
          return {
            ...prev,
            money: { ...prev.money, coins: Math.max(0, prev.money.coins - 50) },
            floors: { ...prev.floors, [fl]: { ...cur, walls: updatedWalls, rooms: updatedRooms } },
          };
        }
        case 'CREATE_WALLS_BATCH': {
          const walls: Wall[] = action.data;
          const updatedWalls = [...cur.walls, ...walls];
          const updatedRooms = detectRooms(fl, updatedWalls, cur.rooms);
          const cost = walls.length * 50;
          return {
            ...prev,
            money: { ...prev.money, coins: Math.max(0, prev.money.coins - cost) },
            floors: { ...prev.floors, [fl]: { ...cur, walls: updatedWalls, rooms: updatedRooms } },
          };
        }
        case 'DEMOLISH_LOT': {
          setIsLotDemolished(isHouseLotEmpty({ ...prev, floors: action.data.floors }));
          return { ...prev, floors: action.data.floors };
        }
        case 'DELETE_WALL': {
          const wallId = action.data;
          const updatedWalls = cur.walls.filter((w) => w.id !== wallId);
          const updatedRooms = detectRooms(fl, updatedWalls, cur.rooms);
          return {
            ...prev,
            money: { ...prev.money, coins: prev.money.coins + 40 },
            floors: { ...prev.floors, [fl]: { ...cur, walls: updatedWalls, rooms: updatedRooms } },
          };
        }
        case 'PLACE_OBJECT': {
          const obj: FurnitureObject = action.data;
          return {
            ...prev,
            money: { ...prev.money, coins: Math.max(0, prev.money.coins - 100) },
            floors: {
              ...prev.floors,
              [fl]: { ...cur, objects: [...cur.objects, obj] },
            },
          };
        }
        case 'DELETE_OBJECT': {
          const objId = action.data;
          return {
            ...prev,
            money: { ...prev.money, coins: prev.money.coins + 80 },
            floors: {
              ...prev.floors,
              [fl]: { ...cur, objects: cur.objects.filter((o) => o.id !== objId) },
            },
          };
        }
        case 'ROTATE_OBJECT': {
          const { id, rotation } = action.data;
          return {
            ...prev,
            floors: {
              ...prev.floors,
              [fl]: {
                ...cur,
                objects: cur.objects.map((o) => (o.id === id ? { ...o, rotation } : o)),
              },
            },
          };
        }
        case 'PLACE_DOOR': {
          const door: Door = action.data;
          return {
            ...prev,
            money: { ...prev.money, coins: Math.max(0, prev.money.coins - 120) },
            floors: {
              ...prev.floors,
              [fl]: { ...cur, doors: [...cur.doors, door] },
            },
          };
        }
        case 'DELETE_DOOR': {
          const doorId = action.data;
          return {
            ...prev,
            money: { ...prev.money, coins: prev.money.coins + 90 },
            floors: {
              ...prev.floors,
              [fl]: { ...cur, doors: cur.doors.filter((d) => d.id !== doorId) },
            },
          };
        }
        case 'PLACE_WINDOW': {
          const win: WindowItem = action.data;
          return {
            ...prev,
            money: { ...prev.money, coins: Math.max(0, prev.money.coins - 90) },
            floors: {
              ...prev.floors,
              [fl]: { ...cur, windows: [...cur.windows, win] },
            },
          };
        }
        case 'DELETE_WINDOW': {
          const winId = action.data;
          return {
            ...prev,
            money: { ...prev.money, coins: prev.money.coins + 70 },
            floors: {
              ...prev.floors,
              [fl]: { ...cur, windows: cur.windows.filter((w) => w.id !== winId) },
            },
          };
        }
        case 'CHANGE_WALL_MATERIAL': {
          const { wallId, material } = action.data;
          return {
            ...prev,
            floors: {
              ...prev.floors,
              [fl]: {
                ...cur,
                walls: cur.walls.map((w) => (w.id === wallId ? { ...w, material } : w)),
              },
            },
          };
        }
        case 'CHANGE_FLOOR': {
          const { roomId, material } = action.data;
          return {
            ...prev,
            floors: {
              ...prev.floors,
              [fl]: {
                ...cur,
                rooms: cur.rooms.map((r) => (r.id === roomId ? { ...r, floorMaterial: material } : r)),
              },
            },
          };
        }
        case 'CHANGE_VARIANT': {
          const { id, colorVariant } = action.data;
          return {
            ...prev,
            floors: {
              ...prev.floors,
              [fl]: {
                ...cur,
                objects: cur.objects.map((o) => (o.id === id ? { ...o, colorVariant } : o)),
              },
            },
          };
        }
        default:
          return prev;
      }
    });

    setUndoStack((prev) => [...prev, action]);
    setRedoStack(newRedoStack);
    showToast('Ação refeita!');
  }, [redoStack, showToast]);

  // Keyboard Shortcuts (Ctrl+Z, Ctrl+Y, R to rotate, Esc, Del)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
      const cmdOrCtrl = isMac ? e.metaKey : e.ctrlKey;

      if (cmdOrCtrl && !e.shiftKey && e.key.toLowerCase() === 'z') {
        e.preventDefault();
        handleUndo();
      } else if (
        (cmdOrCtrl && (e.key.toLowerCase() === 'y' || (e.shiftKey && e.key.toLowerCase() === 'z')))
      ) {
        e.preventDefault();
        handleRedo();
      } else if (e.key.toLowerCase() === 'r') {
        e.preventDefault();
        if (selectedObject) {
          handleRotateSelectedObject();
        } else if (engineRef.current) {
          engineRef.current.rotateGhost();
        }
      } else if (e.key === 'Escape') {
        e.preventDefault();
        setActiveTool('none');
        setSelectedCatalogItem(null);
        setSelectedObject(null);
        setContextMenuPos(null);
        if (engineRef.current) engineRef.current.highlightSelectedObject(null);
      } else if (e.key === 'Delete' || e.key === 'Backspace') {
        if (selectedObject) {
          e.preventDefault();
          handleDeleteItem('object', selectedObject.id);
          setSelectedObject(null);
          setContextMenuPos(null);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleUndo, handleRedo, selectedObject, handleRotateSelectedObject, handleDeleteItem]);

  // Stable Callbacks Reference to prevent recreating ThreeSimsEngine on state changes
  const callbacksRef = useRef({
    handleCreateWall,
    handleCreateWallsBatch,
    handlePlaceObject,
    handlePlaceDoor,
    handlePlaceWindow,
    handleWallClick,
    handleRoomClick,
    handleRoofClicked,
    handleRoofUpdated,
    handleRoomResized,
    handleWallResized,
    handleFloorTilePlaced,
    handleDeleteItem,
    setSelectedObject,
    setContextMenuPos,
    setWallLength,
    setDimensionText,
  });

  useEffect(() => {
    callbacksRef.current = {
      handleCreateWall,
      handleCreateWallsBatch,
      handlePlaceObject,
      handlePlaceDoor,
      handlePlaceWindow,
      handleWallClick,
      handleRoomClick,
      handleRoofClicked,
      handleRoofUpdated,
      handleRoomResized,
      handleWallResized,
      handleFloorTilePlaced,
      handleDeleteItem,
      setSelectedObject,
      setContextMenuPos,
      setWallLength,
      setDimensionText,
    };
  });

  // Initialize ThreeSimsEngine ONCE (Fixes camera position resetting on interactions)
  useEffect(() => {
    if (screenMode === 'mode-city') {
      engineRef.current?.setPaused(true);
      return;
    }
    if (engineRef.current) {
      engineRef.current.setPaused(false);
      return () => engineRef.current?.setPaused(true);
    }
    if (!canvasContainerRef.current) return;

    let cancelled = false;
    void import('./systems/threeEngine').then(({ ThreeSimsEngine }) => {
      if (cancelled || !canvasContainerRef.current) return;
      const engine = new ThreeSimsEngine(canvasContainerRef.current, {
        onWallCreated: (wallCoords) => callbacksRef.current.handleCreateWall(wallCoords),
        onWallsCreatedBatch: (wallsBatch) => callbacksRef.current.handleCreateWallsBatch(wallsBatch),
        onObjectPlaced: (objData) => callbacksRef.current.handlePlaceObject(objData),
        onDoorPlaced: (doorData) => callbacksRef.current.handlePlaceDoor(doorData),
        onWindowPlaced: (winData) => callbacksRef.current.handlePlaceWindow(winData),
        onObjectSelected: (obj, screenPos) => {
          callbacksRef.current.setSelectedObject(obj);
          callbacksRef.current.setContextMenuPos(screenPos || null);
        },
        onObjectPositionUpdate: (_obj, screenPos) => callbacksRef.current.setContextMenuPos(screenPos),
        onWallClicked: (wall) => callbacksRef.current.handleWallClick(wall),
        onRoomClicked: (room) => callbacksRef.current.handleRoomClick(room),
        onRoofClicked: (roof) => callbacksRef.current.handleRoofClicked(roof),
        onRoofUpdated: (roof) => callbacksRef.current.handleRoofUpdated(roof),
        onRoomResized: (room, bounds) => callbacksRef.current.handleRoomResized(room, bounds),
        onWallResized: (wall, updates) => callbacksRef.current.handleWallResized(wall, updates),
        onFloorTilePlaced: (tile) => callbacksRef.current.handleFloorTilePlaced(tile),
        onItemDeleted: (type, id) => callbacksRef.current.handleDeleteItem(type, id),
        onLengthUpdate: (len, dimText) => {
          callbacksRef.current.setWallLength(len);
          callbacksRef.current.setDimensionText(dimText || null);
        },
      });
      engineRef.current = engine;

      const initialFloorData = houseStateRef.current.floors[currentFloorRef.current] || {
        walls: [], rooms: [], doors: [], windows: [], objects: [], roofs: [],
      };
      engine.syncData(
        initialFloorData.walls, initialFloorData.rooms, initialFloorData.doors,
        initialFloorData.windows, initialFloorData.objects, initialFloorData.roofs || []
      );
      engine.setPaused(false);
    }).catch((error: unknown) => console.error('Falha ao carregar o editor do lote:', error));

    return () => {
      cancelled = true;
      engineRef.current?.setPaused(true);
    };
  }, [screenMode]);

  useEffect(() => () => {
    engineRef.current?.dispose();
    engineRef.current = null;
  }, []);

  // Sync state changes to engine
  useEffect(() => {
    if (!engineRef.current) return;
    const floorData = houseState.floors[currentFloor] || {
      walls: [],
      rooms: [],
      doors: [],
      windows: [],
      objects: [],
      roofs: [],
    };

    engineRef.current.syncData(
      floorData.walls,
      floorData.rooms,
      floorData.doors,
      floorData.windows,
      floorData.objects,
      floorData.roofs || []
    );
  }, [houseState, currentFloor]);

  // Sync roof visibility toggle to engine
  useEffect(() => {
    if (!engineRef.current) return;
    engineRef.current.setShowRoofs(showRoofs);
  }, [showRoofs]);

  // Sync tools & modes to engine
  useEffect(() => {
    if (!engineRef.current) return;
    engineRef.current.setToolMode(activeTool, selectedCatalogItem);
  }, [activeTool, selectedCatalogItem]);

  useEffect(() => {
    engineRef.current?.setPaused(screenMode === 'mode-city');
  }, [screenMode]);

  // Sync floor to engine
  const handleFloorChange = (newFloor: number) => {
    setCurrentFloor(newFloor);
    setHouseState((prev) => ({ ...prev, currentFloor: newFloor }));
    if (engineRef.current) {
      engineRef.current.setFloor(newFloor);
    }
    showToast(`Andar ${newFloor}`);
  };

  // Wall Cut Mode Toggle (Cutaway, Full, Down)
  const handleWallCutModeToggle = () => {
    const modes: WallCutMode[] = ['cutaway', 'full', 'down'];
    const nextMode = modes[(modes.indexOf(wallCutMode) + 1) % modes.length];
    setWallCutMode(nextMode);

    if (engineRef.current) {
      engineRef.current.setWallCutMode(nextMode);
    }

    const labels: Record<WallCutMode, string> = {
      cutaway: 'Modo Paredes: Meia Parede (Corte Inteligente)',
      full: 'Modo Paredes: Altas (Completa)',
      down: 'Modo Paredes: Baixas (Planta Baixa)',
    };
    showToast(labels[nextMode]);
  };

  // Camera view toggle
  const handleCameraToggle = () => {
    const modes: CameraViewMode[] = ['free', 'top', 'iso'];
    const nextIdx = (modes.indexOf(cameraMode) + 1) % modes.length;
    const nextMode = modes[nextIdx];
    setCameraMode(nextMode);

    if (engineRef.current) {
      engineRef.current.setCameraView(nextMode);
    }

    const labels: Record<CameraViewMode, string> = {
      free: 'Câmera: Livre (3D)',
      top: 'Câmera: Superior (Planta)',
      iso: 'Câmera: Isométrica (The Sims)',
    };
    showToast(labels[nextMode]);
  };

  // Demolish lot
  const handleConfirmDemolish = () => {
    setIsDemolishModalOpen(false);
    const previousFloors = houseStateRef.current.floors;
    const emptyFloors = Object.fromEntries(
      Object.keys(previousFloors).map((floor) => [Number(floor), {
        walls: [], rooms: [], doors: [], windows: [], objects: [], roofs: [],
      }])
    ) as HouseState['floors'];

    setHouseState((prev) => ({ ...prev, floors: emptyFloors }));
    setIsLotDemolished(true);
    setUndoStack((prev) => [
      ...prev,
      {
        type: 'DEMOLISH_LOT',
        data: { floors: emptyFloors },
        undoData: { floors: previousFloors },
      },
    ]);
    setRedoStack([]);
    setSelectedObject(null);
    setContextMenuPos(null);
    showToast(`${selectedLot.name} demolido. Use Construir para refazer o lote.`);
  };

  // Scale Slider
  const handleScaleChange = (val: number) => {
    setUiScale(val);
    document.documentElement.style.setProperty('--ui-scale', `${val / 100}`);
  };

  // Gameplay actions
  const handleAddSimAction = (simId: number) => {
    const actionsPool = [
      { name: 'Dançar', icon: 'fa-music' },
      { name: 'Cozinhar', icon: 'fa-utensils' },
      { name: 'Ler Livro', icon: 'fa-book-open' },
      { name: 'Assistir TV', icon: 'fa-tv' },
      { name: 'Exercitar', icon: 'fa-dumbbell' },
    ];
    const randomAction = actionsPool[Math.floor(Math.random() * actionsPool.length)];

    setHouseholdSims((prev) =>
      prev.map((s) =>
        s.id === simId
          ? {
              ...s,
              queue: [...s.queue, { id: Date.now(), ...randomAction }],
            }
          : s
      )
    );
    showToast(`Ação adicionada para ${householdSims[simId].name}`);
  };

  const handleCancelSimAction = (simId: number, actionId: number) => {
    setHouseholdSims((prev) =>
      prev.map((s) =>
        s.id === simId
          ? {
              ...s,
              queue: s.queue.filter((a) => a.id !== actionId),
            }
          : s
      )
    );
  };

  useEffect(() => {
    const handleCityMessage = (event: MessageEvent) => {
      if (event.origin !== window.location.origin || event.source !== cityFrameRef.current?.contentWindow) return;
      const message = event.data;
      if (message?.source !== 'citybloom' || message?.type !== 'open-lot') return;
      if (typeof message.lot?.id !== 'string' || !message.lot.id.trim()) return;

      const id = message.lot.id.trim().replace(/[^\w-]/g, '_').slice(0, 80);
      const rawName = typeof message.lot.name === 'string' ? message.lot.name : 'Lote residencial';
      const category: 'res' | 'com' = message.lot.category === 'com' ? 'com' : 'res';
      const buildingType = typeof message.lot.buildingType === 'string' ? message.lot.buildingType : 'house';
      const name = category === 'com' ? getPredefinedStoreName(buildingType, rawName) : rawName;
      const area = Number.isFinite(message.lot.area) ? Math.max(1, Math.min(10000, message.lot.area)) : 576;
      const cityCell = Number.isFinite(message.lot.cityCell?.x) && Number.isFinite(message.lot.cityCell?.z)
        ? { x: message.lot.cityCell.x, z: message.lot.cityCell.z }
        : undefined;
      let nextHouse = getInitialHouseState();
      let hasLotSave = false;
      try {
        const saved = localStorage.getItem(`${LOT_STORAGE_PREFIX}${id}`);
        if (saved) {
          nextHouse = JSON.parse(saved) as HouseState;
          hasLotSave = true;
        }
      } catch {
        nextHouse = getInitialHouseState();
      }
      if (!hasLotSave && category === 'com') nextHouse = createPredefinedStoreLot(buildingType);

      setSelectedLot({ id, name, area, category, buildingType, cityCell });
      returnModeRef.current = 'mode-build';
      setHouseState(nextHouse);
      setCurrentFloor(nextHouse.currentFloor || 1);
      currentFloorRef.current = nextHouse.currentFloor || 1;
      setUndoStack([]);
      setRedoStack([]);
      setActiveTool('none');
      setSelectedCatalogItem(null);
      setSelectedObject(null);
      setContextMenuPos(null);
      setScreenMode('mode-build');
      setIsLotDemolished(false);
      showToast(`Entrando em ${name}`);
    };

    window.addEventListener('message', handleCityMessage);
    return () => window.removeEventListener('message', handleCityMessage);
  }, [showToast]);

  // City Toggle
  const handleCityToggle = () => {
    if (screenMode !== 'mode-city') {
      returnModeRef.current = screenMode === 'mode-build' ? 'mode-build' : 'mode-gameplay';
      setScreenMode('mode-city');
      showToast('Entrando no Mapa da Cidade');
    } else {
      setScreenMode(returnModeRef.current);
      showToast('Retornando ao Lote');
    }
  };

  const handleReturnFromCity = () => {
    setScreenMode(returnModeRef.current);
    showToast(`Retornando a ${selectedLot.name}`);
  };

  // Mode switching
  const handleCloseCatalog = () => {
    setScreenMode('mode-gameplay');
    setActiveTool('none');
    setSelectedCatalogItem(null);
    setSelectedObject(null);
    setContextMenuPos(null);
    showToast('Modo Gameplay');
  };

  const handleOpenBuild = () => {
    setScreenMode('mode-build');
    showToast('Modo Construção 3D');
  };

  const getWorldTitle = () => {
    if (screenMode === 'mode-city') return 'Visão da Cidade';
    if (screenMode === 'mode-build') return `${selectedLot.name} • ${selectedLot.area} m²`;
    return selectedLot.name;
  };

  return (
    <div className={`game-screen ${screenMode}`} id="gameScreen">
      {/* 3D WebGL Canvas Layer */}
      <div className="webgl-canvas-container" ref={canvasContainerRef} />

      <iframe
        ref={cityFrameRef}
        className={`city-map-frame ${screenMode === 'mode-city' ? 'active' : ''}`}
        src="/city/index.html"
        title="Mapa da cidade"
        aria-hidden={screenMode !== 'mode-city'}
      />
      {screenMode === 'mode-city' && (
        <button className="city-return-button" onClick={handleReturnFromCity}>
          Voltar ao lote
        </button>
      )}

      {/* Toast Notification */}
      <div className={`toast-msg ${isToastVisible ? 'show' : ''}`} id="toast">
        {toastMessage}
      </div>

      {/* The Sims Mobile Authentic 3D Popup & Action Rings */}
      {selectedObject && contextMenuPos && screenMode === 'mode-build' && (
        <TheSimsPopup
          object={selectedObject}
          position={contextMenuPos}
          onConfirm={handleConfirmSelectedObject}
          onRotate={handleRotateSelectedObject}
          onMove={handleMoveSelectedObject}
          onDuplicate={handleDuplicateSelectedObject}
          onSell={handleSellSelectedObject}
          onVariantChange={handleVariantChange}
          onClose={() => {
            setSelectedObject(null);
            setContextMenuPos(null);
            if (engineRef.current) engineRef.current.highlightSelectedObject(null);
          }}
        />
      )}

      {/* The Sims 4 Style Inspector HUD for Roofs, Rooms and Walls */}
      {screenMode === 'mode-build' && (
        <SimsInspectorHUD
          selectedRoof={selectedRoof}
          selectedRoom={selectedRoom}
          selectedWall={selectedWall}
          onUpdateRoof={handleRoofUpdated}
          onDeleteRoof={handleDeleteRoof}
          onRotateRoof={handleRotateRoof}
          onCloseSelection={() => {
            setSelectedRoof(null);
            setSelectedRoom(null);
            setSelectedWall(null);
            if (engineRef.current) engineRef.current.clearSelection();
          }}
          onGenerateRoofForRoom={handleGenerateRoofForRoom}
          onDeleteRoom={handleDeleteRoom}
          onPaintRoomFloor={handlePaintRoomFloor}
          onPaintRoomWalls={handlePaintRoomWalls}
          onUpdateWall={handleUpdateWall}
          onDeleteWall={(wallId) => handleDeleteItem('wall', wallId)}
        />
      )}

      {/* Top HUD Bar */}
      <HUDTop
        coins={houseState.money.coins}
        cash={houseState.money.cash}
        worldTitle={getWorldTitle()}
        isCityMode={screenMode === 'mode-city'}
        onCityToggle={handleCityToggle}
        onScaleToggle={() => setIsScaleOpen(!isScaleOpen)}
        onCloseCatalog={handleCloseCatalog}
        onShopClick={() => showToast('Loja Sims disponível no próximo nível!')}
        onQuickMoney={() => {
          handleExecuteCheatCommand('motherlode');
          showToast('💰 Cheat Motherlode ativado: +§50.000!');
        }}
      />

      {/* Scale Panel & Cheats Dropdown */}
      <ScalePanel
        isOpen={isScaleOpen}
        scale={uiScale}
        onScaleChange={handleScaleChange}
        onOpenCheatConsole={() => {
          setIsScaleOpen(false);
          setIsCheatConsoleOpen(true);
        }}
        onQuickCheat={(cmd) => {
          handleExecuteCheatCommand(cmd);
        }}
        freeRealEstate={freeRealEstate}
        moveObjects={moveObjects}
      />

      {/* Cheat Console Overlay */}
      <CheatConsole
        isOpen={isCheatConsoleOpen}
        onClose={() => setIsCheatConsoleOpen(false)}
        onExecuteCommand={handleExecuteCheatCommand}
        logs={cheatLogs}
        onClearLogs={() => setCheatLogs([])}
        freeRealEstate={freeRealEstate}
        moveObjects={moveObjects}
        coins={houseState.money.coins}
        cash={houseState.money.cash}
      />

      {/* Bottom Build Catalog HUD */}
      {screenMode === 'mode-build' && (
        <CatalogHUD
          currentFloor={currentFloor}
          onFloorChange={handleFloorChange}
          activeTool={activeTool}
          selectedItem={selectedCatalogItem}
          onSelectItem={(item, tool) => {
            setSelectedCatalogItem(item);
            setActiveTool(tool);
            setSelectedObject(null);
            setContextMenuPos(null);

            if (tool === 'roof' && item) {
              handleRoofPlaced({
                type: item.roofType || 'hipped',
                x: 0,
                z: 0,
                width: item.width || 6,
                depth: item.depth || 6,
                height: item.height || 2.2,
                material: 'roof_shingle_dark',
              });
            } else if (tool === 'select_room') {
              showToast('Modo Cômodo: Clique no chão de um cômodo para ajustá-lo com gizmos!');
            } else if (tool === 'select_wall') {
              showToast('Modo Parede: Clique em uma parede para editá-la!');
            }
          }}
          cameraMode={cameraMode}
          onCameraToggle={handleCameraToggle}
          wallCutMode={wallCutMode}
          onWallCutModeToggle={handleWallCutModeToggle}
          showRoofs={showRoofs}
          onToggleRoofs={handleToggleRoofs}
          onPhoto={() => showToast('Foto 3D capturada com sucesso!')}
          onDemolish={() => setIsDemolishModalOpen(true)}
          onUndo={handleUndo}
          onRedo={handleRedo}
          canUndo={undoStack.length > 0}
          canRedo={redoStack.length > 0}
          wallLength={wallLength}
          dimensionText={dimensionText}
        />
      )}

      {/* Bottom Gameplay HUD */}
      {screenMode === 'mode-gameplay' && (
        <GameplayHUD
          sims={householdSims}
          activeSimIndex={activeSimIndex}
          onSelectSim={(idx) => {
            setActiveSimIndex(idx);
            showToast(`Trocado para ${householdSims[idx].name}`);
          }}
          onAddAction={handleAddSimAction}
          onCancelAction={handleCancelSimAction}
          onOpenBuild={handleOpenBuild}
          currentFloor={currentFloor}
          onFloorChange={handleFloorChange}
          wallCutMode={wallCutMode}
          onWallCutModeToggle={handleWallCutModeToggle}
          onMissionsClick={() => showToast('Missões: 11 ativas')}
        />
      )}

      {/* Demolish Lot Confirm Modal */}
      <DemolishModal
        isOpen={isDemolishModalOpen}
        onCancel={() => setIsDemolishModalOpen(false)}
        onConfirm={handleConfirmDemolish}
      />
    </div>
  );
}
