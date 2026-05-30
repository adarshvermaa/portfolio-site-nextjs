"use client";

import { useEffect, useRef } from "react";
import type { ComponentType } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  Bell,
  Camera,
  Check,
  ChevronRight,
  Crown,
  Database,
  Eye,
  Film,
  Image as ImageIcon,
  Map,
  MapPin,
  MessageCircle,
  Radar,
  Send,
  Shield,
  Sparkles,
  UserRound,
  Video,
  Zap,
} from "lucide-react";
import { FaGooglePlay } from "react-icons/fa6";

const visibilityModes = [
  {
    title: "Everyone",
    copy: "Browse and be discovered by people nearby while Nearby Mode is on.",
  },
  {
    title: "Friends only",
    copy: "Limit discovery to accepted connections while keeping the map useful.",
  },
  {
    title: "Hidden",
    copy: "Turn off the map, remove location visibility, and pause nearby activity.",
  },
];

const filters = [
  "Natural",
  "Cinematic",
  "Golden",
  "Cyberpunk",
  "Face Light",
  "Neon",
];

const techStack = [
  "Flutter",
  "Firebase Auth",
  "Firestore",
  "Realtime DB",
  "Storage",
  "Cloud Functions",
  "FCM",
  "Mapbox",
  "RevenueCat",
  "WebRTC",
  "E2EE",
  "App Check",
];

const premiumFeatures = [
  "Unlimited stories",
  "Premium creative filters",
  "Up to 9 profile photos",
  "Premium badge",
  "Premium map styles",
  "Better discovery controls",
];

function SectionIntro({
  kicker,
  title,
  copy,
}: {
  kicker: string;
  title: string;
  copy: string;
}) {
  return (
    <div className="whichone-reveal max-w-2xl">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-fuchsia-200/80">
        {kicker}
      </p>
      <h2 className="text-3xl font-black tracking-tight text-white md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">
        {copy}
      </p>
    </div>
  );
}

function PhoneFrame({
  variant,
  className = "",
}: {
  variant: "map" | "chat" | "stories" | "camera" | "premium" | "tech";
  className?: string;
}) {
  return (
    <div
      className={`whichone-phone relative mx-auto w-full max-w-[280px] rounded-[2.4rem] border border-white/15 bg-slate-950 p-3 shadow-[0_32px_90px_rgba(0,0,0,0.55)] md:max-w-[330px] ${className}`}
    >
      <div className="absolute left-1/2 top-3 z-20 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-black" />
      <div className="relative aspect-[9/19.3] overflow-hidden rounded-[1.8rem] border border-white/10 bg-[#101026]">
        {variant === "map" && <MapScreen />}
        {variant === "chat" && <ChatScreen />}
        {variant === "stories" && <StoriesScreen />}
        {variant === "camera" && <CameraScreen />}
        {variant === "premium" && <PremiumScreen />}
        {variant === "tech" && <TechScreen />}
      </div>
    </div>
  );
}

function AppTopBar({ label }: { label: string }) {
  return (
    <div className="relative z-10 flex items-center justify-between px-4 pt-8">
      <div className="flex items-center gap-2">
        <div className="relative h-8 w-8 overflow-hidden rounded-xl bg-white">
          <Image
            src="/whichone/whichone-logo.png"
            alt="WhichOne app logo"
            fill
            sizes="32px"
            className="object-cover"
          />
        </div>
        <span className="text-xs font-bold text-white">{label}</span>
      </div>
      <Bell className="h-4 w-4 text-white/70" />
    </div>
  );
}

function MapScreen() {
  return (
    <div className="absolute inset-0 bg-[#111227]">
      <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:34px_34px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_48%_42%,rgba(124,77,255,0.36),transparent_34%),radial-gradient(circle_at_30%_72%,rgba(255,107,107,0.28),transparent_30%)]" />
      <AppTopBar label="Nearby" />
      <div className="map-pin absolute left-[58%] top-[29%]">
        <MapPin className="h-8 w-8 fill-fuchsia-400 text-fuchsia-100 drop-shadow-[0_0_18px_rgba(217,70,239,0.9)]" />
      </div>
      <div className="map-pin absolute left-[25%] top-[52%]">
        <MapPin className="h-7 w-7 fill-rose-400 text-rose-100 drop-shadow-[0_0_18px_rgba(255,107,107,0.75)]" />
      </div>
      <div className="map-pin absolute left-[66%] top-[68%]">
        <MapPin className="h-6 w-6 fill-cyan-300 text-cyan-100 drop-shadow-[0_0_18px_rgba(34,211,238,0.75)]" />
      </div>
      <div className="absolute bottom-5 left-4 right-4 rounded-3xl border border-white/15 bg-white/10 p-4 text-white shadow-2xl backdrop-blur-xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-white/55">Approx. distance</p>
            <p className="text-xl font-black">2.4 km away</p>
          </div>
          <Radar className="h-8 w-8 text-cyan-200" />
        </div>
        <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-300" />
        </div>
      </div>
    </div>
  );
}

