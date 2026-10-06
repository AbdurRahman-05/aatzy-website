import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  ArrowLeft, Users, Shield, Target, Leaf, Heart, Globe, Award, 
  MapPin, Radio, Calendar, Briefcase, ChevronRight, CheckCircle2 
} from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ThreeBackground from "@/components/ui/three-background";

export async function generateStaticParams() {
  return [
    { slug: "our-company" },
    { slug: "sustainability-esg" },
    { slug: "global-partnerships" },
    { slug: "awards-recognition" },
    { slug: "global-capability-centers" },
    { slug: "press-media-events" }
  ];
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function CompanyPage({ params }: PageProps) {
  const { slug } = await params;

  // Define metadata map
  const pageMeta: Record<string, {
    title: string;
    subtitle: string;
    badgeText: string;
    badgeIcon: React.ReactNode;
  }> = {
    "our-company": {
      title: "Our Company",
      subtitle: "Aatzy is a global digital consulting agency enabling enterprise scale via bleeding-edge software and AI innovations.",
      badgeText: "Corporate Vision",
      badgeIcon: <Target className="w-3.5 h-3.5 text-brand-teal" />
    },
    "sustainability-esg": {
      title: "Sustainability & ESG",
      subtitle: "We design and engineer eco-friendly server deployments, carbon-neutral compute nodes, and inclusive corporate environments.",
      badgeText: "Green Computing",
      badgeIcon: <Leaf className="w-3.5 h-3.5 text-emerald-500" />
    },
    "global-partnerships": {
      title: "Global Partnerships",
      subtitle: "Integrating top tier systems with Salesforce, AWS, Google Cloud, Shopify, HubSpot, Zoho, and Odoo.",
      badgeText: "Integration Partners",
      badgeIcon: <Globe className="w-3.5 h-3.5 text-brand-teal" />
    },
    "awards-recognition": {
      title: "Awards & Recognition",
      subtitle: "Recognized worldwide for software engineering compliance and project delivery achievements.",
      badgeText: "Trophy Wall",
      badgeIcon: <Award className="w-3.5 h-3.5 text-amber-500" />
    },
    "global-capability-centers": {
      title: "Global Capability Centers",
      subtitle: "Build dedicated global capability centers matching your development timelines and timezone needs.",
      badgeText: "Offshore Strategy",
      badgeIcon: <MapPin className="w-3.5 h-3.5 text-brand-teal" />
    },
    "press-media-events": {
      title: "Press & Media Events",
      subtitle: "Stay updated with corporate press releases, upcoming webinars, and event schedules.",
      badgeText: "Newsroom",
      badgeIcon: <Radio className="w-3.5 h-3.5 text-rose-500" />
    }
  };

  const currentMeta = pageMeta[slug];
  if (!currentMeta) {
    notFound();
  }

  // Render content based on slug
  const renderContent = () => {
    switch (slug) {
      case "our-company":
        return (
          <div className="space-y-24">
            {/* Detailed Company Overview */}
            <div className="bg-slate-50/50 border border-slate-100 rounded-[2.5rem] p-8 sm:p-12 md:p-16">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-slate-800 border-b border-slate-200 pb-2">Client Relationships</h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed">
                    At Aatzy Technologies, we believe in building and maintaining long-term relationships with all our clients. We are pioneers in solving complex challenges in web and software development, ensuring our experts handle your assigned projects prudently and with precision.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-slate-800 border-b border-slate-200 pb-2">Unique Brand Identity</h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed">
                    We completely understand your business domain and create custom web designs that align perfectly with your requirements, helping you stand apart from the crowd. Our designers craft experiences that fulfill your vision for unique brand recognition and identity.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-slate-800 border-b border-slate-200 pb-2">Global Excellence</h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed">
                    Our professional team is admired globally for thoroughly fulfilling our clients&apos; complex requirements. We endeavor to offer you the best-in-class solutions to achieve maximum satisfaction. We are masters in delivering effective software development, digital marketing, and strategic marketing solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Values Grid */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-12 text-center">
                Our Core Values
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { icon: <Users className="w-6 h-6 text-brand-teal" />, title: "Customer Obsession", desc: "Aligning every sprint, pixel, and query with client outcomes." },
                  { icon: <Target className="w-6 h-6 text-brand-teal" />, title: "Radical Innovation", desc: "Pushing limits of custom AI models and cloud architecture integrations." },
                  { icon: <Shield className="w-6 h-6 text-brand-teal" />, title: "Operational Integrity", desc: "Adhering to security compliances, zero-trust setups, and robust SLA." }
                ].map((val, idx) => (
                  <div key={idx} className="bg-slate-50/50 border border-slate-100 rounded-3xl p-8 hover:shadow-md transition-shadow">
                    <div className="p-3 bg-white rounded-2xl w-fit shadow-sm mb-6">{val.icon}</div>
                    <h3 className="text-base font-bold text-slate-800 mb-3">{val.title}</h3>
                    <p className="text-xs text-slate-500 font-light leading-relaxed">{val.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline Segment */}
            <div className="bg-slate-50 border border-slate-100 rounded-[2.5rem] p-8 sm:p-12 md:p-16">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-12 text-center">
                Our Journey
              </h2>
              <div className="relative border-l border-slate-200 ml-4 md:ml-32 space-y-12">
                {[
                  { year: "2022", title: "Aatzy Formed", desc: "Founded by a specialized group of systems architects to provide cloud migrations and integrations." },
                  { year: "2024", title: "Enterprise Scaling", desc: "Expanded core teams into bespoke AI models, fine-tuning LLMs, and high-concurrency ticket scaling." },
                  { year: "2026", title: "Global Delivery Grid", desc: "Running delivery networks across UK, India, and US. Trusted by enterprise networks." }
                ].map((milestone, idx) => (
                  <div key={idx} className="relative pl-8 md:pl-12">
                    <div className="absolute -left-3 top-1.5 w-6 h-6 rounded-full bg-brand-teal border-4 border-white shadow-sm flex items-center justify-center" />
                    <span className="md:absolute md:-left-28 md:top-1.5 text-base font-black text-brand-teal">{milestone.year}</span>
                    <h3 className="text-base font-bold text-slate-800 mb-2">{milestone.title}</h3>
                    <p className="text-xs text-slate-500 font-light leading-relaxed max-w-xl">{milestone.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case "sustainability-esg":
        return (
          <div className="space-y-24">
            {/* Green Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                { value: "100%", label: "Cloud Carbon Offset", desc: "All system node architectures deploy to carbon-neutral hosting grids." },
                { value: "40%+", label: "Inclusive Tech Talent", desc: "Proudly supporting diverse team setups and training programs." },
                { value: "98%", label: "Systems E-Waste Recycled", desc: "Proper compliance disposal and recycling of computer nodes." }
              ].map((metric, idx) => (
                <div key={idx} className="bg-white border border-slate-100 rounded-3xl p-8 text-center hover:shadow-md transition-shadow">
                  <span className="text-3xl sm:text-4xl font-extrabold text-brand-teal block mb-2">{metric.value}</span>
                  <span className="text-xs uppercase font-bold text-slate-700 tracking-wider block mb-3">{metric.label}</span>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">{metric.desc}</p>
                </div>
              ))}
            </div>

            {/* Circular Principles */}
            <div className="bg-emerald-50/30 border border-emerald-100/50 rounded-[2.5rem] p-8 sm:p-12 md:p-16">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-8">
                Our Green Code Manifesto
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs leading-relaxed text-slate-600 font-light">
                <p>
                  Optimizing algorithmic complexity doesn&apos;t just speed up applications—it directly curtails server CPU compute hours, cooling electricity, and overall server hardware degradation. We design algorithms to minimize computing load.
                </p>
                <p>
                  By partnering with green data warehouses, setting strict serverless cold-start timers, and leveraging local edge nodes, we reduce unnecessary network transmission load across regions.
                </p>
              </div>
            </div>
          </div>
        );

      case "global-partnerships":
        return (
          <div className="space-y-24">
            {/* Partners List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { 
                  title: "AWS Partner Network", 
                  desc: "Advanced AWS capabilities covering autoscaling EC2, serverless pipelines, and S3 secure lockers.",
                  logo: (
                    <svg viewBox="0 0 24 24" className="w-8 h-auto" fill="#FF9900" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167zM21.698 16.207c-2.626 1.94-6.442 2.969-9.722 2.969-4.598 0-8.74-1.7-11.87-4.526-.247-.223-.024-.527.272-.351 3.384 1.963 7.559 3.153 11.877 3.153 2.914 0 6.114-.607 9.06-1.852.439-.2.814.287.383.607zM22.792 14.961c-.336-.43-2.22-.207-3.074-.103-.255.032-.295-.192-.063-.36 1.5-1.053 3.967-.75 4.254-.399.287.36-.08 2.826-1.485 4.007-.215.184-.423.088-.327-.151.32-.79 1.03-2.57.695-2.994z" />
                    </svg>
                  )
                },
                { 
                  title: "Salesforce Network", 
                  desc: "Providing customized Apex dashboards, secure customer portals, and Zoho integrations.",
                  logo: (
                    <svg viewBox="0 0 24 24" className="w-8 h-auto" fill="#00A1E0" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.006 5.415a4.195 4.195 0 013.045-1.306c1.56 0 2.954.9 3.69 2.205.63-.3 1.35-.45 2.1-.45 2.85 0 5.159 2.34 5.159 5.22s-2.31 5.22-5.176 5.22c-.345 0-.69-.044-1.02-.104a3.75 3.75 0 01-3.3 1.95c-.6 0-1.155-.15-1.65-.375A4.314 4.314 0 018.88 20.4a4.302 4.302 0 01-4.05-2.82c-.27.062-.54.076-.825.076-2.204 0-4.005-1.8-4.005-4.05 0-1.5.811-2.805 2.01-3.51-.255-.57-.39-1.2-.39-1.846 0-2.58 2.1-4.65 4.65-4.65 1.53 0 2.85.705 3.72 1.8" />
                    </svg>
                  )
                },
                { 
                  title: "Google Cloud Ecosystem", 
                  desc: "Orchestrating GKE Kubernetes clusters and custom BigQuery data lakes.",
                  logo: (
                    <svg viewBox="0 0 24 24" className="w-6 h-auto" fill="#4285F4" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.19 2.38a9.344 9.344 0 0 0-9.234 6.893c.053-.02-.055.013 0 0-3.875 2.551-3.922 8.11-.247 10.941l.006-.007-.007.03a6.717 6.717 0 0 0 4.077 1.356h5.173l.03.03h5.192c6.687.053 9.376-8.605 3.835-12.35a9.365 9.365 0 0 0-2.821-4.552l-.043.043.006-.05A9.344 9.344 0 0 0 12.19 2.38zm-.358 4.146c1.244-.04 2.518.368 3.486 1.15a5.186 5.186 0 0 1 1.862 4.078v.518c3.53-.07 3.53 5.262 0 5.193h-5.193l-.008.009v-.04H6.785a2.59 2.59 0 0 1-1.067-.23h.001a2.597 2.597 0 1 1 3.437-3.437l3.013-3.012A6.747 6.747 0 0 0 8.11 8.24c.018-.01.04-.026.054-.023a5.186 5.186 0 0 1 3.67-1.69z" />
                    </svg>
                  )
                },
                { 
                  title: "HubSpot Certified Agency", 
                  desc: "Synchronizing modern sales hub automation pipelines with proprietary ERP databases.",
                  logo: (
                    <svg viewBox="0 0 24 24" className="w-6 h-auto" fill="#FF7A59" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.164 7.93V5.084a2.198 2.198 0 001.267-1.978v-.067A2.2 2.2 0 0017.238.845h-.067a2.2 2.2 0 00-2.193 2.193v.067a2.196 2.196 0 001.252 1.973l.013.006v2.852a6.22 6.22 0 00-2.969 1.31l.012-.01-7.828-6.095A2.497 2.497 0 104.3 4.656l-.012.006 7.697 5.991a6.176 6.176 0 00-1.038 3.446c0 1.343.425 2.588 1.147 3.607l-.013-.02-2.342 2.343a1.968 1.968 0 00-.58-.095h-.002a2.033 2.033 0 102.033 2.033 1.978 1.978 0 00-.1-.595l.005.014 2.317-2.317a6.247 6.247 0 104.782-11.134l-.036-.005zm-.964 9.378a3.206 3.206 0 113.215-3.207v.002a3.206 3.206 0 01-3.207 3.207z" />
                    </svg>
                  )
                }
              ].map((partner, idx) => (
                <div key={idx} className="bg-slate-50/50 border border-slate-100 rounded-3xl p-8 flex flex-col justify-between hover:shadow-md transition-shadow">
                  <div>
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-white border border-slate-100 shadow-sm mb-6 shrink-0">
                      {partner.logo}
                    </div>
                    <h3 className="font-bold text-base text-slate-800 mb-3">{partner.title}</h3>
                    <p className="text-xs text-slate-500 font-light leading-relaxed">{partner.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "awards-recognition":
        return (
          <div className="space-y-24">
            {/* Awards Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { award: "Gold Stevie Winner", issuer: "Stevie Tech Awards", year: "2025", desc: "Recognized for AI Custom Agents and automation pipeline architectures." },
                { award: "Leading Devs Band", issuer: "Clutch Global Awards", year: "2025", desc: "Honored for outstanding customer delivery scorecards." },
                { award: "Leader Band Rank", issuer: "GoodFirms Rankings", year: "2024", desc: "Voted top responsive web design developer in European sectors." }
              ].map((aw, idx) => (
                <div key={idx} className="bg-white border border-slate-100 rounded-3xl p-8 hover:shadow-lg transition-all duration-300">
                  <span className="text-[10px] font-bold text-brand-teal uppercase tracking-widest block mb-2">{aw.issuer} • {aw.year}</span>
                  <h3 className="font-bold text-base text-slate-800 mb-4">{aw.award}</h3>
                  <p className="text-xs text-slate-500 font-light leading-relaxed">{aw.desc}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case "global-capability-centers":
        return (
          <div className="space-y-24">
            {/* GCC Highlights */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-50 border border-slate-100 rounded-[2.5rem] p-8 sm:p-12 md:p-16">
              <div className="lg:col-span-7 space-y-6">
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">Bespoke Talent Offshore Hubs</h3>
                <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed">
                  We specialize in setting up dedicated physical centers and network pipelines. Our service encompasses finding physical locations, setting up hardware systems, securing networks, and handling HR compliances.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {["Secure workspace bays", "Local legal setups", "Direct communications links", "Autoscaling engineer desks"].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Locations */}
              <div className="lg:col-span-5 space-y-4">
                <span className="text-[10px] font-bold text-brand-teal uppercase tracking-widest block">Operational Nodes</span>
                <div className="space-y-3">
                  {[
                    { city: "London, UK", desc: "Client communications & design coordination." },
                    { city: "Jaipur, India", desc: "Main software engineering & cloud execution." },
                    { city: "New York, US", desc: "Corporate accounts & strategy consulting." }
                  ].map((loc, idx) => (
                    <div key={idx} className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
                      <h4 className="font-bold text-xs text-slate-800">{loc.city}</h4>
                      <p className="text-[10px] text-slate-400 font-light mt-1">{loc.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case "press-media-events":
        return (
          <div className="space-y-24">
            {/* News and Events */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Press Releases */}
              <div className="space-y-6">
                <h3 className="font-bold text-lg text-slate-800 border-b border-slate-100 pb-2 flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-brand-teal" /> Press Releases
                </h3>
                {[
                  { date: "May 2026", title: "Aatzy Launches Headless E-Commerce Suite", desc: "Introducing lightning fast Next.js store integration connected to Shopify Plus API." },
                  { date: "April 2026", title: "CEO Abdur Rahman Speaks at London AI Summit", desc: "Discussion points covering specialized model training, token safety, and ESG." }
                ].map((item, idx) => (
                  <div key={idx} className="bg-slate-50 border border-slate-100 rounded-2xl p-6 shadow-sm">
                    <span className="text-[9px] font-bold text-slate-400 block mb-1">{item.date}</span>
                    <h4 className="font-bold text-xs sm:text-sm text-slate-800 mb-2">{item.title}</h4>
                    <p className="text-xs text-slate-500 font-light leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Event Schedule */}
              <div className="space-y-6">
                <h3 className="font-bold text-lg text-slate-800 border-b border-slate-100 pb-2 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-brand-teal" /> Event Schedule
                </h3>
                {[
                  { time: "June 2026", event: "Bespoke AI Agents Webinar Series", desc: "Learn to architect customer agents, fine-tune models, and deploy secure instances." },
                  { time: "July 2026", event: "Cloud Auto-scaling Developer Meetup", desc: "A practical developer meet focused on Terraform setups and zero-downtime updates." }
                ].map((item, idx) => (
                  <div key={idx} className="bg-slate-50 border border-slate-100 rounded-2xl p-6 shadow-sm">
                    <span className="text-[9px] font-bold text-slate-400 block mb-1">{item.time}</span>
                    <h4 className="font-bold text-xs sm:text-sm text-slate-800 mb-2">{item.event}</h4>
                    <p className="text-xs text-slate-500 font-light leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      default:
        notFound();
    }
  };

  return (
    <div className="relative min-h-screen bg-white text-slate-800 font-sans overflow-x-hidden selection:bg-teal-400 selection:text-black">
      {/* Particles background */}
      <ThreeBackground />
      
      {/* Navbar */}
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

          {/* Reusable Split Hero with Image Banner */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-teal-500/10 bg-slate-50 text-brand-teal text-xs font-bold uppercase tracking-widest shadow-sm">
                {currentMeta.badgeIcon}
                {currentMeta.badgeText}
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 leading-tight tracking-tight animate-fade-in-up">
                {currentMeta.title}
              </h1>
              <p className="text-slate-500 font-light text-base md:text-lg leading-relaxed">
                {currentMeta.subtitle}
              </p>
            </div>
            <div className="lg:col-span-5 relative group">
              <div className="absolute inset-0 bg-brand-teal/10 rounded-[2.5rem] blur-2xl group-hover:bg-brand-teal/15 transition-all duration-500 -z-10 animate-pulse" />
              <div className="border border-slate-100 rounded-[2.5rem] overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 p-2">
                <div className="rounded-[2rem] overflow-hidden">
                  <img
                    src={`/images/company/${slug}.png`}
                    alt={currentMeta.title}
                    className="w-full h-auto object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Dynamic Content */}
          {renderContent()}

        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
