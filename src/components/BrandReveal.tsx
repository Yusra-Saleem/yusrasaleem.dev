"use client";

import React from "react";
import Image from "next/image";

export default function BrandReveal() {
  return (
    <section
      className="w-full relative bg-[#EAF1ED] text-[#0B1F1D] overflow-hidden select-none border-y border-[#7FAEA6]/30"
    >
      {/* Editorial Subtitle: Human, elegant, zero buzzwords, no software/saas keywords */}
      <div className="w-full text-center py-4 sm:py-5 border-b border-[#0B1F1D]/10 relative z-20 bg-[#EAF1ED]/90 backdrop-blur-sm">
        <p className="text-[11px] sm:text-xs md:text-sm font-mono font-bold tracking-[0.25em] text-[#0B1F1D]/80 uppercase max-w-4xl mx-auto px-4 not-italic">
          TURNING COMPLEX PROBLEMS INTO CLEAN, HIGH-PERFORMANCE DIGITAL SOLUTIONS
        </p>
      </div>

      {/* Main Presentation Canvas (Light Theme): Compact Spacing, Crisp Silhouette, Giant Green Outline Text */}
      <div
        className="relative w-full min-h-[340px] sm:min-h-[400px] md:min-h-[460px] lg:min-h-[500px] flex items-center justify-center overflow-hidden py-10 sm:py-14"
      >
        {/* Subtle Ambient Emerald Backlight Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(127,174,166,0.22)_0%,transparent_70%)] pointer-events-none z-10" />

        {/* FAINT SILHOUETTE: NATURAL CONTRAST, GENTLE BLUR */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-10">
          <Image
            src="/yusra_profile1.png"
            alt="Silhouette"
            width={540}
            height={540}
            quality={75}
            loading="lazy"
            className="w-[300px] sm:w-[400px] md:w-[480px] lg:w-[540px] h-auto object-contain opacity-30 blur-[2px] filter grayscale contrast-125 select-none"
          />
        </div>

        {/* PRIMARY HEADLINE: EXTRA-LARGE, BOLD, NOT ITALIC, TRANSPARENT FILL, GREEN OUTLINE */}
        <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 max-w-6xl mx-auto w-full">
          <div className="space-y-0 sm:space-y-1 select-none w-full">
            <h2
              className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[112px] 2xl:text-[132px] font-black font-space tracking-tight uppercase leading-[0.88] block not-italic"
              style={{
                WebkitTextStroke: "2.8px #164E43",
                color: "transparent",
                filter: "drop-shadow(0 4px 16px rgba(22,78,67,0.20))",
              }}
            >
              BUILT TO SCALE
            </h2>
            <h2
              className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[112px] 2xl:text-[132px] font-black font-space tracking-tight uppercase leading-[0.88] block not-italic"
              style={{
                WebkitTextStroke: "2.8px #164E43",
                color: "transparent",
                filter: "drop-shadow(0 4px 16px rgba(22,78,67,0.20))",
              }}
            >
              BUILT TO LAST
            </h2>
          </div>

          {/* Clean Flat Editorial Sub-Line (Simple, human, no software/saas keywords) */}
          <div className="mt-5 sm:mt-7 flex items-center justify-center gap-3 select-none">
            <span className="w-1.5 h-1.5 rounded-full bg-[#164E43]" />
            <p className="text-[10px] sm:text-xs md:text-sm font-mono font-bold tracking-[0.25em] text-[#164E43] uppercase not-italic">
              FAST EXECUTION • CLEAN ARCHITECTURE • REAL RESULTS
            </p>
            <span className="w-1.5 h-1.5 rounded-full bg-[#164E43]" />
          </div>
        </div>

      </div>
    </section>
  );
}
