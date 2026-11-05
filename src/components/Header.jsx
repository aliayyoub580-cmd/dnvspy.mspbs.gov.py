import React from 'react';
import { Settings, Shield, ExternalLink } from 'lucide-react';

export const Header = ({ onOpenSettings, onRefresh }) => {
  return (
    <header className="header-container" role="banner">
      <div className="header-inner">
        {/* DINAVISApy Branding */}
        <div className="header-brand">
          <div className="brand-logo-wrap">
            <span className="brand-text">DINAVISA</span>
            <span className="brand-dot">.</span>
            <span className="brand-suffix">py</span>
          </div>
          <span className="brand-subtitle sr-mobile-hide">
            Sistema Integrado de Vigilancia Sanitaria
          </span>
        </div>

        {/* Right Header Actions */}
        <div className="header-actions">
          <div className="portal-badge-indicator" title="Portal en Línea - República del Paraguay">
            <span className="pulse-indicator"></span>
            <span className="indicator-label">EN LÍNEA</span>
          </div>

          {/* Settings Button: Dark navy square button with white settings icon */}
          <button
            type="button"
            className="settings-button"
            onClick={onOpenSettings}
            aria-label="Abrir panel de configuración"
            title="Configuración y Demostración"
          >
            <Settings className="settings-icon" size={20} strokeWidth={2.2} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
