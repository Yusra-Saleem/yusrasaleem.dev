"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ProblemSolution {
  id: string;
  title: string;
  target: string;
  problem: string;
  solution: string;
}

const PROBLEM_SOLUTIONS: ProblemSolution[] = [
  {
    id: "manual-tasks",
    title: "Repetitive Copy-Pasting & Manual Tasks",
    target: "For Operations, Sales & Admin Teams",
    problem: "Your team wastes 15 to 20 hours every week manually copying leads, updating spreadsheets, and re-entering data between tools, causing frequent costly human errors and slow turnaround.",
    solution: "I engineer 24/7 background AI agents that automatically extract, validate, and synchronize records across all your tools in real time, completely eliminating routine manual work."
  },
  {
    id: "ai-crashing",
    title: "AI Demos Crashing in Production",
    target: "For SaaS Founders & Technical Leads",
    problem: "Raw LLM prompts fail on edge cases, hallucinate unpredictably, and return malformed JSON that breaks live production databases and crashes user sessions.",
    solution: "I build production-grade AI systems with strict Pydantic V2 schemas, deterministic fallback routes, and automated self-healing guardrails ensuring 99.9% uptime and zero hallucinations."
  },
  {
    id: "tools-sync",
    title: "Tools Not Syncing (Payments, CRM, DBs)",
    target: "For Multi-Platform & E-Commerce Businesses",
    problem: "Customer signups and payment transactions require tedious manual copying into CRMs, databases, and marketing platforms, leaving data trapped in isolated silos.",
    solution: "I build real-time webhook microservices that instantly process events and synchronize payments, user records, and databases in under 200ms across all your platforms."
  },
  {
    id: "after-hours-leads",
    title: "Losing Inbound Leads After-Hours",
    target: "For Agencies, Consultancies & Service Businesses",
    problem: "High-intent prospective clients reaching out outside business hours wait 8 to 12 hours for an email reply, resulting in cold leads and lost revenue to faster competitors.",
    solution: "I deploy a 24/7 conversational AI concierge trained on your documentation that instantly answers technical questions, qualifies inbound leads, and books meetings automatically."
  }
];

