/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import WhyUs from "./components/WhyUs";
import Solutions from "./components/Solutions";
import ProblemsSolved from "./components/ProblemsSolved";
import Portfolio from "./components/Portfolio";
import Method from "./components/Method";
import Metrics from "./components/Metrics";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import LeadModal from "./components/LeadModal";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import { Sparkles, ArrowUp } from "lucide-react";

export default function App() {
  const [isDiagnosisOpen, setIsDiagnosisOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress percentage
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      // Show scroll-to-top button
      setShowScrollTop(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="relative min-h-screen bg-[#050505] text-white selection:bg-neon-green selection:text-black">
      
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-white/5">
        <div 
          className="h-full bg-neon-green shadow-[0_0_10px_#C6FF38] transition-all duration-100"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Ambient Background Flares */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-gradient-to-b from-neon-green/5 to-transparent blur-[150px] pointer-events-none" />
      <div className="absolute top-[200vh] left-0 w-[40vw] h-[60vh] bg-gradient-to-r from-neon-green/3 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute top-[400vh] right-10 w-[45vw] h-[50vh] bg-gradient-to-l from-neon-green/4 to-transparent blur-[150px] pointer-events-none" />

      {/* Navigation Header */}
      <Header onOpenDiagnosis={() => setIsDiagnosisOpen(true)} />

      {/* Page Sections */}
      <main>
        {/* Hero Section */}
        <Hero onOpenDiagnosis={() => setIsDiagnosisOpen(true)} />

        {/* About the Founder Section */}
        <AboutMe />

        {/* Why Choose Us Section */}
        <WhyUs />

        {/* Services & Solutions Section */}
        <Solutions onOpenDiagnosis={() => setIsDiagnosisOpen(true)} />

        {/* Comparison Section (Old vs New) */}
        <ProblemsSolved />

        {/* Showcase Portfolio */}
        <Portfolio />

        {/* Execution Workflow Section */}
        <Method />

        {/* Dynamic Metric Numbers */}
        <Metrics />

        {/* Administrator Testimonials */}
        <Testimonials />

        {/* High-conversion call-to-action */}
        <CTA onOpenDiagnosis={() => setIsDiagnosisOpen(true)} />
      </main>

      {/* Sitemaps & Copyrights Footer */}
      <Footer onOpenDiagnosis={() => setIsDiagnosisOpen(true)} />

      {/* Integrated interactive Diagnostic Lead Modal */}
      <LeadModal 
        isOpen={isDiagnosisOpen} 
        onClose={() => setIsDiagnosisOpen(false)} 
      />

      {/* Floating WhatsApp Quick Action */}
      <FloatingWhatsApp />

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={handleScrollToTop}
          className="fixed bottom-24 right-9.5 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#0a0a0ab0] text-gray-400 backdrop-blur-md hover:border-neon-green/40 hover:text-neon-green shadow-xl transition-all duration-300"
          id="scroll-to-top-btn"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}

    </div>
  );
}

