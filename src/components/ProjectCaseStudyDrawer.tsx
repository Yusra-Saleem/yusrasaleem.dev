"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ArrowUpRight,
  GitBranch,
  ShieldCheck,
  Activity,
  Cpu,
  Layers,
  Sparkles,
  ExternalLink,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";
import { ProjectItem } from "../data/projectsData";
import InteractiveButton from "./InteractiveButton";

interface ProjectCaseStudyDrawerProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectCaseStudyDrawer({ project, onClose }: ProjectCaseStudyDrawerProps) {
  // Lock body scroll and listen for ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [project, onClose]);

  if (!project) return null;

  // Custom architectural flow pipeline
  const getArchitectureFlow = (id: string) => {
    switch (id) {
      case "voice-ai-assistant":
        return [
          { step: "01", label: "User Voice Stream", sub: "WebRTC Bidirectional Opus Audio" },
          { step: "02", label: "Realtime Inference", sub: "Sub-280ms Low-Latency TTS & LLM" },
          { step: "03", label: "Async FastAPI Runner", sub: "Python Tool Execution Pipeline" },
          { step: "04", label: "PostgreSQL Verification", sub: "Live DB State Validation & Lock" },
        ];
      case "ai-business-automation":
        return [
          { step: "01", label: "Webhook Event Stream", sub: "Inbound Email & Ticket Ingestion" },
          { step: "02", label: "Multi-Agent Swarm", sub: "OpenAI Agents SDK Dynamic Routing" },
          { step: "03", label: "Self-Healing Fallback", sub: "Automated Error Triage Interceptor" },
          { step: "04", label: "Zero-Defect Dispatch", sub: "End-to-End Task Resolution" },
        ];
      case "car-dealership-saas":
        return [
          { step: "01", label: "Next.js Portal Client", sub: "Role-Gated Booking & Admin UI" },
          { step: "02", label: "FastAPI REST Engine", sub: "Pydantic Validated Microservices" },
          { step: "03", label: "PostgreSQL ACID Store", sub: "Inventory Locking & Stripe Webhooks" },
          { step: "04", label: "AWS Container Cloud", sub: "Live Production Cluster Deployment" },
        ];
      case "ai-book-docusaurus-rag":
      default:
        return [
          { step: "01", label: "Markdown Ingestion", sub: "Semantic Chunking & Metadata Parse" },
          { step: "02", label: "Qdrant Vector DB", sub: "Hybrid Dense + Sparse Indexing" },
          { step: "03", label: "RAG Verification Gate", sub: "Zero-Hallucination Guardrails" },
          { step: "04", label: "Citation Generation", sub: "Exact Page References & Confidence" },
        ];
    }
  };

  const archSteps = getArchitectureFlow(project.id);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex justify-end">
        
        {/* Backdrop Overlay with Click-to-Dismiss */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
        />

        {/* The Slide-Over Editorial Drawer Panel */}
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          exit={{ x: "100%" }}
          transition={{
            type: "spring",
            stiffness: 350,
            damping: 32,
            mass: 0.85,
          }}
          className="relative w-full sm:max-w-xl md:max-w-2xl h-full bg-[#091E1C] border-l border-secondary/30 p-6 sm:p-8 md:p-10 shadow-2xl flex flex-col justify-between overflow-y-auto z-50 text-foreground font-sans"
        >
          {/* Top Metallic Border Accent */}
          <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#E09A8D]/70 via-[#7FAEA6]/70 to-transparent pointer-events-none" />

          {/* Drawer Body Container */}
          <div className="space-y-8">
            
            {/* 1. TOP INSPECTOR HEADER BAR */}
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#E09A8D] animate-pulse" />
                <span className="font-space font-bold text-xs uppercase tracking-widest text-[#E09A8D]">
                  CASE STUDY • SYSTEM INSPECTOR
                </span>
              </div>

              {/* Close Button with ESC label */}
              <button
                onClick={onClose}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-white/15 bg-white/5 hover:bg-white/10 text-secondary hover:text-white transition-colors cursor-pointer text-xs font-mono"
              >
                <span>CLOSE [ESC]</span>
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* 2. PROJECT HERO TITLES */}
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#7FAEA6] font-semibold block">
                {project.category}
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-space uppercase tracking-tight text-foreground leading-[1.08]">
                <span>{project.titlePart1} </span>
                <span className="text-[#E09A8D]">{project.titlePart2}</span>
              </h2>
            </div>

