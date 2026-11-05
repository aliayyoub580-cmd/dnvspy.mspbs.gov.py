import React, { useState } from 'react';
import RegistrationBadge from './RegistrationBadge';
import { Copy, Check, Calendar, Building, Pill, Tag, FileText } from 'lucide-react';

export const ProductCard = ({ product }) => {
  const [copied, setCopied] = useState(false);

  if (!product) return null;

  const handleCopyRegistration = () => {
    if (product.registrationNumber) {
      navigator.clipboard.writeText(product.registrationNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const isExpired = product.status === "VENCIDO";

  return (
    <article className="product-card-wrapper" aria-label="Ficha de Información del Producto">
      <div className="product-card">
        {/* Registration Badge overlapping top center */}
        <RegistrationBadge text={product.badgeText || "MS"} />

        {/* Card Header / Status */}
        <div className="card-top-meta">
          <span className={`status-pill ${isExpired ? 'status-pill-expired' : 'status-pill-active'}`}>
            <span className="status-dot"></span>
            {isExpired ? 'REGISTRO SANITARIO VENCIDO' : 'REGISTRO SANITARIO VIGENTE'}
          </span>
        </div>

        {/* Product Information Fields Grid / Rows */}
        <div className="card-fields-container">
          
          {/* Field 1: Product Category */}
          <div className="card-field-row field-category">
            <span className="field-label">CATEGORÍA DEL PRODUCTO</span>
            <div className="field-value-wrapper">
              <span className="field-value field-value-category">{product.category}</span>
            </div>
          </div>

          <div className="field-divider" />

          {/* Field 2: Registration Number */}
          <div className="card-field-row field-registration">
            <span className="field-label">NÚMERO DE REGISTRO SANITARIO</span>
            <div className="field-value-wrapper registration-value-row">
              <span className="field-value field-value-reg">{product.registrationNumber}</span>
              <button
                type="button"
                className="btn-copy-reg"
                onClick={handleCopyRegistration}
                title="Copiar número de registro"
                aria-label="Copiar número de registro"
              >
                {copied ? <Check size={15} className="copied-icon" /> : <Copy size={15} />}
                <span className="copy-label">{copied ? 'Copiado' : 'Copiar'}</span>
              </button>
            </div>
          </div>

          <div className="field-divider" />

          {/* Field 3: Company */}
          <div className="card-field-row field-company">
            <span className="field-label">EMPRESA / TITULAR</span>
            <div className="field-value-wrapper">
              <span className="field-value field-value-company">{product.company}</span>
            </div>
          </div>

          <div className="field-divider" />

          {/* Field 4: Commercial Name */}
          <div className="card-field-row field-commercial">
            <span className="field-label">DENOMINACIÓN COMERCIAL</span>
            <div className="field-value-wrapper">
              <span className="field-value field-value-commercial">{product.commercialName}</span>
            </div>
          </div>

          <div className="field-divider" />

          {/* Field 5: Generic Name */}
          <div className="card-field-row field-generic">
            <span className="field-label">DENOMINACIÓN GENÉRICA</span>
            <div className="field-value-wrapper">
              <span className="field-value field-value-generic">{product.genericName}</span>
            </div>
          </div>

          <div className="field-divider" />

          {/* Field 6: Expiration Date */}
          <div className="card-field-row field-expiration">
            <span className="field-label">FECHA DE VENCIMIENTO</span>
            <div className="field-value-wrapper">
              <span className={`field-value field-value-date ${isExpired ? 'date-expired' : ''}`}>
                {product.expirationDate}
              </span>
            </div>
          </div>

        </div>

        {/* Security / Verification footer watermark */}
        <div className="card-security-note">
          <span className="security-icon">🔒</span>
          <span>Información Oficial Verificada en Sistema DINAVISApy</span>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
