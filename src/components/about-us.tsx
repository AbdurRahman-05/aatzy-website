"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, ShieldAlert, Award, FileCode, CheckSquare, History } from "lucide-react";

export default function AboutUs() {
  const stats = [
    {
      value: "1,000+",
      label: "Tech Specialists",
      description: "Developers, DevOps architects, and certified cloud engineers worldwide.",
      icon: <Users className="w-5 h-5 text-brand-teal" />
    },
    {
      value: "15,000+",
      label: "Happy Clients",
      description: "Empowering startups, mid-market leaders, and Fortune 500 enterprises.",
      icon: <Award className="w-5 h-5 text-brand-teal" />
    },
    {
      value: "27,000+",
      label: "Projects Delivered",
      description: "Successful software implementations, migrations, and AI solutions.",
      icon: <FileCode className="w-5 h-5 text-brand-teal" />
    },
    {
      value: "95%",
      label: "CSAT Score",
      description: "Industry-leading client satisfaction, reviews, and repeat partnerships.",
      icon: <CheckSquare className="w-5 h-5 text-brand-teal" />
    }
  ];

  return (
    <section className="bg-slate-50 py-24 px-6 relative border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text block (Left) */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-teal">
              ABOUT OUR COMPANY
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              A Global Tech Engineering Partner
            </h2>
            <p className="text-slate-500 font-light text-xs sm:text-sm leading-relaxed">
              At Aatzy Technologies, we believe in building and maintaining long-term relationships with all our clients. We are pioneers in solving complex challenges in web and software development, ensuring our experts handle your assigned projects prudently and with precision.
            </p>
            <p className="text-slate-500 font-light text-xs sm:text-sm leading-relaxed">
              We completely understand your business domain and create custom web designs that align perfectly with your requirements, helping you stand apart from the crowd. Our designers craft experiences that fulfill your vision for unique brand recognition and identity.
            </p>
            <p className="text-slate-500 font-light text-xs sm:text-sm leading-relaxed">
              Our professional team is admired globally for thoroughly fulfilling our clients&apos; complex requirements. We endeavor to offer you the best-in-class solutions to achieve maximum satisfaction. We are masters in delivering effective software development, digital marketing, and strategic marketing solutions.
            </p>
            <div className="flex gap-8 pt-4">
              <div>
                <span className="text-2xl font-bold text-slate-800 block">23+ YOE</span>
                <span className="text-[10px] uppercase font-bold text-slate-400">Industry Excellence</span>
              </div>
              <div className="w-px bg-slate-200"></div>
              <div>
                <span className="text-2xl font-bold text-slate-800 block">6+ Offices</span>
                <span className="text-[10px] uppercase font-bold text-slate-400">Global Locations</span>
              </div>
            </div>
          </div>

          {/* Stats grid (Right) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="p-3 bg-slate-50 rounded-2xl w-fit mb-4">
                  {stat.icon}
                </div>
                <div className="space-y-1">
                  <span className="text-3xl sm:text-4xl font-extrabold text-brand-teal block tracking-tight">
                    {stat.value}
                  </span>
                  <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wide">
                    {stat.label}
                  </h4>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
