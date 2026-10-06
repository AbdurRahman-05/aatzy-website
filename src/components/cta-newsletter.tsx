"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Sparkles } from "lucide-react";

export default function CtaNewsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = () => {
    setLoading(true);
    setErrorMessage("");
  };

  return (
    <section id="contact" className="relative w-full py-24 bg-[#020202] overflow-hidden border-t border-white/[0.04]">
      {/* Dynamic particles background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-amber-500/10 via-indigo-500/10 to-purple-500/10 rounded-full blur-[140px] animate-pulse" />
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Glow-border Container card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-[#0c0c0c]/85 border border-white/[0.06] hover:border-amber-400/20 rounded-[3rem] p-8 md:p-12 text-center space-y-8 shadow-[0_30px_60px_rgba(0,0,0,0.8)] overflow-hidden group"
        >
          {/* Internal neon line effects */}
          <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-50" />
          <div className="absolute bottom-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-indigo-400 to-transparent opacity-50" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/5 px-4 py-1.5 text-xs font-semibold text-amber-400">
            <Sparkles className="h-3.5 w-3.5" />
            AATZY Inner Circle
          </div>

          {/* Typography */}
          <div className="space-y-4 max-w-xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-none">
              Join the Future of <br />
              <span className="bg-gradient-to-r from-amber-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                Artistic Expression
              </span>
            </h2>
            <p className="text-zinc-400 font-light text-xs sm:text-sm leading-relaxed">
              Minting schedules, invite-only collector drops, and exclusive interviews with top digital visionaries. Zero spam. Complete cryptographic confidentiality.
            </p>
          </div>

          {/* Interactive Form */}
          <div className="max-w-md mx-auto relative pt-4">
            {submitted ? (
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex flex-col items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider bg-emerald-500/5 border border-emerald-500/20 py-4 px-6 rounded-2xl"
              >
                <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                Welcome to AATZY Inner Circle
              </motion.div>
            ) : (
              <form 
                action="https://formsubmit.co/consult@aatzy.com"
                method="POST"
                target="newsletter_iframe"
                onSubmit={handleSubmit} 
                className="relative flex flex-col gap-2"
              >
                <input type="hidden" name="_subject" value={`New Newsletter Subscription - ${email}`} />
                
                <div className="relative flex items-center w-full">
                  <input
                    type="email"
                    name="email"
                    required
                    disabled={loading}
                    placeholder="Enter your cryptographic email address..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#111] border border-white/10 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 rounded-full py-4 pl-5 pr-14 text-xs text-white placeholder:text-zinc-600 outline-none transition-all disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="absolute right-2 p-2.5 bg-white text-black hover:bg-zinc-200 rounded-full transition-colors cursor-pointer disabled:opacity-50 flex items-center justify-center"
                  >
                    {loading ? (
                      <span className="w-3.5 h-3.5 border-2 border-black border-t-transparent rounded-full animate-spin block"></span>
                    ) : (
                      <Send className="h-3.5 w-3.5" />
                    )}
                  </button>
                </div>
                {errorMessage && (
                  <div className="text-rose-500 text-[10px] font-semibold mt-1">
                    {errorMessage}
                  </div>
                )}
              </form>
            )}
            <iframe
              name="newsletter_iframe"
              style={{ display: "none" }}
              onLoad={() => {
                if (loading) {
                  setLoading(false);
                  setSubmitted(true);
                }
              }}
            />
          </div>
          
        </motion.div>
      </div>
    </section>
  );
}
