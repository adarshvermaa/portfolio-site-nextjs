"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skills } from "@/lib/data";
import { QuantumFieldBackground } from "@/components/ui/quantum-field-background";

gsap.registerPlugin(ScrollTrigger);

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

                gsap.fromTo(items,
                    {
                        y: 20,
                        opacity: 0,
                        scale: 0.9
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
                        duration: 0.6,
                        stagger: 0.1,
                        ease: "back.out(1.7)",
                    }
                );
            });

            // Magnetic hover effect
            const pills = gsap.utils.toArray(".skill-pill") as HTMLElement[];
            pills.forEach((pill) => {
                pill.addEventListener("mouseenter", () => {
                    gsap.to(pill, { scale: 1.1, duration: 0.3, ease: "power2.out" });
                });
                pill.addEventListener("mouseleave", () => {
                    gsap.to(pill, { scale: 1, duration: 0.3, ease: "power2.out" });
                });

                // Mouse move magnetic effect logic would go here for advanced effect
                // Simplified for robustness
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="skills" ref={containerRef} className="py-24 px-4 relative overflow-hidden">
            {/* Quantum Field Background */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <QuantumFieldBackground />
                {/* Mathematical Formulations Overlay */}
                <div className="absolute top-10 left-5 md:left-20 text-foreground/30 font-serif font-bold pointer-events-none select-none animate-pulse flex flex-col gap-1">
                    <div className="text-2xl md:text-4xl">
                        det(A) = ∑ sgn(σ) ∏ a<sub className="text-sm">i,σ(i)</sub>
                    </div>
                    <span className="text-sm md:text-base font-sans font-normal tracking-widest uppercase opacity-70">
                        Volume Scaling (Determinant)
                    </span>
                </div>
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div ref={headerRef} className="mb-20 text-center">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 relative inline-block">
                        Technological Arsenal
                        <span className="absolute -top-6 -right-8 text-xs font-mono opacity-50 text-primary border border-primary/30 px-2 py-0.5 rounded-full">
                            v.2.0
                        </span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        A curated set of tools and frameworks I use to engineer scalable, high-performance digital solutions.
                    </p>
                </div>

                <div className="grid gap-16">
                    {skills.map((category, idx) => (
                        <div key={idx} className="skill-category grid md:grid-cols-[300px_1fr] gap-8 items-start border-t border-border/40 pt-16 first:border-0 first:pt-0 hover:bg-muted/5 transition-colors duration-500 rounded-xl p-4">
                            <div className="md:sticky md:top-24">
                                <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                                    {category.category}
                                    <span className="text-xs font-mono text-muted-foreground opacity-50">
                                        {`// 0${idx + 1}`}
                                    </span>
                                </h3>
                                <div className="h-0.5 w-12 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full mb-4" />
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {category.items.map((item, i) => (
                                    <div
                                        key={i}
                                        className="skill-pill group relative overflow-hidden rounded-lg"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                                        <div className="relative px-5 py-2.5 border border-border/50 bg-background/30 backdrop-blur-sm group-hover:border-cyan-500/30 transition-colors">
                                            <span className="font-medium text-sm md:text-base cursor-default flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/50 group-hover:bg-cyan-400 transition-colors" />
                                                {item}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
