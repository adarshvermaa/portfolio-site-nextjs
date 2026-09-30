"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects, Project } from "@/lib/data";
import { QuantumFieldBackground } from "@/components/ui/quantum-field-background";
import Link from "next/link";
import Image from "next/image";
import {
    Github,
    ExternalLink,
    ArrowUpRight,
    Terminal,
    Sparkles,
    CheckCircle2,
    Activity,
    Layers,
    Code2,
    Shield
} from "lucide-react";
import { Button } from "@/components/ui/button";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const PROJECT_CATEGORIES = [
    "All",
    "AI & MCP",
    "Systems & Rust",
    "Trading & Quant",
    "Mobile & Web"
] as const;

function ProjectVisualHeader({ project }: { project: Project }) {
    const isLocalRealImage =
        project.image === "/image.png" ||
        project.image === "/rapsy-home.jpeg" ||
        project.image === "/whichone/whichone-showcase.png";

    if (isLocalRealImage) {
        return (
            <div className="project-image absolute inset-0 bg-muted">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent" />
            </div>
        );
    }

    // High-tech terminal / architecture visualization fallback for backend & systems projects
    return (
        <div className="project-image absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 border-b border-border/40 p-5 flex flex-col justify-between overflow-hidden">
            {/* Ambient circuit glow */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-violet-500/10 rounded-full blur-2xl pointer-events-none" />

            {/* Window controls */}
            <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                    <span className="ml-2 text-[10px] font-mono text-muted-foreground">
                        {project.title.toLowerCase().replace(/[^a-z0-9]/g, "-").slice(0, 28)}.sys
                    </span>
                </div>

                <div className="flex items-center gap-1.5 text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-md border border-cyan-500/20">
                    <Activity className="w-3 h-3 animate-pulse" />
                    <span>PRODUCTION ACTIVE</span>
                </div>
            </div>

            {/* Code / Architecture snippet */}
            <div className="font-mono text-xs text-muted-foreground/80 space-y-1 relative z-10 my-auto py-2">
                <div className="text-cyan-400/90 text-sm font-semibold truncate">
                    &gt; {project.title}
                </div>
                <div className="text-[11px] text-muted-foreground line-clamp-2">
                    {project.technologies.slice(0, 4).join(" • ")}
                </div>
                <div className="text-[10px] text-neutral-400 pt-1 flex items-center gap-2">
                    <span className="text-emerald-400 font-bold">STATUS:</span>
                    <span>200 OK • Async Tokio/FastAPI Stream</span>
                </div>
            </div>

            {/* Bottom bar indicator */}
            <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 border-t border-border/30 pt-2 relative z-10">
                <span>VER: v2.4.0-stable</span>
                <span className="text-cyan-400">LATENCY: &lt;1.8ms</span>
            </div>
        </div>
    );
}

export function Projects() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [selectedCategory, setSelectedCategory] = useState<string>("All");

    const filteredProjects = useMemo(() => {
        if (selectedCategory === "All") return projects;

        return projects.filter((p) => {
            const techs = p.technologies.join(" ").toLowerCase();
            const title = p.title.toLowerCase();

            if (selectedCategory === "AI & MCP") {
                return (
                    techs.includes("mcp") ||
                    techs.includes("model context") ||
                    techs.includes("rag") ||
                    title.includes("mcp") ||
                    title.includes("ai") ||
                    title.includes("cyborgdb") ||
                    title.includes("scraper")
                );
            }
            if (selectedCategory === "Systems & Rust") {
                return techs.includes("rust") || techs.includes("tokio") || techs.includes("packet");
            }
            if (selectedCategory === "Trading & Quant") {
                return (
                    techs.includes("trading") ||
                    techs.includes("xgboost") ||
                    title.includes("scalp") ||
                    title.includes("trading") ||
                    title.includes("analyzer") ||
                    title.includes("alphascalper")
                );
            }
            if (selectedCategory === "Mobile & Web") {
                return techs.includes("flutter") || techs.includes("react") || techs.includes("next.js");
            }
            return true;
        });
    }, [selectedCategory]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".project-card",
                { y: 35, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 85%",
                        once: true,
                    },
                    y: 0,
                    opacity: 1,
                    duration: 0.7,
                    stagger: 0.1,
                    ease: "power3.out",
                    clearProps: "all",
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, [selectedCategory]);

    return (
        <section id="projects" ref={containerRef} className="py-24 px-4 bg-background overflow-hidden relative">
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

            {/* Quantum Field Background */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <QuantumFieldBackground />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="mb-14 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-mono mb-4">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>FEATURED SYSTEMS & CLIENT DELIVERABLES</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
                        Featured Engineering Projects
                    </h2>

                    <p className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto mb-8">
                        Production systems, Model Context Protocol servers, high-frequency quant terminals, and Google Play Store applications.
                    </p>

                    {/* Category Filter Tabs */}
                    <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
                        {PROJECT_CATEGORIES.map((cat) => {
                            const isSelected = selectedCategory === cat;
                            return (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`text-xs px-4 py-2 rounded-full border transition-all duration-200 ${
                                        isSelected
                                            ? "border-cyan-500 bg-cyan-500/20 text-cyan-300 font-semibold shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                                            : "border-border/60 bg-muted/20 text-muted-foreground hover:text-foreground hover:border-border"
                                    }`}
                                >
                                    {cat}
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            className="project-card group relative flex flex-col justify-between bg-muted/20 hover:bg-muted/30 border border-border/60 hover:border-cyan-500/40 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10"
                        >
                            <div>
                                {/* Visual Header Area */}
                                <div className="relative aspect-[16/9] w-full overflow-hidden">
                                    <ProjectVisualHeader project={project} />

                                    {/* Badge overlay */}
                                    {project.badge && (
                                        <div className="absolute top-3 left-3 z-20">
                                            <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-background/80 backdrop-blur-md border border-cyan-500/40 text-cyan-300 shadow-md">
                                                {project.badge}
                                            </span>
                                        </div>
                                    )}

                                    {/* Action buttons overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 bg-black/60 backdrop-blur-[2px]">
                                        <div className="flex gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                            {project.github && (
                                                <Button asChild size="icon" variant="secondary" className="rounded-full shadow-lg">
                                                    <Link href={project.github} target="_blank" rel="noopener noreferrer" title="View Source on GitHub">
                                                        <Github className="w-5 h-5" />
                                                    </Link>
                                                </Button>
                                            )}
                                            {project.link && (
                                                <Button asChild size="icon" className="rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-lg">
                                                    <Link href={project.link} target="_blank" rel="noopener noreferrer" title="Open Project Link">
                                                        <ArrowUpRight className="w-5 h-5" />
                                                    </Link>
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Body Content */}
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-3 gap-3">
                                        <h3 className="text-xl sm:text-2xl font-bold tracking-tight group-hover:text-cyan-400 transition-colors">
                                            {project.title}
                                        </h3>
                                        <Link
                                            href={project.github || project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-muted-foreground hover:text-cyan-400 transition-colors flex-shrink-0 mt-1"
                                        >
                                            <ExternalLink className="w-5 h-5" />
                                        </Link>
                                    </div>

                                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Highlights list from Resume */}
                                    {project.highlights && project.highlights.length > 0 && (
                                        <div className="space-y-1.5 mb-5 p-3 rounded-xl bg-background/40 border border-border/40">
                                            {project.highlights.map((highlight, hIdx) => (
                                                <div key={hIdx} className="flex items-start gap-2 text-xs text-muted-foreground">
                                                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                                                    <span>{highlight}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Bottom Technologies Pills & Direct Link */}
                            <div className="px-6 pb-6 pt-2 border-t border-border/30 flex flex-col gap-4">
                                <div className="flex flex-wrap gap-1.5">
                                    {project.technologies.slice(0, 6).map((tech, i) => (
                                        <span
                                            key={i}
                                            className="text-[11px] px-2.5 py-1 border border-border/60 rounded-md bg-background/50 font-mono text-muted-foreground"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                    {project.technologies.length > 6 && (
                                        <span className="text-[11px] px-2 py-1 text-muted-foreground font-mono">
                                            +{project.technologies.length - 6} more
                                        </span>
                                    )}
                                </div>

                                <div className="flex items-center justify-between gap-3 text-xs">
                                    <Link
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1 group/btn"
                                    >
                                        <span>View Code on GitHub</span>
                                        <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                                    </Link>

                                    {project.link && project.link !== project.github && (
                                        <Link
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-muted-foreground hover:text-foreground font-medium flex items-center gap-1"
                                        >
                                            <span>Live / Case Study</span>
                                            <ExternalLink className="w-3.5 h-3.5" />
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
