"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type SandboxMode = "traditional" | "healing" | "multiagent";

const About = () => {
  const [activeMode, setActiveMode] = useState<SandboxMode>("healing");
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  // Reset hovered node when switching modes
  useEffect(() => {
    setHoveredNode(null);
  }, [activeMode]);

  const getPathStatus = (from: string, to: string) => {
    if (!hoveredNode) return "normal";
    if (hoveredNode === from || hoveredNode === to) return "highlighted";
    return "faded";
  };

  const getPathStyles = (status: "normal" | "highlighted" | "faded", colorType: "teal" | "accent" | "green") => {
    const colors = {
      teal: { stroke: "#7FAEA6", highlight: "#7FAEA6" },
      accent: { stroke: "#E09A8D", highlight: "#E09A8D" },
      green: { stroke: "#52D3A2", highlight: "#52D3A2" },
    };
    
    const activeColor = colors[colorType];
    
    if (status === "highlighted") {
      return {
        stroke: activeColor.highlight,
        strokeWidth: 2.2,
        strokeOpacity: 1.0,
      };
    } else if (status === "faded") {
      return {
        stroke: activeColor.stroke,
        strokeWidth: 1.0,
        strokeOpacity: 0.12,
      };
    } else {
      return {
        stroke: activeColor.stroke,
        strokeWidth: 1.5,
        strokeOpacity: 0.5,
      };
    }
  };

  const getPathOpacity = (from: string, to: string) => {
    if (!hoveredNode) return 0.75;
    if (hoveredNode === from || hoveredNode === to) return 1.0;
    return 0.12;
  };

  const getNodeClasses = (id: string, activeColor: "teal" | "accent" | "green") => {
    const isHovered = hoveredNode === id;
    const isAnyHovered = hoveredNode !== null;
    const isDimmed = isAnyHovered && !isHovered;
    
    let borderStyle = "border-secondary/35 font-mono";
    let glowStyle = "shadow-[inset_0_1px_2px_rgba(255,255,255,0.05)]";
    
    if (isHovered) {
      if (activeColor === "teal") {
        borderStyle = "border-secondary";
        glowStyle = "shadow-[0_0_15px_rgba(127,174,166,0.3)]";
      } else if (activeColor === "accent") {
        borderStyle = "border-accent";
        glowStyle = "shadow-[0_0_15px_rgba(224,154,141,0.3)]";
      } else {
        borderStyle = "border-[#52D3A2]";
        glowStyle = "shadow-[0_0_15px_rgba(82,211,162,0.3)]";
      }
    }
    
    return `w-full h-full rounded-lg bg-[#0F2826]/95 border flex items-center gap-2 px-2.5 py-1.5 transition-all duration-300 ${borderStyle} ${glowStyle} ${
      isDimmed ? "opacity-35" : "opacity-100"
    }`;
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-16 relative text-left font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* ==================== LEFT COLUMN: BIOGRAPHY & STACK ==================== */}
        <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-8">


          {/* Persona Header */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#E09A8D]" />
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.3em] text-[#E09A8D]">
                SaaS &amp; AGENTIC SYSTEMS
              </span>
              <div className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#E09A8D]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight uppercase font-space text-foreground leading-[1.15]">
              Yusra Saleem
            </h2>
            <p className="text-sm font-mono font-bold tracking-wider text-secondary uppercase">
              AI Automation &amp; Systems Builder
            </p>
          </div>

          {/* Design Philosophy Quote */}
          <div className="relative pl-4 border-l-2 border-accent/40 py-1">
            <p className="text-sm italic font-sans text-foreground/90 leading-relaxed">
              &ldquo;I bridge the gap between transactional SaaS stability and adaptive AI reasoning to build systems that scale without breaking.&rdquo;
            </p>
          </div>

          {/* Biography */}
          <p className="text-[13.5px] text-foreground/90 leading-relaxed font-sans font-normal">
            I build software that automates business operations and solves real problems. My focus is engineering <span className="text-accent font-semibold">scalable SaaS platforms</span>, clean web applications, and <span className="text-secondary font-bold">autonomous AI agents</span> using the OpenAI Agents SDK. Instead of fragile prototypes or simple API wrappers, I write clean code and self-correcting workflows designed to handle exceptions and run on autopilot. If you want to replace manual tasks with <span className="text-foreground font-semibold">stable systems that scale</span>, I build the solution.
          </p>

          {/* ── Stat Chips: Experience + Availability ── */}
          <div className="flex flex-wrap gap-4 pt-5 border-t border-white/[0.06]">

            {/* 2+ Years Experience Chip */}
            <div className="relative group flex items-center gap-3 px-5 py-3 bg-[#0B1F1D]/90 border border-secondary/35 rounded-[6px] backdrop-blur-sm transition-all duration-300 hover:border-secondary/70">
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[6px]"
                style={{ background: "linear-gradient(135deg, rgba(127,174,166,0.09) 0%, transparent 70%)" }} />

              {/* Icon */}
              <div className="w-7 h-7 bg-secondary/10 border border-secondary/20 rounded-[4px] flex items-center justify-center shrink-0">
                <svg className="w-3.5 h-3.5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
                </svg>
              </div>

              {/* Text */}
              <div className="leading-none relative z-10">
                <span className="text-[9px] font-mono uppercase tracking-[0.22em] text-secondary/90 block font-bold mb-0.5">Experience</span>
                <span className="text-[13px] font-space font-extrabold text-foreground tracking-tight">2+ Years</span>
              </div>
            </div>

            {/* Remote Availability Chip */}
            <div className="relative group flex items-center gap-3 px-5 py-3 bg-[#0B1F1D]/90 border border-accent/35 rounded-[6px] backdrop-blur-sm transition-all duration-300 hover:border-accent/70">
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[6px]"
                style={{ background: "linear-gradient(135deg, rgba(224,154,141,0.09) 0%, transparent 70%)" }} />

              {/* Live pulse indicator */}
              <div className="relative w-7 h-7 bg-accent/10 border border-accent/20 rounded-[4px] flex items-center justify-center shrink-0">
                <span className="absolute w-2 h-2 rounded-full bg-accent/40 animate-ping" />
                <span className="relative w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_rgba(224,154,141,0.8)]" />
              </div>

              {/* Text */}
              <div className="leading-none relative z-10">
                <span className="text-[9px] font-mono uppercase tracking-[0.22em] text-accent/90 block font-bold mb-0.5">Availability</span>
                <span className="text-[13px] font-space font-extrabold text-foreground tracking-tight">Remote</span>
              </div>
            </div>

          </div>

        </div>

        {/* ==================== RIGHT COLUMN: INTERACTIVE AGENT SANDBOX ==================== */}
        <div className="lg:col-span-7 space-y-8 relative pl-2 lg:pl-6">
          
          {/* Header */}
          <div className="space-y-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-secondary block font-bold">
              SYSTEM ORCHESTRATION
            </span>
            <h3 className="text-xl font-bold uppercase font-space text-foreground">
              Autonomous Workflows
            </h3>
            <p className="text-xs text-foreground/90 leading-relaxed font-normal">
              Explore how static SaaS infrastructure, self-healing AI loops, and coordinated multi-agent teams process operations and manage exceptions on autopilot.
            </p>
          </div>

          {/* Mode Switcher Pill */}
          <div className="flex flex-nowrap border border-secondary/15 rounded-full p-1 bg-[#0F2826]/30 backdrop-blur-md w-full max-w-md relative z-10 gap-0.5 sm:gap-1 overflow-x-auto no-scrollbar">
            <button
              onClick={() => setActiveMode("traditional")}
              className={`flex-1 py-1.5 px-2 sm:px-3 rounded-full text-[9px] sm:text-[10.5px] font-mono tracking-wider uppercase transition-all duration-300 relative cursor-pointer text-center shrink-0 ${
                activeMode === "traditional" ? "text-[#0B1F1D] font-extrabold" : "text-foreground/85 hover:text-foreground font-bold"
              }`}
            >
              {activeMode === "traditional" && (
                <motion.div
                  layoutId="sandboxToggle"
                  className="absolute inset-0 bg-secondary rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              Full-Stack SaaS
            </button>
            <button
              onClick={() => setActiveMode("healing")}
              className={`flex-1 py-1.5 px-2 sm:px-3 rounded-full text-[9px] sm:text-[10.5px] font-mono tracking-wider uppercase transition-all duration-300 relative cursor-pointer text-center shrink-0 ${
                activeMode === "healing" ? "text-[#0B1F1D] font-extrabold" : "text-foreground/85 hover:text-foreground font-bold"
              }`}
            >
              {activeMode === "healing" && (
                <motion.div
                  layoutId="sandboxToggle"
                  className="absolute inset-0 bg-accent rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              Self-Healing AI
            </button>
            <button
              onClick={() => setActiveMode("multiagent")}
              className={`flex-1 py-1.5 px-2 sm:px-3 rounded-full text-[9px] sm:text-[10.5px] font-mono tracking-wider uppercase transition-all duration-300 relative cursor-pointer text-center shrink-0 ${
                activeMode === "multiagent" ? "text-[#0B1F1D] font-extrabold" : "text-foreground/85 hover:text-foreground font-bold"
              }`}
            >
              {activeMode === "multiagent" && (
                <motion.div
                  layoutId="sandboxToggle"
                  className="absolute inset-0 bg-[#52D3A2] rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              Multi-Agent Teams
            </button>
          </div>

          {/* ==================== CANVAS SIMULATOR (UNIFIED VECTOR SPACE) ==================== */}
          <div className="w-full h-[280px] md:h-[340px] bg-[#0F2826]/30 border border-secondary/15 rounded-xl relative overflow-hidden flex items-center justify-center p-4 transform-gpu">
            
            {/* Top-Right Interactive Hint Badge */}
            <div className="absolute top-2.5 right-3 z-30 flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#071816]/90 border border-secondary/20 backdrop-blur-md pointer-events-none">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="font-mono text-[8.5px] sm:text-[9px] uppercase tracking-widest text-secondary font-bold">
                HOVER NODES TO TRACE FLOW
              </span>
            </div>
            
            {/* Grid background inside sandbox */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-10"
              style={{
                backgroundImage: "radial-gradient(circle, #7FAEA6 1px, transparent 1px)",
                backgroundSize: "20px 20px"
              }}
            />

            {/* Glowing radial gradient backdrop */}
            <div 
              className={`absolute w-44 h-44 blur-3xl opacity-20 pointer-events-none transition-colors duration-700 ${
                activeMode === "traditional" ? "bg-accent" : activeMode === "healing" ? "bg-secondary" : "bg-[#52D3A2]"
              }`}
            />

            {/* SVG drawing containing ALL elements (paths, text labels, and glass nodes) */}
            <svg 
              className="w-full h-full relative z-10 overflow-visible" 
              viewBox="0 0 500 250" 
              preserveAspectRatio="xMidYMid meet"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <marker id="arrow-teal" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#7FAEA6" />
                </marker>
                <marker id="arrow-accent" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#E09A8D" />
                </marker>
                <marker id="arrow-green" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#52D3A2" />
                </marker>
              </defs>

              <AnimatePresence mode="wait">
                
                {/* MODE 1: STANDARD SOFTWARE (FULL-STACK SAAS BILLING WORKFLOW) */}
                {activeMode === "traditional" && (
                  <motion.g
                    key="traditional"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Architectural Flow Lines */}
                    {/* 1. Client -> FastAPI API (REST) */}
                    <line 
                      x1="180" y1="50" x2="314" y2="50" 
                      markerEnd="url(#arrow-teal)"
                      style={getPathStyles(getPathStatus("client", "fastapi"), "teal")}
                      className="transition-all duration-300"
                    />
                    
                    {/* 2. Client -> Stripe (Checkout Redirect) */}
                    <line 
                      x1="120" y1="70" x2="120" y2="144" 
                      markerEnd="url(#arrow-accent)"
                      style={getPathStyles(getPathStatus("client", "stripe"), "accent")}
                      className="transition-all duration-300"
                    />
                    
                    {/* 3. Stripe -> FastAPI (Async Webhook notification) */}
                    <line 
                      x1="180" y1="160" x2="314" y2="62" 
                      markerEnd="url(#arrow-green)"
                      style={getPathStyles(getPathStatus("stripe", "fastapi"), "green")}
                      className="transition-all duration-300"
                    />
                    
                    {/* 4. FastAPI -> Postgres (SQL Transaction write) */}
                    <line 
                      x1="380" y1="70" x2="380" y2="144" 
                      markerEnd="url(#arrow-teal)"
                      style={getPathStyles(getPathStatus("fastapi", "postgres"), "teal")}
                      className="transition-all duration-300"
                    />
                    
                    {/* Pathway Labels with Background Cut-outs */}
                    {/* Client -> FastAPI REST */}
                    <g opacity={getPathOpacity("client", "fastapi")} className="transition-opacity duration-300">
                      <rect x="233" y="44" width="34" height="12" rx="2" fill="#0D2220" />
                      <text x="250" y="53" textAnchor="middle" className="text-[9px] font-mono fill-secondary font-bold uppercase tracking-wider">REST</text>
                    </g>
                    
                    {/* Client -> Stripe Checkout */}
                    <g opacity={getPathOpacity("client", "stripe")} className="transition-opacity duration-300">
                      <rect x="91" y="99" width="58" height="12" rx="2" fill="#0D2220" />
                      <text x="120" y="108" textAnchor="middle" className="text-[9px] font-mono fill-accent font-bold uppercase tracking-wider">1. Checkout</text>
                    </g>
                    
                    {/* Stripe -> FastAPI Webhook */}
                    <g opacity={getPathOpacity("stripe", "fastapi")} className="transition-opacity duration-300">
                      <rect x="221" y="99" width="58" height="12" rx="2" fill="#0D2220" />
                      <text x="250" y="108" textAnchor="middle" className="text-[9px] font-mono fill-[#52D3A2] font-bold uppercase tracking-wider">2. Webhook</text>
                    </g>
                    
                    {/* FastAPI -> Postgres Commit */}
                    <g opacity={getPathOpacity("fastapi", "postgres")} className="transition-opacity duration-300">
                      <rect x="351" y="99" width="58" height="12" rx="2" fill="#0D2220" />
                      <text x="380" y="108" textAnchor="middle" className="text-[9px] font-mono fill-secondary font-bold uppercase tracking-wider">3. Commit</text>
                    </g>
 
                    {/* Glowing Pulses along active pathways */}
                    {getPathStatus("client", "fastapi") !== "faded" && (
                      <circle r={getPathStatus("client", "fastapi") === "highlighted" ? 3.5 : 3} fill="#7FAEA6">
                        <animateMotion dur={getPathStatus("client", "fastapi") === "highlighted" ? "1.4s" : "2.4s"} repeatCount="indefinite" path="M 180 50 L 314 50" />
                      </circle>
                    )}
                    {getPathStatus("client", "stripe") !== "faded" && (
                      <circle r={getPathStatus("client", "stripe") === "highlighted" ? 3.5 : 3} fill="#E09A8D">
                        <animateMotion dur={getPathStatus("client", "stripe") === "highlighted" ? "1.4s" : "2.4s"} repeatCount="indefinite" path="M 120 70 L 120 144" />
                      </circle>
                    )}
                    {getPathStatus("stripe", "fastapi") !== "faded" && (
                      <circle r={getPathStatus("stripe", "fastapi") === "highlighted" ? 3.5 : 3} fill="#52D3A2">
                        <animateMotion dur={getPathStatus("stripe", "fastapi") === "highlighted" ? "1.4s" : "2.4s"} repeatCount="indefinite" path="M 180 160 L 314 62" />
                      </circle>
                    )}
                    {getPathStatus("fastapi", "postgres") !== "faded" && (
                      <circle r={getPathStatus("fastapi", "postgres") === "highlighted" ? 3.5 : 3} fill="#7FAEA6">
                        <animateMotion dur={getPathStatus("fastapi", "postgres") === "highlighted" ? "1.4s" : "2.4s"} repeatCount="indefinite" path="M 380 70 L 380 144" />
                      </circle>
                    )}
 
                    {/* Node 1: Next.js Client */}
                    <foreignObject 
                      x="60" y="30" width="120" height="40"
                      onMouseEnter={() => setHoveredNode("client")}
                      onMouseLeave={() => setHoveredNode(null)}
                      className="cursor-pointer"
                    >
                      <div className={getNodeClasses("client", "teal")}>
                        <svg className="w-3.5 h-3.5 text-secondary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.003 9.003 0 008.354-5.646 9.003 9.003 0 00-8.354.004M12 3a9 9 0 00-9 9 9 9 0 009 9M12 3v18m-9-9h18" />
                        </svg>
                        <div className="text-left leading-none">
                          <span className="text-[8px] font-mono text-secondary/70 uppercase block font-medium">UI Client</span>
                          <span className="text-[10px] font-mono font-extrabold text-foreground tracking-wide uppercase">NEXT.JS WEB</span>
                        </div>
                      </div>
                    </foreignObject>
 
                    {/* Node 2: FastAPI Server */}
                    <foreignObject 
                      x="320" y="30" width="120" height="40"
                      onMouseEnter={() => setHoveredNode("fastapi")}
                      onMouseLeave={() => setHoveredNode(null)}
                      className="cursor-pointer"
                    >
                      <div className={getNodeClasses("fastapi", "teal")}>
                        <svg className="w-3.5 h-3.5 text-secondary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3V7.5a3 3 0 013-3h13.5a3 3 0 013 3v3.75a3 3 0 01-3 3m-13.5 0v3.75a3 3 0 003 3h13.5a3 3 0 003-3v-3.75m-16.5-3H3m18 0h3M12 4.5v15m0-15a3 3 0 01-3 3m3-3a3 3 0 003 3" />
                        </svg>
                        <div className="text-left leading-none">
                          <span className="text-[8px] font-mono text-secondary/70 uppercase block font-medium">API Gateway</span>
                          <span className="text-[10px] font-mono font-extrabold text-foreground tracking-wide uppercase">FASTAPI ROUTE</span>
                        </div>
                      </div>
                    </foreignObject>
 
                    {/* Node 3: Stripe Billing (Replacing Redis Session Store) */}
                    <foreignObject 
                      x="60" y="150" width="120" height="40"
                      onMouseEnter={() => setHoveredNode("stripe")}
                      onMouseLeave={() => setHoveredNode(null)}
                      className="cursor-pointer"
                    >
                      <div className={getNodeClasses("stripe", "accent")}>
                        <svg className="w-3.5 h-3.5 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-5.625-12h17.25c.621 0 1.125.504 1.125 1.125v13.5c0 .621-.504 1.125-1.125 1.125H3.375a1.125 1.125 0 01-1.125-1.125V3.75c0-.621.504-1.125 1.125-1.125z" />
                        </svg>
                        <div className="text-left leading-none">
                          <span className="text-[8px] font-mono text-accent/85 uppercase block font-medium">Billing Service</span>
                          <span className="text-[10px] font-mono font-extrabold text-foreground tracking-wide uppercase">STRIPE API</span>
                        </div>
                      </div>
                    </foreignObject>
 
                    {/* Node 4: PostgreSQL Database */}
                    <foreignObject 
                      x="320" y="150" width="120" height="40"
                      onMouseEnter={() => setHoveredNode("postgres")}
                      onMouseLeave={() => setHoveredNode(null)}
                      className="cursor-pointer"
                    >
                      <div className={getNodeClasses("postgres", "teal")}>
                        <svg className="w-3.5 h-3.5 text-secondary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694 4.125-8.25 4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125M20.25 13.875v3.75m-16.5-3.75v3.75" />
                        </svg>
                        <div className="text-left leading-none">
                          <span className="text-[8px] font-mono text-secondary/70 uppercase block font-medium">Relational DB</span>
                          <span className="text-[10px] font-mono font-extrabold text-foreground tracking-wide uppercase">POSTGRES SQL</span>
                        </div>
                      </div>
                    </foreignObject>
                  </motion.g>
                )}

                {/* MODE 2: SELF-HEALING AI (EXCEPTION GUARDRAIL LOOP) */}
                {activeMode === "healing" && (
                  <motion.g
                    key="healing"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Input to Exception */}
                    <line 
                      x1="140" y1="125" x2="183" y2="65" 
                      markerEnd="url(#arrow-teal)" 
                      style={getPathStyles(getPathStatus("trigger", "exception"), "teal")}
                      className="transition-all duration-300"
                    />
                    
                    {/* Loops (Down and Up) */}
                    <line 
                      x1="255" y1="75" x2="255" y2="167" 
                      markerEnd="url(#arrow-accent)" 
                      style={getPathStyles(getPathStatus("exception", "healer"), "accent")}
                      className="transition-all duration-300"
                    />
                    <line 
                      x1="245" y1="175" x2="245" y2="83" 
                      markerEnd="url(#arrow-green)" 
                      style={getPathStyles(getPathStatus("healer", "exception"), "green")}
                      className="transition-all duration-300"
                    />
                    
                    {/* Exception to Success */}
                    <line 
                      x1="310" y1="55" x2="353" y2="115" 
                      markerEnd="url(#arrow-green)" 
                      style={getPathStyles(getPathStatus("exception", "success"), "green")}
                      className="transition-all duration-300"
                    />

                    {/* Visual Flow Labels with Background Cut-outs */}
                    <g opacity={getPathOpacity("trigger", "exception")} className="transition-opacity duration-300">
                      <rect x="127" y="89" width="68" height="12" rx="2" fill="#0D2220" />
                      <text x="161" y="98" textAnchor="middle" className="text-[10px] font-mono fill-secondary/80 font-bold uppercase tracking-wider">Ingest Data</text>
                    </g>
                    
                    {/* Side-by-side loop labels */}
                    <text 
                      x="266" y="125" textAnchor="start" 
                      opacity={getPathOpacity("exception", "healer")}
                      className="text-[10px] font-mono fill-accent font-bold uppercase tracking-wider transition-opacity duration-300"
                    >
                      Query Fails
                    </text>
                    <text 
                      x="234" y="125" textAnchor="end" 
                      opacity={getPathOpacity("healer", "exception")}
                      className="text-[10px] font-mono fill-[#52D3A2] font-bold uppercase tracking-wider transition-opacity duration-300"
                    >
                      Auto-Repair
                    </text>
                    
                    <g opacity={getPathOpacity("exception", "success")} className="transition-opacity duration-300">
                      <rect x="302" y="79" width="60" height="12" rx="2" fill="#0D2220" />
                      <text x="332" y="88" textAnchor="middle" className="text-[10px] font-mono fill-[#52D3A2] font-bold uppercase tracking-wider">Save Data</text>
                    </g>

                    {/* SVG Pulses traveling along paths */}
                    {getPathStatus("trigger", "exception") !== "faded" && (
                      <circle r={getPathStatus("trigger", "exception") === "highlighted" ? 4.0 : 3.5} fill="#7FAEA6">
                        <animateMotion dur={getPathStatus("trigger", "exception") === "highlighted" ? "1.4s" : "2.4s"} repeatCount="indefinite" path="M 140 125 L 183 65" />
                      </circle>
                    )}
                    {getPathStatus("exception", "healer") !== "faded" && (
                      <circle r={getPathStatus("exception", "healer") === "highlighted" ? 4.0 : 3.5} fill="#E09A8D">
                        <animateMotion dur={getPathStatus("exception", "healer") === "highlighted" ? "1.2s" : "2.0s"} repeatCount="indefinite" path="M 255 75 L 255 167" />
                      </circle>
                    )}
                    {getPathStatus("healer", "exception") !== "faded" && (
                      <circle r={getPathStatus("healer", "exception") === "highlighted" ? 4.0 : 3.5} fill="#52D3A2">
                        <animateMotion dur={getPathStatus("healer", "exception") === "highlighted" ? "1.2s" : "2.0s"} repeatCount="indefinite" path="M 245 175 L 245 83" />
                      </circle>
                    )}
                    {getPathStatus("exception", "success") !== "faded" && (
                      <circle r={getPathStatus("exception", "success") === "highlighted" ? 4.0 : 3.5} fill="#52D3A2">
                        <animateMotion dur={getPathStatus("exception", "success") === "highlighted" ? "1.4s" : "2.4s"} repeatCount="indefinite" path="M 310 55 L 353 115" />
                      </circle>
                    )}

                    {/* Node 1: Input Trigger */}
                    <foreignObject 
                      x="20" y="105" width="120" height="40"
                      onMouseEnter={() => setHoveredNode("trigger")}
                      onMouseLeave={() => setHoveredNode(null)}
                      className="cursor-pointer"
                    >
                      <div className={getNodeClasses("trigger", "teal")}>
                        <svg className="w-3.5 h-3.5 text-secondary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>
                        <div className="text-left leading-none">
                          <span className="text-[9px] font-mono text-secondary/70 uppercase block font-medium">Trigger</span>
                          <span className="text-[11px] font-mono font-extrabold text-foreground tracking-wide uppercase">DIRTY DATA</span>
                        </div>
                      </div>
                    </foreignObject>

                    {/* Node 2: Exception Engine */}
                    <foreignObject 
                      x="190" y="35" width="120" height="40"
                      onMouseEnter={() => setHoveredNode("exception")}
                      onMouseLeave={() => setHoveredNode(null)}
                      className="cursor-pointer"
                    >
                      <div className={getNodeClasses("exception", "accent")}>
                        <svg className="w-3.5 h-3.5 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z" />
                        </svg>
                        <div className="text-left leading-none">
                          <span className="text-[9px] font-mono text-accent/80 uppercase block font-medium">Parser</span>
                          <span className="text-[11px] font-mono font-extrabold text-foreground tracking-wide uppercase">EXCEPTION</span>
                        </div>
                      </div>
                    </foreignObject>

                    {/* Node 3: LLM Self-Reflection */}
                    <foreignObject 
                      x="190" y="175" width="120" height="40"
                      onMouseEnter={() => setHoveredNode("healer")}
                      onMouseLeave={() => setHoveredNode(null)}
                      className="cursor-pointer"
                    >
                      <div className={getNodeClasses("healer", "green")}>
                        <svg className="w-3.5 h-3.5 text-[#52D3A2] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21m0 0l-1.813-5.096m1.813 5.096h12.5M14.5 12h.007v.007H14.5V12zm0 3.5h.007v.007H14.5v-.007zm-7.5-6h.007v.007H7V9.5zm0 3.5h.007v.007H7V13zm0 3.5h.007v.007H7v-.007zm14.5-7h.007v.007H21.5V9.5zm0 3.5h.007v.007H21.5V13zm-3.5-3.5h.007v.007h-.007V9.5zm0 3.5h.007v.007h-.007V13z" />
                        </svg>
                        <div className="text-left leading-none">
                          <span className="text-[9px] font-mono text-[#52D3A2]/80 uppercase block font-medium">Reflector</span>
                          <span className="text-[11px] font-mono font-extrabold text-foreground tracking-wide uppercase">AI HEALER</span>
                        </div>
                      </div>
                    </foreignObject>

                    {/* Node 4: Dynamic Success */}
                    <foreignObject 
                      x="360" y="105" width="120" height="40"
                      onMouseEnter={() => setHoveredNode("success")}
                      onMouseLeave={() => setHoveredNode(null)}
                      className="cursor-pointer"
                    >
                      <div className={getNodeClasses("success", "green")}>
                        <svg className="w-3.5 h-3.5 text-[#52D3A2] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                        </svg>
                        <div className="text-left leading-none">
                          <span className="text-[9px] font-mono text-[#52D3A2]/80 uppercase block font-medium">Out</span>
                          <span className="text-[11px] font-mono font-extrabold text-[#52D3A2] tracking-wide uppercase">DATA SYNCED</span>
                        </div>
                      </div>
                    </foreignObject>
                  </motion.g>
                )}

                {/* MODE 3: AI AGENT TEAMS (SPACIOUS HORIZONTAL BRANCHING ARCHITECTURE) */}
                {activeMode === "multiagent" && (
                  <motion.g
                    key="multiagent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Orchestrator paths to sub-agents (Color Coordinated & Spacious) */}
                    <line 
                      x1="150" y1="110" x2="204" y2="60" 
                      markerEnd="url(#arrow-teal)" 
                      style={getPathStyles(getPathStatus("supervisor", "researcher"), "teal")}
                      className="transition-all duration-300"
                    />
                    <line 
                      x1="150" y1="125" x2="342" y2="125" 
                      markerEnd="url(#arrow-accent)" 
                      style={getPathStyles(getPathStatus("supervisor", "coder"), "accent")}
                      className="transition-all duration-300"
                    />
                    <line 
                      x1="150" y1="140" x2="204" y2="190" 
                      markerEnd="url(#arrow-green)" 
                      style={getPathStyles(getPathStatus("supervisor", "verifier"), "green")}
                      className="transition-all duration-300"
                    />

                    {/* Visual Task Labels with Background Cut-outs (Color Coordinated & Spacious, Scaled up to 10px) */}
                    <g opacity={getPathOpacity("supervisor", "researcher")} className="transition-opacity duration-300">
                      <rect x="142" y="79" width="70" height="12" rx="2" fill="#0D2220" />
                      <text x="177" y="88" textAnchor="middle" className="text-[10px] font-mono fill-secondary/90 font-bold uppercase tracking-wider">1. Research</text>
                    </g>
                    <g opacity={getPathOpacity("supervisor", "coder")} className="transition-opacity duration-300">
                      <rect x="206" y="119" width="80" height="12" rx="2" fill="#0D2220" />
                      <text x="246" y="128" textAnchor="middle" className="text-[10px] font-mono fill-accent font-bold uppercase tracking-wider">2. Write Code</text>
                    </g>
                    <g opacity={getPathOpacity("supervisor", "verifier")} className="transition-opacity duration-300">
                      <rect x="142" y="159" width="70" height="12" rx="2" fill="#0D2220" />
                      <text x="177" y="168" textAnchor="middle" className="text-[10px] font-mono fill-[#52D3A2] font-bold uppercase tracking-wider">3. Validate</text>
                    </g>

                    {/* Data Pulses traveling along thinned paths */}
                    {getPathStatus("supervisor", "researcher") !== "faded" && (
                      <circle r={getPathStatus("supervisor", "researcher") === "highlighted" ? 4.0 : 3.5} fill="#7FAEA6">
                        <animateMotion dur={getPathStatus("supervisor", "researcher") === "highlighted" ? "1.2s" : "2s"} repeatCount="indefinite" path="M 150 110 L 204 60 L 150 110" />
                      </circle>
                    )}
                    {getPathStatus("supervisor", "coder") !== "faded" && (
                      <circle r={getPathStatus("supervisor", "coder") === "highlighted" ? 4.0 : 3.5} fill="#E09A8D">
                        <animateMotion dur={getPathStatus("supervisor", "coder") === "highlighted" ? "1.0s" : "1.6s"} repeatCount="indefinite" path="M 150 125 L 342 125 L 150 125" />
                      </circle>
                    )}
                    {getPathStatus("supervisor", "verifier") !== "faded" && (
                      <circle r={getPathStatus("supervisor", "verifier") === "highlighted" ? 4.0 : 3.5} fill="#52D3A2">
                        <animateMotion dur={getPathStatus("supervisor", "verifier") === "highlighted" ? "1.4s" : "2.4s"} repeatCount="indefinite" path="M 150 140 L 204 190 L 150 140" />
                      </circle>
                    )}

                    {/* Hub Node: Supervisor (Left Center - Emerald Success Border & Glow) */}
                    <foreignObject 
                      x="30" y="105" width="120" height="40"
                      onMouseEnter={() => setHoveredNode("supervisor")}
                      onMouseLeave={() => setHoveredNode(null)}
                      className="cursor-pointer"
                    >
                      <div className={getNodeClasses("supervisor", "green")}>
                        <svg className="w-3.5 h-3.5 text-[#52D3A2] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94-3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                        </svg>
                        <div className="text-left leading-none">
                          <span className="text-[9px] font-mono text-[#52D3A2]/80 uppercase block font-medium">Supervisor</span>
                          <span className="text-[11px] font-mono font-extrabold text-foreground tracking-wide uppercase">ORCHESTRATOR</span>
                        </div>
                      </div>
                    </foreignObject>

                    {/* Sub Node A: Web Researcher (Top Right - Teal Border) */}
                    <foreignObject 
                      x="210" y="35" width="120" height="40"
                      onMouseEnter={() => setHoveredNode("researcher")}
                      onMouseLeave={() => setHoveredNode(null)}
                      className="cursor-pointer"
                    >
                      <div className={getNodeClasses("researcher", "teal")}>
                        <svg className="w-3.5 h-3.5 text-secondary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                        <div className="text-left leading-none">
                          <span className="text-[9px] font-mono text-secondary/70 uppercase block font-medium">Worker 1</span>
                          <span className="text-[11px] font-mono font-extrabold text-foreground tracking-wide uppercase">RESEARCHER</span>
                        </div>
                      </div>
                    </foreignObject>

                    {/* Sub Node B: Coder/Writer (Middle Right - Rose Gold Border) */}
                    <foreignObject 
                      x="350" y="105" width="120" height="40"
                      onMouseEnter={() => setHoveredNode("coder")}
                      onMouseLeave={() => setHoveredNode(null)}
                      className="cursor-pointer"
                    >
                      <div className={getNodeClasses("coder", "accent")}>
                        <svg className="w-3.5 h-3.5 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                        </svg>
                        <div className="text-left leading-none">
                          <span className="text-[9px] font-mono text-accent/80 uppercase block font-medium">Worker 2</span>
                          <span className="text-[11px] font-mono font-extrabold text-foreground tracking-wide uppercase">CODER AGENT</span>
                        </div>
                      </div>
                    </foreignObject>

                    {/* Sub Node C: Unit Verifier (Bottom Right - Emerald Green Border) */}
                    <foreignObject 
                      x="210" y="175" width="120" height="40"
                      onMouseEnter={() => setHoveredNode("verifier")}
                      onMouseLeave={() => setHoveredNode(null)}
                      className="cursor-pointer"
                    >
                      <div className={getNodeClasses("verifier", "green")}>
                        <svg className="w-3.5 h-3.5 text-[#52D3A2] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z" />
                        </svg>
                        <div className="text-left leading-none">
                          <span className="text-[9px] font-mono text-[#52D3A2]/80 uppercase block font-medium">Critic</span>
                          <span className="text-[11px] font-mono font-extrabold text-foreground tracking-wide uppercase">VERIFIER</span>
                        </div>
                      </div>
                    </foreignObject>
                  </motion.g>
                )}

              </AnimatePresence>

            </svg>

          </div>

          {/* ==================== OUTCOME DESCRIPTION BOX (MODERN LUXURY PROSE) ==================== */}
          <div className="relative pl-6 text-left min-h-[105px] flex flex-col justify-center overflow-hidden py-2 bg-gradient-to-r from-accent/[0.02] via-accent/[0.005] to-transparent">
            {/* Minimalist vertical luxury accent line with glowing indicator dot */}
            <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-accent/60 via-accent/15 to-transparent" />
            <div className="absolute left-[-2px] top-[14px] w-[5px] h-[5px] rounded-full bg-accent shadow-[0_0_10px_#E09A8D] animate-pulse" />
            
            <AnimatePresence mode="wait">
              {activeMode === "traditional" && (
                <motion.div
                  key="desc-traditional"
                  initial={{ opacity: 0, x: -10, filter: "blur(4px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, x: 10, filter: "blur(4px)" }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-2 font-sans relative z-10"
                >
                  {/* Floating index background (moved to the left) */}
                  <span className="text-[75px] font-space font-black text-accent/[0.03] absolute right-20 -bottom-6 select-none pointer-events-none tracking-tighter">
                    01
                  </span>
                  
                  <div className="flex items-center gap-2">
                    <svg className="w-2.5 h-2.5 text-accent/70 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l2.4 7.2 7.2 2.4-7.2 2.4-2.4 7.2-2.4-7.2-7.2-2.4 7.2-2.4z" />
                    </svg>
                    <span className="text-[9.5px] font-mono uppercase tracking-[0.32em] text-accent block font-extrabold">
                      SaaS Engineering
                    </span>
                  </div>
                  <p className="text-[13px] text-foreground/80 leading-[1.7] font-light pr-8">
                    <span className="text-foreground font-semibold border-b border-accent/25 pb-[1px]">Symmetric service integration</span> powering secure enterprise-grade systems. Next.js forms the user interface, FastAPI coordinates core business logic, and PostgreSQL handles transactions.
                  </p>
                </motion.div>
              )}

              {activeMode === "healing" && (
                <motion.div
                  key="desc-healing"
                  initial={{ opacity: 0, x: -10, filter: "blur(4px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, x: 10, filter: "blur(4px)" }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-2 font-sans relative z-10"
                >
                  {/* Floating index background (moved to the left) */}
                  <span className="text-[75px] font-space font-black text-accent/[0.03] absolute right-20 -bottom-6 select-none pointer-events-none tracking-tighter">
                    02
                  </span>

                  <div className="flex items-center gap-2">
                    <svg className="w-2.5 h-2.5 text-accent/70 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l2.4 7.2 7.2 2.4-7.2 2.4-2.4 7.2-2.4-7.2-7.2-2.4 7.2-2.4z" />
                    </svg>
                    <span className="text-[9.5px] font-mono uppercase tracking-[0.32em] text-accent block font-extrabold">
                      Resilient Automation
                    </span>
                  </div>
                  <p className="text-[13px] text-foreground/80 leading-[1.7] font-light pr-8">
                    <span className="text-accent font-semibold border-b border-accent/25 pb-[1px]">Intelligent exception interceptors</span> that shield applications from raw data and API shifts. By automatically routing stack traces to self-reflection agents, systems <span className="text-foreground font-semibold border-b border-accent/25 pb-[1px]">self-correct and recover</span> without operational downtime.
                  </p>
                </motion.div>
              )}

              {activeMode === "multiagent" && (
                <motion.div
                  key="desc-multiagent"
                  initial={{ opacity: 0, x: -10, filter: "blur(4px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, x: 10, filter: "blur(4px)" }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-2 font-sans relative z-10"
                >
                  {/* Floating index background (moved to the left) */}
                  <span className="text-[75px] font-space font-black text-[#52D3A2]/[0.03] absolute right-20 -bottom-6 select-none pointer-events-none tracking-tighter">
                    03
                  </span>

                  <div className="flex items-center gap-2">
                    <svg className="w-2.5 h-2.5 text-[#52D3A2]/70 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l2.4 7.2 7.2 2.4-7.2 2.4-2.4 7.2-2.4-7.2-7.2-2.4 7.2-2.4z" />
                    </svg>
                    <span className="text-[9.5px] font-mono uppercase tracking-[0.32em] text-[#52D3A2] block font-extrabold">
                      Coordinated Agents
                    </span>
                  </div>
                  <p className="text-[13px] text-foreground/80 leading-[1.7] font-light pr-8">
                    <span className="text-[#52D3A2] font-semibold border-b border-[#52D3A2]/25 pb-[1px]">Parallel multi-agent networks</span> directed by a coordinator supervisor. Specialized agents run research, generation, and validation queries concurrently to <span className="text-foreground font-semibold border-b border-white/20 pb-[1px]">cross-verify and deliver</span> production-grade results.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </div>
  );
};

export default About;
