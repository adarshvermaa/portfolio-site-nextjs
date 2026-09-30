"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { freelanceOfferings, personalInfo } from "@/lib/data";
import { QuantumFieldBackground } from "@/components/ui/quantum-field-background";
import Link from "next/link";
import {
    Briefcase,
    Globe,
    Clock,
    Zap,
    CheckCircle2,
    ArrowUpRight,
    MessageSquareCode,
    Bot,
    Cpu,
    TrendingUp,
    Smartphone
} from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const serviceIcons = [Bot, Cpu, TrendingUp, Smartphone];

export function FreelanceServices() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".service-card",
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
            id="freelance"
            ref={containerRef}
            className="py-24 px-4 relative overflow-hidden bg-background"
        >
            {/* Ambient Background */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <QuantumFieldBackground />
                <div className="absolute top-10 left-8 md:left-24 text-foreground/20 font-serif italic select-none pointer-events-none hidden md:block">
                    <div className="text-xl md:text-3xl font-mono">
                        ∇ · J + ∂ρ/∂t = 0
                    </div>
                    <span className="text-xs uppercase tracking-widest font-sans opacity-60">
                        Continuity & High-Velocity Engineering Delivery
                    </span>
                </div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-mono mb-4">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span>AVAILABLE FOR FREELANCE & REMOTE ROLES WORLDWIDE</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
                        Freelance & Remote Consulting
                    </h2>

                    <p className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto">
                        Delivering production-grade AI systems, quantitative trading platforms, concurrent backends, and full-stack web/mobile applications for global clients, startups, and high-velocity engineering teams.
                    </p>

                    {/* Quick Stats Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto mt-10">
                        {personalInfo.stats.map((stat, idx) => (
                            <div
                                key={idx}
                                className="p-4 rounded-xl border border-border/60 bg-muted/20 backdrop-blur-sm text-center"
                            >
                                <div className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-1">
                                    {stat.value}
                                </div>
                                <div className="text-xs text-muted-foreground font-medium">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Offerings Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {freelanceOfferings.map((offering, idx) => {
                        const Icon = serviceIcons[idx % serviceIcons.length];
                        return (
                            <div
                                key={idx}
                                className="service-card group p-8 rounded-2xl border border-border/60 bg-muted/20 hover:bg-muted/30 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/40 hover:shadow-[0_10px_35px_rgba(6,182,212,0.12)] flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-center justify-between gap-4 mb-4">
                                        <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 group-hover:scale-110 transition-transform">
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <div className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground px-3 py-1 rounded-full border border-border/60 bg-background/50">
                                            <Clock className="w-3.5 h-3.5 text-cyan-400" />
                                            <span>{offering.timeline}</span>
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold tracking-tight mb-2 group-hover:text-cyan-400 transition-colors">
                                        {offering.title}
                                    </h3>
                                    <p className="text-xs font-mono text-cyan-400/80 mb-4">
                                        {offering.tagline}
                                    </p>

                                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                                        {offering.description}
                                    </p>

                                    {/* Key Deliverables */}
                                    <div className="space-y-2 mb-6">
                                        <div className="text-xs font-semibold uppercase tracking-wider text-foreground/80 mb-2">
                                            Deliverables:
                                        </div>
                                        {offering.deliverables.map((item, dIdx) => (
                                            <div key={dIdx} className="flex items-start gap-2 text-xs text-muted-foreground">
                                                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    {/* Tech Stack Pills */}
                                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border/40 mb-6">
                                        {offering.techStack.map((tech, tIdx) => (
                                            <span
                                                key={tIdx}
                                                className="text-[11px] px-2.5 py-1 rounded-md bg-background/60 border border-border/60 font-mono text-muted-foreground"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Action button */}
                                    <Link
                                        href="#contact"
                                        className="w-full py-2.5 px-4 rounded-xl border border-cyan-500/40 bg-cyan-500/10 hover:bg-cyan-500 text-cyan-300 hover:text-white font-medium text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-200"
                                    >
                                        <span>Inquire About This Service</span>
                                        <ArrowUpRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Remote & Freelance Advantages Card */}
                <div className="p-8 md:p-10 rounded-2xl border border-border/70 bg-gradient-to-br from-muted/30 via-background/40 to-muted/20 backdrop-blur-md">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/30 flex-shrink-0">
                                <Globe className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-base font-bold mb-1">Global Remote Ready</h4>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    Experienced working asynchronously with US, European, and APAC teams with overlapping working hours, structured sprints, and daily asynchronous standups.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 flex-shrink-0">
                                <Zap className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-base font-bold mb-1">High-Velocity Delivery</h4>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    Proven track record of turning complex requirements into production releases rapidly without compromising type safety, test coverage, or maintainability.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex-shrink-0">
                                <Briefcase className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-base font-bold mb-1">Bespoke Contract Flexibility</h4>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    Available for fixed-scope milestone projects, ongoing fractional engineering advisory, or full-time remote contracts with seamless integration.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="text-center sm:text-left">
                            <div className="text-sm font-semibold text-foreground">
                                Have an immediate project or engineering challenge?
                            </div>
                            <div className="text-xs text-muted-foreground">
                                Let&apos;s schedule a discussion and outline your technical architecture.
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <Link
                                href={`mailto:${personalInfo.contactEmail}`}
                                className="px-5 py-2.5 rounded-full bg-foreground text-background text-xs font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
                            >
                                <MessageSquareCode className="w-4 h-4" />
                                <span>Email Me Directly</span>
                            </Link>
                            <Link
                                href="#contact"
                                className="px-5 py-2.5 rounded-full border border-border bg-background/60 hover:bg-muted text-xs font-semibold transition-colors"
                            >
                                Send Inquiry
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
