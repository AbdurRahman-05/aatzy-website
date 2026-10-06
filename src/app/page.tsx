"use client";

import React from "react";
import LenisProvider from "@/components/lenis-provider";
import CursorGlow from "@/components/ui/cursor-glow";
import ThreeBackground from "@/components/ui/three-background";
import PageLoader from "@/components/ui/page-loader";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import PartnersCarousel from "@/components/partners-carousel";
import DrivingSuccess from "@/components/driving-success";
import VideoShowcase from "@/components/video-showcase";
import ServicesGrid from "@/components/services-grid";
import AiSolutions from "@/components/ai-solutions";
import AboutUs from "@/components/about-us";
import PromoBanner from "@/components/promo-banner";
import Achievements from "@/components/achievements";
import CaseStudies from "@/components/case-studies";
import Testimonials from "@/components/testimonials";
import FAQSection from "@/components/faq-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <LenisProvider>
      {/* Animated Fullscreen Page Entrance Loader */}
      <PageLoader />
      
      {/* Interactive Cursor Spotlight Glow */}
      <CursorGlow />
      
      <div className="relative min-h-screen bg-white text-slate-800 font-sans overflow-x-hidden selection:bg-teal-400 selection:text-black">
        {/* Subtle WebGL Particle field in background */}
        <ThreeBackground />
        
        {/* Global Navigation Header */}
        <Navbar />
        
        <main>
          {/* 1. Immersive Hero Section */}
          <Hero />

          {/* 2. Partners Sliding Logo Marquee */}
          <PartnersCarousel />
          
          {/* 3. Driving Success Metrics */}
          <DrivingSuccess />

          {/* 3.5. Video Showcase Product Demo */}
          <VideoShowcase />
          
          {/* 4. Capabilities / Services Grid */}
          <ServicesGrid />
          
          {/* 5. Custom AI Solutions Panel Tabs */}
          <AiSolutions />
          
          {/* 6. About Us Stats Dashboard */}
          <AboutUs />
          
          {/* 7. Techsquares Insights Promo Banner */}
          <PromoBanner />
          
          {/* 8. Partnerships & Awards Achievements */}
          <Achievements />

          {/* 9. Case Studies Slider */}
          <CaseStudies />
          
          {/* 10. Client Testimonials & Video Review */}
          <Testimonials />

          {/* 11. FAQ Section */}
          <FAQSection />
        </main>
        
        {/* Global Mega Footer */}
        <Footer />
      </div>
    </LenisProvider>
  );
}
