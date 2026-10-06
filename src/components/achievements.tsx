"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Star, Compass, Zap, Medal } from "lucide-react";

export default function Achievements() {
  const [activeTab, setActiveTab] = useState("partnerships");

  const partnerships = [
    { 
      title: "AWS Partner Network", 
      category: "Advanced Consulting", 
      highlight: "Cloud Migration & Serverless",
      logo: (
        <svg viewBox="0 0 100 60" className="w-12 h-7" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 25.5c-1.5 0-2.8.3-3.6 1-.8.7-1.2 1.8-1.2 3.2 0 2.4 1.5 3.5 3.9 3.5 1.5 0 2.8-.5 3.6-1.3V25.5h-2.7zm4.2-3.8v14.5c0 2.6-1.6 4.2-4.4 4.2-1.9 0-3.6-.6-4.6-1.8l1.8-1.5c.7.6 1.7 1 2.8 1 1.5 0 2.5-.8 2.5-2.3v-1.6c-.9 1.2-2.5 1.8-4.2 1.8-4 0-6.9-3-6.9-6.9s2.9-6.9 6.9-6.9c1.7 0 3.3.6 4.2 1.8v-2.7h1.9zm13.1 14.3l-3.9-12.8h2.1l2.8 9.8 2.9-9.8h2.1l2.9 9.8 2.8-9.8H67l-3.9 12.8h-2.1l-2.9-9.6-2.9 9.6h-2.1zm21.1-7c-1.7-.5-2.8-1-2.8-1.9 0-.8.8-1.3 2-1.3 1.2 0 2.6.4 3.7 1l1-1.5c-1.2-.8-2.9-1.3-4.7-1.3-2.4 0-3.9 1.2-3.9 3.1 0 2.1 1.8 2.7 3.9 3.2 1.9.4 2.8.9 2.8 2 0 1-.9 1.5-2.3 1.5-1.5 0-3.3-.6-4.5-1.4l-1 1.5c1.4.9 3.5 1.5 5.5 1.5 2.6 0 4.3-1.2 4.3-3.4 0-2.2-1.7-2.9-4.1-3.5z" fill="#232F3E"/>
          <path d="M12 44.5c18.5 8.5 42 10 60 2.7 4.2-1.6 8.9-4.4 11.7-8-.8-.6-1.6-.2-2.1.2-9.8 4.3-22.9 6.8-36.2 6.8-15 0-29.5-3-38.5-9.1-.9-.6-1.6 0-1 1l6.1 6.4z" fill="#FF9900"/>
          <path d="M82.8 37.8c-.8 1.2-.2 2 .8 1.6l8.3-1.9c1.3-.3 1.4-1.2.2-1.7l-6.8-3.6c-1.2-.6-1.9-.1-1.6 1.2l.9 4.4z" fill="#FF9900"/>
        </svg>
      )
    },
    { 
      title: "Microsoft Partner", 
      category: "Gold Competency", 
      highlight: "Enterprise Application Integration",
      logo: (
        <svg viewBox="0 0 23 23" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="10.5" height="10.5" fill="#F25022" />
          <rect x="12.5" y="0" width="10.5" height="10.5" fill="#7FBA00" />
          <rect x="0" y="12.5" width="10.5" height="10.5" fill="#00A4EF" />
          <rect x="12.5" y="12.5" width="10.5" height="10.5" fill="#FFB900" />
        </svg>
      )
    },
    { 
      title: "Google Cloud", 
      category: "Premier Tier", 
      highlight: "Big Data & Kubernetes Clusters",
      logo: (
        <svg viewBox="0 0 24 24" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" fill="#4285F4" />
          <path d="M19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z" fill="#34A853" />
        </svg>
      )
    },
    { 
      title: "Salesforce Partner", 
      category: "Ridge Certified", 
      highlight: "CRM & Custom Cloud Solutions",
      logo: (
        <svg viewBox="0 0 24 16" className="w-10 h-6" fill="#009EDB" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.8 6.2C18.1 3.5 15.6 1.5 12.6 1.5c-2.1 0-4 1-5.2 2.6C6.7 3.8 6 3.6 5.2 3.6c-2.9 0-5.2 2.3-5.2 5.2s2.3 5.2 5.2 5.2c.4 0 .9-.1 1.3-.2 1.2 1.4 3 2.2 4.9 2.2 2.7 0 5-1.6 6-4 1-.2 1.8-.7 2.4-1.4 1 1 2.3 1.6 3.8 1.6 2.9 0 5.2-2.3 5.2-5.2-.1-3-2.5-5.2-5.4-5.2c-.4-.1-.8-.1-1.2 0z" />
        </svg>
      )
    },
    { 
      title: "Zoho Premium Partner", 
      category: "Authorized Reseller", 
      highlight: "Zoho CRM & Custom Creator Apps",
      logo: (
        <svg viewBox="0 0 100 100" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
          <rect x="5" y="5" width="40" height="40" rx="6" fill="#E2231A" />
          <polygon points="75,5 55,45 95,45" fill="#00A250" />
          <circle cx="25" cy="75" r="20" fill="#006DB7" />
          <rect x="55" y="55" width="40" height="40" rx="6" fill="#F8A51D" />
        </svg>
      )
    },
    { 
      title: "HubSpot Agency", 
      category: "Platinum Tier", 
      highlight: "Inbound Marketing & CRM Setups",
      logo: (
        <svg viewBox="0 0 24 24" className="w-7 h-7" fill="#FF7A59" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.6 10.8c-.8 0-1.5.5-1.8 1.2h-3.4c-.4-1.5-1.6-2.7-3.1-3.1V5.5c.7-.3 1.2-1 1.2-1.8 0-1.2-.9-2.1-2.1-2.1s-2.1.9-2.1 2.1c0 .8.5 1.5 1.2 1.8v3.4c-1.5.4-2.7 1.6-3.1 3.1H5.1c-.3-.7-1-1.2-1.8-1.2-1.2 0-2.1.9-2.1 2.1s.9 2.1 2.1 2.1c.8 0 1.5-.5 1.8-1.2h3.4c.4 1.5 1.6 2.7 3.1 3.1v3.4c-.7.3-1.2 1-1.2 1.8 0 1.2.9 2.1 2.1 2.1s2.1-.9 2.1-2.1c0-.8-.5-1.5-1.2-1.8v-3.4c1.5-.4 2.7-1.6 3.1-3.1h3.4c.3.7 1 1.2 1.8 1.2 1.2 0 2.1-.9 2.1-2.1s-1-2.1-2.2-2.1zm-9.2 3.6c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8z" />
        </svg>
      )
    },
    { 
      title: "Odoo Official", 
      category: "Gold Partner", 
      highlight: "ERP Custom Development & Support",
      logo: (
        <svg viewBox="0 0 100 40" className="w-12 h-6" fill="#875A7B" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.5 7.5c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm0 15c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5zm22.5-15c-5.5 0-10 4.5-10 10v10h10v-10c0-2.8 2.2-5 5-5s5 2.2 5 5v10h10v-10c0-5.5-4.5-10-10-10zm25 0c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm0 15c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5zm25-15c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm0 15c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z" />
        </svg>
      )
    },
    { 
      title: "Shopify Plus Partner", 
      category: "E-Commerce Expert", 
      highlight: "High-Volume Headless Checkouts",
      logo: (
        <svg viewBox="0 0 24 24" className="w-7 h-7" fill="#95BF47" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.6 5.8l-1.6-3.2c-.3-.6-.9-.9-1.5-.9H7.5c-.6 0-1.2.3-1.5.9L4.4 5.8C2.5 6.6 1.2 8.5 1.2 10.7V21c0 .8.7 1.5 1.5 1.5h18.6c.8 0 1.5-.7 1.5-1.5V10.7c0-2.2-1.3-4.1-3.2-4.9zM12 3.8c1.3 0 2.4.9 2.7 2.2H9.3c.3-1.3 1.4-2.2 2.7-2.2zm7.5 13.5H4.5V11c0-1.8 1.4-3.2 3.2-3.2h8.6c1.8 0 3.2 1.4 3.2 3.2v6.3z" />
        </svg>
      )
    }
  ];

  const awards = [
    { title: "Top Custom Software Developers", issuer: "Clutch Global Awards", year: "2025", rating: "4.8 / 5.0" },
    { title: "Highest Rated IT Services Firm", issuer: "Trustpilot Reviews", year: "2025", rating: "4.9 / 5.0" },
    { title: "Top Web Development Agencies", issuer: "GoodFirms Rankings", year: "2024", rating: "Leader Band" },
    { title: "Best AI Innovation Integrator", issuer: "Stevie Tech Awards", year: "2024", rating: "Gold Winner" },
    { title: "Enterprise Excellence in CRM", issuer: "Salesforce Awards", year: "2024", rating: "Top Innovation" },
    { title: "DevOps Architecture of the Year", issuer: "Cloud Native Awards", year: "2025", rating: "Winner" }
  ];

  return (
    <section className="bg-slate-50 py-24 px-6 relative border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-teal">
            RECOGNITION
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Leading Technology Partners & Achievements
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto font-light text-sm">
            Our certified engineering standards and project delivery awards represent our dedication to technical excellence.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center mb-12">
          <div className="bg-white border border-slate-200 p-1.5 rounded-full flex gap-1 shadow-sm">
            <button
              onClick={() => setActiveTab("partnerships")}
              className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeTab === "partnerships"
                  ? "bg-brand-teal text-white shadow-md"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              Partnerships
            </button>
            <button
              onClick={() => setActiveTab("awards")}
              className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeTab === "awards"
                  ? "bg-brand-teal text-white shadow-md"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              Awards & Recognition
            </button>
          </div>
        </div>

        {/* Tab Content Panels */}
        <div className="relative min-h-[300px]">
          <AnimatePresence mode="wait">
            {activeTab === "partnerships" ? (
              <motion.div
                key="partnerships"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {partnerships.map((partner, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-500">
                          {partner.category}
                        </span>
                        <div className="h-8 flex items-center justify-end">
                          {partner.logo}
                        </div>
                      </div>
                      <h4 className="font-extrabold text-sm text-slate-800 uppercase tracking-wide mb-2">
                        {partner.title}
                      </h4>
                    </div>
                    <p className="text-[11px] text-slate-400 font-light italic mt-4 border-t border-slate-50 pt-3">
                      {partner.highlight}
                    </p>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="awards"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {awards.map((award, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
                  >
                    <div className="mb-6 p-3 bg-teal-50 group-hover:bg-brand-teal group-hover:text-white rounded-2xl w-fit transition-all duration-300 text-brand-teal">
                      <Medal className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                        {award.issuer} • {award.year}
                      </span>
                      <h4 className="font-extrabold text-sm sm:text-base text-slate-800 leading-snug">
                        {award.title}
                      </h4>
                    </div>
                    <div className="flex items-center gap-1 mt-6 pt-4 border-t border-slate-50">
                      <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                      <span className="text-xs font-bold text-slate-700">{award.rating}</span>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
