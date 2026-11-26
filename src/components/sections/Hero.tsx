"use client";
import React from "react";
import Image from "next/image";
import InteractiveButton from "@/components/ui/InteractiveButton";

/* ─── Design tokens ──────────────────────────────────────────────────────────── */
const C = { accent: "#E09A8D", secondary: "#7FAEA6", bg: "#0B1F1D", deep: "#030C0B" };

/* ─── Hero ───────────────────────────────────────────────────────────────────── */
const Hero = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-2 relative flex flex-col items-center overflow-visible pt-2 md:pt-4">

      {/* ══════════════════════════════════════════════════════════════════════ */}
      {/*  ENHANCED GRADIENT MESH BACKGROUND                                  */}
      {/* ══════════════════════════════════════════════════════════════════════ */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 bottom-0 overflow-hidden"
        style={{ left: "calc(-50vw + 50%)", width: "100vw", zIndex: -1 }}
      >
        {/* Base — plain flat dark */}
        <div className="absolute inset-0" style={{ background: C.bg }} />

        {/* Animated geometric bands */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 680"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Band 1 — slow drift */}
          <rect
            x="-300" y="-60"
            width="1100" height="300"
            fill={C.secondary} fillOpacity="0.045"
            stroke={C.secondary} strokeOpacity="0.18" strokeWidth="0.8"
            transform="rotate(-7, 250, 200)"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="-7 250 200"
              to="-9 250 200"
              dur="8s"
              repeatCount="indefinite"
              additive="replace"
            />
          </rect>

          {/* Band 2 — opposite drift */}
          <rect
            x="620" y="440"
            width="1100" height="300"
            fill={C.accent} fillOpacity="0.035"
            stroke={C.accent} strokeOpacity="0.14" strokeWidth="0.8"
            transform="rotate(-7, 1100, 560)"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="-7 1100 560"
              to="-5 1100 560"
              dur="10s"
              repeatCount="indefinite"
              additive="replace"
            />
          </rect>

          {/* Band 3 — pulse opacity */}
          <rect
            x="-100" y="295"
            width="1640" height="60"
            fill={C.secondary} fillOpacity="0.018"
            stroke={C.secondary} strokeOpacity="0.08" strokeWidth="0.5"
            transform="rotate(-7, 720, 320)"
          >
            <animate
              attributeName="fill-opacity"
              values="0.018;0.035;0.018"
              dur="6s"
              repeatCount="indefinite"
            />
          </rect>
        </svg>

        {/* Enhanced edge vignettes */}
        <div className="absolute top-0 inset-x-0 h-40" style={{ background: `linear-gradient(to bottom, ${C.deep} 0%, transparent 100%)` }} />
        <div className="absolute bottom-0 inset-x-0 h-44" style={{ background: `linear-gradient(to top, ${C.deep} 0%, transparent 100%)` }} />
        <div className="absolute inset-y-0 left-0 w-28" style={{ background: `linear-gradient(to right, ${C.deep} 0%, transparent 100%)` }} />
        <div className="absolute inset-y-0 right-0 w-28" style={{ background: `linear-gradient(to left, ${C.deep} 0%, transparent 100%)` }} />
      </div>

      {/* ══════════════════════════════════════════════════════════════════════ */}
      {/*  ENHANCED HERO CONTENT                                              */}
      {/* ══════════════════════════════════════════════════════════════════════ */}

      {/* Desktop grid */}
      <div className="hidden lg:block relative w-full h-[500px] overflow-visible z-10">

        {/* LEFT — solid immediate appearance */}
        <div
          className="absolute left-0 top-[6%] max-w-[340px] text-left z-10"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent mb-2 block font-bold animate-pulse-subtle">
            AI AGENT &amp; SYSTEMS ARCHITECT
          </span>
          <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight font-space uppercase text-foreground leading-[1.04] mb-4">
            Building <br />
            <span className="text-accent font-black bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
              Intelligent
            </span>{" "}
            <br />
            Agents
          </h1>
          <p className="text-[13.5px] text-foreground/95 leading-relaxed font-sans max-w-[320px]">
            Engineering autonomous AI agents, WebRTC voice assistants, and full-stack SaaS platforms built to scale business operations.
          </p>
        </div>

        {/* CENTRE: portrait — solid immediate appearance */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[460px] h-[560px] pointer-events-none flex items-center justify-center overflow-visible"
        >
          <div className="w-[440px] h-[540px] flex items-center justify-center z-10 relative">
            <Image
              src="/yusra_profile1.png"
              alt="Yusra Saleem | Agentic AI Developer &amp; Systems Architect"
              width={440}
              height={540}
              priority
              quality={85}
              className="w-full h-full object-contain brightness-[0.94] contrast-[1.02] drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
            />
          </div>
        </div>

        {/* RIGHT — solid immediate appearance */}
        <div
          className="absolute right-0 bottom-[6%] max-w-[340px] text-right z-30 flex flex-col items-end"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-secondary mb-2 block font-bold animate-pulse-subtle">
            AVAILABLE • CONTRACT &amp; FULL-TIME
          </span>
          <h2 className="text-5xl lg:text-6xl font-extrabold tracking-tight font-space uppercase text-foreground leading-[1.04] mb-4">
            That Automate <br />
            <span className="text-secondary font-black bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Your
            </span>{" "}
            <br />
            Operations
          </h2>
          <div className="flex gap-4 items-center mt-3">
            <InteractiveButton
              href="#projects"
              onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}
              label="Explore Systems"
              hoverLabel="Explore Systems ↗"
              variant="primary"
            />
            <InteractiveButton
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
              label="Let's Talk"
              hoverLabel="Initiate Discussion →"
              variant="secondary"
            />
          </div>
        </div>
      </div>

      {/* Mobile & Tablet stack — instant clean rendering */}
      <div className="lg:hidden flex flex-col items-center gap-6 w-full pt-2 pb-6 z-10">
        <div className="w-[270px] relative bg-transparent overflow-hidden" style={{ height: "20rem" }}>
          <div className="absolute inset-0 rounded-full blur-2xl opacity-20" 
               style={{ background: `radial-gradient(circle at center, ${C.accent}33 0%, transparent 70%)` }} />
          <Image
            src="/yusra_profile1.png"
            alt="Yusra Saleem portrait"
            width={270}
            height={320}
            priority
            quality={85}
            className="w-full h-full object-contain brightness-[0.94] contrast-[1.02] drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
          />
        </div>
        <div className="w-full max-w-md text-center px-4 space-y-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent font-bold block">
            AVAILABLE FOR HIRE &amp; CONTRACTS
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight font-space uppercase text-foreground leading-[1.1] mb-2">
            Building Intelligent <br />
            <span className="text-accent font-black bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
              AI
            </span> Agents <br />
            <span className="text-secondary font-black">&amp; Autonomous Systems</span>
          </h1>
          <p className="text-[13.5px] text-foreground/90 leading-relaxed font-sans max-w-xs mx-auto">
            Engineering autonomous AI agents, WebRTC voice assistants, and full-stack SaaS platforms built to scale business operations.
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <InteractiveButton
            href="#projects"
            onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}
            label="Explore Systems"
            hoverLabel="Explore Systems ↗"
            variant="primary"
          />
          <InteractiveButton
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
            label="Let's Talk"
            hoverLabel="Initiate Discussion →"
            variant="secondary"
          />
        </div>
      </div>

      {/* ENHANCED Status bar */}
      <div className="w-full mt-6 p-5 border border-secondary/15 rounded-md flex flex-col md:flex-row justify-between items-start md:items-center gap-4 z-40 bg-[#0F2826]/30 backdrop-blur-md relative">
        <div className="absolute top-0 left-5 right-5 h-[1px] bg-gradient-to-r from-transparent via-secondary/10 to-transparent pointer-events-none" />
        
        {/* Left: Status indicator with pulse */}
        <div className="flex items-center gap-2.5 shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse-ring" />
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-emerald-400 font-bold">
            STATUS: AVAILABLE FOR HIRE
          </span>
        </div>
        
        {/* Middle: Animated status text */}
        <div className="h-6 flex items-center flex-grow px-0 md:px-6 overflow-hidden">
          <span className="font-mono text-[11px] text-secondary/95 tracking-wide block truncate font-bold uppercase animate-text-slide">
            SPECIALITY: AGENTIC AI ARCHITECTURE • AUTONOMOUS WORKFLOWS • WEBRTC VOICE AI • FULL-STACK SAAS
          </span>
        </div>
        
        {/* Right: Animated waveform */}
        <div className="flex items-center gap-6 shrink-0">
          <div className="flex items-center justify-center gap-1 h-5 w-24 shrink-0">
            {[18,10,16,7,14,9,18,11,13].map((h, i) => (
              <span 
                key={i} 
                style={{ 
                  height: `${h}px`,
                  animationDelay: `${i * 0.1}s`
                }}
                className={`w-[2.5px] rounded-full inline-block animate-wave ${
                  i%3===0 ? "bg-accent" : i%2===0 ? "bg-secondary" : "bg-secondary/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Hero;