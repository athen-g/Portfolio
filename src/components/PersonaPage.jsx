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
    description: 'Hyperspace XR SIG platform featuring an immersive cyberpunk interface with scroll-driven storytelling and serverless dashboard.'
  },
  {
    id: 1,
    arcana: 'Strength',
    name: 'FutureU',
    tagline: 'IRON WILL',
    url: 'https://futureu.dev/?iframe=true',
    displayUrl: 'futureu.dev',
    description: 'Privacy-focused MHT-CET college predictor giving Maharashtra aspirants cutoff trends and seat matrices.'
  },
  {
    id: 2,
    arcana: 'Fool',
    name: 'unimark',
    tagline: 'ORDER & WISDOM',
    url: 'https://theunimark.in',
    displayUrl: 'theunimark.in',
    description: 'School management & learning system featuring a high-performance attendance and grading database.'
  },
  {
    id: 3,
    arcana: 'Emperor',
    name: 'Hanasaku (花咲く)',
    tagline: 'BLOOMING LIFE',
    url: 'https://hanasaku-seven.vercel.app/',
    displayUrl: 'hanasaku-seven.vercel.app',
    description: 'Secure real-time health tracker with strict PostgreSQL security policies and multi-lingual support.'
  },
  {
    id: 4,
    arcana: 'Justice',
    name: 'MGC Cosmetics',
    tagline: 'RIGHTEOUS BLADE',
    url: 'https://atharvanitinghule.wixstudio.com/mcgcosmetics',
    displayUrl: 'atharvanitinghule.wixstudio.com/mcgcosmetics',
    description: 'Premium e-commerce storefront engineered for cosmetics cataloging with interactive hover modules.'
  },
  {
    id: 5,
    arcana: 'Fool',
    name: 'Green Life',
    tagline: 'INFINITE POTENTIAL',
    url: 'https://atharvanitinghule.wixstudio.com/greenlife',
    displayUrl: 'atharvanitinghule.wixstudio.com/greenlife',
    description: 'Organic bio-centric presence implementing sustainable branding aesthetics and smooth parallax.'
  },
];

/* ── Water Overlay Component ── */
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

/* ══════════════════════════════════════════════════════════════════════════
   PERSONA PAGE COMPONENT (Exact Figma Implementation)
   ══════════════════════════════════════════════════════════════════════════ */
export default function PersonaPage({ onBack, isExiting }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleBack = onBack || (() => {});
  const currentProject = PERSONA_PROJECTS[activeIndex] || PERSONA_PROJECTS[0];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isExiting) return;
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : PERSONA_PROJECTS.length - 1));
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActiveIndex((prev) => (prev < PERSONA_PROJECTS.length - 1 ? prev + 1 : 0));
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

      {/* 1. Figma Deep Blue Polygon Background (Node 163:126) */}
      <div className="persona-figma-blue-wrapper skill-fall-elem">
        <div className="persona-figma-blue-rotator">
          <div className="persona-figma-blue-bg" />
        </div>
      </div>

      {/* 2. Water overlay video */}
      <PersonaWaterOverlay />

      {/* 3. Figma Giant "PERSONA" Typography (Node 163:148) */}
      <div className="persona-figma-typography skill-fall-elem">
        <div className="persona-figma-typo-rotator">
          <div className="persona-figma-typo-inner">
            <p className="persona-figma-typo-text">PERSONA</p>
          </div>
        </div>
      </div>

      {/* 4. Figma Image 6 Shattered Particles Overlay (Node 163:149) */}
      <div className="persona-figma-particles-wrapper skill-fall-elem">
        <div className="persona-figma-particles-rotator">
          <img src="/persona-image6.png" alt="Particles" className="persona-figma-particles-img" />
        </div>
      </div>

      {/* 5. Right Feature Card Frame — Dynamic Project Website Live Embed & Link */}
      <div className="persona-figma-frame-wrapper skill-fall-elem">
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

      {/* 6. Figma Tagline Typography "PIERCE THE VEIL" (Node 165:283) with dedicated water & particle overlay */}
      <div className="persona-tagline-container skill-fall-elem" key={`tag-${activeIndex}`}>
        <div className="persona-figma-tagline">
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

        {/* Dedicated water caustic overlay layer strictly over the tagline */}
        <div className="persona-tagline-overlay-wrapper">
          <video
            className="persona-tagline-water-video"
            src="/water-overlay.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
          <img
            src="/persona-image6.png"
            alt="Tagline Particles"
            className="persona-tagline-particles-img"
          />
        </div>
      </div>

      {/* 7. Persona Projects Selection List & Selector (Nodes 165:276 to 165:281) */}
      <div className="persona-figma-list-wrapper skill-fall-elem">
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
              onClick={() => setActiveIndex(idx)}
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

    </div>
  );
}
