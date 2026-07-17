/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Sparkles, ArrowRight } from "lucide-react";

interface CTAProps {
  onOpenDiagnosis: () => void;
}

export default function CTA({ onOpenDiagnosis }: CTAProps) {
  return (
    <section 
      className="relative py-20 bg-[#050505] overflow-hidden" 
      id="cta"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
        
        {/* Glowing Wide Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[40px] border border-neon-green/30 bg-[#070707] px-8 py-16 md:p-16 text-center overflow-hidden shadow-[0_0_50px_rgba(198,255,56,0.15)] grid-bg"
          id="cta-glow-panel"
        >
          {/* Radial blur specifically positioned in center for high impact glow behind text */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-64 bg-neon-green/10 rounded-full blur-3xl pointer-events-none" />

          {/* Abstract background particle indicators */}
          <div className="absolute top-10 left-10 h-32 w-32 rounded-full bg-neon-green/5 blur-2xl" />
          <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full bg-neon-green/5 blur-2xl" />

          <div className="relative z-10 max-w-4xl mx-auto space-y-8">
            
            {/* Badge Accent */}
            <div className="flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-neon-green/20 bg-neon-green/5 px-4.5 py-1.5 font-mono text-[10px] font-bold uppercase tracking-widest text-neon-green">
                <Sparkles className="h-3.5 w-3.5 animate-pulse text-neon-green" />
                DÊ O PRÓXIMO PASSO RUMO AO TOP-TIER DIGITAL
              </span>
            </div>

            {/* Title */}
            <h2 className="font-sans text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
              Sua empresa merece uma tecnologia à altura da <span className="font-serif italic text-neon-green font-light">grandeza do seu negócio.</span>
            </h2>

            {/* Description Paragraph */}
            <p className="text-base text-gray-300 max-w-2xl mx-auto leading-relaxed md:text-lg">
              Enquanto muitas marcas ainda trabalham com processos manuais, planilhas lentas e equipes sobrecarregadas, nossos clientes utilizam tecnologia integrada de elite para ganhar produtividade, profissionalismo de mercado e acelerar seus resultados de captação e faturamento.
            </p>

            {/* Huge CTA Button */}
            <div className="pt-4 flex justify-center">
              <button
                onClick={onOpenDiagnosis}
                className="group relative flex items-center gap-3.5 rounded-full bg-neon-green px-10 py-5 text-sm md:text-base font-bold text-black shadow-[0_0_30px_rgba(198,255,56,0.4)] hover:bg-white hover:shadow-[0_0_40px_rgba(198,255,56,0.6)] transition-all duration-300"
                id="btn-cta-huge-diagnostic"
              >
                Solicitar Diagnóstico Gratuito
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Sub-label under button */}
            <div className="pt-4 flex items-center justify-center gap-4 text-[10px] text-gray-500 font-mono uppercase tracking-widest">
              <span>✓ SEM COMPROMISSO</span>
              <span className="h-1 w-1 rounded-full bg-gray-500" />
              <span>✓ ANÁLISE COMPLETA EM ATÉ 48H</span>
              <span className="h-1 w-1 rounded-full bg-gray-500" />
              <span>✓ RELATÓRIO DO SITE ATUAL INCLUSO</span>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
