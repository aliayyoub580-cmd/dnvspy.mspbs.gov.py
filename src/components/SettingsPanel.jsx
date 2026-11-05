import React, { useEffect } from 'react';
import { X, Settings, RefreshCw, AlertTriangle, Moon, Sun, Globe, Eye, ShieldCheck, Database, Layers } from 'lucide-react';
import { sampleProductsList } from '../data/productData';

export const SettingsPanel = ({
  isOpen,
  onClose,
  currentProductId,
  onSelectProduct,
  onSimulateLoading,
  onSimulateError,
  isHighContrast,
  onToggleHighContrast,
  isDarkMode,
  onToggleDarkMode,
  language,
  onChangeLanguage
}) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="settings-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <aside className="settings-drawer" onClick={(e) => e.stopPropagation()}>
        
        {/* Drawer Header */}
        <div className="settings-header">
          <div className="settings-title-group">
            <div className="settings-navy-badge">
              <Settings size={20} color="#FFFFFF" />
            </div>
            <div>
              <h2 className="settings-heading">Panel de Configuración</h2>
              <p className="settings-subheading">Ajustes del Portal & Modos de Demostración</p>
            </div>
          </div>
          <button
            type="button"
            className="settings-close-btn"
            onClick={onClose}
            aria-label="Cerrar panel de configuración"
          >
            <X size={20} />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="settings-content">
          
          {/* Section 1: Product Selector */}
          <section className="settings-group">
            <h3 className="group-title">
              <Database size={16} />
              <span>Selección de Producto (Datos Mock)</span>
            </h3>
            <p className="group-description">
              Intercambia entre registros autorizados o estados vencidos para verificar la adaptabilidad de la ficha:
            </p>
            <div className="product-selector-list">
              {sampleProductsList.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={`product-select-option ${currentProductId === item.id ? 'active' : ''}`}
                  onClick={() => {
                    onSelectProduct(item.id);
                  }}
                >
                  <div className="option-badge">{item.badgeText}</div>
                  <div className="option-info">
                    <span className="option-name">{item.commercialName} ({item.genericName})</span>
                    <span className="option-reg">{item.registrationNumber} — {item.company}</span>
                  </div>
                  <span className={`option-status ${item.status === 'VENCIDO' ? 'status-exp' : 'status-act'}`}>
                    {item.status}
                  </span>
                </button>
              ))}
            </div>
          </section>

          {/* Section 2: State Simulations */}
          <section className="settings-group">
            <h3 className="group-title">
              <Layers size={16} />
              <span>Simulación de Estados Frontend</span>
            </h3>
            <p className="group-description">
              Demuestra los estados de carga y error requeridos por el sistema:
            </p>
            <div className="simulation-buttons-grid">
              <button
                type="button"
                className="sim-btn sim-btn-loading"
                onClick={() => {
                  onClose();
                  onSimulateLoading();
                }}
              >
                <RefreshCw size={16} className="spin-on-hover" />
                <span>Simular Carga (2s)</span>
              </button>

              <button
                type="button"
                className="sim-btn sim-btn-error"
                onClick={() => {
                  onClose();
                  onSimulateError();
                }}
              >
                <AlertTriangle size={16} />
                <span>Simular Error 404</span>
              </button>
            </div>
          </section>

          {/* Section 3: Visual Preferences */}
          <section className="settings-group">
            <h3 className="group-title">
              <Eye size={16} />
              <span>Accesibilidad y Visualización</span>
            </h3>
            <div className="settings-toggle-row">
              <div className="toggle-label-wrap">
                <span className="toggle-title">Alto Contraste</span>
                <span className="toggle-subtitle">Mejora la legibilidad de bordes y textos</span>
              </div>
              <button
                type="button"
                className={`switch-toggle ${isHighContrast ? 'checked' : ''}`}
                onClick={onToggleHighContrast}
                role="switch"
                aria-checked={isHighContrast}
                aria-label="Alternar modo alto contraste"
              >
                <span className="switch-slider" />
              </button>
            </div>

            <div className="settings-toggle-row">
              <div className="toggle-label-wrap">
                <span className="toggle-title">Modo Oscuro (Dark Theme)</span>
                <span className="toggle-subtitle">Adaptado para visualización nocturna</span>
              </div>
              <button
                type="button"
                className={`switch-toggle ${isDarkMode ? 'checked' : ''}`}
                onClick={onToggleDarkMode}
                role="switch"
                aria-checked={isDarkMode}
                aria-label="Alternar modo oscuro"
              >
                <span className="switch-slider" />
              </button>
            </div>
          </section>

          {/* Section 4: System Information */}
          <section className="settings-group system-info-group">
            <h3 className="group-title">
              <ShieldCheck size={16} />
              <span>Información del Sistema</span>
            </h3>
            <div className="system-info-box">
              <div className="info-row">
                <span className="info-key">Aplicación:</span>
                <span className="info-val">DINAVISApy Verificación de Registro</span>
              </div>
              <div className="info-row">
                <span className="info-key">Fase:</span>
                <span className="info-val">Frontend Standalone (React + Vite)</span>
              </div>
              <div className="info-row">
                <span className="info-key">Autoridad:</span>
                <span className="info-val">MSPBS / DINAVISA Paraguay</span>
              </div>
              <div className="info-row">
                <span className="info-key">Backend / Base de datos:</span>
                <span className="info-val">Desconectado (Modo local independiente)</span>
              </div>
            </div>
          </section>

        </div>

        {/* Drawer Footer */}
        <div className="settings-footer">
          <button
            type="button"
            className="btn-done-settings"
            onClick={onClose}
          >
            Aceptar y Volver al Portal
          </button>
        </div>

      </aside>
    </div>
  );
};

export default SettingsPanel;
