"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { QuantumFieldBackground } from "@/components/ui/quantum-field-background";
import { experience, personalInfo } from "@/lib/data";
import { Briefcase, Calendar, MapPin, CheckCircle2, GraduationCap, Globe2 } from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export function About() {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                textRef.current,
                { y: 30, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: textRef.current,
                        start: "top 85%",
                        once: true,
                    },
                    y: 0,
                    opacity: 1,
                    duration: 0.7,
                    ease: "power3.out",
                    clearProps: "all",
                }
            );

            gsap.fromTo(
                ".experience-card",
                { y: 30, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: ".experience-list",
                        start: "top 85%",
                        once: true,
                    },
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.12,
                    ease: "power3.out",
                    clearProps: "all",
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="about"
            ref={containerRef}
            className="py-24 px-4 relative overflow-hidden bg-background"
        >
            {/* Ambient Background & Formulas */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <QuantumFieldBackground />
                <div className="absolute top-16 left-6 md:left-16 text-foreground/20 font-serif italic select-none pointer-events-none hidden md:block">
                    <div className="text-xl md:text-3xl font-mono">
                        iℏ ∂/∂t |Ψ⟩ = Ĥ |Ψ⟩
                    </div>
                    <span className="text-xs uppercase tracking-widest font-sans opacity-60">
                        Schrödinger State Evolution & Adaptive Systems
                    </span>
                </div>
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header */}
                <div ref={textRef} className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-mono mb-4">
                        <Briefcase className="w-3.5 h-3.5" />
                        <span>BACKGROUND & TRACK RECORD</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
                        About Adarsh Verma
                    </h2>

                    <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                        <p>
                            I am a <strong className="text-foreground">Full-Stack AI Engineer and Systems Architect</strong> with <strong className="text-foreground">5+ years of software development experience</strong> across software companies, freelance consulting, and high-performance open-source systems.
                        </p>
                        <p>
                            My engineering focus centers on <strong className="text-foreground">Autonomous AI/LLM applications</strong> using the <strong className="text-foreground">Model Context Protocol (MCP)</strong>, multi-agent frameworks, RAG pipelines, and concurrent distributed backends written in <strong className="text-foreground">Python and Rust</strong>.
                        </p>
                        <p className="text-sm md:text-base text-muted-foreground/90">
                            As an <strong className="text-foreground">independent freelancer and remote engineer</strong>, I have delivered over 20+ bespoke client engagements—from sub-second crypto trading bots and real-time WebSockets to production Flutter applications shipped to the Google Play Store with on-device ML.
                        </p>
                    </div>

                    {/* Remote Badge Card */}
                    <div className="mt-8 p-4 rounded-xl border border-border/60 bg-muted/20 backdrop-blur-md max-w-2xl mx-auto flex items-center justify-center gap-3 text-xs sm:text-sm text-foreground/80">
                        <Globe2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        <span>
                            Based in India • <strong>Open to Global Remote Work & Worldwide Relocation</strong>
                        </span>
                    </div>
                </div>

                {/* Experience Timeline */}
                <div className="experience-list space-y-8 mb-16">
                    <div className="text-center md:text-left mb-6">
                        <h3 className="text-2xl font-bold tracking-tight">Professional Experience</h3>
                        <p className="text-sm text-muted-foreground">
                            Production roles, client consulting, and high-scale systems delivery
                        </p>
                    </div>

                    <div className="grid gap-6">
                        {experience.map((item, idx) => (
                            <div
                                key={idx}
                                className="experience-card p-6 md:p-8 rounded-2xl border border-border/60 bg-muted/20 hover:bg-muted/30 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/40"
                            >
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                                    <div>
                                        <h4 className="text-xl font-bold text-foreground">
                                            {item.role}
                                        </h4>
                                        <div className="text-sm font-semibold text-cyan-400">
                                            {item.company}
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-muted-foreground">
                                        <span className="flex items-center gap-1">
                                            <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                                            {item.period}
                                        </span>
                                        <span>•</span>
                                        <span className="flex items-center gap-1">
                                            <MapPin className="w-3.5 h-3.5 text-violet-400" />
                                            {item.location}
                                        </span>
                                    </div>
                                </div>

                                <ul className="space-y-2.5 mt-4">
                                    {item.points.map((point, pIdx) => (
                                        <li
                                            key={pIdx}
                                            className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed"
                                        >
                                            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Education Card */}
                <div className="p-6 md:p-8 rounded-2xl border border-border/60 bg-muted/20 backdrop-blur-md flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/30 flex-shrink-0">
                            <GraduationCap className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-foreground">
                                Bachelor of Commerce (Honours) – B.Com (Hons.)
                            </h4>
                            <div className="text-xs text-muted-foreground font-mono mt-0.5">
                                University Degree • India • Graduated: 2021
                            </div>
                            <p className="text-xs text-muted-foreground mt-2 max-w-2xl leading-relaxed">
                                Self-driven engineering mastery forged through 5+ years of intense production software development, open-source systems architecture, and live commercial product releases.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
