"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "software-development",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = () => {
    setLoading(true);
    setErrorMessage("");
  };

  return (
    <section id="contact" className="bg-slate-50 py-24 px-6 relative border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Contact Details Column (Left) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#064354] to-[#002e3b] rounded-[2.5rem] p-8 sm:p-10 text-white flex flex-col justify-between shadow-xl relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:2rem_2rem]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] rounded-full bg-teal-400/10 blur-[80px]" />
            
            <div className="space-y-8 relative z-10">
              <div className="space-y-4">
                <p className="text-xs font-bold text-teal-300 uppercase tracking-[0.2em]">
                  TALK TO AN ENGINEER
                </p>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Start Your Project Roadmap Today
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                  We schedule free consultations with technical architects to analyze your codebase, map requirements, and deliver exact estimates.
                </p>
              </div>

              {/* Direct Channels */}
              <div className="space-y-5 pt-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-teal-300 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-teal-300 uppercase block tracking-wider">Email Inquiry</span>
                    <a href="mailto:consult@aatzy.com" className="text-xs sm:text-sm hover:underline">consult@aatzy.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-teal-300 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-teal-300 uppercase block tracking-wider">Global Sales Support</span>
                    <a href="tel:+61439859700" className="text-xs sm:text-sm block hover:underline">AUS: +61 439859700</a>
                    <a href="tel:+918122552280" className="text-xs sm:text-sm block hover:underline">IND: +91 8122552280</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-teal-300 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-teal-300 uppercase block tracking-wider">Corporate Hub</span>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      32-A, First floor, 100 Feet Rd, next to AVSS Hospital, Kuruvikaran Salai, Madurai, Tamil Nadu 625009
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-8 border-t border-white/10 mt-8 text-center sm:text-left">
              <p className="text-[10px] text-teal-300/60 font-semibold uppercase tracking-widest">
                © Aatzy Technologies • Privacy Encrypted Lead Capture
              </p>
            </div>

          </div>

          {/* Contact Form Column (Right) */}
          <div className="lg:col-span-7 bg-white border border-slate-100 rounded-[2.5rem] p-8 sm:p-10 shadow-sm flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  action="https://formsubmit.co/consult@aatzy.com"
                  method="POST"
                  target="formsubmit_iframe"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <input type="hidden" name="_subject" value={`New Contact Inquiry from ${formData.name} - ${formData.service}`} />
                  
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-800 tracking-wide mb-6">
                    Request an Estimate
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 focus:border-brand-teal focus:bg-white p-3.5 rounded-2xl text-slate-700 text-xs sm:text-sm outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Work Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 focus:border-brand-teal focus:bg-white p-3.5 rounded-2xl text-slate-700 text-xs sm:text-sm outline-none transition-all"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 focus:border-brand-teal focus:bg-white p-3.5 rounded-2xl text-slate-700 text-xs sm:text-sm outline-none transition-all"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Company Name</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 focus:border-brand-teal focus:bg-white p-3.5 rounded-2xl text-slate-700 text-xs sm:text-sm outline-none transition-all"
                        placeholder="Acme Corp"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Required Service *</label>
                    <select
                      value={formData.service}
                      name="service"
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-brand-teal focus:bg-white p-3.5 rounded-2xl text-slate-700 text-xs sm:text-sm outline-none transition-all"
                    >
                      <option value="software-development">Custom Software Development</option>
                      <option value="mobile-apps">Mobile Application Design</option>
                      <option value="cloud-solutions">AWS/Azure/GCP Cloud Architecture</option>
                      <option value="ai-ml">Artificial Intelligence & LLMs</option>
                      <option value="crm-integrations">Salesforce / HubSpot / Zoho</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Project Details *</label>
                    <textarea
                      required
                      name="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-brand-teal focus:bg-white p-3.5 rounded-2xl text-slate-700 text-xs sm:text-sm outline-none transition-all resize-none"
                      placeholder="Tell us about your systems, legacy code stack, requirements, and targets..."
                    />
                  </div>

                  {errorMessage && (
                    <div className="text-rose-500 text-xs font-semibold bg-rose-50 border border-rose-100 rounded-xl p-3">
                      {errorMessage}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-brand-teal hover:bg-brand-teal-hover text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-2xl transition-all duration-300 shadow-md shadow-brand-teal/10 hover:shadow-lg disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {loading ? (
                      <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    ) : (
                      <>
                        Submit Inquiry <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center space-y-6 py-12"
                >
                  <div className="inline-flex p-4 bg-teal-50 text-brand-teal rounded-full border border-teal-100">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-extrabold text-slate-800 tracking-wide">
                      Inquiry Received Successfully!
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto font-light leading-relaxed">
                      Thank you for contacting Aatzy. Our solutions architects are reviewing your details. We will reach out to you via <strong className="text-slate-800 font-bold">{formData.email}</strong> shortly.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: "", email: "", phone: "", company: "", service: "software-development", message: "" });
                    }}
                    className="px-6 py-3 border border-slate-200 hover:border-brand-teal hover:text-brand-teal text-slate-500 text-xs font-bold uppercase tracking-wider rounded-2xl transition-all cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
            <iframe
              name="formsubmit_iframe"
              style={{ display: "none" }}
              onLoad={() => {
                if (loading) {
                  setLoading(false);
                  setIsSubmitted(true);
                }
              }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
