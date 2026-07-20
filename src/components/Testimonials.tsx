/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Star, Quote, Building } from "lucide-react";
import { Testimonial } from "../types";

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: "colegio-reacao",
      name: "Diretoria Pedagógica",
      role: "Gestão Acadêmica",
      companyName: "Colégio Reação",
      text: "A Aegis desenvolveu não apenas o nosso site institucional, mas um ecossistema completo de gestão. Hoje controlamos desde ordens de serviço e chamados técnicos até a gestão de funcionários e inventário de equipamentos. A plataforma unificou processos que antes eram dispersos, trazendo uma eficiência operacional que nunca tivemos.",
      rating: 5
    },
    {
      id: "dl-magic-paper",
      name: "Proprietário",
      role: "Direção Geral",
      companyName: "DL MAGIC PAPER",
      text: "Nosso site estilo catálogo transformou a forma como apresentamos nossos produtos. O painel administrativo é extremamente intuitivo, permitindo que nossa equipe atualize o estoque e as coleções em tempo real. É a ferramenta perfeita para quem busca profissionalismo e agilidade nas vendas digitais.",
      rating: 5
    }
  ];

  return (
    <section 
      className="relative py-24 bg-[#050505] overflow-hidden border-t border-white/5" 
      id="testimonials"
    >
      {/* Visual background accents */}
      <div className="absolute right-12 top-12 h-64 w-64 rounded-full bg-neon-green/3 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20 text-center max-w-3xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-widest text-neon-green font-bold block mb-4">
            DEPOIMENTOS REAIS
          </span>
          <h2 className="font-sans text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            Cases que confiam na <span className="font-serif italic text-neon-green font-light">nossa engenharia</span>
          </h2>
          <p className="mt-4 text-base text-gray-400">
            Mais do que clientes, construímos parcerias de longo prazo baseadas em tecnologia de ponta e resultados práticos para o dia a dia da sua empresa.
          </p>
        </div>

        {/* Testimonials Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto" id="testimonials-grid">
          {testimonials.map((test, index) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-3xl border border-white/5 bg-white/[0.01] p-8 hover:border-neon-green/20 hover:bg-white/[0.02] transition-all duration-300 flex flex-col justify-between"
              id={`testimonial-card-${test.id}`}
            >
              {/* Quote Mark Icon */}
              <div className="absolute top-6 right-8 text-white/[0.02] group-hover:text-neon-green/[0.02] transition-colors pointer-events-none">
                <Quote className="h-16 w-16 stroke-[1.5]" />
              </div>

              <div className="space-y-6">
                {/* Five Stars Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-neon-green text-neon-green" />
                  ))}
                </div>

                {/* Testimonial Quote */}
                <p className="text-sm text-gray-300 leading-relaxed italic relative">
                  "{test.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/5 text-neon-green border border-white/10">
                  <Building className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-sans text-sm font-bold text-white">
                    {test.name}
                  </h4>
                  <p className="text-xs text-gray-400">
                    {test.role}
                  </p>
                  <div className="mt-1 flex items-center gap-1 text-[10px] text-neon-green font-mono uppercase tracking-wider font-bold">
                    <span>{test.companyName}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
