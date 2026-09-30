"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { allGitHubRepos, GitHubRepo } from "@/lib/data";
import { QuantumFieldBackground } from "@/components/ui/quantum-field-background";
import Link from "next/link";
import {
    Github,
    ExternalLink,
    Search,
    Copy,
    Check,
    Terminal,
    Sparkles,
    Star,
    GitFork,
    X,
    FolderGit2
} from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const CATEGORIES = [
    "All",
    "Trading & Quant",
    "AI & Generative AI",
    "Systems & Rust",
    "Full-Stack & Cloud",
    "Mobile & Platform",
    "Tools & Utilities",
] as const;

export function GitHubRepos() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState<string>("All");
    const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
    const [sortBy, setSortBy] = useState<"featured" | "stars" | "name">("featured");
    const [copiedRepo, setCopiedRepo] = useState<string | null>(null);

    const sectionRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    const filteredRepos = useMemo(() => {
        let list = [...allGitHubRepos];

        if (selectedCategory !== "All") {
            list = list.filter((r) => r.category === selectedCategory);
        }

        if (selectedTopic) {
            list = list.filter((r) =>
                r.topics.some((t) => t.toLowerCase() === selectedTopic.toLowerCase())
            );
        }

        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase();
            list = list.filter(
                (r) =>
                    r.name.toLowerCase().includes(query) ||
                    r.displayName.toLowerCase().includes(query) ||
                    r.description.toLowerCase().includes(query) ||
                    r.language.toLowerCase().includes(query) ||
                    r.topics.some((t) => t.toLowerCase().includes(query))
            );
        }

        if (sortBy === "stars") {
            list.sort((a, b) => b.stars - a.stars);
        } else if (sortBy === "name") {
            list.sort((a, b) => a.name.localeCompare(b.name));
        } else {
            // featured
            list.sort((a, b) => {
                if (a.featured && !b.featured) return -1;
                if (!a.featured && b.featured) return 1;
                return b.stars - a.stars;
            });
        }

        return list;
    }, [searchQuery, selectedCategory, selectedTopic, sortBy]);

    const handleCopy = (repo: GitHubRepo) => {
        const textToCopy = repo.cloneUrl || `git clone ${repo.html_url}.git`;
        navigator.clipboard.writeText(textToCopy);
        setCopiedRepo(repo.name);
        setTimeout(() => setCopiedRepo(null), 2000);
    };

    useEffect(() => {
        const cards = gridRef.current?.querySelectorAll(".repo-card");
        if (!cards || cards.length === 0) return;

        gsap.fromTo(
            cards,
            { y: 25, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.45,
                stagger: 0.03,
                ease: "power2.out",
                clearProps: "all"
            }
        );
    }, [selectedCategory, selectedTopic, sortBy]);

    return (
        <section
            id="repositories"
            ref={sectionRef}
            className="py-24 px-4 relative overflow-hidden bg-background"
        >
            {/* Ambient Background & Formulas */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <QuantumFieldBackground />
                <div className="absolute top-12 right-6 md:right-16 text-foreground/20 font-serif italic select-none pointer-events-none text-right hidden md:block">
                    <div className="text-xl md:text-3xl font-mono">
                        git log --graph --oneline --all
                    </div>
                    <span className="text-xs uppercase tracking-widest font-sans opacity-60">
                        Version Control & Distributed Telemetry
                    </span>
                </div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-mono mb-4">
                        <FolderGit2 className="w-3.5 h-3.5" />
                        <span>OPEN-SOURCE ECOSYSTEM (40+ REPOSITORIES)</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
                        GitHub Repositories
                    </h2>

                    <p className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto">
                        Explore all public systems code, autonomous agent frameworks, quantitative trading engines, and mobile architectures crafted by Adarsh Verma.
                    </p>

                    {/* Profile Banner */}
                    <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-4 p-2 pl-4 pr-3 rounded-full border border-border/60 bg-muted/20 backdrop-blur-md">
                        <span className="text-xs sm:text-sm text-foreground/80 flex items-center gap-2">
                            <Github className="w-4 h-4 text-cyan-400" />
                            <strong className="font-semibold text-foreground">@adarshvermaa</strong>
                            <span className="text-muted-foreground">• 23+ Public Systems • Rust · Python · TS · Dart</span>
                        </span>
                        <Link
                            href="https://github.com/adarshvermaa"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs px-3 py-1 rounded-full bg-foreground text-background font-medium hover:opacity-90 transition-opacity flex items-center gap-1.5"
                        >
                            <span>Follow on GitHub</span>
                            <ExternalLink className="w-3 h-3" />
                        </Link>
                    </div>
                </div>

                {/* Filter and Search Controls */}
                <div className="space-y-6 mb-10">
                    <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
                        {/* Search Input */}
                        <div className="relative w-full md:w-96">
                            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search repos, topics, or languages..."
                                className="w-full pl-10 pr-9 py-2.5 rounded-xl border border-border/70 bg-background/60 backdrop-blur-md text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500/60 transition-all"
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery("")}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            )}
                        </div>

                        {/* Sort Selector & Count */}
                        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-between md:justify-end">
                            <span className="text-xs text-muted-foreground font-mono">
                                Showing {filteredRepos.length} of {allGitHubRepos.length} repos
                            </span>
                            <div className="flex max-w-full items-center gap-1 text-[11px] sm:gap-1.5 sm:text-xs border border-border/70 rounded-xl p-1 bg-background/60 backdrop-blur-md">
                                <span className="px-2 text-muted-foreground">Sort:</span>
                                <button
                                    onClick={() => setSortBy("featured")}
                                    className={`px-2 py-1 sm:px-2.5 rounded-lg transition-colors ${
                                        sortBy === "featured"
                                            ? "bg-foreground text-background font-medium"
                                            : "text-muted-foreground hover:text-foreground"
                                    }`}
                                >
                                    Featured
                                </button>
                                <button
                                    onClick={() => setSortBy("stars")}
                                    className={`px-2 py-1 sm:px-2.5 rounded-lg transition-colors ${
                                        sortBy === "stars"
                                            ? "bg-foreground text-background font-medium"
                                            : "text-muted-foreground hover:text-foreground"
                                    }`}
                                >
                                    Stars
                                </button>
                                <button
                                    onClick={() => setSortBy("name")}
                                    className={`px-2 py-1 sm:px-2.5 rounded-lg transition-colors ${
                                        sortBy === "name"
                                            ? "bg-foreground text-background font-medium"
                                            : "text-muted-foreground hover:text-foreground"
                                    }`}
                                >
                                    Name
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Category Filter Pills */}
                    <div className="flex flex-wrap gap-2 items-center">
                        {CATEGORIES.map((cat) => {
                            const isSelected = selectedCategory === cat;
                            return (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`text-xs px-3.5 py-1.5 rounded-full border transition-all duration-200 ${
                                        isSelected
                                            ? "border-cyan-500 bg-cyan-500/15 text-cyan-300 font-medium shadow-[0_0_12px_rgba(6,182,212,0.25)]"
                                            : "border-border/60 bg-muted/15 text-muted-foreground hover:text-foreground hover:border-border"
                                    }`}
                                >
                                    {cat}
                                </button>
                            );
                        })}

                        {selectedTopic && (
                            <div className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/40">
                                <span>Tag: #{selectedTopic}</span>
                                <button
                                    onClick={() => setSelectedTopic(null)}
                                    className="hover:text-white"
                                >
                                    <X className="w-3 h-3" />
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Repositories Grid */}
                <div
                    ref={gridRef}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {filteredRepos.map((repo) => {
                        const isCopied = copiedRepo === repo.name;
                        return (
                            <div
                                key={repo.name}
                                className="repo-card group relative flex flex-col justify-between p-6 rounded-2xl border border-border/60 bg-muted/20 hover:bg-muted/30 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/40 hover:shadow-[0_10px_30px_rgba(6,182,212,0.1)] hover:-translate-y-1"
                            >
                                {/* Top Meta Row */}
                                <div>
                                    <div className="flex items-center justify-between gap-2 mb-3">
                                        <div className="flex items-center gap-2">
                                            <span
                                                className="w-2.5 h-2.5 rounded-full"
                                                style={{ backgroundColor: repo.languageColor }}
                                            />
                                            <span className="text-xs font-mono text-muted-foreground font-medium">
                                                {repo.language}
                                            </span>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            {repo.featured && (
                                                <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 flex items-center gap-1">
                                                    <Sparkles className="w-2.5 h-2.5" />
                                                    Featured
                                                </span>
                                            )}
                                            {repo.stars > 0 && (
                                                <span className="text-xs text-muted-foreground flex items-center gap-1 font-mono">
                                                    <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                                                    {repo.stars}
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Repo Name */}
                                    <h3 className="text-lg font-bold tracking-tight mb-2 group-hover:text-cyan-400 transition-colors flex items-center justify-between gap-2">
                                        <Link
                                            href={repo.html_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:underline flex items-center gap-1.5"
                                        >
                                            <FolderGit2 className="w-4 h-4 text-muted-foreground group-hover:text-cyan-400 transition-colors flex-shrink-0" />
                                            <span className="truncate">{repo.name}</span>
                                        </Link>
                                    </h3>

                                    {/* Category Pill */}
                                    <div className="mb-3">
                                        <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-background/50 border border-border/50 text-muted-foreground">
                                            {repo.category}
                                        </span>
                                    </div>

                                    {/* Description */}
                                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4">
                                        {repo.description || "Open-source software repository and systems engineering implementation."}
                                    </p>

                                    {/* Topic Tags */}
                                    {repo.topics.length > 0 && (
                                        <div className="flex flex-wrap gap-1.5 mb-6">
                                            {repo.topics.slice(0, 4).map((topic) => (
                                                <button
                                                    key={topic}
                                                    onClick={() => setSelectedTopic(topic)}
                                                    className="text-[11px] px-2 py-0.5 rounded-md bg-muted/40 hover:bg-cyan-500/20 hover:text-cyan-300 text-muted-foreground/80 transition-colors"
                                                >
                                                    #{topic}
                                                </button>
                                            ))}
                                            {repo.topics.length > 4 && (
                                                <span className="text-[10px] text-muted-foreground px-1 self-center">
                                                    +{repo.topics.length - 4}
                                                </span>
                                            )}
                                        </div>
                                    )}
                                </div>

                                {/* Action Buttons Footer */}
                                <div className="pt-4 border-t border-border/40 flex items-center justify-between gap-2 mt-auto">
                                    <button
                                        onClick={() => handleCopy(repo)}
                                        title="Copy git clone command"
                                        className="text-xs px-2.5 py-1.5 rounded-lg border border-border/60 hover:bg-muted/50 text-muted-foreground hover:text-foreground transition-all flex items-center gap-1.5"
                                    >
                                        {isCopied ? (
                                            <>
                                                <Check className="w-3.5 h-3.5 text-emerald-400" />
                                                <span className="text-emerald-400 font-mono text-[11px]">Copied!</span>
                                            </>
                                        ) : (
                                            <>
                                                <Copy className="w-3.5 h-3.5" />
                                                <span className="font-mono text-[11px]">Clone</span>
                                            </>
                                        )}
                                    </button>

                                    <Link
                                        href={repo.html_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs px-3.5 py-1.5 rounded-lg bg-foreground text-background font-medium hover:opacity-90 transition-all flex items-center gap-1.5 group/link"
                                    >
                                        <span>View Repo</span>
                                        <ExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {filteredRepos.length === 0 && (
                    <div className="text-center py-16 p-8 rounded-2xl border border-dashed border-border/80">
                        <Terminal className="w-10 h-10 text-muted-foreground mx-auto mb-3 opacity-60" />
                        <h4 className="text-lg font-bold mb-1">No repositories match your criteria</h4>
                        <p className="text-sm text-muted-foreground mb-4">
                            Try adjusting your search query, clearing topic filters, or browsing other categories.
                        </p>
                        <button
                            onClick={() => {
                                setSearchQuery("");
                                setSelectedCategory("All");
                                setSelectedTopic(null);
                            }}
                            className="px-4 py-2 rounded-xl bg-foreground text-background text-xs font-medium hover:opacity-90"
                        >
                            Reset All Filters
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
