"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/lib/data";
import Link from "next/link";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

export function Projects() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Entrance animation
            gsap.from(".project-card", {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                },
                y: 100,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
            });

            // 3D Tilt Effect
            const cards = gsap.utils.toArray(".project-card") as HTMLElement[];

            cards.forEach((card) => {
                const content = card.querySelector(".project-content") as HTMLElement;
                const image = card.querySelector(".project-image") as HTMLElement;

                card.addEventListener("mousemove", (e: MouseEvent) => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;

                    const xPercent = (x / rect.width - 0.5) * 20; // -10 to 10
                    const yPercent = (y / rect.height - 0.5) * -20; // 10 to -10 (inverted for tilt)

                    gsap.to(content, {
                        rotateX: yPercent,
                        rotateY: xPercent,
                        transformPerspective: 1000,
                        duration: 0.5,
                        ease: "power2.out",
                    });

                    // Parallax image movement opposite to tilt
                    gsap.to(image, {
                        x: -xPercent * 2,
                        y: yPercent * 2,
                        scale: 1.1,
                        duration: 0.5,
                        ease: "power2.out",
                    });
                });

                card.addEventListener("mouseleave", () => {
                    gsap.to(content, {
                        rotateX: 0,
                        rotateY: 0,
                        duration: 0.5,
                        ease: "power2.out",
                    });
                    gsap.to(image, {
                        x: 0,
                        y: 0,
                        scale: 1,
                        duration: 0.5,
                        ease: "power2.out",
                    });
                });
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="projects" ref={containerRef} className="py-24 px-4 bg-background overflow-hidden relative">
            {/* Background accents */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

            <div className="max-w-7xl mx-auto">
                <div className="mb-20 text-center">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">Featured Works</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        A showcase of my recent technical endeavors, pushed to production.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="project-card group perspective-1000"
                        >
                            <div className="project-content p-2 bg-muted/30 border border-border/50 rounded-2xl relative transition-shadow hover:shadow-2xl hover:shadow-primary/10 duration-500">
                                <div className="relative aspect-[16/9] overflow-hidden rounded-xl mb-6">
                                    <div className="project-image absolute inset-0 bg-muted">
                                        {/* Placeholder gradient matching B&W theme */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-neutral-200 to-neutral-400 dark:from-neutral-800 dark:to-neutral-950" />

                                        {/* Overlay text for 'View Project' */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 bg-black/40 backdrop-blur-[2px]">
                                            <div className="flex gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                                <Button asChild size="icon" variant="secondary" className="rounded-full">
                                                    <Link href={project.github} target="_blank">
                                                        <Github className="w-5 h-5" />
                                                    </Link>
                                                </Button>
                                                <Button asChild size="icon" className="rounded-full">
                                                    <Link href={project.link} target="_blank">
                                                        <ArrowUpRight className="w-5 h-5" />
                                                    </Link>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="px-4 pb-4">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">{project.title}</h3>
                                        <Link href={project.link} target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                                            <ExternalLink className="w-5 h-5" />
                                        </Link>
                                    </div>

                                    <p className="text-muted-foreground mb-6 line-clamp-3 leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="text-xs px-3 py-1.5 border border-border rounded-full bg-background/50 font-medium text-muted-foreground"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
