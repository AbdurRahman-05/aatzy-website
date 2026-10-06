"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 400);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 20) + 10;
        return Math.min(next, 100);
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] bg-[#002e3b] flex flex-col justify-between p-10 select-none pointer-events-none text-white"
        >
          {/* Header readout */}
          <div className="flex justify-between items-center text-[10px] font-mono tracking-widest text-teal-300/60 uppercase">
            <span>AATZY SYSTEM ENGINE</span>
            <span>STATUS: INJECTING CLOUD NODES</span>
          </div>

          {/* Main Logo Reveal */}
          <div className="flex flex-col items-center space-y-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="h-16 w-16 rounded-2xl bg-[#064354] flex items-center justify-center shadow-2xl shadow-teal-400/10 border border-white/10 overflow-hidden"
            >
              <img 
                src="/image.png" 
                alt="Aatzy Icon" 
                className="h-full w-full object-cover"
              />
            </motion.div>
            
            <div className="space-y-2 text-center">
              <motion.h1 
                initial={{ opacity: 0, letterSpacing: "0.5em" }}
                animate={{ opacity: 1, letterSpacing: "0.25em" }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="text-2xl font-black text-white uppercase leading-none"
              >
                AATZY
              </motion.h1>
              <p className="text-[10px] text-teal-300 font-bold uppercase tracking-widest">
                AI, DATA ANALYTICS & CLOUD
              </p>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="w-full max-w-sm mx-auto space-y-4">
            <div className="flex justify-between text-[11px] font-mono tracking-wider text-teal-200">
              <span>LOADING WORKSPACE</span>
              <span className="font-bold">{progress}%</span>
            </div>
            
            <div className="w-full h-[2px] bg-white/5 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-teal-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
