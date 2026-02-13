"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    subject: z.string().min(5, "Subject must be at least 5 characters"),
    message: z.string().min(10, "Message must be at least 10 characters"),
    file: z.any().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: FormValues) => {
        setIsSubmitting(true);
        setSubmitStatus("idle");

        try {
            const formData = new FormData();
            formData.append("name", data.name);
            formData.append("email", data.email);
            formData.append("subject", data.subject);
            formData.append("message", data.message);
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
        <section id="contact" className="py-20 px-4">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tighter">Get in Touch</h2>
                    <p className="text-muted-foreground mb-8">
                        Have a project in mind or just want to say hi? I&apos;m always open to discussing new opportunities and ideas.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-muted rounded-full">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-medium">Email</h3>
                                <p className="text-muted-foreground">hello@example.com</p>
                            </div>
                        </div>

                        {/* Additional contact info if needed */}
                    </div>
                </div>

                <div className="bg-muted/30 p-8 rounded-2xl border border-border">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium">Name</label>
                                <input
                                    {...register("name")}
                                    className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="John Doe"
                                />
                                {errors.name && <p className="text-xs text-red-500">{errors.name.message as string}</p>}
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium">Email</label>
                                <input
                                    {...register("email")}
                                    className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="john@example.com"
                                />
                                {errors.email && <p className="text-xs text-red-500">{errors.email.message as string}</p>}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                            <input
                                {...register("subject")}
                                className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                placeholder="Project Inquiry"
                            />
                            {errors.subject && <p className="text-xs text-red-500">{errors.subject.message as string}</p>}
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium">Message</label>
                            <textarea
                                {...register("message")}
                                className="w-full px-4 py-2 rounded-md border border-input bg-background min-h-[120px] focus:outline-none focus:ring-2 focus:ring-primary"
                                placeholder="Tell me about your project..."
                            />
                            {errors.message && <p className="text-xs text-red-500">{errors.message.message as string}</p>}
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="file" className="text-sm font-medium">Attachment (Optional)</label>
                            <input
                                type="file"
                                {...register("file")}
                                className="w-full text-sm text-muted-foreground file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
                            />
                        </div>

                        <Button disabled={isSubmitting} className="w-full">
                            {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : "Send Message"}
                        </Button>

                        {submitStatus === "success" && (
                            <p className="text-green-500 text-sm text-center">Message sent successfully!</p>
                        )}
                        {submitStatus === "error" && (
                            <p className="text-red-500 text-sm text-center">Failed to send message. Please try again.</p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}