export default function Services() {
  const [activeIdx, setActiveIdx] = useState(0);
  const current = PROBLEM_SOLUTIONS[activeIdx];

  return (
    <section className="w-full relative bg-[#EAF1ED] text-[#0B1F1D] py-10 sm:py-12 md:py-14 border-y border-[#7FAEA6]/25 overflow-hidden select-none [background-image:radial-gradient(rgba(127,174,166,0.36)_1.25px,transparent_1.25px)] [background-size:26px_26px]">

      <div className="w-full max-w-6xl mx-auto px-6 md:px-12 relative z-10">

        {/* 1. ON-THEME SIGNATURE HEADING */}
        <div className="flex flex-col items-center justify-center text-center mb-6 sm:mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#7FAEA6]" />
            <span className="text-[11px] font-mono font-bold tracking-[0.25em] text-[#0B1F1D]/75 uppercase">
              CHALLENGES &amp; AUTOMATED RESOLUTIONS
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[46px] font-black font-space tracking-tight text-[#0B1F1D] uppercase leading-tight">
            <span>PROBLEMS I SOLVE </span>
            <span className="text-[#E09A8D]">&amp; </span>
            <span className="inline-block bg-[#7FAEA6] text-[#0B1F1D] px-3 py-0.5 border border-[#0B1F1D]/15 rounded-none shadow-xs">
              AUTOMATE
            </span>
          </h2>
        </div>

        {/* 2. SPLIT INTERACTIVE SHOWCASE WITH EQUAL 4 SIDES & 2PX ROUNDED CORNERS */}
        {/* 2. SPLIT INTERACTIVE SHOWCASE WITH 6PX ROUNDED BORDERS & ARCHITECTURAL DESIGN */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-stretch relative z-10">

          {/* Left Column: Interactive Tabs with Clean 4 Sides & Minimal 2px Rounded Corners */}
          {/* Left Column: Interactive Tabs with 6px Rounded Borders & Inset Frame */}
          <div className="md:col-span-5 flex flex-col justify-start gap-2 relative">
            {PROBLEM_SOLUTIONS.map((item, idx) => {
              const isActive = idx === activeIdx;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveIdx(idx)}
                  onMouseEnter={() => setActiveIdx(idx)}
                  className={`w-full text-left py-2.5 px-3.5 cursor-pointer flex items-center border rounded-[6px] relative z-10 transition-all duration-200 overflow-hidden ${isActive
                    ? "border-[#7FAEA6] shadow-sm bg-[#051513]"
                    : "border-[#0B1F1D]/15 hover:border-[#7FAEA6]/50 bg-white/75 hover:bg-white/95"
                    }`}
                >
                  {/* Smooth Gliding Active Pill with 6px Rounded Corners */}
                  {isActive && (
                    <motion.div
                      layoutId="servicesActivePill"
                      className="absolute inset-0 bg-[#051513] rounded-[6px] -z-10"
                      transition={{ type: "spring", stiffness: 420, damping: 36 }}
                    />
                  )}

                  {/* Inner Hairline Frame for Active Tab */}
                  {isActive && (
                    <div className="absolute inset-[2.5px] border border-[#7FAEA6]/30 rounded-[4.5px] pointer-events-none" />
                  )}

                  {/* Left Dual-Tone Accent Stripe */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-[6px] transition-all duration-200"
                    style={{
                      background: isActive
                        ? "linear-gradient(180deg, #7FAEA6 0%, #E09A8D 100%)"
                        : "transparent"
                    }}
                  />

                  {/* Active Right Status Dot */}
                  {isActive && (
                    <span className="absolute right-3 w-1.5 h-1.5 rounded-full bg-[#7FAEA6] animate-pulse pointer-events-none" />
                  )}

                  {/* Tab Text Content */}
                  <div className="relative z-10 pl-2 pr-4">
                    <p
                      className={`font-space font-bold text-xs sm:text-[13px] leading-snug tracking-tight transition-colors duration-200 ${isActive ? "text-[#E5EBEA]" : "text-[#0B1F1D]"
                        }`}
                    >
                      {item.title}
                    </p>
                    <p
                      className={`text-[10.5px] font-mono font-medium mt-0.5 transition-colors duration-200 ${isActive ? "text-[#7FAEA6]" : "text-[#0B1F1D]/60"
                        }`}
                    >
                      {item.target}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Showcase Card with 6px Rounded Borders, Inset Hairline Frame & 4 Symmetric Corner Reticles */}
          <div className="md:col-span-7 flex flex-col min-h-[230px] sm:min-h-[245px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white/95 backdrop-blur-sm border border-[#0B1F1D]/20 rounded-[6px] shadow-[0_10px_35px_rgba(11,31,29,0.06)] flex flex-col justify-between h-full p-5 sm:p-6 relative overflow-hidden space-y-4"
              >
                {/* 1. ARCHITECTURAL INSET HAIRLINE FRAME (EQUAL ON ALL 4 SIDES) */}
                <div className="absolute inset-[3px] border border-[#7FAEA6]/25 rounded-[4.5px] pointer-events-none z-10" />

                {/* 2. 4 SYMMETRIC CORNER RETICLE BRACKETS (ALL 4 SIDES IDENTICAL) */}
                <span className="absolute top-1.5 left-1.5 w-2.5 h-2.5 border-t border-l border-[#7FAEA6] pointer-events-none z-20" />
                <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 border-t border-r border-[#7FAEA6] pointer-events-none z-20" />
                <span className="absolute bottom-1.5 left-1.5 w-2.5 h-2.5 border-b border-l border-[#7FAEA6] pointer-events-none z-20" />
                <span className="absolute bottom-1.5 right-1.5 w-2.5 h-2.5 border-b border-r border-[#7FAEA6] pointer-events-none z-20" />

                {/* Clear Problem Block */}
                <motion.div
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: 0.04 }}
                  className="relative z-10"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#E09A8D]" />
                    <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#E09A8D]">
                      THE PROBLEM
                    </span>
                  </div>
                  <p className="text-[13.5px] sm:text-sm text-[#0B1F1D]/85 leading-relaxed font-sans font-medium">
                    {current.problem}
                  </p>
                </motion.div>

                {/* Clear Solution Block with 6px Rounded Corners & Subtle Inset Frame */}
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.28, delay: 0.08 }}
                  className="p-3.5 sm:p-4 bg-[#051513] text-[#E5EBEA] border border-[#7FAEA6]/50 rounded-[6px] relative overflow-hidden shadow-xs z-10"
                >
                  {/* Subtle Inset Frame for Solution Box */}
                  <div className="absolute inset-[2.5px] border border-emerald-400/20 rounded-[4.5px] pointer-events-none" />

                  {/* 4 Symmetric Micro Corner Ticks */}
                  <span className="absolute top-1 left-1 w-1.5 h-1.5 border-t border-l border-emerald-400/60 pointer-events-none" />
                  <span className="absolute top-1 right-1 w-1.5 h-1.5 border-t border-r border-emerald-400/60 pointer-events-none" />
                  <span className="absolute bottom-1 left-1 w-1.5 h-1.5 border-b border-l border-emerald-400/60 pointer-events-none" />
                  <span className="absolute bottom-1 right-1 w-1.5 h-1.5 border-b border-r border-emerald-400/60 pointer-events-none" />

                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#7FAEA6]">
                      THE SOLUTION (HOW I SOLVE IT)
                    </span>
                  </div>
                  <p className="text-[13px] sm:text-[13.5px] leading-relaxed font-sans text-[#E5EBEA]/95 font-medium">
                    {current.solution}
                  </p>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>

    </section>
  );
}
