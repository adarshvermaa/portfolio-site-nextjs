"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, Mail, Phone, MapPin, Globe, Github, Linkedin, MessageSquare, Briefcase } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { QuantumFieldBackground } from "@/components/ui/quantum-field-background";
import { personalInfo } from "@/lib/data";
import Link from "next/link";

const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    inquiryType: z.string().optional(),
    subject: z.string().min(5, "Subject must be at least 5 characters"),
    message: z.string().min(10, "Message must be at least 10 characters"),
    file: z.any().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
    const [selectedInquiry, setSelectedInquiry] = useState("Freelance Project");

    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            inquiryType: "Freelance Project",
        }
    });

    const handleInquiryChange = (type: string) => {
        setSelectedInquiry(type);
        setValue("inquiryType", type);
        setValue("subject", `[${type}] Inquiry from Portfolio`);
    };

    const onSubmit = async (data: FormValues) => {
        setIsSubmitting(true);
        setSubmitStatus("idle");

        try {
            const formData = new FormData();
            formData.append("name", data.name);
            formData.append("email", data.email);
            formData.append("subject", data.subject || `[${data.inquiryType || "General"}] Inquiry`);
            formData.append("message", `Inquiry Type: ${data.inquiryType || "General"}\n\n${data.message}`);
            if (data.file && data.file[0]) {
                formData.append("file", data.file[0]);
            }

            const response = await fetch("/api/contact", {
                method: "POST",
                body: formData,
            });

            if (!response.ok) throw new Error("Failed to send message");

            setSubmitStatus("success");
            reset();
        } catch (error) {
            console.error(error);
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-24 px-4 relative overflow-hidden bg-background">
            {/* Quantum Field Background */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <QuantumFieldBackground />
                <div className="absolute bottom-12 left-8 md:left-24 text-foreground/20 font-serif italic select-none pointer-events-none hidden md:block">
                    <div className="text-xl md:text-3xl font-mono">
                        S = -k_B ∑ p_i ln(p_i)
                    </div>
                    <span className="text-xs uppercase tracking-widest font-sans opacity-60">
                        Gibbs Entropy & Information Channeling
                    </span>
                </div>
            </div>

            <div className="max-w-6xl mx-auto grid md:grid-cols-[1.1fr_1fr] gap-12 relative z-10 items-start">
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-mono mb-4">
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>START A CONVERSATION</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter">
                        Let&apos;s Build Together
                    </h2>

                    <p className="text-muted-foreground text-base md:text-lg mb-8 leading-relaxed">
                        Looking for a senior Full-Stack AI Engineer for your next freelance project, custom MCP server architecture, or high-throughput remote engineering role? Reach out directly.
                    </p>

                    {/* Contact Badges */}
                    <div className="space-y-4 mb-8">
                        <div className="flex items-center gap-4 p-4 rounded-xl border border-border/60 bg-muted/20 backdrop-blur-md">
                            <div className="p-3 bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 rounded-xl">
                                <Mail className="w-5 h-5" />
                            </div>
                            <div className="min-w-0">
                                <h3 className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Direct Email</h3>
                                <Link
                                    href={`mailto:${personalInfo.contactEmail}`}
                                    className="break-all font-medium text-foreground hover:text-cyan-400 transition-colors text-sm sm:text-base"
                                >
                                    {personalInfo.contactEmail}
                                </Link>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 p-4 rounded-xl border border-border/60 bg-muted/20 backdrop-blur-md">
                            <div className="p-3 bg-violet-500/10 text-violet-400 border border-violet-500/30 rounded-xl">
                                <Phone className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Phone / WhatsApp</h3>
                                <Link
                                    href={`tel:${personalInfo.phone.replace(/\s+/g, "")}`}
                                    className="font-medium text-foreground hover:text-violet-400 transition-colors text-sm sm:text-base font-mono"
                                >
                                    {personalInfo.phone}
                                </Link>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 p-4 rounded-xl border border-border/60 bg-muted/20 backdrop-blur-md">
                            <div className="p-3 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded-xl">
                                <Globe className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Work Status & Location</h3>
                                <p className="font-medium text-foreground text-sm sm:text-base">
                                    {personalInfo.location}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Socials & GitHub Footprint */}
                    <div className="p-4 rounded-xl border border-border/60 bg-muted/10">
                        <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3">
                            Connect on Verified Platforms:
                        </div>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                href={personalInfo.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg border border-border/60 hover:bg-muted/40"
                            >
                                <Github className="w-4 h-4 text-cyan-400" />
                                <span>GitHub (40+ repos)</span>
                            </Link>

                            <Link
                                href={personalInfo.linkedinUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg border border-border/60 hover:bg-muted/40"
                            >
                                <Linkedin className="w-4 h-4 text-blue-400" />
                                <span>LinkedIn</span>
                            </Link>

                            <Link
                                href={personalInfo.twitterUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg border border-border/60 hover:bg-muted/40"
                            >
                                <FaXTwitter className="w-4 h-4 text-foreground" />
                                <span>X / Twitter</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Form Card */}
                <div className="bg-muted/20 p-6 md:p-8 rounded-2xl border border-border/70 backdrop-blur-md shadow-xl">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                        {/* Inquiry Type Chips */}
                        <div className="space-y-2">
                            <label className="text-xs font-mono text-muted-foreground">I am interested in:</label>
                            <div className="grid grid-cols-2 gap-2">
                                {[
                                    "Freelance Project",
                                    "Remote Full-Time Role",
                                    "AI / MCP Consulting",
                                    "Architecture Advisory"
                                ].map((type) => (
                                    <button
                                        type="button"
                                        key={type}
                                        onClick={() => handleInquiryChange(type)}
                                        className={`text-xs p-2.5 rounded-xl border text-center font-medium transition-all ${
                                            selectedInquiry === type
                                                ? "border-cyan-500 bg-cyan-500/20 text-cyan-300 shadow-sm"
                                                : "border-border/60 bg-background/40 text-muted-foreground hover:text-foreground hover:border-border"
                                        }`}
                                    >
                                        {type}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                                <label htmlFor="name" className="text-xs font-medium text-foreground">
                                    Your Name
                                </label>
                                <input
                                    {...register("name")}
                                    className="w-full px-4 py-2.5 rounded-xl border border-border/70 bg-background/60 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500"
                                    placeholder="Jane Doe"
                                />
                                {errors.name && <p className="text-xs text-red-400">{errors.name.message as string}</p>}
                            </div>

                            <div className="space-y-1.5">
                                <label htmlFor="email" className="text-xs font-medium text-foreground">
                                    Email Address
                                </label>
                                <input
                                    {...register("email")}
                                    className="w-full px-4 py-2.5 rounded-xl border border-border/70 bg-background/60 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500"
                                    placeholder="jane@company.com"
                                />
                                {errors.email && <p className="text-xs text-red-400">{errors.email.message as string}</p>}
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label htmlFor="subject" className="text-xs font-medium text-foreground">
                                Subject
                            </label>
                            <input
                                {...register("subject")}
                                className="w-full px-4 py-2.5 rounded-xl border border-border/70 bg-background/60 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500"
                                placeholder="[Freelance] Building an autonomous LLM agent"
                            />
                            {errors.subject && <p className="text-xs text-red-400">{errors.subject.message as string}</p>}
                        </div>

                        <div className="space-y-1.5">
                            <label htmlFor="message" className="text-xs font-medium text-foreground">
                                Project Overview or Role Description
                            </label>
                            <textarea
                                {...register("message")}
                                className="w-full px-4 py-2.5 rounded-xl border border-border/70 bg-background/60 min-h-[120px] text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500"
                                placeholder="Tell me about your requirements, timeline, and engineering scope..."
                            />
                            {errors.message && <p className="text-xs text-red-400">{errors.message.message as string}</p>}
                        </div>

                        <div className="space-y-1.5">
                            <label htmlFor="file" className="text-xs font-medium text-foreground">
                                Attachment (Specs, RFP, or JD - Optional)
                            </label>
                            <input
                                type="file"
                                {...register("file")}
                                className="w-full text-xs text-muted-foreground file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-cyan-500/20 file:text-cyan-300 hover:file:bg-cyan-500/30 cursor-pointer"
                            />
                        </div>

                        <Button
                            disabled={isSubmitting}
                            className="w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="w-4 h-4 animate-spin mr-2" />
                                    <span>Dispatching Request...</span>
                                </>
                            ) : (
                                "Send Message & Schedule Call"
                            )}
                        </Button>

                        {submitStatus === "success" && (
                            <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs text-center font-medium">
                                Message sent successfully! I will review your requirements and respond shortly.
                            </div>
                        )}
                        {submitStatus === "error" && (
                            <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs text-center font-medium">
                                Could not send message via form. Please email directly to {personalInfo.contactEmail}.
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}
