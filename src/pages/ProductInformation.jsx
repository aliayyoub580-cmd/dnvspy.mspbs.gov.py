import React, { useState } from 'react';
import Header from '../components/Header';
import Breadcrumb from '../components/Breadcrumb';
import GovernmentBranding from '../components/GovernmentBranding';
import ProductCard from '../components/ProductCard';
import DocumentActions from '../components/DocumentActions';
import ActionModal from '../components/ActionModal';
import SettingsPanel from '../components/SettingsPanel';
import { productData, sampleProductsList } from '../data/productData';
import { Loader2, AlertCircle, RefreshCw, Shield, ExternalLink, HelpCircle } from 'lucide-react';

export const ProductInformation = () => {
  // State management
  const [currentProduct, setCurrentProduct] = useState(productData);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [activeModalType, setActiveModalType] = useState(null);

  // Appearance toggles
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState('es');

  // Handle product switch
  const handleSelectProduct = (productId) => {
    const selected = sampleProductsList.find((p) => p.id === productId);
    if (selected) {
      setCurrentProduct(selected);
      setIsError(false);
    }
  };

  // Simulate loading state
  const handleSimulateLoading = () => {
    setIsLoading(true);
    setIsError(false);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  // Simulate error state
  const handleSimulateError = () => {
    setIsError(true);
    setIsLoading(false);
  };

  // Reset to default
  const handleReset = () => {
    setCurrentProduct(productData);
    setIsError(false);
    setIsLoading(false);
  };

  // Toggle accessibility modes
  const handleToggleHighContrast = () => {
    setIsHighContrast((prev) => {
      const next = !prev;
      if (next) {
        document.body.classList.add('high-contrast');
      } else {
        document.body.classList.remove('high-contrast');
      }
      return next;
    });
  };

  const handleToggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const next = !prev;
      if (next) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
      return next;
    });
  };

  return (
    <div className="product-info-page">
      {/* 1. Header with DINAVISApy Branding and Settings button */}
      <Header
        onOpenSettings={() => setIsSettingsOpen(true)}
        onRefresh={handleReset}
      />

      {/* Main Content Area */}
      <main className="portal-main-container">
        
        {/* 2. Breadcrumb Navigation: RS / INFORMACIÓN */}
        <section className="portal-subnav-bar">
          <div className="portal-subnav-inner">
            <Breadcrumb />
          </div>
        </section>

        {/* 3. Paraguay Government & DINAVISA Branding */}
        <div className="portal-body-wrapper">
          <GovernmentBranding />

          {/* Conditional States: Loading, Error, or Product Card */}
          {isLoading ? (
            <div className="state-card state-loading-card" role="status" aria-live="polite">
              <Loader2 className="spinner-icon" size={44} />
              <h3 className="state-title">Consultando Sistema Nacional de Registro Sanitario...</h3>
              <p className="state-description">
                Verificando firma digital y estado de habilitación de DINAVISA Paraguay.
              </p>
            </div>
          ) : isError ? (
            <div className="state-card state-error-card" role="alert">
              <div className="error-icon-wrap">
                <AlertCircle size={40} className="error-alert-icon" />
              </div>
              <h3 className="state-title">Registro Sanitario No Localizado</h3>
              <p className="state-description">
                El código consultado no figura en el padrón activo o requiere actualización de aranceles según la Dirección de Registros Sanitarios.
              </p>
              <button
                type="button"
                className="btn-retry"
                onClick={handleReset}
              >
                <RefreshCw size={16} />
                <span>Restablecer Consulta Demostración</span>
              </button>
            </div>
          ) : (
            <>
              {/* 4. Product Information Card */}
              <ProductCard product={currentProduct} />

              {/* 5. Document & Verification Actions */}
              <DocumentActions
                onSelectAction={(actionType) => setActiveModalType(actionType)}
              />
            </>
          )}

          {/* Quick Info & Verification Guarantee Banner */}
          <section className="portal-security-banner">
            <div className="security-banner-content">
              <Shield size={18} className="shield-icon" />
              <span>
                Datos oficiales en línea expedidos conforme a la <strong>Ley 1119/97</strong> de Productos para la Salud y normativas concordantes de la República del Paraguay.
              </span>
            </div>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="portal-footer" role="contentinfo">
        <div className="footer-inner">
          <div className="footer-gov-info">
            <span className="footer-strong">DIRECCIÓN NACIONAL DE VIGILANCIA SANITARIA (DINAVISA)</span>
            <span className="footer-address">
              Iturbe N° 883 e/ Fulgencio R. Moreno y Manuel Domínguez — Asunción, Paraguay
            </span>
            <span className="footer-contact">
              Tel: +595 21 444 274 | info@dinavisa.gov.py
            </span>
          </div>
          <div className="footer-copy">
            <span>© {new Date().getFullYear()} DINAVISApy. Todos los derechos reservados. Portal de Verificación Ciudadana.</span>
          </div>
        </div>
      </footer>

      {/* Modals & Slide-out Panels */}
      <ActionModal
        isOpen={Boolean(activeModalType)}
        type={activeModalType}
        product={currentProduct}
        onClose={() => setActiveModalType(null)}
      />

      <SettingsPanel
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        currentProductId={currentProduct.id}
        onSelectProduct={handleSelectProduct}
        onSimulateLoading={handleSimulateLoading}
        onSimulateError={handleSimulateError}
        isHighContrast={isHighContrast}
        onToggleHighContrast={handleToggleHighContrast}
        isDarkMode={isDarkMode}
        onToggleDarkMode={handleToggleDarkMode}
        language={language}
        onChangeLanguage={setLanguage}
      />
    </div>
  );
};

export default ProductInformation;
