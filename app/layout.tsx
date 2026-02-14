import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SmoothScroll } from "@/components/ui/smooth-scroll";
import { DevToolsHider } from "@/components/ui/dev-tools-hider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://avwithai.com"),
  title: "Adarsh Verma | Full Stack Developer",
  description: "Portfolio of Adarsh Verma, a Full Stack Developer specializing in building exceptional digital experiences.",
  keywords: ["Adarsh Verma", "Portfolio", "Full Stack Developer", "Next.js", "React", "Web Developer"],
  authors: [{ name: "Adarsh Verma" }],
  openGraph: {
    title: "Adarsh Verma | Full Stack Developer",
    description: "Building exceptional digital experiences with performance and aesthetics.",
    url: "https://avwithai.com", // Replace with actual URL
    siteName: "Adarsh Verma Portfolio",
    images: [
      {
        url: "/og-image.jpg", // Needs to be added to public/
        width: 1200,
        height: 630,
        alt: "Adarsh Verma Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adarsh Verma | Full Stack Developer",
    description: "Building exceptional digital experiences with performance and aesthetics.",
    images: ["/og-image.jpg"],
  },
};

import Script from "next/script";

// ...

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} min-h-screen bg-background text-foreground antialiased`}
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
            "jobTitle": "Full Stack Developer",
            "sameAs": [
              "https://github.com/adarshvermaa",
              "https://linkedin.com/in/adarsh-verma",
              "https://x.com/adarsh_verma"
            ],
            "description": "Full Stack Developer specializing in building exceptional digital experiences using Next.js, React, and AI technologies."
          })}
        </Script>
      </body>
    </html>
  );
}
