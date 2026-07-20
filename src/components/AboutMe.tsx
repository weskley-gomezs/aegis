/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Code2, Target, Lightbulb, CheckCircle2 } from "lucide-react";

export default function AboutMe() {
  const pillars = [
    {
      icon: Target,
      title: "Foco em Resultados",
      description: "Sistemas pensados para economia de tempo e redução de retrabalho."
    },
    {
      icon: Lightbulb,
      title: "Visão Estratégica",
      description: "Entendimento profundo do negócio antes de qualquer linha de código."
    },
    {
      icon: Code2,
      title: "Engenharia de Elite",
      description: "Soluções robustas, seguras e focadas em automação de processos."
    }
  ];

  return (
    <section className="relative py-24 bg-[#050505] overflow-hidden" id="about">
      {/* Background accents */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 h-[500px] w-[500px] rounded-full bg-neon-green/5 blur-[120px] pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Image Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 group">
              <img 
                src="https://i.imgur.com/rKcn3Gf.png" 
                alt="Weskley Gomes - Fundador da AEGIS" 
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10">
                <span className="font-mono text-[10px] text-neon-green font-bold uppercase tracking-[0.2em] block mb-1">FUNDADOR & CTO</span>
                <h3 className="font-sans text-xl font-bold text-white">Weskley Gomes</h3>
              </div>
            </div>

            {/* Geometric accents */}
            <div className="absolute -bottom-6 -right-6 h-32 w-32 border-b-2 border-r-2 border-neon-green/20 rounded-br-3xl pointer-events-none" />
          </motion.div>

          {/* Text Content Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <span className="font-mono text-xs font-bold text-neon-green uppercase tracking-widest mb-6 block">
              QUEM ESTÁ POR TRÁS DA ENGENHARIA
            </span>
            
            <h2 className="font-sans text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl mb-8 leading-[1.1]">
              Transformo processos em sistemas que fazem <span className="font-serif italic text-neon-green font-light">empresas crescerem.</span>
            </h2>

            <div className="space-y-6 text-gray-400 text-base md:text-lg leading-relaxed">
              <p>
                Sou <span className="text-white font-semibold">Weskley Gomes</span>, fundador da AEGIS, empresa especializada no desenvolvimento de sistemas personalizados, plataformas web e soluções digitais para empresas.
              </p>
              <p>
                Acredito que a tecnologia deve resolver problemas reais, e não apenas adicionar mais uma ferramenta à rotina de uma empresa. Por isso, antes de escrever qualquer linha de código, procuro entender como cada negócio funciona, quais desafios enfrenta e onde a tecnologia pode gerar mais eficiência.
              </p>
              <p>
                Ao longo dos meus projetos, desenvolvi soluções para diferentes segmentos, incluindo CRM, gestão escolar, controle operacional e catálogos digitais, sempre com foco em organização, produtividade e automação de processos.
              </p>
              <p className="text-white/90">
                Meu objetivo é criar sistemas que ajudem empresas a economizar tempo, reduzir retrabalho e ter mais controle sobre suas operações.
              </p>
            </div>

            {/* Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/5">
              {pillars.map((pillar, i) => (
                <div key={i} className="space-y-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neon-green/10 text-neon-green">
                    <pillar.icon className="h-5 w-5" />
                  </div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">{pillar.title}</h4>
                  <p className="text-[11px] text-gray-500 leading-normal">{pillar.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <div className="inline-flex items-center gap-2 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                <CheckCircle2 className="h-5 w-5 text-neon-green shrink-0" />
                <span className="text-sm text-gray-300 italic">
                  "Se sua empresa possui um desafio, provavelmente existe uma solução tecnológica capaz de resolvê-lo."
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
