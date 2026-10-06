"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, MessageSquare, Play, X, User } from "lucide-react";

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
}

const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 1,
    quote: "Aatzy completed our Yii migration ahead of schedule. The codebase is incredibly modular and our page speeds increased threefold.",
    author: "Marc Henderson",
    role: "Director of Technology",
    company: "Global News Media Group",
    rating: 5,
  },
  {
    id: 2,
    quote: "Our spatial IoT analytics dashboard required sub-second database write operations. Aatzy designed a serverless pipeline that handles our telemetry seamlessly.",
    author: "Dr. Elena Rostova",
    role: "Chief Research Officer",
    company: "StructSight Analytics",
    rating: 5,
  },
  {
    id: 3,
    quote: "During ticket drops, we previously had database lockouts. Aatzy optimized our Redis queue concurrency to hold 120,000 requests per second.",
    author: "Sanjay Mehta",
    role: "VP of Engineering",
    company: "GonnaHappen Ticketing",
    rating: 5,
  }
];

export default function Testimonials() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="bg-slate-50 py-24 px-6 relative border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-teal">
            CLIENT REVIEWS
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Client Success & Feedback
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto font-light text-sm">
            Hear from engineering heads, tech leads, and directors who scaled their platforms with our engineering teams.
          </p>
        </div>

        {/* Testimonials Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Text reviews grid (Left) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {TESTIMONIALS_DATA.map((t) => (
              <div
                key={t.id}
                className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 text-amber-500 fill-amber-500" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed italic mb-4">
                    "{t.quote}"
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-3 border-t border-slate-50 mt-2">
                  <div className="p-2 bg-slate-100 rounded-full text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">{t.author}</h4>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{t.role} • {t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Video testimonial card mockup (Right) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#064354] to-[#002e3b] rounded-[2.5rem] p-8 text-white relative overflow-hidden flex flex-col justify-between min-h-[350px] shadow-xl border border-white/5 group">
            
            {/* Background pattern */}
            <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:2rem_2rem]" />
            <div className="absolute top-[30%] left-[20%] w-[300px] h-[300px] rounded-full bg-teal-400/10 blur-[80px]" />
            
            <div className="relative z-10 space-y-4">
              <span className="text-[10px] font-bold text-teal-300 uppercase tracking-[0.2em] block">
                VIDEO CASE STUDY
              </span>
              <h3 className="text-lg sm:text-xl font-extrabold tracking-wide leading-snug">
                Accelerating Cloud Infrastructure Deployment
              </h3>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                Watch a short presentation on how we automated deployment operations for StructSight's sensor dashboards.
              </p>
            </div>

            {/* Video Play Button Mockup */}
            <div className="relative z-10 my-6 flex justify-center">
              <button
                onClick={() => setVideoOpen(true)}
                className="w-16 h-16 rounded-full bg-white text-brand-teal flex items-center justify-center hover:scale-110 shadow-2xl transition-all duration-300 cursor-pointer group-hover:bg-teal-50"
              >
                <Play className="w-6 h-6 fill-brand-teal translate-x-0.5" />
              </button>
            </div>

            <div className="relative z-10 pt-4 border-t border-white/10 text-center">
              <p className="text-[10px] uppercase font-bold text-teal-300 tracking-wider">
                Length: 2 mins • Watch Now
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* Video Modal Player Mockup */}
      <AnimatePresence>
        {videoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-900/90 backdrop-blur-md flex items-center justify-center p-6"
          >
            <div className="absolute top-6 right-6 z-50">
              <button
                onClick={() => setVideoOpen(false)}
                className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors cursor-pointer border border-white/20"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="w-full max-w-4xl bg-slate-950 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden aspect-video relative flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-slate-900 flex flex-col justify-center items-center text-center p-8">
                <div className="p-4 bg-teal-500/10 rounded-full border border-teal-500/20 mb-4 animate-pulse">
                  <Play className="w-8 h-8 text-teal-400 fill-teal-400" />
                </div>
                <h4 className="text-white font-extrabold text-base mb-2">Simulated Case Study Presentation</h4>
                <p className="text-xs text-slate-400 max-w-md font-light leading-relaxed">
                  [Simulated Player] On a production server, this will stream the client testimonial mp4, showing their custom software architectural results.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
