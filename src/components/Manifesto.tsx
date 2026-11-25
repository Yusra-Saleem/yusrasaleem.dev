"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Manifesto() {
  return (
    <section className="w-full relative min-h-[660px] sm:min-h-[720px] md:min-h-[780px] lg:min-h-[820px] bg-[#EAF1ED] text-[#0B1F1D] overflow-hidden select-none border-y border-[#7FAEA6]/25 [background-image:radial-gradient(rgba(127,174,166,0.36)_1.25px,transparent_1.25px)] [background-size:26px_26px]">

      {/* ══════════════════════════════════════════════════════════════════════ */}
      {/* LEFT SIDE: HEADLINE (ALIGNED TO TOP)                                  */}
      {/* ══════════════════════════════════════════════════════════════════════ */}
      <div className="w-full max-w-6xl mx-auto px-6 md:px-12 pt-8 sm:pt-10 md:pt-14 pb-8 min-h-[660px] sm:min-h-[720px] md:min-h-[780px] lg:min-h-[820px] flex flex-col justify-start relative z-20">

        <div className="space-y-2.5 z-20 max-w-2xl">
          {/* Subtle Category Tag */}
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#7FAEA6]" />
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#0B1F1D]/75 uppercase">
              AUTONOMOUS ARCHITECTURE
            </span>
          </div>

          {/* Line 1 (Bigger, Exactly 2 Lines) */}
          <h2 className="text-[32px] sm:text-[42px] md:text-[52px] lg:text-[58px] xl:text-[62px] font-black font-space tracking-tight text-[#0B1F1D] uppercase leading-none whitespace-nowrap">
            REPLACE REPETITION
          </h2>

          {/* Line 2: Mineral Sage Teal Highlight Box (Bigger, Exactly 2 Lines) */}
          <div className="inline-block bg-[#7FAEA6] px-3.5 sm:px-4 py-1.5 sm:py-2 shadow-sm border border-[#0B1F1D]/15 whitespace-nowrap">
            <span className="text-[32px] sm:text-[42px] md:text-[52px] lg:text-[58px] xl:text-[62px] font-black font-space tracking-tight text-[#0B1F1D] uppercase leading-none block whitespace-nowrap">
              RUN ON AUTOPILOT
            </span>
          </div>
        </div>

      </div>

      {/* ══════════════════════════════════════════════════════════════════════ */}
      {/* RIGHT SIDE: ELEVATED DEVICE (SHIFTED A LITTLE BIT DOWN AS REQUESTED)  */}
      {/* ══════════════════════════════════════════════════════════════════════ */}
      <motion.div
        whileHover={{ y: -6, rotate: -1.5, transition: { duration: 0.35 } }}
        className="absolute right-[-15px] sm:right-[-25px] md:right-[-20px] bottom-[-44px] sm:bottom-[-50px] md:bottom-[-54px] w-[90%] sm:w-[70%] md:w-[58%] lg:w-[48%] z-10 transform -rotate-[3deg] origin-bottom-right cursor-default"
      >
        <div className="rounded-tl-2xl sm:rounded-tl-3xl rounded-tr-xl overflow-hidden border-2 border-[#0B1F1D] bg-[#051513] shadow-[0_30px_90px_rgba(11,31,29,0.40)] relative group">

          {/* Subtle Top Metallic Highlight Edge */}
          <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#7FAEA6] via-[#E09A8D] to-transparent pointer-events-none z-30" />

          {/* Header Bar with macOS dots */}
          <div className="h-9 sm:h-10 bg-[#030E0C] px-4 sm:px-5 flex items-center justify-between border-b border-white/[0.08] relative z-20">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E09A8D]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#7FAEA6]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#E5EBEA]/40" />
            </div>

            {/* Live Status Badge */}
            <div className="flex items-center gap-1.5 text-[9.5px] font-mono text-[#7FAEA6] tracking-widest uppercase font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>LIVE DISPATCH</span>
            </div>
          </div>

          {/* Deep Dark Window Screen Canvas (Extended Bottom Padding) */}
          <div className="relative p-6 sm:p-8 md:p-10 pb-22 sm:pb-26 md:pb-30 overflow-hidden bg-gradient-to-br from-[#051614] via-[#081F1C] to-[#04100E] shadow-[inset_0_0_80px_rgba(0,0,0,0.7)]">

            {/* Creative Glass Reflection Glare */}
            <div className="absolute -top-24 -left-24 w-80 h-80 bg-gradient-to-br from-white/[0.06] via-transparent to-transparent transform -rotate-45 pointer-events-none" />

            {/* Subtle Horizon Glow Line */}
            <div className="absolute left-0 right-0 top-[35%] h-[1px] bg-gradient-to-r from-transparent via-[#7FAEA6]/30 to-transparent pointer-events-none" />

            {/* Creative Dual Concentric Geometric Radar Rings */}
            <div className="absolute -right-14 sm:-right-20 md:-right-24 top-[14%] w-52 h-52 sm:w-64 sm:h-64 md:w-76 md:h-76 rounded-full border-[5px] sm:border-[7px] border-[#7FAEA6]/40 pointer-events-none shadow-[0_0_40px_rgba(127,174,166,0.15)]" />
            <div className="absolute -right-10 sm:-right-16 md:-right-20 top-[18%] w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full border-[1.5px] border-dashed border-[#7FAEA6]/25 pointer-events-none" />

            {/* Pure Bold Heading */}
            <div className="relative z-10 space-y-3 select-none pt-1">

              {/* Category Tag */}
              <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#7FAEA6] font-bold block">
                SYSTEM CORE
              </span>

              {/* Main Bold Text (Increased Font Size) */}
              <div className="space-y-1 text-[28px] sm:text-[35px] md:text-[42px] lg:text-[46px] font-space font-black uppercase tracking-tight leading-[0.98]">
                <p className="text-[#E5EBEA]">BUILT TO RUN</p>
                <p className="text-[#7FAEA6]">ON COMPLETE</p>
                <p className="text-[#E5EBEA] underline decoration-[#7FAEA6] decoration-4 underline-offset-4">
                  AUTOPILOT.
                </p>
              </div>

            </div>

          </div>

        </div>
      </motion.div>

    </section >
  );
}
