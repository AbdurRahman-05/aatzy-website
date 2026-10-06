"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";
import { TrendingDown, Lightbulb, ShieldCheck } from "lucide-react";

function Counter({ value, duration = 2 }: { value: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [mounted, setMounted] = React.useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const match = React.useMemo(() => value.match(/^([\d.]+)(.*)$/), [value]);
  const initialText = React.useMemo(() => {
    if (!match || !mounted) return value;
    const suffix = match[2];
    const decimals = match[1].includes(".") ? (match[1].split(".")[1] || "").length : 0;
    return (0).toFixed(decimals) + suffix;
  }, [value, match, mounted]);

  useEffect(() => {
    if (!mounted || !isInView || !ref.current) return;

    if (!match) {
      ref.current.textContent = value;
      return;
    }

    const target = parseFloat(match[1]);
    const suffix = match[2];
    const decimals = match[1].includes(".") ? (match[1].split(".")[1] || "").length : 0;

    const element = ref.current;
    const controls = animate(0, target, {
      duration: duration,
      ease: "easeOut",
      onUpdate(latest) {
        element.textContent = latest.toFixed(decimals) + suffix;
      },
    });

    return () => controls.stop();
  }, [mounted, isInView, value, duration, match]);

  return <span ref={ref}>{initialText}</span>;
}

export default function DrivingSuccess() {
  const metrics = [
    {
      percentage: "35%",
      label: "Cost Savings",
      description: "Optimized infrastructure and workflow automation to reduce operational overhead significantly.",
      icon: <TrendingDown className="w-8 h-8 text-teal-300" />
    },
    {
      percentage: "45%",
      label: "Productivity Boost",
      description: "Accelerate feature deployment and streamline standard dev pipelines through custom tools.",
      icon: <Lightbulb className="w-8 h-8 text-teal-300" />
    },
    {
      percentage: "99.9%",
      label: "Threat Prevention",
      description: "Rigorous cyber security protocols, penetration audits, and encrypted cloud setups.",
      icon: <ShieldCheck className="w-8 h-8 text-teal-300" />
    }
  ];

  return (
    <section className="bg-brand-teal text-white py-24 px-6 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-teal-500/10 blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] rounded-full bg-cyan-600/10 blur-[80px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center space-y-4 mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-teal-300">
            DRIVING SUCCESS
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold max-w-3xl mx-auto leading-tight">
            Optimise Savings for Exponential Growth
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto font-light text-sm">
            Leverage smart engineering and modern architectures to secure and scale your technology investments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-brand-teal-dark/60 border border-white/5 rounded-3xl p-8 hover:bg-brand-teal-dark/95 transition-all duration-300 hover:border-teal-400/20 group hover:shadow-xl"
            >
              <div className="mb-6 p-4 bg-white/5 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                {metric.icon}
              </div>
              <div className="space-y-3">
                <span className="text-5xl sm:text-6xl font-black block tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-white">
                  <Counter value={metric.percentage} />
                </span>
                <h3 className="text-lg font-bold tracking-wide">
                  {metric.label}
                </h3>
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  {metric.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
