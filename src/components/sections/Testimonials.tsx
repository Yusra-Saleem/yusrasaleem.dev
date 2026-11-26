"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Play, Pause, Sparkles, CheckCircle2, RotateCw } from "lucide-react";

interface Testimonial {
  id: string;
  quoteLead: string;
  quoteHighlight: string;
  quoteTail: string;
  author: string;
  role: string;
  company: string;
  metric: string;
  contractTag: string;
}

const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "01",
    quoteLead: "Collaborating with Yusra is a breath of fresh air in the AI systems world. Her commitment to excellence and her innovative approach to ",
    quoteHighlight: "autonomous multi-agent pipelines",
    quoteTail: " set her apart. She delivered a fault-tolerant dispatch architecture that eliminated all manual ticketing with zero dropped calls.",
    author: "Marcus Vance",
    role: "CEO & Co-Founder",
    company: "AutoScale CRM",
    metric: "100% DISPATCH ACCURACY",
    contractTag: "MULTI-AGENT SWARM",
  },
  {
    id: "02",
    quoteLead: "I've had the pleasure of working with Yusra on our multi-agent automation infrastructure, and it's been nothing short of fantastic. Her coding abilities are unparalleled: she dropped our ",
    quoteHighlight: "end-to-end multi-agent dispatch latency to real-time execution.",
    quoteTail: " The autonomous swarms handle high-concurrency ticket routing with 100% precision.",
    author: "Elena Rostova",
    role: "Head of Product",
    company: "Omnivox Health",
    metric: "SUB-SECOND DISPATCH",
    contractTag: "AUTONOMOUS AGENT SWARM",
  },
  {
    id: "03",
    quoteLead: "Her hybrid vector retrieval suite with Qdrant delivers 100% verifiable citations, completely ",
    quoteHighlight: "eliminating hallucinations across 500+ audit balance sheets.",
    quoteTail: " If you need deterministic enterprise RAG that holds up to real regulatory scrutiny, she is the engineer to call.",
    author: "David Chen",
    role: "Chief Technology Officer",
    company: "FinDoc Analytics",
    metric: "100% VERIFIED CITATIONS",
    contractTag: "QDRANT VECTOR RAG",
  },
  {
    id: "04",
    quoteLead: "Yusra has played a pivotal role in every stage of our platform launch. Deployed from initial Figma specs to live ",
    quoteHighlight: "production AWS cloud infrastructure in under three weeks flat,",
    quoteTail: " with zero-defect Stripe recurring billing from day one. Her execution speed and reliability are unmatched.",
    author: "Sarah Jenkins",
    role: "Co-Founder & COO",
    company: "ScribeFlow SaaS",
    metric: "3 WEEKS TO LIVE AWS",
    contractTag: "FULL-STACK SAAS & AWS",
  },
];

const AUTOPLAY_DURATION = 7500;

