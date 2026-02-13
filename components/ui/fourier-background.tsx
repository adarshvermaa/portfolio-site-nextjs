"use client";

import { useEffect, useRef } from "react";

export function FourierBackground() {
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

        // Fourier Configuration
        // We simulate a signal decomposed into multiple frequencies (harmonics)
        const waveCount = 5;
        // Different frequencies and amplitudes for our "harmonics"
        const harmonics = Array.from({ length: waveCount }, (_, i) => ({
            frequency: 0.005 + (i * 0.002), // How fast the wave oscillates in space (k)
            amplitude: 50 + (i * 20),      // Height of the wave
            speed: 0.01 + (i * 0.005),     // How fast it moves in time (omega)
            phase: i * Math.PI / 4         // Phase shift
        }));

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            time += 1;

            const centerY = canvas.height / 2;

            // Draw individual harmonics (subtle/ghostly)
            ctx.lineWidth = 1;

            // We want to draw a "surface" or distinct lines representing the transform
            // Let's draw 3 distinct "composed" waves with slight offsets to create depth

            const layers = 3;
            for (let l = 0; l < layers; l++) {
                ctx.beginPath();
                const layerOffset = (l - 1) * 100; // Vertical separation
                const layerColor = l === 1 ? "rgba(120, 120, 120, 0.15)" : "rgba(80, 80, 80, 0.08)";

                ctx.strokeStyle = layerColor;

                for (let x = 0; x < canvas.width; x++) {
                    let y = centerY + layerOffset;

                    // Sum of sines (Fourier synthesis)
                    // f(t) = Sum( Amp * sin(freq*x + speed*time + phase) )
                    let superposition = 0;
                    harmonics.forEach(h => {
                        superposition += h.amplitude * Math.sin((x * h.frequency) + (time * h.speed) + h.phase);
                    });

                    // Add a complex damping or modulation to make it look "organic" and not just noise
                    // The "Transform" often implies a decay or packet
                    // We'll keep it continuous as per "Fourier transform (continuous)"

                    ctx.lineTo(x, y + superposition);
                }
                ctx.stroke();
            }

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
            className="absolute inset-0 w-full h-full pointer-events-none -z-20 opacity-60"
        />
    );
}
