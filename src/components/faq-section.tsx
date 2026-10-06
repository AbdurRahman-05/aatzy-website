"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle, ArrowRight } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      category: "Services",
      question: "What core development services does Aatzy provide?",
      answer: "We specialize in enterprise custom software development, mobile application dev (React Native/Flutter), premium search-optimized web applications (Next.js/React), cloud infrastructure setups (AWS/Azure/GCP), custom data pipelines, and CRM/ERP integrations (Salesforce, HubSpot, Zoho, Odoo)."
    },
    {
      category: "Security",
      question: "How does Aatzy ensure the security of custom-built software?",
      answer: "Every codebase we deploy adheres to strict OWASP secure coding guidelines. We run automated vulnerability checks, establish Multi-Factor Authentication grids, protect database transactions with robust encryption, and align system architectures with GDPR, ISO 27001, and HIPAA compliance policies."
    },
    {
      category: "Migration",
      question: "Can you migrate legacy architectures to modern cloud platforms?",
      answer: "Yes, legacy modernization is a core strength. We design detailed system migration roadmaps, containerize workloads using Docker and Kubernetes, and orchestrate zero-downtime database transfers from older PHP, Yii, or legacy monolith frameworks to modern serverless environments."
    },
    {
      category: "Process",
      question: "What is your project delivery and engagement model?",
      answer: "We operate using structured agile sprints, keeping clients involved via weekly showcases and automated staging review builds. We offer dedicated engineering squads, full-scope fixed estimates, and post-launch SLA maintenance retainers tailored to support your team's growth."
    },
    {
      category: "Integrations",
      question: "Do you build custom integrations for CRM and ERP systems?",
      answer: "Absolutely. We write custom Apex modules, HubSpot workflows, Deluge scripts, and serverless background workers to bridge your custom proprietary software directly to global CRM/ERP platforms, automating manual data transfers seamlessly."
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-slate-50 py-24 px-6 relative overflow-hidden border-t border-b border-slate-100">
      
      {/* Background blobs for premium depth */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[-5%] w-[450px] h-[450px] rounded-full bg-teal-100/30 blur-[100px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-cyan-100/20 blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Heading and CTA */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-32">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-teal/10 bg-white text-brand-teal text-xs font-bold uppercase tracking-widest shadow-sm">
              <HelpCircle className="w-3.5 h-3.5 text-brand-teal" /> Frequently Asked Questions
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Answering Your Systems & Development Questions
            </h2>
            <p className="text-slate-500 font-light text-sm leading-relaxed max-w-md">
              Have questions about security SLA protection, custom cloud configurations, migration details, or workflow estimations? Here is how we build modern digital solutions.
            </p>

            <div className="pt-4">
              <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
                <h4 className="text-slate-800 font-bold text-sm">Have a unique system requirement?</h4>
                <p className="text-slate-400 text-xs font-light leading-relaxed">
                  Talk directly with our lead software engineers and cloud architects to customize a project roadmap suited for your enterprise.
                </p>
                <Link
                  href="/contact"
                  prefetch={false}
                  className="inline-flex items-center gap-2 text-xs font-bold text-brand-teal hover:text-brand-teal-hover transition-colors group pt-2"
                >
                  Request a Tech Consultation
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Accordion Items */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`bg-white border transition-all duration-300 rounded-3xl overflow-hidden ${
                    isOpen 
                      ? "border-brand-teal/20 shadow-md shadow-brand-teal/5" 
                      : "border-slate-200/80 hover:border-slate-300 shadow-sm"
                  }`}
                >
                  <button
                    onClick={() => handleToggle(idx)}
                    className="w-full px-6 sm:px-8 py-6 text-left flex items-start justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <div className="space-y-1">
                      <span className="text-[9px] font-bold text-brand-teal uppercase tracking-wider block mb-1">
                        {faq.category}
                      </span>
                      <span className="text-sm sm:text-base font-extrabold text-slate-850 tracking-wide block">
                        {faq.question}
                      </span>
                    </div>
                    
                    <span className={`p-2 rounded-xl transition-all shrink-0 ${
                      isOpen ? "bg-brand-teal text-white" : "bg-slate-100 text-slate-550"
                    }`}>
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 sm:px-8 pb-6 border-t border-slate-100 pt-4">
                          <p className="text-slate-500 font-light text-xs sm:text-sm leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
