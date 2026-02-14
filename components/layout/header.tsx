"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Github } from "lucide-react";

export function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { label: "About", href: "#about" },
        { label: "Skills", href: "#skills" },
        { label: "Projects", href: "#projects" },
        { label: "Contact", href: "#contact" },
    ];

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b",
                scrolled
                    ? "bg-background/80 backdrop-blur-md border-border py-3 shadow-sm"
                    : "bg-transparent border-transparent py-5"
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold tracking-tighter text-foreground">
                    AV<span className="text-accent">.</span>
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <Link
                        href="https://github.com/adarshvermaa/portfolio-site-nextjs"
                        target="_blank"
                        className="text-foreground/80 hover:text-foreground transition-colors"
                    >
                        <Github className="w-5 h-5" />
                    </Link>
                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
}
