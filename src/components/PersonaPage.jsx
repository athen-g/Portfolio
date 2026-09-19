import React, { useState, useEffect, useRef } from 'react';

/* ══════════════════════════════════════════════════════════════════════════
   PERSONA PROJECTS DATA (From Figma Frame "04 PERSONA" Node 163:115)
   ══════════════════════════════════════════════════════════════════════════ */
const PERSONA_PROJECTS = [
  {
    id: 0,
    arcana: 'Priestess',
    name: 'Hyperspace SIG',
    tagline: 'PIERCE THE VEIL',
    url: 'https://hyperspacesig.tech',
    displayUrl: 'hyperspacesig.tech',
    description: 'Hyperspace XR SIG platform featuring an immersive cyberpunk interface with scroll-driven storytelling and serverless dashboard.',
    skills: [
      { id: 0, name: 'REACT', logo: 'react' },
      { id: 1, name: 'TYPESCRIPT', logo: 'typescript' },
      { id: 2, name: 'VITE', logo: 'vite' },
      { id: 3, name: 'SUPABASE', logo: 'supabase' },
      { id: 4, name: 'POSTGRESQL', logo: 'postgresql' },
      { id: 5, name: 'REST APIS', logo: 'restapi' },
      { id: 6, name: 'JWT', logo: 'jwt' }
    ]
  },
  {
    id: 1,
    arcana: 'Strength',
    name: 'FutureU',
    tagline: 'IRON WILL',
    url: 'https://futureu.dev/?iframe=true',
    displayUrl: 'futureu.dev',
    description: 'Privacy-focused MHT-CET college predictor giving Maharashtra aspirants cutoff trends and seat matrices.',
    skills: [
      { id: 0, name: 'REACT', logo: 'react' },
      { id: 1, name: 'JAVASCRIPT / TYPESCRIPT', logo: 'js_ts' },
      { id: 2, name: 'CODE SPLITTING', logo: 'codesplit' },
      { id: 3, name: 'LAZY LOADING', logo: 'lazyload' },
      { id: 4, name: 'PERFORMANCE OPTIMIZATION', logo: 'perf' },
      { id: 5, name: 'REST APIS', logo: 'restapi' },
      { id: 6, name: 'VITE', logo: 'vite' }
    ]
  },
  {
    id: 2,
    arcana: 'Fool',
    name: 'unimark',
    tagline: 'ORDER & WISDOM',
    url: 'https://theunimark.in',
    displayUrl: 'theunimark.in',
    description: 'School management & learning system featuring a high-performance attendance and grading database.',
    skills: [
      { id: 0, name: 'NEXT.JS', logo: 'nextjs' },
      { id: 1, name: 'REACT', logo: 'react' },
      { id: 2, name: 'TYPESCRIPT', logo: 'typescript' },
      { id: 3, name: 'GRAPHQL', logo: 'graphql' },
      { id: 4, name: 'REST APIS', logo: 'restapi' },
      { id: 5, name: 'MYSQL', logo: 'mysql' },
      { id: 6, name: 'JWT', logo: 'jwt' }
    ]
  },
  {
    id: 3,
    arcana: 'Emperor',
    name: 'Hanasaku (花咲く)',
    tagline: 'BLOOMING LIFE',
    url: 'https://hanasaku-seven.vercel.app/',
    displayUrl: 'hanasaku-seven.vercel.app',
    description: 'Secure real-time health tracker with strict PostgreSQL security policies and multi-lingual support.',
    skills: [
      { id: 0, name: 'REACT', logo: 'react' },
      { id: 1, name: 'TYPESCRIPT', logo: 'typescript' },
      { id: 2, name: 'POSTGRESQL', logo: 'postgresql' },
      { id: 3, name: 'SUPABASE', logo: 'supabase' },
      { id: 4, name: 'REST APIS', logo: 'restapi' },
      { id: 5, name: 'JWT', logo: 'jwt' },
      { id: 6, name: 'VITE', logo: 'vite' }
    ]
  },
  {
    id: 4,
    arcana: 'Justice',
    name: 'MGC Cosmetics',
    tagline: 'RIGHTEOUS BLADE',
    url: 'https://atharvanitinghule.wixstudio.com/mcgcosmetics',
    displayUrl: 'atharvanitinghule.wixstudio.com/mcgcosmetics',
    description: 'Premium e-commerce storefront engineered for cosmetics cataloging with interactive hover modules.',
    skills: [
      { id: 0, name: 'JAVASCRIPT / TYPESCRIPT', logo: 'js_ts' },
      { id: 1, name: 'REST APIS', logo: 'restapi' },
      { id: 2, name: 'PERFORMANCE OPTIMIZATION', logo: 'perf' },
      { id: 3, name: 'CODE SPLITTING', logo: 'codesplit' },
      { id: 4, name: 'LAZY LOADING', logo: 'lazyload' },
      { id: 5, name: 'JWT', logo: 'jwt' },
      { id: 6, name: 'REACT', logo: 'react' }
    ]
  },
  {
    id: 5,
    arcana: 'Fool',
    name: 'Green Life',
    tagline: 'INFINITE POTENTIAL',
    url: 'https://atharvanitinghule.wixstudio.com/greenlife',
    displayUrl: 'atharvanitinghule.wixstudio.com/greenlife',
    description: 'Organic bio-centric presence implementing sustainable branding aesthetics and smooth parallax.',
    skills: [
      { id: 0, name: 'REACT', logo: 'react' },
      { id: 1, name: 'TYPESCRIPT', logo: 'typescript' },
      { id: 2, name: 'PERFORMANCE OPTIMIZATION', logo: 'perf' },
      { id: 3, name: 'REST APIS', logo: 'restapi' },
      { id: 4, name: 'VITE', logo: 'vite' },
      { id: 5, name: 'LAZY LOADING', logo: 'lazyload' },
      { id: 6, name: 'JWT', logo: 'jwt' }
    ]
  },
];

