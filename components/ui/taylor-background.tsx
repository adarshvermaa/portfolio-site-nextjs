"use client";

import { useEffect, useRef } from "react";

export function TaylorBackground() {
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

        // Helper: Factorial
        const factorial = (n: number): number => {
            if (n === 0 || n === 1) return 1;
            let result = 1;
            for (let i = 2; i <= n; i++) result *= i;
            return result;
        };





        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            // Faster time increment for energetic animation
            time += 0.007;

            // Center of the canvas
            const cx = canvas.width / 2;
            const cy = canvas.height / 2;
            const scaleX = 50; // Pixels per unit x
            const scaleY = 100; // Pixels per unit y

            // Move the expansion point 'a' slowly back and forth with easing
            // Reduced frequency (time * 0.5) for a more relaxed pace
            const a = Math.sin(time * 0.5) * 3;

            // Create Gradient for the "Target" Function
            const gradientTrunk = ctx.createLinearGradient(0, 0, canvas.width, 0);
            gradientTrunk.addColorStop(0, "rgba(100, 100, 100, 0.1)");
            gradientTrunk.addColorStop(0.5, "rgba(200, 200, 200, 0.3)");
            gradientTrunk.addColorStop(1, "rgba(100, 100, 100, 0.1)");

            // Draw the "Target" Function (True Curve)
            ctx.beginPath();
            ctx.lineWidth = 3;
            ctx.strokeStyle = gradientTrunk;
            for (let i = 0; i < canvas.width; i++) {
                const x = (i - cx) / scaleX;
                const y = cy - (Math.sin(x) * scaleY);
                ctx.lineTo(i, y);
            }
            ctx.stroke();

            // Draw Taylor Polynomials (Order 1, 3, 5, 7)
            // T(x) = f(a) + f'(a)(x-a) + f''(a)(x-a)^2/2! ...
            const orders = [1, 3, 5, 7];

            orders.forEach((n, idx) => {
                ctx.beginPath();
                // Varying opacity/color for layers
                // Use a gradient specifically for these lines
                const polyGradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
                // Cycle through a specialized "Math" palette: Cyan -> Violet -> Blue
                const colors = [
                    ["rgba(0, 243, 255, 0.1)", "rgba(0, 243, 255, 0.6)", "rgba(0, 243, 255, 0.1)"], // Cyan
                    ["rgba(189, 0, 255, 0.1)", "rgba(189, 0, 255, 0.5)", "rgba(189, 0, 255, 0.1)"], // Violet
                    ["rgba(50, 100, 255, 0.1)", "rgba(50, 100, 255, 0.5)", "rgba(50, 100, 255, 0.1)"], // Blue
                    ["rgba(255, 0, 100, 0.1)", "rgba(255, 0, 100, 0.5)", "rgba(255, 0, 100, 0.1)"], // Magenta
                ];
                const theme = colors[idx % colors.length];
                polyGradient.addColorStop(0, theme[0]);
                polyGradient.addColorStop(0.5, theme[1]);
                polyGradient.addColorStop(1, theme[2]);

                ctx.strokeStyle = polyGradient;
                ctx.lineWidth = 2; // Keep distinct thickness
                ctx.shadowBlur = 8; // enhanced glow
                ctx.shadowColor = theme[1];

                // Pre-calculate derivatives values at 'a'
                const derivsAtA: number[] = [];
                for (let k = 0; k <= n; k++) {
                    // Cyclic derivatives of sin(x): sin, cos, -sin, -cos
                    const type = k % 4;
                    let val = 0;
                    if (type === 0) val = Math.sin(a);
                    if (type === 1) val = Math.cos(a);
                    if (type === 2) val = -Math.sin(a);
                    if (type === 3) val = -Math.cos(a);
                    derivsAtA.push(val);
                }

                for (let i = 0; i < canvas.width; i++) {
                    const x = (i - cx) / scaleX;
                    const dx = x - a; // (x - a)

                    let approximation = 0;
                    for (let k = 0; k <= n; k++) {
                        approximation += (derivsAtA[k] / factorial(k)) * Math.pow(dx, k);
                    }

                    // Soft clip to avoid massive values exploding off screen
                    // (Polynomials diverge quickly)
                    let y = cy - (approximation * scaleY);

                    // Bezier-like clamping for visuals if it goes way off screen
                    if (y < -1000) y = -1000;
                    if (y > canvas.height + 1000) y = canvas.height + 1000;

                    ctx.lineTo(i, y);
                }
                ctx.stroke();
            });

            // Draw the expansion point 'a'
            ctx.beginPath();
            ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
            ctx.arc(cx + (a * scaleX), cy - (Math.sin(a) * scaleY), 6, 0, Math.PI * 2);
            ctx.fill();

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
            className="absolute inset-0 w-full h-full pointer-events-none -z-20 opacity-50"
        />
    );
}
