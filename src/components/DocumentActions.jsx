import React from 'react';
import { FileText, Award, CheckCircle2, ChevronRight, ExternalLink } from 'lucide-react';

export const DocumentActions = ({ onSelectAction }) => {
  const actions = [
    {
      id: 'prospecto',
      title: 'PROSPECTO',
      subtitle: 'Información técnica y posológica autorizada',
      icon: FileText,
      badge: 'PDF OFICIAL'
    },
    {
      id: 'certificado',
      title: 'CERTIFICADO',
      subtitle: 'Constancia oficial de registro sanitario',
      icon: Award,
      badge: 'CONSTE SANITARIO'
    },
    {
      id: 'notificacion',
      title: 'NOTIFICACIÓN DE MODIFICACIÓN POST-REGISTRO SANITARIO',
      subtitle: 'Historial de modificaciones técnicas y homologaciones',
      icon: CheckCircle2,
      badge: 'HISTORIAL'
    }
  ];

  return (
    <section className="document-actions-section" aria-label="Acciones y Documentos del Registro">
      <div className="document-actions-list">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <button
              key={action.id}
              type="button"
              className="action-card-btn"
              onClick={() => onSelectAction(action.id)}
              aria-label={`Ver ${action.title}`}
            >
              <div className="action-card-icon-wrap">
                <Icon className="action-card-icon" size={24} strokeWidth={2} />
              </div>

              <div className="action-card-text">
                <span className="action-card-title">{action.title}</span>
                <span className="action-card-subtitle">{action.subtitle}</span>
              </div>

              <div className="action-card-arrow">
                <ChevronRight size={20} className="arrow-icon" strokeWidth={2.5} />
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default DocumentActions;
