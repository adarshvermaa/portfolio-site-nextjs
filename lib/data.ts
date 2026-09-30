export interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    image: string;
    link: string;
    github: string;
    badge?: string;
    highlights?: string[];
}

export interface SkillCategory {
    category: string;
    description?: string;
    items: string[];
}

export interface GitHubRepo {
    name: string;
    displayName: string;
    description: string;
    html_url: string;
    homepage?: string;
    language: string;
    languageColor: string;
    topics: string[];
    stars: number;
    forks: number;
    category: "AI & Generative AI" | "Systems & Rust" | "Trading & Quant" | "Full-Stack & Cloud" | "Mobile & Platform" | "Tools & Utilities";
    featured?: boolean;
    cloneUrl?: string;
}

export interface FreelanceOffering {
    title: string;
    tagline: string;
    description: string;
    deliverables: string[];
    techStack: string[];
    timeline: string;
}

export const personalInfo = {
    name: "Adarsh Verma",
    title: "Full-Stack AI Engineer | Systems & Real-Time Software",
    bio: "Full-Stack AI Engineer with 5+ years of software development experience across production software companies, client consulting, and high-performance open-source systems. Specializing in autonomous LLM agents (MCP), high-throughput Rust distributed backends, quantitative trading systems, and responsive web & mobile applications.",
    location: "India (Open to Worldwide Remote & Relocation)",
    email: "adarshverma.nilbspr@gmail.com",
    contactEmail: "adarshverma.nilbspr@gmail.com",
    phone: "+91 7000214280",
    portfolioUrl: "https://avwithai.com",
    githubUrl: "https://github.com/adarshvermaa",
    linkedinUrl: "https://www.linkedin.com/in/adarsh-verma-887a3819a/",
    twitterUrl: "https://x.com/Adarshvermaaa",
    freelanceStatus: "Available for Freelance & Remote Contracts",
    remoteReady: true,
    experienceYears: "5+",
    stats: [
        { label: "Production & Client Experience", value: "5+ Years" },
        { label: "Bespoke Engagements Delivered", value: "20+" },
        { label: "Public & Systems Repositories", value: "23+ Public (40+ Total)" },
        { label: "Live Google Play Applications", value: "2 Shipped" },
    ]
};

export const skills: SkillCategory[] = [
    {
        category: "AI & Generative AI",
        description: "Autonomous agent architectures, tool execution, and neural search pipelines",
        items: [
            "Model Context Protocol (MCP)",
            "LLM APIs (Claude, OpenAI, Gemini)",
            "Autonomous Agents",
            "RAG Pipelines",
            "Vector Search & Embeddings",
            "Tool-Calling Workflows",
            "Prompt Engineering",
            "Multi-Agent Orchestration"
        ]
    },
    {
        category: "Programming Languages",
        description: "Systems programming, concurrent runtimes, and high-velocity scripting",
        items: [
            "Python",
            "TypeScript",
            "JavaScript",
            "Rust",
            "Dart",
            "SQL",
            "Bash",
            "Go"
        ]
    },
    {
        category: "Backend & Systems",
        description: "High-concurrency microservices, persistent streams, and async runtimes",
        items: [
            "FastAPI",
            "Node.js",
            "Express.js",
            "Tokio / Async Rust",
            "REST APIs",
            "WebSockets",
            "Socket.IO",
            "AsyncIO",
            "Event-Driven Architecture",
            "Microservices"
        ]
    },
    {
        category: "Frontend & Mobile",
        description: "Ultra-responsive client applications, motion dynamics, and cross-platform native apps",
        items: [
            "React",
            "Next.js (App Router)",
            "Tailwind CSS",
            "Vite",
            "Zustand",
            "Flutter",
            "Android",
            "Responsive UI",
            "Real-Time Dashboards",
            "GSAP Motion",
            "Three.js / WebGL"
        ]
    },
    {
        category: "Databases & Storage",
        description: "Relational persistence, time-series data, document engines, and in-memory caches",
        items: [
            "MongoDB",
            "PostgreSQL",
            "TimescaleDB",
            "Redis",
            "MySQL",
            "Vector Databases (Pinecone/Milvus)",
            "Encrypted Storage"
        ]
    },
    {
        category: "DevOps & Infrastructure",
        description: "Containerization, cluster orchestration, daemon services, and CI/CD pipelines",
        items: [
            "Docker",
            "Docker Compose",
            "Kubernetes",
            "Linux Systems",
            "systemd daemons",
            "Git / GitHub Actions",
            "CI / CD Pipelines",
            "Nginx",
            "GCP & AWS Cloud"
        ]
    },
    {
        category: "Data, ML & Quant",
        description: "Machine learning ensembles, market micro-structure, and real-time telemetry",
        items: [
            "XGBoost",
            "Prophet",
            "scikit-learn",
            "NumPy",
            "Prometheus",
            "Order Flow Analytics (CVD, VWAP)",
            "TradingView Lightweight Charts",
            "Order Book Imbalance (OBI)"
        ]
    }
];

