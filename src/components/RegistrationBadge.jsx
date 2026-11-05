import React from 'react';

export const RegistrationBadge = ({ text = "MS" }) => {
  return (
    <div className="registration-badge-container" aria-label={`Tipo de Registro: ${text}`}>
      <div className="registration-badge-circle">
        <span className="registration-badge-text">{text}</span>
      </div>
    </div>
  );
};

export default RegistrationBadge;
