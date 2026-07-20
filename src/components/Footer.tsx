/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Mail, Phone, MapPin, Instagram, Sparkles, Shield, ArrowUpRight } from "lucide-react";

interface FooterProps {
  onOpenDiagnosis: () => void;
}

export default function Footer({ onOpenDiagnosis }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (targetId: string) => {
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
    <footer className="relative bg-[#050505] pt-20 pb-12 border-t border-white/5" id="contact">
      
      {/* Absolute decorative glow bottom corners */}
      <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-neon-green/3 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12 pb-16 border-b border-white/5">
          
          {/* Logo & Pitch Column (Col-span 4) */}
          <div className="lg:col-span-4 space-y-6">
            <div 
              onClick={() => handleScrollTo("hero")}
              className="flex cursor-pointer items-center"
              id="footer-logo-container"
            >
              <img 
                src="https://i.imgur.com/wnyPjAe.png" 
                alt="Aegis Tech" 
                className="h-10 w-auto object-contain transition-transform duration-300 hover:scale-[1.03]"
                referrerPolicy="no-referrer"
              />
            </div>

            <p className="text-sm text-gray-400 leading-relaxed">
              Desenvolvemos sites institucionais de alto padrão, sistemas personalizados e automações inteligentes para que empresas e corporações ganhem eficiência, modernidade e escala comercial.
            </p>

            <div className="flex items-center gap-4">
              <a 
                href="https://www.instagram.com/weskley_gomezs/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400 hover:border-neon-green/40 hover:text-neon-green transition-all duration-300"
                aria-label="Instagram link"
                id="footer-social-instagram"
              >
                <Instagram className="h-4.5 w-4.5" />
              </a>
              <a 
                href="mailto:weskleygomez@gmail.com"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400 hover:border-neon-green/40 hover:text-neon-green transition-all duration-300"
                aria-label="Email link"
                id="footer-social-email"
              >
                <Mail className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Column (Col-span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-white">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button 
                  onClick={() => handleScrollTo("hero")}
                  className="text-gray-400 hover:text-neon-green transition-colors text-left"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollTo("about")}
                  className="text-gray-400 hover:text-neon-green transition-colors text-left"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollTo("solutions")}
                  className="text-gray-400 hover:text-neon-green transition-colors text-left"
                >
                  Soluções
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollTo("portfolio")}
                  className="text-gray-400 hover:text-neon-green transition-colors text-left"
                >
                  Portfólio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollTo("method")}
                  className="text-gray-400 hover:text-neon-green transition-colors text-left"
                >
                  Como Trabalhamos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollTo("testimonials")}
                  className="text-gray-400 hover:text-neon-green transition-colors text-left"
                >
                  Depoimentos
                </button>
              </li>
            </ul>
          </div>

          {/* Solutions Column (Col-span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-white">
              Serviços de Elite
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li className="hover:text-neon-green transition-colors cursor-default flex items-center gap-1.5">
                <span className="h-1 w-1 rounded-full bg-neon-green" />
                Sites Institucionais Premium
              </li>
              <li className="hover:text-neon-green transition-colors cursor-default flex items-center gap-1.5">
                <span className="h-1 w-1 rounded-full bg-neon-green" />
                Sistemas e ERPs Customizados
              </li>
              <li className="hover:text-neon-green transition-colors cursor-default flex items-center gap-1.5">
                <span className="h-1 w-1 rounded-full bg-neon-green" />
                Automações de Processo e Workflow
              </li>
              <li className="hover:text-neon-green transition-colors cursor-default flex items-center gap-1.5">
                <span className="h-1 w-1 rounded-full bg-neon-green" />
                Integrações com WhatsApp & CRM
              </li>
              <li className="hover:text-neon-green transition-colors cursor-default flex items-center gap-1.5">
                <span className="h-1 w-1 rounded-full bg-neon-green" />
                Módulo Faturamento & Cobrança
              </li>
            </ul>
          </div>

          {/* Contact Details Column (Col-span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-white">
              Atendimento e Sede
            </h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-neon-green shrink-0" />
                <span>Internet (Atendimento 100% Digital / Remoto)</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-neon-green shrink-0" />
                <a 
                  href="https://wa.me/5561996507712" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-neon-green transition-colors"
                >
                  +55 61 99650-7712
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-neon-green shrink-0" />
                <a 
                  href="mailto:weskleygomez@gmail.com" 
                  className="hover:text-neon-green transition-colors"
                >
                  weskleygomez@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright and Legal information Row */}
        <div className="mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 text-xs text-gray-500 font-mono">
          <div className="flex flex-col gap-1">
            <span>© {currentYear} AEGIS CODELAB LTDA. CNPJ: 65.015.827/0001-14</span>
            <span>Todos os direitos reservados.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-neon-green bg-neon-green/5 border border-neon-green/20 px-3 py-1 rounded-md">
              <Shield className="h-3 w-3" />
              SEGURANÇA SSL ATIVA
            </span>
            <span className="cursor-pointer hover:text-white transition-colors">Termos</span>
            <span className="cursor-pointer hover:text-white transition-colors">Privacidade</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
