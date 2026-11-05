import React, { useEffect } from 'react';
import { X, FileText, Award, CheckCircle2, Download, Printer, ShieldCheck, AlertCircle, Calendar, Hash, Building } from 'lucide-react';

export const ActionModal = ({ isOpen, type, product, onClose }) => {
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

  if (!isOpen || !type || !product) return null;

  const docs = product.documents || {};

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-header-icon-wrap">
            {type === 'prospecto' && <FileText size={22} className="modal-header-icon" />}
            {type === 'certificado' && <Award size={22} className="modal-header-icon" />}
            {type === 'notificacion' && <CheckCircle2 size={22} className="modal-header-icon" />}
          </div>
          <div className="modal-header-titles">
            <h2 className="modal-title">
              {type === 'prospecto' && 'PROSPECTO OFICIAL AUTORIZADO'}
              {type === 'certificado' && 'CERTIFICADO DE REGISTRO SANITARIO'}
              {type === 'notificacion' && 'NOTIFICACIONES POST-REGISTRO SANITARIO'}
            </h2>
            <p className="modal-subtitle">
              {product.commercialName} ({product.genericName}) — {product.registrationNumber}
            </p>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Cerrar modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Demo Notification Notice */}
        <div className="modal-demo-notice">
          <AlertCircle size={16} />
          <span>Fase de Demostración Frontend – Información referencial autorizada por DINAVISA Paraguay</span>
        </div>

        {/* Modal Body Content */}
        <div className="modal-body">
          {/* Prospecto Content */}
          {type === 'prospecto' && (
            <div className="prospecto-modal-content">
              <div className="doc-meta-bar">
                <span className="doc-tag">VERSIÓN VIGENTE</span>
                <span className="doc-version">{docs.prospecto?.version || 'Resolución DINAVISA'}</span>
              </div>

              <div className="prospecto-sections">
                {docs.prospecto?.sections?.map((sec, idx) => (
                  <div key={idx} className="prospecto-sec-item">
                    <h3 className="sec-heading">{sec.heading}</h3>
                    <p className="sec-content">{sec.content}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Certificado Content */}
          {type === 'certificado' && (
            <div className="certificado-modal-content">
              <div className="cert-border-frame">
                <div className="cert-header-seal">
                  <div className="cert-crest">
                    <ShieldCheck size={36} color="#4169A8" />
                  </div>
                  <h3 className="cert-gov-heading">REPÚBLICA DEL PARAGUAY</h3>
                  <h4 className="cert-dina-heading">DIRECCIÓN NACIONAL DE VIGILANCIA SANITARIA</h4>
                  <p className="cert-resolution">{docs.certificado?.resolutionNumber}</p>
                </div>

                <div className="cert-grid-details">
                  <div className="cert-field">
                    <span className="cert-label">N° Certificado:</span>
                    <span className="cert-val">{docs.certificado?.certificateNumber}</span>
                  </div>
                  <div className="cert-field">
                    <span className="cert-label">Registro Sanitario:</span>
                    <span className="cert-val">{product.registrationNumber}</span>
                  </div>
                  <div className="cert-field">
                    <span className="cert-label">Titular / Fabricante:</span>
                    <span className="cert-val">{product.company}</span>
                  </div>
                  <div className="cert-field">
                    <span className="cert-label">Producto:</span>
                    <span className="cert-val">{product.commercialName} ({product.genericName})</span>
                  </div>
                  <div className="cert-field">
                    <span className="cert-label">Fecha de Concesión:</span>
                    <span className="cert-val">{docs.certificado?.grantedDate}</span>
                  </div>
                  <div className="cert-field">
                    <span className="cert-label">Fecha de Vencimiento:</span>
                    <span className="cert-val">{docs.certificado?.validUntil || product.expirationDate}</span>
                  </div>
                </div>

                <div className="cert-seal-footer">
                  <div className="cert-signer">
                    <div className="signature-line" />
                    <span className="signer-name">{docs.certificado?.authorizedBy}</span>
                    <span className="signer-title">Director Nacional — DINAVISA</span>
                  </div>
                  <div className="cert-qr-mock">
                    <div className="qr-box">
                      <div className="qr-pattern" />
                      <span className="qr-caption">QR OFICIAL</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Notificación Post-Registro Content */}
          {type === 'notificacion' && (
            <div className="notificacion-modal-content">
              <p className="notif-intro">
                Historial de modificaciones técnicas, cambios de empaque o renovaciones notificadas a DINAVISA con posterioridad a la expedición del Registro Sanitario:
              </p>

              <div className="notif-timeline">
                {docs.notificacion?.records?.map((rec, idx) => (
                  <div key={idx} className="notif-timeline-item">
                    <div className="notif-badge-marker" />
                    <div className="notif-item-body">
                      <div className="notif-top">
                        <span className="notif-code">{rec.code}</span>
                        <span className="notif-date">{rec.date}</span>
                      </div>
                      <h4 className="notif-title">{rec.type}</h4>
                      <p className="notif-details">{rec.details}</p>
                      <span className="notif-status-tag">{rec.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Actions */}
        <div className="modal-footer">
          <button
            type="button"
            className="btn-modal-action btn-print"
            onClick={() => window.print()}
          >
            <Printer size={16} />
            <span>Imprimir Vista</span>
          </button>
          <button
            type="button"
            className="btn-modal-action btn-close-main"
            onClick={onClose}
          >
            Cerrar Ventana
          </button>
        </div>

      </div>
    </div>
  );
};

export default ActionModal;
