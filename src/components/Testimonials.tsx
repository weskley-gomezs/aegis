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
      id: "alencar",
      name: "Dr. Roberto Alencar",
      role: "Diretor de Operações",
      companyName: "Vanguard Logística",
      text: "O sistema customizado da Aegis transformou nossa operação de forma inacreditável. Nossos motoristas e clientes agora assinam e acompanham ordens de serviço pelo celular em tempo real. Reduzimos o tempo de faturamento em 42% no primeiro mês letivo e zeramos falhas de preenchimento.",
      avatarSrc: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=120&h=120",
      rating: 5
    },
    {
      id: "mariana",
      name: "Dra. Mariana Souza",
      role: "CMO & Sócia-Diretora",
      companyName: "Nexus Incorporações",
      text: "Nosso novo portal institucional premium reposicionou nossa marca no mercado de alto padrão. O design é impecável e passa uma autoridade incrível. No primeiro semestre letivo pós-lançamento, tivemos um aumento de 54% nas leads altamente qualificadas vindas do site.",
      avatarSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120&h=120",
      rating: 5
    },
    {
      id: "ricardo",
      name: "Eng. Ricardo Mendes",
      role: "CTO & Co-fundador",
      companyName: "FinTech Vanguarda",
      text: "Tínhamos receio de contratar plataformas prontas porque nossas regras de faturamento e conciliação são altamente complexas. A Aegis desenhou um software sob medida integrado à nossa API contábil que funciona com 100% de estabilidade e agilidade operacional.",
      avatarSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=120&h=120",
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
            Aprovado por diretores e <span className="font-serif italic text-neon-green font-light">líderes do mercado</span>
          </h2>
          <p className="mt-4 text-base text-gray-400">
            A melhor resposta para a qualidade da nossa engenharia é a satisfação e os excelentes resultados comerciais das empresas parceiras que utilizam nossas plataformas diariamente.
          </p>
        </div>

        {/* Testimonials Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="testimonials-grid">
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
                <img
                  src={test.avatarSrc}
                  alt={test.name}
                  referrerPolicy="no-referrer"
                  className="h-12 w-12 rounded-full object-cover border border-white/10"
                />
                <div>
                  <h4 className="font-sans text-sm font-bold text-white">
                    {test.name}
                  </h4>
                  <p className="text-xs text-gray-400">
                    {test.role}
                  </p>
                  <div className="mt-1 flex items-center gap-1 text-[10px] text-neon-green font-mono uppercase tracking-wider">
                    <Building className="h-3 w-3 shrink-0" />
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
