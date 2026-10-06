import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ContactForm from "@/components/contact-form";
import ThreeBackground from "@/components/ui/three-background";
import { Sparkles, MessageSquare, ShieldCheck, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-white text-slate-800 font-sans overflow-x-hidden selection:bg-teal-400 selection:text-black">
      {/* WebGL background particles */}
      <ThreeBackground />

      {/* Global Navbar */}
      <Navbar />

      <main className="pt-32 pb-12 relative z-10">
        <div className="max-w-6xl mx-auto px-6 mb-16">
          {/* Header segment */}
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-teal-500/10 bg-slate-50 text-brand-teal text-xs font-bold uppercase tracking-widest shadow-sm">
              <Sparkles className="w-3.5 h-3.5" /> Direct Channel
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 leading-tight tracking-tight">
              Get in Touch
            </h1>
            <p className="text-slate-500 font-light text-base md:text-lg leading-relaxed">
              Have a project in mind, need custom integrations, or want to discuss AI workloads? Reach out to our engineering team directly.
            </p>
          </div>

          {/* Quick trust metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
            {[
              { icon: <Clock className="w-5 h-5 text-brand-teal" />, title: "Under 24h Response", desc: "Our solutions architects analyze incoming requests on a daily basis." },
              { icon: <MessageSquare className="w-5 h-5 text-brand-teal" />, title: "Direct Architect Call", desc: "No sales loops. Speak directly with system engineers." },
              { icon: <ShieldCheck className="w-5 h-5 text-brand-teal" />, title: "Strict NDA Ready", desc: "Your idea and codebase specifications are fully safe with us." }
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-50/50 border border-slate-100 rounded-3xl p-6 flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className="p-2.5 bg-white rounded-xl shadow-sm shrink-0">{item.icon}</div>
                <div className="space-y-1">
                  <h4 className="font-bold text-xs text-slate-800">{item.title}</h4>
                  <p className="text-[11px] text-slate-400 font-light leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Embedded Interactive Form */}
        <ContactForm />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
