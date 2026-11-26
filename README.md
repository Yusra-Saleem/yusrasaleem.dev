# Yusra Saleem - AI Systems Architect & Full-Stack Console

> Flagship portfolio web console for Yusra Saleem, positioned as an AI Systems Architect & Full-Stack Engineer specializing in Autonomous Multi-Agent Systems, WebRTC Voice AI, and Scalable Cloud Platforms.

## 1. System Overview

This repository houses the production codebase of [yusrasaleem.dev](https://yusrasaleem.dev), an engineering portfolio console built with Next.js 15 App Router, Tailwind CSS, and Framer Motion. Engineered for 120 FPS performance, accessibility, and clean cyber-minimalist aesthetics, it showcases flagship AI systems, interactive ROI calculators, and system architecture blueprints.

## 2. Technical Architecture

```
[ Global Visitors / Clients ]
        │
        ▼
[ Edge CDN / Vercel Global Network ]
        │
        ▼
[ Next.js 15 App Router Architecture ]
        │
        ├──▶ [ Dynamic 3D Laser Reveal & Interactive Canvas ]
        ├──▶ [ Client ROI Calculator & Value Estimation Model ]
        ├──▶ [ Project Showcase Matrix & Direct Repo Integrations ]
        └──▶ [ OpenGraph & Twitter Card SEO Engine ]
```

### Technology Stack
- **Framework:** Next.js 15 (React 19, App Router)
- **Styling:** Tailwind CSS, PostCSS, Custom Cyber CSS Tokens
- **Animations:** Framer Motion (60-120 FPS hardware-accelerated transitions)
- **Typography:** Space Grotesk, Inter, Cormorant Garamond
- **SEO & Social:** OpenGraph 1200x630 Social Cards, Dynamic MetadataBase
- **CI/CD:** Automated GitHub Actions build validation pipeline

## 3. Core Architectural Modules

- **Interactive ROI Calculator:** Computes estimated operational savings and weekly engineering hours saved through AI agent automation.
- **Cyber Laser Reveal Experience:** High-performance canvas-based intro animation revealing portfolio credentials.
- **Direct GitHub Repository Integrations:** Featured project cards directly linked to live, open-source repositories (`openai-agent-sdk`, `operator-one`, `elite-motors`, `ai-robotics-book`).
- **Comprehensive Metadata & Social Graph:** Production OpenGraph tags and Twitter large image cards for viral sharing across professional networks.

## 4. Directory Structure

```
yusrasaleem.dev/
├── src/
│   ├── app/                  # App Router layouts, pages, and OpenGraph images
│   │   ├── layout.tsx        # Global metadata, font configurations, and body wrapper
│   │   ├── page.tsx          # Master console page aggregating all system sections
│   │   ├── opengraph-image.png # Dynamic OpenGraph social preview card
│   │   └── twitter-image.png   # Dynamic Twitter preview card
│   ├── components/           # Custom modular UI widgets and interactive sections
│   │   ├── LaserRevealScreen.tsx  # Canvas laser intro animation
│   │   ├── RoiCalculator.tsx      # Interactive operational ROI estimation model
│   │   ├── Projects.tsx           # Flagship systems showcase matrix
│   │   └── Contact.tsx            # Direct consultation inquiry channels
│   └── data/
│       └── projectsData.ts   # Domain models and verified GitHub repository URLs
├── public/                   # Static OpenGraph banners, project screenshots, and brand assets
└── package.json              # Project dependencies and build scripts
```

## 5. Local Development Execution

```bash
# Clone the repository
git clone https://github.com/Yusra-Saleem/yusrasaleem.dev.git
cd yusrasaleem.dev

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the console locally.

## 6. Author and Contact

- **Name:** Yusra Saleem
- **Title:** AI Systems Architect & Full-Stack Engineer
- **Official Domain:** [https://yusrasaleem.dev](https://yusrasaleem.dev)
- **LinkedIn:** [linkedin.com/in/yusrasaleem-developer](https://www.linkedin.com/in/yusrasaleem-developer)
- **Twitter/X:** [@Yusra96215](https://twitter.com/Yusra96215)
- **License:** Licensed under the [MIT License](LICENSE).
