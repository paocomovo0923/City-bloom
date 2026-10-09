import React, { useState, useEffect, useRef } from 'react';
import { CHEAT_LIST } from '../systems/cheatManager';

export interface ConsoleLogEntry {
  id: string;
  type: 'command' | 'success' | 'error' | 'info';
  text: string;
  timestamp: string;
}

interface CheatConsoleProps {
  isOpen: boolean;
  onClose: () => void;
  onExecuteCommand: (command: string) => void;
  logs: ConsoleLogEntry[];
  onClearLogs: () => void;
  freeRealEstate: boolean;
  moveObjects: boolean;
  coins: number;
  cash: number;
}

export const CheatConsole: React.FC<CheatConsoleProps> = ({
  isOpen,
  onClose,
  onExecuteCommand,
  logs,
  onClearLogs,
  freeRealEstate,
  moveObjects,
  coins,
  cash,
}) => {
  const [inputValue, setInputValue] = useState('');
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const logContainerRef = useRef<HTMLDivElement>(null);

  // Focus input automatically when console opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    }
  }, [isOpen]);

  // Scroll to bottom when new logs arrive
  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [logs, isExpanded]);

  if (!isOpen) return null;

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const cmd = inputValue.trim();
    if (!cmd) return;

    // Add to local command history for Up/Down arrow navigation
    setCommandHistory((prev) => [cmd, ...prev.filter((c) => c !== cmd)].slice(0, 30));
    setHistoryIndex(-1);

    onExecuteCommand(cmd);
    setInputValue('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIdx = Math.min(historyIndex + 1, commandHistory.length - 1);
        setHistoryIndex(nextIdx);
        setInputValue(commandHistory[nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const prevIdx = historyIndex - 1;
        setHistoryIndex(prevIdx);
        setInputValue(commandHistory[prevIdx]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputValue('');
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      onClose();
    }
  };

  const handleQuickCheat = (cmd: string) => {
    onExecuteCommand(cmd);
    inputRef.current?.focus();
  };

  return (
    <div className="sims-cheat-bar-container" id="simsCheatConsole">
      <div className="sims-cheat-bar">
        {/* Header with Title & Active Status Pills */}
        <div className="cheat-bar-header">
          <div className="cheat-title-wrap">
            <span className="cheat-icon">
              <i className="fa-solid fa-terminal"></i>
            </span>
            <span className="cheat-title">CONSOLE DE CHEATS THE SIMS</span>
            <span className="cheat-shortcut-hint">(Ctrl + Shift + C)</span>
          </div>

          <div className="cheat-header-actions">
            {/* Real-time Status Pills */}
            <button
              className={`cheat-status-pill ${freeRealEstate ? 'active' : ''}`}
              onClick={() => handleQuickCheat('freerealestate')}
              title="Clique para alternar FreeRealEstate"
            >
              <i className="fa-solid fa-house"></i>
              <span>FreeRealEstate: {freeRealEstate ? 'ON' : 'OFF'}</span>
            </button>

            <button
              className={`cheat-status-pill ${moveObjects ? 'active' : ''}`}
              onClick={() => handleQuickCheat('bb.moveobjects')}
              title="Clique para alternar MoveObjects"
            >
              <i className="fa-solid fa-arrows-up-down-left-right"></i>
              <span>MoveObjects: {moveObjects ? 'ON' : 'OFF'}</span>
            </button>

            <button
              className="cheat-tool-btn"
              onClick={() => setIsExpanded(!isExpanded)}
              title={isExpanded ? 'Recolher Histórico' : 'Expandir Histórico'}
            >
              <i className={`fa-solid ${isExpanded ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
            </button>

            <button
              className="cheat-tool-btn"
              onClick={onClearLogs}
              title="Limpar Histórico"
            >
              <i className="fa-solid fa-trash-can"></i>
            </button>

            <button
              className="cheat-tool-btn btn-close-console"
              onClick={onClose}
              title="Fechar Console (Esc)"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>

        {/* Expandable History Log Output */}
        {(isExpanded || logs.length > 0) && (
          <div
            className={`cheat-log-output ${isExpanded ? 'expanded' : ''}`}
            ref={logContainerRef}
          >
            {logs.length === 0 ? (
              <div className="cheat-log-placeholder">
                Digite um cheat abaixo ou clique em um dos atalhos rápidos (ex: motherlode, freerealestate on). Digite <strong>help</strong> para ver todos os comandos.
              </div>
            ) : (
              logs.map((log) => (
                <div key={log.id} className={`cheat-log-line log-${log.type}`}>
                  <span className="log-time">[{log.timestamp}]</span>
                  <span className="log-text">{log.text}</span>
                </div>
              ))
            )}
          </div>
        )}

        {/* Command Input Row */}
        <form onSubmit={handleSubmit} className="cheat-input-form">
          <span className="cheat-prompt">&gt;</span>
          <input
            ref={inputRef}
            type="text"
            className="cheat-input"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Digite o código de cheat (ex: motherlode, bb.moveobjects on, money 100000, help)..."
            spellCheck={false}
            autoComplete="off"
          />
          <button type="submit" className="cheat-submit-btn" title="Executar Cheat (Enter)">
            <i className="fa-solid fa-play"></i>
            <span>Executar</span>
          </button>
        </form>

        {/* Quick Cheat Chips */}
        <div className="cheat-chips-row">
          <span className="chips-label">Atalhos rápidos:</span>

          <button
            type="button"
            className="cheat-chip chip-gold"
            onClick={() => handleQuickCheat('motherlode')}
            title="+§50.000 Simoleons"
          >
            <i className="fa-solid fa-sack-dollar"></i> motherlode (+§50k)
          </button>

          <button
            type="button"
            className="cheat-chip chip-gold"
            onClick={() => handleQuickCheat('rosebud')}
            title="+§1.000 Simoleons"
          >
            <i className="fa-solid fa-coins"></i> rosebud (+§1k)
          </button>

          <button
            type="button"
            className="cheat-chip chip-green"
            onClick={() => handleQuickCheat('cash 1000')}
            title="+1.000 Notas Verdes"
          >
            <i className="fa-solid fa-money-bill-wave"></i> cash 1000
          </button>

          <button
            type="button"
            className={`cheat-chip ${freeRealEstate ? 'chip-active' : ''}`}
            onClick={() => handleQuickCheat(freeRealEstate ? 'freerealestate off' : 'freerealestate on')}
            title="Construção e móveis 100% gratuitos"
          >
            <i className="fa-solid fa-hammer"></i> freerealestate {freeRealEstate ? 'off' : 'on'}
          </button>

          <button
            type="button"
            className={`cheat-chip ${moveObjects ? 'chip-active' : ''}`}
            onClick={() => handleQuickCheat(moveObjects ? 'bb.moveobjects off' : 'bb.moveobjects on')}
            title="Mover e colocar objetos sem colisão"
          >
            <i className="fa-solid fa-cubes"></i> bb.moveobjects {moveObjects ? 'off' : 'on'}
          </button>

          <button
            type="button"
            className="cheat-chip chip-cyan"
            onClick={() => handleQuickCheat('maxmotives')}
            title="Preencher todas as necessidades dos Sims"
          >
            <i className="fa-solid fa-face-laugh-beam"></i> maxmotives
          </button>

          <button
            type="button"
            className="cheat-chip chip-cyan"
            onClick={() => handleQuickCheat('level 99')}
            title="Subir para o Nível 99"
          >
            <i className="fa-solid fa-star"></i> level 99
          </button>

          <button
            type="button"
            className="cheat-chip chip-info"
            onClick={() => handleQuickCheat('help')}
            title="Ver lista completa de cheats"
          >
            <i className="fa-solid fa-circle-question"></i> help / ajuda
          </button>
        </div>
      </div>
    </div>
  );
};
