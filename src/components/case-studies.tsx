"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink, ShieldCheck } from "lucide-react";

export default function CaseStudies() {
  const [page, setPage] = useState(0);

  const projects = [
    {
      title: "Yii to Drupal Migration",
      industry: "Enterprise Media",
      challenge: "Legacy PHP framework could not handle peak volumes and lacked robust multilingual CMS structures.",
      solution: "Migrated whole architecture to Drupal 10 with headless GraphQL API and cloud-front caching.",
      metric: "+320% Load Speed",
      tag: "Migration & Web"
    },
    {
      title: "StructSight IoT Platform",
      industry: "Civil Engineering & Smart City",
      challenge: "Processing hundreds of high-frequency sensor readings per second was choking active relational databases.",
      solution: "Built serverless data intake pipeline on AWS IoT Core, routing streams to InfluxDB with real-time dashboards.",
      metric: "< 25ms Latency",
      tag: "IoT & Data"
    },
    {
      title: "GonnaHappen App",
      industry: "Ticketing & Live Events",
      challenge: "Sub-second seat selection and checkout concurrency issues during high-demand festival ticket drops.",
      solution: "Implemented Redis lock queues and Node.js microservices hosted on autoscaling Kubernetes nodes.",
      metric: "120K concurrent RPS",
      tag: "Mobile App & Backend"
    }
  ];

  const activeIndex = (page % projects.length + projects.length) % projects.length;

  const paginate = (newDirection: number) => {
    setPage(page + newDirection);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 120 : -120,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 120 : -120,
      opacity: 0
    })
  };

  return (
    <section className="bg-white py-24 px-6 relative border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div className="space-y-4">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-teal">
              SUCCESS STORIES
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              Case Studies & Software Implementations
            </h2>
            <p className="text-slate-500 max-w-xl font-light text-sm">
              Discover how we architect custom cloud nodes, secure critical networks, and upgrade legacy stacks.
            </p>
          </div>
          
          {/* Scroll Arrows */}
          <div className="flex gap-3">
            <button
              onClick={() => paginate(-1)}
              className="p-3 border border-slate-200 hover:border-brand-teal text-slate-400 hover:text-brand-teal rounded-full bg-white transition-colors cursor-pointer shadow-sm hover:shadow-md"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => paginate(1)}
              className="p-3 border border-slate-200 hover:border-brand-teal text-slate-400 hover:text-brand-teal rounded-full bg-white transition-colors cursor-pointer shadow-sm hover:shadow-md"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative min-h-[460px] md:min-h-[380px] overflow-hidden rounded-[2.5rem] bg-slate-50 border border-slate-100 shadow-sm p-8 sm:p-12 md:p-16 flex items-center">
          <AnimatePresence initial={false} custom={page} mode="wait">
            <motion.div
              key={page}
              custom={page > 0 ? 1 : -1}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 260, damping: 28 },
                opacity: { duration: 0.25 }
              }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch h-full w-full"
            >
              {/* Left Column: Case Details */}
              <div className="lg:col-span-8 flex flex-col justify-center space-y-6">
                <div>
                  <span className="text-[10px] font-bold text-slate-450 uppercase tracking-widest block mb-2">
                    {projects[activeIndex].industry} • {projects[activeIndex].tag}
                  </span>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight">
                    {projects[activeIndex].title}
                  </h3>
                  
                  <div className="space-y-4 text-xs sm:text-sm font-light leading-relaxed text-slate-650 mt-6 max-w-xl">
                    <p>
                      <strong className="font-bold text-slate-800">Challenge:</strong> {projects[activeIndex].challenge}
                    </p>
                    <p>
                      <strong className="font-bold text-slate-800">Solution:</strong> {projects[activeIndex].solution}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Metric Showcase Card */}
              <div className="lg:col-span-4 bg-white border border-slate-100 rounded-3xl p-8 flex flex-col justify-between items-center text-center shadow-sm">
                <div className="p-3 bg-slate-50 rounded-2xl w-fit">
                  <ShieldCheck className="w-6 h-6 text-brand-teal" />
                </div>
                
                <div className="my-6">
                  <span className="text-2xl sm:text-3xl font-extrabold text-brand-teal block tracking-tight">
                    {projects[activeIndex].metric}
                  </span>
                  <span className="text-[9px] uppercase font-bold text-slate-400 tracking-wider mt-1 block">
                    Verified Performance Gain
                  </span>
                </div>

                <Link
                  href="/contact"
                  prefetch={false}
                  className="inline-flex items-center gap-2 px-6 py-2.5 border border-slate-200 hover:border-brand-teal text-[11px] font-bold text-slate-600 hover:text-brand-teal rounded-full bg-white transition-all cursor-pointer shadow-sm hover:shadow-md"
                >
                  Inquire Case Study
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
