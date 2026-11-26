"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronDown, Check } from "lucide-react";
import InteractiveButton from "@/components/ui/InteractiveButton";
import { InfiniteSlider } from "@/components/ui/InfiniteSlider";

interface BuildCapability {
  id: string;
  num: string;
  title: string;
  tagline: string;
  badge: string;
  accent: string;
  bullets: string[];
  stack: string;
}

const capabilities: BuildCapability[] = [
  {
    id: "agentic",
    num: "01",
    title: "Agentic AI & Autonomous FTEs",
    tagline: "Multi-agent orchestration with tool calling & self-healing workflows.",
    badge: "OpenAI Agents SDK",
    accent: "#E09A8D",
    bullets: [
      "OpenAI Agents SDK & Model Context Protocol (MCP)",
      "Automated multi-step tool calling & email workflows",
      "Self-healing error interceptors for 99.9% reliability"
    ],
    stack: "OpenAI Agents SDK • MCP • Python • FastAPI • n8n"
  },
  {
    id: "voice",
    num: "02",
    title: "Real-Time Voice AI Agents",
    tagline: "Sub-300ms WebRTC conversational voice bots with live DB queries.",
    badge: "WebRTC Streaming",
    accent: "#7FAEA6",
    bullets: [
      "Sub-300ms low-latency WebRTC audio stream",
      "Voice-driven database queries & function calling",
      "Human-like conversational intelligence for customer support"
    ],
    stack: "OpenAI Realtime API • WebRTC • FastAPI • Python"
  },
  {
    id: "rag",
    num: "03",
    title: "RAG & Knowledge Systems",
    tagline: "Chat with enterprise data across PDFs, databases, books, and technical docs.",
    badge: "Qdrant Vector DB",
    accent: "#7FAEA6",
    bullets: [
      "Hybrid semantic vector search & context engineering",
      "Citation-verified answers with zero hallucinations",
      "Enterprise documentation search chatbots & knowledge bases"
    ],
    stack: "Qdrant DB • Docusaurus • Python • LangChain"
  },
  {
    id: "saas",
    num: "04",
    title: "Production SaaS & MVP Development",
    tagline: "Idea to deployed AWS cloud prototype & full-stack web platforms.",
    badge: "Next.js 15 + AWS",
    accent: "#E09A8D",
    bullets: [
      "Next.js 15 App Router & Tailwind CSS architecture",
      "FastAPI REST APIs & PostgreSQL database transactions",
      "AWS EC2 cloud deployment with role-gated auth security"
    ],
    stack: "Next.js 15 • FastAPI • PostgreSQL • AWS EC2"
  }
];

const TECH_ROW_1: string[] = [
  "OpenAI Agents SDK",
  "Model Context Protocol (MCP)",
  "LangGraph Orchestration",
  "CrewAI Multi-Agent",
  "Microsoft AutoGen",
  "LangChain",
  "LlamaIndex",
  "Claude 3.7 Sonnet (Anthropic)",
  "DeepSeek R1 (Reasoning)",
  "Tool Calling & Function Execution",
  "Multi-Agent Swarm Architectures",
  "Ollama & Local LLMs",
  "Hugging Face Transformers",
  "LoRA & PEFT Fine-Tuning",
  "Prompt Engineering & Few-Shot CoT",
  "Agent Memory & State Machines",
  "vLLM High-Throughput Inference",
  "Groq Ultra-Low Latency LPU"
];

const TECH_ROW_2: string[] = [
  "OpenAI Realtime API",
  "WebRTC Audio Streaming",
  "LiveKit Audio Infrastructure",
  "ElevenLabs Voice AI & TTS",
  "Whisper STT (Speech-to-Text)",
  "Twilio Voice & Telephony",
  "Qdrant Vector Database",
  "Pinecone Vector Indexing",
  "pgvector (PostgreSQL)",
  "ChromaDB Embeddings",
  "Milvus Vector Engine",
  "Hybrid Search (Dense + BM25)",
  "Cohere Rerank & Cross-Encoders",
  "Semantic Caching (Redis)",
  "Knowledge Graphs (Neo4j)",
  "Hallucination Guardrails & Ragas",
  "Document Ingestion & Chunking",
  "Docusaurus Enterprise Knowledge Bases"
];

