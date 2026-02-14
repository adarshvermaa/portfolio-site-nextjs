"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        // Initialize Lenis for smooth inertial scrolling
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Default exponential ease
            // Customizing scrolling to feel "geometric" and precise
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        });

        // Pythagorean Animation Loop Integration
        // Utilizing the requestAnimationFrame loop to sync scroll with animations
        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <>
            {children}
            {/* Geometric / Pythagorean Scroll Visualization Overlay */}
            <div className="fixed bottom-8 left-8 z-50 pointer-events-none opacity-20 font-serif text-sm md:text-base mix-blend-difference text-white">
                <span className="block mb-1">a² + b² = c²</span>
                <span className="text-xs opacity-70">Pythagoras</span>
            </div>
        </>
    );
}
