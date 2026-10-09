import React from 'react';
import { FurnitureObject } from '../types/sims';

interface ObjectContextMenuProps {
  object: FurnitureObject | null;
  position: { x: number; y: number } | null;
  onRotate: () => void;
  onMove: () => void;
  onDuplicate: () => void;
  onSell: () => void;
  onClose: () => void;
}

export const ObjectContextMenu: React.FC<ObjectContextMenuProps> = ({
  object,
  position,
  onRotate,
  onMove,
  onDuplicate,
  onSell,
  onClose,
}) => {
  if (!object || !position) return null;

  // Clamp position to viewport
  const left = Math.max(100, Math.min(window.innerWidth - 120, position.x));
  const top = Math.max(80, Math.min(window.innerHeight - 100, position.y));

  return (
    <div
      className="object-context-menu"
      style={{ left: `${left}px`, top: `${top}px` }}
      onClick={(e) => e.stopPropagation()}
    >
      <button className="ctx-btn" onClick={onRotate} title="Girar 90 Graus">
        <i className="fa-solid fa-rotate-right"></i>
        <span>Girar ({object.rotation}°)</span>
      </button>

      <button className="ctx-btn" onClick={onMove} title="Mover Objeto">
        <i className="fa-solid fa-arrows-up-down-left-right"></i>
        <span>Mover</span>
      </button>

      <button className="ctx-btn" onClick={onDuplicate} title="Duplicar Objeto">
        <i className="fa-solid fa-clone"></i>
        <span>Duplicar</span>
      </button>

      <button className="ctx-btn danger" onClick={onSell} title="Vender Objeto">
        <i className="fa-solid fa-sack-dollar"></i>
        <span>Vender (§{Math.round((object.cost || 100) * 0.8)})</span>
      </button>

      <button className="ctx-btn" onClick={onClose} title="Fechar">
        <i className="fa-solid fa-xmark"></i>
      </button>
    </div>
  );
};
