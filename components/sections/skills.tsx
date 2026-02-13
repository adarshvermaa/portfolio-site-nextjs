"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skills } from "@/lib/data";

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
        <section id="skills" ref={containerRef} className="py-24 px-4 bg-muted/10">
            <div className="max-w-6xl mx-auto">
                <div ref={headerRef} className="mb-20 text-center">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">Technological Arsenal</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        A curated set of tools and frameworks I use to engineer scalable, high-performance digital solutions.
                    </p>
                </div>

                <div className="grid gap-16">
                    {skills.map((category, idx) => (
                        <div key={idx} className="skill-category grid md:grid-cols-[300px_1fr] gap-8 items-start border-t border-border/40 pt-16 first:border-0 first:pt-0">
                            <div className="md:sticky md:top-24">
                                <h3 className="text-2xl font-bold mb-2">{category.category}</h3>
                                <div className="h-1 w-12 bg-primary rounded-full mb-4" />
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {category.items.map((item, i) => (
                                    <div
                                        key={i}
                                        className="skill-pill group relative overflow-hidden"
                                    >
                                        <div className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                                        <div className="relative px-6 py-3 border border-border rounded-lg bg-background/50 hover:border-primary/50 transition-colors">
                                            <span className="font-medium text-sm md:text-base cursor-default">{item}</span>
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
