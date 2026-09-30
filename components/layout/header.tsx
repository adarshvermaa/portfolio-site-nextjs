"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Github, FolderGit2, Briefcase, Menu, X } from "lucide-react";

export function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        { label: "Repositories", href: "#repositories" },
        { label: "Freelance", href: "#freelance" },
        { label: "Contact", href: "#contact" },
    ];

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b",
                scrolled
                    ? "bg-background/85 backdrop-blur-md border-border py-3 shadow-md"
                    : "bg-transparent border-transparent py-4 sm:py-5"
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold tracking-tighter text-foreground flex items-center gap-1.5">
                    <span className="font-mono text-cyan-400">&lt;</span>
                    <span>AV</span>
                    <span className="font-mono text-cyan-400">/&gt;</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-7">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-sm font-medium text-foreground/80 hover:text-cyan-400 transition-colors"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    <Link
                        href="https://github.com/adarshvermaa"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-cyan-400 transition-colors p-2 rounded-lg hover:bg-muted/50 hidden sm:flex items-center gap-1.5 text-xs font-mono"
                        title="GitHub Profile (40+ repos)"
                    >
                        <Github className="w-4 h-4" />
                        <span className="hidden xl:inline">@adarshvermaa</span>
                    </Link>

                    <Link
                        href="#freelance"
                        className="text-xs px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-semibold hover:bg-cyan-500 hover:text-slate-950 transition-all hidden sm:inline-flex items-center gap-1.5"
                    >
                        <Briefcase className="w-3.5 h-3.5" />
                        <span>Hire Me</span>
                    </Link>

                    <ThemeToggle />

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="lg:hidden p-2 rounded-lg text-foreground hover:bg-muted/50 transition-colors"
                        aria-label="Toggle Navigation Menu"
                    >
                        {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden px-4 py-4 bg-background/95 backdrop-blur-xl border-b border-border/80 space-y-3">
                    <div className="flex flex-col space-y-2">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="px-3 py-2 rounded-lg text-sm font-medium text-foreground/90 hover:text-cyan-400 hover:bg-muted/50 transition-colors"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    <div className="pt-3 border-t border-border/60 flex items-center justify-between">
                        <Link
                            href="https://github.com/adarshvermaa"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-foreground"
                        >
                            <Github className="w-4 h-4" />
                            <span>github.com/adarshvermaa</span>
                        </Link>

                        <Link
                            href="#contact"
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-xs px-3 py-1.5 rounded-full bg-cyan-500 text-slate-950 font-bold"
                        >
                            Hire Me
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
