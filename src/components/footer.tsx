"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, Globe, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };



  return (
    <footer className="w-full bg-[#002e3b] text-slate-400 pt-20 pb-10 text-xs relative overflow-hidden border-t border-teal-800/30">
      
      {/* Background overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-teal-900/40 blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 space-y-16">
        
        {/* Top Segment: Links and Offices */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {/* Logo & Description */}
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center">
              <img 
                src="/WhatsApp_Image_2026-05-25_at_6,19,57_PM-removebg-preview-Picsart-AiImageEnhancer.png" 
                alt="Aatzy Technologies" 
                style={{ filter: "brightness(0) invert(1)" }}
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-slate-300 font-light leading-relaxed">
              Transformative software solutions, AI innovations, and custom cloud-native development. Helping enterprises and startups build resilient platforms globally.
            </p>
            <div className="space-y-2 pt-2">
              <a href="mailto:consult@aatzy.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-teal-300" /> consult@aatzy.com
              </a>
              <span className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-teal-300" /> www.aatzy.com
              </span>
              <div className="flex items-start gap-2 pt-1 text-slate-300">
                <MapPin className="w-4 h-4 text-teal-300 shrink-0 mt-0.5" />
                <span>32-A, First floor, 100 Feet Rd, next to AVSS Hospital, Kuruvikaran Salai, Madurai, Tamil Nadu 625009</span>
              </div>
            </div>
          </div>

          {/* Quick Links Column 1 */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-teal-300 font-bold uppercase tracking-wider text-[10px]">Capabilities</h4>
            <ul className="space-y-2.5 font-medium">
              <li><Link href="/contact" prefetch={false} className="hover:text-white transition-colors">Custom Software</Link></li>
              <li><Link href="/contact" prefetch={false} className="hover:text-white transition-colors">Mobile App Dev</Link></li>
              <li><Link href="/contact" prefetch={false} className="hover:text-white transition-colors">Web Development</Link></li>
              <li><Link href="/contact" prefetch={false} className="hover:text-white transition-colors">E-Commerce</Link></li>
              <li><Link href="/contact" prefetch={false} className="hover:text-white transition-colors">Cloud Consulting</Link></li>
            </ul>
          </div>

          {/* Quick Links Column 2 */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-teal-300 font-bold uppercase tracking-wider text-[10px]">Enterprise</h4>
            <ul className="space-y-2.5 font-medium">
              <li><Link href="/contact" prefetch={false} className="hover:text-white transition-colors">Salesforce CRM</Link></li>
              <li><Link href="/contact" prefetch={false} className="hover:text-white transition-colors">HubSpot Setup</Link></li>
              <li><Link href="/contact" prefetch={false} className="hover:text-white transition-colors">Zoho Systems</Link></li>
              <li><Link href="/contact" prefetch={false} className="hover:text-white transition-colors">Odoo ERP</Link></li>
              <li><Link href="/contact" prefetch={false} className="hover:text-white transition-colors">Data Pipelines</Link></li>
            </ul>
          </div>

          {/* Quick Links Column 3 */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-teal-300 font-bold uppercase tracking-wider text-[10px]">Corporate Info</h4>
            <p className="text-slate-300 font-light leading-relaxed mb-4">
              Aatzy Technologies operates as a strategic digital partner. Form submissions are encrypted and routed directly to our sales support engineers.
            </p>
            <div className="flex gap-4">
              <Link href="/contact" prefetch={false} className="text-slate-300 hover:text-white transition-colors">Inquire Services</Link>
              <span>•</span>
              <Link href="/contact" prefetch={false} className="text-slate-300 hover:text-white transition-colors">Partner Programs</Link>
            </div>
          </div>

        </div>



        {/* Bottom Segment: Divider & Copyright */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-teal-800/40 to-transparent relative pt-4">
          {/* Scroll to Top Trigger */}
          <button
            onClick={scrollToTop}
            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 p-2.5 border border-teal-800/40 hover:border-teal-700/60 bg-[#002e3b] text-teal-300 hover:text-white rounded-full transition-all duration-300 cursor-pointer shadow-lg"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 text-[10px] text-slate-500 font-semibold tracking-wider uppercase">
          <p>© {new Date().getFullYear()} AATZY TECHNOLOGIES. ALL RIGHTS RESERVED. INQUIRIES ROUTED VIA GLOBAL SALES CHANNELS.</p>
          <div className="flex gap-4">
            <Link href="/contact" prefetch={false} className="hover:text-slate-400 transition-colors">SECURITY TERMS</Link>
            <span>•</span>
            <Link href="/contact" prefetch={false} className="hover:text-slate-400 transition-colors">PRIVACY POLICY</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
