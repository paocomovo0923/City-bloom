import React from 'react';

interface ScalePanelProps {
  isOpen: boolean;
  scale: number;
  onScaleChange: (newScale: number) => void;
  onOpenCheatConsole: () => void;
  onQuickCheat: (command: string) => void;
  freeRealEstate: boolean;
  moveObjects: boolean;
}

export const ScalePanel: React.FC<ScalePanelProps> = ({
  isOpen,
  scale,
  onScaleChange,
  onOpenCheatConsole,
  onQuickCheat,
  freeRealEstate,
  moveObjects,
}) => {
  return (
    <div className={`scale-panel ${isOpen ? 'active' : ''}`} id="scalePanel">
      <div className="scale-panel-header">
        <span>Opções e Cheats</span>
      </div>

      <div className="scale-group">
        <label>
          Tamanho da UI: <span id="scaleValue">{scale}%</span>
        </label>
        <input
          type="range"
          id="scaleSlider"
          min="80"
          max="150"
          value={scale}
          step="5"
          onChange={(e) => onScaleChange(Number(e.target.value))}
        />
      </div>

      <div className="scale-divider"></div>

      <div className="cheat-menu-section">
        <button
          type="button"
          className="menu-cheat-btn btn-console-open"
          onClick={onOpenCheatConsole}
        >
          <i className="fa-solid fa-terminal"></i> Abrir Console de Cheats
        </button>

        <div className="menu-cheat-title">Cheats Rápidos de Dinheiro:</div>
        <div className="menu-cheat-grid">
          <button
            type="button"
            className="menu-cheat-chip"
            onClick={() => onQuickCheat('motherlode')}
            title="Adicionar §50.000 Simoleons"
          >
            <i className="fa-solid fa-sack-dollar"></i> +§50k (Motherlode)
          </button>
          <button
            type="button"
            className="menu-cheat-chip"
            onClick={() => onQuickCheat('rosebud')}
            title="Adicionar §1.000 Simoleons"
          >
            <i className="fa-solid fa-coins"></i> +§1k (Rosebud)
          </button>
          <button
            type="button"
            className="menu-cheat-chip"
            onClick={() => onQuickCheat('cash 500')}
            title="Adicionar Notas/Cash"
          >
            <i className="fa-solid fa-money-bill-wave"></i> +500 Cash
          </button>
          <button
            type="button"
            className={`menu-cheat-chip ${freeRealEstate ? 'active-state' : ''}`}
            onClick={() => onQuickCheat(freeRealEstate ? 'freerealestate off' : 'freerealestate on')}
            title="Alternar FreeRealEstate (Grátis)"
          >
            <i className="fa-solid fa-house-chimney"></i> FreeRealEstate ({freeRealEstate ? 'ON' : 'OFF'})
          </button>
          <button
            type="button"
            className={`menu-cheat-chip ${moveObjects ? 'active-state' : ''}`}
            onClick={() => onQuickCheat(moveObjects ? 'bb.moveobjects off' : 'bb.moveobjects on')}
            title="Alternar MoveObjects"
          >
            <i className="fa-solid fa-cubes"></i> MoveObjects ({moveObjects ? 'ON' : 'OFF'})
          </button>
          <button
            type="button"
            className="menu-cheat-chip"
            onClick={() => onQuickCheat('maxmotives')}
            title="Preencher Necessidades dos Sims"
          >
            <i className="fa-solid fa-face-smile"></i> MaxMotives
          </button>
        </div>
      </div>
    </div>
  );
};
