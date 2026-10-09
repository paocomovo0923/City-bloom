import React, { useState } from 'react';
import { CatalogItem, BuildToolMode, CameraViewMode, WallCutMode } from '../types/sims';

interface CatalogHUDProps {
  currentFloor: number;
  onFloorChange: (newFloor: number) => void;
  activeTool: BuildToolMode;
  selectedItem: CatalogItem | null;
  onSelectItem: (item: CatalogItem | null, toolMode: BuildToolMode) => void;
  cameraMode: CameraViewMode;
  onCameraToggle: () => void;
  wallCutMode: WallCutMode;
  onWallCutModeToggle: () => void;
  showRoofs?: boolean;
  onToggleRoofs?: () => void;
  onPhoto: () => void;
  onDemolish: () => void;
  onUndo: () => void;
  onRedo: () => void;
  canUndo: boolean;
  canRedo: boolean;
  wallLength: number | null;
  dimensionText?: string | null;
}

export const CatalogHUD: React.FC<CatalogHUDProps> = ({
  currentFloor,
  onFloorChange,
  activeTool,
  selectedItem,
  onSelectItem,
  cameraMode,
  onCameraToggle,
  wallCutMode,
  onWallCutModeToggle,
  showRoofs = true,
  onToggleRoofs,
  onPhoto,
  onDemolish,
  onUndo,
  onRedo,
  canUndo,
  canRedo,
  wallLength,
  dimensionText,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('build');
  const [isMinimized, setIsMinimized] = useState<boolean>(false);

  // Expanded and diverse catalog of 3D procedural items
  const categories: Record<string, { title: string; icon: string; items: CatalogItem[] }> = {
    build: {
      title: 'Estruturas & Paredes',
      icon: 'fa-house-chimney-window',
      items: [
        { id: 'w_straight', name: 'Parede Reta', icon: 'fa-border-all', type: 'wall', cost: 50 },
        { id: 'w_cont', name: 'Parede Contínua', icon: 'fa-draw-polygon', type: 'wall', subType: 'continuous', cost: 50 },
        { id: 'w_room', name: 'Criar Cômodo (4 Paredes)', icon: 'fa-vector-square', type: 'wall', subType: 'room', cost: 200 },
        { id: 'sel_room', name: 'Editar Cômodo (Gizmo)', icon: 'fa-up-down-left-right', type: 'wall', subType: 'select_room', cost: 0 },
        { id: 'sel_wall', name: 'Editar Parede (Gizmo)', icon: 'fa-arrows-left-right', type: 'wall', subType: 'select_wall', cost: 0 },
        { id: 'd_standard', name: 'Porta Simples Madeira', icon: 'fa-door-open', type: 'door', cost: 120 },
        { id: 'win_standard', name: 'Janela Dupla Vidro', icon: 'fa-table-cells', type: 'window', cost: 90 },
      ],
    },
    roofs: {
      title: 'Telhados & Coberturas The Sims 4',
      icon: 'fa-shapes',
      items: [
        { id: 'rf_hipped', name: 'Telhado Quatro Águas', icon: 'fa-cubes', type: 'roof', roofType: 'hipped', width: 6, depth: 6, height: 2.2, cost: 350 },
        { id: 'rf_gabled', name: 'Telhado Duas Águas', icon: 'fa-shapes', type: 'roof', roofType: 'gabled', width: 6, depth: 6, height: 2.2, cost: 300 },
        { id: 'rf_half', name: 'Telhado Meia-Água', icon: 'fa-draw-polygon', type: 'roof', roofType: 'half_gabled', width: 4, depth: 6, height: 1.8, cost: 220 },
        { id: 'rf_mansard', name: 'Telhado Mansarda', icon: 'fa-landmark-dome', type: 'roof', roofType: 'mansard', width: 6, depth: 6, height: 2.5, cost: 480 },
        { id: 'rf_flat', name: 'Telhado Plano Moderno', icon: 'fa-square', type: 'roof', roofType: 'flat', width: 6, depth: 6, height: 0.5, cost: 250 },
        // Texturas de Telha
        { id: 'rf_shingle_dark', name: 'Telha Escura (The Sims 4)', icon: 'fa-fill-drip', type: 'roof_material', materialKey: 'roof_shingle_dark', cost: 40 },
        { id: 'rf_terracotta', name: 'Telha Cerâmica Terracota', icon: 'fa-fill-drip', type: 'roof_material', materialKey: 'roof_terracotta', cost: 45 },
        { id: 'rf_slate', name: 'Telha Ardósia Azulada', icon: 'fa-fill-drip', type: 'roof_material', materialKey: 'roof_slate', cost: 50 },
        { id: 'rf_metal', name: 'Chapa Metálica Moderna', icon: 'fa-fill-drip', type: 'roof_material', materialKey: 'roof_metal', cost: 55 },
        { id: 'rf_wood_shake', name: 'Madeira Rústica Shingle', icon: 'fa-fill-drip', type: 'roof_material', materialKey: 'roof_wood_shake', cost: 35 },
      ],
    },
    living: {
      title: 'Sala de Estar',
      icon: 'fa-couch',
      items: [
        { id: 'f_sofa', name: 'Sofá Conforto 3L', icon: 'fa-couch', type: 'furniture', subType: 'sofa', cost: 350 },
        { id: 'f_sofa_corner', name: 'Sofá Seccional em L', icon: 'fa-couch', type: 'furniture', subType: 'sofa_corner', cost: 580 },
        { id: 'f_armchair', name: 'Poltrona Nórdica', icon: 'fa-chair', type: 'furniture', subType: 'armchair', cost: 180 },
        { id: 'f_coffee_table', name: 'Mesa de Centro', icon: 'fa-table', type: 'furniture', subType: 'coffee_table', cost: 120 },
        { id: 'f_tv', name: 'Smart TV 4K com Rack', icon: 'fa-tv', type: 'furniture', subType: 'tv', cost: 420 },
        { id: 'f_tv_wall', name: 'TV 65" Painel Parede', icon: 'fa-tv', type: 'furniture', subType: 'tv_wall', cost: 490 },
        { id: 'f_speaker', name: 'Torre de Som Hi-Fi', icon: 'fa-volume-high', type: 'furniture', subType: 'speaker', cost: 210 },
        { id: 'f_fireplace', name: 'Lareira Moderna', icon: 'fa-fire', type: 'furniture', subType: 'fireplace', cost: 650 },
      ],
    },
    bedroom: {
      title: 'Quarto',
      icon: 'fa-bed',
      items: [
        { id: 'f_bed', name: 'Cama Casal King', icon: 'fa-bed', type: 'furniture', subType: 'bed', cost: 500 },
        { id: 'f_bed_single', name: 'Cama Solteiro', icon: 'fa-bed', type: 'furniture', subType: 'bed_single', cost: 260 },
        { id: 'f_bunk_bed', name: 'Beliche Juvenil', icon: 'fa-bed', type: 'furniture', subType: 'bunk_bed', cost: 440 },
        { id: 'f_nightstand', name: 'Criado-Mudo', icon: 'fa-box-archive', type: 'furniture', subType: 'nightstand', cost: 95 },
        { id: 'f_cabinet', name: 'Roupeiro Espelhado', icon: 'fa-boxes-stacked', type: 'furniture', subType: 'cabinet', cost: 280 },
        { id: 'f_lamp', name: 'Abajur Suave', icon: 'fa-lightbulb', type: 'furniture', subType: 'lamp', cost: 95 },
      ],
    },
    kitchen: {
      title: 'Cozinha & Refeições',
      icon: 'fa-kitchen-set',
      items: [
        { id: 'f_table', name: 'Mesa de Jantar 6L', icon: 'fa-table', type: 'furniture', subType: 'table', cost: 220 },
        { id: 'f_chair', name: 'Cadeira Sala', icon: 'fa-chair', type: 'furniture', subType: 'chair', cost: 80 },
        { id: 'f_barstool', name: 'Banqueta Alta', icon: 'fa-chair', type: 'furniture', subType: 'barstool', cost: 65 },
        { id: 'f_counter', name: 'Bancada com Cuba', icon: 'fa-kitchen-set', type: 'furniture', subType: 'counter', cost: 310 },
        { id: 'f_island', name: 'Ilha Gourmet Mármore', icon: 'fa-kitchen-set', type: 'furniture', subType: 'kitchen_island', cost: 520 },
        { id: 'f_fridge', name: 'Geladeira Duplex Inox', icon: 'fa-snowflake', type: 'furniture', subType: 'fridge', cost: 480 },
        { id: 'f_stove', name: 'Fogão com Coifa Inox', icon: 'fa-fire-burner', type: 'furniture', subType: 'stove', cost: 390 },
      ],
    },
    bath: {
      title: 'Banheiro & Spa',
      icon: 'fa-bath',
      items: [
        { id: 'f_toilet', name: 'Vaso Sanitário Luxo', icon: 'fa-toilet', type: 'furniture', subType: 'toilet', cost: 150 },
        { id: 'f_bath', name: 'Banheira Spa Hidro', icon: 'fa-bath', type: 'furniture', subType: 'bath', cost: 650 },
        { id: 'f_shower', name: 'Box Ducha Vidro', icon: 'fa-shower', type: 'furniture', subType: 'shower', cost: 340 },
        { id: 'f_sink_vanity', name: 'Gabinete com Espelho', icon: 'fa-sink', type: 'furniture', subType: 'sink_vanity', cost: 230 },
      ],
    },
    office: {
      title: 'Escritório & Estudos',
      icon: 'fa-laptop',
      items: [
        { id: 'f_desk', name: 'Escrivaninha Trabalho', icon: 'fa-table', type: 'furniture', subType: 'desk', cost: 240 },
        { id: 'f_office_chair', name: 'Cadeira Gamer Ergonômica', icon: 'fa-chair', type: 'furniture', subType: 'office_chair', cost: 190 },
        { id: 'f_bookshelf', name: 'Estante de Livros', icon: 'fa-book', type: 'furniture', subType: 'bookshelf', cost: 260 },
        { id: 'f_computer', name: 'PC Gamer Dual Monitor', icon: 'fa-desktop', type: 'furniture', subType: 'computer', cost: 550 },
      ],
    },
    decor: {
      title: 'Iluminação & Decoração',
      icon: 'fa-wand-magic-sparkles',
      items: [
        { id: 'f_floor_lamp', name: 'Luminária Tripé Nórdica', icon: 'fa-lightbulb', type: 'furniture', subType: 'floor_lamp', cost: 130 },
        { id: 'f_ceiling_lamp', name: 'Lustre Pendente Moderno', icon: 'fa-lightbulb', type: 'furniture', subType: 'ceiling_lamp', cost: 160 },
        { id: 'f_plant', name: 'Planta Costela-de-Adão', icon: 'fa-seedling', type: 'furniture', subType: 'plant', cost: 75 },
        { id: 'f_plant_tree', name: 'Árvore Ficus Sala', icon: 'fa-tree', type: 'furniture', subType: 'plant_tree', cost: 110 },
        { id: 'f_rug', name: 'Tapete Geométrico', icon: 'fa-rug', type: 'furniture', subType: 'rug', cost: 140 },
        { id: 'f_wall_art', name: 'Quadro Galeria', icon: 'fa-image', type: 'furniture', subType: 'wall_art', cost: 85 },
        { id: 'f_guitar', name: 'Violão com Suporte', icon: 'fa-guitar', type: 'furniture', subType: 'guitar', cost: 175 },
      ],
    },
    commercial: {
      title: 'Lojas & Atendimento',
      icon: 'fa-store',
      items: [
        { id: 'f_cash_register', name: 'Caixa Registradora Completa', icon: 'fa-cash-register', type: 'furniture', subType: 'cash_register', cost: 390 },
        { id: 'f_display_case', name: 'Vitrine de Vidro Iluminada', icon: 'fa-box-open', type: 'furniture', subType: 'display_case', cost: 520 },
        { id: 'f_menu_board', name: 'Quadro de Menu em Giz', icon: 'fa-clipboard-list', type: 'furniture', subType: 'menu_board', cost: 180 },
        { id: 'f_shop_counter', name: 'Balcão de Atendimento', icon: 'fa-store', type: 'furniture', subType: 'counter', cost: 310 },
        { id: 'f_shop_shelf', name: 'Estante Expositora', icon: 'fa-boxes-stacked', type: 'furniture', subType: 'bookshelf', cost: 260 },
        { id: 'f_shop_stool', name: 'Banqueta de Balcão', icon: 'fa-chair', type: 'furniture', subType: 'barstool', cost: 65 },
      ],
    },
    structural: {
      title: 'Pisos & Paredes',
      icon: 'fa-palette',
      items: [
        // Pisos
        { id: 'fl_oak', name: 'Piso Carvalho', icon: 'fa-rug', type: 'floor_material', materialKey: 'wood_oak', cost: 30 },
        { id: 'fl_dark', name: 'Madeira Escura', icon: 'fa-rug', type: 'floor_material', materialKey: 'wood_dark', cost: 35 },
        { id: 'fl_tile', name: 'Cerâmica Clara', icon: 'fa-square', type: 'floor_material', materialKey: 'tile_ceramic', cost: 25 },
        { id: 'fl_stone', name: 'Pedra Ardósia', icon: 'fa-gem', type: 'floor_material', materialKey: 'stone_slate', cost: 40 },
        { id: 'fl_carpet', name: 'Carpete Azul', icon: 'fa-layer-group', type: 'floor_material', materialKey: 'carpet_blue', cost: 20 },
        // Tintas e Papéis de Parede
        { id: 'wp_white', name: 'Pintura Branca', icon: 'fa-paint-roller', type: 'wall_material', materialKey: 'white', cost: 15 },
        { id: 'wp_beige', name: 'Parede Bege', icon: 'fa-paint-roller', type: 'wall_material', materialKey: 'beige', cost: 15 },
        { id: 'wp_gray', name: 'Parede Cinza', icon: 'fa-paint-roller', type: 'wall_material', materialKey: 'gray', cost: 15 },
        { id: 'wp_blue', name: 'Parede Azul', icon: 'fa-paint-roller', type: 'wall_material', materialKey: 'blue', cost: 15 },
        { id: 'wp_green', name: 'Parede Verde', icon: 'fa-paint-roller', type: 'wall_material', materialKey: 'green', cost: 15 },
        { id: 'wp_brick', name: 'Tijolo Aparente', icon: 'fa-cubes', type: 'wall_material', materialKey: 'brick', cost: 30 },
        { id: 'wp_wood', name: 'Painel Madeira', icon: 'fa-tree', type: 'wall_material', materialKey: 'wood', cost: 35 },
      ],
    },
    favorites: {
      title: 'Favoritos',
      icon: 'fa-star',
      items: [
        { id: 'fav_wall', name: 'Parede Reta', icon: 'fa-border-all', type: 'wall', cost: 50 },
        { id: 'fav_room', name: 'Criar Cômodo', icon: 'fa-vector-square', type: 'wall', subType: 'room', cost: 200 },
        { id: 'fav_sofa', name: 'Sofá Conforto', icon: 'fa-couch', type: 'furniture', subType: 'sofa', cost: 350 },
        { id: 'fav_tv', name: 'Smart TV 4K', icon: 'fa-tv', type: 'furniture', subType: 'tv', cost: 420 },
        { id: 'fav_bed', name: 'Cama Casal', icon: 'fa-bed', type: 'furniture', subType: 'bed', cost: 500 },
      ],
    },
  };

  const currentCategoryData = categories[activeCategory] || categories.build;

  const handleItemClick = (item: CatalogItem) => {
    if (selectedItem?.id === item.id) {
      onSelectItem(null, 'none');
      return;
    }

    if (item.type === 'wall') {
      if (item.subType === 'room') {
        onSelectItem(item, 'wall_room');
      } else if (item.subType === 'continuous') {
        onSelectItem(item, 'wall_continuous');
      } else if (item.subType === 'select_room') {
        onSelectItem(item, 'select_room');
      } else if (item.subType === 'select_wall') {
        onSelectItem(item, 'select_wall');
      } else {
        onSelectItem(item, 'wall');
      }
    } else if (item.type === 'door') {
      onSelectItem(item, 'door');
    } else if (item.type === 'window') {
      onSelectItem(item, 'window');
    } else if (item.type === 'roof') {
      onSelectItem(item, 'roof');
    } else if (item.type === 'roof_material') {
      onSelectItem(item, 'roof_paint');
    } else if (item.type === 'furniture') {
      onSelectItem(item, 'furniture');
    } else if (item.type === 'floor_material') {
      onSelectItem(item, 'floor_paint');
    } else if (item.type === 'wall_material') {
      onSelectItem(item, 'wall_paint');
    }
  };

  const getCameraIcon = () => {
    if (cameraMode === 'top') return 'fa-solid fa-arrows-to-dot';
    if (cameraMode === 'iso') return 'fa-solid fa-cube';
    return 'fa-solid fa-video';
  };

  const getWallCutModeIcon = () => {
    if (wallCutMode === 'full') return 'fa-solid fa-square';
    if (wallCutMode === 'down') return 'fa-solid fa-minus';
    return 'fa-solid fa-border-none'; // cutaway
  };

  const getWallCutModeLabel = () => {
    if (wallCutMode === 'full') return 'Paredes Altas';
    if (wallCutMode === 'down') return 'Paredes Baixas (Planta)';
    return 'Meia Parede (Corte Inteligente)';
  };

  return (
    <>
      {(dimensionText || wallLength !== null) && (
        <div className="wall-length-badge">
          {dimensionText || `Comprimento: ${wallLength}m`}
        </div>
      )}

      <div className={`catalog-wrapper ${isMinimized ? 'minimized' : ''}`} id="catalogWrapper">
        <div className="catalog-main">
          {/* Barra de Ferramentas Esquerda */}
          <div className="tools-left" id="toolsLeft">
            <button
              className="tool-btn"
              id="btnCamera"
              onClick={onCameraToggle}
              title={`Alternar Câmera (${cameraMode})`}
            >
              <i className={getCameraIcon()}></i>
            </button>

            {/* Alternador de Corte de Parede (Cutaway / Altas / Baixas) */}
            <button
              className={`tool-btn ${wallCutMode !== 'full' ? 'active' : ''}`}
              id="btnWallCut"
              onClick={onWallCutModeToggle}
              title={`Modo de Paredes: ${getWallCutModeLabel()}`}
            >
              <i className={getWallCutModeIcon()}></i>
            </button>

            {/* Alternador de Telhados (Mostrar / Ocultar Telhados 3D) */}
            {onToggleRoofs && (
              <button
                className={`tool-btn ${showRoofs ? 'active' : ''}`}
                id="btnToggleRoofs"
                onClick={onToggleRoofs}
                title={showRoofs ? 'Ocultar Telhados (Ver Interior)' : 'Mostrar Telhados 3D (The Sims 4)'}
              >
                <i className="fa-solid fa-shapes"></i>
              </button>
            )}

            {/* Ferramenta Cômodo 4 Paredes */}
            <button
              className={`tool-btn ${activeTool === 'wall_room' ? 'active' : ''}`}
              onClick={() => {
                if (activeTool === 'wall_room') {
                  onSelectItem(null, 'none');
                } else {
                  onSelectItem(categories.build.items[2], 'wall_room');
                }
              }}
              title="Criar Cômodo Completo (4 Paredes)"
            >
              <i className="fa-solid fa-vector-square"></i>
            </button>

            {/* Parede Contínua */}
            <button
              className={`tool-btn ${activeTool === 'wall_continuous' ? 'active' : ''}`}
              onClick={() => {
                if (activeTool === 'wall_continuous') {
                  onSelectItem(null, 'none');
                } else {
                  onSelectItem(categories.build.items[1], 'wall_continuous');
                }
              }}
              title="Modo Parede Contínua"
            >
              <i className="fa-solid fa-draw-polygon"></i>
            </button>

            {/* Marreta / Apagar */}
            <button
              className={`tool-btn danger ${activeTool === 'delete' ? 'active' : ''}`}
              onClick={() => {
                if (activeTool === 'delete') {
                  onSelectItem(null, 'none');
                } else {
                  onSelectItem(null, 'delete');
                }
              }}
              title="Marreta / Apagar Objeto ou Parede"
            >
              <i className="fa-solid fa-hammer"></i>
            </button>

            {/* Desfazer (Undo) */}
            <button
              className="tool-btn"
              onClick={onUndo}
              disabled={!canUndo}
              style={{ opacity: canUndo ? 1 : 0.4 }}
              title="Desfazer (Ctrl+Z)"
            >
              <i className="fa-solid fa-rotate-left"></i>
            </button>

            {/* Refazer (Redo) */}
            <button
              className="tool-btn"
              onClick={onRedo}
              disabled={!canRedo}
              style={{ opacity: canRedo ? 1 : 0.4 }}
              title="Refazer (Ctrl+Y)"
            >
              <i className="fa-solid fa-rotate-right"></i>
            </button>

            {/* Foto */}
            <button className="tool-btn" id="btnPhoto" onClick={onPhoto} title="Modo Foto">
              <i className="fa-solid fa-camera"></i>
            </button>

            {/* Minimizar */}
            <button
              className="tool-btn"
              id="btnMinimize"
              onClick={() => setIsMinimized(!isMinimized)}
              title="Minimizar Catálogo"
            >
              <i className={`fa-solid ${isMinimized ? 'fa-expand' : 'fa-compress'}`}></i>
            </button>

            {/* Demolir Lote */}
            <button
              className="tool-btn danger"
              id="btnDemolish"
              onClick={onDemolish}
              title="Destruir Lote"
            >
              <i className="fa-solid fa-dumpster-fire"></i>
            </button>
          </div>

          <div className="collapsible-content">
            <div className="search-bar" id="categoryTitle">
              <span>{currentCategoryData.title}</span>
              <span style={{ fontSize: '0.8rem', opacity: 0.7, fontWeight: 'normal' }}>
                {currentCategoryData.items.length} itens disponíveis
              </span>
            </div>

            <div className="cards-container" id="cardsContainer">
              {currentCategoryData.items.map((item) => {
                const isSelected = selectedItem?.id === item.id;
                return (
                  <div
                    key={item.id}
                    className={`card ${isSelected ? 'selected' : ''}`}
                    onClick={() => handleItemClick(item)}
                  >
                    <div className="card-icon-bg">
                      <i className={`fa-solid ${item.icon}`}></i>
                    </div>
                    <span className="card-title">{item.name}</span>
                    {item.cost > 0 && (
                      <span className="card-cost">
                        <i className="fa-solid fa-coins"></i>
                        {item.cost}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Abas Laterais & Seletor de Andar */}
        <div className="side-tabs-wrapper">
          <div className="floor-picker">
            <button
              className="floor-btn"
              onClick={() => onFloorChange(Math.max(1, currentFloor - 1))}
              disabled={currentFloor <= 1}
              title="Descer Andar"
            >
              <i className="fa-solid fa-caret-down"></i>
            </button>

            <div className="floor-center">
              <span>{currentFloor}</span>
              <i className="fa-solid fa-layer-group"></i>
            </div>

            <button
              className="floor-btn"
              onClick={() => onFloorChange(Math.min(3, currentFloor + 1))}
              disabled={currentFloor >= 3}
              title="Subir Andar"
            >
              <i className="fa-solid fa-caret-up"></i>
            </button>
          </div>

          <div className="side-tabs-box">
            <div className="side-tabs-grid" id="sideTabs">
              {/* Estruturas */}
              <button
                className={`tab-item ${activeCategory === 'build' ? 'active' : ''}`}
                onClick={() => {
                  setActiveCategory('build');
                  if (isMinimized) setIsMinimized(false);
                }}
                title="Estruturas e Paredes"
              >
                <i className="fa-solid fa-house-chimney-window"></i>
              </button>

              {/* Telhados The Sims 4 */}
              <button
                className={`tab-item ${activeCategory === 'roofs' ? 'active' : ''}`}
                onClick={() => {
                  setActiveCategory('roofs');
                  if (isMinimized) setIsMinimized(false);
                }}
                title="Telhados & Coberturas The Sims 4"
              >
                <i className="fa-solid fa-shapes"></i>
              </button>

              {/* Sala */}
              <button
                className={`tab-item ${activeCategory === 'living' ? 'active' : ''}`}
                onClick={() => {
                  setActiveCategory('living');
                  if (isMinimized) setIsMinimized(false);
                }}
                title="Sala de Estar"
              >
                <i className="fa-solid fa-couch"></i>
              </button>

              {/* Quarto */}
              <button
                className={`tab-item ${activeCategory === 'bedroom' ? 'active' : ''}`}
                onClick={() => {
                  setActiveCategory('bedroom');
                  if (isMinimized) setIsMinimized(false);
                }}
                title="Quarto"
              >
                <i className="fa-solid fa-bed"></i>
              </button>

              {/* Cozinha */}
              <button
                className={`tab-item ${activeCategory === 'kitchen' ? 'active' : ''}`}
                onClick={() => {
                  setActiveCategory('kitchen');
                  if (isMinimized) setIsMinimized(false);
                }}
                title="Cozinha & Refeições"
              >
                <i className="fa-solid fa-kitchen-set"></i>
              </button>

              {/* Banheiro */}
              <button
                className={`tab-item ${activeCategory === 'bath' ? 'active' : ''}`}
                onClick={() => {
                  setActiveCategory('bath');
                  if (isMinimized) setIsMinimized(false);
                }}
                title="Banheiro & Spa"
              >
                <i className="fa-solid fa-bath"></i>
              </button>

              {/* Escritório */}
              <button
                className={`tab-item ${activeCategory === 'office' ? 'active' : ''}`}
                onClick={() => {
                  setActiveCategory('office');
                  if (isMinimized) setIsMinimized(false);
                }}
                title="Escritório & Estudos"
              >
                <i className="fa-solid fa-laptop"></i>
              </button>

              {/* Decoração */}
              <button
                className={`tab-item ${activeCategory === 'decor' ? 'active' : ''}`}
                onClick={() => {
                  setActiveCategory('decor');
                  if (isMinimized) setIsMinimized(false);
                }}
                title="Iluminação & Decoração"
              >
                <i className="fa-solid fa-wand-magic-sparkles"></i>
              </button>

              {/* Lojas */}
              <button
                className={`tab-item ${activeCategory === 'commercial' ? 'active' : ''}`}
                onClick={() => {
                  setActiveCategory('commercial');
                  if (isMinimized) setIsMinimized(false);
                }}
                title="Lojas & Atendimento"
              >
                <i className="fa-solid fa-store"></i>
              </button>

              {/* Pisos & Paredes */}
              <button
                className={`tab-item ${activeCategory === 'structural' ? 'active' : ''}`}
                onClick={() => {
                  setActiveCategory('structural');
                  if (isMinimized) setIsMinimized(false);
                }}
                title="Pisos & Paredes (Revestimentos)"
              >
                <i className="fa-solid fa-palette"></i>
              </button>

              {/* Favoritos */}
              <button
                className={`tab-item ${activeCategory === 'favorites' ? 'active' : ''}`}
                onClick={() => {
                  setActiveCategory('favorites');
                  if (isMinimized) setIsMinimized(false);
                }}
                title="Favoritos"
              >
                <i className="fa-solid fa-star"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
