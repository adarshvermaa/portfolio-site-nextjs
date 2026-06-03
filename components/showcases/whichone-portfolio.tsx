"use client";

import { useEffect, useRef, useState } from "react";
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
  Sliders,
  Maximize2,
  SlidersHorizontal,
  Play,
  Pause,
  RefreshCw,
  Palette,
  Scissors,
  Activity,
  Smile,
  UploadCloud,
  CheckCircle2,
  AlertCircle,
  Trash2,
  Volume2,
  VolumeX,
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
  "FFmpeg (Cloud)",
  "Sharp (Cloud)",
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
  variant: "map" | "chat" | "stories" | "premium" | "tech";
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

/* -------------------------------------------------------------------------- */
/*                        1. LIVE CAMERA SIMULATOR                            */
/* -------------------------------------------------------------------------- */

type CameraPreset = "default" | "lowLight" | "gesture" | "selfie" | "group" | "coffee";

function LiveCameraSection() {
  const [preset, setPreset] = useState<CameraPreset>("default");
  const [beauty, setBeauty] = useState(50);
  const [telemetry, setTelemetry] = useState<string[]>([]);
  const consoleEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let logs: string[] = [];
    switch (preset) {
      case "default":
        logs = [
          "Evaluating inputs... SmartFilterEngine active",
          "Sampling Y-plane (luminance)... O(1) stride=128",
          "Luminance: L=148.4 (Normal light threshold)",
          "ML Face Detector: 0 faces in viewport",
          "Gesture Recognizer: none",
          "Detected object class: background_environment",
          "Auto-selected mode: ORIGINAL",
          "GPU uniforms: brightness=0.0, contrast=1.0, saturation=1.0",
          "Fragment Shader: original_preview.frag compiled & loaded"
        ];
        break;
      case "lowLight":
        logs = [
          "Evaluating inputs... SmartFilterEngine active",
          "Sampling Y-plane (luminance)... O(1) stride=128",
          "Luminance: L=24.1 (CRITICAL: threshold < 50.0)",
          "Low-light trigger: ACTIVE",
          "ML Face Detector: 0 faces",
          "Auto-selected mode: NIGHT GLOW (Auto-exposure boost)",
          "GPU uniforms: brightness=+0.25, contrast=0.90, saturation=1.05",
          "Fragment Shader: night_glow_denoise.frag loaded",
          "Server directive: encode with high-ISO filter map"
        ];
        break;
      case "gesture":
        logs = [
          "Evaluating inputs... SmartFilterEngine active",
          "Luminance: L=124.8 (Normal light)",
          "ML Hand Landmark: Gesture detected (Confidence: 98.4%)",
          "Gesture trigger: ACTIVE",
          "Auto-selected mode: GESTURE SPARKLE",
          "GPU uniforms: brightness=+0.10, contrast=1.10, saturation=1.10",
          "Fragment Shader: neon_glow_sparkle.frag active",
          "GLSL parameter: u_time=ticking, u_particle_glow=85.0"
        ];
        break;
      case "selfie":
        logs = [
          "Evaluating inputs... SmartFilterEngine active",
          "ML Face Detector: 1 face detected",
          "Primary face boundary area: 18.5% of canvas (> 12.0%)",
          "Camera state: FRONT_CAMERA mirrored",
          "Auto-selected mode: SELFIE MODE (Natural Beauty)",
          `GPU uniforms: brightness=+0.15, contrast=1.08, saturation=1.04`,
          `Beauty intensity set: ${beauty}% (Bilateral filter radius: ${(beauty * 0.12).toFixed(1)}px)`,
          "Fragment Shader: smooth_skin_v2.frag active"
        ];
        break;
      case "group":
        logs = [
          "Evaluating inputs... SmartFilterEngine active",
          "ML Face Detector: 3 faces detected",
          "Multi-face group layout trigger: ACTIVE",
          "Auto-selected mode: WIDE GROUP MODE (Illumination)",
          "GPU uniforms: brightness=+0.15, contrast=1.06, saturation=1.03",
          "Skin smoothing sub-rects: mapped to 3 face bounds",
          "Fragment Shader: group_frame_equalizer.frag active"
        ];
        break;
      case "coffee":
        logs = [
          "Evaluating inputs... SmartFilterEngine active",
          "Object Classifier: detected [Coffee Cup] (Confidence: 94.2%)",
          "Environment trigger: ACTIVE",
          "Auto-selected mode: COFFEE VIBE (Warm Vintage Sepia)",
          "GPU uniforms: brightness=-0.04, contrast=1.14, saturation=0.92, vignette=0.35",
          "Fragment Shader: vintage_warm.frag active",
          "Color Matrix: R[0.39,.77,.19], G[0.35,.69,.17], B[0.27,.53,.13]"
        ];
        break;
    }

    setTelemetry([]);
    logs.forEach((log, index) => {
      setTimeout(() => {
        setTelemetry((prev) => [...prev, log]);
      }, index * 100);
    });
  }, [preset, beauty]);

  useEffect(() => {
    if (consoleEndRef.current) {
      consoleEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [telemetry]);

  return (
    <section id="camera-section" className="whichone-section border-y border-white/10 bg-white/[0.03] px-5 py-24 md:px-10">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        
        {/* Viewfinder Simulator */}
        <div className="relative mx-auto w-full max-w-[280px] rounded-[2.4rem] border border-white/15 bg-slate-950 p-3 shadow-[0_32px_90px_rgba(0,0,0,0.55)] md:max-w-[320px]">
          <div className="absolute left-1/2 top-3 z-20 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-black" />
          <div className="relative aspect-[9/19.3] overflow-hidden rounded-[1.8rem] border border-white/10 bg-slate-900 select-none">
            
            {/* Viewfinder Background simulation */}
            <div 
              className={`absolute inset-0 transition-all duration-700 flex flex-col justify-between p-4 pt-8 text-white`}
              style={{
                background: 
                  preset === "default" ? "radial-gradient(circle at center, #1e1b4b 0%, #0f172a 100%)" :
                  preset === "lowLight" ? "radial-gradient(circle at center, #2e1065 0%, #03001e 100%)" :
                  preset === "gesture" ? "radial-gradient(circle at center, #0284c7 0%, #1e1b4b 100%)" :
                  preset === "selfie" ? "radial-gradient(circle at center, #4c1d95 0%, #0f172a 100%)" :
                  preset === "group" ? "radial-gradient(circle at center, #065f46 0%, #0f172a 100%)" :
                  "radial-gradient(circle at center, #78350f 0%, #1e1b4b 100%)",
                filter: preset === "lowLight" ? `brightness(45%) contrast(85%)` : `none`
              }}
            >
              {/* Noise overlay for low light */}
              {preset === "lowLight" && (
                <div className="absolute inset-0 opacity-15 pointer-events-none mix-blend-overlay bg-[radial-gradient(circle,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:4px_4px]" />
              )}

              {/* Camera Grid lines overlay */}
              <div className="absolute inset-0 pointer-events-none opacity-10 border-x-2 border-y border-dashed border-white" />

              {/* Viewfinder Contents */}
              <div className="relative z-10 flex items-center justify-between text-white/80">
                <Sparkles className={`h-5 w-5 ${preset === "gesture" ? "text-cyan-300 animate-bounce" : ""}`} />
                <p className="text-[10px] font-bold uppercase tracking-[0.2em]">Smart Camera</p>
                <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
              </div>

              {/* Viewfinder Graphics */}
              <div className="relative z-10 flex-1 grid place-items-center">
                {preset === "default" && (
                  <div className="relative w-28 h-28 border border-white/20 rounded-full flex items-center justify-center">
                    <Camera className="h-10 w-10 text-white/30" />
                    <div className="absolute inset-2 border border-white/10 rounded-full border-dashed" />
                  </div>
                )}

                {preset === "lowLight" && (
                  <div className="relative text-center">
                    <div className="mx-auto w-16 h-16 rounded-full bg-purple-500/20 border border-purple-400/40 animate-pulse flex items-center justify-center">
                      <Zap className="h-8 w-8 text-purple-300" />
                    </div>
                    {/* Ring flash simulator visual */}
                    <div className="absolute inset-[-40px] rounded-full border border-fuchsia-400/10 blur-xs animate-ping" />
                    <p className="mt-4 text-[10px] font-bold uppercase tracking-wider text-purple-200">Illumination Boost</p>
                  </div>
                )}

                {preset === "gesture" && (
                  <div className="relative text-center">
                    <div className="mx-auto w-20 h-20 rounded-full bg-cyan-400/10 border-2 border-cyan-300/40 flex items-center justify-center animate-pulse">
                      <span className="text-3xl animate-bounce">⚡</span>
                    </div>
                    <p className="mt-4 text-[10px] font-black uppercase tracking-widest text-cyan-200">Neon Particle Sparkle</p>
                    {/* Floating particle simulation */}
                    <div className="absolute left-[-20px] top-0 h-2.5 w-2.5 rounded-full bg-cyan-300 animate-ping" />
                    <div className="absolute right-[-10px] bottom-0 h-2 w-2 rounded-full bg-fuchsia-400 animate-ping" />
                  </div>
                )}

                {preset === "selfie" && (
                  <div className="relative text-center w-full">
                    {/* Simulated skin blur highlight */}
                    <div className="mx-auto w-24 h-24 rounded-full border-2 border-dashed border-fuchsia-400/60 flex items-center justify-center bg-white/5 backdrop-blur-xs">
                      <UserRound className="h-14 w-14 text-white/80" />
                    </div>
                    <div className="mt-3 flex items-center justify-center gap-1.5 bg-black/40 px-3 py-1 rounded-full mx-auto w-fit text-[10px] border border-white/10">
                      <span>Beauty Level:</span>
                      <span className="font-bold text-fuchsia-300">{beauty}%</span>
                    </div>
                  </div>
                )}

                {preset === "group" && (
                  <div className="relative w-full h-full flex items-center justify-around px-2">
                    <div className="w-16 h-20 border border-emerald-400/80 rounded-lg flex flex-col justify-between p-1 bg-emerald-950/20 backdrop-blur-xs animate-pulse">
                      <span className="text-[7px] text-emerald-300 font-bold">Face 1: 94%</span>
                      <UserRound className="h-8 w-8 text-emerald-200 mx-auto" />
                      <div className="h-1 w-full bg-emerald-500/20 rounded-full overflow-hidden">
                        <div className="w-[94%] h-full bg-emerald-400" />
                      </div>
                    </div>
                    <div className="w-16 h-20 border border-emerald-400/80 rounded-lg flex flex-col justify-between p-1 bg-emerald-950/20 backdrop-blur-xs animate-pulse">
                      <span className="text-[7px] text-emerald-300 font-bold">Face 2: 91%</span>
                      <UserRound className="h-8 w-8 text-emerald-200 mx-auto" />
                      <div className="h-1 w-full bg-emerald-500/20 rounded-full overflow-hidden">
                        <div className="w-[91%] h-full bg-emerald-400" />
                      </div>
                    </div>
                    <div className="w-16 h-20 border border-emerald-400/80 rounded-lg flex flex-col justify-between p-1 bg-emerald-950/20 backdrop-blur-xs animate-pulse">
                      <span className="text-[7px] text-emerald-300 font-bold">Face 3: 88%</span>
                      <UserRound className="h-8 w-8 text-emerald-200 mx-auto" />
                      <div className="h-1 w-full bg-emerald-500/20 rounded-full overflow-hidden">
                        <div className="w-[88%] h-full bg-emerald-400" />
                      </div>
                    </div>
                  </div>
                )}

                {preset === "coffee" && (
                  <div className="relative text-center">
                    <div className="w-28 h-28 border border-amber-300/60 rounded-xl bg-amber-950/20 backdrop-blur-xs flex flex-col justify-center p-3 animate-pulse">
                      <span className="text-[9px] text-amber-300 font-bold tracking-wider mb-2">[Object: Cup 94%]</span>
                      <span className="text-3xl">☕</span>
                    </div>
                    <p className="mt-4 text-[10px] font-bold tracking-wider text-amber-200 uppercase">Warm Vintage Matrix</p>
                  </div>
                )}
              </div>

              {/* Viewfinder Bottom */}
              <div className="relative z-10 space-y-4">
                {/* Simulated Preset Indicator strip */}
                <div className="flex justify-center gap-1.5 select-none overflow-x-hidden text-[9px] font-semibold text-white/50">
                  {["Original", "Night Glow", "Neon Spark", "Beauty Glow", "Wide Group", "Vintage"].map((item, idx) => {
                    const isSelected = 
                      (preset === "default" && idx === 0) ||
                      (preset === "lowLight" && idx === 1) ||
                      (preset === "gesture" && idx === 2) ||
                      (preset === "selfie" && idx === 3) ||
                      (preset === "group" && idx === 4) ||
                      (preset === "coffee" && idx === 5);
                    return (
                      <span 
                        key={item} 
                        className={`px-2 py-1 rounded-full border transition-all ${
                          isSelected ? "bg-white text-black border-white font-bold" : "border-white/10 bg-white/5"
                        }`}
                      >
                        {item}
                      </span>
                    );
                  })}
                </div>

                <div className="flex items-center justify-between px-4">
                  <div className="h-9 w-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                    <ImageIcon className="h-4.5 w-4.5 text-white/70" />
                  </div>
                  
                  {/* Shutter button wrapper */}
                  <div className="h-16 w-16 rounded-full border-4 border-white/30 flex items-center justify-center bg-transparent">
                    <div className="h-12 w-12 rounded-full bg-white active:scale-95 transition" />
                  </div>

                  <div className="h-9 w-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                    <RefreshCw className="h-4.5 w-4.5 text-white/70" />
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Dynamic Controls & ML Telemetry Terminal */}
        <div className="space-y-8">
          <SectionIntro
            kicker="Live Camera Features"
            title="Intelligent Camera Engine with automated ML decisions."
            copy="The client-side SmartFilterEngine dynamically scans camera frame data to auto-select shader presets. It samples the YUV Y-plane in O(1) time for low-light, and tracks ML landmarks to optimize features for selfie focus, gestures, group shots, or environmental objects."
          />

          {/* Preset Buttons */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {[
              { id: "default", label: "Normal (Cinematic)", icon: "📷" },
              { id: "lowLight", label: "Low Light Trigger", icon: "🌙" },
              { id: "gesture", label: "Hand Gesture", icon: "🤳" },
              { id: "selfie", label: "Selfie Portrait", icon: "👤" },
              { id: "group", label: "Group (3+ Faces)", icon: "👥" },
              { id: "coffee", label: "Object (Coffee)", icon: "☕" },
            ].map((p) => (
              <button
                key={p.id}
                onClick={() => setPreset(p.id as CameraPreset)}
                className={`flex items-center gap-3 rounded-2xl border px-4 py-3.5 text-xs font-semibold tracking-wide transition-all duration-300 ${
                  preset === p.id 
                    ? "bg-gradient-to-r from-fuchsia-500/20 to-cyan-500/20 border-fuchsia-500/60 text-white shadow-[0_0_15px_rgba(217,70,239,0.2)]" 
                    : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 hover:border-white/20"
                }`}
              >
                <span className="text-base">{p.icon}</span>
                <span>{p.label}</span>
              </button>
            ))}
          </div>

          {/* Conditional slider for beauty */}
          {preset === "selfie" && (
            <div className="p-5 rounded-2xl border border-white/10 bg-white/[0.04] space-y-3 animate-fade-in">
              <div className="flex items-center justify-between text-xs font-semibold">
                <span className="text-fuchsia-200">Face Contour Beauty Glow</span>
                <span className="text-white bg-fuchsia-500/20 px-2 py-0.5 rounded-full">{beauty}%</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={beauty} 
                onChange={(e) => setBeauty(Number(e.target.value))}
                className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-fuchsia-400"
              />
            </div>
          )}

          {/* ML Telemetry Terminal */}
          <div className="rounded-2xl border border-white/10 bg-[#070712] p-5 shadow-2xl overflow-hidden font-mono text-xs select-text">
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3 text-[10px] text-slate-500 font-bold uppercase tracking-wider">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                <span>SmartFilterEngine Telemetry</span>
              </div>
              <span>Live Console Logs</span>
            </div>
            
            <div className="space-y-2 max-h-[170px] overflow-y-auto pr-2 scrollbar-thin">
              {telemetry.map((log, idx) => (
                <div key={idx} className="flex gap-2.5 animate-slide-up">
                  <span className="text-fuchsia-400 shrink-0 select-none">&gt;&gt;</span>
                  <span className={log.includes("CRITICAL") || log.includes("trigger: ACTIVE") ? "text-amber-300 font-bold" : "text-slate-300"}>
                    {log}
                  </span>
                </div>
              ))}
              <div ref={consoleEndRef} />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                         2. CREATIVE STORY STUDIO                           */
/* -------------------------------------------------------------------------- */

type RatioPreset = "9:16" | "1:1" | "4:5";

function StoryStudioSection() {
  const [ratio, setRatio] = useState<RatioPreset>("9:16");
  const [speed, setSpeed] = useState<number>(1.0);
  const [beauty, setBeauty] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<string>("draw");
  const [brushColor, setBrushColor] = useState<string>("#22d3ee"); // cyan
  const [isNeon, setIsNeon] = useState<boolean>(true);
  const [sticker, setSticker] = useState<string | null>(null);
  const [frameIndex, setFrameIndex] = useState<number>(0);

  // Freehand drawing canvas state
  const [lines, setLines] = useState<{ points: { x: number; y: number }[]; color: string; isNeon: boolean }[]>([]);
  const [currentLine, setCurrentLine] = useState<{ x: number; y: number }[]>([]);
  const svgRef = useRef<SVGSVGElement>(null);

  const handleDrawStart = (x: number, y: number) => {
    setCurrentLine([{ x, y }]);
  };

  const handleDrawMove = (x: number, y: number) => {
    if (currentLine.length === 0) return;
    setCurrentLine((prev) => [...prev, { x, y }]);
  };

  const handleDrawEnd = () => {
    if (currentLine.length > 0) {
      setLines((prev) => [...prev, { points: currentLine, color: brushColor, isNeon }]);
      setCurrentLine([]);
    }
  };

  // Coordinates converters
  const getCoordinates = (e: React.MouseEvent<SVGSVGElement>) => {
    const rect = svgRef.current?.getBoundingClientRect();
    if (!rect) return null;
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const getTouchCoordinates = (e: React.TouchEvent<SVGSVGElement>) => {
    const rect = svgRef.current?.getBoundingClientRect();
    if (!rect || e.touches.length === 0) return null;
    return {
      x: e.touches[0].clientX - rect.left,
      y: e.touches[0].clientY - rect.top,
    };
  };

  const clearDrawings = () => setLines([]);

  // Frame colors for timeline thumbnail scrubbing simulation
  const frameGradients = [
    "from-indigo-950 via-indigo-900 to-slate-900",
    "from-purple-950 via-indigo-900 to-slate-900",
    "from-pink-950 via-purple-900 to-slate-900",
    "from-rose-950 via-rose-900 to-slate-900",
    "from-orange-950 via-amber-900 to-slate-900",
    "from-emerald-950 via-teal-900 to-slate-900",
    "from-cyan-950 via-teal-900 to-slate-900",
    "from-blue-950 via-indigo-900 to-slate-900",
  ];

  return (
    <section id="studio-section" className="whichone-section mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 lg:grid-cols-[1.15fr_0.85fr] md:px-10">
      
      {/* Studio description */}
      <div>
        <SectionIntro
          kicker="Story Studio features"
          title="Polished Creative Suite for ultimate expressions."
          copy="The WhichOne Studio gives users an advanced local workspace to customize temporary moments before publishing. Leverage interactive brush tools with custom neon glow options, re-time frame speeds, seek video clips via dynamic frame timeline buffers, scale canvas aspect ratios, and place smart widgets."
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <FeatureCard 
            icon={Palette} 
            title="Neon Drawings Overlay" 
            copy="Supports multi-brush overlays on canvas. It converts drawing coordinate vectors on-device using a RepaintBoundary widget to render transparent PNGs for server-side overlay blend." 
          />
          <FeatureCard 
            icon={Maximize2} 
            title="Aspect Ratio Recanvas" 
            copy="Provides custom bounding-box adjustments between standard 9:16 mobile story aspect, 1:1 post squares, and 4:5 vertical feeds with animating border paddings." 
          />
          <FeatureCard 
            icon={Scissors} 
            title="Trim & Retiming Buffer" 
            copy="Uses vt.VideoThumbnail frames local caching to extract 8 thumbnail strips, providing interactive segment scrub-editing and time-remap mapping (0.5x, 1x, 2x)." 
          />
          <FeatureCard 
            icon={Smile} 
            title="Stickers & Beauty Sliders" 
            copy="Includes geolocation distance meters, automatic time stamps, emojis, and facial beauty sliders mapping to bilateral smoothing ranges." 
          />
        </div>
      </div>

      {/* Interactive Studio mock */}
      <div className="flex flex-col items-center">
        <div className="relative mx-auto w-full max-w-[280px] rounded-[2.4rem] border border-white/15 bg-slate-950 p-3 shadow-[0_32px_90px_rgba(0,0,0,0.55)] md:max-w-[325px]">
          <div className="absolute left-1/2 top-3 z-20 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-black" />
          
          {/* Main Studio Viewport */}
          <div className="relative aspect-[9/19.3] overflow-hidden rounded-[1.8rem] border border-white/10 bg-[#0d0c18] flex flex-col justify-between">
            
            {/* Top Toolbar */}
            <div className="relative z-10 flex items-center justify-between px-3 pt-7 text-white/80 select-none">
              <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded-md font-bold uppercase tracking-widest">Studio</span>
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => setIsNeon(!isNeon)} 
                  className={`text-[10px] px-2 py-0.5 rounded-full border transition-all ${
                    isNeon ? "bg-fuchsia-500/20 border-fuchsia-400 text-fuchsia-200" : "border-white/10 bg-white/5"
                  }`}
                >
                  {isNeon ? "💡 Neon Brush" : "🖌️ Normal Brush"}
                </button>
                <button onClick={clearDrawings} className="text-white/40 hover:text-white"><Trash2 className="h-4 w-4" /></button>
              </div>
            </div>

            {/* Simulated Editable Canvas Area */}
            <div className="flex-1 w-full flex items-center justify-center p-2 relative">
              
              <div 
                className={`relative w-full overflow-hidden transition-all duration-500 border border-white/5 rounded-2xl bg-gradient-to-b ${frameGradients[frameIndex]}`}
                style={{
                  aspectRatio: ratio === "9:16" ? "9/16" : ratio === "1:1" ? "1/1" : "4/5",
                  filter: `brightness(${1 + beauty * 0.002}) saturate(${1 + beauty * 0.001}) blur(${beauty * 0.05}px)`
                }}
              >
                {/* SVG freehand drawing overlay */}
                <svg
                  ref={svgRef}
                  onMouseDown={(e) => {
                    const coords = getCoordinates(e);
                    if (coords) handleDrawStart(coords.x, coords.y);
                  }}
                  onMouseMove={(e) => {
                    const coords = getCoordinates(e);
                    if (coords) handleDrawMove(coords.x, coords.y);
                  }}
                  onMouseUp={handleDrawEnd}
                  onMouseLeave={handleDrawEnd}
                  onTouchStart={(e) => {
                    const coords = getTouchCoordinates(e);
                    if (coords) handleDrawStart(coords.x, coords.y);
                  }}
                  onTouchMove={(e) => {
                    const coords = getTouchCoordinates(e);
                    if (coords) handleDrawMove(coords.x, coords.y);
                  }}
                  onTouchEnd={handleDrawEnd}
                  className="absolute inset-0 w-full h-full z-20 cursor-crosshair touch-none"
                >
                  {lines.map((line, idx) => (
                    <path
                      key={idx}
                      d={`M ${line.points.map((p) => `${p.x} ${p.y}`).join(" L ")}`}
                      fill="none"
                      stroke={line.color}
                      strokeWidth={line.isNeon ? "6" : "3"}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      filter={line.isNeon ? "drop-shadow(0px 0px 5px var(--neon-color, #f5f5f5))" : "none"}
                      style={{
                        // @ts-ignore
                        "--neon-color": line.color
                      }}
                    />
                  ))}
                  {currentLine.length > 0 && (
                    <path
                      d={`M ${currentLine.map((p) => `${p.x} ${p.y}`).join(" L ")}`}
                      fill="none"
                      stroke={brushColor}
                      strokeWidth={isNeon ? "6" : "3"}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      filter={isNeon ? "drop-shadow(0px 0px 5px var(--neon-color, #f5f5f5))" : "none"}
                      style={{
                        // @ts-ignore
                        "--neon-color": brushColor
                      }}
                    />
                  )}
                </svg>

                {/* Simulated Stickers on canvas */}
                {sticker === "location" && (
                  <div className="absolute top-4 left-4 z-10 bg-black/50 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-xl text-[9px] font-bold text-white flex items-center gap-1.5 shadow-lg select-none">
                    <MapPin className="h-3 w-3 text-cyan-300 animate-pulse" />
                    <span>📍 Coffee House (Nearby)</span>
                  </div>
                )}
                {sticker === "time" && (
                  <div className="absolute top-4 right-4 z-10 bg-black/50 backdrop-blur-md border border-white/10 px-3 py-1 rounded-xl text-[10px] font-mono text-cyan-200 shadow-lg select-none">
                    12:47 AM
                  </div>
                )}
                {sticker === "fire" && (
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 bg-gradient-to-r from-rose-500 to-amber-400 px-4 py-1.5 rounded-full text-[10px] font-bold text-white shadow-lg select-none animate-bounce flex items-center gap-1">
                    <span>🔥 STORY VIBES</span>
                  </div>
                )}

                {/* Background placeholder graphic */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40 select-none">
                  <div className="text-center">
                    <UserRound className="h-16 w-16 text-white/50 mx-auto" />
                    <span className="text-[9px] uppercase tracking-widest text-white/40 block mt-2">Frame {frameIndex + 1}</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Editing Tool Drawer */}
            <div className="relative z-10 bg-[#080711]/95 border-t border-white/10 p-3.5 space-y-3.5">
              
              {/* Tab Selector */}
              <div className="flex justify-between select-none">
                {[
                  { id: "draw", label: "🖌️ Paint" },
                  { id: "canvas", label: "📐 Canvas" },
                  { id: "speed", label: "⏱️ Speed" },
                  { id: "stickers", label: "⭐ Widgets" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`text-[10px] font-bold pb-1 transition-all ${
                      activeTab === tab.id 
                        ? "text-fuchsia-400 border-b-2 border-fuchsia-400" 
                        : "text-slate-400"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content Box */}
              <div className="h-12 flex items-center">
                
                {/* Paint color list */}
                {activeTab === "draw" && (
                  <div className="flex items-center justify-around w-full">
                    {[
                      { hex: "#ffffff", label: "white" },
                      { hex: "#22d3ee", label: "cyan" },
                      { hex: "#e879f9", label: "fuchsia" },
                      { hex: "#facc15", label: "yellow" },
                      { hex: "#4ade80", label: "green" },
                    ].map((col) => (
                      <button
                        key={col.hex}
                        onClick={() => setBrushColor(col.hex)}
                        className={`h-6 w-6 rounded-full border transition-all ${
                          brushColor === col.hex ? "scale-115 border-white ring-2 ring-fuchsia-400/50" : "border-white/10"
                        }`}
                        style={{ backgroundColor: col.hex }}
                      />
                    ))}
                    <div className="text-[9px] font-semibold text-slate-400 leading-none">Click viewport to draw!</div>
                  </div>
                )}

                {/* Canvas Aspect Ratios */}
                {activeTab === "canvas" && (
                  <div className="flex items-center justify-around w-full">
                    {(["9:16", "1:1", "4:5"] as RatioPreset[]).map((r) => (
                      <button
                        key={r}
                        onClick={() => setRatio(r)}
                        className={`px-3 py-1 rounded-xl text-[10px] font-bold border transition ${
                          ratio === r ? "bg-white text-black border-white" : "border-white/10 text-slate-300"
                        }`}
                      >
                        {r}
                      </button>
                    ))}
                  </div>
                )}

                {/* Speed mapping */}
                {activeTab === "speed" && (
                  <div className="flex items-center justify-around w-full select-none">
                    {[0.5, 1.0, 2.0].map((s) => (
                      <button
                        key={s}
                        onClick={() => setSpeed(s)}
                        className={`px-3 py-1.5 rounded-xl text-[9px] font-black border transition ${
                          speed === s ? "bg-cyan-500 text-white border-cyan-400" : "border-white/10 text-slate-300"
                        }`}
                      >
                        {s === 1.0 ? "Normal (1.0x)" : `${s}x`}
                      </button>
                    ))}
                  </div>
                )}

                {/* Stickers toggles */}
                {activeTab === "stickers" && (
                  <div className="flex items-center justify-around w-full">
                    {[
                      { id: "location", label: "📍 Map Location" },
                      { id: "time", label: "⏰ Clock Badge" },
                      { id: "fire", label: "🔥 Vibe Sticker" },
                    ].map((st) => (
                      <button
                        key={st.id}
                        onClick={() => setSticker(sticker === st.id ? null : st.id)}
                        className={`px-2 py-1.5 rounded-xl text-[9px] font-semibold border transition ${
                          sticker === st.id ? "bg-fuchsia-500 text-white border-fuchsia-400" : "border-white/10 text-slate-300"
                        }`}
                      >
                        {st.label}
                      </button>
                    ))}
                  </div>
                )}

              </div>

              {/* Dynamic Beauty slider */}
              <div className="flex items-center gap-3 pt-1 border-t border-white/5">
                <span className="text-[9px] text-slate-400 uppercase font-bold shrink-0">Bilateral Skin Blur</span>
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={beauty} 
                  onChange={(e) => setBeauty(Number(e.target.value))}
                  className="flex-1 h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-fuchsia-400"
                />
                <span className="text-[9px] font-mono text-fuchsia-300 w-5 text-right">{beauty}</span>
              </div>

              {/* Timeline frame thumbnails strip */}
              <div className="pt-2 border-t border-white/10">
                <div className="text-[8px] uppercase tracking-wider text-slate-500 font-bold mb-1.5 select-none">Timeline Frames Scrubbing</div>
                <div className="grid grid-cols-8 gap-1">
                  {frameGradients.map((grad, idx) => (
                    <button
                      key={idx}
                      onClick={() => setFrameIndex(idx)}
                      className={`h-6 rounded bg-gradient-to-b border transition-all ${grad} ${
                        frameIndex === idx ? "border-fuchsia-400 scale-105 shadow-md shadow-fuchsia-500/20" : "border-white/5"
                      }`}
                    />
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>

    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                 3. STORY UPLOAD PIPELINE SIMULATOR                         */
/* -------------------------------------------------------------------------- */

type UploadStepStatus = "idle" | "running" | "offline" | "success";

function StoryUploadPipelineSection() {
  const [pipelineStatus, setPipelineStatus] = useState<UploadStepStatus>("idle");
  const [activeStep, setActiveStep] = useState<number>(0);
  const [percent, setPercent] = useState<number>(0);
  const [logs, setLogs] = useState<string[]>([]);
  const consoleBottomRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Steps matching StoryUploadManager lifecycle
  const steps = [
    { title: "Task Enqueue", subtitle: "Locks queue, registers media job document in Firestore with 'uploading' status." },
    { title: "Storage Transfer", subtitle: "Uploads original raw file (up to 200MB) & drawings overlay PNG to cloud bucket." },
    { title: "Trigger Server Worker", subtitle: "onRawMediaUpload triggers Cloud Function container. Enforces concurrency limit (3 max)." },
    { title: "FFmpeg/Sharp Encoding", subtitle: "Transcodes to H.264 video at 15Mbps (premium) or crops & compresses images with Sharp." },
    { title: "Atomic Publish Transaction", subtitle: "Runs transaction to verify daily story limit, geohashes location, updates user active story summary." },
    { title: "Success & Notify", subtitle: "Sends push notification alert to nearby active users, cleans up raw temporary files." }
  ];

  const addLog = (msg: string) => {
    setLogs((prev) => [...prev, `[${new Date().toLocaleTimeString()}] ${msg}`]);
  };

  const startPipeline = () => {
    if (pipelineStatus === "running") return;
    
    // If starting fresh or resuming
    if (pipelineStatus === "offline") {
      addLog("Connection restored. Resuming media upload stream...");
      setPipelineStatus("running");
      runUploadLoop(activeStep, percent);
    } else {
      setLogs([]);
      setPercent(0);
      setActiveStep(0);
      setPipelineStatus("running");
      addLog("StoryUploadManager: Lock acquired. Sequential queue initialized.");
      addLog("Enqueue task: UID_aarav_story_job");
      runUploadLoop(0, 0);
    }
  };

  const pausePipeline = () => {
    if (pipelineStatus !== "running") return;
    if (timerRef.current) clearTimeout(timerRef.current);
    setPipelineStatus("offline");
    addLog("CRITICAL: Network connection interrupted. Queue halted.");
    addLog("Background status: offline socket cache active. Awaiting retry...");
  };

  const resetPipeline = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setPipelineStatus("idle");
    setActiveStep(0);
    setPercent(0);
    setLogs([]);
  };

  const runUploadLoop = (step: number, pct: number) => {
    if (step >= steps.length) {
      setPipelineStatus("success");
      addLog("Story published successfully! 🎉");
      addLog("Push notifications delivered to 14 nearby users.");
      addLog("Lock released. StoryUploadManager idle.");
      return;
    }

    setActiveStep(step);
    
    // Adjust timing loop based on steps
    let increment = 5;
    let delay = 180;
    
    if (step === 0) { // Enqueue
      pct = 5;
      increment = 5;
      delay = 300;
    } else if (step === 1) { // Storage upload
      increment = 10;
      delay = 200;
    } else if (step === 2) { // Server trigger
      increment = 10;
      delay = 400;
    } else if (step === 3) { // FFmpeg transcode
      increment = 5;
      delay = 350;
    } else if (step === 4) { // Firestore transaction
      increment = 15;
      delay = 500;
    } else { // Complete
      increment = 20;
      delay = 300;
    }

    const nextPct = Math.min(pct + increment, Math.round((step + 1) * (100 / steps.length)));

    timerRef.current = setTimeout(() => {
      setPercent(nextPct);

      // Log prints matching pipeline status
      if (pct === 0 || nextPct === Math.round((step + 1) * (100 / steps.length))) {
        triggerLogsForStep(step);
      }

      if (nextPct >= Math.round((step + 1) * (100 / steps.length))) {
        runUploadLoop(step + 1, nextPct);
      } else {
        runUploadLoop(step, nextPct);
      }
    }, delay);
  };

  const triggerLogsForStep = (step: number) => {
    switch (step) {
      case 0:
        addLog("media_jobs/UID_aarav_story_job status = 'queued'");
        addLog("Locking upload manager scheduler thread.");
        break;
      case 1:
        addLog("Storage: Uploading original raw media (Size: 18.4MB)...");
        addLog("Storage: Uploading transparent PNG drawings canvas overlay.png...");
        break;
      case 2:
        addLog("Firebase Storage Object finalized event captured.");
        addLog("onRawMediaUpload container started. Memory quota: 4GiB, CPU: 2.");
        addLog("Verifying premium entitlement user metadata... Active: TRUE.");
        addLog("Concurrent jobs check: 1 active job (max limit: 3). Permit granted.");
        break;
      case 3:
        addLog("FFmpeg: Input type video/mp4, Resolution: 1080x1920.");
        addLog("FFmpeg: Applying filters: hflip, saturation=1.05, vignette=0.15.");
        addLog("FFmpeg: Drawing composite layout overlays scaled via Lanczos filter.");
        addLog("FFmpeg: Encoding video H.264 profile:high level:4.2 @ 15Mbps bitrate.");
        addLog("FFmpeg: Audio AAC encoding @ 128k.");
        addLog("Sharp: Processing fallback thumbnail image (Resolution: 512x512).");
        break;
      case 4:
        addLog("Firestore: Starting atomic Transaction.");
        addLog("Firestore: Loading user documentation, checking story post limit (Limit: 99).");
        addLog("Fuzzy Location: Offsetting latitude/longitude. Geohashing neighbor key calculated.");
        addLog("Firestore: Creating document in '/stories' collection.");
        addLog("Firestore: Transaction completed successfully.");
        break;
      case 5:
        addLog("FCM: Sending data payload notify_nearby_story to geohash neighbor grid.");
        addLog("Cleanup: Deleting raw original and overlay files from Cloud Storage.");
        addLog("Cleanup: Deleting local temporary files cache.");
        break;
    }
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  useEffect(() => {
    if (consoleBottomRef.current) {
      consoleBottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [logs]);

  return (
    <section id="upload-section" className="whichone-section border-y border-white/10 bg-white/[0.03] px-5 py-24 md:px-10">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        
        {/* Writeup info */}
        <div>
          <SectionIntro
            kicker="High-Quality Media Pipeline"
            title="Optimized Background Story Upload Pipeline."
            copy="The StoryUploadManager ensures uploads run seamlessly in the background. It implements concurrency constraints, uploads raw files and drawing overlays in parallel, listens for server-side transcode status updates via Firestore subscriptions, and cleanly triggers local push notifications."
          />
          
          <div className="mt-8 space-y-4">
            <article className="whichone-card rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Database className="h-4 w-4 text-cyan-300" />
                <span>Sequenced Queue Manager</span>
              </h4>
              <p className="mt-2 text-xs leading-6 text-slate-300">
                Maintains a sequential queue in local storage, preventing simultaneous uploads. If the internet connection breaks, the queue freezes and safely caches local state.
              </p>
            </article>

            <article className="whichone-card rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <SlidersHorizontal className="h-4 w-4 text-fuchsia-300" />
                <span>Server-Side FFmpeg &amp; Sharp Transcoder</span>
              </h4>
              <p className="mt-2 text-xs leading-6 text-slate-300">
                A Firebase Cloud Function triggers on raw uploads. It enforces H.264 video compression at 15Mbps (premium vs 5Mbps standard), shifts metadata blocks for fast web play (`faststart`), overlays drawing layers, and resizes photos inside a 4K viewport.
              </p>
            </article>

            <article className="whichone-card rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Activity className="h-4 w-4 text-emerald-300" />
                <span>Atomic Firestore Transaction &amp; Geohash Neighborhood</span>
              </h4>
              <p className="mt-2 text-xs leading-6 text-slate-300">
                Publishes updates within a single Firestore transaction to maintain database integrity. Map stories are offset by a fuzzy distance and indexed in a geohash grid to notify nearby users.
              </p>
            </article>
          </div>
        </div>

        {/* Pipeline Terminal Simulator */}
        <div className="space-y-5">
          <div className="rounded-3xl border border-white/10 bg-[#06060c] p-6 shadow-2xl space-y-6">
            
            {/* Widget Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider">
                <UploadCloud className={`h-4.5 w-4.5 ${pipelineStatus === "running" ? "text-cyan-300 animate-pulse" : "text-slate-400"}`} />
                <span>Upload Manager Sim</span>
              </div>
              <div className="flex gap-2">
                {pipelineStatus !== "running" && pipelineStatus !== "success" && (
                  <button 
                    onClick={startPipeline} 
                    className="px-3 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white text-[10px] font-bold transition-all shadow-md shadow-cyan-500/20"
                  >
                    {pipelineStatus === "offline" ? "▶ Resume" : "⚡ Start Upload"}
                  </button>
                )}
                {pipelineStatus === "running" && (
                  <button 
                    onClick={pausePipeline} 
                    className="px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-[10px] font-bold transition-all"
                  >
                    ⏸ Disconnect Net
                  </button>
                )}
                {(pipelineStatus === "offline" || pipelineStatus === "success" || pipelineStatus === "running") && (
                  <button 
                    onClick={resetPipeline} 
                    className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-[10px] font-bold transition"
                  >
                    Reset
                  </button>
                )}
              </div>
            </div>

            {/* Task Card UI */}
            <div className="p-4 rounded-2xl border border-white/10 bg-white/[0.03] space-y-3">
              <div className="flex items-center justify-between text-xs">
                <div>
                  <p className="font-bold text-white">aarav_story_moment.mp4</p>
                  <p className="text-[10px] text-slate-500 font-mono">18.4 MB | Video Upload</p>
                </div>
                <div className="text-right">
                  <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold uppercase ${
                    pipelineStatus === "idle" ? "bg-slate-500/20 text-slate-400" :
                    pipelineStatus === "running" ? "bg-cyan-500/20 text-cyan-300 animate-pulse" :
                    pipelineStatus === "offline" ? "bg-red-500/20 text-red-300" :
                    "bg-emerald-500/20 text-emerald-300"
                  }`}>
                    {pipelineStatus === "idle" && "Idle"}
                    {pipelineStatus === "running" && `Uploading ${percent}%`}
                    {pipelineStatus === "offline" && "Connection Lost"}
                    {pipelineStatus === "success" && "Published"}
                  </span>
                </div>
              </div>

              {/* Progress slider bar */}
              <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                <div 
                  className={`h-full transition-all duration-300 rounded-full ${
                    pipelineStatus === "offline" ? "bg-red-400" :
                    pipelineStatus === "success" ? "bg-emerald-400" :
                    "bg-gradient-to-r from-cyan-400 to-fuchsia-500"
                  }`}
                  style={{ width: `${percent}%` }}
                />
              </div>

              {/* Pipeline Step visual list */}
              <div className="grid grid-cols-6 gap-1 pt-2">
                {steps.map((st, idx) => {
                  const isActive = idx === activeStep && pipelineStatus !== "idle";
                  const isCompleted = idx < activeStep || pipelineStatus === "success";
                  return (
                    <div 
                      key={idx} 
                      className={`h-1.5 rounded-full transition-all duration-500 ${
                        isCompleted ? "bg-emerald-400" :
                        isActive ? (pipelineStatus === "offline" ? "bg-red-400 animate-pulse" : "bg-cyan-400 animate-pulse") :
                        "bg-white/10"
                      }`}
                    />
                  );
                })}
              </div>
            </div>

            {/* Terminal console logger */}
            <div className="rounded-2xl border border-white/10 bg-slate-950 p-4 font-mono text-[10px] leading-relaxed select-text shadow-inner">
              <div className="flex items-center gap-1.5 border-b border-white/5 pb-2 mb-2 text-slate-500 font-bold uppercase tracking-wider">
                <Activity className="h-3.5 w-3.5" />
                <span>StoryUploadManager Pipeline Logs</span>
              </div>
              <div className="space-y-1.5 max-h-[160px] overflow-y-auto pr-2 scrollbar-thin">
                {logs.length === 0 ? (
                  <div className="text-slate-600 text-center py-6">Awaiting queue execution...</div>
                ) : (
                  logs.map((lg, i) => (
                    <div key={i} className="flex gap-2">
                      <span className="text-slate-600 select-none">&gt;</span>
                      <span className={
                        lg.includes("CRITICAL") || lg.includes("Error") ? "text-red-400" :
                        lg.includes("published successfully") ? "text-emerald-400 font-bold" :
                        lg.includes("FFmpeg:") ? "text-fuchsia-300" :
                        lg.includes("Firestore:") ? "text-cyan-300" :
                        "text-slate-300"
                      }>
                        {lg}
                      </span>
                    </div>
                  ))
                )}
                <div ref={consoleBottomRef} />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                         MAIN PORTFOLIO COMPONENT                           */
/* -------------------------------------------------------------------------- */

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
          trigger: "#camera-section",
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
      
      {/* Background gradients */}
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
        
        {/* HERO SECTION */}
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

        {/* MAP & NEARBY DISCOVERY */}
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

        {/* CHAT SECTION */}
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

        {/* STORIES SECTION */}
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

        {/* NEW ADDITION: STORY STUDIO SECTION */}
        <StoryStudioSection />

        {/* NEW ADDITION: CAMERA & SMART FILTERS SECTION */}
        <LiveCameraSection />

        {/* NEW ADDITION: STORY UPLOAD PIPELINE SECTION */}
        <StoryUploadPipelineSection />

        {/* PREMIUM SECTION */}
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

        {/* TECH STACK & SECURITY SECTION */}
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

        {/* CTA FOOTER HERO */}
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

      {/* FOOTER */}
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

      {/* Dynamic Keyframes & Custom UI Styles */}
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
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(6px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes slide-up {
            from { opacity: 0; transform: translateY(4px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
          .animate-slide-up { animation: slide-up 0.25s ease-out forwards; }
          
          /* Custom mini scrollbar for log terminals */
          .scrollbar-thin::-webkit-scrollbar {
            width: 4px;
            height: 4px;
          }
          .scrollbar-thin::-webkit-scrollbar-track {
            background: transparent;
          }
          .scrollbar-thin::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.12);
            border-radius: 2px;
          }
          .scrollbar-thin::-webkit-scrollbar-thumb:hover {
            background: rgba(255, 255, 255, 0.24);
          }
        `,
      }} />
    </div>
  );
}
