import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Layers } from "lucide-react";

export default function PromoBanner() {
  return (
    <section className="bg-white py-16 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#064354] via-[#043340] to-[#002e3b] text-white p-8 sm:p-12 md:p-16 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 border border-teal-400/10">
          
          {/* Background Image & shapes */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <img 
              src="/images/insights_banner_bg.png" 
              alt="Insights Network Background" 
              className="w-full h-full object-cover opacity-25 mix-blend-screen filter brightness-110"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#064354]/40 via-transparent to-[#002e3b]/70" />
            <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-teal-400/15 blur-[100px] animate-pulse" />
            <div className="absolute bottom-[-50%] left-[-10%] w-[350px] h-[350px] rounded-full bg-cyan-600/15 blur-[80px] animate-pulse" />
          </div>

          {/* Left Text Block */}
          <div className="space-y-6 max-w-2xl relative z-10 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-teal-300/20 bg-teal-300/5 text-teal-300 text-[10px] font-bold uppercase tracking-widest">
              <BookOpen className="w-3.5 h-3.5" /> Aatzy Insights
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
              Unveiling the Digital Landscape: Custom Tech Insights & Trends
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
              Unlock strategic tech papers, digital case-studies, and architecture playbooks written by our principal developers to accelerate your systems roadmap.
            </p>
          </div>

          {/* Right Action Button */}
          <div className="relative z-10 shrink-0">
            <Link
              href="/contact"
              prefetch={false}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-brand-teal hover:bg-slate-50 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-300 shadow-xl shadow-brand-teal/20 group cursor-pointer"
            >
              Explore Insights
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
