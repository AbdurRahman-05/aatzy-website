"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowDown, ChevronRight } from "lucide-react";

export default function Hero() {
  const quickLinks = [
    "Software Development",
    "Mobile App Dev",
    "Web Dev",
    "E-commerce",
    "AI / ML Solutions",
    "HubSpot CRM",
    "Zoho Integration",
    "Salesforce Development"
  ];

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center bg-gradient-to-br from-[#064354] via-[#002e3b] to-[#0b1b22] text-white pt-36 pb-24 overflow-hidden px-6">
      
      {/* Visual Background Assets */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Futuristic Background Image */}
        <motion.div 
          className="absolute inset-0 w-full h-full"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <img 
            src="/hero-bg.png" 
            alt="Futuristic Network Background" 
            className="w-full h-full object-cover mix-blend-screen filter brightness-125"
          />
        </motion.div>

        {/* Subtle grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)] opacity-30" />
        
        {/* Glowing floating blobs */}
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-teal-500/15 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-cyan-600/15 blur-[150px] animate-pulse" />
        
        {/* Vignette gradients to blend edges and ensure high text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#002e3b]/30 to-[#0b1b22] opacity-90" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0b1b22] to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10 space-y-12">
        {/* Sub-badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-400/20 bg-teal-400/5 text-teal-300 text-xs font-bold uppercase tracking-widest backdrop-blur-md"
        >
          <Sparkles className="w-3.5 h-3.5 text-teal-400" />
          Aatzy Technologies
        </motion.div>

        {/* Hero Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="space-y-6"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1] max-w-5xl mx-auto">
            Empowering Businesses With{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 via-cyan-100 to-white">
              AI, Data Analytics & Cloud
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-slate-300 text-sm sm:text-base md:text-lg font-light leading-relaxed">
            Crafting transformative digital solutions. Aatzy delivers enterprise-grade software development, AI innovation, and secure cloud consulting to scale operations globally.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center"
        >
          <Link
            href="/contact"
            prefetch={false}
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-brand-teal hover:bg-slate-100 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-full transition-all duration-300 shadow-[0_10px_25px_rgba(0,0,0,0.25)] hover:shadow-[0_15px_30px_rgba(255,255,255,0.1)] group cursor-pointer"
          >
            Get Free Consultation
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Quick Link Pills Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.45 }}
          className="pt-8"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-teal-300/60 font-bold mb-4">
            Explore Core Offerings
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
            {quickLinks.map((link, idx) => (
              <Link
                key={idx}
                href="/contact"
                prefetch={false}
                className="px-5 py-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-white hover:text-brand-teal text-slate-200 hover:border-white text-xs font-semibold tracking-wide transition-all duration-300 hover:shadow-lg backdrop-blur-sm cursor-pointer"
              >
                {link}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bounce scroll down arrow */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-teal-300/40 text-[10px] uppercase font-bold tracking-widest select-none animate-bounce">
        <span>Scroll to Explore</span>
        <ArrowDown className="w-4 h-4 text-teal-300/50" />
      </div>
    </section>
  );
}
