"use client";

import { useTheme } from "@/components/theme-provider";
import { useEffect, useRef } from "react";
import { Moon, Sun } from "lucide-react";
import gsap from "gsap";

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    const buttonRef = useRef<HTMLButtonElement>(null);
    const moonRef = useRef<SVGSVGElement>(null);
    const sunRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        // Initial state setup
        if (theme === "dark") {
            gsap.set(moonRef.current, { opacity: 1, scale: 1, rotation: 0 });
            gsap.set(sunRef.current, { opacity: 0, scale: 0.5, rotation: -90 });
        } else {
            gsap.set(sunRef.current, { opacity: 1, scale: 1, rotation: 0 });
            gsap.set(moonRef.current, { opacity: 0, scale: 0.5, rotation: 90 });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // Run once on mount

    useEffect(() => {
        const tl = gsap.timeline();

        if (theme === "dark") {
            // Animate to Dark (Show Moon, Hide Sun)
            tl.to(sunRef.current, {
                opacity: 0,
                scale: 0.5,
                rotation: -90,
                duration: 0.3,
                ease: "power2.in",
            })
                .to(moonRef.current, {
                    opacity: 1,
                    scale: 1,
                    rotation: 0,
                    duration: 0.4,
                    ease: "back.out(1.7)",
                }, "-=0.1");
        } else {
            // Animate to Light (Show Sun, Hide Moon)
            tl.to(moonRef.current, {
                opacity: 0,
                scale: 0.5,
                rotation: 90,
                duration: 0.3,
                ease: "power2.in",
            })
                .to(sunRef.current, {
                    opacity: 1,
                    scale: 1,
                    rotation: 0,
                    duration: 0.4,
                    ease: "back.out(1.7)",
                }, "-=0.1");
        }
    }, [theme]);

    // Handle mounting check to avoid hydration mismatch on icons is handled by effect, but initial render matches default.
    // We can just render both absolute and let GSAP hide one.

    return (
        <button
            ref={buttonRef}
            onClick={toggleTheme}
            className="relative flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background hover:bg-mute transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20"
            aria-label="Toggle theme"
        >
            <div className="relative h-5 w-5">
                <Moon
                    ref={moonRef}
                    className="absolute inset-0 h-5 w-5 text-foreground"
                />
                <Sun
                    ref={sunRef}
                    className="absolute inset-0 h-5 w-5 text-foreground"
                />
            </div>
        </button>
    );
}
