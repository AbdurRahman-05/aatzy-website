"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, BarChart, Settings, CheckCircle2 } from "lucide-react";

export default function AiSolutions() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "AI Powered Automation",
      subtitle: "Streamline operations with smart workflows",
      icon: <Cpu className="w-5 h-5" />,
      image: "/images/ai/ai_automation.png",
      content: {
        heading: "Automate complex procedures with self-improving AI agents",
        text: "Scale operations by integrating AI systems that automate ticketing, filter data inputs, route customer queries, and continuously learn from human feedback.",
        bullets: [
          "90% faster query processing times",
          "Automated OCR document processing",
          "Custom LLM agents for customer support",
          "Workflow process optimization"
        ]
      }
    },
    {
      title: "Decision Intelligence",
      subtitle: "Make data-driven tactical choices",
      icon: <BarChart className="w-5 h-5" />,
      image: "/images/ai/ai_decision.png",
      content: {
        heading: "Transform unstructured raw data into concrete strategy",
        text: "Harness predictive analytics to detect market shifts, forecast supply chain disruptions, optimize inventories, and detect customer churn behavior before it happens.",
        bullets: [
          "Predictive market shift modeling",
          "Real-time demand analytics engines",
          "Inventory safety-stock modeling",
          "Multi-dimensional anomaly detection"
        ]
      }
    },
    {
      title: "Strategy & Development",
      subtitle: "Set up security, governance & models",
      icon: <Settings className="w-5 h-5" />,
      image: "/images/ai/ai_strategy.png",
      content: {
        heading: "Enterprise readiness, LLM fine-tuning, and security compliance",
        text: "Ensure secure model deployment. We design data pipelines, curate custom proprietary training sets, build guardrails for compliance (GDPR/HIPAA), and set up hardware.",
        bullets: [
          "Proprietary dataset alignment",
          "Strict data privacy guardrails",
          "LLM optimization (RAG infrastructure)",
          "HIPAA & GDPR compliance audit"
        ]
      }
    }
  ];

  return (
    <section className="bg-slate-950 text-white py-24 px-6 relative overflow-hidden border-t border-slate-900">
      
      {/* Background shapes & grid lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-35" />
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-teal-500/5 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-violet-500/5 blur-[120px] animate-pulse" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-teal-400">
            AI INNOVATION
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Creating Future-Ready AI Solutions
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto font-light text-sm">
            Leverage state-of-the-art machine learning models, custom automation workflows, and decision intelligence systems.
          </p>
        </div>

        {/* Dynamic Panel Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Tab selectors (Left) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {tabs.map((tab, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`p-6 rounded-3xl border text-left transition-all duration-300 cursor-pointer flex gap-4 items-start ${
                  activeTab === idx
                    ? "bg-gradient-to-r from-[#064354] to-[#0a5e75] text-white border-teal-500 shadow-[0_0_30px_rgba(20,184,166,0.15)] scale-[1.02]"
                    : "bg-white/[0.02] border-white/5 hover:bg-white/[0.05] text-slate-300 hover:text-white"
                }`}
              >
                <div className={`p-3 rounded-2xl flex-shrink-0 transition-colors ${
                  activeTab === idx 
                     ? "bg-teal-400 text-[#002e3b]" 
                     : "bg-white/5 text-teal-400 border border-teal-400/20"
                }`}>
                  {tab.icon}
                </div>
                <div>
                  <h3 className="font-bold text-sm sm:text-base uppercase tracking-wider">{tab.title}</h3>
                  <p className={`text-xs mt-1 font-light ${activeTab === idx ? "text-slate-200" : "text-slate-450"}`}>{tab.subtitle}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Active Tab Content (Right) */}
          <div className="lg:col-span-7 bg-white/[0.02] border border-white/5 backdrop-blur-xl rounded-[2.5rem] p-8 sm:p-10 overflow-hidden relative min-h-[360px] shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center h-full w-full"
              >
                {/* Text Block */}
                <div className="md:col-span-7 space-y-6">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white leading-snug tracking-wide">
                      {tabs[activeTab].content.heading}
                    </h3>
                    <p className="text-xs text-slate-400 font-light leading-relaxed mt-4">
                      {tabs[activeTab].content.text}
                    </p>
                    
                    {/* Bullets */}
                    <div className="grid grid-cols-1 gap-3 pt-6">
                      {tabs[activeTab].content.bullets.map((bullet, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-xs font-semibold text-slate-200">
                          <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                          {bullet}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Graphic Visual Block */}
                <div className="md:col-span-5 flex flex-col items-center justify-center relative min-h-[220px]">
                  {/* Floating glow circle behind image */}
                  <div className="absolute w-40 h-40 rounded-full bg-teal-500/10 blur-[45px] animate-pulse" />
                  
                  {/* Floating Image Wrapper */}
                  <motion.div
                    animate={{
                      y: [0, -12, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="relative w-44 h-44 sm:w-48 sm:h-48 z-10 drop-shadow-[0_15px_30px_rgba(6,67,84,0.4)]"
                  >
                    <img
                      src={tabs[activeTab].image}
                      alt={tabs[activeTab].title}
                      className="w-full h-full object-contain rounded-2xl"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
