export interface TechStackItem {
  name: string;
  iconName: "Zap" | "Sparkles" | "Database" | "Layers" | "Globe" | "Activity" | "Code2" | "Cpu";
  color: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
  sub: string;
}

export interface ProjectItem {
  id: string;
  titlePart1: string;
  titlePart2: string;
  category: string;
  problem: string;
  solution: string;
  techStack: TechStackItem[];
  metrics?: ProjectMetric[];

  // Customizable Screen Image Slots
  screenshot: string;
  secondaryScreenshot?: string;
  mobileScreenshot?: string;
  paperTopScreenshot?: string;
  paperLeftScreenshot?: string;
  paperRightScreenshot?: string;

  mockupStyle: "isometric-3d-tilted-deck" | "laptop-with-mobile-duo" | "laptop-with-floating-papers" | "curved-3d-cyber-hud";

  liveUrl?: string;
  githubUrl?: string;
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "voice-ai-assistant",
    titlePart1: "ENTERPRISE AI",
    titlePart2: "BUSINESS ASSISTANT",
    category: "MULTI-AGENT SYSTEM • WORKFLOW AUTOMATION",
    problem: "Manual data entry and multi-step reporting via slow text interfaces cause operator delays.",
    solution: "Real-time voice AI agent executing tasks and generating reports via autonomous multi-agent task execution and async event streaming.",
    metrics: [
      { label: "STREAM LATENCY", value: "<280ms", sub: "Event-Driven Async Engine" },
      { label: "CALL COMPLETION", value: "99.4%", sub: "Zero Conversational Lag" },
      { label: "TOOL EXECUTION", value: "100%", sub: "PostgreSQL Async Verification" },
    ],
    techStack: [
      { name: "PostgreSQL", iconName: "Database", color: "#336791" },
      { name: "FastAPI", iconName: "Zap", color: "#58B69B" },
      { name: "Multi-Agent Swarms", iconName: "Activity", color: "#58B69B" },
      { name: "OpenAI Agents SDK", iconName: "Cpu", color: "#52D3A2" },
      { name: "Next.js", iconName: "Globe", color: "#0070F3" }
    ],
    screenshot: "/projects/resonance-churn.png",
    secondaryScreenshot: "/projects/resonance-churn.png",
    mockupStyle: "isometric-3d-tilted-deck",
    liveUrl: "https://github.com/Yusra-Saleem/openai-agent-sdk",
    githubUrl: "https://github.com/Yusra-Saleem/openai-agent-sdk"
  },
  {
    id: "ai-business-automation",
    titlePart1: "BUSINESS AI",
    titlePart2: "AUTOMATION AGENT",
    category: "DIGITAL FTE • WORKFLOW AUTOMATION",
    problem: "High operational costs, repetitive ticket routing, and human error in recurring business workflows.",
    solution: "Autonomous AI agent automating inbound ticket triage, automated email replies, and tool calling end-to-end.",
    metrics: [
      { label: "WEEKLY HRS SAVED", value: "18+ hrs", sub: "Per Operations Team" },
      { label: "DISPATCH ACCURACY", value: "99.9%", sub: "Deterministic Swarm Logic" },
      { label: "RESPONSE TIME", value: "12 sec", sub: "Instant Action Execution" },
    ],
    techStack: [
      { name: "OpenAI Agents SDK", iconName: "Sparkles", color: "#E58A7B" },
      { name: "Python FastAPI", iconName: "Zap", color: "#58B69B" },
      { name: "PostgreSQL", iconName: "Database", color: "#3ECF8E" },
      { name: "Function Calling", iconName: "Code2", color: "#FF6D5A" }
    ],
    screenshot: "/projects/agentia-cortex.png",
    mobileScreenshot: "/projects/agentia-cortex.png",
    mockupStyle: "laptop-with-mobile-duo",
    liveUrl: "https://github.com/Yusra-Saleem/operator-one",
    githubUrl: "https://github.com/Yusra-Saleem/operator-one"
  },
  {
    id: "car-dealership-saas",
    titlePart1: "DEALERSHIP",
    titlePart2: "MANAGEMENT SAAS",
    category: "FULL-STACK SAAS • PAID CLIENT SYSTEM",
    problem: "Scattered vehicle inventory, disconnected order tracking, and error-prone billing across manual spreadsheets.",
    solution: "Full-stack SaaS platform with client vehicle booking portal, dealer inventory control, and Stripe billing deployed on AWS.",
    metrics: [
      { label: "TIME TO PRODUCTION", value: "3 Weeks", sub: "Spec to Live AWS Cloud" },
      { label: "UPTIME TARGET", value: "99.99%", sub: "Containerized Cloud Cluster" },
      { label: "BILLING INTEGRITY", value: "100%", sub: "ACID Stripe Transaction Webhooks" },
    ],
    techStack: [
      { name: "Next.js", iconName: "Globe", color: "#0070F3" },
      { name: "FastAPI", iconName: "Zap", color: "#58B69B" },
      { name: "PostgreSQL", iconName: "Database", color: "#336791" },
      { name: "Tailwind CSS", iconName: "Layers", color: "#38BDF8" },
      { name: "AWS Cloud", iconName: "Cpu", color: "#FF9900" }
    ],
    screenshot: "/projects/quantum-ledger.png",
    paperTopScreenshot: "/projects/quantum-ledger.png",
    paperLeftScreenshot: "/projects/quantum-ledger.png",
    paperRightScreenshot: "/projects/quantum-ledger.png",
    mockupStyle: "laptop-with-floating-papers",
    liveUrl: "https://github.com/Yusra-Saleem/elite-motors",
    githubUrl: "https://github.com/Yusra-Saleem/elite-motors"
  },
  {
    id: "ai-book-docusaurus-rag",
    titlePart1: "AI BOOK",
    titlePart2: "KNOWLEDGE RAG",
    category: "RAG KNOWLEDGE BASE • AI BOOK ENGINE",
    problem: "Time-consuming manual search through static book chapters and multi-page technical documentation.",
    solution: "Interactive Docusaurus AI assistant backed by Qdrant vector hybrid search for exact page citations and zero hallucinations.",
    metrics: [
      { label: "CITATION PRECISION", value: "100%", sub: "Exact Document Page Anchors" },
      { label: "HALLUCINATIONS", value: "0.0%", sub: "Strict Verification Guardrails" },
      { label: "RETRIEVAL SPEED", value: "310ms", sub: "Qdrant Hybrid Dense-Sparse" },
    ],
    techStack: [
      { name: "Docusaurus", iconName: "Globe", color: "#3ECC5F" },
      { name: "Qdrant VectorDB", iconName: "Database", color: "#DC2626" },
      { name: "OpenAI Agents", iconName: "Sparkles", color: "#E58A7B" },
      { name: "RAG Pipeline", iconName: "Cpu", color: "#58B69B" },
      { name: "FastAPI", iconName: "Zap", color: "#0070F3" }
    ],
    screenshot: "/projects/syntax-agent.png",
    mockupStyle: "curved-3d-cyber-hud",
    liveUrl: "https://github.com/Yusra-Saleem/ai-robotics-book",
    githubUrl: "https://github.com/Yusra-Saleem/ai-robotics-book"
  }
];