export const freelanceOfferings: FreelanceOffering[] = [
    {
        title: "Autonomous AI Agents & MCP Servers",
        tagline: "Custom Model Context Protocol servers & production RAG pipelines",
        description: "Design and implement custom MCP servers that connect Claude, OpenAI, or Gemini to your databases, internal APIs, file systems, and development toolchains with rigorous input validation and error boundaries.",
        deliverables: [
            "Extensible Model Context Protocol (MCP) server core",
            "Dynamic tool registration & hot-reload plugin architecture",
            "RAG vector search with anti-inversion security",
            "Autonomous multi-step agent decision workflows"
        ],
        techStack: ["Python", "FastMCP", "TypeScript", "LangChain/LlamaIndex", "Vector DBs", "JSON-RPC"],
        timeline: "1 - 3 Weeks"
    },
    {
        title: "High-Throughput Systems & Rust Telemetry",
        tagline: "Zero-latency real-time backends, daemons, and microservices",
        description: "Architect sub-millisecond, memory-safe distributed systems using Rust (Tokio) and Python (FastAPI/AsyncIO). Includes persistent WebSockets, lock-free ring buffers, zero-copy packet capture, and Prometheus instrumentation.",
        deliverables: [
            "Concurrent asynchronous services handling 10k+ req/sec",
            "Persistent duplex WebSocket channels for live data streaming",
            "Linux systemd daemons and Docker containerization",
            "Production observability with Prometheus & Grafana"
        ],
        techStack: ["Rust", "Tokio", "FastAPI", "WebSockets", "Prometheus", "Docker", "Linux"],
        timeline: "2 - 4 Weeks"
    },
    {
        title: "Quantitative Trading Engines & Financial Analytics",
        tagline: "Sub-second market scanners, order flow analytics, and execution bots",
        description: "Build robust algorithmic trading bots and financial visualization terminals for crypto (Binance/CoinDCX) and equities (NSE/BSE). Powered by ML predictors, CVD, VWAP deviation bands, and defensive risk managers.",
        deliverables: [
            "Live order book imbalance (OBI) & CVD calculation engines",
            "Automated bracket order execution (TP/SL) with trailing stops",
            "Interactive TradingView Lightweight Charts integration",
            "Machine learning volatility forecasting (XGBoost/Prophet)"
        ],
        techStack: ["Python", "FastAPI", "AsyncIO", "Next.js", "TradingView Charts", "TimescaleDB"],
        timeline: "2 - 5 Weeks"
    },
    {
        title: "Full-Stack Web & Cross-Platform Mobile Apps",
        tagline: "End-to-end web architectures and production Flutter mobile apps",
        description: "Transform your product vision into a polished digital experience. Full-stack responsive web apps using Next.js 14/15/16 and native cross-platform mobile apps in Flutter with Google Play Store deployment and on-device ML.",
        deliverables: [
            "Production Next.js applications with SSR, ISR, and smooth animations",
            "Flutter mobile apps shipped directly to Google Play Store",
            "Secure authentication, payment integration, and cloud sync",
            "High-fidelity UI/UX design with dark/light cyberpunk aesthetics"
        ],
        techStack: ["Next.js", "React", "TypeScript", "Flutter", "Tailwind CSS", "Firebase", "Node.js"],
        timeline: "3 - 6 Weeks"
    }
];

