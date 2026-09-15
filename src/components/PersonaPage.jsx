import React, { useState, useEffect, useRef } from 'react';

/* ═══════════════════════════════════════════
   PERSONA DATA (P3R Game-Accurate)
   ═══════════════════════════════════════════ */
const PERSONAS = [
  { id: 0,  arcana: 'Fool',      level: 42, name: 'Black Frost',  tagline: 'JACK OF ALL TRADES' },
  { id: 1,  arcana: 'Priestess', level: 35, name: 'Sarasvati',    tagline: 'DIVINE WISDOM' },
  { id: 2,  arcana: 'Lovers',    level: 28, name: 'Queen Medb',   tagline: 'ETERNAL BOND' },
  { id: 3,  arcana: 'Justice',   level: 36, name: 'Virtue',       tagline: 'RIGHTEOUS PATH' },
  { id: 4,  arcana: 'Moon',      level: 23, name: 'Gurulu',       tagline: 'MIDNIGHT CALL' },
  { id: 5,  arcana: 'Fortune',   level: 19, name: 'Fortuna',      tagline: 'CARPE DIEM' },
  { id: 6,  arcana: 'Magician',  level: 33, name: 'Sati',         tagline: 'ARCANE MASTERY' },
  { id: 7,  arcana: 'Hiero.',    level: 26, name: 'Shiisaa',      tagline: 'SACRED GUARDIAN' },
  { id: 8,  arcana: 'Sun',       level: 25, name: 'Yatagarasu',   tagline: 'BLAZING DAWN' },
  { id: 9,  arcana: 'Strength',  level: 29, name: 'Jikokuten',    tagline: 'IRON WILL' },
  { id: 10, arcana: 'Fortune',   level: 39, name: 'Clotho',       tagline: 'THREADS OF FATE' },
];

const LIST_TOP = 195;
const ITEM_HEIGHT = 44;

/* ═══════════════════════════════════════════
   ARCANA GEOMETRIC ARTWORK GENERATOR
   ═══════════════════════════════════════════ */
const ARCANA_DATA = {
  'Fool':      { numeral: '0',     sides: 5,  rings: 3, rotation: 0 },
  'Priestess': { numeral: 'II',    sides: 6,  rings: 4, rotation: 15 },
  'Lovers':    { numeral: 'VI',    sides: 4,  rings: 3, rotation: 45 },
  'Justice':   { numeral: 'XI',    sides: 4,  rings: 3, rotation: 0 },
  'Moon':      { numeral: 'XVIII', sides: 8,  rings: 3, rotation: 22 },
  'Fortune':   { numeral: 'X',     sides: 10, rings: 4, rotation: 18 },
  'Magician':  { numeral: 'I',     sides: 5,  rings: 3, rotation: -18 },
  'Hiero.':    { numeral: 'V',     sides: 6,  rings: 3, rotation: 30 },
  'Sun':       { numeral: 'XIX',   sides: 12, rings: 4, rotation: 15 },
  'Strength':  { numeral: 'VIII',  sides: 8,  rings: 3, rotation: 0 },
};

function generatePolygonPoints(cx, cy, radius, sides, rotationDeg) {
  const points = [];
  const rotRad = (rotationDeg * Math.PI) / 180;
  for (let i = 0; i < sides; i++) {
    const angle = (Math.PI * 2 * i) / sides + rotRad - Math.PI / 2;
    points.push(`${cx + radius * Math.cos(angle)},${cy + radius * Math.sin(angle)}`);
  }
  return points.join(' ');
}