export default function Testimonials() {
  const [deck, setDeck] = useState<number[]>([0, 1, 2, 3]);
  const [flipState, setFlipState] = useState<"idle" | "flipping-next" | "flipping-prev">("idle");
  const [isPaused, setIsPaused] = useState(false);

  const total = TESTIMONIALS_DATA.length;
  const activeIndex = deck[0];

  // Send front card into 3D Flip to the back of the deck
  const handleNext = useCallback(() => {
    if (flipState !== "idle") return;
    setFlipState("flipping-next");

    setTimeout(() => {
      setDeck((prev) => {
        const [first, ...rest] = prev;
        return [...rest, first];
      });
      setFlipState("idle");
    }, 360);
  }, [flipState]);

  // Pull back card into 3D Flip onto the front
  const handlePrev = useCallback(() => {
    if (flipState !== "idle") return;
    setFlipState("flipping-prev");

    setDeck((prev) => {
      const last = prev[prev.length - 1];
      const rest = prev.slice(0, prev.length - 1);
      return [last, ...rest];
    });

    setTimeout(() => {
      setFlipState("idle");
    }, 360);
  }, [flipState]);

  // Autoplay
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, AUTOPLAY_DURATION);
    return () => clearInterval(interval);
  }, [isPaused, handleNext]);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 select-none font-sans">

      {/* ── SPLIT LAYOUT ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

        {/* ============================================================== */}
        {/* LEFT COLUMN: THEME HEADLINE (UNTOUCHED AS REQUESTED)           */}
        {/* ============================================================== */}
        <div className="lg:col-span-5 lg:sticky lg:top-36 space-y-5">

          {/* Theme Signature Top Pill Line (Gradient lines + Sage tag) */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#7FAEA6]" />
            <span className="text-[11px] font-space font-bold uppercase tracking-[0.3em] text-[#7FAEA6]">
              CLIENT TESTIMONIALS
            </span>
            <div className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#7FAEA6]" />
          </div>

          {/* Theme Signature Multi-Color Heading in Space Grotesk */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase font-space leading-[1.08] tracking-tight">
            <span className="text-foreground">WHAT MY </span>
            <br />
            <span className="text-[#E09A8D]">CLIENTS </span>
            <span className="text-[#7FAEA6]">SAY</span>
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm font-sans text-secondary/85 leading-relaxed max-w-sm font-medium">
            Direct feedback from founders, CTOs, and technical leads who deployed these systems into live production.
          </p>

          {/* Controls: Next/Prev & Auto Indicator */}
          <div className="pt-4 flex items-center gap-4">

            {/* Tactile Arrow Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                disabled={flipState !== "idle"}
                aria-label="Previous testimonial"
                className="w-10 h-10 rounded-full border border-secondary/30 bg-[#0F2826] hover:border-accent hover:text-accent text-secondary flex items-center justify-center transition-all duration-200 active:scale-90 cursor-pointer shadow-sm disabled:opacity-50"
              >
                <ArrowLeft className="w-4 h-4 stroke-[2]" />
              </button>
              <button
                onClick={handleNext}
                disabled={flipState !== "idle"}
                aria-label="Next testimonial"
                className="w-10 h-10 rounded-full border border-secondary/30 bg-[#0F2826] hover:border-accent hover:text-accent text-secondary flex items-center justify-center transition-all duration-200 active:scale-90 cursor-pointer shadow-sm disabled:opacity-50"
              >
                <ArrowRight className="w-4 h-4 stroke-[2]" />
              </button>
            </div>

            {/* Counter */}
            <div className="font-space font-bold text-xs text-secondary/70 tracking-widest pl-2">
              <span className="text-accent">0{activeIndex + 1}</span>
              <span className="text-secondary/40 mx-1.5">•</span>
              <span>0{total}</span>
            </div>

            {/* Play / Pause Toggle */}
            <button
              onClick={() => setIsPaused((prev) => !prev)}
              aria-label={isPaused ? "Play Autoplay" : "Pause Autoplay"}
              className="p-2 rounded-full hover:bg-white/5 text-secondary/60 hover:text-accent transition-colors cursor-pointer"
            >
              {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
            </button>
          </div>

        </div>

        {/* ============================================================== */}
        {/* RIGHT COLUMN: 3D FLIP STEPPED DECK (SHARP ARCHITECTURAL CORNERS) */}
        {/* ============================================================== */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="lg:col-span-7 relative w-full pt-4 pb-12 [perspective:1400px]"
        >
          {/* DECK CONTAINER */}
          <div className="relative w-full h-[400px] sm:h-[360px] md:h-[350px]">

            {deck.map((itemIdx, pos) => {
              if (pos > 2) return null;

              const item = TESTIMONIALS_DATA[itemIdx];
              const isFront = pos === 0;

              // EXACT STEPPED OFFSETS (Down and Right):
              // Card 2 (Backmost):  x = 0,  y = 0,  zIndex = 10
              // Card 1 (Middle):    x = 18, y = 28, zIndex = 20
              // Card 0 (Frontmost): x = 36, y = 56, zIndex = 30
              let x = pos === 0 ? 36 : pos === 1 ? 18 : 0;
              let y = pos === 0 ? 56 : pos === 1 ? 28 : 0;
              let zIndex = 30 - pos * 10;
              let scale = 1;
              let rotateX = 0;
              let rotateY = 0;
              let rotateZ = 0;

              // THE PROPER 3D PERSPECTIVE FLIP ANIMATION:
              if (isFront && flipState === "flipping-next") {
                // Front card flips UP and back into 3D space:
                y = -90;
                x = 18;
                rotateX = -26;
                rotateZ = -3;
                scale = 1.04;
                zIndex = 45;
              } else if (isFront && flipState === "flipping-prev") {
                // Card pulls in reverse:
                y = 80;
                rotateX = 20;
                scale = 0.98;
              }

              return (
                <motion.div
                  key={item.id}
                  layout
                  onClick={isFront ? handleNext : undefined}
                  animate={{
                    x,
                    y,
                    scale,
                    rotateX,
                    rotateY,
                    rotateZ,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 290,
                    damping: 24,
                    mass: 0.8,
                  }}
                  style={{
                    zIndex,
                    width: "calc(100% - 36px)",
                    transformStyle: "preserve-3d",
                  }}
                  className={`absolute top-0 left-0 rounded-xl border p-6 sm:p-7 md:p-8 shadow-xl backdrop-blur-md flex flex-col justify-between transition-colors duration-200 ${isFront
                    ? "bg-[#0F2826] border-[#7FAEA6]/50 shadow-[0_12px_32px_rgba(0,0,0,0.45)] cursor-pointer hover:border-[#E09A8D]/70"
                    : pos === 1
                      ? "bg-[#0C2220] border-[#7FAEA6]/25 shadow-md pointer-events-none"
                      : "bg-[#091A18] border-white/10 shadow-sm pointer-events-none"
                    }`}
                >
                  {/* Top Metallic Line Accent (Theme Coral & Sage) */}
                  <div className="absolute top-0 inset-x-6 h-[1.5px] bg-gradient-to-r from-transparent via-[#E09A8D]/70 via-[#7FAEA6]/50 to-transparent pointer-events-none" />

                  {/* Chamfered Architectural Corner Notch (Matches WhatIBuild) */}
                  {isFront && (
                    <div
                      className="absolute top-0 right-0 w-3.5 h-3.5 bg-[#E09A8D] pointer-events-none"
                      style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
                    />
                  )}

                  {/* Top Status Bar Inside Card (Theme Creative Tags) */}
                  <div className="flex items-center justify-between pb-3.5 mb-2 border-b border-white/[0.08]">
                    <div className="flex items-center gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full ${isFront ? "bg-[#E09A8D]" : "bg-[#7FAEA6]/60"}`} />
                      <span className={`font-space font-bold text-[10px] uppercase tracking-wider ${isFront ? "text-[#E09A8D]" : "text-[#7FAEA6]/70"}`}>
                        {item.contractTag}
                      </span>
                    </div>

                    <span className="font-mono text-[9.5px] uppercase tracking-widest text-emerald-400 font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      {item.metric}
                    </span>
                  </div>

                  {/* Quote Body with Rich Theme Highlights */}
                  <p className="text-[14px] sm:text-[15px] md:text-[15.5px] font-sans text-foreground/90 leading-[1.62] font-normal mb-6">
                    &ldquo;{item.quoteLead}
                    <span className="text-[#7FAEA6] font-medium bg-[#7FAEA6]/10 px-1 py-0.5 rounded-[3px]">
                      {item.quoteHighlight}
                    </span>
                    {item.quoteTail}&rdquo;
                  </p>

                  {/* Author Line (Crisp Theme Formatting) */}
                  <div className="pt-3.5 border-t border-white/[0.08] flex items-center justify-between">
                    <p className="text-xs sm:text-[13px] font-sans text-secondary/90">
                      <span className="font-bold text-foreground">{item.author}</span>
                      <span className="mx-2 text-[#E09A8D]">•</span>
                      <span className="text-[#7FAEA6]">{item.role}</span>
                      <span className="text-secondary/70"> @ </span>
                      <span className="text-foreground font-semibold">{item.company}</span>
                    </p>

                    {isFront && (
                      <span className="text-[10px] font-mono tracking-widest text-[#7FAEA6]/80 font-bold hidden sm:inline-block">
                        0{itemIdx + 1}
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}

          </div>

          {/* Clean minimal bottom indicator */}
          <div className="mt-16 pt-6 flex items-center justify-between text-xs font-space text-secondary/60">
            <span className="text-[10px] font-mono tracking-widest uppercase text-secondary/50">
              [ CLICK TO FLIP ]
            </span>
            <button
              onClick={handleNext}
              className="text-xs font-space font-semibold uppercase tracking-wider text-secondary/70 hover:text-accent transition-colors flex items-center gap-2 cursor-pointer group"
            >
              <span>Flip Card</span>
              <RotateCw className="w-3.5 h-3.5 text-accent transition-transform duration-300 group-hover:rotate-180" />
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
