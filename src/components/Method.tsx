/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { MethodStep } from "../types";

export default function Method() {
  const steps: MethodStep[] = [
    {
      id: "diagnostico",
      stepNumber: "01",
      title: "Diagnóstico Completo",
      description: "Analisamos detalhadamente a rotina operacional da sua empresa, mapeamos processos manuais repetitivos e identificamos oportunidades de captação de leads e geração de receita."
    },
    {
      id: "planejamento",
      stepNumber: "02",
      title: "Planejamento Estratégico",
      description: "Desenhamos a arquitetura ideal do banco de dados, mapeamos a jornada de atendimento no WhatsApp Hub e estabelecemos as integrações necessárias via APIs."
    },
    {
      id: "prototipo",
      stepNumber: "03",
      title: "Protótipo em 48h",
      description: "Apresentamos uma simulação visual de alta fidelidade das telas do novo site ou sistema. Os diretores e gestores do projeto podem navegar, sugerir ajustes e validar a usabilidade antes do código."
    },
    {
      id: "desenvolvimento",
      stepNumber: "04",
      title: "Engenharia de Elite",
      description: "Nossos programadores escrevem código limpo, rápido e proprietário usando as tecnologias mais robustas do mercado (React, Vite, Node). Sua empresa ganha um ativo tecnológico durável."
    },
    {
      id: "implantacao",
      stepNumber: "05",
      title: "Implantação Assistida",
      description: "Configuramos o ecossistema na nuvem de forma segura, conduzimos sessões de treinamento prático com seus colaboradores e acompanhamos as primeiras operações realizadas."
    },
    {
      id: "suporte",
      stepNumber: "06",
      title: "Suporte Proativo",
      description: "Monitoramos preventivamente seus servidores contra instabilidades, implementamos atualizações automáticas de segurança e oferecemos atendimento imediato em qualquer dia da semana."
    }
  ];

  return (
    <section 
      className="relative py-24 bg-white overflow-hidden border-t border-gray-200" 
      id="method"
    >
      <div className="absolute inset-0 glow-radial-green pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-widest text-neon-green font-bold block mb-4">
            COMO TRABALHAMOS
          </span>
          <h2 className="font-sans text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Método Aegis: da concepção ao <span className="font-serif italic text-neon-green font-light">sucesso operacional</span>
          </h2>
          <p className="mt-4 text-base text-gray-600">
            Nossa metodologia de engenharia minimiza o esforço da equipe gestora e elimina riscos de atrasos ou retrabalho. Você acompanha cada etapa em tempo real.
          </p>
        </div>

        {/* Timeline representation - Staggered horizontal/vertical cards with connected glow path lines */}
        <div className="relative" id="timeline-wrapper">
          {/* Central spine line for desktop */}
          <div className="absolute left-[50%] top-8 bottom-8 hidden lg:block w-[1px] bg-gradient-to-b from-neon-green/30 via-white/5 to-neon-green/30" />

          <motion.div 
            className="space-y-12 lg:space-y-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
            }}
          >
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={step.id} 
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                  id={`method-step-${step.id}`}
                >
                  {/* Left or Right card panel */}
                  <div className="w-full lg:w-[46%]">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      className="group glass rounded-3xl p-8 hover:border-neon-green/20 hover:bg-gray-50 transition-all duration-300 relative overflow-hidden border border-gray-200"
                    >
                      {/* Gradient outline indicators */}
                      <div className="absolute top-0 bottom-0 left-0 w-[3px] bg-white/10 group-hover:bg-neon-green transition-colors" />

                      <div className="flex items-start gap-5">
                        <span className="font-mono text-3xl font-extrabold text-gray-900/10 group-hover:text-neon-green/40 transition-colors leading-none shrink-0 mt-1">
                          {step.stepNumber}
                        </span>
                        <div>
                          <h3 className="font-sans text-xl font-bold text-gray-900 group-hover:text-neon-green transition-colors">
                            {step.title}
                          </h3>
                          <p className="mt-3 text-sm text-gray-600 group-hover:text-gray-700 transition-colors leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Central Node representing bullet on timeline */}
                  <div className="relative flex items-center justify-center w-full lg:w-[8%] shrink-0 h-10 lg:h-auto">
                    <div className="relative flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white text-neon-green group shadow-md">
                      <span className="h-3.5 w-3.5 rounded-full bg-gray-300 group-hover:bg-neon-green transition-colors" />
                    </div>
                  </div>

                  {/* Spacer for symmetrical alignment on desktop */}
                  <div className="hidden lg:block lg:w-[46%]" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Security certification footer */}
        <div className="mt-20 flex flex-col items-center justify-center text-center">
          <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-5 py-2 text-xs text-gray-600 font-mono">
            <ShieldCheck className="h-4 w-4 text-neon-green" />
            <span>METODOLOGIA ALINHADA COM AS MELHORES PRÁTICAS ISO E LGPD</span>
          </div>
        </div>

      </div>
    </section>
  );
}
