import React from 'react';
import { ChevronRight } from 'lucide-react';

export const Breadcrumb = ({ items = [{ label: 'RS', active: false }, { label: 'INFORMACIÓN', active: true }] }) => {
  return (
    <nav className="breadcrumb-nav" aria-label="Ruta de navegación">
      <ol className="breadcrumb-list">
        <li className="breadcrumb-item breadcrumb-item-prev">
          <span className="breadcrumb-text">RS</span>
        </li>
        <li className="breadcrumb-separator" aria-hidden="true">
          <span className="separator-slash">/</span>
        </li>
        <li className="breadcrumb-item breadcrumb-item-active" aria-current="page">
          <span className="breadcrumb-text">INFORMACIÓN</span>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
