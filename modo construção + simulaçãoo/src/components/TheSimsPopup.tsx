import React, { useState } from 'react';
import { FurnitureObject } from '../types/sims';
import { getSwatchesForType, FurnitureSwatch } from '../data/furnitureSwatches';

interface TheSimsPopupProps {
  object: FurnitureObject | null;
  position: { x: number; y: number } | null;
  onConfirm: () => void;
  onRotate: () => void;
  onMove: () => void;
  onDuplicate?: () => void;
  onSell: () => void;
  onClose: () => void;
  onVariantChange?: (variantIndex: number) => void;
}

export const TheSimsPopup: React.FC<TheSimsPopupProps> = ({
  object,
  position,
  onConfirm,
  onRotate,
  onMove,
  onSell,
  onClose,
  onVariantChange,
}) => {
  const [isSwatchesOpen, setIsSwatchesOpen] = useState<boolean>(true);

  if (!object || !position) return null;

  const swatches: FurnitureSwatch[] = getSwatchesForType(object.type);
  const currentVariantIndex = (object.colorVariant || 0) % swatches.length;

  // Clamp screen coordinates so controls stay within the viewport
  const posX = Math.max(90, Math.min(window.innerWidth - 180, position.x));
  const posY = Math.max(100, Math.min(window.innerHeight - 140, position.y));

  const handleSwatchSelect = (idx: number) => {
    if (onVariantChange) {
      onVariantChange(idx);
    }
  };

  // Human-friendly category naming
  const getCategoryTitle = (type: string) => {
    if (type.includes('sofa') || type.includes('armchair') || type.includes('tv') || type.includes('fireplace')) {
      return 'Sala de Estar';
    }
    if (type.includes('bed') || type.includes('nightstand') || type.includes('bunk')) {
      return 'Quarto';
    }
    if (type.includes('table') || type.includes('chair') || type.includes('counter') || type.includes('fridge') || type.includes('stove')) {
      return 'Cozinha & Refeições';
    }
    if (type.includes('bath') || type.includes('toilet') || type.includes('shower')) {
      return 'Banheiro & Spa';
    }
    if (type.includes('desk') || type.includes('computer') || type.includes('bookshelf')) {
      return 'Escritório';
    }
    return 'Decoração';
  };

  return (
    <>
      {/* 1. Item Header Banner (Top Center - As seen in The Sims Mobile) */}
      <div className="sims-item-header-banner" onClick={(e) => e.stopPropagation()}>
        <div className="sims-item-banner-card">
          <div className="sims-item-banner-title">{object.name}</div>
          <div className="sims-item-banner-sub">{getCategoryTitle(object.type)}</div>
          <div className="sims-item-banner-stars">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
        </div>

        {/* Top-Right Big Close (X) Button (Matching top right button in image.png) */}
        <button
          className="sims-top-close-btn"
          onClick={onClose}
          title="Fechar e Desmarcar"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>

      {/* 2. Floating Action Rings Around Object in 3D Space */}
      <div
        className="sims-action-ring-container"
        style={{ left: `${posX}px`, top: `${posY}px` }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Green Checkmark Button (Confirm Placement) */}
        <button
          className="sims-action-btn btn-confirm-green"
          onClick={onConfirm}
          title="Confirmar Posicionamento"
        >
          <i className="fa-solid fa-check"></i>
        </button>

        {/* Orange Ban / Cancel Button (Sell / Delete / Cancel) */}
        <button
          className="sims-action-btn btn-cancel-orange"
          onClick={onSell}
          title={`Vender / Excluir (§${Math.round((object.cost || 100) * 0.8)})`}
        >
          <i className="fa-solid fa-ban"></i>
        </button>

        {/* Dedicated Move Object Button */}
        <button
          className="sims-action-btn btn-move-object"
          onClick={onMove}
          title="Mover Objeto (Clique para reposicionar no grid)"
        >
          <i className="fa-solid fa-arrows-up-down-left-right"></i>
        </button>

        {/* Inventory / Storage Box Button */}
        <button
          className="sims-action-btn btn-storage-box"
          onClick={onMove}
          title="Guardar no Inventário"
        >
          <i className="fa-solid fa-box-archive"></i>
        </button>

        {/* Paintbrush / Swatches Toggle Button */}
        <button
          className={`sims-action-btn btn-swatches-brush ${isSwatchesOpen ? 'active' : ''}`}
          onClick={() => setIsSwatchesOpen(!isSwatchesOpen)}
          title="Cores & Variações"
        >
          <i className="fa-solid fa-paintbrush"></i>
        </button>

        {/* Circular Rotation Widget at base of item */}
        <div className="sims-rotation-widget" onClick={onRotate} title="Girar 90 Graus (Ou pressione R)">
          <div className="rotation-arrow-up"><i className="fa-solid fa-caret-up"></i></div>
          <div className="rotation-arrow-down"><i className="fa-solid fa-caret-down"></i></div>
          <div className="rotation-arrow-left"><i className="fa-solid fa-caret-left"></i></div>
          <div className="rotation-arrow-right"><i className="fa-solid fa-caret-right"></i></div>
          <div className="rotation-center-icon">
            <i className="fa-solid fa-arrows-rotate"></i>
          </div>
        </div>

        {/* 3. Vertical Swatches / Color Variants Popup (The Right Panel in image.png) */}
        {isSwatchesOpen && swatches.length > 0 && (
          <div className="sims-vertical-swatches-card">
            {/* Header: Paintbrush + Counter (e.g. 2/6) */}
            <div className="swatches-card-header">
              <i className="fa-solid fa-paintbrush"></i>
              <span>
                {currentVariantIndex + 1}/{swatches.length}
              </span>
            </div>

            {/* Vertical Stack of Dual-Color Split Swatch Tiles */}
            <div className="swatches-tiles-scroll">
              {swatches.map((swatch, idx) => {
                const isSelected = idx === currentVariantIndex;
                return (
                  <button
                    key={swatch.id}
                    className={`swatch-tile-btn ${isSelected ? 'selected' : ''}`}
                    onClick={() => handleSwatchSelect(idx)}
                    title={swatch.name}
                  >
                    {/* 45-degree diagonal dual-color split preview */}
                    <div
                      className="swatch-diagonal-split"
                      style={{
                        background: `linear-gradient(135deg, ${swatch.colorA} 0%, ${swatch.colorA} 50%, ${swatch.colorB} 50%, ${swatch.colorB} 100%)`,
                      }}
                    />

                    {/* SimCash badge if premium swatch */}
                    {swatch.isCash && (
                      <div className="swatch-cash-badge">
                        <i className="fa-solid fa-money-bill-wave"></i>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
};
