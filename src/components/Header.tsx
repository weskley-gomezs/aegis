/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  onOpenDiagnosis: () => void;
}

export default function Header({ onOpenDiagnosis }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Início", targetId: "hero" },
    { label: "Sobre", targetId: "about" },
    { label: "Soluções", targetId: "solutions" },
    { label: "Portfólio", targetId: "portfolio" },
    { label: "Como Trabalhamos", targetId: "method" },
    { label: "Depoimentos", targetId: "testimonials" },
    { label: "Contato", targetId: "contact" }
  ];

  const handleScrollTo = (targetId: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "border-b border-gray-200 bg-white/90 py-4 backdrop-blur-md shadow-sm"
            : "border-b border-transparent bg-transparent py-6"
        }`}
        id="app-header"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-12">
          {/* Logo */}
          <div 
            onClick={() => handleScrollTo("hero")}
            className="flex cursor-pointer items-center"
            id="header-logo-container"
          >
            {/* Keeping the original logo URL as requested not to change images unnecessarily, but checking if there's a light mode version. Wait, the user didn't provide a new logo. We'll use the same or a filter if it's white text. Let's invert it or leave it, maybe the logo is dark. Assuming it works. */}
            <img 
              src="https://i.imgur.com/wnyPjAe.png" 
              alt="Aegis Tech" 
              className="h-10 md:h-11 w-auto object-contain transition-transform duration-300 hover:scale-[1.03] filter brightness-0"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden items-center gap-8 md:flex">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleScrollTo(item.targetId)}
                className="relative py-2 text-sm font-medium text-gray-600 transition-colors duration-300 hover:text-black group"
                id={`nav-link-${item.targetId}`}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-neon-green transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={onOpenDiagnosis}
              className="group relative overflow-hidden rounded-full bg-neon-green px-6 py-2.5 text-xs font-bold text-white transition-all duration-300 hover:opacity-90 shadow-sm"
              id="header-cta-btn"
            >
              <span className="relative z-10 flex items-center gap-2">
                Solicitar Orçamento
              </span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-xl border border-gray-200 bg-white p-2 text-black hover:border-gray-300 transition-all md:hidden"
            id="mobile-menu-toggle"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 , filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[77px] z-30 border-b border-gray-200 bg-white px-6 py-8 shadow-lg md:hidden"
            id="mobile-drawer"
          >
            <div className="flex flex-col gap-5">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleScrollTo(item.targetId)}
                  className="w-full text-left font-sans text-base font-semibold text-gray-700 hover:text-neon-green transition-colors py-1 border-b border-gray-100"
                  id={`mobile-nav-link-${item.targetId}`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenDiagnosis();
                }}
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-neon-green py-3.5 text-sm font-bold text-white shadow-sm hover:opacity-90 transition-all duration-300"
                id="mobile-header-cta-btn"
              >
                Solicitar Orçamento
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