export const projects: Project[] = [
    {
        id: 1,
        title: "Multi-Purpose Model Context Protocol (MCP) Server",
        description: "An extensible Model Context Protocol (MCP) server core enabling modern LLMs (Claude, OpenAI, Gemini) to securely execute local and remote system tools, inspect environments, and coordinate context retrieval.",
        technologies: ["Python", "TypeScript", "Model Context Protocol", "FastMCP", "Pydantic", "JSON-RPC", "Plugin Architecture"],
        image: "/mcp-showcase.png",
        link: "https://github.com/adarshvermaa/Multi-Purpose-mcp-server",
        github: "https://github.com/adarshvermaa/Multi-Purpose-mcp-server",
        badge: "Featured AI Architecture",
        highlights: [
            "Extensible server core enabling LLMs to securely execute local/remote system tools",
            "Dynamic plugin framework supporting hot-reload tool registration",
            "Strict schema validation via Pydantic and standardized JSON-RPC communication boundaries"
        ]
    },
    {
        id: 2,
        title: "Production-Grade Rust Distributed Monitoring Platform",
        description: "A high-throughput systems telemetry and log monitoring platform in Rust across 60+ modules and 7,500+ LOC, comparable to commercial solutions like Datadog or New Relic.",
        technologies: ["Rust", "Tokio", "WebSockets", "Prometheus", "JWT", "Docker", "Kubernetes", "Linux systemd"],
        image: "/monitoring-showcase.png",
        link: "https://github.com/adarshvermaa/monitoring-system",
        github: "https://github.com/adarshvermaa/monitoring-system",
        badge: "Systems & Rust (7,500+ LOC)",
        highlights: [
            "3 core crates: common, agent, and collector isolating ingestion and processing daemons",
            "Lock-free ring buffering, zero-copy packet capture, and Prometheus metric scrapers",
            "Packaged with Linux systemd daemons, multi-stage Docker builds, and Kubernetes manifests"
        ]
    },
    {
        id: 3,
        title: "Autonomous Real-Time Crypto Trading Bot",
        description: "An asynchronous event-driven market scanner processing sub-second ticker, depth, and trade execution streams from crypto exchanges with automated risk management and LLM macro auditing.",
        technologies: ["Python", "AsyncIO", "WebSockets", "Order Flow Analytics", "CVD", "VWAP", "LLM Auditing", "Rich TUI"],
        image: "/trading-showcase.png",
        link: "https://github.com/adarshvermaa/trading_bot",
        github: "https://github.com/adarshvermaa/trading_bot",
        badge: "Quant & Autonomous Systems",
        highlights: [
            "Sub-second market scanning with Cumulative Volume Delta (CVD) & multi-timeframe VWAP deviation bands",
            "Automated execution engine with bracket orders (TP/SL), trailing stops, and slippage protection",
            "Confluence architecture with ICT / Smart Money Concepts and interactive terminal dashboard"
        ]
    },
    {
        id: 4,
        title: "AlphaScalper / ALPHX – AI-Ranked Scalping Terminal",
        description: "An institutional-grade cryptocurrency web terminal pairing a Next.js 14 frontend with an asynchronous FastAPI engine, synchronizing live price charts, order books, and positions via WebSockets.",
        technologies: ["Next.js 14", "React", "TypeScript", "Tailwind CSS", "FastAPI", "WebSockets", "Zustand", "TradingView"],
        image: "/alphascalper-showcase.png",
        link: "https://github.com/adarshvermaa/AI_sacpler",
        github: "https://github.com/adarshvermaa/AI_sacpler",
        badge: "High-Frequency Terminal",
        highlights: [
            "Cyberpunk dark-themed UI paired with FastAPI quantitative backend via persistent WebSockets",
            "Multi-Timeframe AI screening, Order Book Imbalance (OBI) analytics, and automated capital protection",
            "Interactive TradingView candlestick charts with custom technical overlays"
        ]
    },
    {
        id: 5,
        title: "WiFi Wave – Network Radar & Packet Telemetry Inspector",
        description: "A terminal-based active network discovery and packet inspector in Rust, tracking connected devices, estimating distance/latency in real-time, and detecting anomalous local traffic.",
        technologies: ["Rust", "Packet Inspection", "DNS/SNI Parsing", "mDNS/SSDP", "Terminal GUI", "Network Telemetry"],
        image: "/wifiwave-showcase.png",
        link: "https://github.com/adarshvermaa/internet_wave",
        github: "https://github.com/adarshvermaa/internet_wave",
        badge: "Rust Systems & Security",
        highlights: [
            "Scans local network, estimates real-time distance, and pulses animated sonar waves from the router",
            "Passive DNS analyzers, TLS ClientHello SNI decoders, and mDNS/SSDP service classifiers",
            "Identifies active streaming services and local network anomalies in real-time"
        ]
    },
    {
        id: 6,
        title: "AI-Powered Indian Stock Market Analyzer",
        description: "AI-powered real-time stock analysis for NSE/BSE markets with ML predictions, technical indicators, and sentiment analysis.",
        technologies: ["React 18", "TypeScript", "FastAPI", "XGBoost", "Prophet", "TimescaleDB", "Redis", "Docker", "TradingView Charts"],
        image: "/image.png",
        link: "https://analyzer.avwithai.com/",
        github: "https://github.com/adarshvermaa/analyzer",
        badge: "Live Production Web App",
        highlights: [
            "Automated scraping and real-time market data ingestion for NSE/BSE securities",
            "Machine learning ensemble forecasting using XGBoost and Facebook Prophet",
            "High-performance time-series persistence with TimescaleDB and Redis caching"
        ]
    },
    {
        id: 7,
        title: "AI RepCounter – Intelligent Workout Tracker",
        description: "An AI-powered mobile fitness app natively running on-device on Google Play. Uses ML Kit Pose Detection to track workout form, count reps, and calculate MET-bound calorie variations in real time without server latency.",
        technologies: ["Flutter", "Dart", "Google ML Kit", "Pose Detection", "TensorFlow", "Firebase", "Camera Telemetry"],
        image: "/rapsy-home.jpeg",
        link: "/rapsy",
        github: "https://github.com/adarshvermaa/thankyou_flutter",
        badge: "Published Google Play App",
        highlights: [
            "Production mobile app published on the Google Play Store with 100% on-device ML inference",
            "Real-time skeletal landmark tracking and algorithmic repetition counting",
            "Secure biometric data handling and persistent cloud synchronization"
        ]
    },
    {
        id: 8,
        title: "Soacil / WhichOne – Social Discovery Platform",
        description: "A Flutter social discovery app on Google Play with nearby map browsing, real-time chat, stories, camera and gallery tools, premium filters, privacy controls, and a Firebase-backed realtime architecture.",
        technologies: ["Flutter", "Dart", "Firebase Auth", "Firestore", "Realtime Database", "FCM", "Mapbox", "WebRTC"],
        image: "/whichone/whichone-showcase.png",
        link: "/whichone",
        github: "https://github.com/adarshvermaa/whichOne",
        badge: "Published Google Play App",
        highlights: [
            "Published on Google Play Store with interactive nearby map browsing and discovery",
            "End-to-end encrypted messaging, push notifications, and rich media stories",
            "Full release lifecycle management, SDK compatibility updates, and crash analytics"
        ]
    },
    {
        id: 9,
        title: "CyborgDB – Encryption-In-Use AI Vector Privacy",
        description: "Application demonstrating encryption-in-use for AI/ML workloads, preventing vector inversion attacks by keeping embeddings encrypted throughout storage and retrieval for healthcare and enterprise LLM chatbots.",
        technologies: ["TypeScript", "Vector Databases", "Encryption-in-use", "AI Security", "RAG Defense", "LLM Privacy"],
        image: "/cyborgdb-showcase.png",
        link: "https://github.com/adarshvermaa/CyborgDB",
        github: "https://github.com/adarshvermaa/CyborgDB",
        badge: "AI Security & Privacy",
        highlights: [
            "Prevents vector inversion attacks by keeping high-dimensional embeddings encrypted during storage and search",
            "Secure medical chatbot architecture allowing doctors to query records without exposing raw vectors",
            "Zero-trust design for enterprise and compliance-regulated AI workloads"
        ]
    },
    {
        id: 10,
        title: "Scraper-Agent – Autonomous Web Scraping & RAG",
        description: "High-performance web scraping platform with AI-powered ingestion, RAG, and multi-model summarization. A production-ready full-stack system for Scrape → Ingest → Vector Store → RAG → Multi-AI Summarize → Publish workflows.",
        technologies: ["NestJS", "React", "TypeScript", "Vector Databases", "RAG Pipelines", "Multi-AI Summarization"],
        image: "/scraper-showcase.png",
        link: "https://github.com/adarshvermaa/Scraper-agent",
        github: "https://github.com/adarshvermaa/Scraper-agent",
        badge: "Autonomous AI Pipeline",
        highlights: [
            "Automated multi-source web scraping with intelligent DOM extraction and cleanup",
            "High-throughput vector indexing and hybrid semantic search",
            "Multi-LLM synthesis pipeline generating structured digests and publications"
        ]
    },
    {
        id: 11,
        title: "Margwa – Shared Ride Platform & Microservices",
        description: "Complete ride-sharing platform with React Native mobile apps for clients and drivers, powered by a scalable microservices backend built in Go and TypeScript.",
        technologies: ["React Native", "TypeScript", "Go", "Microservices", "Geolocation", "WebSockets", "Docker"],
        image: "/margwa-showcase.png",
        link: "https://github.com/adarshvermaa/margwa",
        github: "https://github.com/adarshvermaa/margwa",
        badge: "Mobile & Microservices",
        highlights: [
            "React Native client and driver applications with live map navigation and real-time telemetry",
            "High-performance Go and TypeScript microservices for dispatch and matching algorithms",
            "Event-driven architecture with geospatial queries and payment processing"
        ]
    }
];