const TECH_ROW_3: string[] = [
  "Next.js 15 (App Router)",
  "React 19 (Server Components)",
  "TypeScript",
  "Python 3.12",
  "FastAPI (Async REST)",
  "Node.js & Express",
  "PostgreSQL & Complex Queries",
  "Supabase & Row Level Security (RLS)",
  "Redis In-Memory Database",
  "Prisma & SQLAlchemy ORMs",
  "Docker & Containerization",
  "AWS (EC2, S3, Lambda)",
  "Tailwind CSS 4",
  "RESTful & GraphQL APIs",
  "WebSockets & Realtime SSE",
  "Pydantic V2 Data Validation",
  "n8n Automation & Webhooks",
  "Stripe Subscriptions & Billing",
  "GitHub Actions CI/CD"
];

export default function WhatIBuild() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="what-i-build" className="w-full relative py-14 md:py-20 px-4 md:px-6 max-w-6xl mx-auto text-foreground font-sans">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative z-10">
        
        {/* LEFT COLUMN: EXECUTIVE HEADING & ACTION */}
        <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-28">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-10 h-[1px] bg-gradient-to-r from-transparent to-[#E09A8D]" />
            <span className="text-[11px] font-space font-bold uppercase tracking-[0.3em] text-[#E09A8D]">
              CAPABILITY MATRIX
            </span>
            <div className="w-10 h-[1px] bg-gradient-to-l from-transparent to-[#E09A8D]" />
          </div>

          <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase font-space leading-tight">
            <span className="text-foreground">WHAT I </span>
            <span className="text-[#E09A8D]">BUILD </span>
            <span className="text-foreground">&amp; </span>
            <span className="text-[#7FAEA6]">DEPLOY</span>
          </h2>

          <p className="text-xs md:text-sm text-foreground/75 font-sans leading-relaxed max-w-md">
            Production-grade AI systems, real-time voice agents, RAG engines, and full-stack cloud applications.
          </p>

          <div className="pt-1">
            <InteractiveButton
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
              label="Discuss Architecture"
              hoverLabel="Discuss Architecture ↗"
              variant="primary"
              icon={<ArrowUpRight className="w-4 h-4 stroke-[2.5]" />}
              className="px-6 py-2.5 text-xs min-w-[190px]"
            />
          </div>

          {/* TECH STACK & SKILLS SLIDING MATRIX */}
          <div className="pt-4 border-t border-white/10 space-y-2 w-full max-w-md relative overflow-hidden">
            {/* Left & Right Soft Seamless Feather Overlays */}
            <div className="pointer-events-none absolute left-0 inset-y-0 w-12 bg-gradient-to-r from-[#0B1F1D] to-transparent z-20" />
            <div className="pointer-events-none absolute right-0 inset-y-0 w-12 bg-gradient-to-l from-[#0B1F1D] to-transparent z-20" />

            <div className="flex items-center mb-1.5 px-0.5 relative z-10">
              <span className="text-[10.5px] font-space font-semibold uppercase tracking-[0.2em] text-[#7FAEA6] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7FAEA6]/70 border border-[#7FAEA6]" />
                TECH STACK &amp; SKILLS
              </span>
            </div>

            {/* Row 1: Agentic AI & Swarms */}
            <div className="relative w-full overflow-hidden">
              <InfiniteSlider
                gap={8}
                duration={120}
                className="w-full py-0.5"
              >
                {TECH_ROW_1.map((tech, idx) => (
                  <span
                    key={`r1-${idx}`}
                    className="inline-flex items-center px-3 py-1.5 rounded-[4px] bg-[#071917]/90 hover:bg-[#0E2825] border border-white/[0.08] hover:border-[#7FAEA6]/40 text-[11px] sm:text-[11.5px] font-sans font-medium text-foreground/85 hover:text-white transition-colors duration-150 shrink-0 cursor-default select-none tracking-normal"
                  >
                    {tech}
                  </span>
                ))}
              </InfiniteSlider>
            </div>

            {/* Row 2: Voice AI, Audio & RAG */}
            <div className="relative w-full overflow-hidden">
              <InfiniteSlider
                gap={8}
                duration={130}
                className="w-full py-0.5"
              >
                {TECH_ROW_2.map((tech, idx) => (
                  <span
                    key={`r2-${idx}`}
                    className="inline-flex items-center px-3 py-1.5 rounded-[4px] bg-[#071917]/90 hover:bg-[#0E2825] border border-white/[0.08] hover:border-[#7FAEA6]/40 text-[11px] sm:text-[11.5px] font-sans font-medium text-foreground/85 hover:text-white transition-colors duration-150 shrink-0 cursor-default select-none tracking-normal"
                  >
                    {tech}
                  </span>
                ))}
              </InfiniteSlider>
            </div>

            {/* Row 3: Full-Stack SaaS, Backend & Cloud */}
            <div className="relative w-full overflow-hidden">
              <InfiniteSlider
                gap={8}
                duration={115}
                className="w-full py-0.5"
              >
                {TECH_ROW_3.map((tech, idx) => (
                  <span
                    key={`r3-${idx}`}
                    className="inline-flex items-center px-3 py-1.5 rounded-[4px] bg-[#071917]/90 hover:bg-[#0E2825] border border-white/[0.08] hover:border-[#7FAEA6]/40 text-[11px] sm:text-[11.5px] font-sans font-medium text-foreground/85 hover:text-white transition-colors duration-150 shrink-0 cursor-default select-none tracking-normal"
                  >
                    {tech}
                  </span>
                ))}
              </InfiniteSlider>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: HIGH-CONVERTING EXECUTIVE DROPDOWNS */}
        <div className="lg:col-span-7 space-y-3.5">
          {capabilities.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.id}
                className={`relative bg-[#040E0D]/95 border rounded-[6px] transition-all duration-300 shadow-2xl backdrop-blur-xl overflow-hidden ${
                  isOpen
                    ? "border-white/30 bg-[#061816]/95 ring-1 ring-white/10"
                    : "border-white/10 hover:border-white/20"
                }`}
              >
                {/* LEFT ACCENT BAR */}
                <div
                  className="absolute top-0 left-0 bottom-0 w-[3px] rounded-l-[6px] transition-all duration-300"
                  style={{
                    backgroundColor: item.accent,
                    opacity: isOpen ? 1 : 0.4
                  }}
                />

                {/* ACCORDION HEADER BUTTON */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-4 md:p-5 flex items-center justify-between text-left group cursor-pointer pl-5 pr-5"
                >
                  <div className="flex items-start md:items-center gap-3.5 pr-2">
                    <span
                      className="font-mono text-xs font-bold px-2.5 py-1 rounded border transition-colors shrink-0 mt-0.5 md:mt-0"
                      style={{
                        color: isOpen ? item.accent : "rgba(255,255,255,0.4)",
                        borderColor: isOpen ? `${item.accent}40` : "rgba(255,255,255,0.12)",
                        backgroundColor: isOpen ? `${item.accent}10` : "rgba(255,255,255,0.03)"
                      }}
                    >
                      {item.num}
                    </span>

                    <div>
                      <h3 className="text-base md:text-lg font-bold font-space uppercase text-foreground group-hover:text-white transition-colors tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-xs text-foreground/60 font-sans mt-0.5 group-hover:text-foreground/80 transition-colors">
                        {item.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0 ml-2">
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="p-1.5 rounded-full border border-white/15 text-foreground/60 group-hover:text-white"
                      style={{
                        borderColor: isOpen ? `${item.accent}50` : undefined,
                        color: isOpen ? item.accent : undefined
                      }}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </div>
                </button>

                {/* ACCORDION EXPANDABLE BODY */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden border-t border-white/10 bg-black/40 pl-5 pr-5"
                    >
                      <div className="p-4 md:p-5">
                        
                        {/* BULLET HIGHLIGHTS */}
                        <div className="space-y-2.5 font-sans text-xs">
                          {item.bullets.map((b, bIdx) => (
                            <div key={bIdx} className="flex items-center gap-2.5 text-foreground/90">
                              <Check className="w-3.5 h-3.5 shrink-0" style={{ color: item.accent }} />
                              <span className="text-[12px] leading-snug">{b}</span>
                            </div>
                          ))}
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
}
