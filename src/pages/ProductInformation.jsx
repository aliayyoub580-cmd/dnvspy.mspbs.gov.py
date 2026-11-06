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
            <svg
              className="brand-logo-svg"
              viewBox="6 6 175 24"
              role="img"
              aria-label="DINAVISApy"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* DINAVISA in navy #0c1e4e with crossbars on uppercase I */}
              <path
                fill="#0c1e4e"
                d="M22.71,15.42C22.71,17.05 22.34,18.50 21.60,19.79C20.86,21.07 19.92,22.06 18.79,22.75C17.93,23.26 17.00,23.62 15.98,23.82C14.97,24.03 13.77,24.13 12.38,24.13L6.22,24.13L6.22,6.68L12.55,6.68C13.97,6.68 15.20,6.80 16.23,7.04C17.26,7.28 18.13,7.61 18.83,8.05C20.04,8.79 20.98,9.78 21.67,11.02C22.37,12.27 22.71,13.73 22.71,15.42ZM18.06,15.39C18.06,14.24 17.85,13.26 17.43,12.44C17.01,11.62 16.35,10.98 15.45,10.52C14.98,10.30 14.51,10.14 14.03,10.06C13.55,9.98 12.83,9.94 11.86,9.94L10.72,9.94L10.72,20.86L11.86,20.86C12.93,20.86 13.71,20.81 14.21,20.71C14.71,20.62 15.20,20.44 15.68,20.18C16.50,19.71 17.10,19.08 17.48,18.30C17.87,17.51 18.06,16.54 18.06,15.39ZM36.18,24.13L25.96,24.13L25.96,21.04L28.82,21.04L28.82,9.77L25.96,9.77L25.96,6.68L36.18,6.68L36.18,9.77L33.32,9.77L33.32,21.04L36.18,21.04ZM56.11,24.13L51.77,24.13L44.37,12.15L44.37,24.13L40.24,24.13L40.24,6.68L45.62,6.68L51.98,16.68L51.98,6.68L56.11,6.68ZM77.30,24.13L72.65,24.13L71.43,20.60L64.98,20.60L63.76,24.13L59.23,24.13L65.67,6.68L70.85,6.68ZM70.35,17.40L68.21,11.15L66.06,17.40ZM96.19,6.68L89.82,24.13L84.79,24.13L78.42,6.68L83.15,6.68L87.37,18.93L91.58,6.68ZM108.68,24.13L98.46,24.13L98.46,21.04L101.32,21.04L101.32,9.77L98.46,9.77L98.46,6.68L108.68,6.68L108.68,9.77L105.82,9.77L105.82,21.04L108.68,21.04ZM126.71,18.64C126.71,20.36 125.99,21.76 124.53,22.83C123.07,23.91 121.09,24.45 118.59,24.45C117.15,24.45 115.89,24.32 114.81,24.06C113.74,23.81 112.73,23.49 111.80,23.10L111.80,18.91L112.29,18.91C113.22,19.66 114.26,20.23 115.41,20.63C116.56,21.02 117.67,21.22 118.73,21.22C119.01,21.22 119.37,21.20 119.81,21.15C120.26,21.11 120.62,21.03 120.90,20.92C121.25,20.78 121.53,20.60 121.75,20.39C121.97,20.18 122.09,19.87 122.09,19.45C122.09,19.07 121.92,18.74 121.60,18.46C121.28,18.19 120.80,17.97 120.18,17.82C119.52,17.67 118.83,17.52 118.10,17.38C117.37,17.25 116.68,17.07 116.04,16.86C114.57,16.39 113.51,15.74 112.87,14.92C112.22,14.11 111.90,13.09 111.90,11.88C111.90,10.26 112.63,8.93 114.09,7.90C115.54,6.88 117.42,6.36 119.71,6.36C120.86,6.36 121.99,6.47 123.11,6.70C124.23,6.92 125.20,7.20 126.02,7.54L126.02,11.55L125.54,11.55C124.84,10.99 123.98,10.52 122.96,10.14C121.94,9.76 120.90,9.57 119.84,9.57C119.46,9.57 119.09,9.60 118.72,9.65C118.35,9.70 117.99,9.80 117.64,9.94C117.34,10.05 117.08,10.23 116.86,10.47C116.64,10.71 116.53,10.98 116.53,11.29C116.53,11.75 116.71,12.10 117.06,12.35C117.41,12.59 118.07,12.82 119.05,13.02C119.69,13.15 120.31,13.28 120.90,13.41C121.49,13.53 122.12,13.70 122.80,13.92C124.14,14.36 125.12,14.96 125.76,15.71C126.40,16.46 126.71,17.44 126.71,18.64ZM146.44,24.13L141.79,24.13L140.57,20.60L134.12,20.60L132.90,24.13L128.37,24.13L134.81,6.68L139.99,6.68ZM139.49,17.40L137.35,11.15L135.20,17.40Z"
              />
              {/* py in blue #4e82c6 */}
              <path
                fill="#4e82c6"
                d="M165.12,17.43C165.12,18.49 164.97,19.46 164.66,20.34C164.36,21.22 163.93,21.96 163.38,22.57C162.86,23.15 162.25,23.60 161.55,23.91C160.85,24.23 160.11,24.39 159.33,24.39C158.65,24.39 158.04,24.31 157.49,24.16C156.94,24.02 156.38,23.79 155.80,23.47L155.80,28.96L153.60,28.96L153.60,11.04L155.80,11.04L155.80,12.41C156.39,11.92 157.05,11.51 157.78,11.17C158.51,10.84 159.29,10.68 160.12,10.68C161.70,10.68 162.92,11.27 163.80,12.46C164.68,13.65 165.12,15.31 165.12,17.43ZM162.85,17.48C162.85,15.91 162.58,14.73 162.04,13.95C161.50,13.16 160.67,12.77 159.55,12.77C158.92,12.77 158.29,12.91 157.64,13.18C157.00,13.46 156.39,13.82 155.80,14.26L155.80,21.68C156.43,21.96 156.97,22.15 157.42,22.25C157.87,22.36 158.38,22.41 158.95,22.41C160.17,22.41 161.13,21.99 161.82,21.16C162.50,20.34 162.85,19.11 162.85,17.48ZM180.26,11.04L172.62,28.96L170.27,28.96L172.70,23.50L167.49,11.04L169.88,11.04L173.90,20.74L177.95,11.04Z"
              />
            </svg>
          </div>
        </header>
        <div className="header-rule" />

        {/* Main Content Area */}
        <main className="page">
          {/* Breadcrumb line: RS / INFORMACIÓN */}
          <div className="top-line">
            RS<b>/</b><span>INFORMACIÓN</span>
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