function PersonaArtwork({ persona }) {
  const config = ARCANA_DATA[persona.arcana] || ARCANA_DATA['Fool'];
  const cx = 400, cy = 400;

  return (
    <svg viewBox="0 0 800 800" className="persona-artwork-svg">
      {/* Outer glow ring */}
      <circle cx={cx} cy={cy} r="370" fill="none" stroke="rgba(0,180,255,0.06)" strokeWidth="50" />
      <circle cx={cx} cy={cy} r="350" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="12 6" />

      {/* Radiating lines from center */}
      {Array.from({ length: config.sides * 2 }, (_, i) => {
        const angle = (Math.PI * 2 * i) / (config.sides * 2) + (config.rotation * Math.PI) / 180 - Math.PI / 2;
        return (
          <line
            key={`ray-${i}`}
            x1={cx + 70 * Math.cos(angle)}
            y1={cy + 70 * Math.sin(angle)}
            x2={cx + 330 * Math.cos(angle)}
            y2={cy + 330 * Math.sin(angle)}
            stroke={i % 2 === 0 ? 'rgba(255,255,255,0.1)' : 'rgba(0,180,255,0.06)'}
            strokeWidth="1"
          />
        );
      })}

      {/* Concentric polygon rings */}
      {Array.from({ length: config.rings }, (_, r) => {
        const radius = 100 + r * 72;
        const ringRotation = config.rotation + r * 12;
        const ringSides = config.sides + (r % 2 === 0 ? 0 : 1);
        return (
          <polygon
            key={`ring-${r}`}
            points={generatePolygonPoints(cx, cy, radius, ringSides, ringRotation)}
            fill="none"
            stroke={r === 0 ? 'rgba(255,255,255,0.55)' : `rgba(0,200,255,${0.3 - r * 0.06})`}
            strokeWidth={2.5 - r * 0.4}
          />
        );
      })}

      {/* Vertex dots on inner polygon */}
      {Array.from({ length: config.sides }, (_, i) => {
        const angle = (Math.PI * 2 * i) / config.sides + (config.rotation * Math.PI) / 180 - Math.PI / 2;
        const r = 100;
        return (
          <circle
            key={`dot-${i}`}
            cx={cx + r * Math.cos(angle)}
            cy={cy + r * Math.sin(angle)}
            r="4"
            fill="rgba(0,200,255,0.5)"
          />
        );
      })}

      {/* Inner decorative circles */}
      <circle cx={cx} cy={cy} r="58" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="1.5" />
      <circle cx={cx} cy={cy} r="63" fill="none" stroke="rgba(0,200,255,0.2)" strokeWidth="1" strokeDasharray="4 3" />

      {/* Center Roman numeral */}
      <text
        x={cx}
        y={cy + 2}
        textAnchor="middle"
        dominantBaseline="central"
        fill="rgba(255,255,255,0.8)"
        fontSize={config.numeral.length > 3 ? '18' : config.numeral.length > 2 ? '22' : '28'}
        fontWeight="bold"
        fontFamily="'Times New Roman', 'Georgia', serif"
        letterSpacing="2px"
      >
        {config.numeral}
      </text>
    </svg>
  );
}

/* ═══════════════════════════════════════════
   WATER OVERLAY (Reused pattern)
   ═══════════════════════════════════════════ */
function PersonaWaterOverlay() {
  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current) videoRef.current.play().catch(() => {});
  }, []);

  return (
    <>
      <video
        ref={videoRef}
        className="skill-water-overlay-video"
        src="/water-overlay.mp4"
        muted
        loop
        playsInline
      />
      <img className="skill-image6-overlay" src="/image 5.png" alt="Texture Overlay" />
    </>
  );
}

/* ═══════════════════════════════════════════
   PERSONA PAGE — P3R Persona Selection Menu
   ═══════════════════════════════════════════ */