export const allGitHubRepos: GitHubRepo[] = [
    {
        name: "AI_sacpler",
        displayName: "AI_sacpler (AlphaScalper Terminal)",
        description: "Modern, ultra-responsive Cyberpunk / Dark-Themed High-Frequency Trading Terminal built with Next.js 14 App Router, TypeScript, Tailwind CSS, and Socket.IO.",
        html_url: "https://github.com/adarshvermaa/AI_sacpler",
        language: "TypeScript",
        languageColor: "#3178c6",
        topics: ["nextjs", "crypto", "algotrading", "automation", "socket-io", "cyberpunk"],
        stars: 0,
        forks: 0,
        category: "Trading & Quant",
        featured: true,
        cloneUrl: "git clone https://github.com/adarshvermaa/AI_sacpler.git"
    },
    {
        name: "AI_sacpler_backend",
        displayName: "AI_sacpler_backend (Quant Scalper Backend)",
        description: "High-frequency algorithmic trading system designed for Perpetual Futures (Binance & CoinDCX) with Multi-Timeframe AI screening, Order Book Imbalance (OBI) analytics, and automated capital protection.",
        html_url: "https://github.com/adarshvermaa/AI_sacpler_backend",
        language: "Python",
        languageColor: "#3572A5",
        topics: ["python", "algotrade", "fastapi", "binance", "coindcx", "order-flow", "quant"],
        stars: 0,
        forks: 0,
        category: "Trading & Quant",
        featured: true,
        cloneUrl: "git clone https://github.com/adarshvermaa/AI_sacpler_backend.git"
    },
    {
        name: "AI_singal",
        displayName: "AI_singal (ALPHX Web Terminal)",
        description: "ALPHX Terminal is an institutional-grade cryptocurrency web terminal built with Next.js 14 App Router, TypeScript, Tailwind CSS, and Zustand. Visualizes real-time candlestick charts with custom technical overlays.",
        html_url: "https://github.com/adarshvermaa/AI_singal",
        language: "TypeScript",
        languageColor: "#3178c6",
        topics: ["nextjs", "algotrading", "zustand", "cryptocurrency", "candlesticks"],
        stars: 0,
        forks: 0,
        category: "Trading & Quant",
        featured: true,
        cloneUrl: "git clone https://github.com/adarshvermaa/AI_singal.git"
    },
    {
        name: "AI_singal_Backend",
        displayName: "AI_singal_Backend (ALPHX Quant Engine)",
        description: "ALPHX Quantitative Engine built with Python and FastAPI. Computes multi-timeframe indicators, detects Fair Value Gaps, executes ML ensemble predictions (XGBoost, LightGBM, Deep LSTM), and manages portfolio risk.",
        html_url: "https://github.com/adarshvermaa/AI_singal_Backend",
        language: "Python",
        languageColor: "#3572A5",
        topics: ["fastapi", "xgboost", "lstm", "lightgbm", "quant", "risk-engine"],
        stars: 0,
        forks: 0,
        category: "Trading & Quant",
        featured: true,
        cloneUrl: "git clone https://github.com/adarshvermaa/AI_singal_Backend.git"
    },
    {
        name: "analyzer",
        displayName: "analyzer (Indian Stock Market AI)",
        description: "📈 AI-powered Indian Stock Market Analyzer. Real-time NSE/BSE data ingestion, Sentiment Analysis, and ML Predictions using XGBoost, Prophet, and TimescaleDB.",
        html_url: "https://github.com/adarshvermaa/analyzer",
        homepage: "https://analyzer.avwithai.com/",
        language: "Python",
        languageColor: "#3572A5",
        topics: ["fastapi", "react", "machine-learning", "nse-india", "sentiment-analysis", "docker", "timescaledb"],
        stars: 1,
        forks: 0,
        category: "Trading & Quant",
        featured: true,
        cloneUrl: "git clone https://github.com/adarshvermaa/analyzer.git"
    },
    {
        name: "monitoring-system",
        displayName: "monitoring-system (Rust Distributed Telemetry)",
        description: "📦 Complete production-grade distributed monitoring system built in Rust across 60+ files, 7,500+ LOC, 3 crates (agent, collector, common), with lock-free ring buffering, Prometheus scrapers, and WebSockets.",
        html_url: "https://github.com/adarshvermaa/monitoring-system",
        language: "Rust",
        languageColor: "#dea584",
        topics: ["rust", "tokio", "prometheus", "websockets", "distributed-systems", "telemetry"],
        stars: 1,
        forks: 0,
        category: "Systems & Rust",
        featured: true,
        cloneUrl: "git clone https://github.com/adarshvermaa/monitoring-system.git"
    },
    {
        name: "internet_wave",
        displayName: "internet_wave (WiFi Wave Radar)",
        description: "WiFi Wave scans your local network in Rust, estimates real-time distance to every connected device, pulses animated sonar waves from your router, and inspects live packet traffic (DNS / TLS ClientHello SNI).",
        html_url: "https://github.com/adarshvermaa/internet_wave",
        language: "Rust",
        languageColor: "#dea584",
        topics: ["rust", "packet-inspection", "wifi-scanner", "sonar", "sni-decoder", "network-radar"],
        stars: 0,
        forks: 0,
        category: "Systems & Rust",
        featured: true,
        cloneUrl: "git clone https://github.com/adarshvermaa/internet_wave.git"
    },
    {
        name: "trading_bot",
        displayName: "trading_bot (ICT / SMC Crypto Engine)",
        description: "Autonomous trading bot engineered with ICT / Smart Money Concepts, TradingView Chart Pattern Engine, TypeSafe Jev AI Cognitive Reasoning, Dynamic Leverage (10x–50x), and interactive Rich Terminal Dashboard UI.",
        html_url: "https://github.com/adarshvermaa/trading_bot",
        language: "Python",
        languageColor: "#3572A5",
        topics: ["python", "algorithmic-trading", "smart-money-concepts", "tradingview", "rich-tui"],
        stars: 0,
        forks: 0,
        category: "Trading & Quant",
        featured: true,
        cloneUrl: "git clone https://github.com/adarshvermaa/trading_bot.git"
    },
    {
        name: "Multi-Purpose-mcp-server",
        displayName: "Multi-Purpose-mcp-server (Model Context Protocol)",
        description: "Extensible Model Context Protocol (MCP) server core enabling modern LLMs to securely execute local and remote system tools, inspect environments, with dynamic plugin hot-reload and strict Pydantic validation.",
        html_url: "https://github.com/adarshvermaa/Multi-Purpose-mcp-server",
        language: "TypeScript",
        languageColor: "#3178c6",
        topics: ["mcp", "model-context-protocol", "llm-tools", "json-rpc", "ai-agents"],
        stars: 0,
        forks: 0,
        category: "AI & Generative AI",
        featured: true,
        cloneUrl: "git clone https://github.com/adarshvermaa/Multi-Purpose-mcp-server.git"
    },
    {
        name: "Scraper-agent",
        displayName: "Scraper-agent (AI Scraping & RAG Pipeline)",
        description: "High-performance web scraping platform with AI-powered ingestion, RAG, and multi-model summarization. Production-ready full-stack system for Scrape → Ingest → Vector Store → RAG → Multi-AI Summarize → Publish workflows.",
        html_url: "https://github.com/adarshvermaa/Scraper-agent",
        language: "TypeScript",
        languageColor: "#3178c6",
        topics: ["rag", "ai-agent", "web-scraper", "vector-database", "nestjs", "react"],
        stars: 0,
        forks: 0,
        category: "AI & Generative AI",
        featured: true,
        cloneUrl: "git clone https://github.com/adarshvermaa/Scraper-agent.git"
    },
    {
        name: "CyborgDB",
        displayName: "CyborgDB (AI Vector Encryption-in-Use)",
        description: "Demonstrates encryption-in-use for AI/ML workloads, preventing vector inversion attacks by keeping embeddings encrypted throughout storage and retrieval. Secure medical chatbot for patient records.",
        html_url: "https://github.com/adarshvermaa/CyborgDB",
        language: "TypeScript",
        languageColor: "#3178c6",
        topics: ["vector-database", "encryption-in-use", "privacy-preserving-ai", "rag-security"],
        stars: 0,
        forks: 0,
        category: "AI & Generative AI",
        featured: true,
        cloneUrl: "git clone https://github.com/adarshvermaa/CyborgDB.git"
    },
    {
        name: "margwa",
        displayName: "margwa (Ride-Sharing Mobile Platform)",
        description: "Margwa - Shared Ride Platform. Complete ride-sharing platform with React Native mobile apps for clients and drivers, featuring real-time geolocation tracking, matching algorithms, and push updates.",
        html_url: "https://github.com/adarshvermaa/margwa",
        language: "TypeScript",
        languageColor: "#3178c6",
        topics: ["react-native", "mobile-app", "ride-sharing", "taxi-booking", "geolocation"],
        stars: 1,
        forks: 0,
        category: "Mobile & Platform",
        featured: true,
        cloneUrl: "git clone https://github.com/adarshvermaa/margwa.git"
    },
    {
        name: "margwa_backend",
        displayName: "margwa_backend (Microservices Infrastructure)",
        description: "Scalable, high-performance backend infrastructure for the Margwa ride-sharing platform built with TypeScript and Go, orchestrating driver dispatch, route calculation, and real-time sockets.",
        html_url: "https://github.com/adarshvermaa/margwa_backend",
        language: "TypeScript",
        languageColor: "#3178c6",
        topics: ["go", "typescript", "microservices", "ride-sharing", "logistics"],
        stars: 0,
        forks: 0,
        category: "Full-Stack & Cloud",
        featured: false,
        cloneUrl: "git clone https://github.com/adarshvermaa/margwa_backend.git"
    },
    {
        name: "Iive-Stream",
        displayName: "Iive-Stream (Interactive Video Platform)",
        description: "A full-stack live streaming platform built with modern web technologies, enabling live streaming, real-time chat, channel subscriptions, and monetization features.",
        html_url: "https://github.com/adarshvermaa/Iive-Stream",
        language: "TypeScript",
        languageColor: "#3178c6",
        topics: ["live-streaming", "webrtc", "websockets", "chat", "monetization"],
        stars: 0,
        forks: 0,
        category: "Full-Stack & Cloud",
        featured: false,
        cloneUrl: "git clone https://github.com/adarshvermaa/Iive-Stream.git"
    },
    {
        name: "portfolio-site-nextjs",
        displayName: "portfolio-site-nextjs (Physics Simulation Portfolio)",
        description: "Portfolio website transformed into a physics simulation: Taylor Series polynomials in foreground, Lagrangian mechanics in background, custom Pythagorean easing, Next.js 16, and GSAP.",
        html_url: "https://github.com/adarshvermaa/portfolio-site-nextjs",
        language: "TypeScript",
        languageColor: "#3178c6",
        topics: ["nextjs", "gsap", "canvas-animation", "physics-simulation", "portfolio"],
        stars: 0,
        forks: 0,
        category: "Full-Stack & Cloud",
        featured: true,
        cloneUrl: "git clone https://github.com/adarshvermaa/portfolio-site-nextjs.git"
    },
    {
        name: "job-portal",
        displayName: "job-portal (Recruitment Platform)",
        description: "Full-stack job search and recruitment management portal built in Python, streamlining application workflows, candidate filtering, and listing automation.",
        html_url: "https://github.com/adarshvermaa/job-portal",
        language: "Python",
        languageColor: "#3572A5",
        topics: ["python", "recruitment", "job-board", "full-stack"],
        stars: 0,
        forks: 0,
        category: "Full-Stack & Cloud",
        featured: false,
        cloneUrl: "git clone https://github.com/adarshvermaa/job-portal.git"
    },
    {
        name: "dynamic-pdfeditor",
        displayName: "dynamic-pdfeditor (In-Browser PDF Studio)",
        description: "Dynamic visual PDF document editor enabling live browser-based form field insertion, visual editing, and PDF manipulation without server round-trips.",
        html_url: "https://github.com/adarshvermaa/dynamic-pdfeditor",
        language: "HTML",
        languageColor: "#e34c26",
        topics: ["pdf-editor", "javascript", "canvas", "document-tools"],
        stars: 0,
        forks: 0,
        category: "Tools & Utilities",
        featured: false,
        cloneUrl: "git clone https://github.com/adarshvermaa/dynamic-pdfeditor.git"
    },
    {
        name: "real_state",
        displayName: "real_state (Real Estate Discovery Hub)",
        description: "Modern commercial and residential real estate web application featuring property discovery, dynamic filters, interactive gallery, and agent inquiry flows.",
        html_url: "https://github.com/adarshvermaa/real_state",
        language: "TypeScript",
        languageColor: "#3178c6",
        topics: ["react", "real-estate", "property-portal", "tailwind-css"],
        stars: 0,
        forks: 0,
        category: "Full-Stack & Cloud",
        featured: false,
        cloneUrl: "git clone https://github.com/adarshvermaa/real_state.git"
    },
    {
        name: "streaming",
        displayName: "streaming (Media Processing Backend)",
        description: "Backend streaming media services and real-time audio/video distribution pipeline handling protocol conversion and low-latency delivery.",
        html_url: "https://github.com/adarshvermaa/streaming",
        language: "TypeScript",
        languageColor: "#3178c6",
        topics: ["streaming", "node-js", "video-pipeline", "rtmp-hls"],
        stars: 0,
        forks: 0,
        category: "Full-Stack & Cloud",
        featured: false,
        cloneUrl: "git clone https://github.com/adarshvermaa/streaming.git"
    },
    {
        name: "streaming_frontend",
        displayName: "streaming_frontend (Broadcast Client UI)",
        description: "Interactive video player frontend client with real-time viewer chat, responsive theater layouts, and multi-channel navigation.",
        html_url: "https://github.com/adarshvermaa/streaming_frontend",
        language: "TypeScript",
        languageColor: "#3178c6",
        topics: ["react", "streaming-ui", "video-player", "interactive"],
        stars: 0,
        forks: 0,
        category: "Full-Stack & Cloud",
        featured: false,
        cloneUrl: "git clone https://github.com/adarshvermaa/streaming_frontend.git"
    },
    {
        name: "portfolio",
        displayName: "portfolio (Classic Portfolio Web)",
        description: "Original personal engineering portfolio website showcasing interactive web projects and responsive layout foundations.",
        html_url: "https://github.com/adarshvermaa/portfolio",
        language: "TypeScript",
        languageColor: "#3178c6",
        topics: ["portfolio", "react", "typescript"],
        stars: 0,
        forks: 0,
        category: "Tools & Utilities",
        featured: false,
        cloneUrl: "git clone https://github.com/adarshvermaa/portfolio.git"
    },
    {
        name: "twenty",
        displayName: "twenty (Design & Style System)",
        description: "Clean CSS design system, utility templates, and modern responsive UI components for sleek web presentation.",
        html_url: "https://github.com/adarshvermaa/twenty",
        language: "CSS",
        languageColor: "#563d7c",
        topics: ["css", "styling", "design-system", "responsive-ui"],
        stars: 0,
        forks: 0,
        category: "Tools & Utilities",
        featured: false,
        cloneUrl: "git clone https://github.com/adarshvermaa/twenty.git"
    },
    {
        name: "codeub",
        displayName: "codeub (Systems & Snippet Lab)",
        description: "Code snippets repository, algorithm experiments, and developer utility tools for cross-language prototyping.",
        html_url: "https://github.com/adarshvermaa/codeub",
        language: "Shell",
        languageColor: "#89e051",
        topics: ["developer-tools", "snippets", "playground"],
        stars: 0,
        forks: 0,
        category: "Tools & Utilities",
        featured: false,
        cloneUrl: "git clone https://github.com/adarshvermaa/codeub.git"
    },
    {
        name: "thankyou_flutter",
        displayName: "AI RepCounter (thankyou_flutter)",
        description: "Production mobile fitness application published on Google Play. Uses on-device Google ML Kit Pose Detection to track workout form and count reps with zero server latency.",
        html_url: "https://github.com/adarshvermaa/thankyou_flutter",
        language: "Dart",
        languageColor: "#00B4AB",
        topics: ["flutter", "dart", "google-ml-kit", "pose-detection", "android", "fitness-app"],
        stars: 0,
        forks: 0,
        category: "Mobile & Platform",
        featured: true,
        cloneUrl: "git clone https://github.com/adarshvermaa/thankyou_flutter.git"
    },
    {
        name: "whichOne",
        displayName: "Soacil / WhichOne Mobile App",
        description: "Published social utility application on the Google Play Store featuring nearby map browsing, encrypted real-time chat, stories, camera tools, and Firebase real-time architecture.",
        html_url: "https://github.com/adarshvermaa/whichOne",
        language: "Dart",
        languageColor: "#00B4AB",
        topics: ["flutter", "dart", "firebase", "mapbox", "webrtc", "social-app"],
        stars: 0,
        forks: 0,
        category: "Mobile & Platform",
        featured: true,
        cloneUrl: "git clone https://github.com/adarshvermaa/whichOne.git"
    }
];

