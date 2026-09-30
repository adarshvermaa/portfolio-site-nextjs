import Link from "next/link";
import { Github, Linkedin, Mail, Phone, ExternalLink } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { QuantumFieldBackground } from "@/components/ui/quantum-field-background";
import { personalInfo } from "@/lib/data";

export function Footer() {
    return (
        <footer className="pt-20 pb-12 relative overflow-hidden border-t border-border/50 bg-background/80">
            <div className="absolute inset-0 pointer-events-none z-0">
                <QuantumFieldBackground />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
                    {/* Brand column */}
                    <div className="md:col-span-2 space-y-3">
                        <Link href="/" className="text-xl font-bold tracking-tighter text-foreground flex items-center gap-1.5">
                            <span className="font-mono text-cyan-400">&lt;</span>
                            <span>Adarsh Verma</span>
                            <span className="font-mono text-cyan-400">/&gt;</span>
                        </Link>
                        <p className="text-xs sm:text-sm text-muted-foreground max-w-md leading-relaxed">
                            Full-Stack AI Engineer & Systems Architect specializing in Model Context Protocol (MCP) agents, high-throughput Rust distributed backends, quantitative trading bots, and production mobile/web applications.
                        </p>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-mono">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            <span>Available for Freelance & Remote Contracts Worldwide</span>
                        </div>
                    </div>

                    {/* Quick navigation */}
                    <div className="space-y-3">
                        <div className="text-xs font-mono uppercase tracking-wider text-foreground font-semibold">
                            Navigation
                        </div>
                        <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                            <li>
                                <Link href="#about" className="hover:text-cyan-400 transition-colors">
                                    About & Experience
                                </Link>
                            </li>
                            <li>
                                <Link href="#skills" className="hover:text-cyan-400 transition-colors">
                                    Technical Skills (Resume)
                                </Link>
                            </li>
                            <li>
                                <Link href="#projects" className="hover:text-cyan-400 transition-colors">
                                    Featured Projects
                                </Link>
                            </li>
                            <li>
                                <Link href="#repositories" className="hover:text-cyan-400 transition-colors">
                                    All GitHub Repositories (23+)
                                </Link>
                            </li>
                            <li>
                                <Link href="#freelance" className="hover:text-cyan-400 transition-colors">
                                    Freelance & Remote Consulting
                                </Link>
                            </li>
                            <li>
                                <Link href="#contact" className="hover:text-cyan-400 transition-colors">
                                    Contact & Hire
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact & Profiles */}
                    <div className="space-y-3">
                        <div className="text-xs font-mono uppercase tracking-wider text-foreground font-semibold">
                            Direct Contact
                        </div>
                        <div className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                            <p>
                                <Link
                                    href={`mailto:${personalInfo.contactEmail}`}
                                    className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                                >
                                    <Mail className="w-3.5 h-3.5 text-cyan-400" />
                                    <span>{personalInfo.contactEmail}</span>
                                </Link>
                            </p>
                            <p>
                                <Link
                                    href={`tel:${personalInfo.phone.replace(/\s+/g, "")}`}
                                    className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 font-mono"
                                >
                                    <Phone className="w-3.5 h-3.5 text-violet-400" />
                                    <span>{personalInfo.phone}</span>
                                </Link>
                            </p>
                            <p className="text-xs text-muted-foreground/80">
                                Location: {personalInfo.location}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
                    <p>
                        © {new Date().getFullYear()} Adarsh Verma. All rights reserved. Open-source ecosystem on GitHub.
                    </p>

                    <div className="flex items-center gap-5">
                        <Link
                            href={personalInfo.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                            title="GitHub Profile"
                        >
                            <Github className="w-4 h-4" />
                            <span>GitHub</span>
                        </Link>
                        <Link
                            href={personalInfo.linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-blue-400 transition-colors flex items-center gap-1.5"
                            title="LinkedIn Profile"
                        >
                            <Linkedin className="w-4 h-4" />
                            <span>LinkedIn</span>
                        </Link>
                        <Link
                            href={personalInfo.twitterUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5"
                            title="X (Twitter) Profile"
                        >
                            <FaXTwitter className="w-4 h-4" />
                            <span>X / Twitter</span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