export default function PersonaPage({ onBack, isExiting }) {
  const [activeIndex, setActiveIndex] = useState(5); // Start on Fortuna like reference
  const handleBack = onBack || (() => {});
  const currentPersona = PERSONAS[activeIndex];

  // Keyboard navigation: ArrowUp/Down to browse, Esc to return
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isExiting) return;
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : PERSONAS.length - 1));
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActiveIndex((prev) => (prev < PERSONAS.length - 1 ? prev + 1 : 0));
      } else if (e.key === 'Escape' || e.key === 'Backspace') {
        e.preventDefault();
        handleBack();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isExiting, handleBack]);

  return (
    <div className={`persona-page-container ${isExiting ? 'skill-exiting' : 'skill-entering'}`}>

      {/* 1. Blue polygon background */}
      <div className="persona-blue-poly-wrapper skill-fall-elem">
        <div className="persona-blue-poly-rotator">
          <div className="persona-blue-poly-bg" />
        </div>
      </div>

      {/* 2. Water overlay video + halftone texture */}
      <PersonaWaterOverlay />

      {/* 3. "PERSONA" horizontal typography — top-left, partially clipped */}
      <div className="persona-bg-typography skill-fall-elem">
        PERSONA
      </div>

      {/* 4. Right artwork area — geometric arcana illustration + tagline */}
      <div className="persona-artwork-area skill-fall-elem">
        <div className="persona-artwork-container" key={activeIndex}>
          <PersonaArtwork persona={currentPersona} />
        </div>
        <div className="persona-tagline" key={`tag-${activeIndex}`}>
          {currentPersona.tagline}
        </div>
      </div>

      {/* 5. Left persona list with red selector */}
      <div className="persona-list-wrapper skill-fall-elem">
        {/* Red selector bar — tracks active index */}
        <div
          className="persona-selector"
          style={{ top: `${LIST_TOP + activeIndex * ITEM_HEIGHT}px` }}
        />

        {/* Persona rows */}
        {PERSONAS.map((persona, idx) => {
          const isSelected = activeIndex === idx;
          return (
            <div
              key={persona.id}
              className={`persona-item ${isSelected ? 'selected' : ''}`}
              style={{ top: `${LIST_TOP + idx * ITEM_HEIGHT}px` }}
              onClick={() => setActiveIndex(idx)}
            >
              {/* Crystal Tarot card icon — matching P3R game reference */}
              {isSelected && (
                <svg className="persona-tarot-icon" width="28" height="34" viewBox="0 0 28 34" fill="none">
                  <polygon points="14,1 27,9 27,25 14,33 1,25 1,9" fill="#00AAFF" stroke="#88EEFF" strokeWidth="1.5" />
                  <polygon points="14,4 24,10 24,23 14,30 4,23 4,10" fill="#0044CC" opacity="0.75" />
                  <polygon points="14,6 22,11 14,16 6,11" fill="#FFFFFF" opacity="0.65" />
                  <polygon points="14,16 22,11 22,22 14,27" fill="#0088FF" opacity="0.8" />
                  <polygon points="14,16 6,11 6,22 14,27" fill="#002288" opacity="0.9" />
                </svg>
              )}

              <span className="persona-arcana">{persona.arcana}</span>

              <span className="persona-level">
                {isSelected && <span className="persona-lv-prefix">Lv </span>}
                {persona.level}
              </span>

              <span className="persona-dot">·</span>

              <span className="persona-pname">{persona.name}</span>
            </div>
          );
        })}

        {/* Dashed cyan separator line below list */}
        <div
          className="persona-dashed-line"
          style={{ top: `${LIST_TOP + PERSONAS.length * ITEM_HEIGHT + 14}px` }}
        />
      </div>

      {/* 6. Bottom HUD bar — game-style controls */}
      <div className="persona-hud-bar skill-fall-elem">
        <div className="persona-hud-question">Which Persona do you want to change to?</div>
        <div className="persona-hud-guide">Guide</div>
        <div className="persona-hud-controls">
          <span className="hud-btn"><span className="hud-btn-icon">Ⓧ</span> Stats</span>
          <span className="hud-btn"><span className="hud-btn-icon">Ⓐ</span> Change Persona</span>
          <span className="hud-btn"><span className="hud-btn-icon">Ⓑ</span> Back</span>
          <span className="hud-btn"><span className="hud-btn-icon">≡</span> Release</span>
        </div>
      </div>
    </div>
  );
}