export const experience = [
    {
        role: "Associate Backend Developer",
        company: "Infinity Genesis Techso Private Limited",
        location: "Indore, India",
        period: "Nov 2024 – Dec 2025",
        points: [
            "Architected and delivered high-concurrency RESTful APIs and backend microservices using Node.js, Express, and Python (FastAPI), powering core product workflows for enterprise clients.",
            "Engineered performant MongoDB data models, complex aggregation pipelines, and strategic compound indexes, reducing p95 database query latency by 38% across high-volume collections.",
            "Implemented secure authentication and authorization layers leveraging JWT and RBAC, integrating third-party service webhooks, rate limiting, and defensive request validation schemas.",
            "Containerized backend microservices using Docker and streamlined CI/CD automated deployment pipelines on Linux environments, ensuring 99.9% uptime and rapid zero-downtime releases."
        ]
    },
    {
        role: "Full-Stack Developer",
        company: "Design of Time Co.",
        location: "Indore, India",
        period: "Oct 2023 – Nov 2024",
        points: [
            "Developed and maintained responsive, multi-tenant full-stack web applications using React.js, Next.js, TypeScript, and Node.js, delivering smooth user experiences across devices.",
            "Engineered clean, reusable frontend component libraries and centralized state management systems (Zustand/Redux), accelerating feature delivery cycles across the engineering team by 30%.",
            "Designed and integrated robust REST APIs, client-side caching strategies, and asynchronous data-fetching pipelines, cutting initial page load times by 40%.",
            "Collaborated with cross-functional design and backend teams in a hybrid workflow, resolving 50+ critical UI/UX, responsive rendering, and API synchronization issues."
        ]
    },
    {
        role: "Full-Stack Developer & AI Systems Engineer",
        company: "Freelance & Independent Engineering Consultancy",
        location: "Remote / India",
        period: "2019 – Present",
        points: [
            "Delivered 20+ bespoke client engagements across generative AI systems, quantitative trading platforms, real-time WebSockets, and production mobile applications.",
            "Architected custom Retrieval-Augmented Generation (RAG) and autonomous agent workflows interfacing with Claude, GPT-4, and Gemini APIs with structured tool-calling validation.",
            "Shipped and maintained 2 commercial mobile applications on the Google Play Store (AI RepCounter, Soacil), managing the entire lifecycle from Flutter codebase to release.",
            "Curated an open-source engineering footprint of 40+ repositories (23+ public), producing clean systems code in Rust, Python, and TypeScript with rigorous test suites."
        ]
    }
];
