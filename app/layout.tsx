import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SmoothScroll } from "@/components/ui/smooth-scroll";
import { DevToolsHider } from "@/components/ui/dev-tools-hider";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://avwithai.com"),
  title: "Adarsh Verma | Full-Stack AI Engineer & Systems Architect",
  description: "Portfolio of Adarsh Verma, Full-Stack AI Engineer specializing in Model Context Protocol (MCP), autonomous agents, high-throughput Rust distributed systems, quant trading platforms, and production mobile/web applications. Available for freelance & remote worldwide.",
  keywords: [
    "Adarsh Verma",
    "Full-Stack AI Engineer",
    "Model Context Protocol",
    "MCP",
    "Autonomous Agents",
    "Rust Developer",
    "FastAPI",
    "Python",
    "Next.js",
    "Flutter",
    "Algorithmic Trading",
    "Freelance AI Engineer",
    "Remote Software Engineer"
  ],
  authors: [{ name: "Adarsh Verma" }],
  openGraph: {
    title: "Adarsh Verma | Full-Stack AI Engineer & Systems Architect",
    description: "Building production autonomous AI systems, high-concurrency Rust backends, and responsive applications. Open to freelance consulting & worldwide remote roles.",
    url: "https://avwithai.com",
    siteName: "Adarsh Verma Portfolio & Systems Hub",
    images: [
      {
        url: "/image.png",
        width: 1200,
        height: 630,
        alt: "Adarsh Verma - Full-Stack AI Engineer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adarsh Verma | Full-Stack AI Engineer & Systems Architect",
    description: "Building production autonomous AI systems, high-concurrency Rust backends, and responsive applications. Open to freelance consulting & worldwide remote roles.",
    images: ["/image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="font-sans min-h-screen bg-background text-foreground antialiased"
        suppressHydrationWarning
      >
        <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
          <SmoothScroll>
            <DevToolsHider />
            {children}
          </SmoothScroll>
        </ThemeProvider>

        {/* JSON-LD Structured Data for SEO */}
        <Script id="json-ld" strategy="afterInteractive" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Adarsh Verma",
            "url": "https://avwithai.com",
            "jobTitle": "Full-Stack AI Engineer | Systems & Real-Time Software",
            "sameAs": [
              "https://github.com/adarshvermaa",
              "https://www.linkedin.com/in/adarsh-verma-887a3819a/",
              "https://x.com/Adarshvermaaa"
            ],
            "description": "Full-Stack AI Engineer with 5+ years of software development experience specializing in Model Context Protocol (MCP), autonomous agents, RAG, high-throughput Rust distributed backends, and Flutter mobile applications."
          })}
        </Script>
      </body>
    </html>
  );
}
