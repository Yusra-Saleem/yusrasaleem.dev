"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface InteractiveButtonProps {
  id?: string;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
  label: string;
  hoverLabel?: string;
  variant?: "primary" | "secondary";
  className?: string;
  icon?: React.ReactNode;
}

export default function InteractiveButton({
  id,
  href,
  target,
  rel,
  onClick,
  label,
  hoverLabel,
  variant = "primary",
  className = "",
  icon,
}: InteractiveButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { clientX, clientY } = e;
    const rect = containerRef.current.getBoundingClientRect();
    
    // Magnetic pull calculation (drift button towards cursor by max 8px)
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const x = clientX - centerX;
    const y = clientY - centerY;

    const pullFactor = 0.20;
    const maxPull = 8;
    const targetX = Math.min(Math.max(x * pullFactor, -maxPull), maxPull);
    const targetY = Math.min(Math.max(y * pullFactor, -maxPull), maxPull);
    
    setPosition({ x: targetX, y: targetY });

    // Relative mouse position inside button for CSS radial spotlight
    const spotX = clientX - rect.left;
    const spotY = clientY - rect.top;
    containerRef.current.style.setProperty("--x", `${spotX}px`);
    containerRef.current.style.setProperty("--y", `${spotY}px`);
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const isPrimary = variant === "primary";

  // Accent color is #E09A8D (coral), Secondary is #7FAEA6 (sage/teal)
  const colors = {
    // Static base styles
    staticBg: "bg-[#0B1F1D]/60 backdrop-blur-md border border-current",
    text: isPrimary 
      ? "text-accent hover:text-white" 
      : "text-secondary hover:text-white",
      
    stroke: isPrimary 
      ? "stroke-accent group-hover:stroke-white" 
      : "stroke-secondary group-hover:stroke-white",
      
    brackets: isPrimary 
      ? "border-accent group-hover:border-white" 
      : "border-secondary group-hover:border-white",
  };

  const baseStyles = `relative inline-flex items-center justify-center font-space text-[10.5px] font-bold uppercase tracking-[0.2em] rounded-[3px] select-none cursor-pointer transition-all duration-300 group overflow-visible ${colors.staticBg} ${colors.text} ${
    className.includes("px-") ? "" : "px-6"
  } ${
    className.includes("py-") ? "" : "py-3"
  } ${
    className.includes("min-w-") ? "" : "min-w-[145px]"
  }`;

  const buttonContent = (
    <>
      {/* Background Hover Tint Overlay (Guaranteed visible color shade) */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[inherit] ${
          isPrimary ? "bg-accent/22" : "bg-secondary/22"
        } z-0`}
      />

      {/* Cyber/Tech Corner Brackets (snap on hover) */}
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] z-10">
        {/* Top-Left Bracket */}
        <span className={`absolute w-1.5 h-1.5 border-t-1.5 border-l-1.5 ${colors.brackets} opacity-0 group-hover:opacity-100 top-0 left-0 -translate-x-[3px] -translate-y-[3px] group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 ease-out`} />
        {/* Top-Right Bracket */}
        <span className={`absolute w-1.5 h-1.5 border-t-1.5 border-r-1.5 ${colors.brackets} opacity-0 group-hover:opacity-100 top-0 right-0 translate-x-[3px] -translate-y-[3px] group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 ease-out`} />
        {/* Bottom-Left Bracket */}
        <span className={`absolute w-1.5 h-1.5 border-b-1.5 border-l-1.5 ${colors.brackets} opacity-0 group-hover:opacity-100 bottom-0 left-0 -translate-x-[3px] translate-y-[3px] group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 ease-out`} />
        {/* Bottom-Right Bracket */}
        <span className={`absolute w-1.5 h-1.5 border-b-1.5 border-r-1.5 ${colors.brackets} opacity-0 group-hover:opacity-100 bottom-0 right-0 translate-x-[3px] translate-y-[3px] group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 ease-out`} />
      </div>

      {/* Animated perimeter SVG stroke (always runs at low opacity, speeds up on hover - NO filter glow) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none rounded-[inherit] z-20" fill="none">
        <rect
          x="0.75"
          y="0.75"
          width="calc(100% - 1.5px)"
          height="calc(100% - 1.5px)"
          rx="3"
          className={`${colors.stroke} opacity-40 group-hover:opacity-100 transition-all duration-350 animate-sweep-stroke group-hover:animate-sweep-stroke-fast`}
          strokeWidth="1.5"
          strokeDasharray="40 160"
        />
      </svg>

      {/* Cinematic text roll-up */}
      <span className="relative z-10 flex items-center gap-2 overflow-hidden pointer-events-none">
        <span className="relative block overflow-hidden">
          <span className="block transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) group-hover:-translate-y-full">
            {label}
          </span>
          <span className="absolute inset-0 block translate-y-full group-hover:translate-y-0 transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) text-white font-bold">
            {hoverLabel || label}
          </span>
        </span>
        
        {/* Animated Icon if provided */}
        {icon && (
          <span className="inline-block transform group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300 font-sans text-xs">
            {icon}
          </span>
        )}
      </span>
    </>
  );

  const springTransition = { type: "spring" as const, stiffness: 180, damping: 18, mass: 0.1 };

  if (href) {
    return (
      <motion.div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        animate={{ x: position.x, y: position.y }}
        transition={springTransition}
        className="inline-block overflow-visible"
      >
        <a
          id={id}
          href={href}
          target={target}
          rel={rel}
          onClick={onClick}
          className={`${baseStyles} ${className}`}
        >
          {buttonContent}
        </a>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      animate={{ x: position.x, y: position.y }}
      transition={springTransition}
      className="inline-block overflow-visible"
    >
      <button
        id={id}
        type="button"
        onClick={onClick}
        className={`${baseStyles} ${className}`}
      >
        {buttonContent}
      </button>
    </motion.div>
  );
}
