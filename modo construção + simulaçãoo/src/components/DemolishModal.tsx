import React from 'react';

interface DemolishModalProps {
  isOpen: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

export const DemolishModal: React.FC<DemolishModalProps> = ({ isOpen, onCancel, onConfirm }) => {
  return (
    <div className={`modal-overlay ${isOpen ? 'active' : ''}`} id="demolishModal">
      <div className="modal-box">
        <h3>Destruir Lote?</h3>
        <p>Deseja apagar todas as construções e móveis deste lote?</p>
        <div className="modal-actions">
          <button className="btn-modal btn-cancel" id="btnCancelDemolish" onClick={onCancel}>
            Cancelar
          </button>
          <button className="btn-modal btn-confirm" id="btnConfirmDemolish" onClick={onConfirm}>
            Destruir Tudo
          </button>
        </div>
      </div>
    </div>
  );
};
