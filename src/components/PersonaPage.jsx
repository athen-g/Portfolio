import React, { useState, useEffect, useRef } from 'react';

/* ══════════════════════════════════════════════════════════════════════════
   PERSONA PROJECTS DATA (From Figma Frame "04 PERSONA" Node 163:115)
   ══════════════════════════════════════════════════════════════════════════ */
const PERSONA_PROJECTS = [
  {
    id: 0,
    arcana: 'Fullstack',
    name: 'Hyperspace SIG',
    tagline: 'PIERCE THE VEIL',
    url: 'https://hyperspacesig.tech',
    displayUrl: 'hyperspacesig.tech',
    description: 'Hyperspace XR SIG platform featuring an immersive cyberpunk interface with scroll-driven storytelling and serverless dashboard.',
    skills: [
      { id: 0, name: 'REACT', logo: 'react', desc: 'Component architecture driving responsive cyberpunk viewport UI and state flow.' },
      { id: 1, name: 'TYPESCRIPT', logo: 'typescript', desc: 'Strict static type definitions ensuring contract fidelity across modules.' },
      { id: 2, name: 'VITE', logo: 'vite', desc: 'High-speed HMR build bundler providing instant compilation and code-splitting.' },
      { id: 3, name: 'SUPABASE', logo: 'supabase', desc: 'Realtime database engine and backend service handling auth and storage.' },
      { id: 4, name: 'POSTGRESQL', logo: 'postgresql', desc: 'Relational data store featuring row-level security and optimized query indexes.' },
      { id: 5, name: 'REST APIS', logo: 'restapi', desc: 'Secure stateless REST endpoints delivering serialized resources.' },
      { id: 6, name: 'JWT', logo: 'jwt', desc: 'Cryptographic JSON Web Tokens maintaining stateless user authentication.' }
    ]
  },
  {
    id: 1,
    arcana: 'Fullstack',
    name: 'FutureU',
    tagline: 'IRON WILL',
    url: 'https://futureu.dev/?iframe=true',
    displayUrl: 'futureu.dev',
    description: 'Privacy-focused MHT-CET college predictor giving Maharashtra aspirants cutoff trends and seat matrices.',
    skills: [
      { id: 0, name: 'REACT', logo: 'react', desc: 'Interactive filter views and reactive cutoff prediction visualization.' },
      { id: 1, name: 'JAVASCRIPT / TYPESCRIPT', logo: 'js_ts', desc: 'Modern typed ECMAScript powering algorithmic predictive models.' },
      { id: 2, name: 'CODE SPLITTING', logo: 'codesplit', desc: 'Granular dynamic chunk allocation reducing initial page payload.' },
      { id: 3, name: 'LAZY LOADING', logo: 'lazyload', desc: 'Deferred asset and component hydration optimizing first contentful paint.' },
      { id: 4, name: 'PERFORMANCE OPTIMIZATION', logo: 'perf', desc: 'Memoization, debounced queries, and tree-shaking for 60fps responsiveness.' },
      { id: 5, name: 'REST APIS', logo: 'restapi', desc: 'Low-latency data endpoints serving high-throughput ranking datasets.' },
      { id: 6, name: 'VITE', logo: 'vite', desc: 'Fast ESM bundler delivering rapid builds and efficient deployment assets.' }
    ]
  },
  {
    id: 2,
    arcana: 'Database',
    name: 'unimark',
    tagline: 'ORDER & WISDOM',
    url: 'https://theunimark.in',
    displayUrl: 'theunimark.in',
    description: 'School management & learning system featuring a high-performance attendance and grading database.',
    skills: [
      { id: 0, name: 'NEXT.JS', logo: 'nextjs', desc: 'Hybrid SSR & static rendering optimizing educational portal availability.' },
      { id: 1, name: 'REACT', logo: 'react', desc: 'Modular administrative dashboards and student roster workflows.' },
      { id: 2, name: 'TYPESCRIPT', logo: 'typescript', desc: 'Strict interface contracts preventing regressions across large codebases.' },
      { id: 3, name: 'GRAPHQL', logo: 'graphql', desc: 'Precise declarative queries aggregating student data across school nodes.' },
      { id: 4, name: 'REST APIS', logo: 'restapi', desc: 'REST endpoints powering legacy system bridges and batch data sync.' },
      { id: 5, name: 'MYSQL', logo: 'mysql', desc: 'ACID-compliant relational schema structured for transactional attendance logs.' },
      { id: 6, name: 'JWT', logo: 'jwt', desc: 'Role-based access tokens separating student, teacher, and admin permissions.' }
    ]
  },
  {
    id: 3,
    arcana: 'Fullstack',
    name: 'Hanasaku (花咲く)',
    tagline: 'BLOOMING LIFE',
    url: 'https://hanasaku-seven.vercel.app/',
    displayUrl: 'hanasaku-seven.vercel.app',
    description: 'Secure real-time health tracker with strict PostgreSQL security policies and multi-lingual support.',
    skills: [
      { id: 0, name: 'REACT', logo: 'react', desc: 'Realtime biometric charts and wellness timeline interfaces.' },
      { id: 1, name: 'TYPESCRIPT', logo: 'typescript', desc: 'Strict type validation preventing invalid health metric ingestion.' },
      { id: 2, name: 'POSTGRESQL', logo: 'postgresql', desc: 'Strict RLS health schema safeguarding patient privacy and records.' },
      { id: 3, name: 'SUPABASE', logo: 'supabase', desc: 'Realtime pub/sub subscriptions broadcasting live patient updates.' },
      { id: 4, name: 'REST APIS', logo: 'restapi', desc: 'Encrypted payload transport delivering sensitive diagnostic data.' },
      { id: 5, name: 'JWT', logo: 'jwt', desc: 'Secure session tokens with automatic refresh cycles and revocation.' },
      { id: 6, name: 'VITE', logo: 'vite', desc: 'Lightweight client bundle engine optimizing mobile web accessibility.' }
    ]
  },
  {
    id: 4,
    arcana: 'Design',
    name: 'MGC Cosmetics',
    tagline: 'RIGHTEOUS BLADE',
    url: 'https://atharvanitinghule.wixstudio.com/mcgcosmetics',
    displayUrl: 'atharvanitinghule.wixstudio.com/mcgcosmetics',
    description: 'Premium e-commerce storefront engineered for cosmetics cataloging with interactive hover modules.',
    skills: [
      { id: 0, name: 'JAVASCRIPT / TYPESCRIPT', logo: 'js_ts', desc: 'Interactive visual state machine managing product preview variations.' },
      { id: 1, name: 'REST APIS', logo: 'restapi', desc: 'Headless cart and inventory management API integration.' },
      { id: 2, name: 'PERFORMANCE OPTIMIZATION', logo: 'perf', desc: 'Image responsive srcsets and CSS containment for stutter-free scrolling.' },
      { id: 3, name: 'CODE SPLITTING', logo: 'codesplit', desc: 'On-demand loading of heavy 3D product viewports and carousels.' },
      { id: 4, name: 'LAZY LOADING', logo: 'lazyload', desc: 'Progressive image disclosure keeping initial bandwidth footprint light.' },
      { id: 5, name: 'JWT', logo: 'jwt', desc: 'Authenticated customer profile and checkout session verification.' },
      { id: 6, name: 'REACT', logo: 'react', desc: 'Componentized design system following luxury brand typography and palettes.' }
    ]
  },
  {
    id: 5,
    arcana: 'Design',
    name: 'Green Life',
    tagline: 'INFINITE POTENTIAL',
    url: 'https://atharvanitinghule.wixstudio.com/greenlife',
    displayUrl: 'atharvanitinghule.wixstudio.com/greenlife',
    description: 'Organic bio-centric presence implementing sustainable branding aesthetics and smooth parallax.',
    skills: [
      { id: 0, name: 'REACT', logo: 'react', desc: 'Smooth spring-physics transitions and scroll-coupled environmental layouts.' },
      { id: 1, name: 'TYPESCRIPT', logo: 'typescript', desc: 'Reliable type contracts orchestrating interactive narrative animations.' },
      { id: 2, name: 'PERFORMANCE OPTIMIZATION', logo: 'perf', desc: 'GPU-accelerated transforms for continuous 60fps parallax depth.' },
      { id: 3, name: 'REST APIS', logo: 'restapi', desc: 'Dynamic botanical catalog queries and impact counter syncing.' },
      { id: 4, name: 'VITE', logo: 'vite', desc: 'Rapid development environment with aggressive asset minification.' },
      { id: 5, name: 'LAZY LOADING', logo: 'lazyload', desc: 'Scroll-triggered image reveals minimizing network load.' },
      { id: 6, name: 'JWT', logo: 'jwt', desc: 'Session token authentication for community subscriber contributions.' }
    ]
  }
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
  const [isSkillSelected, setIsSkillSelected] = useState(false);
  const [selectedSkillIndex, setSelectedSkillIndex] = useState(0);
  const [isBgRevealed, setIsBgRevealed] = useState(false);
  const [isBgReversing, setIsBgReversing] = useState(false);
  const [projectSwitchAnim, setProjectSwitchAnim] = useState(false);
  const [isSelectedEntering, setIsSelectedEntering] = useState(false);
  const switchTimerRef = useRef(null);

  const handleBack = onBack || (() => { });
  const currentProject = PERSONA_PROJECTS[activeIndex] || PERSONA_PROJECTS[0];

  const handleSelectProject = (idx) => {
    if (idx !== undefined) setActiveIndex(idx);
    if (!isSelectedView) {
      setIsSelectedView(true);
      setIsTransitioning(true);
      setIsSkillSelected(false);
      setIsBgRevealed(false);
      setIsBgReversing(false);
      setIsSelectedEntering(true);
      setTimeout(() => setIsTransitioning(false), 1400);
      setTimeout(() => setIsSelectedEntering(false), 1500);
    }
  };

  const closeBgReveal = () => {
    if (isBgRevealed && !isBgReversing) {
      setIsBgReversing(true);
      setTimeout(() => {
        setIsBgRevealed(false);
        setIsBgReversing(false);
      }, 500);
    }
  };

  const handleDeselect = () => {
    if (isBgRevealed) {
      closeBgReveal();
    } else if (isSkillSelected) {
      setIsSkillSelected(false);
    } else if (isSelectedView) {
      setIsSelectedView(false);
    } else {
      handleBack();
    }
  };

  const triggerProjectSwitch = (newIdx) => {
    if (switchTimerRef.current) {
      clearTimeout(switchTimerRef.current);
    }
    setActiveIndex(newIdx);
    setProjectSwitchAnim(true);
    if (typeof window !== 'undefined' && window.focus) {
      window.focus();
    }
    switchTimerRef.current = setTimeout(() => {
      setProjectSwitchAnim(false);
    }, 450);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isExiting) return;

      if (isBgRevealed) {
        if (e.key === 'Escape' || e.key === 'Backspace' || e.key === 'b' || e.key === 'B') {
          e.preventDefault();
          closeBgReveal();
        }
        return;
      }

      if (isSelectedView) {
        if (isSkillSelected) {
          // Inside Skill Selection Mode
          if (e.key === 'ArrowUp') {
            e.preventDefault();
            setSelectedSkillIndex((prev) => {
              if (prev === 0) return 3;
              if (prev <= 3) return prev - 1;
              if (prev === 4) return 6;
              return prev - 1;
            });
          } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            setSelectedSkillIndex((prev) => {
              if (prev === 3) return 0;
              if (prev < 3) return prev + 1;
              if (prev === 6) return 4;
              return prev + 1;
            });
          } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            setSelectedSkillIndex((prev) => (prev < 4 ? Math.min(prev + 4, 6) : prev));
          } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            setSelectedSkillIndex((prev) => (prev >= 4 ? prev - 4 : prev));
          } else if (e.key === 'b' || e.key === 'B') {
            e.preventDefault();
            setIsBgRevealed(true);
            setIsBgReversing(false);
          } else if (e.key === 'Escape' || e.key === 'Backspace') {
            e.preventDefault();
            setIsSkillSelected(false);
          }
        } else {
          // Project View
          if (e.key === 'ArrowLeft') {
            e.preventDefault();
            const currentIdx = activeIndex < PERSONA_PROJECTS.length ? activeIndex : 0;
            const newIdx = currentIdx > 0 ? currentIdx - 1 : PERSONA_PROJECTS.length - 1;
            triggerProjectSwitch(newIdx);
          } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            const currentIdx = activeIndex < PERSONA_PROJECTS.length ? activeIndex : 0;
            const newIdx = currentIdx < PERSONA_PROJECTS.length - 1 ? currentIdx + 1 : 0;
            triggerProjectSwitch(newIdx);
          } else if (e.key === 'Enter' || e.key === ' ' || e.key === 'x' || e.key === 'X') {
            e.preventDefault();
            setIsSkillSelected(true);
            setSelectedSkillIndex(0);
          } else if (e.key === 'b' || e.key === 'B') {
            e.preventDefault();
            setIsBgRevealed(true);
            setIsBgReversing(false);
          } else if (e.key === 'Escape' || e.key === 'Backspace') {
            e.preventDefault();
            handleDeselect();
          }
        }
      } else {
        // List view: ArrowUp and ArrowDown cycle through all rows (0..7 including dashed lines)
        if (e.key === 'ArrowUp') {
          e.preventDefault();
          setActiveIndex((prev) => (prev > 0 ? prev - 1 : 7));
        } else if (e.key === 'ArrowDown') {
          e.preventDefault();
          setActiveIndex((prev) => (prev < 7 ? prev + 1 : 0));
        } else if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          if (activeIndex < PERSONA_PROJECTS.length) {
            handleSelectProject();
          }
        } else if (e.key === 'Escape' || e.key === 'Backspace') {
          e.preventDefault();
          handleDeselect();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isExiting, isSelectedView, isSkillSelected, isBgRevealed, activeIndex, handleBack]);

  const selectedSkill = (currentProject.skills && currentProject.skills[selectedSkillIndex]) || {
    name: 'REACT',
    logo: 'react',
    desc: 'Core architecture and component tree driving state flow.'
  };

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
      <div
        className={`persona-figma-frame-wrapper skill-fall-elem ${
          isSelectedView ? (isSkillSelected ? 'frame-shrink frame-skill-selected-pos' : 'frame-shrink') : ''
        } ${projectSwitchAnim ? 'frame-project-switch' : ''}`}
      >
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
                tabIndex={-1}
                aria-hidden="true"
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
      {!isSelectedView && (
        <div
          className="persona-figma-tagline skill-fall-elem"
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
      )}

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

        {/* Dashed Separator Lines (Nodes 165:274, 165:275) - selectable, but cannot open */}
        <div
          className={`persona-figma-dashed-line line-1 ${activeIndex === 6 ? 'selected' : ''}`}
          onClick={() => setActiveIndex(6)}
        >
          <img src="/persona-dashed-line.svg" alt="separator" />
        </div>
        <div
          className={`persona-figma-dashed-line line-2 ${activeIndex === 7 ? 'selected' : ''}`}
          onClick={() => setActiveIndex(7)}
        >
          <img src="/persona-dashed-line.svg" alt="separator" />
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════
          SELECTED VIEW (04 PERSONA-selected Node 183:115)
          ══════════════════════════════════════════════════════════════════ */}
      {isSelectedView && (
        <div className="persona-selected-container" data-node-id="183:115">
          {/* Background particles texture (image 10, Node 183:156) */}
          <div className="persona-selected-particles-overlay" data-node-id="183:156">
            <img src="/image-10.png" alt="Particles texture" className="persona-selected-particles-img" />
          </div>

          {/* Phase 2: Top Slanted Banner (Node 188:165) */}
          <div
            className="persona-selected-top-banner"
            data-node-id="188:165"
            data-name="top"
          >
            <svg preserveAspectRatio="none" overflow="visible" style={{ display: 'block', width: '100%', height: '100%' }} viewBox="0 0 1979.87 686.251" fill="none">
              <g id="top">
                <rect
                  id="Rectangle 10"
                  className={`persona-top-blue-rect ${
                    isBgRevealed ? (isBgReversing ? 'blue-rect-reverse' : 'blue-rect-flyout') : ''
                  }`}
                  x="27.5176"
                  y="604.76"
                  width="1973.89"
                  height="83.0765"
                  transform="rotate(-11.2142 27.5176 604.76)"
                  fill="#001ACC"
                />
                <rect id="Rectangle 11" y="380.926" width="1959.44" height="224.891" transform="rotate(-11.21 0 380.926)" fill="white" />
                <line id="Line 1" x1="40.8274" y1="368.883" x2="858.034" y2="206.923" stroke="#FF181D" strokeWidth="8" />
                <rect id="Rectangle 12" x="11.5405" y="215.521" width="794.19" height="151.986" transform="rotate(-11.21 11.5405 215.521)" fill="#00053A" />
              </g>
            </svg>
          </div>

          {/* Phase 2: Top Text & Navigation Elements (Node 189:206) */}
          <div
            className="persona-selected-top-text"
            data-node-id="189:206"
            data-name="top-text"
          >
            {/* Atharva Ghule (Node 188:192) */}
            <div className="persona-figma-author-wrap" data-node-id="188:192">
              <div className="persona-figma-author-rotator">
                <p className="persona-figma-author-text">Atharva Ghule</p>
              </div>
            </div>

            {/* Polygon 2 (Red chevron background for RA, Node 188:196) */}
            <div className="persona-figma-polygon2-wrap" data-node-id="188:196">
              <div className="persona-figma-polygon2-rotator">
                <img src="/polygon2.svg" alt="Polygon 2" className="persona-figma-polygon2-img" />
              </div>
            </div>

            {/* Rectangle 19 (Black chevron outline for RA, Node 188:199) */}
            <div className="persona-figma-rect19-wrap" data-node-id="188:199">
              <div className="persona-figma-rect19-rotator">
                <img src="/rectangle19.svg" alt="Rectangle 19" className="persona-figma-rect19-img" />
              </div>
            </div>

            {/* Polygon 1 (Red chevron background for LA, Node 188:194) */}
            <div className="persona-figma-polygon1-wrap" data-node-id="188:194">
              <div className="persona-figma-polygon1-rotator">
                <img src="/polygon1.svg" alt="Polygon 1" className="persona-figma-polygon1-img" />
              </div>
            </div>

            {/* Rectangle 18 (Black chevron outline for LA, Node 188:197) */}
            <div className="persona-figma-rect18-wrap" data-node-id="188:197">
              <div className="persona-figma-rect18-rotator">
                <img src="/rectangle18.svg" alt="Rectangle 18" className="persona-figma-rect18-img" />
              </div>
            </div>

            {/* Frontend / Arcana Category (Node 188:201) */}
            <div className="persona-figma-frontend-wrap" data-node-id="188:201">
              <div className="persona-figma-frontend-rotator">
                <p className="persona-figma-frontend-text">{currentProject.arcana || 'Frontend'}</p>
              </div>
            </div>

            {/* STACK (Node 189:203) */}
            <div className="persona-figma-stack-wrap" data-node-id="189:203">
              <div className="persona-figma-stack-rotator">
                <p className="persona-figma-stack-text">STACK</p>
              </div>
            </div>

            {/* Project Name (shown as given instead of Project 123) */}
            <div className="persona-figma-project-wrap" data-node-id="188:200">
              <div className="persona-figma-project-rotator">
                <p className="persona-figma-project-text">{currentProject.name}</p>
              </div>
            </div>

            {/* LA Button with user's SVG/PNG (Node 189:204) */}
            <div
              className="persona-figma-la-wrap"
              data-node-id="189:204"
              onClick={() => {
                const currentIdx = activeIndex < PERSONA_PROJECTS.length ? activeIndex : 0;
                const newIdx = currentIdx > 0 ? currentIdx - 1 : PERSONA_PROJECTS.length - 1;
                triggerProjectSwitch(newIdx);
              }}
              style={{ cursor: 'pointer', pointerEvents: 'auto' }}
              title="Previous Project (ArrowLeft)"
            >
              <div className="persona-figma-la-rotator">
                <img src="/la.png" alt="LA" className="persona-figma-la-svg" />
              </div>
            </div>

            {/* RA Button with user's SVG/PNG (Node 189:205) */}
            <div
              className="persona-figma-ra-wrap"
              data-node-id="189:205"
              onClick={() => {
                const currentIdx = activeIndex < PERSONA_PROJECTS.length ? activeIndex : 0;
                const newIdx = currentIdx < PERSONA_PROJECTS.length - 1 ? currentIdx + 1 : 0;
                triggerProjectSwitch(newIdx);
              }}
              style={{ cursor: 'pointer', pointerEvents: 'auto' }}
              title="Next Project (ArrowRight)"
            >
              <div className="persona-figma-ra-rotator">
                <img src="/ra.png" alt="RA" className="persona-figma-ra-svg" />
              </div>
            </div>
          </div>

          {/* Phase 2: Bottom Blue Slanted Graphic (Rectangle 8, Node 184:158) */}
          <div className="persona-selected-bottom-rect" data-node-id="184:158">
            <div className="persona-bottom-rect-rotator">
              <div className="persona-bottom-rect-inner">
                <svg preserveAspectRatio="none" overflow="visible" style={{ display: 'block', width: '100%', height: '100%' }} viewBox="0 0 2049.78 525.987" fill="none">
                  <g id="Rectangle 8">
                    {/* Left part of Rectangle 8: flies out to bottom left in 222:115 */}
                    <path
                      className={`persona-rect8-left-part ${isBgRevealed ? (isBgReversing ? 'reverse-bottomleft' : 'flyout-bottomleft') : ''}`}
                      d="M94.1505 0L1205.77 62.1366L915.039 232.43L1088.21 525.987L517.969 494.751L0 358.855L94.1505 0Z"
                      fill="#001ACC"
                    />
                    {/* Right part of Rectangle 8: flies out to top right in 222:115 */}
                    <path
                      className={`persona-rect8-right-part ${isBgRevealed ? (isBgReversing ? 'reverse-topright' : 'flyout-topright') : ''}`}
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1982.64 367.792L2049.78 109.889L1825.46 96.0075L1982.64 367.792Z"
                      fill="#001ACC"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>

          {/* Phase 3: Diamond staying in screen (Rectangle 9, Node 184:160) */}
          <div
            className="persona-selected-diamond"
            data-node-id="184:160"
          >
            <div className="persona-diamond-rotator">
              <div className="persona-diamond-box" />
            </div>
          </div>

          {/* Phase 3: Skills container flying in from bottom (Node 188:191) */}
          <div
            className={`persona-selected-skills ${isSelectedEntering ? 'skills-entering' : ''} ${
              isBgRevealed ? (isBgReversing ? 'skills-reverse-bottomleft' : 'skills-flyout-bottomleft') : ''
            } ${projectSwitchAnim ? 'skills-project-switch' : ''}`}
            data-node-id="188:191"
          >
            {/* Rectangle 13 (Dark navy background container #00053a, Node 188:166) */}
            <div className="persona-skills-bg-box" data-node-id="188:166" />

            {/* Alternating row highlights inside container (Frame 188:190) */}
            <div className="persona-skills-alternatives" data-node-id="188:190">
              {(!isSkillSelected || selectedSkillIndex !== 0) && (
                <div className="persona-alt-row row-1-left" data-node-id="188:186" />
              )}
              {(!isSkillSelected || selectedSkillIndex !== 5) && (
                <div className="persona-alt-row row-2-right" data-node-id="188:188" />
              )}
              {(!isSkillSelected || selectedSkillIndex !== 2) && (
                <div className="persona-alt-row row-3-left" data-node-id="188:187" />
              )}
              <div className="persona-alt-row row-4-right" data-node-id="188:189" />
            </div>

            {/* Active Skill Selector highlight pill & red envelope */}
            {isSkillSelected && (
              <div
                className={`persona-skill-selector-group skill-idx-${selectedSkillIndex}`}
                key={`selector-${selectedSkillIndex}`}
              >
                {/* Red envelope sits behind white selector, slides diagonally out 4px and stays */}
                <div className="persona-skill-selector-envolope" />
                {/* White active row background */}
                <div className="persona-skill-selector-pill" />
              </div>
            )}

            {/* Skills items grid (Frame 188:185) */}
            <div className="persona-skills-items" data-node-id="188:185">
              {/* Left Column (Slots 0, 1, 2, 3) */}
              {[0, 1, 2, 3].map((idx) => {
                const skill = currentProject.skills && currentProject.skills[idx];
                const isItemActive = isSkillSelected && selectedSkillIndex === idx;
                const topOffset = 718 + idx * 49;
                const textTopOffset = 733 + idx * 49;
                return (
                  <React.Fragment key={`left-${idx}`}>
                    <div
                      className="persona-skill-icon-cell"
                      style={{ left: '70px', top: `${topOffset}px`, cursor: 'pointer' }}
                      onClick={() => {
                        setIsSkillSelected(true);
                        setSelectedSkillIndex(idx);
                      }}
                      data-node-id={idx === 0 ? '188:167' : idx === 1 ? '188:169' : idx === 2 ? '188:170' : '188:171'}
                    >
                      <img src="/skill-icon.svg" alt="icon box" className="persona-skill-icon-bg" />
                      <div className="persona-skill-icon-inner">
                        {skill && <SkillLogo logo={skill.logo} />}
                      </div>
                    </div>
                    <div
                      className={`persona-skill-label-cell ${isItemActive ? 'skill-active-label' : ''}`}
                      style={{ left: '187px', top: `${textTopOffset}px`, cursor: 'pointer' }}
                      onClick={() => {
                        setIsSkillSelected(true);
                        setSelectedSkillIndex(idx);
                      }}
                      data-node-id={idx === 0 ? '188:176' : idx === 1 ? '188:177' : idx === 2 ? '188:178' : '188:179'}
                    >
                      <p>{skill ? skill.name : `Skill ${idx + 1}`}</p>
                    </div>
                  </React.Fragment>
                );
              })}

              {/* Right Column (Slots 4, 5, 6) */}
              {[4, 5, 6].map((idx) => {
                const skill = currentProject.skills && currentProject.skills[idx];
                const rowIdx = idx - 4;
                const isItemActive = isSkillSelected && selectedSkillIndex === idx;
                const topOffset = 718 + rowIdx * 49;
                const textTopOffset = 733 + rowIdx * 49;
                return (
                  <React.Fragment key={`right-${idx}`}>
                    <div
                      className="persona-skill-icon-cell"
                      style={{ left: '527px', top: `${topOffset}px`, cursor: 'pointer' }}
                      onClick={() => {
                        setIsSkillSelected(true);
                        setSelectedSkillIndex(idx);
                      }}
                      data-node-id={idx === 4 ? '188:172' : idx === 5 ? '188:173' : '188:174'}
                    >
                      <img src="/skill-icon.svg" alt="icon box" className="persona-skill-icon-bg" />
                      <div className="persona-skill-icon-inner">
                        {skill && <SkillLogo logo={skill.logo} />}
                      </div>
                    </div>
                    <div
                      className={`persona-skill-label-cell ${isItemActive ? 'skill-active-label' : ''}`}
                      style={{ left: '644px', top: `${textTopOffset}px`, cursor: 'pointer' }}
                      onClick={() => {
                        setIsSkillSelected(true);
                        setSelectedSkillIndex(idx);
                      }}
                      data-node-id={idx === 4 ? '188:180' : idx === 5 ? '188:181' : '188:182'}
                    >
                      <p>{skill ? skill.name : `Skill ${idx + 1}`}</p>
                    </div>
                  </React.Fragment>
                );
              })}

              {/* Slot 7: ------- NONE ------ (Node 188:184) */}
              <div
                className="persona-skill-none-cell"
                style={{ left: '736px', top: '883.5px' }}
                data-node-id="188:184"
              >
                <p>------- NONE ------</p>
              </div>
            </div>
          </div>

          {/* Skill Info Card (Frame 207:136) — exact Figma absolute positioning
              In 222:115: shifted down off screen to top: 1109px */}
          {isSkillSelected && (
            <div
              className={`persona-selected-skill-info ${projectSwitchAnim ? 'info-project-switch' : ''} ${
                isBgRevealed ? (isBgReversing ? 'info-reverse-down' : 'info-flyout-down') : ''
              }`}
              data-node-id="207:136"
              key={`info-${selectedSkillIndex}-${activeIndex}`}
            >
              {/* bg: left 1005px, top 623px, width 886px, height 314px, bg #202f59 */}
              <div className="persona-skill-info-bg" data-node-id="207:120" />

              {/* skill-envolope: left 1005px, top 623px, width 294.928px, height 102.304px */}
              <div className="persona-skill-info-envelope" data-node-id="207:135">
                <img src="/skill-envolope.svg" alt="Skill Envelope" />
              </div>

              {/* skill-icon: left 1116px, top 706px, width 123px, height 33px */}
              <div className="persona-skill-info-icon-wrap" data-node-id="207:121">
                <img src="/skill-icon.svg" alt="" className="persona-skill-info-icon-bg" />
                <div className="persona-skill-info-icon-inner">
                  <SkillLogo logo={selectedSkill.logo} />
                </div>
              </div>

              {/* skill name: left 1245px, top 722.5px, translateY -50% */}
              <div className="persona-skill-info-title-wrap" data-node-id="207:122">
                <p>{selectedSkill.name}</p>
              </div>

              {/* info pill: left 1222px, top 784px, width 76px, height 24px, border-radius 10px */}
              <div className="persona-skill-info-pill-badge" data-node-id="207:126">
                <div className="persona-info-badge-border" />
                <span className="persona-info-badge-text">Info</span>
              </div>

              {/* description: left 1314px, top 823px, translateY -50%, width 416px */}
              <div className="persona-skill-info-description" data-node-id="207:127">
                <p>{selectedSkill.desc || currentProject.description}</p>
              </div>
            </div>
          )}

          {/* Background Reveal View Mode */}
          {isBgRevealed && (
            <div
              className={`persona-bg-reveal-container ${isBgReversing ? 'bg-reveal-reverse' : 'bg-reveal-enter'}`}
              key={`bg-reveal-${activeIndex}`}
            >
              {/* BACKGROUND Header (Node 222:188) */}
              <div className="persona-bg-reveal-header-wrap" data-node-id="222:188">
                <p className="persona-bg-reveal-header-text">BACKGROUND</p>
              </div>

              {/* Description List (Node 222:189: only description, positioned cleanly below title) */}
              <div className="persona-bg-reveal-list-wrap" data-node-id="222:189">
                <ul className="persona-bg-reveal-ul">
                  <li className="persona-bg-reveal-li">
                    <span>{currentProject.description}</span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      )}

    </div>
  );
}
