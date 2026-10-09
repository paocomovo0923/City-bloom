import React from 'react';
import { Roof, Room, Wall, RoofType } from '../types/sims';

interface SimsInspectorHUDProps {
  selectedRoof: Roof | null;
  selectedRoom: Room | null;
  selectedWall: Wall | null;
  onUpdateRoof: (roof: Roof) => void;
  onDeleteRoof: (roofId: string) => void;
  onRotateRoof: (roofId: string) => void;
  onCloseSelection: () => void;
  onGenerateRoofForRoom: (room: Room) => void;
  onDeleteRoom: (room: Room) => void;
  onPaintRoomFloor: (room: Room, materialKey: string) => void;
  onPaintRoomWalls: (room: Room, materialKey: string) => void;
  onUpdateWall: (wall: Wall, updates: Partial<Wall>) => void;
  onDeleteWall: (wallId: string) => void;
}

export const SimsInspectorHUD: React.FC<SimsInspectorHUDProps> = ({
  selectedRoof,
  selectedRoom,
  selectedWall,
  onUpdateRoof,
  onDeleteRoof,
  onRotateRoof,
  onCloseSelection,
  onGenerateRoofForRoom,
  onDeleteRoom,
  onPaintRoomFloor,
  onPaintRoomWalls,
  onUpdateWall,
  onDeleteWall,
}) => {
  if (!selectedRoof && !selectedRoom && !selectedWall) return null;

  return (
    <div className="sims-inspector-overlay">
      {/* ======================================================== */}
      {/* ROOF INSPECTOR (The Sims 4 Roof Controls - Image 2)      */}
      {/* ======================================================== */}
      {selectedRoof && (
        <div className="sims-floating-card animate-pop">
          <div className="card-header">
            <div className="flex items-center gap-2">
              <span className="badge-icon bg-amber-500">
                <i className="fa-solid fa-shapes text-white"></i>
              </span>
              <div>
                <h4 className="card-title">Telhado The Sims 4</h4>
                <p className="card-subtitle">
                  {selectedRoof.type === 'hipped' && 'Quatro Águas (Piramidal)'}
                  {selectedRoof.type === 'gabled' && 'Duas Águas'}
                  {selectedRoof.type === 'half_gabled' && 'Meia-Água'}
                  {selectedRoof.type === 'mansard' && 'Mansarda'}
                  {selectedRoof.type === 'flat' && 'Plano / Moderno'}
                  {' '}({selectedRoof.width}m × {selectedRoof.depth}m)
                </p>
              </div>
            </div>
            <button className="btn-close" onClick={onCloseSelection} title="Fechar">
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>

          <div className="card-body">
            {/* Quick Action Buttons */}
            <div className="actions-row">
              <button
                className="action-pill"
                onClick={() => onRotateRoof(selectedRoof.id)}
                title="Girar Telhado 90°"
              >
                <i className="fa-solid fa-rotate-right"></i> Girar 90°
              </button>
              <button
                className="action-pill danger"
                onClick={() => onDeleteRoof(selectedRoof.id)}
                title="Excluir Telhado"
              >
                <i className="fa-solid fa-trash"></i> Excluir
              </button>
            </div>

            {/* Slider: Roof Height / Pitch (Top arrow in image.png #2) */}
            <div className="control-group">
              <div className="flex justify-between text-xs font-semibold text-slate-700">
                <span>
                  <i className="fa-solid fa-arrow-up-long text-sky-600 mr-1"></i>
                  Altura / Inclinação (Flecha Topo)
                </span>
                <span className="text-sky-700 font-bold">{selectedRoof.height.toFixed(1)}m</span>
              </div>
              <input
                type="range"
                min="0.8"
                max="4.0"
                step="0.1"
                value={selectedRoof.height}
                onChange={(e) =>
                  onUpdateRoof({ ...selectedRoof, height: parseFloat(e.target.value) })
                }
                className="sims-slider"
              />
            </div>

            {/* Slider: Roof Curvature (Slope sphere in image.png #2) */}
            <div className="control-group">
              <div className="flex justify-between text-xs font-semibold text-slate-700">
                <span>
                  <i className="fa-solid fa-circle text-amber-500 mr-1"></i>
                  Curvatura da Água (Bolas Brancas)
                </span>
                <span className="text-amber-600 font-bold">
                  {selectedRoof.pitchCurve === 0
                    ? 'Reto'
                    : selectedRoof.pitchCurve > 0
                    ? `Côncavo (+${selectedRoof.pitchCurve.toFixed(2)})`
                    : `Convexo (${selectedRoof.pitchCurve.toFixed(2)})`}
                </span>
              </div>
              <input
                type="range"
                min="-0.7"
                max="0.7"
                step="0.05"
                value={selectedRoof.pitchCurve}
                onChange={(e) =>
                  onUpdateRoof({ ...selectedRoof, pitchCurve: parseFloat(e.target.value) })
                }
                className="sims-slider"
              />
            </div>

            {/* Dimension Sliders (Eave arrows in image.png #2) */}
            <div className="grid grid-cols-2 gap-2">
              <div className="control-group">
                <span className="text-[11px] font-semibold text-slate-600">Largura (X): {selectedRoof.width}m</span>
                <div className="flex gap-1 mt-1">
                  <button
                    className="btn-stepper"
                    onClick={() =>
                      onUpdateRoof({
                        ...selectedRoof,
                        width: Math.max(2, selectedRoof.width - 1),
                      })
                    }
                  >
                    -
                  </button>
                  <button
                    className="btn-stepper"
                    onClick={() =>
                      onUpdateRoof({
                        ...selectedRoof,
                        width: Math.min(24, selectedRoof.width + 1),
                      })
                    }
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="control-group">
                <span className="text-[11px] font-semibold text-slate-600">Comprimento (Z): {selectedRoof.depth}m</span>
                <div className="flex gap-1 mt-1">
                  <button
                    className="btn-stepper"
                    onClick={() =>
                      onUpdateRoof({
                        ...selectedRoof,
                        depth: Math.max(2, selectedRoof.depth - 1),
                      })
                    }
                  >
                    -
                  </button>
                  <button
                    className="btn-stepper"
                    onClick={() =>
                      onUpdateRoof({
                        ...selectedRoof,
                        depth: Math.min(24, selectedRoof.depth + 1),
                      })
                    }
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Type Switcher */}
            <div className="control-group">
              <span className="text-[11px] font-semibold text-slate-600 mb-1 block">Tipo de Telhado</span>
              <div className="grid grid-cols-3 gap-1">
                {(['hipped', 'gabled', 'half_gabled', 'mansard', 'flat'] as RoofType[]).map((t) => (
                  <button
                    key={t}
                    className={`btn-type-pill ${selectedRoof.type === t ? 'active' : ''}`}
                    onClick={() => onUpdateRoof({ ...selectedRoof, type: t })}
                  >
                    {t === 'hipped' && '4 Águas'}
                    {t === 'gabled' && '2 Águas'}
                    {t === 'half_gabled' && 'Meia-Água'}
                    {t === 'mansard' && 'Mansarda'}
                    {t === 'flat' && 'Plano'}
                  </button>
                ))}
              </div>
            </div>

            {/* Material Swatches */}
            <div className="control-group">
              <span className="text-[11px] font-semibold text-slate-600 mb-1 block">Textura da Cobertura</span>
              <div className="flex gap-2">
                {[
                  { key: 'roof_shingle_dark', label: 'Sims 4 Escura', color: '#262930' },
                  { key: 'roof_terracotta', label: 'Terracota', color: '#b44a2b' },
                  { key: 'roof_slate', label: 'Ardósia Azul', color: '#334155' },
                  { key: 'roof_metal', label: 'Metal', color: '#64748b' },
                  { key: 'roof_wood_shake', label: 'Madeira', color: '#855b38' },
                ].map((m) => (
                  <button
                    key={m.key}
                    className={`swatch-btn ${selectedRoof.material === m.key ? 'selected' : ''}`}
                    style={{ backgroundColor: m.color }}
                    onClick={() => onUpdateRoof({ ...selectedRoof, material: m.key })}
                    title={m.label}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* ROOM INSPECTOR (The Sims 4 Room Block - Image 1)         */}
      {/* ======================================================== */}
      {selectedRoom && !selectedRoof && (
        <div className="sims-floating-card animate-pop">
          <div className="card-header">
            <div className="flex items-center gap-2">
              <span className="badge-icon bg-emerald-500">
                <i className="fa-solid fa-vector-square text-white"></i>
              </span>
              <div>
                <h4 className="card-title">Cômodo Selecionado</h4>
                <p className="card-subtitle">
                  {selectedRoom.bounds.maxX - selectedRoom.bounds.minX}m ×{' '}
                  {selectedRoom.bounds.maxZ - selectedRoom.bounds.minZ}m (
                  {(selectedRoom.bounds.maxX - selectedRoom.bounds.minX) *
                    (selectedRoom.bounds.maxZ - selectedRoom.bounds.minZ)}
                  m²)
                </p>
              </div>
            </div>
            <button className="btn-close" onClick={onCloseSelection} title="Fechar">
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>

          <div className="card-body">
            <p className="text-xs text-slate-500 mb-2">
              <i className="fa-solid fa-hand-pointer text-amber-500 mr-1"></i>
              Arraste as flechas douradas nas paredes 3D para empurrar ou puxar este cômodo!
            </p>

            <div className="actions-row">
              <button
                className="action-pill primary"
                onClick={() => onGenerateRoofForRoom(selectedRoom)}
                title="Gera telhado com as dimensões exatas deste cômodo"
              >
                <i className="fa-solid fa-house-chimney"></i> Adicionar Telhado
              </button>
              <button
                className="action-pill danger"
                onClick={() => onDeleteRoom(selectedRoom)}
                title="Excluir cômodo e paredes"
              >
                <i className="fa-solid fa-trash"></i> Excluir Cômodo
              </button>
            </div>

            {/* Quick Floor Materials */}
            <div className="control-group">
              <span className="text-[11px] font-semibold text-slate-600 mb-1 block">
                Pintar Piso do Cômodo
              </span>
              <div className="flex gap-2">
                {[
                  { key: 'wood_oak', label: 'Carvalho', color: '#cf9c63' },
                  { key: 'wood_dark', label: 'Madeira Escura', color: '#5e3e26' },
                  { key: 'tile_ceramic', label: 'Cerâmica Clara', color: '#f3f4f6' },
                  { key: 'marble_luxury', label: 'Mármore', color: '#f8fafc' },
                  { key: 'stone_slate', label: 'Ardósia', color: '#52525b' },
                  { key: 'carpet_blue', label: 'Carpete Azul', color: '#2563eb' },
                ].map((fl) => (
                  <button
                    key={fl.key}
                    className={`swatch-btn ${selectedRoom.floorMaterial === fl.key ? 'selected' : ''}`}
                    style={{ backgroundColor: fl.color }}
                    onClick={() => onPaintRoomFloor(selectedRoom, fl.key)}
                    title={fl.label}
                  />
                ))}
              </div>
            </div>

            {/* Quick Walls Wallpaper */}
            <div className="control-group">
              <span className="text-[11px] font-semibold text-slate-600 mb-1 block">
                Pintar Paredes do Cômodo
              </span>
              <div className="flex gap-2">
                {[
                  { key: 'white', label: 'Branco', color: '#f8fafc' },
                  { key: 'beige', label: 'Bege', color: '#f5eedc' },
                  { key: 'gray', label: 'Cinza', color: '#94a3b8' },
                  { key: 'blue', label: 'Azul', color: '#38bdf8' },
                  { key: 'green', label: 'Verde', color: '#86efac' },
                  { key: 'brick', label: 'Tijolo', color: '#b94b32' },
                  { key: 'wood', label: 'Painel Madeira', color: '#ba8c5b' },
                  { key: 'wallpaper_striped', label: 'Papel Listrado', color: '#cbd5e1' },
                ].map((wp) => (
                  <button
                    key={wp.key}
                    className="swatch-btn"
                    style={{ backgroundColor: wp.color }}
                    onClick={() => onPaintRoomWalls(selectedRoom, wp.key)}
                    title={wp.label}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* WALL INSPECTOR (Individual Wall Controls)                */}
      {/* ======================================================== */}
      {selectedWall && !selectedRoof && !selectedRoom && (
        <div className="sims-floating-card animate-pop">
          <div className="card-header">
            <div className="flex items-center gap-2">
              <span className="badge-icon bg-blue-500">
                <i className="fa-solid fa-border-all text-white"></i>
              </span>
              <div>
                <h4 className="card-title">Parede Individual</h4>
                <p className="card-subtitle">
                  Comprimento:{' '}
                  {Math.hypot(
                    selectedWall.x2 - selectedWall.x1,
                    selectedWall.z2 - selectedWall.z1
                  ).toFixed(1)}
                  m | Espessura: {selectedWall.thickness || 0.22}m
                </p>
              </div>
            </div>
            <button className="btn-close" onClick={onCloseSelection} title="Fechar">
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>

          <div className="card-body">
            <div className="actions-row">
              <button
                className="action-pill danger"
                onClick={() => onDeleteWall(selectedWall.id)}
                title="Excluir Parede"
              >
                <i className="fa-solid fa-trash"></i> Excluir Parede
              </button>
            </div>

            {/* Wall Height selection */}
            <div className="control-group">
              <span className="text-[11px] font-semibold text-slate-600 mb-1 block">
                Altura da Parede
              </span>
              <div className="grid grid-cols-3 gap-1">
                {[
                  { h: 0.45, label: 'Baixa (0.45m)' },
                  { h: 1.5, label: 'Média (1.5m)' },
                  { h: 3.0, label: 'Alta (3.0m)' },
                ].map((lvl) => (
                  <button
                    key={lvl.h}
                    className={`btn-type-pill ${selectedWall.height === lvl.h ? 'active' : ''}`}
                    onClick={() => onUpdateWall(selectedWall, { height: lvl.h })}
                  >
                    {lvl.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Wall Material Swatches */}
            <div className="control-group">
              <span className="text-[11px] font-semibold text-slate-600 mb-1 block">
                Revestimento da Parede
              </span>
              <div className="flex gap-2">
                {[
                  { key: 'white', label: 'Branco', color: '#f8fafc' },
                  { key: 'beige', label: 'Bege', color: '#f5eedc' },
                  { key: 'gray', label: 'Cinza', color: '#94a3b8' },
                  { key: 'blue', label: 'Azul', color: '#38bdf8' },
                  { key: 'green', label: 'Verde', color: '#86efac' },
                  { key: 'brick', label: 'Tijolo Aparente', color: '#b94b32' },
                  { key: 'brick_white', label: 'Tijolo Branco', color: '#e2e8f0' },
                  { key: 'wood', label: 'Painel Madeira', color: '#ba8c5b' },
                  { key: 'wallpaper_striped', label: 'Papel Listrado', color: '#cbd5e1' },
                ].map((wp) => (
                  <button
                    key={wp.key}
                    className={`swatch-btn ${selectedWall.material === wp.key ? 'selected' : ''}`}
                    style={{ backgroundColor: wp.color }}
                    onClick={() => onUpdateWall(selectedWall, { material: wp.key })}
                    title={wp.label}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
