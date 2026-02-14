"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { QuantumFieldBackground } from "@/components/ui/quantum-field-background";

gsap.registerPlugin(ScrollTrigger);

export function About() {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(textRef.current, {
                scrollTrigger: {
                    trigger: textRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse",
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="about" ref={containerRef} className="py-20 px-4 flex flex-col items-center relative overflow-hidden">
            {/* Quantum Field Background */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <QuantumFieldBackground />
            </div>
            <div className="max-w-4xl text-center relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-12 tracking-tighter">About Me</h2>
                <div ref={textRef} className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                    <p>
                        I am a passionate Full Stack Engineer dedicated to building robust, scalable solutions. With expertise spanning from interactive frontends to complex backend microservices, I thrive in creating systems that handle real-world scale and complexity.
                    </p>
                    <p>
                        My recent focus has been on integrating <strong>Artificial Intelligence</strong> into web architectures, utilizing RAG and Agentic workflows to solve meaningful problems. I believe in writing clean, efficient code (Rust, TypeScript, Go) and deploying on resilient cloud infrastructure (AWS, Kubernetes).
                    </p>
                </div>
            </div>
        </section>
    );
}
