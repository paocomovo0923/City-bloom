import React from 'react';
import { WallCutMode } from '../types/sims';

export interface SimAction {
  id: number;
  name: string;
  icon: string;
}

export interface SimCharacter {
  id: number;
  name: string;
  icon: string;
  mood: 'mood-happy' | 'mood-uncomfortable';
  queue: SimAction[];
}

interface GameplayHUDProps {
  sims: SimCharacter[];
  activeSimIndex: number;
  onSelectSim: (index: number) => void;
  onAddAction: (name: string, icon: string) => void;
  onCancelAction: (index: number) => void;
  onOpenBuild: () => void;
  currentFloor: number;
  onFloorChange: (floor: number) => void;
  wallCutMode?: WallCutMode;
  onWallCutModeToggle?: () => void;
  onMissionsClick?: () => void;
}

export const GameplayHUD: React.FC<GameplayHUDProps> = ({
  sims,
  activeSimIndex,
  onSelectSim,
  onAddAction,
  onCancelAction,
  onOpenBuild,
  currentFloor,
  onFloorChange,
  wallCutMode = 'cutaway',
  onWallCutModeToggle,
  onMissionsClick,
}) => {
  const currentSim = sims[activeSimIndex] || sims[0];

  return (
    <div className="gameplay-hud" id="gameplayHud">
      {/* HUD Esquerda do Sim */}
      <div className="sims-hud-left">
        {/* Fila de Ações */}
        <div className="action-queue" id="actionQueue">
          {currentSim.queue.map((action, index) => {
            const isCurrent = index === 0;
            return (
              <div
                key={action.id}
                className={`queue-item ${isCurrent ? 'current' : ''}`}
                title={action.name}
                onClick={() => onCancelAction(index)}
              >
                <i className={`fa-solid ${action.icon}`}></i>
                <div className="cancel-overlay">
                  <i className="fa-solid fa-xmark"></i>
                </div>
              </div>
            );
          })}
        </div>

        {/* Linha Inferior do Sim */}
        <div className="bottom-sims-row">
          <div className="sim-status-card">
            <div className="sim-portrait-box" id="activeSimPortrait">
              <i className={`fa-solid ${currentSim.icon}`}></i>
            </div>

            <div className={`action-grid-panel ${currentSim.mood}`} id="actionGridPanel">
              <button
                className="action-btn"
                id="btnCancelAction"
                onClick={() => {
                  if (currentSim.queue.length > 0) onCancelAction(0);
                }}
                title="Cancelar Ação Atual"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>

              <button
                className="action-btn"
                id="btnAddBath"
                onClick={() => onAddAction('Tomar Banho', 'fa-bath')}
                title="Tomar Banho"
              >
                <i className="fa-solid fa-bath"></i>
              </button>

              <button
                className="action-btn"
                id="btnAddSleep"
                onClick={() => onAddAction('Dormir', 'fa-bed')}
                title="Dormir"
              >
                <i className="fa-solid fa-bed"></i>
              </button>

              <button
                className="action-btn"
                id="btnAddEat"
                onClick={() => onAddAction('Comer', 'fa-utensils')}
                title="Comer"
              >
                <i className="fa-solid fa-utensils"></i>
              </button>
            </div>
          </div>

          {/* Seletor de Sims */}
          <div className="sim-selector-list" id="simSelector">
            {sims.map((sim, idx) => (
              <button
                key={sim.id}
                className={`sim-avatar-btn ${idx === activeSimIndex ? 'active' : ''}`}
                onClick={() => onSelectSim(idx)}
                title={sim.name}
              >
                <i className={`fa-solid ${sim.icon}`}></i>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Painel Direito da Gameplay */}
      <div className="gameplay-right-panel">
        {/* Alternador de Paredes (3 Estados: Padrão, Altas, Baixas) */}
        {onWallCutModeToggle && (
          <button
            className="gp-btn-wall-toggle"
            id="btnGameplayWallCut"
            onClick={onWallCutModeToggle}
            title={`Paredes: ${
              wallCutMode === 'cutaway'
                ? 'Padrão (Frente Baixa / Traseira Alta)'
                : wallCutMode === 'full'
                ? 'Paredes Altas (Todas as Paredes)'
                : 'Paredes Baixas ("Sem Parede")'
            }`}
          >
            <i
              className={
                wallCutMode === 'cutaway'
                  ? 'fa-solid fa-border-none'
                  : wallCutMode === 'full'
                  ? 'fa-solid fa-bars'
                  : 'fa-solid fa-minus'
              }
            ></i>
            <span className="wall-state-tag">
              {wallCutMode === 'cutaway' ? 'Corte' : wallCutMode === 'full' ? 'Altas' : 'Baixas'}
            </span>
          </button>
        )}

        <div className="gp-floor-picker">
          <button
            onClick={() => onFloorChange(Math.max(1, currentFloor - 1))}
            disabled={currentFloor <= 1}
          >
            <i className="fa-solid fa-caret-down"></i>
          </button>
          <span>{currentFloor}</span>
          <button
            onClick={() => onFloorChange(Math.min(3, currentFloor + 1))}
            disabled={currentFloor >= 3}
          >
            <i className="fa-solid fa-caret-up"></i>
          </button>
        </div>

        <button className="missions-btn" onClick={onMissionsClick}>
          <i className="fa-solid fa-calendar-check"></i>
          <span>11 Missões</span>
        </button>

        <div className="gp-bottom-buttons">
          <button className="gp-btn-large gp-btn-llama" title="Lhama Express">
            <i className="fa-solid fa-shield-cat"></i>
          </button>

          <button
            className="gp-btn-large gp-btn-build"
            id="btnOpenBuild"
            onClick={onOpenBuild}
            title="Abrir Modo Construção 3D"
          >
            <i className="fa-solid fa-couch"></i>
            <span className="badge-dot"></span>
          </button>
        </div>
      </div>
    </div>
  );
};
