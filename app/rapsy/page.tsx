import React from 'react';
import {
  Camera, Volume2, Activity, Gauge, Zap, ChevronRight,
  Shield, Smartphone, Dumbbell, LineChart, Lock, CheckCircle2, Play,
  Cpu, Target
} from 'lucide-react';
import Link from 'next/link';
import { Download } from 'lucide-react';

export default function RapsyShowcase() {
  const GPLAY_LINK = "https://play.google.com/store/apps/details?id=com.thankyou.quo";

  return (
    <div className="min-h-screen bg-[#030303] text-white selection:bg-emerald-500/30 overflow-hidden font-sans relative">

      {/* Abstract Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Glow Top Left */}
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-600/10 blur-[150px] mix-blend-screen" />
        {/* Glow Bottom Right */}
        <div className="absolute bottom-[-10%] right-[-20%] w-[60%] h-[60%] rounded-full bg-indigo-600/10 blur-[150px] mix-blend-screen" />
        {/* Center line pulse */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      </div>

      {/* Navbar Minimal */}
      <nav className="relative z-20 flex items-center justify-between px-6 md:px-12 py-6 max-w-screen-2xl mx-auto backdrop-blur-sm border-b border-white/5 sticky top-0">
        <Link href="/" className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
          <ChevronRight className="w-4 h-4 rotate-180" />
          Back to Portfolio
        </Link>
        <div className="font-bold text-xl tracking-tight flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.4)]">
            <Activity className="w-4 h-4 text-black stroke-[3]" />
          </div>
          Rapsy AI
        </div>
      </nav>

      <main className="relative z-10 mx-auto w-full">

        {/* HERO SECTION */}
        <section className="relative px-6 py-20 md:py-32 flex flex-col items-center justify-center text-center max-w-5xl mx-auto overflow-hidden">
          {/* Subtle grid background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] -z-10" />

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 backdrop-blur-xl border border-emerald-500/30 bg-emerald-500/5 shadow-[0_0_30px_rgba(16,185,129,0.15)]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-sm font-semibold text-emerald-300 tracking-wide">V1.0 LIVE ON PLAY STORE</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 leading-[1.1]">
            <span className="block text-zinc-300">Your AI-Powered</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400 animate-gradient">
              Personal Trainer.
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-zinc-400 mb-12 max-w-3xl leading-relaxed mx-auto font-light">
            Turn your phone into an intelligent fitness mirror. Rapsy tracks forms, counts reps in real-time, and guides you with voice feedback. Just you, the camera, and pure performance.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 w-full justify-center items-center">
            <a
              href={GPLAY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden group px-8 py-4 rounded-full bg-white text-black font-bold flex items-center justify-center gap-3 transition-transform hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.3)] w-full sm:w-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Play className="w-5 h-5 fill-current relative z-10 group-hover:text-white transition-colors" />
              <span className="relative z-10 group-hover:text-white transition-colors">Get it on Google Play</span>
            </a>

            <a
              href="#how-it-works"
              className="px-8 py-4 rounded-full border border-zinc-700 bg-zinc-900/50 text-white font-semibold flex items-center justify-center gap-2 hover:bg-zinc-800 transition-all hover:scale-105 w-full sm:w-auto backdrop-blur-md"
            >
              See How It Works
            </a>
          </div>

          {/* Abstract Device Graphic */}
          <div className="mt-24 relative w-full max-w-4xl mx-auto h-[400px]">
            <div className="absolute left-1/2 -translate-x-1/2 w-[300px] md:w-[600px] h-full rounded-[2rem] border border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl overflow-hidden flex items-center justify-center group transform perspective-[1000px] rotate-x-[5deg] hover:rotate-x-0 transition-transform duration-700">
              {/* Virtual Scanner Line */}
              <div className="absolute top-0 w-full h-[2px] bg-emerald-400 shadow-[0_0_20px_rgba(16,185,129,1)] animate-[scan_3s_ease-in-out_infinite]" />

              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent pointer-events-none" />

              {/* Wireframe Body Mock */}
              <div className="relative z-10 w-48 h-64 border border-zinc-800 rounded-xl flex items-center justify-center">
                <Dumbbell className="w-16 h-16 text-zinc-700 group-hover:text-emerald-500 transition-colors duration-1000" />
                {/* Connection dots */}
                <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_10px_cyan]" />
                <div className="absolute bottom-1/3 right-1/4 w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_emerald] delay-150" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_10px_indigo]" />
                <svg className="absolute inset-0 w-full h-full stroke-white/10" fill="none">
                  <line x1="25%" y1="25%" x2="50%" y2="50%" stroke="url(#grad)" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse" />
                  <line x1="75%" y1="66%" x2="50%" y2="50%" stroke="url(#grad)" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse delay-75" />
                  <defs>
                    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            {/* Floating UI Elements */}
            <div className="absolute top-10 left-[0%] md:left-[15%] px-5 py-3 rounded-2xl bg-zinc-900/80 border border-zinc-700/50 backdrop-blur-md shadow-xl flex items-center gap-3 animate-float-slow">
              <div className="w-3 h-3 rounded-full bg-emerald-400" />
              <span className="font-mono text-sm">Target: Squat</span>
            </div>
            <div className="absolute bottom-20 right-[0%] md:right-[15%] px-6 py-4 rounded-3xl bg-zinc-900/80 border border-zinc-700/50 backdrop-blur-md shadow-xl flex items-center gap-4 animate-float-fast">
              <span className="text-4xl font-black text-white">12</span>
              <span className="text-zinc-400 font-medium">/ 15<br />Reps</span>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS SECTION */}
        <section id="how-it-works" className="py-24 px-6 relative border-t border-white/5 bg-zinc-950/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-emerald-400 font-semibold tracking-wider uppercase text-sm mb-3">The Process</h2>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight">How It Works</h3>
            </div>

            <div className="flex flex-col md:flex-row gap-10 md:gap-6 justify-between relative relative">
              {/* Connecting Line */}
              <div className="hidden md:block absolute top-[45px] left-10 right-10 h-0.5 bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800" />

              {/* Step 1 */}
              <div className="flex-1 relative group">
                <div className="w-24 h-24 rounded-[2rem] bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-8 mx-auto relative z-10 group-hover:-translate-y-2 transition-transform shadow-2xl">
                  <span className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-emerald-500 text-black font-bold flex items-center justify-center text-sm ring-4 ring-black">1</span>
                  <Smartphone className="w-10 h-10 text-emerald-400" />
                </div>
                <h4 className="text-xl font-bold text-center mb-3">Prop Up Device</h4>
                <p className="text-zinc-400 text-center text-sm leading-relaxed max-w-xs mx-auto">
                  Place your mobile device against a wall or water bottle so your entire body is visible to the camera.
                </p>
              </div>

              {/* Step 2 */}
              <div className="flex-1 relative group">
                <div className="w-24 h-24 rounded-[2rem] bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-8 mx-auto relative z-10 group-hover:-translate-y-2 transition-transform shadow-2xl">
                  <span className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-cyan-500 text-black font-bold flex items-center justify-center text-sm ring-4 ring-black">2</span>
                  <Target className="w-10 h-10 text-cyan-400" />
                </div>
                <h4 className="text-xl font-bold text-center mb-3">AI Detection Anchors</h4>
                <p className="text-zinc-400 text-center text-sm leading-relaxed max-w-xs mx-auto">
                  Rapsy's Machine Learning model instantly identifies key skeletal points in 3D space, regardless of background noise.
                </p>
              </div>

              {/* Step 3 */}
              <div className="flex-1 relative group">
                <div className="w-24 h-24 rounded-[2rem] bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-8 mx-auto relative z-10 group-hover:-translate-y-2 transition-transform shadow-2xl">
                  <span className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-indigo-500 text-black font-bold flex items-center justify-center text-sm ring-4 ring-black">3</span>
                  <Volume2 className="w-10 h-10 text-indigo-400" />
                </div>
                <h4 className="text-xl font-bold text-center mb-3">Start Exercising</h4>
                <p className="text-zinc-400 text-center text-sm leading-relaxed max-w-xs mx-auto">
                  As you move, Rapsy calculates angles and depth, counting perfect reps out loud to keep your eyes off the screen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* COMPREHENSIVE FEATURES - BENTO GRID */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Core Arsenal</h2>
            <p className="text-zinc-400 text-lg max-w-2xl">A suite of powerful tools designed to optimize every second of your workout experience.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[minmax(250px,auto)]">

            {/* Feature 1: Zero-Touch Form Analysis */}
            <div className="md:col-span-2 lg:col-span-2 row-span-2 group relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-zinc-900 to-black border border-emerald-900/30 p-8 hover:border-emerald-500/50 transition-all duration-500 flex flex-col justify-between">
              <div className="absolute right-[-10%] top-[-10%] w-[50%] h-[50%] bg-emerald-500/20 blur-[100px] rounded-full group-hover:bg-emerald-500/40 transition-colors" />

              <div className="relative z-10 mb-20 md:mb-0">
                <div className="w-16 h-16 rounded-2xl bg-zinc-800/80 border border-zinc-700/50 flex items-center justify-center mb-6 shadow-xl backdrop-blur-sm group-hover:bg-emerald-500 group-hover:scale-110 transition-all duration-500">
                  <Camera className="w-8 h-8 text-emerald-400 group-hover:text-black transition-colors" />
                </div>
                <h3 className="text-3xl font-bold mb-4 tracking-tight">Zero-Touch Form Analysis</h3>
                <p className="text-zinc-400 text-lg leading-relaxed max-w-sm">
                  Powered by advanced MLKit pose detection, Rapsy maps 33 body joints in real time across any exercise geometry. Perfect form. Absolute accountability.
                </p>
              </div>

              {/* Decorative Element */}
              <div className="absolute bottom-0 right-0 w-[60%] h-[50%] opactiy-50 hidden md:block border-l border-t border-white/5 bg-zinc-950/80 rounded-tl-3xl backdrop-blur-md overflow-hidden p-6 box-border transform group-hover:-translate-y-2 transition-transform">
                <div className="w-full space-y-3">
                  <div className="flex justify-between items-end border-b border-white/10 pb-2">
                    <span className="text-xs text-zinc-500 font-mono">ANGLE KNEE</span>
                    <span className="text-xl font-bold text-emerald-400">88.5°</span>
                  </div>
                  <div className="flex justify-between items-end border-b border-white/10 pb-2">
                    <span className="text-xs text-zinc-500 font-mono">STATUS</span>
                    <span className="text-sm font-bold text-white uppercase tracking-widest"><span className="text-emerald-500 mr-2 animate-pulse">●</span>PERFECT FORM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2: 72+ Exercises Supported (Home & Gym Dynamics) */}
            <div className="md:col-span-1 lg:col-span-2 group relative overflow-hidden rounded-[2rem] bg-zinc-900 border border-zinc-800/50 p-8 flex flex-col justify-between hover:border-cyan-500/30 transition-colors duration-500">
              <div className="relative z-10 flex flex-col items-start h-full">
                <div className="w-full flex justify-between items-start mb-6">
                   <div className="w-12 h-12 rounded-xl bg-cyan-950/50 border border-cyan-900/50 flex items-center justify-center text-cyan-400 group-hover:-rotate-12 transition-transform duration-500">
                     <Dumbbell className="w-6 h-6 " />
                   </div>
                   {/* Animated Toggle Graphic */}
                   <div className="flex items-center bg-black/50 border border-white/10 rounded-full p-1 overflow-hidden relative w-36 h-8">
                     <div className="absolute left-1 top-1 bottom-1 w-1/2 bg-cyan-500/20 rounded-full animate-slide-right opacity-50 blur-sm" />
                     <div className="flex-1 text-center text-[9px] uppercase tracking-wider text-cyan-400 z-10 font-bold font-mono">Bodyweight</div>
                     <div className="flex-1 text-center text-[9px] uppercase tracking-wider text-zinc-500 z-10 font-bold font-mono relative"><span className="absolute inset-0 bg-transparent" />Machine</div>
                   </div>
                </div>
                <h3 className="text-2xl font-bold mb-3">72+ Exercises Mapped</h3>
                <p className="text-zinc-400 text-sm md:text-base">
                  Whether you're doing heavy barbell squats or living room calisthenics, Rapsy perfectly understands the distinct physics. Log your weight plates, hit start, and it knows exactly what to look for.
                </p>
              </div>
            </div>

            {/* Feature 3: Hyper-Accurate KCAL Tracking */}
            <div className="lg:col-span-2 row-span-1 group relative overflow-hidden rounded-[2rem] bg-zinc-900 border border-zinc-800/50 p-8 flex flex-col md:flex-row gap-6 hover:border-rose-500/30 transition-colors duration-500">
               <div className="flex-[0.6] relative z-10">
                 <div className="w-12 h-12 rounded-xl bg-rose-950/50 border border-rose-900/50 flex items-center justify-center mb-4 text-rose-400 group-hover:scale-110 transition-transform">
                   <Activity className="w-6 h-6" />
                 </div>
                 <h3 className="text-xl font-bold mb-2">MET-Bound Engine</h3>
                 <p className="text-zinc-400 text-sm">
                   Precision calorie tracking that mathematically bounds your active rep duration using hyper-accurate Metabolic Equivalent (MET) mapping. Absolute honesty in your results.
                 </p>
               </div>
               <div className="flex-[0.4] bg-black/40 rounded-xl border border-white/5 p-4 relative overflow-hidden flex flex-col justify-center items-center">
                 <div className="text-[10px] text-zinc-500 font-mono mb-2 w-full flex justify-between"><span>IDLE</span> <span>ACTIVE REP</span></div>
                 <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden flex">
                    <div className="h-full bg-zinc-700 w-1/4" />
                    <div className="h-full bg-gradient-to-r from-rose-500 to-orange-500 w-1/2 animate-pulse" />
                    <div className="h-full bg-zinc-700 w-1/4" />
                 </div>
                 <div className="mt-4 text-2xl font-black text-rose-400 animate-pulse-glow">142 KCAL</div>
               </div>
            </div>

            {/* Feature 4: Form Guidance & Instructional Hold */}
            <div className="md:col-span-1 lg:col-span-1 group relative overflow-hidden rounded-[2rem] bg-zinc-900 border border-zinc-800/50 p-8 hover:border-indigo-500/30 transition-colors duration-500 flex flex-col">
              <div className="relative z-10 w-full mb-4">
                 <div className="w-full h-24 bg-black/40 border border-indigo-500/20 rounded-xl flex items-center justify-center relative overflow-hidden group-hover:border-indigo-500/50 transition-colors">
                    <div className="absolute inset-0 bg-indigo-500/5 animate-pulse" />
                    {/* Abstract Stick Figure Geometry */}
                    <svg width="40" height="60" viewBox="0 0 40 60" className="stroke-indigo-400 stroke-2 fill-none overflow-visible">
                       <circle cx="20" cy="10" r="6" className="fill-indigo-400/20" />
                       <line x1="20" y1="16" x2="20" y2="35" className="target-line" />
                       <line x1="20" y1="20" x2="5" y2="30" className="target-line" />
                       <line x1="20" y1="20" x2="35" y2="30" className="target-line" />
                       <line x1="20" y1="35" x2="10" y2="55" className="target-line" />
                       <line x1="20" y1="35" x2="30" y2="55" className="target-line" />
                    </svg>
                 </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Pulsing Guidance</h3>
              <p className="text-zinc-400 text-sm">
                Understand the movement before you start. The fluid stick-figure instructional hold guarantees you nail the physics.
              </p>
            </div>

            {/* Feature 5: Real-Time Voice */}
            <div className="lg:col-span-1 group relative overflow-hidden rounded-[2rem] bg-zinc-900 border border-zinc-800/50 p-8 hover:border-purple-500/30 transition-colors duration-500 flex flex-col h-full">
              <div className="relative z-10 w-12 h-12 rounded-xl bg-purple-950/50 border border-purple-900/50 flex items-center justify-center mb-6 text-purple-400 group-hover:scale-125 transition-transform">
                <Volume2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Real-Time Voice</h3>
              <p className="text-zinc-400 text-sm flex-1">
                Get auditory rep counts and form corrections. Keeping you in the zone, entirely hands-free.
              </p>
            </div>

          </div>
        </section>

        {/* SECURITY & PRO FEATURES BANDS */}
        <section className="py-20 border-y border-white/5 bg-zinc-950 px-6">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">

            {/* Privacy block */}
            <div className="flex-1 flex gap-6 items-start bg-zinc-900/50 p-8 rounded-3xl border border-zinc-800/50 hover:bg-zinc-900 transition-colors w-full">
              <div className="bg-emerald-950 p-4 rounded-full border border-emerald-900">
                <Shield className="w-8 h-8 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">100% On-Device AI</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                  Your camera feed never leaves your device. Rapsy runs its complex machine learning models directly on the edge, ensuring total data privacy, offline capability, and zero latency.
                </p>
                <div className="flex items-center gap-2 text-xs text-emerald-500 font-mono bg-emerald-950/30 inline-flex px-3 py-1 rounded">
                  <Lock className="w-3 h-3" /> NO CLOUD UPLOADS
                </div>
              </div>
            </div>

            {/* Free vs Pro block */}
            <div className="flex-1 flex gap-6 items-start bg-zinc-900/50 p-8 rounded-3xl border border-zinc-800/50 hover:bg-zinc-900 transition-colors w-full relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-indigo-500/10 blur-3xl rounded-full" />
              <div className="bg-indigo-950 p-4 rounded-full border border-indigo-900 relative z-10">
                <CheckCircle2 className="w-8 h-8 text-indigo-400" />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2 flex items-center gap-3">
                  Basic App <span className="text-xs px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700">Free</span>
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                  Access core exercises, standard tracking, and real-time voice guidance completely free. Unlock Pro via subscriptions for advanced multi-movement plans and detailed historical analytics.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Closing Call to action CTA */}
        <section className="py-32 px-6 text-center relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 blur-[120px] rounded-[100%]" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto border border-zinc-800 bg-zinc-900/60 p-12 md:p-20 rounded-[3rem] backdrop-blur-xl shadow-2xl">
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Ready to transcend limits?</h2>
            <p className="text-zinc-400 mx-auto mb-12 text-lg md:text-xl font-light">
              Download Rapsy on Android today and completely redefine how you build strength, track progress, and conquer your goals.
            </p>

            <a
              href={GPLAY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-white text-black font-bold text-lg hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] transition-all group"
            >
              <Download className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
              Download Rapsy AI
            </a>
          </div>
        </section>

      </main>

      <footer className="border-t border-zinc-900 relative z-20 bg-black py-10 px-8 flex flex-col md:flex-row justify-between items-center text-sm">
        <p className="text-zinc-600 mb-4 md:mb-0">© {new Date().getFullYear()} Adarsh Verma. Built for the modern fitness era.</p>
        <div className="flex gap-6 text-zinc-500">
          <Link href="/rapsy-terms" className="hover:text-emerald-400 transition-colors">Terms of Service</Link>
          <Link href="/rapsy-data-deletion" className="hover:text-emerald-400 transition-colors">Privacy Policy</Link>
        </div>
      </footer>

      {/* Global Styles (Keyframes via Tailwind Arbitrary Values usually require index.css or Tailwind config, creating inline here to ensure it works effortlessly) */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes slide-right {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(100%); }
        }
        @keyframes pulse-glow {
          0%, 100% { text-shadow: 0 0 10px rgba(244,63,94,0.3); opacity: 0.9; }
          50% { text-shadow: 0 0 20px rgba(244,63,94,0.8); opacity: 1; }
        }
        @keyframes draw-line {
          0% { stroke-dasharray: 100; stroke-dashoffset: 100; }
          50% { stroke-dasharray: 100; stroke-dashoffset: 0; }
          100% { stroke-dasharray: 100; stroke-dashoffset: 100; }
        }
        .animate-float-slow { animation: float-slow 4s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 3s ease-in-out infinite; }
        .animate-slide-right { animation: slide-right 4s cubic-bezier(0.4, 0, 0.2, 1) infinite; }
        .animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
        .target-line { animation: draw-line 3s ease-in-out infinite; }
      `}} />

    </div>
  );
}
