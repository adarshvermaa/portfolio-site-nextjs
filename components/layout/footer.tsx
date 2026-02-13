import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

export function Footer() {
    return (
        <footer className="py-8 border-t border-border mt-20">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
                <div>
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Adarsh Verma. All rights reserved.
                    </p>
                </div>

                <div className="flex gap-6">
                    <Link href="https://github.com/adarshvermaa" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                        <Github className="w-5 h-5" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/adarsh-verma-887a3819a/?skipRedirect=true" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                        <Linkedin className="w-5 h-5" />
                    </Link>
                    <Link href="https://x.com/Adarshvermaaa" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                        <FaXTwitter className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </footer>
    );
}
