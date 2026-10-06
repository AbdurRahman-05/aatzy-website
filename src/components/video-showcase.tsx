"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, Monitor } from "lucide-react";

export default function VideoShowcase() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-[#0b1b22] to-[#032b35] overflow-hidden text-white px-6">
      {/* Decorative glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[30%] right-[-10%] w-[500px] h-[500px] rounded-full bg-teal-500/10 blur-[130px] animate-pulse" />
        <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-cyan-600/10 blur-[130px] animate-pulse" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10 space-y-12">
        
        {/* Header Text */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            See Aatzy in Action
          </h2>
          <p className="text-slate-400 font-light text-sm sm:text-base leading-relaxed">
            Take a look at how we build and deploy enterprise-level software architectures, fluid modern user interfaces, and custom AI systems designed for scale.
          </p>
        </div>

        {/* Video Player in Safari Browser Frame Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Neon border glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-[2rem] opacity-30 blur-xl -z-10" />

          {/* Browser frame wrapper */}
          <div className="border border-white/10 rounded-[2rem] overflow-hidden bg-slate-900/90 shadow-2xl backdrop-blur-md">
            
            {/* Safari Top Bar */}
            <div className="flex items-center justify-between px-6 py-4 bg-slate-950/80 border-b border-white/5">
              {/* Traffic light buttons */}
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded-full bg-rose-500/80" />
                <span className="w-3.5 h-3.5 rounded-full bg-amber-500/80" />
                <span className="w-3.5 h-3.5 rounded-full bg-emerald-500/80" />
              </div>
              
              {/* Safari URL bar */}
              <div className="hidden sm:flex items-center justify-center gap-1.5 px-4 py-1.5 rounded-lg bg-white/5 border border-white/5 text-[10px] text-slate-400 font-mono w-64 select-none">
                <Monitor className="w-3 h-3 text-slate-500" />
                aatzy.com/demo
              </div>
              
              {/* Mute toggle button at top right */}
              <button
                onClick={toggleMute}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 transition-colors cursor-pointer text-teal-300 hover:text-white"
                title={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
            </div>

            {/* Video container */}
            <div className="relative aspect-video group">
              <video
                ref={videoRef}
                src="/videos/hero-showcase.mp4"
                className="w-full h-full object-cover"
                autoPlay
                muted={isMuted}
                loop
                playsInline
              />

              {/* Click overlay to play/pause */}
              <div 
                onClick={togglePlay}
                className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer"
              >
                <div className="w-16 h-16 rounded-full bg-teal-400/20 hover:bg-teal-400/40 text-teal-300 hover:text-white border border-teal-300/30 flex items-center justify-center transition-all duration-300 transform scale-90 group-hover:scale-100 shadow-lg backdrop-blur-sm">
                  {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current ml-1" />}
                </div>
              </div>

              {/* Video control bottom bar */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-950/80 border border-white/5 backdrop-blur-md opacity-80 hover:opacity-100 transition-opacity">
                <button
                  onClick={togglePlay}
                  className="flex items-center gap-2 text-xs font-semibold text-teal-300 hover:text-white transition-colors cursor-pointer"
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  {isPlaying ? "Pause Video" : "Play Video"}
                </button>

                <div className="flex items-center gap-3">
                  <span className="text-[10px] text-slate-400 select-none">
                    {isMuted ? "Audio Muted" : "Audio Playing"}
                  </span>
                  <button
                    onClick={toggleMute}
                    className="p-1 rounded-md bg-white/5 hover:bg-white/10 text-teal-300 hover:text-white transition-colors cursor-pointer"
                  >
                    {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
