import React, { useState } from 'react';
import { productData, sampleProductsList } from '../data/productData';

export const ProductInformation = () => {
  const [currentProduct, setCurrentProduct] = useState(productData);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null); // 'prospecto' | 'certificado' | 'notificacion' | null

  const handleSelectProduct = (productId) => {
    const selected = sampleProductsList.find((p) => p.id === productId);
    if (selected) {
      setCurrentProduct(selected);
      setIsSettingsOpen(false);
    }
  };

  return (
    <div className="app-wrapper">
      <div className="device-container">
        {/* Mobile Top Header: DINAVISApy */}
        <header className="mobile-top">
          <div className="brand-row">
            <span className="brand-name">DINAVISA</span>
            <span className="brand-suffix">py</span>
          </div>
        </header>
        <div className="header-rule" />

        {/* Main Content Area */}
        <main className="page">
          {/* Breadcrumb line: RS / INFORMACIÓN */}
          <div className="top-line">
            RS <b>/</b>
            <span>INFORMACIÓN</span>
          </div>

          {/* Settings button: Dark navy square flush with right edge */}
          <button
            type="button"
            className="settings"
            onClick={() => setIsSettingsOpen(true)}
            aria-label="Configuración"
            title="Configuración y Demostración"
          >
            <i className="fa-solid fa-gear" aria-hidden="true" />
          </button>

          {/* Institutional Masthead Header */}
          <header className="masthead" aria-label="Encabezado institucional">
            <div className="mast-left">
              <small>CIONAL DE</small>
              <div>
                ANCIA
                <br />
                TARIA
              </div>
            </div>
            <div className="mast-right">
              <small>PARAGUÁI</small>
              <div>
                TETÃYGÚARA REK
                <br />
                ÑANGAREKOHA
              </div>
              <small>MOA...</small>
            </div>
          </header>

          {/* Circular Blue MS Badge */}
          <div className="ms-badge" aria-hidden="true">
            {currentProduct.badgeText || 'MS'}
          </div>

          {/* Product Information Card */}
          <section className="product-card" aria-label="Ficha del producto">
            <h1 className="product-type">
              PRODUCTO MEDICAMENTO DE SÍNTESIS
              <br />
              QUÍMICA
            </h1>

            <p className="registration">{currentProduct.registrationNumber}</p>

            <p className="company">
              INDUFAR COMERCIAL E INDUSTRIAL
              <br />
              SOCIEDAD ANONIMA
            </p>

            <div className="details">
              <p>
                Denominación Comercial: <strong>{currentProduct.commercialName}</strong>
              </p>
              <p>
                Denominación Genérica <strong>{currentProduct.genericName}</strong>
              </p>
              <p>
                Vencimiento: <strong>{currentProduct.expirationDate}</strong>
              </p>
            </div>

            {/* Document and Action Buttons */}
            <div className="documents">
              {/* 1. PROSPECTO */}
              <button
                type="button"
                className="doc-row"
                onClick={() => setActiveModal('prospecto')}
                aria-label="Ver prospecto"
              >
                <span className="doc-icon" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 2.8h8l5 5V21H6z" />
                    <path d="M14 2.8v5h5M9 12h7M9 15.5h7" />
                  </svg>
                </span>
                <span className="doc-copy">
                  <span className="dash">-</span>PROSPECTO
                </span>
              </button>

              {/* 2. CERTIFICADO */}
              <button
                type="button"
                className="doc-row"
                onClick={() => setActiveModal('certificado')}
                aria-label="Ver certificado"
              >
                <span className="doc-icon" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="8" r="6" />
                    <path d="m8.5 13-1 8 4.5-2.7 4.5 2.7-1-8" />
                  </svg>
                </span>
                <span className="doc-copy">
                  <span className="dash">-</span>CERTIFICADO
                </span>
              </button>

              {/* 3. NOTIFICACIÓN DE MODIFICACIÓN */}
              <button
                type="button"
                className="doc-row notice"
                onClick={() => setActiveModal('notificacion')}
                aria-label="Ver notificación de modificación"
              >
                <span className="doc-icon" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="m8 12 2.5 2.5L16.5 9" />
                  </svg>
                </span>
                <span className="doc-copy">
                  <span className="dash">-</span>NOTIFICACIÓN DE MODIFICACIÓN POST-
                  <br />
                  REGISTRO SANITARIO
                </span>
              </button>
            </div>
          </section>
        </main>

        {/* Mobile Browser Bottom Bar (Matching screenshot) */}
        <footer className="browser-bottom-bar" aria-label="Navegador móvil">
          <button type="button" className="browser-nav-btn" aria-label="Atrás">
            <i className="fa-solid fa-chevron-left" />
          </button>

          <div className="browser-url-pill">
            <div className="url-left">
              <i className="fa-regular fa-clone url-icon" />
              <span className="url-text">dnvspy.mspbs.gov.py</span>
            </div>
            <button
              type="button"
              className="url-refresh-btn"
              onClick={() => window.location.reload()}
              aria-label="Recargar página"
            >
              <i className="fa-solid fa-rotate-right" />
            </button>
          </div>

          <button
            type="button"
            className="browser-nav-btn"
            onClick={() => setIsSettingsOpen(true)}
            aria-label="Más opciones"
          >
            <i className="fa-solid fa-ellipsis" />
          </button>
        </footer>
      </div>

      {/* Interactive Document Modal */}
      {activeModal && (
        <div
          className="modal-backdrop"
          onClick={() => setActiveModal(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>
                {activeModal === 'prospecto' && 'Prospecto Oficial Autorizado'}
                {activeModal === 'certificado' && 'Certificado de Registro Sanitario'}
                {activeModal === 'notificacion' && 'Notificaciones Post-Registro'}
              </h3>
              <button
                type="button"
                className="modal-close"
                onClick={() => setActiveModal(null)}
                aria-label="Cerrar"
              >
                <i className="fa-solid fa-xmark" />
              </button>
            </div>

            <div className="modal-content">
              {activeModal === 'prospecto' && (
                <div>
                  <p>
                    <strong>Producto:</strong> {currentProduct.commercialName} (
                    {currentProduct.genericName})
                  </p>
                  <p>
                    <strong>Titular:</strong> {currentProduct.company}
                  </p>
                  <p>
                    <strong>Registro:</strong> {currentProduct.registrationNumber}
                  </p>
                  <hr style={{ margin: '12px 0', borderColor: '#e2e8f0' }} />
                  <p>
                    <strong>1. Indicaciones:</strong> Tratamiento adyuvante para el control glucémico
                    en adultos y control crónico de peso según resolución DINAVISA.
                  </p>
                  <p>
                    <strong>2. Posología:</strong> Vía subcutánea semanal bajo estricta indicación
                    médica.
                  </p>
                  <p>
                    <strong>3. Conservación:</strong> Mantener refrigerado entre 2°C y 8°C. Proteger
                    de la luz.
                  </p>
                </div>
              )}

              {activeModal === 'certificado' && (
                <div>
                  <p>
                    <strong>República del Paraguay — DINAVISA</strong>
                  </p>
                  <p>
                    <strong>Resolución:</strong> Res. D.N.V.S. N° 1248/2025
                  </p>
                  <p>
                    <strong>Registro N°:</strong> {currentProduct.registrationNumber}
                  </p>
                  <p>
                    <strong>Vigencia:</strong> Hasta el {currentProduct.expirationDate}
                  </p>
                  <p>
                    <strong>Titular:</strong> {currentProduct.company}
                  </p>
                  <hr style={{ margin: '12px 0', borderColor: '#e2e8f0' }} />
                  <p style={{ fontSize: '12px', color: '#64748b' }}>
                    Documento electrónico verificado y firmado digitalmente según la Ley 1119/97.
                  </p>
                </div>
              )}

              {activeModal === 'notificacion' && (
                <div>
                  <p>
                    <strong>Historial de Homologaciones Post-Registro:</strong>
                  </p>
                  <ul style={{ paddingLeft: '18px', marginTop: '8px' }}>
                    <li>
                      <strong>NOTIF-2025-089 (18/08/2025):</strong> Acondicionamiento secundario con
                      código QR de trazabilidad.
                    </li>
                    <li style={{ marginTop: '8px' }}>
                      <strong>NOTIF-2025-034 (12/05/2025):</strong> Notificación de co-responsable
                      técnico farmacéutico.
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn-modal-close"
                onClick={() => setActiveModal(null)}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Settings Drawer */}
      {isSettingsOpen && (
        <div
          className="modal-backdrop"
          onClick={() => setIsSettingsOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <aside className="settings-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="settings-drawer-header">
              <span style={{ fontWeight: 700 }}>Configuración de Demostración</span>
              <button
                type="button"
                className="modal-close"
                style={{ color: '#fff' }}
                onClick={() => setIsSettingsOpen(false)}
                aria-label="Cerrar"
              >
                <i className="fa-solid fa-xmark" />
              </button>
            </div>

            <div className="settings-drawer-body">
              <div>
                <div className="settings-sec-title">Seleccionar Producto Demostración</div>
                {sampleProductsList.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={`product-picker-btn ${currentProduct.id === item.id ? 'active' : ''}`}
                    onClick={() => handleSelectProduct(item.id)}
                  >
                    <span className="picker-name">
                      {item.commercialName} ({item.genericName})
                    </span>
                    <span className="picker-sub">
                      {item.registrationNumber} — {item.company}
                    </span>
                  </button>
                ))}
              </div>

              <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '16px' }}>
                <div className="settings-sec-title">Información del Sistema</div>
                <p style={{ fontSize: '12px', color: '#64748b', lineHeight: 1.5 }}>
                  Portal de Verificación de Registro Sanitario DINAVISA Paraguay.
                  <br />
                  Versión: 2.4.0 (Frontend Standalone)
                </p>
              </div>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
};

export default ProductInformation;
