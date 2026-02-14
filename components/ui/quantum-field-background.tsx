"use client";

import { useEffect, useRef } from "react";

export function QuantumFieldBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let time = 0;

        const resize = () => {
            const parent = canvas.parentElement;
            if (parent) {
                canvas.width = parent.clientWidth;
                canvas.height = parent.clientHeight;
            }
        };

        // Particle System Configuration
        const particleCount = 30; // Lightweight count
        const particles: Particle[] = [];

        type Particle = {
            x: number;
            y: number;
            vx: number;
            vy: number;
            history: { x: number, y: number, width: number }[];
            hue: number;
        };

        const initParticles = () => {
            particles.length = 0;
            for (let i = 0; i < particleCount; i++) {
                particles.push(createParticle());
            }
        };

        const createParticle = (): Particle => {
            return {
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: 0,
                vy: 0,
                history: [],
                hue: Math.random() * 60 + 200 // Blue/Cyan/Purple range
            };
        };

        // Initialize
        initParticles();

        const draw = () => {
            // Fade out trail effect instead of clearRect for "motion blur" feel
            // or just clearRect for crisp "Path Finder" look. 
            // User wants "clean/decent", so clearRect is safer for performance.
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            time += 0.005; // Slow, graceful time

            particles.forEach((p, index) => {
                // 1. Calculate Vector Field & Determinant at current position
                // Same math as before to keep consistency with "Determinant" theme
                const a = Math.cos(time * 0.3 + p.y * 0.005) * 1.5;
                const b = Math.sin(time * 0.2 + p.x * 0.005);
                const c = Math.sin(time * 0.3 + p.x * 0.005);
                const d = Math.cos(time * 0.4 + p.y * 0.005) * 1.5;

                // Determinant (Scaling Factor) - Controls Path Width (Bollinger Band)
                const det = (a * d) - (b * c);
                const absDet = Math.abs(det) + 0.5; // Baseline width

                // Apply simple flow vector (like previous Lorentz/Transform)
                // v' = M v (where v is a unit drift)
                const driftX = 1;
                const driftY = 0.5;
                const vx = a * driftX + b * driftY;
                const vy = c * driftX + d * driftY;

                // Update Position
                p.x += vx * 1.5;
                p.y += vy * 1.5;

                // Wrap-around or Respawn
                if (p.x > canvas.width + 50 || p.x < -50 || p.y > canvas.height + 50 || p.y < -50) {
                    particles[index] = createParticle();
                    // Start from opposite side or random
                    particles[index].x = Math.random() * canvas.width;
                    particles[index].y = Math.random() * canvas.height;
                    return;
                }

                // Update History (The "Path")
                p.history.push({ x: p.x, y: p.y, width: Math.min(absDet * 2, 8) });
                if (p.history.length > 20) p.history.shift();

                // Draw "Bollinger Path" (Ribbon)
                if (p.history.length > 1) {
                    ctx.beginPath();
                    // Draw segments with varying width
                    // Canvas doesn't support varying line width in one stroke easily
                    // So we iterate segments
                    for (let i = 0; i < p.history.length - 1; i++) {
                        const p1 = p.history[i];
                        const p2 = p.history[i + 1];
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);

                        // Opacity fades along the tail
                        const opacity = (i / p.history.length);
                        // Width driven by Determinant
                        ctx.lineWidth = p2.width;

                        // Color based on expansion/contraction
                        // Gold for expansion, Cyan for contraction
                        const hue = p2.width > 3 ? 45 : 200;

                        ctx.strokeStyle = `hsla(${hue}, 80%, 60%, ${opacity * 0.5})`;
                        ctx.stroke();
                    }
                }

                // Draw Arrow Head (Path Finder)
                const angle = Math.atan2(vy, vx);
                const headLen = 8 + (absDet * 2);

                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate(angle);

                ctx.beginPath();
                ctx.moveTo(0, 0);
                ctx.lineTo(-headLen, headLen / 2);
                ctx.lineTo(-headLen, -headLen / 2);
                ctx.closePath();

                // Color head
                const headHue = absDet > 1.5 ? 45 : 200;
                ctx.fillStyle = `hsla(${headHue}, 100%, 70%, 0.9)`;
                ctx.fill();

                ctx.restore();
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        // Re-init on resize
        const handleResize = () => {
            resize();
            initParticles();
        }

        // Hook into the defined resize function but ensure particles reset
        // We override the observer callback to also initParticles
        const observerCallback = () => {
            resize();
            initParticles();
        }

        const observer = new ResizeObserver(observerCallback);
        if (canvas.parentElement) {
            observer.observe(canvas.parentElement);
        }

        handleResize(); // Initial call

        draw();

        return () => {
            observer.disconnect();
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-60"
        />
    );
}
