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
      avatarSrc: "https://i.imgur.com/PYyzTAK.png",
      rating: 5
    },
    {
      id: "dl-magic-paper",
      name: "Proprietário",
      role: "Direção Geral",
      companyName: "DL MAGIC PAPER",
      text: "Nosso site estilo catálogo transformou a forma como apresentamos nossos produtos. O painel administrativo é extremamente intuitivo, permitindo que nossa equipe atualize o estoque e as coleções em tempo real. É a ferramenta perfeita para quem busca profissionalismo e agilidade nas vendas digitais.",
      avatarSrc: "https://i.imgur.com/fVtEcdv.png",
      rating: 5
    }
  ];

  return (
    <section 
      className="relative py-24 bg-white overflow-hidden border-t border-gray-200" 
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
          <h2 className="font-sans text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Cases que confiam na <span className="font-serif italic text-neon-green font-light">nossa engenharia</span>
          </h2>
          <p className="mt-4 text-base text-gray-600">
            Mais do que clientes, construímos parcerias de longo prazo baseadas em tecnologia de ponta e resultados práticos para o dia a dia da sua empresa.
          </p>
        </div>

        {/* Testimonials Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto" id="testimonials-grid">
          {testimonials.map((test, index) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 25 , filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0 , filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-3xl border border-gray-200 bg-gray-50 p-8 card-premium hover:border-neon-green/20 hover:bg-white transition-all btn-premium duration-300 flex flex-col justify-between"
              id={`testimonial-card-${test.id}`}
            >
              {/* Quote Mark Icon */}
              <div className="absolute top-6 right-8 text-gray-200 group-hover:text-neon-green/[0.02] transition-colors pointer-events-none">
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
                <p className="text-sm text-gray-700 leading-relaxed italic relative">
                  "{test.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-8 pt-6 border-t border-gray-200 flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gray-100 text-neon-green border border-gray-200 overflow-hidden">
                  {test.avatarSrc ? (
                    <img 
                      src={test.avatarSrc} 
                      alt={test.companyName} 
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-contain p-2"
                    />
                  ) : (
                    <Building className="h-6 w-6" />
                  )}
                </div>
                <div>
                  <h4 className="font-sans text-sm font-bold text-gray-900">
                    {test.name}
                  </h4>
                  <p className="text-xs text-gray-600">
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
