import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, ArrowLeft, ArrowRight, Activity, Terminal, ShieldCheck } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ThreeBackground from "@/components/ui/three-background";
import CursorGlow from "@/components/ui/cursor-glow";

interface ServiceData {
  title: string;
  slug: string;
  description: string;
  image: string;
  features: { title: string; description: string }[];
  technologies: string[];
  metrics: { value: string; label: string }[];
}

const servicesData: Record<string, ServiceData> = {
  "software-development": {
    title: "Software Development",
    slug: "software-development",
    description: "Custom enterprise software solutions tailored to optimize operations, automate complex workflows, and support scale.",
    image: "/images/services/software_development.png",
    features: [
      { title: "Enterprise Architecture", description: "Designing highly scalable, reliable, and secure software backbones." },
      { title: "Custom CRM & ERP", description: "Bespoke internal systems built for your exact operational workflows." },
      { title: "Legacy Modernization", description: "Re-architecting outdated applications into modern cloud-native systems." }
    ],
    technologies: ["Node.js", "TypeScript", "Docker", "Kubernetes", "PostgreSQL", "GraphQL"],
    metrics: [
      { value: "99.99%", label: "Uptime Achieved" },
      { value: "40%", label: "Operational Cost Reduction" }
    ]
  },
  "mobile-app-development": {
    title: "Mobile App Development",
    slug: "mobile-app-development",
    description: "Sleek, high-performance iOS and Android mobile applications built on Flutter, React Native, Swift, and Kotlin.",
    image: "/images/services/mobile_development.png",
    features: [
      { title: "Cross-Platform Apps", description: "Single-codebase solutions built on Flutter and React Native for fast delivery." },
      { title: "Native Swift & Kotlin", description: "Premium, platform-native applications optimized for maximum performance." },
      { title: "App Store Deployment", description: "End-to-end guidance through Apple App Store and Google Play submissions." }
    ],
    technologies: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase", "App Store Connect"],
    metrics: [
      { value: "4.8★", label: "Average App Rating" },
      { value: "10M+", label: "Total Downloads" }
    ]
  },
  "web-development": {
    title: "Web Development",
    slug: "web-development",
    description: "Premium, responsive, and search-optimized web experiences designed for maximum speed, security, and conversion rates.",
    image: "/images/services/web_development.png",
    features: [
      { title: "Next.js & React Frameworks", description: "Leveraging state-of-the-art web architectures for lightning-fast loads." },
      { title: "SEO & Speed Optimization", description: "Adhering to strict web vitals to rank highly on search engines." },
      { title: "Content Management Systems", description: "Empowering content editors with flexible headless CMS dashboards." }
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "Headless CMS", "Vercel", "Web Vitals"],
    metrics: [
      { value: "< 1.2s", label: "Average Load Time" },
      { value: "+145%", label: "Average Conversion Rate Boost" }
    ]
  },
  "ecommerce-solutions": {
    title: "E-Commerce Solutions",
    slug: "ecommerce-solutions",
    description: "Complete online retail architectures using Shopify, Magento, WooCommerce, or bespoke headless systems.",
    image: "/images/services/ecommerce_solutions.png",
    features: [
      { title: "Bespoke Storefronts", description: "High-converting design templates and layouts for maximum checkout flow." },
      { title: "Headless E-Commerce", description: "Decoupled architectures linking Shopify Admin to Next.js speed." },
      { title: "Payment Integration", description: "Secure, global multi-currency checkouts via Stripe, PayPal, and Adyen." }
    ],
    technologies: ["Shopify Plus", "Magento", "Stripe", "WooCommerce", "Redis", "ElasticSearch"],
    metrics: [
      { value: "$250M+", label: "Processed Transactions" },
      { value: "3.2%", label: "Average Cart Value Increase" }
    ]
  },
  "cloud-solutions": {
    title: "Cloud Solutions",
    slug: "cloud-solutions",
    description: "Scalable cloud infrastructures, automated deployment pipelines, and migrations on AWS, Azure, and Google Cloud.",
    image: "/images/services/cloud_solutions.png",
    features: [
      { title: "Cloud Architecture Design", description: "Designing secure, cost-optimized network topologies." },
      { title: "CI/CD & GitOps DevOps", description: "Automated pipelines triggering instant quality testing and deployment." },
      { title: "Cloud Migrations", description: "Zero-downtime transfers of legacy workloads onto cloud providers." }
    ],
    technologies: ["AWS", "Azure", "GCP", "Terraform", "GitHub Actions", "Docker"],
    metrics: [
      { value: "30%+", label: "Hosting Bill Reduction" },
      { value: "Zero", label: "Downtime Migrations" }
    ]
  },
  "crm-consulting": {
    title: "CRM Consulting",
    slug: "crm-consulting",
    description: "Seamless deployment and custom integrations for Salesforce, HubSpot, and Zoho systems to power customer acquisition.",
    image: "/images/services/crm_consulting.png",
    features: [
      { title: "Salesforce Customization", description: "Tailoring Apex, Lightning Web Components, and automated workflows." },
      { title: "HubSpot Integrations", description: "Connecting marketing tools to custom databases and customer lists." },
      { title: "Zoho Business Automation", description: "Leveraging Deluge scripting to sync Zoho CRM with ERP software." }
    ],
    technologies: ["Salesforce", "HubSpot", "Zoho CRM", "Apex", "Deluge", "Zapier"],
    metrics: [
      { value: "45%", label: "Lead Tracking Efficiency" },
      { value: "10K+", label: "Automated Workflows Built" }
    ]
  },
  "api-dev-and-integration": {
    title: "API Dev & Integration",
    slug: "api-dev-and-integration",
    description: "Robust, secure, and clean custom web services and third-party integrations linking your system endpoints.",
    image: "/images/services/api_integration.png",
    features: [
      { title: "Custom API Development", description: "Designing secure RESTful and GraphQL endpoints for your products." },
      { title: "Legacy Integrations", description: "Connecting legacy systems with modern protocols and platforms." },
      { title: "API Gateway & Security", description: "Implementing JWT authentication, rate limiting, and analytics." }
    ],
    technologies: ["Node.js", "Express", "GraphQL", "FastAPI", "Kong", "OAuth 2.0"],
    metrics: [
      { value: "< 50ms", label: "Response Latency" },
      { value: "100%", label: "Secure Handshakes" }
    ]
  },
  "data-engineering": {
    title: "Data Engineering",
    slug: "data-engineering",
    description: "Highly automated data pipelines, real-time streaming ETL systems, and scalable data warehouses (Snowflake, BigQuery).",
    image: "/images/services/data_engineering.png",
    features: [
      { title: "Data Pipelines (ETL/ELT)", description: "Automated pipelines cleaning, transforming, and loading raw data." },
      { title: "Data Warehousing", description: "Structuring large data volumes in Snowflake, BigQuery, or Redshift." },
      { title: "Real-time Stream Intake", description: "Building low-latency intake streams using Apache Kafka or AWS Kinesis." }
    ],
    technologies: ["Apache Kafka", "Snowflake", "Google BigQuery", "dbt", "Airflow", "Python"],
    metrics: [
      { value: "10TB+", label: "Daily Data Processed" },
      { value: "100x", label: "Analytics Query Speedup" }
    ]
  },
  "cyber-security": {
    title: "Cyber Security",
    slug: "cyber-security",
    description: "Web/mobile penetration audits, vulnerability assessments, compliance alignments (GDPR, ISO 27001), and access setups.",
    image: "/images/services/cyber_security.png",
    features: [
      { title: "Penetration Audits", description: "Simulating ethical hacking attacks to identify vulnerabilities." },
      { title: "Security Compliance", description: "Aligning software setups with GDPR, HIPAA, and ISO 27001 policies." },
      { title: "Identity Access Setups", description: "Implementing strict Multi-Factor Authentication and Single Sign-On grids." }
    ],
    technologies: ["Kali Linux", "OWASP Top 10", "Okta", "Keycloak", "SSL/TLS", "SIEM Tools"],
    metrics: [
      { value: "100%", label: "Compliance Scorecard" },
      { value: "Zero", label: "Successful Intrusions" }
    ]
  }
};

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  return (
    <div className="relative min-h-screen bg-white text-slate-800 font-sans overflow-x-hidden selection:bg-teal-400 selection:text-black">
      {/* Dynamic particles background */}
      <ThreeBackground />
      
      {/* Global Navbar */}
      <Navbar />

      <main className="pt-32 pb-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Back button */}
          <Link
            href="/"
            prefetch={false}
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-brand-teal transition-colors mb-12 uppercase tracking-widest"
          >
            <ArrowLeft className="w-4 h-4" /> Back to home
          </Link>

          {/* Hero Segment */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-teal/10 bg-slate-50 text-brand-teal text-xs font-bold uppercase tracking-widest">
                <Activity className="w-3.5 h-3.5 text-brand-teal" /> Core Expertise
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight">
                {service.title}
              </h1>
              <p className="text-slate-500 font-light text-base md:text-lg leading-relaxed max-w-xl">
                {service.description}
              </p>
              
              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  prefetch={false}
                  className="px-8 py-4 bg-brand-teal text-white hover:bg-brand-teal-hover text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-300 shadow-lg text-center"
                >
                  Request Consultation
                </Link>
              </div>
            </div>

            {/* Hero Right Visual */}
            <div className="lg:col-span-5 flex justify-center items-center relative">
              <div className="absolute w-72 h-72 rounded-full bg-slate-100/50 blur-[50px] pointer-events-none" />
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 z-10 drop-shadow-[0_20px_40px_rgba(6,67,84,0.15)] animate-[bounce_6s_infinite_ease-in-out]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-contain rounded-2xl"
                />
              </div>
            </div>
          </div>

          {/* Metrics Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {service.metrics.map((metric, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-100 rounded-3xl p-8 text-center shadow-sm">
                <span className="text-3xl sm:text-4xl font-extrabold text-brand-teal block mb-1">
                  {metric.value}
                </span>
                <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                  {metric.label}
                </span>
              </div>
            ))}
            <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 text-center shadow-sm sm:col-span-2 lg:col-span-2 flex items-center justify-center gap-3">
              <ShieldCheck className="w-5 h-5 text-brand-teal shrink-0" />
              <span className="text-xs uppercase font-bold text-slate-650 tracking-wider">
                Enterprise SLA Protected Delivery
              </span>
            </div>
          </div>

          {/* Capabilities Grid */}
          <div className="mb-24">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-12">
              Specific Capabilities & Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {service.features.map((feature, idx) => (
                <div key={idx} className="bg-white border border-slate-100 rounded-3xl p-8 hover:shadow-lg transition-all duration-300">
                  <div className="p-3 bg-slate-50 rounded-2xl w-fit mb-6">
                    <CheckCircle2 className="w-5 h-5 text-brand-teal" />
                  </div>
                  <h3 className="text-base font-bold text-slate-800 tracking-wide mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-light leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technology stack segment */}
          <div className="bg-slate-50 border border-slate-100 rounded-[2.5rem] p-8 sm:p-12 md:p-16 mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-[10px] font-bold text-brand-teal uppercase tracking-widest block">
                  SYSTEM TOOLING
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Technologies We Leverage
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm font-light leading-relaxed">
                  We use modern programming languages, framework stacks, and cloud native operations to ensure maximum scalability, developer velocity, and platform stability.
                </p>
              </div>

              <div className="lg:col-span-6 flex flex-wrap gap-3">
                {service.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-5 py-2.5 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-semibold tracking-wide shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Process Timeline */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-12 text-center">
              How We Deliver Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Discovery", desc: "Analyzing requirements, defining scopes, and designing the architecture roadmap." },
                { step: "02", title: "Sprint Plan", desc: "Setting up development staging, coding sprints, and integration maps." },
                { step: "03", title: "Automation QA", desc: "End-to-end continuous testing, secure code analysis, and staging feedback." },
                { step: "04", title: "Release & Scale", desc: "Cloud deployment, autoscaling configurations, and post-live monitoring." }
              ].map((proc, idx) => (
                <div key={idx} className="relative bg-white border border-slate-100 rounded-3xl p-8 flex flex-col justify-between shadow-sm">
                  <div>
                    <span className="text-3xl font-black text-slate-200 block mb-6">{proc.step}</span>
                    <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wide mb-2">
                      {proc.title}
                    </h4>
                    <p className="text-xs text-slate-400 font-light leading-relaxed">
                      {proc.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