function ChatScreen() {
  const bubbles = [
    ["Hey, coffee nearby?", "bg-white/12 text-white mr-10"],
    ["Sounds good. Sending a place.", "bg-gradient-to-r from-fuchsia-500 to-rose-400 text-white ml-8"],
    ["Shared 4 photos", "bg-white/12 text-white mr-16"],
  ];

  return (
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,77,255,0.34),transparent_38%),#101026]">
      <AppTopBar label="Chat" />
      <div className="px-4 pt-8">
        <div className="grid grid-cols-2 gap-2">
          <div className="h-24 rounded-2xl bg-gradient-to-br from-rose-300 to-fuchsia-500" />
          <div className="h-24 rounded-2xl bg-gradient-to-br from-cyan-300 to-indigo-500" />
        </div>
      </div>
      <div className="absolute bottom-20 left-4 right-4 space-y-3">
        {bubbles.map(([text, classes]) => (
          <div
            key={text}
            className={`chat-bubble rounded-3xl px-4 py-3 text-sm shadow-xl backdrop-blur ${classes}`}
          >
            {text}
          </div>
        ))}
      </div>
      <div className="absolute bottom-5 left-4 right-4 flex items-center gap-2 rounded-full border border-white/10 bg-white/10 p-2 backdrop-blur-xl">
        <div className="h-8 flex-1 rounded-full bg-white/10" />
        <Send className="h-5 w-5 text-cyan-200" />
      </div>
    </div>
  );
}

function StoriesScreen() {
  return (
    <div className="absolute inset-0 bg-[#120f24]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,179,71,0.24),transparent_32%),radial-gradient(circle_at_50%_75%,rgba(124,77,255,0.34),transparent_42%)]" />
      <div className="relative z-10 px-4 pt-8">
        <div className="flex gap-1">
          <div className="story-progress h-1 flex-1 rounded-full bg-white" />
          <div className="story-progress h-1 flex-1 rounded-full bg-white/70" />
          <div className="story-progress h-1 flex-1 rounded-full bg-white/35" />
        </div>
        <div className="mt-5 flex items-center gap-3">
          <div className="story-ring grid h-12 w-12 place-items-center rounded-full bg-gradient-to-tr from-fuchsia-500 via-rose-400 to-amber-300 p-0.5">
            <div className="grid h-full w-full place-items-center rounded-full bg-slate-950">
              <UserRound className="h-6 w-6 text-white" />
            </div>
          </div>
          <div>
            <p className="text-sm font-bold text-white">Aarav</p>
            <p className="text-xs text-white/55">Map story</p>
          </div>
        </div>
      </div>
      <div className="absolute left-7 right-7 top-1/3 rounded-[2rem] border border-white/15 bg-white/10 p-5 text-white shadow-2xl backdrop-blur-md">
        <Film className="mb-12 h-10 w-10 text-amber-200" />
        <p className="text-2xl font-black">Moments that start conversations.</p>
      </div>
      <div className="absolute bottom-6 left-4 right-4 rounded-full border border-white/10 bg-black/25 px-4 py-3 text-sm text-white/75 backdrop-blur">
        Reply to story
      </div>
    </div>
  );
}