            {/* 3. SCREENSHOT PREVIEW HERO */}
            <div className="relative w-full h-48 sm:h-64 rounded-xl overflow-hidden border border-secondary/25 bg-[#071715] shadow-lg group">
              <img
                src={project.screenshot}
                alt={project.titlePart1}
                className="w-full h-full object-cover object-top brightness-90 group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#091E1C] via-transparent to-transparent opacity-60" />
            </div>

            {/* 4. LIVE RESULTS & IMPACT METRICS */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-space font-bold uppercase tracking-widest text-secondary">
                  <TrendingUp className="w-4 h-4 text-[#7FAEA6]" />
                  <span>MEASURED PRODUCTION RESULTS</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {project.metrics.map((metric, mIdx) => (
                    <div
                      key={mIdx}
                      className="p-3.5 rounded-lg bg-[#0F2826]/80 border border-secondary/25 flex flex-col justify-between"
                    >
                      <span className="text-[9.5px] font-mono uppercase tracking-wider text-secondary/70 mb-1">
                        {metric.label}
                      </span>
                      <div className="text-2xl sm:text-3xl font-black font-space tracking-tight text-[#E09A8D] leading-none my-1">
                        {metric.value}
                      </div>
                      <span className="text-[10px] font-sans text-secondary/60 mt-1">
                        {metric.sub}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 5. INTERACTIVE SYSTEM ARCHITECTURE FLOW */}
            <div className="space-y-3 p-5 rounded-xl bg-[#0F2826]/70 border border-secondary/25">
              <div className="flex items-center gap-2 text-xs font-space font-bold uppercase tracking-widest text-secondary">
                <Cpu className="w-4 h-4 text-[#7FAEA6]" />
                <span>SYSTEM ARCHITECTURE &amp; DATA PIPELINE</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {archSteps.map((step, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-3 rounded-lg bg-[#071917] border border-white/[0.08] flex items-start gap-3"
                  >
                    <span className="font-space font-black text-xs text-[#E09A8D] mt-0.5">
                      {step.step}
                    </span>
                    <div>
                      <h4 className="text-xs font-space font-bold uppercase text-foreground">
                        {step.label}
                      </h4>
                      <p className="text-[11px] font-sans text-secondary/70 mt-0.5">
                        {step.sub}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 6. THE CORE PROBLEMS & THE ENGINEERED SOLUTION */}
            <div className="grid grid-cols-1 gap-4">
              
              {/* Problem Card */}
              <div className="p-4.5 rounded-xl bg-[#0F2826]/60 border border-white/10 space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E09A8D]" />
                  <span className="text-[10.5px] font-mono uppercase tracking-widest text-[#E09A8D] font-bold">
                    THE BUSINESS BOTTLENECK
                  </span>
                </div>
                <p className="text-sm font-sans text-foreground/85 leading-relaxed pt-1">
                  {project.problem}
                </p>
              </div>

              {/* Solution Card */}
              <div className="p-4.5 rounded-xl bg-[#0F2826]/60 border border-secondary/30 space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7FAEA6]" />
                  <span className="text-[10.5px] font-mono uppercase tracking-widest text-[#7FAEA6] font-bold">
                    THE ENGINEERED SOLUTION
                  </span>
                </div>
                <p className="text-sm font-sans text-foreground/90 leading-relaxed font-medium pt-1">
                  {project.solution}
                </p>
              </div>

            </div>

            {/* 7. TECH STACK PILLS */}
            <div className="space-y-2.5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-secondary/70 font-semibold block">
                ENGINEERED WITH:
              </span>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech.name}
                    className="px-3 py-1 rounded bg-[#071917] border border-white/15 text-xs font-space font-medium text-foreground"
                    style={{ borderColor: `${tech.color}40` }}
                  >
                    <span style={{ color: tech.color }} className="mr-1.5">●</span>
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* 8. FOOTER ACTION BUTTONS */}
          <div className="pt-6 mt-8 border-t border-white/[0.08] flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {project.liveUrl && (
                <InteractiveButton
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  label="Live System"
                  hoverLabel="Launch App ↗"
                  variant="primary"
                  icon={<ArrowUpRight className="w-3.5 h-3.5" />}
                  className="px-5 py-2.5 text-xs min-w-[130px]"
                />
              )}
              {project.githubUrl && (
                <InteractiveButton
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  label="Source Code"
                  hoverLabel="View GitHub →"
                  variant="secondary"
                  icon={<GitBranch className="w-3.5 h-3.5" />}
                  className="px-5 py-2.5 text-xs min-w-[130px]"
                />
              )}
            </div>

            <span className="text-[10px] font-mono text-secondary/50 uppercase tracking-widest hidden sm:inline">
              VERIFIED ARCHITECTURE
            </span>
          </div>

        </motion.div>

      </div>
    </AnimatePresence>
  );
}
