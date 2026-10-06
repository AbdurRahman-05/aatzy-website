"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { 
  Menu, X, ChevronDown, Phone, Globe, Shield, Cloud, Database, 
  Cpu, Award, Building, BookOpen, Layers, Laptop, ExternalLink, ArrowRight,
  Mail
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (menuName: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(menuName);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  const toggleMenu = (menuName: string) => {
    if (activeMenu === menuName) {
      setActiveMenu(null);
    } else {
      setActiveMenu(menuName);
    }
  };

  const menuItems = [
    { name: "Services", id: "services" },
    { name: "Cloud", id: "cloud" },
    { name: "Data & AI", id: "data-ai" },
    { name: "Security", id: "security" },
    { name: "Industries", id: "industries" },
    { name: "Technologies", id: "technologies" },
  ];

  // Data for Mega Menus
  const servicesMenu = {
    categories: [
      {
        title: "Design & Development",
        links: ["Product Design", "Web Development", "Mobile Apps", "Front-end Development", "Backend Development"]
      },
      {
        title: "Enterprise Services",
        links: ["ERP Solutions (Odoo/SAP)", "CRM Integrations", "Salesforce Consulting", "Cloud Migration Services"]
      },
      {
        title: "Support Services",
        links: ["Application Support", "Cloud Infrastructure Support", "DevOps Consulting", "Software Maintenance"]
      },
      {
        title: "Digital Marketing",
        links: ["Search Engine Optimization", "PPC Campaigns", "Content Marketing", "Social Media Strategy"]
      }
    ]
  };

  const cloudMenu = {
    categories: [
      {
        title: "Cloud Infrastructure",
        links: ["AWS Cloud Solutions", "Microsoft Azure Integration", "Google Cloud Platform", "Hybrid Cloud Architecture"]
      },
      {
        title: "DevOps & Automation",
        links: ["CI/CD Pipelines", "Infrastructure as Code", "Kubernetes & Docker", "Serverless Architecture"]
      }
    ]
  };

  const dataAiMenu = {
    categories: [
      {
        title: "Data Management",
        links: ["Data Strategy", "Data Warehousing", "Data Lakes", "ETL Pipelines"]
      },
      {
        title: "Artificial Intelligence",
        links: ["Custom LLM Development", "AI-Powered Chatbots", "Machine Learning Models", "Computer Vision", "Predictive Analytics"]
      }
    ]
  };

  const securityMenu = {
    categories: [
      {
        title: "Cyber Security Services",
        links: ["Web Application Security", "Mobile App Pen-testing", "API Security Audits", "Cloud Infrastructure Audit", "Compliance (ISO 27001/GDPR)"]
      }
    ]
  };

  const industriesMenu = {
    categories: [
      {
        title: "Sector Focus",
        links: ["Healthcare", "Retail & E-commerce", "Fintech & Banking", "Real Estate", "Logistics & Supply Chain", "Education & Edtech", "Hospitality & Leisure", "Media & Entertainment", "Automotive", "Energy & Utilities"]
      }
    ]
  };

  const technologiesMenu = {
    categories: [
      {
        title: "Mobile Apps",
        links: ["React Native", "Flutter", "iOS (Swift)", "Android (Kotlin)"]
      },
      {
        title: "E-Commerce",
        links: ["Shopify Development", "Magento Commerce", "WooCommerce", "Custom E-Commerce Storefronts"]
      },
      {
        title: "CMS & Front-end",
        links: ["WordPress Development", "Drupal Consulting", "Acquia Solutions", "Next.js / React Development"]
      },
      {
        title: "Backend & Custom Dev",
        links: ["Laravel (PHP)", "Ruby on Rails", "Node.js Microservices", "Django (Python)"]
      }
    ]
  };

  const renderMegaMenuContent = (menuId: string) => {
    let data;
    switch (menuId) {
      case "services": data = servicesMenu; break;
      case "cloud": data = cloudMenu; break;
      case "data-ai": data = dataAiMenu; break;
      case "security": data = securityMenu; break;
      case "industries": data = industriesMenu; break;
      case "technologies": data = technologiesMenu; break;
      default: return null;
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {data.categories.map((cat, idx) => (
          <div key={idx} className="space-y-4">
            <h4 className="font-bold text-brand-teal text-sm uppercase tracking-wider border-b border-slate-100 pb-2">
              {cat.title}
            </h4>
            <ul className="space-y-2">
              {cat.links.map((link, lIdx) => (
                <li key={lIdx}>
                  <Link 
                    href="/contact" 
                    prefetch={false}
                    onClick={() => setActiveMenu(null)}
                    className="text-slate-600 hover:text-brand-teal text-xs transition-colors duration-200 flex items-center gap-1 group font-medium"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-brand-teal transition-colors"></span>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        {/* Callout box inside mega menu */}
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-between">
          <div>
            <h5 className="font-bold text-slate-800 text-sm mb-2">Need a Custom Solution?</h5>
            <p className="text-slate-500 text-xs leading-relaxed mb-4">
              Get a free consultation with our solutions architects to design your roadmap.
            </p>
          </div>
          <Link 
            href="/contact" 
            prefetch={false}
            onClick={() => setActiveMenu(null)}
            className="inline-flex items-center gap-2 text-xs font-bold text-brand-teal hover:text-brand-teal-hover group"
          >
            Schedule Free Call 
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    );
  };

  const drawerLinks = [
    { name: "Our Company", slug: "our-company" },
    { name: "Sustainability & ESG", slug: "sustainability-esg" },
    { name: "Global Partnerships", slug: "global-partnerships" },
    { name: "Awards & Recognition", slug: "awards-recognition" },
    { name: "Global Capability Centers (GCC)", slug: "global-capability-centers" },
    { name: "Press & Media Events", slug: "press-media-events" }
  ];

  return (
    <>
      {/* Top Banner with Hotline numbers */}
      <div className="bg-brand-teal text-white py-2 px-6 text-xs flex justify-between items-center z-50 relative border-b border-white/10">
        <div className="flex items-center gap-4">
          <span className="opacity-80 flex items-center gap-1">
            <Globe className="w-3.5 h-3.5" /> Direct Sales Support:
          </span>
          <a href="tel:+61439859700" className="hover:underline flex items-center gap-1">
            🇦🇺 AUS: +61 439859700
          </a>
          <a href="tel:+918122552280" className="hover:underline flex items-center gap-1">
            🇮🇳 IND: +91 8122552280
          </a>
        </div>
        <div className="hidden sm:flex items-center gap-4">
          <Link href="/contact" prefetch={false} className="hover:text-slate-200 transition-colors">Inquire Now</Link>
          <span className="opacity-40">|</span>
          <a href="mailto:consult@aatzy.com" className="hover:text-slate-200 transition-colors">consult@aatzy.com</a>
        </div>
      </div>

      <header
        className={`fixed top-[32px] left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-white shadow-md py-3" 
            : "bg-white/95 backdrop-blur-md py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" prefetch={false} className="flex items-center">
            <img 
              src="/WhatsApp_Image_2026-05-25_at_6,19,57_PM-removebg-preview-Picsart-AiImageEnhancer.png" 
              alt="Aatzy Technologies" 
              className="h-9 sm:h-10 w-auto object-contain"
            />
          </Link>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => (
              <div key={item.id} className="relative">
                <button
                  onMouseEnter={() => handleMouseEnter(item.id)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => toggleMenu(item.id)}
                  className={`flex items-center gap-1 px-3 py-2 text-xs uppercase tracking-wider font-bold transition-colors cursor-pointer ${
                    activeMenu === item.id 
                      ? "text-brand-teal" 
                      : "text-slate-700 hover:text-brand-teal"
                  }`}
                >
                  {item.name}
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeMenu === item.id ? "rotate-180 text-brand-teal" : "text-slate-400"}`} />
                </button>
              </div>
            ))}
          </nav>

          {/* Right Side Buttons */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              prefetch={false}
              className="hidden md:inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-brand-teal hover:bg-brand-teal-hover text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md shadow-brand-teal/10 hover:shadow-lg"
            >
              Contact Us
            </Link>

            {/* Hamburger Button */}
            <button
              onClick={() => setDrawerOpen(true)}
              className="p-2 text-slate-600 hover:text-brand-teal cursor-pointer bg-slate-100 hover:bg-brand-teal/10 rounded-full transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mega Menu Dropdown Panel */}
        <AnimatePresence>
          {activeMenu && (
            <>
              {/* Backdrop */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveMenu(null)}
                className="fixed inset-0 top-[110px] bg-slate-900/20 backdrop-blur-sm z-40"
              />
              {/* Dropdown Card */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                onMouseEnter={() => {
                  if (timeoutRef.current) clearTimeout(timeoutRef.current);
                }}
                onMouseLeave={handleMouseLeave}
                className="absolute left-0 right-0 top-full bg-white border-t border-slate-100 shadow-2xl z-50 overflow-hidden"
              >
                <div className="max-w-7xl mx-auto px-8 py-10">
                  {renderMegaMenuContent(activeMenu)}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>

      {/* Side Slide-out Drawer */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setDrawerOpen(false)}
              className="fixed inset-0 bg-black z-50 cursor-pointer"
            />
            {/* Drawer Body */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35, ease: "easeInOut" }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-brand-teal text-white shadow-2xl z-50 flex flex-col justify-between p-8"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-8">
                  <Link 
                    href="/"
                    prefetch={false}
                    onClick={() => setDrawerOpen(false)}
                    className="flex items-center"
                  >
                    <img 
                      src="/WhatsApp_Image_2026-05-25_at_6,19,57_PM-removebg-preview-Picsart-AiImageEnhancer.png" 
                      alt="Aatzy Technologies" 
                      style={{ filter: "brightness(0) invert(1)" }}
                      className="h-9 w-auto object-contain"
                    />
                  </Link>
                  <button 
                    onClick={() => setDrawerOpen(false)}
                    className="p-2 rounded-full hover:bg-white/10 text-teal-200 hover:text-white transition-colors cursor-pointer"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Drawer Menu Links */}
                <nav className="space-y-6">
                  {drawerLinks.map((item, idx) => (
                    <Link
                      key={idx}
                      href={`/company/${item.slug}`}
                      prefetch={false}
                      onClick={() => setDrawerOpen(false)}
                      className="block text-lg font-semibold hover:text-teal-200 transition-colors py-1 group flex items-center justify-between"
                    >
                      {item.name}
                      <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Bottom Details */}
              <div className="border-t border-white/10 pt-6 mt-8 space-y-4">
                <h5 className="font-bold text-teal-300 text-xs uppercase tracking-wider">Corporate Headquarters</h5>
                <p className="text-xs text-teal-100 leading-relaxed">
                  Aatzy Technologies<br />
                  32-A, First floor, 100 Feet Rd, next to AVSS Hospital, Kuruvikaran Salai, Madurai, Tamil Nadu 625009
                </p>
                <div className="flex flex-col gap-2 pt-2 text-xs">
                  <a href="tel:+61439859700" className="hover:underline flex items-center gap-2 text-teal-100 hover:text-white">
                    <Phone className="w-3.5 h-3.5 text-teal-300" /> AUS: +61 439859700
                  </a>
                  <a href="tel:+918122552280" className="hover:underline flex items-center gap-2 text-teal-100 hover:text-white">
                    <Phone className="w-3.5 h-3.5 text-teal-300" /> IND: +91 8122552280
                  </a>
                  <a href="mailto:consult@aatzy.com" className="hover:underline flex items-center gap-2 text-teal-100 hover:text-white">
                    <Mail className="w-3.5 h-3.5 text-teal-300" /> consult@aatzy.com
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