/* ── Skill Icon Vector Badges ── */
function SkillLogo({ logo }) {
  switch (logo) {
    case 'react':
      return (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#00D8FF" strokeWidth="1.4">
          <ellipse cx="12" cy="12" rx="10.5" ry="4"/>
          <ellipse cx="12" cy="12" rx="10.5" ry="4" transform="rotate(60 12 12)"/>
          <ellipse cx="12" cy="12" rx="10.5" ry="4" transform="rotate(120 12 12)"/>
          <circle cx="12" cy="12" r="2.2" fill="#00D8FF"/>
        </svg>
      );
    case 'typescript':
      return (
        <svg viewBox="0 0 24 24" width="24" height="24">
          <rect width="24" height="24" rx="4" fill="#3178C6"/>
          <text x="12" y="17" fill="white" fontSize="13" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">TS</text>
        </svg>
      );
    case 'vite':
      return (
        <svg viewBox="0 0 24 24" width="24" height="24">
          <path d="M22.5 3.5l-10 19-10-19 8.5 2.5 1.5 6 1.5-6 8.5-2.5z" fill="#646CFF" stroke="white" strokeWidth="0.8"/>
          <path d="M15.5 2.5L8 14h5l-2 7.5 9-11h-5.5l1-8z" fill="#FFD62E"/>
        </svg>
      );
    case 'supabase':
      return (
        <svg viewBox="0 0 24 24" width="24" height="24">
          <rect width="24" height="24" rx="4" fill="#1C1C1C" stroke="#3ECF8E" strokeWidth="1"/>
          <path d="M13.5 2.5L3.5 14.5h8.5l-1.5 7 10-12h-8.5l1.5-7z" fill="#3ECF8E"/>
        </svg>
      );
    case 'postgresql':
      return (
        <svg viewBox="0 0 24 24" width="24" height="24">
          <circle cx="12" cy="12" r="11.5" fill="#336791" stroke="white" strokeWidth="1"/>
          <text x="12" y="16.5" fill="white" fontSize="9.5" fontWeight="900" fontFamily="sans-serif" textAnchor="middle">SQL</text>
        </svg>
      );
    case 'js_ts':
      return (
        <svg viewBox="0 0 24 24" width="24" height="24">
          <rect width="11.5" height="24" rx="3" fill="#F7DF1E"/>
          <rect x="12.5" width="11.5" height="24" rx="3" fill="#3178C6"/>
          <text x="5.75" y="16" fill="black" fontSize="9" fontWeight="900" fontFamily="sans-serif" textAnchor="middle">JS</text>
          <text x="18.25" y="16" fill="white" fontSize="9" fontWeight="900" fontFamily="sans-serif" textAnchor="middle">TS</text>
        </svg>
      );
    case 'codesplit':
      return (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="2" width="9" height="9" rx="2" fill="rgba(96,165,250,0.3)"/>
          <rect x="14" y="2" width="9" height="9" rx="2" fill="rgba(96,165,250,0.3)"/>
          <rect x="7.5" y="14" width="9" height="9" rx="2" fill="#60A5FA"/>
          <path d="M5.5 11v1.5a1.5 1.5 0 001.5 1.5h1M18.5 11v1.5a1.5 1.5 0 01-1.5 1.5h-1"/>
        </svg>
      );
    case 'lazyload':
      return (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#F59E0B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" stroke="#F59E0B" strokeDasharray="3 3"/>
          <polyline points="12 7 12 12 15.5 14" stroke="white" strokeWidth="1.8"/>
          <circle cx="12" cy="12" r="1.5" fill="white"/>
        </svg>
      );
    case 'perf':
      return (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#10B981" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 16a9.5 9.5 0 1118 0" stroke="white" strokeWidth="1.8"/>
          <path d="M12 13l4-5" stroke="#10B981" strokeWidth="2.2"/>
          <circle cx="12" cy="13" r="2" fill="#10B981"/>
        </svg>
      );
    case 'nextjs':
      return (
        <svg viewBox="0 0 24 24" width="24" height="24">
          <circle cx="12" cy="12" r="11.5" fill="black" stroke="white" strokeWidth="1.2"/>
          <path d="M7.5 7v10h2.3v-5.8l6.2 5.8h1.8V7h-2.3v5.8L9.3 7H7.5z" fill="white"/>
        </svg>
      );
    case 'graphql':
      return (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#E535AB" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12,2 22,7.8 22,19.2 12,25 2,19.2 2,7.8" fill="rgba(229,53,171,0.15)"/>
          <circle cx="12" cy="2" r="1.8" fill="#E535AB"/>
          <circle cx="22" cy="7.8" r="1.8" fill="#E535AB"/>
          <circle cx="22" cy="19.2" r="1.8" fill="#E535AB"/>
          <circle cx="12" cy="25" r="1.8" fill="#E535AB"/>
          <circle cx="2" cy="19.2" r="1.8" fill="#E535AB"/>
          <circle cx="2" cy="7.8" r="1.8" fill="#E535AB"/>
          <polygon points="12,6.5 18,17 6,17"/>
        </svg>
      );
    case 'restapi':
      return (
        <svg viewBox="0 0 24 24" width="24" height="24">
          <rect width="24" height="24" rx="4" fill="#009688"/>
          <text x="12" y="16.5" fill="white" fontSize="9" fontWeight="900" fontFamily="sans-serif" textAnchor="middle" letterSpacing="-0.5px">REST</text>
        </svg>
      );
    case 'mysql':
      return (
        <svg viewBox="0 0 24 24" width="24" height="24">
          <rect width="24" height="24" rx="4" fill="#00758F"/>
          <text x="12" y="16.5" fill="#F29111" fontSize="9" fontWeight="900" fontFamily="sans-serif" textAnchor="middle" letterSpacing="-0.5px">MySQL</text>
        </svg>
      );
    case 'jwt':
      return (
        <svg viewBox="0 0 24 24" width="24" height="24">
          <rect width="24" height="24" rx="4" fill="#D63AFF"/>
          <text x="12" y="16.5" fill="white" fontSize="10" fontWeight="900" fontFamily="sans-serif" textAnchor="middle">JWT</text>
        </svg>
      );
    default:
      return null;
  }
}

