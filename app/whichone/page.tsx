import type { Metadata } from "next";
import { WhichOnePortfolio } from "@/components/showcases/whichone-portfolio";

export const metadata: Metadata = {
  title: "WhichOne App Portfolio | Social Discovery Case Study",
  description:
    "A premium case study for WhichOne, a modern social discovery app with nearby map discovery, real-time chat, stories, creative media tools, privacy controls, and scalable Firebase architecture.",
  alternates: {
    canonical: "/whichone",
  },
  openGraph: {
    title: "WhichOne App Portfolio | Social Discovery Case Study",
    description:
      "Explore the product experience behind WhichOne: nearby discovery, real-time chat, stories, premium features, and privacy-first social design.",
    url: "https://avwithai.com/whichone",
    siteName: "Adarsh Verma Portfolio",
    images: [
      {
        url: "/whichone/whichone-logo.png",
        width: 1024,
        height: 1024,
        alt: "WhichOne app logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "WhichOne App Portfolio | Social Discovery Case Study",
    description:
      "A modern social app case study covering nearby discovery, chat, stories, media tools, premium features, and privacy controls.",
    images: ["/whichone/whichone-logo.png"],
  },
};

export default function WhichOnePage() {
  return <WhichOnePortfolio />;
}
