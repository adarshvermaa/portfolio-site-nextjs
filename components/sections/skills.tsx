"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skills } from "@/lib/data";
import { QuantumFieldBackground } from "@/components/ui/quantum-field-background";
import {
    Sparkles,
    Cpu,
    Code2,
    Server,
    Layers,
    Database,
    Cloud,
    TrendingUp
} from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const categoryIcons = [
    Sparkles,    // AI & GenAI
    Code2,       // Languages
    Server,      // Backend & Systems
    Layers,      // Frontend & Mobile
    Database,    // Databases & Storage
    Cloud,       // DevOps & Infra
    TrendingUp   // Data, ML & Quant
];

export function Skills() {
    const containerRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Header animation
            gsap.from(headerRef.current, {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            });

            // Staggered list items
            const categories = gsap.utils.toArray(".skill-category") as HTMLElement[];
            categories.forEach((category) => {
                const items = category.querySelectorAll(".skill-pill");

                gsap.fromTo(
                    items,
                    {
                        y: 20,
                        opacity: 0,
                        scale: 0.9,
                    },
                    {
                        scrollTrigger: {
                            trigger: category,
                            start: "top 85%",
                            toggleActions: "play none none reverse",
                        },
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        duration: 0.5,
                        stagger: 0.05,
                        ease: "back.out(1.7)",
                    }
                );
            });

            // Hover effect
            const pills = gsap.utils.toArray(".skill-pill") as HTMLElement[];
            pills.forEach((pill) => {
                pill.addEventListener("mouseenter", () => {
                    gsap.to(pill, { scale: 1.05, duration: 0.25, ease: "power2.out" });
                });
                pill.addEventListener("mouseleave", () => {
                    gsap.to(pill, { scale: 1, duration: 0.25, ease: "power2.out" });
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="skills" ref={containerRef} className="py-24 px-4 relative overflow-hidden bg-background">
            {/* Quantum Field Background */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <QuantumFieldBackground />
                {/* Mathematical Formulations Overlay */}
                <div className="absolute top-10 left-5 md:left-20 text-foreground/25 font-serif font-bold pointer-events-none select-none animate-pulse flex flex-col gap-1 hidden md:flex">
                    <div className="text-2xl md:text-4xl">
                        det(A) = ∑ sgn(σ) ∏ a<sub className="text-sm">i,σ(i)</sub>
                    </div>
                    <span className="text-sm md:text-base font-sans font-normal tracking-widest uppercase opacity-70">
                        High-Dimensional Space & Determinants
                    </span>
                </div>
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div ref={headerRef} className="mb-20 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-mono mb-4">
                        <Cpu className="w-3.5 h-3.5" />
                        <span>COMPREHENSIVE TECHNICAL CAPABILITIES</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 relative inline-block">
                        Technical Arsenal
                        <span className="absolute -top-4 -right-8 text-xs font-mono opacity-80 text-cyan-400 border border-cyan-500/30 px-2 py-0.5 rounded-full bg-cyan-500/10">
                            Resume Verified
                        </span>
                    </h2>

                    <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
                        Curated systems, frameworks, and protocols deployed across commercial production environments and high-throughput microservices.
                    </p>
                </div>

                <div className="grid gap-10">
                    {skills.map((category, idx) => {
                        const Icon = categoryIcons[idx % categoryIcons.length];
                        return (
                            <div
                                key={idx}
                                className="skill-category grid md:grid-cols-[280px_1fr] gap-6 md:gap-8 items-start border-t border-border/50 pt-10 first:border-0 first:pt-0 hover:bg-muted/10 transition-colors duration-300 rounded-2xl p-4 md:p-6"
                            >
                                <div className="md:sticky md:top-24">
                                    <div className="flex items-center gap-2.5 mb-2">
                                        <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                                            <Icon className="w-4 h-4" />
                                        </div>
                                        <h3 className="text-xl font-bold text-foreground">
                                            {category.category}
                                        </h3>
                                    </div>

                                    {category.description && (
                                        <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                                            {category.description}
                                        </p>
                                    )}

                                    <div className="h-0.5 w-12 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full" />
                                </div>

                                <div className="flex flex-wrap gap-2.5">
                                    {category.items.map((item, i) => (
                                        <div
                                            key={i}
                                            className="skill-pill group relative overflow-hidden rounded-xl border border-border/70 bg-background/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                                            <div className="relative px-4 py-2 flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 group-hover:bg-cyan-300 group-hover:shadow-[0_0_8px_rgba(6,182,212,0.8)] transition-all" />
                                                <span className="font-medium text-xs sm:text-sm text-foreground/90 group-hover:text-foreground transition-colors">
                                                    {item}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
