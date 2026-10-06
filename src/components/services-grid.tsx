"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Code, Smartphone, Globe, ShoppingCart, Cloud, Users, Cpu, Database, ShieldCheck, ArrowUpRight 
} from "lucide-react";

export default function ServicesGrid() {
  const services = [
    {
      title: "Software Development",
      description: "Custom enterprise software solutions tailored to optimize operations, automate complex workflows, and support scale.",
      icon: <Code className="w-6 h-6 text-brand-teal" />,
      image: "/images/services/software_development.png",
      slug: "software-development"
    },
    {
      title: "Mobile App Development",
      description: "Sleek, high-performance iOS and Android mobile applications built on Flutter, React Native, Swift, and Kotlin.",
      icon: <Smartphone className="w-6 h-6 text-brand-teal" />,
      image: "/images/services/mobile_development.png",
      slug: "mobile-app-development"
    },
    {
      title: "Web Development",
      description: "Premium, responsive, and search-optimized web experiences designed for maximum speed, security, and conversion rates.",
      icon: <Globe className="w-6 h-6 text-brand-teal" />,
      image: "/images/services/web_development.png",
      slug: "web-development"
    },
    {
      title: "E-Commerce Solutions",
      description: "Complete online retail architectures using Shopify, Magento, WooCommerce, or bespoke headless systems.",
      icon: <ShoppingCart className="w-6 h-6 text-brand-teal" />,
      image: "/images/services/ecommerce_solutions.png",
      slug: "ecommerce-solutions"
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructures, automated deployment pipelines, and migrations on AWS, Azure, and Google Cloud.",
      icon: <Cloud className="w-6 h-6 text-brand-teal" />,
      image: "/images/services/cloud_solutions.png",
      slug: "cloud-solutions"
    },
    {
      title: "CRM Consulting",
      description: "Seamless deployment and custom integrations for Salesforce, HubSpot, and Zoho systems to power customer acquisition.",
      icon: <Users className="w-6 h-6 text-brand-teal" />,
      image: "/images/services/crm_consulting.png",
      slug: "crm-consulting"
    },
    {
      title: "API Dev & Integration",
      description: "Robust, secure, and clean custom web services and third-party integrations linking your system endpoints.",
      icon: <Cpu className="w-6 h-6 text-brand-teal" />,
      image: "/images/services/api_integration.png",
      slug: "api-dev-and-integration"
    },
    {
      title: "Data Engineering",
      description: "Highly automated data pipelines, real-time streaming ETL systems, and scalable data warehouses (Snowflake, BigQuery).",
      icon: <Database className="w-6 h-6 text-brand-teal" />,
      image: "/images/services/data_engineering.png",
      slug: "data-engineering"
    },
    {
      title: "Cyber Security",
      description: "Web/mobile penetration audits, vulnerability assessments, compliance alignments (GDPR, ISO 27001), and access setups.",
      icon: <ShieldCheck className="w-6 h-6 text-brand-teal" />,
      image: "/images/services/cyber_security.png",
      slug: "cyber-security"
    }
  ];

  return (
    <section className="bg-slate-50 py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-teal">
            OUR CAPABILITIES
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Comprehensive Digital Capabilities
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto font-light text-sm">
            Leverage our global technical expertise to build, protect, and scale your business infrastructure.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white border border-slate-100 rounded-3xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
            >
              {/* Cover Image */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-50 border-b border-slate-100/50">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent" />
              </div>

              {/* Content area */}
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  {/* Icon & Title Row */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-slate-50 group-hover:bg-brand-teal/5 rounded-xl transition-colors duration-300 flex-shrink-0">
                      {service.icon}
                    </div>
                    <h3 className="text-base font-bold text-slate-800 tracking-wide group-hover:text-brand-teal transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  {/* Description */}
                  <p className="text-xs text-slate-500 font-light leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Action Button Link */}
                <Link
                  href={`/services/${service.slug}`}
                  prefetch={false}
                  className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 group-hover:text-brand-teal transition-colors"
                >
                  Learn More
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