/* ── Water Overlay Component ── */
function PersonaWaterOverlay() {
  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current) videoRef.current.play().catch(() => { });
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

/* ══════════════════════════════════════════════════════════════════════════
   PERSONA PAGE COMPONENT (Exact Figma Implementation)
   ══════════════════════════════════════════════════════════════════════════ */
export default function PersonaPage({ onBack, isExiting }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSelectedView, setIsSelectedView] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleBack = onBack || (() => { });
  const currentProject = PERSONA_PROJECTS[activeIndex] || PERSONA_PROJECTS[0];

  const handleSelectProject = (idx) => {
    if (idx !== undefined) setActiveIndex(idx);
    if (!isSelectedView) {
      setIsSelectedView(true);
      setIsTransitioning(true);
      setTimeout(() => setIsTransitioning(false), 1400);
    }
  };

  const handleDeselect = () => {
    if (isSelectedView) {
      setIsSelectedView(false);
    } else {
      handleBack();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isExiting) return;
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : PERSONA_PROJECTS.length - 1));
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActiveIndex((prev) => (prev < PERSONA_PROJECTS.length - 1 ? prev + 1 : 0));
      } else if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        if (!isSelectedView) {
          handleSelectProject();
        }
      } else if (e.key === 'Escape' || e.key === 'Backspace') {
        e.preventDefault();
        handleDeselect();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isExiting, isSelectedView, handleBack]);

  return (
    <div className={`persona-page-container ${isExiting ? 'skill-exiting' : 'skill-entering'}`}>

      {/* 1. Figma Deep Blue Polygon Background (Node 163:126) */}
      <div className="persona-figma-blue-wrapper skill-fall-elem">
        <div className="persona-figma-blue-rotator">
          <div className="persona-figma-blue-bg" />
        </div>
      </div>

      {/* 2. Water overlay video */}
      <PersonaWaterOverlay />

      {/* 3. Figma Giant "PERSONA" Typography (Node 163:148) */}
      <div className={`persona-figma-typography skill-fall-elem ${isSelectedView ? 'typo-flyout-topleft' : ''}`}>
        <div className="persona-figma-typo-rotator">
          <div className="persona-figma-typo-inner">
            <p className="persona-figma-typo-text">PERSONA</p>
          </div>
        </div>
      </div>

      {/* 4. Figma Image 6 Shattered Particles Overlay (Node 163:149) */}
      <div className={`persona-figma-particles-wrapper skill-fall-elem ${isSelectedView ? 'particles-fadeout' : ''}`}>
        <div className="persona-figma-particles-rotator">
          <img src="/persona-image6.png" alt="Particles" className="persona-figma-particles-img" />
        </div>
      </div>

      {/* 5. Right Feature Card Frame — Dynamic Project Website Live Embed & Link */}
      <div className={`persona-figma-frame-wrapper skill-fall-elem ${isSelectedView ? 'frame-shrink' : ''}`}>
        <div className="persona-figma-frame-rotator">
          <div className="persona-figma-frame-box">
            {/* Browser top-bar indicator like main branch ProjectCard */}
            <div className="persona-frame-topbar">
              <div className="persona-frame-dots">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
              </div>
              <div className="persona-frame-url-bar">
                {currentProject.displayUrl || currentProject.url.replace(/^https?:\/\//, '')}
              </div>
            </div>

            {/* Embedded Live Webview viewport container */}
            <div className="persona-frame-content-viewport">
              <iframe
                key={`frame-${currentProject.id}`}
                src={currentProject.url}
                title={`Preview of ${currentProject.name}`}
                className="persona-frame-iframe"
                loading="lazy"
                scrolling="no"
                sandbox="allow-scripts allow-same-origin allow-popups"
              />
            </div>

            {/* Interactive Overlay & Visit Button */}
            <a
              href={currentProject.url}
              target="_blank"
              rel="noopener noreferrer"
              className="persona-frame-visit-btn"
              title={`Visit ${currentProject.name} in new tab`}
            >
              <span>{currentProject.displayUrl ? currentProject.displayUrl.toUpperCase() : 'VISIT PROJECT'} ↗</span>
            </a>
          </div>
        </div>
      </div>

      {/* 6. Figma Tagline Typography "PIERCE THE VEIL" (Node 165:283) */}
      <div
        className={`persona-figma-tagline skill-fall-elem ${isSelectedView ? 'tagline-slow-fadeout' : ''}`}
        key={`tag-${activeIndex}`}
      >
        {currentProject.tagline.split(' ').map((word, wIdx) => (
          <span key={wIdx} className="persona-tagline-word">
            {word.split('').map((char, cIdx) => (
              <span
                key={cIdx}
                className="persona-tagline-char"
                style={{ animationDelay: `${(wIdx * 4 + cIdx) * 0.12}s` }}
              >
                {char}
              </span>
            ))}
          </span>
        ))}
      </div>

      {/* 7. Persona Projects Selection List & Selector (Nodes 165:276 to 165:281) */}
      <div className={`persona-figma-list-wrapper skill-fall-elem ${isSelectedView ? 'list-fadeout' : ''}`}>
        {/* Figma Persona Selector Graphic (Node 163:219) */}
        <div
          className="persona-figma-selector"
          style={{ top: `${238 + activeIndex * 63}px` }}
        >
          <img src="/persona-selector.svg" alt="Selector" className="persona-selector-img" />
        </div>

        {/* Project Items */}
        {PERSONA_PROJECTS.map((project, idx) => {
          const isSelected = activeIndex === idx;
          const rowTop = 255 + idx * 63;

          return (
            <div
              key={project.id}
              className={`persona-figma-row ${isSelected ? 'selected' : ''}`}
              style={{ top: `${rowTop}px` }}
              onClick={() => handleSelectProject(idx)}
            >
              {/* Arcana Capsule Pill (Nodes 164:227, etc.) */}
              <div className={`persona-arcana-pill ${isSelected ? 'pill-selected' : 'pill-normal'}`}>
                <span className="persona-arcana-text">{project.arcana}</span>
              </div>

              {/* Project Label Name (Nodes 165:248, 165:249, etc.) */}
              <span className={`persona-project-name ${isSelected ? 'name-selected' : 'name-normal'}`}>
                {project.name}
              </span>
            </div>
          );
        })}

        {/* Dashed Separator Lines (Nodes 165:274, 165:275) */}
        <div className="persona-figma-dashed-line line-1">
          <img src="/persona-dashed-line.svg" alt="separator" />
        </div>
        <div className="persona-figma-dashed-line line-2">
          <img src="/persona-dashed-line.svg" alt="separator" />
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════
          SELECTED VIEW (04 PERSONA-selected Node 183:115)
          ══════════════════════════════════════════════════════════════════ */}
      {isSelectedView && (
        <div className="persona-selected-container">
          {/* Background particles texture (image 10) */}
          <div className="persona-selected-particles-overlay">
            <img src="/image-10.png" alt="Particles texture" className="persona-selected-particles-img" />
          </div>

          {/* Phase 2: Top elements flying in from top-left (Nodes 188:165, 189:206) */}
          <div className="persona-selected-top">
            <div className="persona-selected-top-shape">
              <div className="persona-top-polygon" />
              <div className="persona-top-polygon-cyan" />
            </div>

            <div className="persona-selected-top-content">
              {/* Project Label pill / badge */}
              <div className="persona-selected-project-badge">
                <span className="badge-la">LA</span>
                <span className="badge-title">PROJECT {activeIndex + 1}</span>
                <span className="badge-ra">RA</span>
              </div>

              {/* Author / Title */}
              <div className="persona-selected-title-group">
                <span className="persona-selected-name">ATHARVA GHULE</span>
                <div className="persona-selected-stack-group">
                  <span className="persona-selected-stack-label">STACK:</span>
                  <span className="persona-selected-stack-val">FRONTEND</span>
                </div>
              </div>
            </div>
          </div>

          {/* Phase 2: Bottom Blue Slanted Rectangle flying in from bottom-right (Node 184:158) */}
          <div className="persona-selected-bottom-rect">
            <div className="persona-bottom-rect-bg">
              {/* Decorative stripes / accents inside blue banner */}
              <div className="persona-bottom-stripe" />
            </div>
          </div>

          {/* Phase 3: Diamond expanding inside blue banner (Node 184:160) */}
          <div className="persona-selected-diamond">
            <div className="persona-diamond-inner">
              <div className="persona-diamond-outline" />
            </div>
          </div>

          {/* Phase 3: Skills container flying in from bottom (Node 188:191) */}
          <div className="persona-selected-skills">
            <div className="persona-skills-grid">
              {/* 8 slots: 7 skills + 1 NONE empty slot */}
              {Array.from({ length: 8 }).map((_, sIdx) => {
                const skill = currentProject.skills && currentProject.skills[sIdx];
                if (skill) {
                  return (
                    <div key={skill.id} className="persona-skill-card">
                      <div className="persona-skill-icon-wrap">
                        <SkillLogo logo={skill.logo} />
                      </div>
                      <span className="persona-skill-text">{skill.name}</span>
                    </div>
                  );
                }
                return (
                  <div key={`empty-${sIdx}`} className="persona-skill-card empty-card">
                    <span className="persona-skill-none-text">------- NONE ------</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
