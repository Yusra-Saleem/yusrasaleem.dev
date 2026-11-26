"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Instagram,
  Download,
  CheckCircle2,
  ArrowUpRight,
  Copy,
  Check,
  Send,
  Clock,
  Briefcase,
  Layers,
  Globe
} from "lucide-react";
import InteractiveButton from "./InteractiveButton";
import CuteRobot from "./CuteRobot";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [purpose, setPurpose] = useState<"project" | "role">("project");
  const [currentTime, setCurrentTime] = useState<string>("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  // Dynamic Karachi Live Time (UTC+5)
  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Karachi",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
      };
      setCurrentTime(new Intl.DateTimeFormat("en-US", options).format(new Date()));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText("yusrasaleem679@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const intentLabel = purpose === "project" ? "Project Contract" : "Full-Time Hiring";
    setTimeout(() => {
      window.location.href = `mailto:yusrasaleem679@gmail.com?subject=Inquiry [${intentLabel}] from ${form.name}&body=${encodeURIComponent(form.message)}`;
    }, 600);
  };

  return (
    <section id="contact" className="w-full relative py-12 md:py-16 px-4 md:px-6 max-w-5xl mx-auto text-foreground font-sans">

      {/* ══════════════════════════════════════════════════════════════════════ */}
      {/*  THEME SECTION HEADER                                                  */}
      {/* ══════════════════════════════════════════════════════════════════════ */}
      <div className="flex flex-col items-center justify-center text-center mb-12 md:mb-16 relative z-10">
        <div className="flex items-center gap-3 mb-2.5">
          <div className="w-10 h-[1px] bg-gradient-to-r from-transparent via-[#E09A8D] to-[#E09A8D]" />
          <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-[#E09A8D]">
            CONNECT • DIRECT INBOX
          </span>
          <div className="w-10 h-[1px] bg-gradient-to-l from-transparent via-[#E09A8D] to-[#E09A8D]" />
        </div>

        <h2 className="text-2xl md:text-4xl font-black tracking-tight uppercase font-space">
          <span className="text-foreground">LET'S BUILD </span>
          <span className="text-[#E09A8D]">YOUR </span>
          <span className="text-[#7FAEA6]">NEXT SYSTEM</span>
        </h2>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════ */}
      {/*  MAIN CARD CONTAINER WITH CUTE BAYMAX-FACE ANIMATED ROBOT (OPTION A)    */}
      {/* ══════════════════════════════════════════════════════════════════════ */}
      <div className="relative bg-[#040E0D]/95 border border-[#7FAEA6]/30 rounded-[8px] shadow-2xl p-6 md:p-8 relative z-10">

        {/* Geometric Metallic Perimeter Lines */}
        <div className="absolute top-0 inset-x-10 h-[1.5px] bg-gradient-to-r from-transparent via-[#E09A8D]/70 via-[#7FAEA6]/70 to-transparent" />
        <div className="absolute bottom-0 inset-x-10 h-[1.5px] bg-gradient-to-r from-transparent via-[#7FAEA6]/50 via-[#E09A8D]/50 to-transparent" />

        {/* ──────────────────────────────────────────────────────────────────── */}
        {/* WONDERFUL CUTE TILTED ("TIRCHA") ANIMATED ROBOT WITH WAVING HANDS   */}
        {/* ──────────────────────────────────────────────────────────────────── */}
        <div className="absolute -top-24 sm:-top-28 -right-10 sm:-right-16 z-30 pointer-events-auto">
          <CuteRobot />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">

          {/* ────────────────────────────────────────────────────────────────── */}
          {/* LEFT: DIRECT CONTACT HUB WITH METALLIC LINE ACCENTS (5 COLS)      */}
          {/* ────────────────────────────────────────────────────────────────── */}
          <div className="lg:col-span-5 space-y-4 lg:border-r border-white/10 lg:pr-6">

            {/* Official Email Block */}
            <div className="p-3.5 bg-[#0B1F1D] border-l-2 border-[#E09A8D] border-y border-r border-white/15 rounded-md transition-all group">
              <span className="text-[9px] font-mono uppercase text-[#E09A8D] font-bold tracking-widest block mb-1">
                OFFICIAL EMAIL
              </span>
              <div className="flex items-center justify-between gap-2">
                <a
                  href="mailto:yusrasaleem679@gmail.com"
                  className="text-xs font-mono font-bold text-foreground group-hover:text-[#E09A8D] transition-colors truncate"
                >
                  yusrasaleem679@gmail.com
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-1.5 bg-white/5 hover:bg-[#E09A8D]/20 text-foreground/80 hover:text-[#E09A8D] border border-white/15 rounded-md transition-colors cursor-pointer shrink-0"
                  title="Copy Email Address"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {copiedEmail && (
                <p className="mt-1.5 text-[9px] font-mono text-emerald-400 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  Copied email address!
                </p>
              )}
            </div>

            {/* Quick Contact & CV Options */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-[9px] font-mono uppercase text-foreground/50 tracking-widest">
                  INSTANT CHANNELS
                </span>
                <div className="flex-1 h-[1px] bg-white/10" />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href="https://wa.me/923469609145"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 bg-[#0B1F1D]/60 border border-white/10 hover:border-[#7FAEA6] rounded-md transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#7FAEA6]" />
                    <span className="text-xs font-mono font-medium text-foreground group-hover:text-[#7FAEA6]">
                      WhatsApp
                    </span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-foreground/40 group-hover:text-[#7FAEA6]" />
                </a>

                <a
                  href="mailto:yusrasaleem679@gmail.com?subject=Requesting%20Resume%20PDF"
                  className="p-2.5 bg-[#0B1F1D]/60 border border-white/10 hover:border-[#E09A8D] rounded-md transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2">
                    <Download className="w-3.5 h-3.5 text-[#E09A8D]" />
                    <span className="text-xs font-mono font-medium text-foreground group-hover:text-[#E09A8D]">
                      CV (PDF)
                    </span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-foreground/40 group-hover:text-[#E09A8D]" />
                </a>
              </div>
            </div>

            {/* Social Networks */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-[9px] font-mono uppercase text-foreground/50 tracking-widest">
                  SOCIAL PROFILES
                </span>
                <div className="flex-1 h-[1px] bg-white/10" />
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="https://linkedin.com/in/yusra-saleem-dev"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2 px-2.5 bg-[#0B1F1D]/40 border border-white/10 hover:border-white/30 rounded-md text-center text-xs font-mono text-foreground/80 hover:text-white transition-colors flex items-center justify-center gap-1.5"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://github.com/Yusra-Saleem"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2 px-2.5 bg-[#0B1F1D]/40 border border-white/10 hover:border-white/30 rounded-md text-center text-xs font-mono text-foreground/80 hover:text-white transition-colors flex items-center justify-center gap-1.5"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>

                <a
                  href="https://www.instagram.com/yusra_saleem.dev/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2 px-2.5 bg-[#0B1F1D]/40 border border-white/10 hover:border-[#E09A8D]/40 rounded-md text-center text-xs font-mono text-foreground/80 hover:text-[#E09A8D] transition-colors flex items-center justify-center gap-1.5"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>

            {/* ──────────────────────────────────────────────────────────────── */}
            {/* ENLARGED & BOLD KARACHI LOCATION & LIVE CLOCK                     */}
            {/* ──────────────────────────────────────────────────────────────── */}
            <div className="pt-3.5 border-t border-white/10 flex items-center justify-between text-xs md:text-sm font-mono font-bold tracking-wide">
              <div className="flex items-center gap-2 text-foreground">
                <Globe className="w-4 h-4 text-[#7FAEA6]" />
                <span>Karachi, PK (UTC+5)</span>
              </div>
              <div className="flex items-center gap-1.5 text-[#7FAEA6]">
                <Clock className="w-4 h-4 text-[#7FAEA6]" />
                <span className="text-[#7FAEA6] font-extrabold text-sm md:text-base">
                  {currentTime || "09:08 PM"}
                </span>
              </div>
            </div>

          </div>

          {/* ────────────────────────────────────────────────────────────────── */}
          {/* RIGHT: FORM WITH METALLIC LINE INPUTS & ICONS (7 COLS)             */}
          {/* ────────────────────────────────────────────────────────────────── */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="py-10 flex flex-col items-center justify-center text-center space-y-3 border border-emerald-400/30 bg-[#0B1F1D]/40 rounded-md p-6">
                <div className="w-10 h-10 bg-emerald-400/10 border border-emerald-400/30 rounded-full flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-bold uppercase font-space text-foreground">
                  Message Dispatched
                </h4>
                <p className="text-xs text-foreground/80 font-sans leading-relaxed max-w-sm">
                  Mail composed for <span className="font-mono text-[#E09A8D] font-bold">yusrasaleem679@gmail.com</span>. Opening mail client...
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-3.5 py-1.5 bg-white/5 border border-white/15 rounded-md text-xs font-mono text-foreground cursor-pointer hover:bg-white/10 transition-colors"
                >
                  ← Edit Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">

                {/* Purpose Switcher Tabs */}
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[9px] font-mono uppercase text-foreground/50 tracking-widest">
                      PURPOSE OF INQUIRY
                    </span>
                    <div className="flex-1 h-[1px] bg-white/10" />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setPurpose("project")}
                      className={`py-2 px-3 rounded-md text-xs font-mono font-bold transition-all cursor-pointer border flex items-center justify-center gap-2 ${purpose === "project"
                        ? "bg-[#7FAEA6]/20 border-[#7FAEA6] text-[#7FAEA6] border-l-2 border-l-[#7FAEA6]"
                        : "bg-[#0B1F1D]/50 border-white/10 text-foreground/60 hover:text-foreground"
                        }`}
                    >
                      <Layers className="w-3.5 h-3.5" />
                      <span>Project &amp; Contract</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPurpose("role")}
                      className={`py-2 px-3 rounded-md text-xs font-mono font-bold transition-all cursor-pointer border flex items-center justify-center gap-2 ${purpose === "role"
                        ? "bg-[#E09A8D]/20 border-[#E09A8D] text-[#E09A8D] border-l-2 border-l-[#E09A8D]"
                        : "bg-[#0B1F1D]/50 border-white/10 text-foreground/60 hover:text-foreground"
                        }`}
                    >
                      <Briefcase className="w-3.5 h-3.5" />
                      <span>Full-Time Hiring</span>
                    </button>
                  </div>
                </div>

                {/* 2-Column Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[9px] font-mono uppercase text-foreground/50 tracking-widest mb-1">
                      Your Name <span className="text-[#E09A8D]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Morgan"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#0B1F1D]/90 border-b border-[#E09A8D]/40 border-l border-white/10 border-t-0 border-r-0 rounded-r-md outline-none text-foreground font-sans text-xs focus:border-b-[#E09A8D] focus:border-l-[#E09A8D] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[9px] font-mono uppercase text-foreground/50 tracking-widest mb-1">
                      Your Email <span className="text-[#7FAEA6]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#0B1F1D]/90 border-b border-[#7FAEA6]/40 border-l border-white/10 border-t-0 border-r-0 rounded-r-md outline-none text-foreground font-sans text-xs focus:border-b-[#7FAEA6] focus:border-l-[#7FAEA6] transition-colors"
                    />
                  </div>
                </div>

                {/* Message Textarea */}
                <div>
                  <label className="block text-[9px] font-mono uppercase text-foreground/50 tracking-widest mb-1">
                    Your Message or Brief <span className="text-[#E09A8D]">*</span>
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Your message or project brief..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#0B1F1D]/90 border border-white/15 border-l-2 border-l-[#7FAEA6]/60 rounded-md outline-none text-foreground font-sans text-xs focus:border-[#7FAEA6] focus:border-l-[#7FAEA6] transition-colors resize-none leading-relaxed"
                  />
                </div>

                {/* Submit Row */}
                <div className="flex items-center justify-between pt-1">
                  <span className="text-[9px] font-mono text-emerald-400 uppercase font-bold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    RESPONSE &lt; 2 HOURS
                  </span>

                  <InteractiveButton
                    label="Send Message"
                    hoverLabel="Send Message ↗"
                    variant="primary"
                    className="py-1.5 px-5 text-xs font-mono min-w-[140px]"
                    icon={<Send className="w-3.5 h-3.5" />}
                    onClick={handleSubmit}
                  />
                </div>

              </form>
            )}
          </div>

        </div>

      </div>

    </section>
  );
}
