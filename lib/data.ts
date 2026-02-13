export const projects = [
    {
        id: 1,
        title: "AI-Powered Financial Analyst",
        description: "Real-time stock market analysis platform using RAG and Vector Embeddings to provide investment insights.",
        technologies: ["Next.js", "Python", "LangChain", "OpenAI", "Pinecone", "WebSockets"],
        image: "/placeholder-project-1.jpg",
        link: "https://example.com",
        github: "https://github.com/example/project",
    },
    {
        id: 2,
        title: "Cloud-Native E-Commerce Microservices",
        description: "Scalable e-commerce backend built with Node.js microservices, deployed on AWS Kubernetes (EKS).",
        technologies: ["Node.js", "Docker", "Kubernetes", "AWS", "Redis", "gRPC"],
        image: "/placeholder-project-2.jpg",
        link: "https://example.com",
        github: "https://github.com/example/project",
    },
    {
        id: 3,
        title: "Real-Time Collaboration Suite",
        description: "Video conferencing and document collaboration tool utilizing WebRTC and Socket.io for low-latency communication.",
        technologies: ["React", "WebRTC", "Socket.io", "Redis", "Express"],
        image: "/placeholder-project-3.jpg",
        link: "https://example.com",
        github: "https://github.com/example/project",
    },
    {
        id: 4,
        title: "Enterprise SaaS Dashboard",
        description: "High-performance analytics dashboard processing large datasets with SQL and vector-based search.",
        technologies: ["Next.js", "PostgreSQL", "Tailwind CSS", "Rust", "D3.js"],
        image: "/placeholder-project-4.jpg",
        link: "https://example.com",
        github: "https://github.com/example/project",
    },
];

export const skills: { category: string; items: string[] }[] = [
    {
        category: "Programming Languages",
        items: [
            "JavaScript",
            "TypeScript",
            "Rust",
            "Go",
            "Python",
            "SQL",
            "HTML5",
            "CSS3"
        ]
    },
    {
        category: "Frontend Technologies",
        items: [
            "React",
            "Next.js",
            "Redux",
            "Tailwind CSS",
            "Socket.IO",
            "WebRTC",
            "Responsive Design",
            "SEO"
        ]
    },
    {
        category: "Backend Technologies",
        items: [
            "Node.js",
            "Express",
            "GraphQL",
            "RESTful APIs",
            "WebSockets",
            "Microservices",
            "Server Administration",
            "SSH",
            "API Integration"
        ]
    },
    {
        category: "Databases & Storage",
        items: [
            "PostgreSQL",
            "MongoDB",
            "MySQL",
            "Redis",
            "Cassandra",
            "DynamoDB",
            "Vector Databases",
            "NoSQL"
        ]
    },
    {
        category: "Cloud & Infrastructure",
        items: [
            "AWS (EC2, S3, RDS, Lightsail)",
            "Google Cloud Platform (GCP)",
            "Azure",
            "Docker",
            "Kubernetes",
            "Nginx",
            "Linux",
            "CI/CD"
        ]
    },
    {
        category: "AI / ML & Advanced Tech",
        items: [
            "OpenAI",
            "Anthropic Claude",
            "RAG (Retrieval-Augmented Generation)",
            "Vector Embeddings",
            "AI Agents",
            "LLM Integration"
        ]
    },
    {
        category: "Architecture & Tools",
        items: [
            "Software Architecture",
            "System Design",
            "Git",
            "GitHub",
            "Postman",
            "Visual Studio Code",
            "Agile / Scrum"
        ]
    }
];
