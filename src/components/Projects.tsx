"use client";

import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  X,
  ArrowUpRight,
  GitBranch,
  ExternalLink,
} from "lucide-react";

import { PROJECTS_DATA, ProjectItem, TechStackItem } from "../data/projectsData";
import InteractiveButton from "./InteractiveButton";

export default function Projects() {
  const [projects] = useState<ProjectItem[]>(PROJECTS_DATA);
  const [zoomImg, setZoomImg] = useState<string | null>(null);

  return (
    <section className="w-full relative py-12 md:py-16 px-4 md:px-8 max-w-6xl mx-auto text-foreground overflow-hidden">
      {/* SECTION HEADER */}
      <div className="flex flex-col items-center justify-center text-center mb-14 md:mb-18 relative z-10">
        <div className="flex items-center gap-3 mb-2.5">
          <div className="w-10 h-[1px] bg-gradient-to-r from-transparent to-[#7FAEA6]" />
          <span className="text-[11px] font-space font-bold uppercase tracking-[0.3em] text-[#7FAEA6]">
            FEATURED PROJECTS
          </span>
          <div className="w-10 h-[1px] bg-gradient-to-l from-transparent to-[#7FAEA6]" />
        </div>

        <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase font-space">
          <span className="text-foreground">FEATURED </span>
          <span className="text-[#E09A8D]">PROJECTS</span>
          <br className="hidden md:inline" />
          <span className="text-foreground"> &amp; </span>
          <span className="text-[#7FAEA6]">AGENTIC BUILDS</span>
        </h2>
      </div>

      {/* PROJECTS LIST */}
      <div className="space-y-20 md:space-y-26 relative z-10">
        {projects.map((project) => (
          <div key={project.id} className="relative w-full">
            {project.mockupStyle === "isometric-3d-tilted-deck" && (
              <Isometric3DTiltedDeckMockup
                project={project}
                onZoom={(imgUrl) => setZoomImg(imgUrl)}
              />
            )}

            {project.mockupStyle === "laptop-with-mobile-duo" && (
              <LaptopWithMobileDuoMockup
                project={project}
                onZoom={(imgUrl) => setZoomImg(imgUrl)}
              />
            )}

            {project.mockupStyle === "laptop-with-floating-papers" && (
              <LaptopWithFloatingPapersMockup
                project={project}
                onZoom={(imgUrl) => setZoomImg(imgUrl)}
              />
            )}

            {project.mockupStyle === "curved-3d-cyber-hud" && (
              <Curved3DCyberHudMockup
                project={project}
                onZoom={(imgUrl) => setZoomImg(imgUrl)}
              />
            )}
          </div>
        ))}
      </div>

      {/* MORE PROJECTS ACTION BUTTON */}
      <div className="flex flex-col items-center justify-center pt-12 md:pt-14 relative z-10">
        <div className="w-full max-w-md h-[1px] bg-gradient-to-r from-transparent via-[#7FAEA6]/30 to-transparent mb-6" />
        <InteractiveButton
          href="https://github.com/Yusra-Saleem"
          target="_blank"
          rel="noreferrer"
          label="Explore More Projects"
          hoverLabel="Browse All Repos ↗"
          variant="primary"
          icon={<ArrowUpRight className="w-4 h-4 stroke-[2.5]" />}
          className="px-8 py-3.5 min-w-[210px] text-xs shadow-[0_0_30px_rgba(224,154,141,0.25)]"
        />
        <span className="text-[10px] font-space font-medium text-foreground/50 uppercase tracking-widest mt-3">
          DISCOVER ALL AGENTIC SYSTEM REPOSITORIES ON GITHUB
        </span>
      </div>

      {/* LIGHTBOX FOR FULL VIEW ON CLICK */}
      <AnimatePresence>
        {zoomImg && (
          <div
            onClick={() => setZoomImg(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg flex items-center justify-center p-4 cursor-pointer"
          >
            <button
              onClick={() => setZoomImg(null)}
              className="absolute top-6 right-6 text-white bg-white/10 p-2.5 rounded-full hover:bg-white/20"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative max-w-5xl max-h-[85vh] w-full h-full rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center">
              <Image src={zoomImg} alt="Screenshot View" fill className="object-contain" />
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

interface ComponentProps {
  project: ProjectItem;
  onZoom: (imgUrl: string) => void;
}

/* TECH STACK INLINE: CLEAN TYPOGRAPHY, NO ICONS */
function TechStackInline({ items }: { items: TechStackItem[] }) {
  return (
    <div className="pt-1.5 font-sans">
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 text-xs">
        <span className="text-[10.5px] sm:text-[11px] uppercase tracking-wider text-[#7FAEA6] font-bold font-space shrink-0 mr-1">
          TECH ARCHITECTURE:
        </span>
        {items.map((tech, idx) => (
          <span
            key={tech.name}
            className="inline-flex items-center font-medium text-foreground/85 font-sans text-[12px] sm:text-[12.5px]"
          >
            <span>{tech.name}</span>
            {idx < items.length - 1 && (
              <span className="text-secondary/40 ml-2 mr-0.5 font-normal">•</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ACTION BUTTONS: DIRECT LIVE LINK & REPOSITORY BUTTONS (NO CASE STUDY BUTTON) */
function ProjectActionButtons({
  project,
}: {
  project: ProjectItem;
}) {
  return (
    <div className="w-full pt-2 space-y-2 z-10">
      {/* Light Neon Divider Line */}
      <div className="w-full h-[1px] bg-gradient-to-r from-[#7FAEA6]/40 via-[#E09A8D]/35 to-transparent shadow-[0_0_8px_rgba(127,174,166,0.3)] opacity-60 pointer-events-none" />

      <div className="flex flex-wrap items-center gap-3 pt-0.5">
        {project.liveUrl && (
          <InteractiveButton
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            label="Live Link"
            hoverLabel="Launch App ↗"
            variant="primary"
            icon={<ExternalLink className="w-3.5 h-3.5" />}
            className="px-5 py-2.5 min-w-[135px]"
          />
        )}
        {project.githubUrl && (
          <InteractiveButton
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            label="Resource"
            hoverLabel="View Code →"
            variant="secondary"
            icon={<GitBranch className="w-3.5 h-3.5" />}
            className="px-5 py-2.5 min-w-[135px]"
          />
        )}
      </div>
    </div>
  );
}

function ProjectDetails({
  project,
  reverseTitleColors = false,
  breakTitle = false,
}: {
  project: ProjectItem;
  reverseTitleColors?: boolean;
  breakTitle?: boolean;
}) {
  const color1 = reverseTitleColors ? "#7FAEA6" : "#E09A8D";
  const color2 = reverseTitleColors ? "#E09A8D" : "#7FAEA6";

  return (
    <div className="space-y-3.5">
      {/* Category / Subtitle Badge */}
      {project.category && (
        <div>
          <span className="inline-block text-[10px] sm:text-[10.5px] font-space font-bold uppercase tracking-[0.2em] text-[#7FAEA6] bg-[#7FAEA6]/10 px-2.5 py-1 rounded border border-[#7FAEA6]/20">
            {project.category}
          </span>
        </div>
      )}

      {/* Main Title */}
      <div>
        <h3 className="text-3xl sm:text-4xl font-black tracking-tight font-space uppercase leading-tight">
          <span style={{ color: color1 }}>{project.titlePart1} </span>
          {breakTitle && <br />}
          <span style={{ color: color2 }}>{project.titlePart2}</span>
        </h3>
      </div>

      {/* PROBLEM & SOLUTION: Clean, Crisp, Highly Legible */}
      <div className="space-y-2.5 font-sans pt-1">
        <p className="text-[13.5px] sm:text-sm text-foreground/90 leading-relaxed font-sans">
          <span className="font-space font-bold uppercase tracking-wider text-[#E09A8D] text-xs mr-2 select-none inline-block">
            PROBLEM:
          </span>
          <span className="text-foreground/85 font-normal">
            {project.problem}
          </span>
        </p>

        <p className="text-[13.5px] sm:text-sm text-foreground leading-relaxed font-sans">
          <span className="font-space font-bold uppercase tracking-wider text-[#7FAEA6] text-xs mr-2 select-none inline-block">
            SOLUTION:
          </span>
          <span className="text-foreground font-medium">
            {project.solution}
          </span>
        </p>
      </div>

      {/* TECH ARCHITECTURE INLINE (CLEAN TEXT WITHOUT ICONS) */}
      <TechStackInline items={project.techStack} />

      {/* DIRECT ACTION BUTTONS (NO CASE STUDY) */}
      <ProjectActionButtons project={project} />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* STYLE 1: 3D ISOMETRIC DOUBLE SCREEN DECK                                   */
/* -------------------------------------------------------------------------- */
function Isometric3DTiltedDeckMockup({ project, onZoom }: ComponentProps) {
  const secondaryImg = project.secondaryScreenshot || project.screenshot;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
      <div className="lg:col-span-7 relative group perspective-2000 py-3">

        {/* 3D Tilted Double Screen Stack */}
        <div className="relative mx-auto transform lg:rotate-x-[20deg] lg:-rotate-y-[18deg] lg:rotate-z-[4deg] transition-all duration-700 preserve-3d">
          <div className="absolute -inset-3 bg-gradient-to-tr from-[#7FAEA6]/30 via-[#E09A8D]/20 to-transparent rounded-2xl blur-xl opacity-75" />

          {/* BACK SECONDARY SCREEN */}
          <div
            onClick={() => onZoom(secondaryImg)}
            className="absolute -top-3.5 -left-4 sm:-left-5 w-full max-w-xs sm:max-w-sm mx-auto rounded-xl overflow-hidden bg-[#040e0d] border border-white/15 shadow-[0_15px_35px_rgba(0,0,0,0.8)] opacity-60 transform scale-[0.95] cursor-pointer"
          >
            <div className="bg-[#030a09] px-3 py-1 flex items-center justify-between border-b border-white/5 text-[8.5px] font-space text-foreground/50">
              <span className="text-[#E09A8D] font-bold">SECONDARY CANVAS</span>
            </div>
            <div className="relative aspect-[16/10] w-full bg-slate-950">
              <Image
                src={secondaryImg}
                alt="Background Screen"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
                quality={80}
                className="object-cover object-bottom"
              />
            </div>
          </div>

          {/* FOREGROUND MAIN SCREEN */}
          <div
            onClick={() => onZoom(project.screenshot)}
            className="relative max-w-xs sm:max-w-sm mx-auto rounded-xl overflow-hidden bg-[#061413] border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.9)] z-20 cursor-pointer group/screen"
          >
            <div className="bg-[#040e0d] px-3 py-1.5 flex items-center justify-between border-b border-white/10 text-[9px] font-space text-foreground/50">
              <div className="flex gap-1">
                <span className="w-2 h-2 rounded-full bg-red-500/80" />
                <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
                <span className="w-2 h-2 rounded-full bg-green-500/80" />
              </div>
              <span className="text-[9px] font-space font-bold text-[#7FAEA6] uppercase tracking-widest flex items-center gap-1">
                PREVIEW SCREEN ↗
              </span>
            </div>

            <div className="relative aspect-[16/10] w-full bg-slate-950">
              <Image
                src={project.screenshot}
                alt={project.titlePart1}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
                quality={80}
                className="object-cover object-top"
              />
              <div className="absolute inset-0 mockup-glare pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      <div className="lg:col-span-5">
        <ProjectDetails project={project} />
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* STYLE 2: LAPTOP WITH FLAT MOBILE DUO                                       */
/* -------------------------------------------------------------------------- */
function LaptopWithMobileDuoMockup({ project, onZoom }: ComponentProps) {
  const mobileImg = project.mobileScreenshot || project.screenshot;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
      <div className="lg:col-span-5 order-2 lg:order-1">
        <ProjectDetails project={project} reverseTitleColors />
      </div>

      <div className="lg:col-span-7 order-1 lg:order-2 relative group py-3 pr-6 sm:pr-10">
        <div className="relative max-w-xs sm:max-w-sm mx-auto">
          {/* Laptop Screen */}
          <div
            onClick={() => onZoom(project.screenshot)}
            className="relative rounded-t-xl overflow-hidden bg-[#071312] border border-[#7FAEA6]/40 shadow-[0_15px_45px_rgba(0,0,0,0.8)] p-1.5 pb-0 cursor-pointer"
          >
            <div className="flex justify-between items-center px-2 pb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#030a09] border border-white/20" />
              <span className="text-[8px] font-space text-[#7FAEA6] uppercase tracking-wider font-bold">
                PREVIEW SCREEN ↗
              </span>
            </div>

            <div className="relative aspect-[16/10] w-full rounded-t-lg overflow-hidden bg-slate-950">
              <Image
                src={project.screenshot}
                alt={project.titlePart1}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
                quality={80}
                className="object-cover object-top"
              />
            </div>
          </div>

          {/* Laptop Base Stand */}
          <div className="h-3 w-[104%] -ml-[2%] bg-gradient-to-b from-[#0e211f] to-[#061211] rounded-b-lg border-t border-[#7FAEA6]/30 shadow-md relative flex justify-center items-start">
            <div className="w-14 h-1 bg-black/50 rounded-b-sm" />
          </div>

          {/* Mobile Screen */}
          <div
            onClick={() => onZoom(mobileImg)}
            className="absolute -bottom-4 -right-5 sm:-right-8 w-24 sm:w-30 aspect-[9/19] rounded-[1.5rem] bg-[#050e0d] border-2 border-[#7FAEA6]/60 p-1 shadow-[0_20px_50px_rgba(0,0,0,0.9)] z-20 cursor-pointer"
          >
            <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-8 h-2 bg-black rounded-full z-30 flex items-center justify-center">
              <span className="w-1 h-1 rounded-full bg-slate-900 border border-white/20" />
            </div>

            <div className="relative w-full h-full rounded-[1.1rem] overflow-hidden bg-slate-950">
              <Image
                src={mobileImg}
                alt={`${project.titlePart1} Mobile`}
                fill
                sizes="120px"
                quality={80}
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* STYLE 3: LAPTOP WITH 3 FLOATING PAPER CARDS                                 */
/* -------------------------------------------------------------------------- */
function LaptopWithFloatingPapersMockup({ project, onZoom }: ComponentProps) {
  const topPaperImg = project.paperTopScreenshot || project.screenshot;
  const leftPaperImg = project.paperLeftScreenshot || project.screenshot;
  const rightPaperImg = project.paperRightScreenshot || project.screenshot;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
      <div className="lg:col-span-7 relative group perspective-2000 py-6 px-3">

        {/* Floating Paper Card 1 */}
        <div
          onClick={() => onZoom(topPaperImg)}
          className="absolute top-2 right-1 sm:right-4 w-28 sm:w-36 bg-[#091A18] border border-[#7FAEA6]/40 rounded-lg p-1.5 shadow-[0_12px_30px_rgba(0,0,0,0.8)] z-10 transform rotate-x-[15deg] -rotate-y-[15deg] rotate-z-[4deg] cursor-pointer"
        >
          <div className="text-[8px] font-space text-[#7FAEA6] font-bold uppercase tracking-wider mb-1">
            SCREEN MOCKUP
          </div>
          <div className="relative aspect-[16/9] w-full rounded overflow-hidden bg-slate-950">
            <Image src={topPaperImg} alt="Paper Card Top" fill sizes="(max-width: 640px) 100vw, 200px" quality={80} className="object-cover object-center" />
          </div>
        </div>

        {/* Center Laptop */}
        <div className="relative max-w-xs sm:max-w-sm mx-auto transform lg:rotate-x-[22deg] lg:-rotate-y-[18deg] lg:rotate-z-[4deg] transition-all duration-700 preserve-3d z-20">
          <div className="absolute -inset-3 bg-gradient-to-tr from-[#7FAEA6]/30 via-[#E09A8D]/20 to-transparent rounded-2xl blur-xl opacity-75" />

          <div
            onClick={() => onZoom(project.screenshot)}
            className="relative rounded-t-xl overflow-hidden bg-[#061413] border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.9)] p-1.5 pb-0 cursor-pointer"
          >
            <div className="flex justify-between items-center px-2 pb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-900 border border-white/20" />
              <span className="text-[8px] font-space text-[#7FAEA6] uppercase tracking-wider font-bold">
                PREVIEW SCREEN ↗
              </span>
            </div>

            <div className="relative aspect-[16/10] w-full rounded-t-lg overflow-hidden bg-slate-950">
              <Image src={project.screenshot} alt={project.titlePart1} fill sizes="(max-width: 640px) 100vw, 420px" quality={80} className="object-cover object-top" />
            </div>
          </div>

          <div className="h-3 w-[104%] -ml-[2%] bg-gradient-to-b from-[#0d201e] to-[#051110] rounded-b-lg border-t border-[#7FAEA6]/30 shadow-md relative flex justify-center items-start">
            <div className="w-14 h-1 bg-black/60 rounded-b-sm" />
          </div>
        </div>

        {/* Floating Paper Card 2 */}
        <div
          onClick={() => onZoom(leftPaperImg)}
          className="absolute -bottom-4 -left-2 sm:left-1 w-32 sm:w-40 bg-[#091A18] border border-[#E09A8D]/40 rounded-lg p-1.5 shadow-[0_15px_35px_rgba(0,0,0,0.9)] z-30 transform -rotate-x-[10deg] rotate-y-[15deg] -rotate-z-[4deg] cursor-pointer"
        >
          <div className="text-[8px] font-space text-[#E09A8D] font-bold uppercase tracking-wider mb-1">
            WEB SCREEN
          </div>
          <div className="relative aspect-[16/9] w-full rounded overflow-hidden bg-slate-950">
            <Image src={leftPaperImg} alt="Paper Card Left" fill sizes="(max-width: 640px) 100vw, 200px" quality={80} className="object-cover object-bottom" />
          </div>
        </div>

        {/* Floating Paper Card 3 */}
        <div
          onClick={() => onZoom(rightPaperImg)}
          className="absolute -bottom-5 -right-2 sm:right-0 w-32 sm:w-38 bg-[#091A18] border border-[#7FAEA6]/40 rounded-lg p-1.5 shadow-[0_15px_35px_rgba(0,0,0,0.9)] z-30 transform rotate-x-[12deg] -rotate-y-[18deg] rotate-z-[3deg] cursor-pointer"
        >
          <div className="text-[8px] font-space text-[#7FAEA6] font-bold uppercase tracking-wider mb-1">
            DETAIL VIEW
          </div>
          <div className="relative aspect-[16/9] w-full rounded overflow-hidden bg-slate-950">
            <Image src={rightPaperImg} alt="Paper Card Right" fill sizes="(max-width: 640px) 100vw, 200px" quality={80} className="object-cover object-center" />
          </div>
        </div>
      </div>

      <div className="lg:col-span-5">
        <ProjectDetails project={project} />
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* STYLE 4: CURVED 3D CYBER HUD DISPLAY STAGE                                  */
/* -------------------------------------------------------------------------- */
function Curved3DCyberHudMockup({ project, onZoom }: ComponentProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
      <div className="lg:col-span-5">
        <ProjectDetails project={project} breakTitle />
      </div>

      <div className="lg:col-span-7 relative group perspective-2000">
        <div className="relative max-w-xs sm:max-w-sm mx-auto transform lg:rotate-x-[14deg] lg:-rotate-y-[14deg] lg:rotate-z-[2deg] transition-transform duration-700 preserve-3d">
          <div
            onClick={() => onZoom(project.screenshot)}
            className="relative rounded-xl overflow-hidden bg-[#040e0d] border border-[#7FAEA6]/40 shadow-[0_20px_50px_rgba(0,0,0,0.9)] cursor-pointer"
          >
            <div className="bg-[#030a09] px-3 py-1.5 flex items-center justify-between border-b border-white/10 text-[9px] font-space text-foreground/50">
              <span className="text-[#7FAEA6] font-bold uppercase tracking-wider">
                PREDICTIVE RETENTION MONITOR
              </span>
              <span className="text-emerald-400 font-bold">
                VIEW SCREEN ↗
              </span>
            </div>

            <div className="relative aspect-[16/9] w-full bg-slate-950">
              <Image
                src={project.screenshot}
                alt={project.titlePart1}
                fill
                sizes="(max-width: 640px) 100vw, 420px"
                quality={80}
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
