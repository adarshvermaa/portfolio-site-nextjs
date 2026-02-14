"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { TaylorBackground } from "@/components/ui/taylor-background";
import { LagrangianBackground } from "@/components/ui/lagrangian-background";
import { QuantumFieldBackground } from "@/components/ui/quantum-field-background";

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

    // Use useLayoutEffect for animations to prevent flash of unstyled content
    // But use a safe constrained version for Next.js SSR
    const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

    useIsomorphicLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            // Background floating animation (for the remaining blob)
            gsap.to(".bg-blob", {
                x: "random(-40, 40)",
                y: "random(-40, 40)",
                duration: "random(10, 20)",
                ease: "sine.inOut",
                repeat: -1,
                yoyo: true,
            });

            // Entrance Timeline
            // Ensure elements are visible at start of animation
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
            className="min-h-[100dvh] flex flex-col justify-center items-center px-4 relative overflow-hidden"
            style={{ isolation: 'isolate' }}
        >
            {/* Animated Background Elements - Combined Math Visualization */}
            <div ref={bgRef} className="absolute inset-0 pointer-events-none -z-10">
                {/* Base Layer: Quantum Field (Unified Site Theme) */}
                <div className="absolute inset-0 opacity-40">
                    <QuantumFieldBackground />
                </div>

                {/* Core Animation (Taylor) */}
                <TaylorBackground />
                {/* Secondary Light Animation (Lagrangian) - Deeper Z-Index */}
                <LagrangianBackground />

                {/* Visual Formula Overlays */}
                <div className="absolute top-[15%] right-[5%] md:right-[10%] text-foreground/30 font-serif italic select-none pointer-events-none flex flex-col items-end gap-6 animate-pulse drop-shadow-lg z-0">
                    <div className="flex flex-col items-end">
                        <div className="text-xl md:text-3xl">f(x) = ∑ [ f⁽ⁿ⁾(a) / n! ] (x-a)ⁿ</div>
                        <span className="text-xs md:text-sm not-italic opacity-70 font-sans tracking-widest uppercase">Taylor Series</span>
                    </div>
                    <div className="flex flex-col items-end">
                        <div className="text-lg md:text-2xl opacity-90">d/dt(∂L/∂q̇) - ∂L/∂q = 0</div>
                        <span className="text-xs md:text-sm not-italic opacity-70 font-sans tracking-widest uppercase">Euler-Lagrange Equation</span>
                    </div>
                </div>

                {/* Keep one subtle blob for texture/vignette */}
                <div className="bg-blob absolute top-[20%] left-[20%] w-72 h-72 bg-neutral-200/30 dark:bg-neutral-800/20 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-overlay filter opacity-50" />
            </div>

            <div className="max-w-4xl text-center space-y-6 md:space-y-8 flex flex-col items-center relative z-10">
                <div ref={imageRef} className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-muted shadow-2xl mb-2 sm:mb-4 group cursor-pointer">
                    <Image
                        src="/profile.jpg"
                        alt="Adarsh Verma"
                        fill
                        priority
                        className="object-cover transition-transform duration-500 group-hover:scale-110 "
                    />
                </div>

                <div className="space-y-1 sm:space-y-2 ">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight">Adarsh Verma</h2>
                    <p className="text-xs sm:text-sm md:text-base text-muted-foreground uppercase tracking-widest">
                        Full Stack Developer • AI Engineer • System Architect
                    </p>
                </div>

                <h1 ref={textRef} className="text-[clamp(2rem,5vw,5.5rem)] font-bold tracking-tighter leading-tight perspective-[1000px] mb-8 pb-2">
                    <span className="clipping-container inline-block overflow-hidden py-1"><span className="word inline-block transform transition-transform hover:scale-110 duration-300 cursor-default">Building</span></span>{" "}
                    <span className="clipping-container inline-block overflow-hidden py-1"><span className="word inline-block transform transition-transform hover:scale-110 duration-300 cursor-default">Scalable</span></span>{" "}
                    <span className="clipping-container inline-block overflow-hidden py-1"><span className="word inline-block transform transition-transform hover:scale-110 duration-300 cursor-default">Intelligent</span></span>{" "}
                    <span className="clipping-container inline-block overflow-hidden py-1"><span className="word inline-block transform transition-transform hover:scale-110 duration-300 cursor-default">Systems</span></span>
                </h1>

                <p ref={subTextRef} className="text-base sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto px-4">
                    Full Stack Engineer architecting high-performance web applications, cloud infrastructure, and AI-driven solutions.
                </p>

                <div ref={ctaRef} className="flex gap-4 justify-center">
                    <Link
                        href="#projects"
                        className="px-8 py-3 bg-foreground text-background rounded-full font-medium hover:opacity-90 transition-all hover:scale-105 active:scale-95 duration-200"
                    >
                        View Work
                    </Link>
                    <Link
                        href="#contact"
                        className="px-8 py-3 border border-border rounded-full font-medium hover:bg-muted transition-all hover:scale-105 active:scale-95 duration-200"
                    >
                        Contact Me
                    </Link>
                </div>
            </div>

            <div ref={arrowRef} className="animate-bounce cursor-pointer hover:text-primary transition-colors mt-12 pb-4">
                <Link href="#about">
                    <ArrowDown className="w-6 h-6 text-muted-foreground" />
                </Link>
            </div>
        </section>
    );
}
