import React from "react";

export function Footer() {
  return (
    <footer 
      className="relative w-full py-10 bg-bg border-t border-[rgba(242,235,217,0.02)] select-none"
      style={{ backgroundColor: "var(--bg)" }}
    >
      {/* 
        Red Thread Termination Node
        Aligns with the left-[40px] vertical thread line, ending it 
        with a small vermillion dot.
      */}
      <div className="absolute left-[40px] top-0 -translate-y-1 w-[2px] h-4 bg-[var(--vermillion)] opacity-30 hidden md:block"></div>
      <div className="absolute left-[38.5px] top-3.5 w-1.5 h-1.5 rounded-full bg-[var(--vermillion)] shadow-[0_0_6px_var(--vermillion)] opacity-80 hidden md:block" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-24 flex items-center justify-between text-[10px] font-ui tracking-widest text-[var(--text-3)] uppercase font-bold">
        {/* Footnote signature */}
        <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span>© 2025 ATHARVA GHULE</span>
            <span>·</span>
            <span>@athen-g</span>
            <span>·</span>
            <span>CRAFTED WITH OBSESSION</span>
          </div>

          {/* Redesign preview link */}
          <a
            href="https://portfolio-git-redesign-athen-gs-projects.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 text-[var(--gold)] hover:underline opacity-90 transition-opacity"
            aria-label="View Persona 3 Reload inspired portfolio redesign"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D5FF] shadow-[0_0_6px_#00D5FF]" />
            <span>Persona 3 Reload Redesign Preview ↗</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
