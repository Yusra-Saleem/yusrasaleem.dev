"use client";

import React from "react";

import TopNavbar from "@/components/TopNavbar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import About from "@/components/About";
import Services from "@/components/Services";
import WhatIBuild from "@/components/WhatIBuild";
import Projects from "@/components/Projects";
import BrandReveal from "@/components/BrandReveal";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground relative w-full overflow-x-hidden pb-12">
      
      {/* 1. DUAL NAV WORKSPACE */}
      <TopNavbar />
      <Navbar />

      {/* 2. MAIN CONTAINER */}
      <main className="relative z-10 w-full pt-14">
        
        {/* Section 1: Hero (Overview Intro) */}
        <section id="hero" className="min-h-[72vh] w-full flex items-center justify-center py-6 px-6 md:px-12 border-b border-secondary/5">
          <Hero />
        </section>

        {/* Section 1.5: The Manifesto / Scroll Sequence Hero Transition */}
        <section id="manifesto" className="w-full">
          <Manifesto />
        </section>

        {/* Section 2: Sandbox (Interactive Agents Sandbox) */}
        <section id="solutions" className="min-h-[85vh] w-full flex items-center justify-center py-20 px-6 md:px-12 border-b border-secondary/5">
          <About />
        </section>

        {/* Section 3: Solutions Provided */}
        <section id="services" className="w-full">
          <Services />
        </section>

        {/* Section 4: What I Build & Deploy Matrix */}
        <section id="build" className="w-full flex items-center justify-center py-16 px-6 md:px-12 border-b border-secondary/5">
          <WhatIBuild />
        </section>

        {/* Section 5: Featured Systems (Projects & Case Study Drawer) */}
        <section id="projects" className="min-h-[85vh] w-full flex items-center justify-center py-20 px-6 md:px-12 border-b border-secondary/5">
          <Projects />
        </section>

        {/* Section 5.5: Brand Reveal Showcase (Helmut Inspired) */}
        <section id="reveal" className="w-full">
          <BrandReveal />
        </section>

        {/* Section 6: Verified Client Testimonials & Impact */}
        <section id="testimonials" className="w-full flex items-center justify-center py-10 md:py-14 px-4 md:px-12 border-b border-secondary/5">
          <Testimonials />
        </section>

        {/* Section 7: Direct Contact & Discussion Console */}
        <section id="contact" className="w-full flex items-center justify-center py-16 px-6 md:px-12">
          <Contact />
        </section>

      </main>

      {/* Footer Info */}
      <footer className="w-full border-t border-secondary/15 py-8 px-6 md:px-12 text-xs font-mono text-secondary/70">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="tracking-wide text-center sm:text-left">
            &copy; {new Date().getFullYear()} <span className="text-[#E5EBEA] font-bold">Yusra Saleem</span> • Autonomous Systems &amp; SaaS Architecture
          </p>
          <div className="flex items-center gap-5 text-[11px] uppercase tracking-widest font-bold">
            <a href="https://github.com/Yusra-Saleem" target="_blank" rel="noreferrer" className="hover:text-[#7FAEA6] transition-colors">GitHub</a>
            <span className="text-secondary/30">•</span>
            <a href="https://linkedin.com/in/yusra-saleem" target="_blank" rel="noreferrer" className="hover:text-[#7FAEA6] transition-colors">LinkedIn</a>
            <span className="text-secondary/30">•</span>
            <a href="mailto:yusrasaleem679@gmail.com" className="hover:text-[#E09A8D] transition-colors">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
