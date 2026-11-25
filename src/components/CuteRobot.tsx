"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function CuteRobot() {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 1200);
  };

  return (
    <div 
      className="relative flex items-end justify-end pointer-events-auto select-none cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {/* ──────────────────────────────────────────────────────────────────── */}
      {/* SPEECH BUBBLE: "Hi there! 👋" BESIDE THE WAVING HAND                 */}
      {/* ──────────────────────────────────────────────────────────────────── */}
      <div 
        className="absolute top-8 sm:top-10 -left-24 sm:-left-28 z-40"
      >
        <div className="relative px-3 py-1.5 bg-[#051513]/95 border border-[#7FAEA6]/50 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.5)] backdrop-blur-md flex items-center gap-1.5">
          <span className="text-xs font-sans font-bold text-[#E5EBEA] tracking-wide whitespace-nowrap">
            Hi there! 👋
          </span>

          {/* Tail pointing right towards the waving hand */}
          <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2.5 h-2.5 bg-[#051513] border-t border-r border-[#7FAEA6]/50 rotate-45" />
        </div>
      </div>

      {/* ──────────────────────────────────────────────────────────────────── */}
      {/* 3D GLOSSY CUTE ROBOT SVG - MATCHING SCREENSHOT PIXEL PERFECT          */}
      {/* ──────────────────────────────────────────────────────────────────── */}
      <motion.div
        animate={{
          rotate: isClicked ? [-18, 12, -10, 0] : isHovered ? [-14, -6, -16] : [-12, -6, -14, -12],
          y: isHovered ? [-10, -2, -10] : [-6, 0, -6],
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{
          repeat: isClicked ? 0 : Infinity,
          duration: isHovered ? 1.5 : 3.5,
          ease: "easeInOut",
        }}
        className="relative w-36 h-36 sm:w-44 sm:h-44 shrink-0 origin-bottom-right drop-shadow-[0_14px_32px_rgba(0,0,0,0.65)]"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full overflow-visible">
          <defs>
            {/* White Body 3D Soft Gradient */}
            <linearGradient id="white3D" x1="20%" y1="0%" x2="80%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="40%" stopColor="#e5f0ee" />
              <stop offset="80%" stopColor="#b5ceca" />
              <stop offset="100%" stopColor="#81a19b" />
            </linearGradient>

            {/* Helmet Rim Shadow Gradient */}
            <linearGradient id="rimShadow" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="70%" stopColor="#cfdedb" />
              <stop offset="100%" stopColor="#89a8a2" />
            </linearGradient>

            {/* Dark Visor Screen 3D Gradient */}
            <linearGradient id="visorScreen" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#122522" />
              <stop offset="50%" stopColor="#081412" />
              <stop offset="100%" stopColor="#020807" />
            </linearGradient>

            {/* Glass Shine Arc Overlay */}
            <linearGradient id="glassShine" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
              <stop offset="40%" stopColor="#ffffff" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>

            {/* Glowing Cyan Glow Filter */}
            <filter id="cyanGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>

            {/* Soft Shadow Filter */}
            <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#000000" floodOpacity="0.4" />
            </filter>

            {/* Ear Cup Metallic Gradient */}
            <linearGradient id="earGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#94b2ac" />
            </linearGradient>

            {/* Chest Code Emblem Background */}
            <linearGradient id="badgeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0b2420" />
              <stop offset="100%" stopColor="#041210" />
            </linearGradient>
          </defs>

          {/* ══════════════════════════════════════════════════════════════════ */}
          {/* MOTION ACCENT LINES TOP-RIGHT (MATCHING SCREENSHOT)               */}
          {/* ══════════════════════════════════════════════════════════════════ */}
          <g id="MotionTicks" opacity="0.9">
            <line x1="172" y1="52" x2="182" y2="44" stroke="#5eead4" strokeWidth="3" strokeLinecap="round" filter="url(#cyanGlow)" />
            <line x1="178" y1="64" x2="190" y2="60" stroke="#5eead4" strokeWidth="3" strokeLinecap="round" filter="url(#cyanGlow)" />
            <line x1="175" y1="76" x2="186" y2="78" stroke="#5eead4" strokeWidth="3" strokeLinecap="round" filter="url(#cyanGlow)" />
          </g>

          {/* ══════════════════════════════════════════════════════════════════ */}
          {/* ANTENNA (TOP RIGHT OF HELMET)                                      */}
          {/* ══════════════════════════════════════════════════════════════════ */}
          <g id="Antenna">
            {/* Curved Antenna Stem */}
            <path
              d="M 132 36 Q 142 22 148 16"
              fill="none"
              stroke="url(#white3D)"
              strokeWidth="4"
              strokeLinecap="round"
            />
            {/* Antenna Base Ring */}
            <ellipse cx="132" cy="36" rx="5" ry="3" fill="#89a8a2" />
            {/* Glowing Cyan Tip Sphere */}
            <circle cx="149" cy="15" r="5.5" fill="#5eead4" filter="url(#cyanGlow)" />
            <circle cx="147.5" cy="13.5" r="1.8" fill="#ffffff" />
          </g>

          {/* ══════════════════════════════════════════════════════════════════ */}
          {/* ROBOT BODY, CHEST PLATE & INTEGRATED FIXED 3D ARMS                 */}
          {/* ══════════════════════════════════════════════════════════════════ */}
          <g id="RobotChassis">
            {/* Back Neck / Body Connector */}
            <path d="M 82 108 L 118 108 L 122 120 L 78 120 Z" fill="#698882" />

            {/* ────────────────────────────────────────────────────────────── */}
            {/* LEFT CHUBBY 3D ARM (BEHIND BODY TORSO)                         */}
            {/* ────────────────────────────────────────────────────────────── */}
            <path
              d="M 76 138 C 54 130 30 110 28 84 C 24 66 38 66 46 78 C 52 98 68 120 78 140 Z"
              fill="url(#white3D)"
              stroke="#7a9a94"
              strokeWidth="1.2"
              filter="url(#softShadow)"
            />

            {/* ────────────────────────────────────────────────────────────── */}
            {/* RIGHT CHUBBY 3D ARM (STARTS HIGHER & LARGER SIZE)              */}
            {/* ────────────────────────────────────────────────────────────── */}
            <path
              d="M 118 122 C 146 126 172 144 166 168 C 162 176 148 176 144 164 C 144 150 128 134 116 126 Z"
              fill="url(#white3D)"
              stroke="#7a9a94"
              strokeWidth="1.3"
              filter="url(#softShadow)"
            />

            {/* Right Hand: Enlarged Chubby Fingers Gripping / Resting on Card Edge */}
            <g transform="translate(140, 164) rotate(12)">
              <rect x="0" y="0" width="9" height="17" rx="4.5" fill="url(#white3D)" stroke="#7a9a94" strokeWidth="1.3" />
              <rect x="8.5" y="2" width="9" height="18" rx="4.5" fill="url(#white3D)" stroke="#7a9a94" strokeWidth="1.3" />
              <rect x="17" y="4" width="9" height="16" rx="4.5" fill="url(#white3D)" stroke="#7a9a94" strokeWidth="1.3" />
            </g>

            {/* Main Chubby Body Torso (RENDERED ON TOP OF ARMS TO COVER THEIR BASES) */}
            <ellipse cx="100" cy="148" rx="46" ry="38" fill="url(#white3D)" filter="url(#softShadow)" />
            <ellipse cx="100" cy="148" rx="46" ry="38" fill="none" stroke="#7a9a94" strokeWidth="1.5" />

            {/* Chest Emblem: Pill Shape Container */}
            <rect
              x="74"
              y="132"
              width="52"
              height="30"
              rx="15"
              fill="url(#badgeGrad)"
              stroke="#5eead4"
              strokeWidth="1.8"
              filter="url(#cyanGlow)"
            />

            {/* CODE SYMBOL: </ > (BRIGHT CYAN GLOWING MATCHING IMAGE) */}
            <g transform="translate(81, 137)">
              {/* Left bracket < */}
              <path
                d="M 10 13 L 5 9 L 10 5"
                fill="none"
                stroke="#5eead4"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Slash / */}
              <line
                x1="18"
                y1="4"
                x2="14"
                y2="14"
                stroke="#5eead4"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              {/* Right bracket > */}
              <path
                d="M 23 5 L 28 9 L 23 13"
                fill="none"
                stroke="#5eead4"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </g>

          {/* ══════════════════════════════════════════════════════════════════ */}
          {/* ROBOT HEAD & HELMET (PERFECTLY LAYERED ABOVE BODY)                 */}
          {/* ══════════════════════════════════════════════════════════════════ */}
          <g id="RobotHead">
            
            {/* LEFT EAR CUP / HEADPHONE */}
            <g id="LeftEar" transform="translate(42, 60)">
              <ellipse cx="6" cy="16" rx="8" ry="14" fill="url(#earGrad)" stroke="#7a9a94" strokeWidth="1" />
              <ellipse cx="4" cy="16" rx="4" ry="9" fill="#5eead4" filter="url(#cyanGlow)" />
            </g>

            {/* RIGHT EAR CUP / HEADPHONE */}
            <g id="RightEar" transform="translate(146, 60)">
              <ellipse cx="6" cy="16" rx="8" ry="14" fill="url(#earGrad)" stroke="#7a9a94" strokeWidth="1" />
              <ellipse cx="8" cy="16" rx="4" ry="9" fill="#5eead4" filter="url(#cyanGlow)" />
            </g>

            {/* MAIN WHITE HELMET SHELL */}
            <rect
              x="48"
              y="32"
              width="104"
              height="80"
              rx="40"
              fill="url(#white3D)"
              stroke="#7a9a94"
              strokeWidth="1.5"
              filter="url(#softShadow)"
            />

            {/* Helmet Highlight Rim */}
            <path
              d="M 54 58 C 54 40, 70 36, 100 36 C 130 36, 146 40, 146 58"
              fill="none"
              stroke="url(#glassShine)"
              strokeWidth="4"
              strokeLinecap="round"
            />

            {/* DARK VISOR SCREEN */}
            <rect
              x="58"
              y="42"
              width="84"
              height="60"
              rx="28"
              fill="url(#visorScreen)"
              stroke="#2e4844"
              strokeWidth="2"
            />

            {/* Glass Shine Arc on Visor */}
            <path
              d="M 64 54 Q 100 46 136 54"
              fill="none"
              stroke="url(#glassShine)"
              strokeWidth="3"
              strokeLinecap="round"
            />

            {/* ────────────────────────────────────────────────────────────── */}
            {/* FACIAL EXPRESSION: HAPPY CRESCENT EYES ^ ^ & SMILE (SCREENSHOT) */}
            {/* ────────────────────────────────────────────────────────────── */}
            <g id="FaceExpression">
              {/* Left Eye: Curved Crescent Arcs ^ */}
              <path
                d="M 72 68 Q 80 56 88 68"
                fill="none"
                stroke="#5eead4"
                strokeWidth="4.5"
                strokeLinecap="round"
                filter="url(#cyanGlow)"
              />

              {/* Right Eye: Curved Crescent Arcs ^ */}
              <path
                d="M 112 68 Q 120 56 128 68"
                fill="none"
                stroke="#5eead4"
                strokeWidth="4.5"
                strokeLinecap="round"
                filter="url(#cyanGlow)"
              />

              {/* Cute Glowing Smile Line */}
              <path
                d="M 94 82 Q 100 87 106 82"
                fill="none"
                stroke="#5eead4"
                strokeWidth="3"
                strokeLinecap="round"
                filter="url(#cyanGlow)"
              />
            </g>

          </g>

          {/* ══════════════════════════════════════════════════════════════════ */}
          {/* WAVING HAND PALM (LAYERED ON TOP OF ARM & HEAD - PERFECT FIT)      */}
          {/* ══════════════════════════════════════════════════════════════════ */}
          <motion.g
            id="WavingHandTop"
            animate={{
              rotate: isHovered ? [8, -12, 10, -8, 8] : [4, -4, 6, -2, 4],
            }}
            transition={{
              repeat: Infinity,
              duration: isHovered ? 0.7 : 1.5,
              ease: "easeInOut",
            }}
            style={{ transformOrigin: "28px 70px" }}
          >
            {/* Chubby 3D White Waving Palm & 4 Cute Golu-Molu Fingers */}
            <g transform="translate(14, 50) rotate(-12)">
              {/* Chubby Round Palm */}
              <ellipse cx="14" cy="18" rx="13" ry="12" fill="url(#white3D)" stroke="#7a9a94" strokeWidth="1.5" />
              
              {/* Thumb */}
              <rect x="0" y="10" width="8" height="12" rx="4" fill="url(#white3D)" stroke="#7a9a94" strokeWidth="1.2" transform="rotate(-40, 4, 16)" />
              {/* Index Finger */}
              <rect x="5" y="-2" width="7" height="16" rx="3.5" fill="url(#white3D)" stroke="#7a9a94" strokeWidth="1.2" transform="rotate(-15, 8.5, 6)" />
              {/* Middle Finger */}
              <rect x="13" y="-5" width="7.5" height="17" rx="3.75" fill="url(#white3D)" stroke="#7a9a94" strokeWidth="1.2" />
              {/* Ring Finger */}
              <rect x="21" y="-1" width="7" height="15" rx="3.5" fill="url(#white3D)" stroke="#7a9a94" strokeWidth="1.2" transform="rotate(15, 24.5, 6.5)" />
            </g>

            {/* Glowing Motion Waves around Waving Hand */}
            <path
              d="M 4 44 Q 0 32 8 20"
              fill="none"
              stroke="#5eead4"
              strokeWidth="2.5"
              strokeLinecap="round"
              filter="url(#cyanGlow)"
              opacity="0.8"
            />
          </motion.g>

        </svg>
      </motion.div>
    </div>
  );
}
