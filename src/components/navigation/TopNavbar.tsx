"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface NavItem {
  id: string;
  label: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: "hero", label: "Overview" },
  { id: "solutions", label: "About" },
  { id: "services", label: "Services" },
  { id: "build", label: "Stack" },
  { id: "projects", label: "Projects" },
  { id: "testimonials", label: "Reviews" },
];

export default function TopNavbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);

    // High performance IntersectionObserver for active section tracking (0% scroll overhead)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0.05 }
    );

    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    let ticking = false;
    let lastScrolled = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const isPast = scrollY > 20;
          if (isPast !== lastScrolled) {
            lastScrolled = isPast;
            setScrolled(isPast);
          }

          // Direct DOM transform update without triggering React component re-render
          if (progressBarRef.current) {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = totalHeight > 0 ? Math.min(1, Math.max(0, scrollY / totalHeight)) : 0;
            progressBarRef.current.style.transform = `scaleX(${progress})`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.getElementById(id);
    if (targetElement) {
      const yOffset = -80;
      const y = targetElement.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  if (!mounted) return null;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
        scrolled
          ? "bg-[#051513]/94 backdrop-blur-md py-3.5 sm:py-4 shadow-[0_6px_35px_rgba(0,0,0,0.55)] border-b border-[#7FAEA6]/15"
          : "bg-transparent py-5 sm:py-6"
      }`}
    >
      {/* Subtle Theme Scroll Progress Line — Zero-jank GPU Transform */}
      <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-transparent overflow-hidden pointer-events-none">
        <div
          ref={progressBarRef}
          className="h-full w-full bg-gradient-to-r from-transparent via-[#7FAEA6] via-[#E09A8D] to-transparent origin-left will-change-transform"
          style={{ transform: "scaleX(0)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between">
        
        {/* 1. LEFT: THEME CIRCULAR MONOGRAM BADGE + DIVIDER + YUSRA BRAND */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "hero")}
          className="flex items-center gap-3.5 group select-none cursor-pointer"
        >
          {/* Circular Monogram Badge in Theme Mineral Sage & Coral */}
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#7FAEA6]/35 group-hover:border-[#E09A8D] transition-colors flex items-center justify-center shrink-0 bg-[#071917]/90 shadow-sm">
            <svg
              viewBox="0 0 24 24"
              className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-[#7FAEA6] group-hover:text-[#E09A8D] transition-colors fill-none stroke-current stroke-[1.8] stroke-linecap-round stroke-linejoin-round"
            >
              <path d="M7 5.5L12 13L17 5.5" />
              <path d="M12 13V20" />
              <path d="M9 5.5L12 11L15 5.5" strokeWidth="1" opacity="0.6" />
            </svg>
          </div>

          {/* Thin Vertical Theme Divider */}
          <span className="h-5 w-[1.5px] bg-[#7FAEA6]/30" />

          {/* Clean Tracked-Out Brand Name */}
          <span className="font-space font-extrabold text-[13px] sm:text-[14.5px] tracking-[0.38em] text-[#E5EBEA] uppercase group-hover:text-[#7FAEA6] transition-colors">
            YUSRA
          </span>
        </a>

        {/* 2. CENTER: FLOATING PILL CAPSULE WITH 6 ONE-WORD SECTIONS & COMFORTABLE SIZE */}
        <nav className="hidden lg:flex items-center bg-[#051513]/90 border border-[#7FAEA6]/30 rounded-full p-1.5 shadow-[0_4px_25px_rgba(5,21,19,0.45)] backdrop-blur-md">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`relative px-4 sm:px-4.5 py-1.5 sm:py-2 text-[12.5px] sm:text-[13.5px] font-sans font-medium transition-colors duration-200 select-none cursor-pointer shrink-0 ${
                  isActive ? "text-[#0B1F1D] font-bold" : "text-[#E5EBEA]/80 hover:text-[#7FAEA6]"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="navbarActivePill"
                    className="absolute inset-0 bg-[#E09A8D] rounded-full -z-10 shadow-sm"
                    transition={{ type: "spring", stiffness: 450, damping: 35 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* 3. RIGHT: THEME DIVIDER + CONTACT PILL BUTTON */}
        <div className="hidden lg:flex items-center gap-3.5">
          <span className="h-5 w-[1.5px] bg-[#7FAEA6]/30" />
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className="rounded-full border border-[#7FAEA6]/40 hover:border-[#E09A8D] bg-[#7FAEA6]/10 hover:bg-[#E09A8D]/15 px-5 sm:px-6 py-2 text-[12.5px] sm:text-[13.5px] font-sans font-medium text-[#E5EBEA] hover:text-[#E09A8D] transition-all flex items-center gap-1.5 group select-none cursor-pointer shadow-xs"
          >
            <span>Contact</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#7FAEA6] group-hover:text-[#E09A8D]" />
          </a>
        </div>

        {/* MOBILE MENU TOGGLE BUTTON */}
        <div className="flex items-center gap-3 lg:hidden">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className="rounded-full border border-[#7FAEA6]/35 bg-[#7FAEA6]/10 px-4 py-1.5 text-xs font-sans font-medium text-[#E5EBEA] flex items-center gap-1"
          >
            <span>Contact</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2] text-[#7FAEA6]" />
          </a>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-9 h-9 rounded-full border border-[#7FAEA6]/35 bg-[#051513] flex flex-col items-center justify-center gap-1.5 text-[#7FAEA6] hover:border-[#E09A8D] hover:text-[#E09A8D] transition-colors"
            aria-label="Toggle Navigation"
          >
            <span
              className={`w-4 h-[1.5px] bg-current transition-transform duration-200 ${
                isMobileMenuOpen ? "rotate-45 translate-y-[3px]" : ""
              }`}
            />
            <span
              className={`w-4 h-[1.5px] bg-current transition-transform duration-200 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-[3px]" : ""
              }`}
            />
          </button>
        </div>

      </div>

      {/* MOBILE DROPDOWN CAPSULE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden max-w-sm mx-auto px-4 pt-3 pb-2"
          >
            <div className="bg-[#051513]/95 border border-[#7FAEA6]/25 rounded-2xl p-2.5 shadow-2xl backdrop-blur-xl flex flex-col gap-1.5">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className={`px-4 py-2.5 text-[13px] font-sans font-medium rounded-xl transition-colors flex items-center justify-between ${
                      isActive
                        ? "bg-[#E09A8D] text-[#0B1F1D] font-bold"
                        : "text-[#E5EBEA]/80 hover:text-[#7FAEA6] hover:bg-white/5"
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#0B1F1D]" />}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}
