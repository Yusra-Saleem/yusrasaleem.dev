# Yusra Saleem - Portfolio & Engineering Console

> Production codebase and architecture specification for [yusrasaleem.dev](https://yusrasaleem.dev) — an executive portfolio console showcasing autonomous multi-agent systems, deterministic RAG architectures, and production full-stack SaaS engineering.

---

## 1. System Overview

[yusrasaleem.dev](https://yusrasaleem.dev) is an engineering console built with Next.js 15, React 19, Tailwind CSS, and Framer Motion. Designed with a custom Dark Forest & Emerald green theme (`#0B1F1D`, `#52D3A2`, `#7FAEA6`, `#E09A8D`), it delivers 60-120 FPS hardware-accelerated animations, zero-layout-shift responsive layouts, and an interactive multi-agent sandbox experience.

---

## 2. Architecture & Design System

```
[ Global Clients / Enterprise Visitors ]
                 │
                 ▼
     [ Vercel Global Edge Network ]
                 │
                 ▼
     [ Next.js 15 App Router Core ]
                 │
  ┌──────────────┼──────────────┬──────────────┐
  ▼              ▼              ▼              ▼
[ Navigation ] [ Page Sections ] [ UI Engine ] [ Projects Data ]
• Navbar       • Hero           • Infinite     • Verified
• TopNavbar    • Manifesto        Slider         Case Studies
               • Sandbox        • Interactive  • Tech Stacks
               • Services         Buttons
               • What I Build   • Robot Mascot
               • Projects
               • Brand Reveal
               • Testimonials
               • Contact
```

### Core Architecture & Technical Stack
- **Framework:** Next.js 15 (React 19, App Router, Turbopack)
- **Styling & Theme:** Tailwind CSS with custom Dark Forest palette tokens
- **Animation Engine:** Framer Motion (GPU hardware-accelerated scroll sequences and spring physics)
- **Typography:** Space Grotesk (Display), Inter (Body & UI), Cormorant Garamond (Serif Accents)
- **Metadata & SEO:** Edge-rendered OpenGraph 1200x630 social preview cards, Twitter cards, and structured semantic HTML
- **CI/CD Pipeline:** Automated GitHub Actions build validation and static deployment pipeline

---

## 3. Modular Engineering Structure

```text
src/
├── app/                  # App Router layouts, metadata, and master console view
│   ├── layout.tsx        # Global SEO, font variables, and theme wrappers
│   ├── page.tsx          # Single-page console aggregating modular sections
│   └── globals.css       # Tailwind CSS custom color tokens & animations
│
├── components/           # Modular component architecture
│   ├── navigation/       # Top navigation bars & status indicators
│   │   ├── Navbar.tsx
│   │   └── TopNavbar.tsx
│   │
│   ├── sections/         # High-level page sections
│   │   ├── Hero.tsx          # Overview introduction & verified credentials
│   │   ├── Manifesto.tsx     # Systems engineering philosophy
│   │   ├── About.tsx         # Interactive agent sandbox
│   │   ├── Services.tsx      # Solutions provided matrix
│   │   ├── WhatIBuild.tsx    # Technical deployment capabilities & slider
│   │   ├── Projects.tsx      # Flagship systems case studies
│   │   ├── BrandReveal.tsx   # Visual brand showcase
│   │   ├── Testimonials.tsx  # Verified client outcomes & metrics
│   │   └── Contact.tsx       # Direct consultation console
│   │
│   └── ui/               # Reusable UI primitives
│       ├── CuteRobot.tsx         # Interactive mascot canvas
│       ├── InfiniteSlider.tsx    # High-performance marquee slider
│       └── InteractiveButton.tsx # Themed interactive CTA button
│
├── data/
│   └── projects.ts       # Domain data models & case study metrics
│
└── lib/
    └── utils.ts          # Classnames & Tailwind merge utility
```

---

## 4. Key Engineering Highlights

- **Interactive Agent Sandbox:** Live interactive visual interface demonstrating autonomous multi-agent task execution, tool calling, and deterministic state transitions.
- **Hardware-Accelerated Marquee Slider:** Seamless, continuous 120 FPS infinite carousel showcasing deployment capabilities without layout jank.
- **Enterprise Case Study Showcase:** Structured technical deep-dives into production systems (`operator-one`, `openai-agent-sdk`, `elite-motors`, `ai-robotics-book`) with verified architecture diagrams, technical stacks, and performance metrics.
- **Clean Responsive Architecture:** Engineered from mobile to ultra-wide displays with strict accessibility, keyboard navigation, and theme consistency.

---

## 5. Author & Credentials

- **Engineer:** Yusra Saleem
- **Specialization:** Full Stack & AI Systems Engineer
- **Live Production URL:** [https://yusrasaleem.dev](https://yusrasaleem.dev)
- **LinkedIn:** [linkedin.com/in/yusra-saleem-dev](https://www.linkedin.com/in/yusra-saleem-dev)
- **X (Twitter):** [x.com/yusrasaleem_dev](https://x.com/yusrasaleem_dev)
- **GitHub:** [github.com/Yusra-Saleem](https://github.com/Yusra-Saleem)
- **Direct Email:** [yusrasaleem679@gmail.com](mailto:yusrasaleem679@gmail.com)

---

&copy; 2026 Yusra Saleem. Released under the [MIT License](LICENSE).
