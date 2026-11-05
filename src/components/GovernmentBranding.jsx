import React from 'react';

export const GovernmentBranding = () => {
  return (
    <section className="gov-branding-section" aria-label="Identidad Institucional del Gobierno de Paraguay">
      <div className="gov-branding-container">
        
        {/* Paraguay National Government Logo */}
        <div className="gov-logo-block gov-block-national">
          <div className="gov-crest">
            <svg
              className="paraguay-seal-svg"
              viewBox="0 0 100 100"
              width="44"
              height="44"
              aria-label="Escudo de la República del Paraguay"
            >
              {/* Outer decorative ring */}
              <circle cx="50" cy="50" r="46" fill="#FFFFFF" stroke="#4169A8" strokeWidth="2.5" />
              <circle cx="50" cy="50" r="41" fill="none" stroke="#E8E8E8" strokeWidth="1" />
              
              {/* Ribbon tricolor flag of Paraguay (Red, White, Blue) */}
              <path d="M20 78 C35 84, 65 84, 80 78 C76 83, 24 83, 20 78 Z" fill="#D52B1E" />
              <path d="M22 81 C35 86, 65 86, 78 81 C75 86, 25 86, 22 81 Z" fill="#FFFFFF" stroke="#CCCCCC" strokeWidth="0.5" />
              <path d="M25 84 C38 88, 62 88, 75 84 C72 88, 28 88, 25 84 Z" fill="#0038A8" />

              {/* Palm & Olive branches wreath */}
              <path
                d="M32 68 C22 55, 24 35, 36 24 C33 34, 34 52, 44 64"
                fill="none"
                stroke="#2E7D32"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
              <path
                d="M68 68 C78 55, 76 35, 64 24 C67 34, 66 52, 56 64"
                fill="none"
                stroke="#2E7D32"
                strokeWidth="2.2"
                strokeLinecap="round"
              />

              {/* Central yellow Star of May (Estrella de Mayo) */}
              <polygon
                points="50,28 53.5,39 65,39 55.5,46 59,57 50,50.5 41,57 44.5,46 35,39 46.5,39"
                fill="#F59E0B"
                stroke="#D97706"
                strokeWidth="0.8"
              />

              {/* Seal text arc */}
              <path id="crestTextArc" d="M 18,50 A 32,32 0 0,1 82,50" fill="none" />
              <text fontSize="7" fontWeight="700" fill="#17243B" letterSpacing="0.8">
                <textPath href="#crestTextArc" startOffset="50%" textAnchor="middle">
                  REPÚBLICA DEL PARAGUAY
                </textPath>
              </text>
            </svg>
          </div>

          <div className="gov-text-group">
            <span className="gov-title">GOBIERNO NACIONAL</span>
            <span className="gov-subtitle">PARAGUÁI REKUÁI</span>
          </div>
        </div>

        {/* Divider line between logos */}
        <div className="gov-divider" aria-hidden="true" />

        {/* DINAVISA Authority Logo */}
        <div className="gov-logo-block gov-block-dinavisa">
          <div className="dinavisa-crest">
            <svg
              className="dinavisa-emblem-svg"
              viewBox="0 0 100 100"
              width="44"
              height="44"
              aria-label="Emblema DINAVISA"
            >
              <defs>
                <linearGradient id="dinaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#4169A8" />
                  <stop offset="100%" stopColor="#17243B" />
                </linearGradient>
              </defs>
              <rect x="10" y="10" width="80" height="80" rx="20" fill="url(#dinaGrad)" />
              {/* Medical cross + shield icon */}
              <path
                d="M44 26 H56 V44 H74 V56 H56 V74 H44 V56 H26 V44 H44 Z"
                fill="#FFFFFF"
              />
              <circle cx="50" cy="50" r="10" fill="#4169A8" />
              <path
                d="M50 44 L52 48 L56 48 L53 51 L54 55 L50 52 L46 55 L47 51 L44 48 L48 48 Z"
                fill="#FFFFFF"
              />
            </svg>
          </div>

          <div className="gov-text-group">
            <span className="dinavisa-name">DINAVISA</span>
            <span className="dinavisa-desc">
              Dirección Nacional de Vigilancia Sanitaria
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default GovernmentBranding;
