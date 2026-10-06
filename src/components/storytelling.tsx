"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Compass, Users, Lock, Globe, ShieldCheck, Sparkles } from "lucide-react";

interface StoryStep {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  visualElement: React.ReactNode;
}

export default function Storytelling() {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  const STEPS: StoryStep[] = [
    {
      id: 0,
      title: "Discover Art",
      subtitle: "EXPRESSIVE VISUAL SELECTION",
      description: "Browse high-fidelity 3D meshes, particle clouds, and generative canvases created by global visionaries. Filter by emotional aesthetics and aesthetic styles.",
      icon: <Compass className="h-5 w-5" />,
      color: "from-amber-400 to-orange-500",
      visualElement: (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="absolute w-[220px] h-[220px] rounded-full border border-amber-500/20 bg-amber-500/5 animate-pulse" />
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ ease: "linear", duration: 25, repeat: Infinity }}
            className="w-[180px] h-[180px] rounded-full border-2 border-dashed border-amber-400/40 flex items-center justify-center"
          >
            <Compass className="h-10 w-10 text-amber-400" />
          </motion.div>
          <div className="absolute text-center mt-36 text-[10px] font-mono text-zinc-500">AESTHETIC DATABASE SCANNING</div>
        </div>
      ),
    },
    {
      id: 1,
      title: "Connect with Artists",
      subtitle: "CREATOR DIALOGUE",
      description: "Access direct creator diaries, watch project progress previews, and buy commissioned bespoke digital canvases. Bridge the gap between emotion and artist.",
      icon: <Users className="h-5 w-5" />,
      color: "from-indigo-400 to-purple-600",
      visualElement: (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="absolute top-10 left-10 h-12 w-12 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shadow-xl">
            <Users className="h-5 w-5" />
          </div>
          <div className="absolute bottom-10 right-10 h-12 w-12 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 shadow-xl">
            <Sparkles className="h-5 w-5" />
          </div>
          {/* Connecting line */}
          <svg className="w-full h-full absolute inset-0 pointer-events-none">
            <motion.line
              x1="20%" y1="20%" x2="80%" y2="80%"
              stroke="rgba(129, 140, 248, 0.4)"
              strokeWidth="2"
              strokeDasharray="8 4"
              animate={{ strokeDashoffset: [0, -30] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            />
          </svg>
          <div className="h-16 w-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white font-mono text-[11px] font-bold">
            CHAT
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: "Purchase Securely",
      subtitle: "CRYPTOGRAPHIC AGREEMENTS",
      description: "Every purchase is secured via high-grade cryptographic smart contracts. Royalties are encoded directly in metadata, securing artist passive revenues.",
      icon: <Lock className="h-5 w-5" />,
      color: "from-purple-500 to-pink-500",
      visualElement: (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="absolute w-[200px] h-[140px] bg-zinc-900/60 border border-white/10 rounded-2xl p-4 flex flex-col justify-between">
            <div className="flex justify-between items-center">
              <Lock className="h-5 w-5 text-emerald-400" />
              <span className="text-[9px] font-mono text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded">VERIFIED</span>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-mono text-zinc-400">hash: 0x9f1a...c28d</p>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                  className="h-full bg-gradient-to-r from-indigo-500 to-emerald-400" 
                />
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: "Global Delivery",
      subtitle: "WHITE-GLOVE LOGISTICS",
      description: "Optional high-fidelity physical canvas displays and dynamic digital frames are shipped globally. Every frame includes premium protective glass.",
      icon: <Globe className="h-5 w-5" />,
      color: "from-blue-400 to-cyan-500",
      visualElement: (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="absolute w-[180px] h-[180px] rounded-full border border-cyan-500/15 animate-ping opacity-30" />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ ease: "linear", duration: 30, repeat: Infinity }}
            className="w-[150px] h-[150px] rounded-full border border-cyan-500/30 flex items-center justify-center text-cyan-400"
          >
            <Globe className="h-8 w-8" />
          </motion.div>
          <div className="absolute text-[8px] font-mono text-cyan-400/70 border border-cyan-400/20 bg-cyan-400/5 px-2.5 py-0.5 rounded-full">
            USA • UK • AUS • IND
          </div>
        </div>
      ),
    },
    {
      id: 4,
      title: "Verified Authenticity",
      subtitle: "METADATA AUDITED PROOFS",
      description: "We execute strict dual-audits of smart contract parameters. Secure hashing guarantees that files linked to tokens are unique and permanently verified.",
      icon: <ShieldCheck className="h-5 w-5" />,
      color: "from-emerald-400 to-teal-500",
      visualElement: (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="absolute w-[240px] h-[160px] bg-zinc-950/80 border border-emerald-500/20 rounded-2xl p-5 flex flex-col justify-between shadow-2xl">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-white uppercase tracking-wider">AATZY Proof System</p>
                <p className="text-[8px] text-zinc-500 font-mono">Status: Secure Ledger</p>
              </div>
            </div>
            <div className="space-y-1.5 font-mono text-[9px] text-zinc-400 bg-white/5 p-2 rounded border border-white/5">
              <p>✓ Hash Validation: Match</p>
              <p>✓ Signature Crypt: verified</p>
              <p>✓ Royalty Config: 10% lock</p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -30% 0px", // Triggers when steps are near the middle of the viewport
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = stepRefs.current.findIndex((ref) => ref === entry.target);
          if (index !== -1) {
            setActiveStep(index);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="about" className="relative w-full bg-[#020202] text-white border-t border-white/[0.04]">
      <div ref={containerRef} className="max-w-7xl mx-auto px-6 md:px-8 py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 relative">
        
        {/* Left Column: STICKY visual panel */}
        <div className="lg:col-span-5 h-[300px] lg:h-[500px] lg:sticky lg:top-28 flex items-center justify-center z-10 order-first lg:order-last">
          <div className="relative w-full max-w-[400px] h-full bg-[#0c0c0c]/80 border border-white/[0.05] rounded-3xl overflow-hidden flex items-center justify-center p-8 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
            {/* Dynamic background aurora gradient changing based on active step */}
            <div className={`absolute -inset-10 opacity-30 blur-[80px] bg-gradient-to-tr ${STEPS[activeStep].color} transition-all duration-750`} />
            
            {/* Active visual container */}
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full"
                >
                  {STEPS[activeStep].visualElement}
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Floating indicator */}
            <div className="absolute bottom-6 right-6 text-[9px] font-mono text-zinc-500 uppercase tracking-widest font-semibold z-20">
              STEP {activeStep + 1} OF 5
            </div>
          </div>
        </div>

        {/* Right Column: SCROLLABLE steps content */}
        <div className="lg:col-span-7 space-y-24 py-12">
          
          {/* Header */}
          <div className="space-y-4 max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 px-4 py-1.5 text-xs font-semibold text-cyan-400">
              <Sparkles className="h-3.5 w-3.5" />
              Immersion Mechanics
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              AATZY Architecture
            </h2>
            <p className="text-zinc-400 font-light text-sm">
              We have designed the premier digital art experience platform. Read through the five step storytelling experience of digital asset selection, cryptographic protection, and shipping logistics.
            </p>
          </div>

          {/* Timeline list */}
          <div className="space-y-20 relative pl-4 border-l border-white/[0.04]">
            {STEPS.map((step, index) => (
              <div
                key={step.id}
                ref={(el) => { stepRefs.current[index] = el; }}
                className={`space-y-4 transition-all duration-500 relative ${
                  activeStep === index ? "opacity-100" : "opacity-35"
                }`}
              >
                {/* Active node dot indicator */}
                <div 
                  className={`absolute -left-[21px] top-1 h-2.5 w-2.5 rounded-full border transition-all duration-500 ${
                    activeStep === index 
                      ? "bg-amber-400 border-amber-400 scale-125 shadow-[0_0_10px_rgba(251,191,36,0.5)]" 
                      : "bg-[#020202] border-white/20"
                  }`} 
                />

                <span className="text-[10px] text-zinc-500 font-black tracking-widest uppercase block">
                  {step.subtitle}
                </span>
                
                <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2.5">
                  <span className={`p-1.5 rounded-lg bg-white/5 border border-white/5 text-zinc-400 ${
                    activeStep === index ? "text-amber-400 border-amber-400/20" : ""
                  }`}>
                    {step.icon}
                  </span>
                  {step.title}
                </h3>
                
                <p className="text-zinc-400 font-light text-xs sm:text-sm leading-relaxed max-w-lg">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
