"use client";

import { useEffect, useRef } from "react";

export function LagrangianBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let time = 0;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", resize);
        resize();

        // Particle System for "Paths of Least Action"
        // We simulate particles moving through a "potential field"
        const particleCount = 40;
        const particles = Array.from({ length: particleCount }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            history: [] as { x: number, y: number }[],
            maxHistory: 50 + Math.random() * 50
        }));

        const draw = () => {
            // Very slow fade for "light" trail effect
            ctx.fillStyle = "rgba(0, 0, 0, 0.02)";
            // Note: Since we are layering, clearRect might be better to maintain transparency
            // But for trails, we need partial clear. 
            // However, this is a background component. We should probably clear completely
            // and redraw trails manually to allow the underlying Taylor background to show through.
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Ultra-slow time for organic flow
            time += 0.004;

            ctx.lineWidth = 1;

            particles.forEach((p, i) => {
                // Lagrangian-ish Dynamics: Particles moving in a potential well
                // L = T - V
                // Let's create a gentle, time-varying potential field

                // Force/Acceleration based on position (faking a gradient of V)
                // Smoother, larger waves
                const ax = Math.sin(p.x * 0.001 + time) * 0.015;
                const ay = Math.cos(p.y * 0.001 + time) * 0.015;

                p.vx += ax;
                p.vy += ay;

                // Higher Damping for smoother, less erratic motion
                p.vx *= 0.98;
                p.vy *= 0.98;

                p.x += p.vx;
                p.y += p.vy;

                // Wrap around screen
                if (p.x < -100) p.x = canvas.width + 100;
                if (p.x > canvas.width + 100) p.x = -100;
                if (p.y < -100) p.y = canvas.height + 100;
                if (p.y > canvas.height + 100) p.y = -100;

                // Update History (Trail)
                p.history.push({ x: p.x, y: p.y });
                if (p.history.length > p.maxHistory) {
                    p.history.shift();
                }

                // Draw Trail (Curve of Least Action)
                if (p.history.length > 2) {
                    ctx.beginPath();
                    ctx.moveTo(p.history[0].x, p.history[0].y);
                    for (let j = 1; j < p.history.length; j++) {
                        ctx.lineTo(p.history[j].x, p.history[j].y);
                    }

                    // Gradient based on particle index to create a "field" of colors
                    const trailGradient = ctx.createLinearGradient(p.history[0].x, p.history[0].y, p.x, p.y);
                    const hue = (i * 20) % 360; // Spread hues across particles
                    // Start faint, end bright
                    trailGradient.addColorStop(0, `hsla(${hue}, 80%, 60%, 0)`);
                    trailGradient.addColorStop(1, `hsla(${hue}, 90%, 70%, 0.5)`);

                    ctx.strokeStyle = trailGradient;
                    ctx.lineWidth = 1.5;
                    ctx.shadowBlur = 2;
                    ctx.shadowColor = `hsla(${hue}, 90%, 70%, 0.8)`;
                    ctx.stroke();
                }

                // Draw head
                ctx.fillStyle = `hsla(${(i * 20) % 360}, 100%, 80%, 0.8)`;
                ctx.beginPath();
                ctx.arc(p.x, p.y, 1, 0, Math.PI * 2);
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none -z-30 opacity-60 mix-blend-screen"
        />
    );
}
