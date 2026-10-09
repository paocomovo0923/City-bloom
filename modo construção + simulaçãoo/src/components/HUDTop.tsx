import React from 'react';

interface HUDTopProps {
  coins: number;
  cash: number;
  worldTitle: string;
  isCityMode: boolean;
  onCityToggle: () => void;
  onScaleToggle: () => void;
  onCloseCatalog: () => void;
  onShopClick?: () => void;
  onQuickMoney?: () => void;
}

export const HUDTop: React.FC<HUDTopProps> = ({
  coins,
  cash,
  worldTitle,
  isCityMode,
  onCityToggle,
  onScaleToggle,
  onCloseCatalog,
  onShopClick,
  onQuickMoney,
}) => {
  return (
    <div className="hud-top">
      <div className="hud-left-group">
        <div className="event-badge">
          <i className="fa-solid fa-exclamation"></i>
          <span>1d 1h</span>
        </div>

        <button className="icon-btn-round" onClick={onShopClick} title="Loja Sims">
          <i className="fa-solid fa-bag-shopping"></i>
        </button>

        <div className="currencies">
          <div
            className="currency-item coin"
            onClick={onQuickMoney}
            style={{ cursor: onQuickMoney ? 'pointer' : 'default' }}
            title={onQuickMoney ? 'Clique para Cheat de Dinheiro (+§50.000 Motherlode)' : 'Simoleons'}
          >
            <div className="currency-icon">
              <i className="fa-solid fa-coins"></i>
            </div>
            <span>{coins.toLocaleString('pt-BR')}</span>
          </div>
          <div
            className="currency-item cash"
            onClick={onQuickMoney}
            style={{ cursor: onQuickMoney ? 'pointer' : 'default' }}
            title={onQuickMoney ? 'Clique para Cheat de Dinheiro (+500 Cash)' : 'Notas Sims'}
          >
            <div className="currency-icon">
              <i className="fa-solid fa-money-bill-wave"></i>
            </div>
            <span>{cash}</span>
          </div>
          {onQuickMoney && (
            <button
              className="quick-money-cheat-btn"
              onClick={onQuickMoney}
              title="Cheat de Dinheiro: Motherlode (+§50.000)"
            >
              <i className="fa-solid fa-sack-dollar"></i>
              <span>+§50k</span>
            </button>
          )}
        </div>
      </div>

      <div className="house-style-title" id="worldTitle">
        {worldTitle}
      </div>

      <div className="hud-right">
        <div className="level-container">
          <div className="level-gem">
            <span className="level-gem-inner">34</span>
          </div>
        </div>

        {/* Botão de Cidade / Mapa do Mundo */}
        <button
          className={`hud-btn btn-city ${isCityMode ? 'active' : ''}`}
          id="btnCityToggle"
          onClick={onCityToggle}
          title="Alternar Visão de Cidade / Mapa"
        >
          <svg viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
        </button>

        {/* Botão nos 3 pontinhos com Menu de Cheats e Escala */}
        <button
          className="hud-btn btn-dots-cheats"
          id="btnScaleToggle"
          onClick={onScaleToggle}
          title="Menu de Cheats, Opções & Escala da Interface"
        >
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </button>

        <button
          className="hud-btn"
          id="btnCloseCatalog"
          onClick={onCloseCatalog}
          title="Fechar Catálogo (Modo Jogo)"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
    </div>
  );
};
