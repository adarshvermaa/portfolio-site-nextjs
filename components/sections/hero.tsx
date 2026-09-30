"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, FolderGit2, Briefcase, ExternalLink, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { TaylorBackground } from "@/components/ui/taylor-background";
import { LagrangianBackground } from "@/components/ui/lagrangian-background";
import { QuantumFieldBackground } from "@/components/ui/quantum-field-background";
import { personalInfo } from "@/lib/data";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);
    const subTextRef = useRef<HTMLParagraphElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);
    const arrowRef = useRef<HTMLDivElement>(null);

    const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

    useIsomorphicLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            // Background floating animation
            gsap.to(".bg-blob", {
                x: "random(-40, 40)",
                y: "random(-40, 40)",
                duration: "random(10, 20)",
                ease: "sine.inOut",
                repeat: -1,
                yoyo: true,
            });

            // Entrance Timeline
            tl.from(imageRef.current, {
                scale: 0,
                opacity: 0,
                duration: 1.5,
                ease: "elastic.out(1, 0.75)",
            })
                .from(textRef.current?.querySelectorAll(".word") || [], {
                    y: 50,
                    opacity: 0,
                    duration: 1,
                    stagger: 0.05,
                    ease: "power3.out",
                }, "-=1.0")
                .to(".clipping-container", {
                    overflow: "visible",
                    duration: 0,
                })
                .from(subTextRef.current, {
                    y: 30,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out",
                }, "-=0.6")
                .from(ctaRef.current, {
                    y: 30,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out",
                }, "-=0.8");

            // Mouse Parallax Effect
            const container = containerRef.current;
            if (container) {
                const handleMouseMove = (e: MouseEvent) => {
                    const { clientX, clientY } = e;
                    const { innerWidth, innerHeight } = window;

                    const x = (clientX / innerWidth - 0.5) * 30;
                    const y = (clientY / innerHeight - 0.5) * 30;

                    gsap.to(textRef.current, {
                        x: -x,
                        y: -y,
                        duration: 1.5,
                        ease: "power2.out",
                        overwrite: "auto"
                    });

                    gsap.to(imageRef.current, {
                        x: -x * 0.5,
                        y: -y * 0.5,
                        duration: 1.5,
                        ease: "power2.out",
                        overwrite: "auto"
                    });

                    gsap.to(bgRef.current, {
                        x: x * 0.8,
                        y: y * 0.8,
                        duration: 2,
                        ease: "power2.out",
                        overwrite: "auto"
                    });
                };

                window.addEventListener("mousemove", handleMouseMove);

                return () => {
                    window.removeEventListener("mousemove", handleMouseMove);
                };
            }

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="min-h-[100dvh] flex flex-col justify-center items-center px-4 relative overflow-hidden pt-24 pb-12"
            style={{ isolation: 'isolate' }}
        >
            {/* Animated Background Elements */}
            <div ref={bgRef} className="absolute inset-0 pointer-events-none -z-10">
                <div className="absolute inset-0 opacity-40">
                    <QuantumFieldBackground />
                </div>

                <TaylorBackground />
                <LagrangianBackground />

                {/* Visual Formula Overlays */}
                <div className="absolute top-[12%] right-[5%] md:right-[10%] text-foreground/30 font-serif italic select-none pointer-events-none flex flex-col items-end gap-6 animate-pulse drop-shadow-lg z-0">
                    <div className="flex flex-col items-end">
                        <div className="text-xl md:text-3xl">f(x) = ∑ [ f⁽ⁿ⁾(a) / n! ] (x-a)ⁿ</div>
                        <span className="text-xs md:text-sm not-italic opacity-70 font-sans tracking-widest uppercase">Taylor Series</span>
                    </div>
                    <div className="flex flex-col items-end">
                        <div className="text-lg md:text-2xl opacity-90">d/dt(∂L/∂q̇) - ∂L/∂q = 0</div>
                        <span className="text-xs md:text-sm not-italic opacity-70 font-sans tracking-widest uppercase">Euler-Lagrange Equation</span>
                    </div>
                </div>

                <div className="bg-blob absolute top-[20%] left-[20%] w-72 h-72 bg-neutral-200/30 dark:bg-neutral-800/20 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-overlay filter opacity-50" />
            </div>

            <div className="max-w-5xl text-center space-y-6 md:space-y-8 flex flex-col items-center relative z-10">
                {/* Availability Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 backdrop-blur-md text-emerald-400 text-xs sm:text-sm font-medium animate-pulse">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>Available for Freelance & Remote Engagements Worldwide</span>
                </div>

                {/* Profile Image */}
                <div ref={imageRef} className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-muted/80 shadow-2xl group cursor-pointer">
                    <Image
                        src="/profile.jpg"
                        alt="Adarsh Verma"
                        fill
                        priority
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                </div>

                {/* Name & Roles */}
                <div className="space-y-2">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                        Adarsh Verma
                    </h2>
                    <p className="text-xs sm:text-sm md:text-base text-cyan-400 font-mono tracking-wider uppercase">
                        Full-Stack AI Engineer • Systems & Real-Time Software • Remote & Freelance Specialist
                    </p>
                </div>

                {/* Main Hero Slogan */}
                <h1 ref={textRef} className="text-[clamp(2.2rem,5.5vw,5.5rem)] font-extrabold tracking-tighter leading-tight perspective-[1000px]">
                    <span className="clipping-container inline-block overflow-hidden py-1">
                        <span className="word inline-block transform transition-transform hover:scale-110 duration-300 cursor-default">Autonomous</span>
                    </span>{" "}
                    <span className="clipping-container inline-block overflow-hidden py-1">
                        <span className="word inline-block transform transition-transform hover:scale-110 duration-300 cursor-default">Agents.</span>
                    </span>{" "}
                    <span className="clipping-container inline-block overflow-hidden py-1">
                        <span className="word inline-block transform transition-transform hover:scale-110 duration-300 cursor-default">Concurrent</span>
                    </span>{" "}
                    <span className="clipping-container inline-block overflow-hidden py-1">
                        <span className="word inline-block transform transition-transform hover:scale-110 duration-300 cursor-default text-cyan-400">Systems.</span>
                    </span>
                </h1>

                {/* Subtitle / Pitch */}
                <p ref={subTextRef} className="text-sm sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4 leading-relaxed">
                    Full-Stack AI Engineer with 5+ years building production systems. Specializing in Model Context Protocol (MCP) agents, high-throughput Rust distributed backends, quantitative trading bots, and production web & mobile applications.
                </p>

                {/* Quick Metrics Bar */}
                <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 py-2 px-4 rounded-2xl border border-border/50 bg-background/40 backdrop-blur-md text-xs sm:text-sm font-mono text-muted-foreground">
                    <span className="flex items-center gap-1.5 text-foreground font-semibold">
                        <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                        5+ Yrs Software Exp.
                    </span>
                    <span className="hidden sm:inline opacity-30">•</span>
                    <span className="flex items-center gap-1.5 text-foreground font-semibold">
                        <Briefcase className="w-3.5 h-3.5 text-violet-400" />
                        20+ Client Projects Delivered
                    </span>
                    <span className="hidden sm:inline opacity-30">•</span>
                    <span className="flex items-center gap-1.5 text-foreground font-semibold">
                        <FolderGit2 className="w-3.5 h-3.5 text-emerald-400" />
                        40+ Repos (23+ Public)
                    </span>
                    <span className="hidden sm:inline opacity-30">•</span>
                    <span className="flex items-center gap-1.5 text-foreground font-semibold">
                        2 Live Google Play Apps
                    </span>
                </div>

                {/* CTA Action Buttons */}
                <div ref={ctaRef} className="flex flex-wrap gap-3 sm:gap-4 justify-center pt-2">
                    <Link
                        href="#repositories"
                        className="px-6 sm:px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold rounded-full hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all hover:scale-105 active:scale-95 duration-200 flex items-center gap-2 text-sm"
                    >
                        <FolderGit2 className="w-4 h-4" />
                        <span>Browse GitHub Repos (23+)</span>
                    </Link>

                    <Link
                        href="#freelance"
                        className="px-6 sm:px-8 py-3 bg-foreground text-background font-semibold rounded-full hover:opacity-90 transition-all hover:scale-105 active:scale-95 duration-200 flex items-center gap-2 text-sm"
                    >
                        <Briefcase className="w-4 h-4" />
                        <span>Hire for Freelance / Remote</span>
                    </Link>

                    <Link
                        href="#projects"
                        className="px-6 sm:px-8 py-3 border border-border/80 bg-background/50 hover:bg-muted rounded-full font-medium transition-all hover:scale-105 active:scale-95 duration-200 text-sm"
                    >
                        Featured Work
                    </Link>
                </div>
            </div>

            <div ref={arrowRef} className="animate-bounce cursor-pointer hover:text-primary transition-colors mt-12 pb-4">
                <Link href="#about" aria-label="Scroll to About section">
                    <ArrowDown className="w-6 h-6 text-muted-foreground" />
                </Link>
            </div>
        </section>
    );
}