function CameraScreen() {
  return (
    <div className="absolute inset-0 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_34%,rgba(34,211,238,0.22),transparent_36%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_45%)]" />
      <div className="relative z-10 flex h-full flex-col justify-between p-4 pt-8">
        <div className="flex items-center justify-between text-white">
          <Sparkles className="h-5 w-5" />
          <p className="text-xs font-semibold uppercase tracking-[0.22em]">Camera</p>
          <ImageIcon className="h-5 w-5" />
        </div>
        <div className="gallery-grid grid grid-cols-3 gap-2">
          <div className="h-24 rounded-2xl bg-gradient-to-br from-amber-300 to-rose-500" />
          <div className="h-24 rounded-2xl bg-gradient-to-br from-cyan-300 to-fuchsia-500" />
          <div className="h-24 rounded-2xl bg-gradient-to-br from-lime-300 to-cyan-500" />
        </div>
        <div className="flex flex-wrap gap-2">
          {filters.slice(0, 4).map((filter) => (
            <span
              key={filter}
              className="filter-chip rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-[11px] font-semibold text-white backdrop-blur"
            >
              {filter}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function PremiumScreen() {
  return (
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,179,71,0.25),transparent_36%),#121026] p-4 pt-8">
      <div className="premium-shine rounded-[2rem] border border-amber-200/30 bg-gradient-to-br from-amber-300/25 to-fuchsia-500/10 p-5 text-white shadow-2xl">
        <Crown className="mb-5 h-10 w-10 text-amber-200" />
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-100">WhichOne Plus</p>
        <p className="mt-3 text-3xl font-black">Unlock the social layer.</p>
      </div>
      <div className="mt-5 space-y-3">
        {premiumFeatures.slice(0, 4).map((feature) => (
          <div key={feature} className="flex items-center gap-3 rounded-2xl bg-white/10 p-3 text-sm text-white">
            <Check className="h-4 w-4 text-emerald-300" />
            {feature}
          </div>
        ))}
      </div>
    </div>
  );
}

function TechScreen() {
  return (
    <div className="absolute inset-0 bg-[#0c1020] p-4 pt-8">
      <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(circle,rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="relative z-10">
        <Database className="mb-5 h-10 w-10 text-cyan-200" />
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-100">Stack</p>
        <p className="mt-3 text-3xl font-black text-white">Realtime, scalable, secure.</p>
        <div className="mt-8 grid grid-cols-2 gap-2">
          {techStack.slice(0, 6).map((tech) => (
            <div key={tech} className="tech-card rounded-2xl border border-white/10 bg-white/10 p-3 text-xs font-semibold text-white">
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  copy,
}: {
  icon: ComponentType<{ className?: string }>;
  title: string;
  copy: string;
}) {
  return (
    <article className="whichone-card rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl">
      <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-fuchsia-500/30 to-cyan-400/20 text-white">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-300">{copy}</p>
    </article>
  );
}

export function WhichOnePortfolio() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const root = rootRef.current;
    if (!root) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.matchMedia("(max-width: 767px)").matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set(".whichone-reveal, .whichone-card, .whichone-phone, .chat-bubble, .filter-chip, .tech-card", {
          clearProps: "all",
          opacity: 1,
        });
        return;
      }

      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .from(".hero-copy > *", {
          y: 34,
          duration: 0.9,
          stagger: 0.12,
        })
        .from(
          ".hero-phone",
          {
            y: 34,
            scale: 0.92,
            duration: 1,
          },
          "-=0.45",
        )
        .from(
          ".float-icon",
          {
            y: 20,
            scale: 0.86,
            duration: 0.7,
            stagger: 0.08,
          },
          "-=0.55",
        );

      gsap.to(".float-icon", {
        y: -12,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.22,
      });

      const sections = gsap.utils.toArray(".whichone-section") as HTMLElement[];

      sections.forEach((section) => {
        gsap.from(section.querySelectorAll(".whichone-reveal, .whichone-card"), {
          scrollTrigger: {
            trigger: section,
            start: "top 78%",
          },
          y: 56,
          opacity: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
        });

        gsap.from(section.querySelectorAll(".whichone-phone"), {
          scrollTrigger: {
            trigger: section,
            start: "top 72%",
          },
          y: 44,
          scale: 0.96,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
        });
      });

      gsap.from(".chat-bubble", {
        scrollTrigger: {
          trigger: ".chat-section",
          start: "top 62%",
        },
        x: -18,
        opacity: 0,
        duration: 0.55,
        stagger: 0.12,
        ease: "power2.out",
      });

      gsap.from(".filter-chip, .gallery-grid > div", {
        scrollTrigger: {
          trigger: ".camera-section",
          start: "top 68%",
        },
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.07,
        ease: "power2.out",
      });

      gsap.from(".story-progress", {
        scrollTrigger: {
          trigger: ".stories-section",
          start: "top 68%",
        },
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1.2,
        stagger: 0.12,
        ease: "power2.out",
      });

      if (!isMobile) {
        const parallaxPhones = gsap.utils.toArray(".parallax-phone") as HTMLElement[];

        parallaxPhones.forEach((phone) => {
          gsap.to(phone, {
            yPercent: -8,
            ease: "none",
            scrollTrigger: {
              trigger: phone,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.7,
            },
          });
        });
      }

      window.setTimeout(() => ScrollTrigger.refresh(), 300);
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="min-h-screen overflow-hidden bg-[#050510] text-white selection:bg-fuchsia-500/30">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute left-[-20%] top-[-20%] h-[46rem] w-[46rem] rounded-full bg-fuchsia-600/20 blur-[150px]" />
        <div className="absolute bottom-[-22%] right-[-18%] h-[44rem] w-[44rem] rounded-full bg-cyan-500/15 blur-[150px]" />
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] [background-size:70px_70px]" />
      </div>

      <nav className="sticky top-0 z-30 border-b border-white/10 bg-[#050510]/75 px-5 py-4 backdrop-blur-xl md:px-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-white">
            <ChevronRight className="h-4 w-4 rotate-180" />
            Portfolio
          </Link>
          <Link href="/whichone" className="flex items-center gap-2">
            <span className="relative h-8 w-8 overflow-hidden rounded-xl bg-white">
              <Image
                src="/whichone/whichone-logo.png"
                alt="WhichOne app logo"
                fill
                sizes="32px"
                className="object-cover"
              />
            </span>
            <span className="hidden text-lg font-black tracking-tight sm:inline">WhichOne</span>
          </Link>
          <Link href="/#contact" className="hidden rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:bg-white hover:text-black sm:inline-flex">
            Contact
          </Link>
        </div>
      </nav>

      <main className="relative z-10">
        <section className="relative mx-auto grid min-h-[calc(100vh-68px)] w-full max-w-[100vw] items-center gap-12 px-5 py-16 md:max-w-7xl md:grid-cols-[1.05fr_0.95fr] md:px-10 md:py-24">
          <div className="hero-copy w-full min-w-0 max-w-[350px] md:max-w-none">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-fuchsia-300/20 bg-white/10 px-4 py-2 text-sm font-semibold text-fuchsia-100 backdrop-blur-xl">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-300 shadow-[0_0_16px_rgba(110,231,183,0.9)]" />
              Social discovery mobile app case study
            </div>
            <h1 className="max-w-[350px] text-4xl font-black leading-[1.02] tracking-tight md:max-w-full md:text-7xl lg:text-8xl">
              WhichOne
              <span className="block bg-gradient-to-r from-fuchsia-300 via-rose-200 to-cyan-200 bg-clip-text text-transparent">
                <span className="block">Discover,</span>
                <span className="block">Connect, Chat</span>
                <span className="block">&amp; Share Moments</span>
              </span>
            </h1>
            <p className="mt-7 max-w-[350px] text-lg leading-8 text-slate-300 md:max-w-2xl md:text-xl">
              A modern social app experience with nearby discovery, real-time chat, stories, media sharing, and smart privacy controls.
            </p>
            <div className="mt-10 flex w-full max-w-[420px] flex-col gap-4 sm:w-auto sm:max-w-full sm:flex-row sm:items-center">
              <a 
                href="https://play.google.com/store/apps/details?id=com.whichone.quo" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex w-full max-w-full items-center justify-center gap-3 rounded-full border border-amber-500/20 bg-gradient-to-r from-amber-500/15 via-fuchsia-500/10 to-cyan-500/5 px-7 py-4 font-bold text-white shadow-[0_0_30px_rgba(245,158,11,0.12)] backdrop-blur-md transition hover:scale-[1.02] hover:border-amber-500/40 hover:shadow-[0_0_35px_rgba(245,158,11,0.2)] sm:w-auto"
              >
                <FaGooglePlay className="h-5 w-5 text-amber-300 animate-pulse" />
                <span>Get it on Google Play</span>
              </a>
              <a 
                href="#features" 
                className="inline-flex w-full max-w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 py-4 font-semibold text-slate-200 backdrop-blur transition hover:bg-white/10 hover:text-white sm:w-auto"
              >
                View Features
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="hero-phone relative min-h-[560px] min-w-0 max-w-[350px] md:max-w-full">
            <PhoneFrame variant="map" className="parallax-phone" />
            <div className="float-icon absolute left-2 top-12 rounded-2xl border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur-xl">
              <MessageCircle className="h-6 w-6 text-cyan-200" />
            </div>
            <div className="float-icon absolute right-3 top-24 hidden rounded-2xl border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur-xl sm:block">
              <Map className="h-6 w-6 text-fuchsia-200" />
            </div>
            <div className="float-icon absolute bottom-32 left-6 rounded-2xl border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur-xl">
              <Camera className="h-6 w-6 text-rose-200" />
            </div>
            <div className="float-icon absolute bottom-20 right-5 hidden rounded-2xl border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur-xl sm:block">
              <Shield className="h-6 w-6 text-emerald-200" />
            </div>
          </div>
        </section>

        <section id="features" className="whichone-section mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 md:grid-cols-2 md:px-10">
          <SectionIntro
            kicker="Nearby Discovery"
            title="A map experience built around privacy, not pressure."
            copy="WhichOne lets people discover nearby profiles, map stories, and shared social intent while keeping exact live location private and visibility under the user&apos;s control."
          />
          <div className="grid gap-5">
            {visibilityModes.map((mode) => (
              <article key={mode.title} className="whichone-card rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl">
                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-fuchsia-500/30 to-cyan-400/20">
                    <Eye className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{mode.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-300">{mode.copy}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="whichone-section chat-section border-y border-white/10 bg-white/[0.03] px-5 py-24 md:px-10">
          <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-[0.9fr_1.1fr]">
            <PhoneFrame variant="chat" className="parallax-phone" />
            <div>
              <SectionIntro
                kicker="Real-Time Chat"
                title="Fast conversations with rich media in the flow."
                copy="Requests turn into private chat rooms with messages, photos, videos, voice notes, delivery state, notifications, and encrypted message payloads designed for everyday social momentum."
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <FeatureCard icon={MessageCircle} title="Messaging" copy="Realtime one-to-one chat with replies, reactions, unread counts, and delivery awareness." />
                <FeatureCard icon={Video} title="Calls" copy="Audio and video calling use WebRTC signaling with presence and call state built into the chat layer." />
              </div>
            </div>
          </div>
        </section>

        <section className="whichone-section stories-section mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 md:grid-cols-2 md:px-10">
          <div>
            <SectionIntro
              kicker="Stories & Moments"
              title="Temporary moments that make discovery feel alive."
              copy="Stories support photo and video sharing, viewers, replies, and map-based public moments. Free users get a focused daily story flow, while premium unlocks room for more expression."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <FeatureCard icon={Film} title="Stories" copy="Share photos or videos with progress-driven viewing and reply paths." />
              <FeatureCard icon={MapPin} title="Map stories" copy="Place public moments into the nearby experience with approximate location context." />
              <FeatureCard icon={Crown} title="Premium" copy="Premium users can post beyond the free daily story limit." />
            </div>
          </div>
          <PhoneFrame variant="stories" className="parallax-phone" />
        </section>

        <section className="whichone-section camera-section border-y border-white/10 bg-white/[0.03] px-5 py-24 md:px-10">
          <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-[0.9fr_1.1fr]">
            <PhoneFrame variant="camera" className="parallax-phone" />
            <div>
              <SectionIntro
                kicker="Creative Media"
                title="Camera, gallery, and filters for expressive sharing."
                copy="WhichOne brings together camera capture, custom gallery selection, multiple media sharing, and a growing filter system inspired by modern social tools."
              />
              <div className="mt-8 flex flex-wrap gap-3">
                {filters.map((filter) => (
                  <span key={filter} className="filter-chip rounded-full border border-white/10 bg-gradient-to-r from-white/10 to-white/[0.04] px-4 py-2 text-sm font-semibold text-white backdrop-blur-xl">
                    {filter}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="whichone-section mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 md:grid-cols-2 md:px-10">
          <div>
            <SectionIntro
              kicker="Premium & Monetization"
              title="A clear Plus tier for deeper social discovery."
              copy="The monetization layer is built around meaningful upgrades: unlimited stories, premium filters, more profile photos, premium badge treatment, and richer map styles."
            />
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <article className="whichone-card rounded-3xl border border-white/10 bg-white/[0.06] p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Free</p>
                <h3 className="mt-3 text-3xl font-black text-white">Start social</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">Core discovery, chat, stories, and standard media tools.</p>
              </article>
              <article className="whichone-card premium-shine rounded-3xl border border-amber-200/30 bg-gradient-to-br from-amber-300/20 via-fuchsia-500/10 to-white/[0.04] p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-100">Plus</p>
                <h3 className="mt-3 text-3xl font-black text-white">Unlock more</h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-200">
                  {premiumFeatures.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald-300" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
          <PhoneFrame variant="premium" className="parallax-phone" />
        </section>

        <section className="whichone-section border-y border-white/10 bg-white/[0.03] px-5 py-24 md:px-10">
          <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-[0.9fr_1.1fr]">
            <PhoneFrame variant="tech" className="parallax-phone" />
            <div>
              <SectionIntro
                kicker="Security & Scale"
                title="Firebase-backed architecture with privacy-first controls."
                copy="WhichOne combines Flutter with Firebase services, Mapbox/OpenStreetMap tiles, RevenueCat subscriptions, FCM notifications, WebRTC calls, and encrypted chat media workflows."
              />
              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {techStack.map((tech) => (
                  <div key={tech} className="tech-card rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-sm font-semibold text-slate-100 backdrop-blur-xl">
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-24 md:px-10">
          <div className="whichone-section mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-fuchsia-500/20 via-white/[0.06] to-cyan-500/15 p-8 text-center shadow-2xl backdrop-blur-xl md:p-16">
            <div className="whichone-reveal mx-auto grid h-16 w-16 place-items-center rounded-3xl bg-white text-black shadow-[0_0_46px_rgba(255,255,255,0.28)]">
              <Zap className="h-8 w-8" />
            </div>
            <h2 className="whichone-reveal mt-8 text-4xl font-black tracking-tight text-white md:text-6xl">
              Want to build a social app like WhichOne?
            </h2>
            <p className="whichone-reveal mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Let&apos;s turn your product idea into a polished, scalable mobile experience with the right design system, backend, and launch path.
            </p>
            <div className="whichone-reveal mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a 
                href="https://play.google.com/store/apps/details?id=com.whichone.quo" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-amber-500/20 bg-gradient-to-r from-amber-500/15 via-fuchsia-500/10 to-cyan-500/5 px-8 py-4 font-bold text-white shadow-[0_0_30px_rgba(245,158,11,0.12)] backdrop-blur-md transition hover:scale-[1.02] hover:border-amber-500/40 hover:shadow-[0_0_35px_rgba(245,158,11,0.2)] sm:w-auto"
              >
                <FaGooglePlay className="h-5 w-5 text-amber-300 animate-pulse" />
                <span>Download on Google Play</span>
              </a>
              <Link href="/#contact" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-black transition hover:scale-[1.02] sm:w-auto">
                Contact Us
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 px-5 py-8 text-sm text-slate-400 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} Adarsh Verma. WhichOne portfolio case study.</p>
          <div className="flex flex-wrap gap-5">
            <Link href="/whichone-privacy-policy" className="transition hover:text-white">Privacy Policy</Link>
            <Link href="/whichone-child-safety-standards" className="transition hover:text-white">Child Safety</Link>
            <Link href="/whichone-data-deletion" className="transition hover:text-white">Data Deletion</Link>
            <Link href="/#contact" className="transition hover:text-white">Contact</Link>
          </div>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes whichone-pulse {
            0%, 100% { transform: scale(1); opacity: 0.9; }
            50% { transform: scale(1.12); opacity: 1; }
          }
          @keyframes whichone-shine {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
          }
          .map-pin { animation: whichone-pulse 2.6s ease-in-out infinite; }
          .premium-shine {
            position: relative;
            overflow: hidden;
          }
          .premium-shine::after {
            content: "";
            position: absolute;
            inset: 0;
            background: linear-gradient(110deg, transparent 0%, rgba(255,255,255,0.22) 45%, transparent 62%);
            background-size: 220% 100%;
            animation: whichone-shine 4s linear infinite;
            pointer-events: none;
          }
        `,
      }} />
    </div>
  );
}
