/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { TrendingUp, MessageSquare, Laptop, GraduationCap, DollarSign, Zap } from "lucide-react";
import { Benefit } from "../types";

export default function WhyUs() {
  const benefits: Benefit[] = [
    {
      id: "matriculas",
      category: "Crescimento",
      title: "Mais Conversões & Vendas",
      description: "Funis de captação inteligentes integrados ao seu novo site premium, projetados para transformar visitantes em leads altamente qualificados e acelerar seu ciclo de fechamento comercial.",
      iconName: "TrendingUp"
    },
    {
      id: "atendimento",
      category: "Automatização",
      title: "Atendimento Automatizado",
      description: "Triagem inteligente no WhatsApp respondendo dúvidas frequentes de clientes, qualificando oportunidades de forma imediata e roteando leads quentes direto para seus vendedores.",
      iconName: "MessageSquare"
    },
    {
      id: "sistemas",
      category: "Customização",
      title: "Sistemas Sob Medida",
      description: "Esqueça soluções rígidas que forçam sua empresa a mudar de processos. Desenvolvemos ERPs, CRMs e plataformas sob medida que se adaptam perfeitamente à sua regra de negócio.",
      iconName: "Laptop"
    },
    {
      id: "aluno",
      category: "Experiência",
      title: "Portais do Cliente & Parceiro",
      description: "Uma experiência digital completa e rápida para seus clientes consultarem andamento de projetos, realizarem onboarding de serviços e acessarem relatórios em tempo real.",
      iconName: "GraduationCap"
    },
    {
      id: "financeiro",
      category: "Tesouraria",
      title: "Cobrança & Faturamento Auto",
      description: "Geração de faturamento automático via Boleto e Pix com régua de cobrança inteligente no WhatsApp, reduzindo a inadimplência e o trabalho manual do seu financeiro.",
      iconName: "DollarSign"
    },
    {
      id: "gestao",
      category: "Produtividade",
      title: "Escala & Alta Performance",
      description: "Centralização de informações operacionais, automação de tarefas repetitivas e dashboards em tempo real para os tomadores de decisão acelerarem o crescimento.",
      iconName: "Zap"
    }
  ];

  const getIcon = (name: string) => {
    switch (name) {
      case "TrendingUp": return <TrendingUp className="h-6 w-6" />;
      case "MessageSquare": return <MessageSquare className="h-6 w-6" />;
      case "Laptop": return <Laptop className="h-6 w-6" />;
      case "GraduationCap": return <Laptop className="h-6 w-6" />; // Replace with Laptop for more corporate style
      case "DollarSign": return <DollarSign className="h-6 w-6" />;
      default: return <Zap className="h-6 w-6" />;
    }
  };

  return (
    <section 
      className="relative py-24 bg-[#050505] overflow-hidden" 
      id="why-us"
    >
      {/* Decorative vertical lines representing standard grid lines in high-end designs */}
      <div className="absolute inset-y-0 left-12 w-[1px] bg-white/[0.02] pointer-events-none hidden xl:block" />
      <div className="absolute inset-y-0 right-12 w-[1px] bg-white/[0.02] pointer-events-none hidden xl:block" />

      <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20 text-left max-w-3xl">
          <span className="font-mono text-xs uppercase tracking-widest text-neon-green font-bold block mb-4">
            DIFERENCIAIS EXCLUSIVOS
          </span>
          <h2 className="font-sans text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl leading-tight">
            Por que líderes e diretores de empresas escolhem <span className="font-serif italic text-neon-green font-light">nossa tecnologia?</span>
          </h2>
          <p className="mt-4 text-base text-gray-400">
            Nós não fazemos apenas programação comercial. Nós projetamos o futuro operacional e comercial da sua empresa, eliminando gargalos de equipe e liberando seu negócio para focar em faturamento e escala.
          </p>
        </div>

        {/* 6 Premium Cards Layout */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" id="why-us-grid">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative rounded-3xl border border-white/5 bg-white/[0.02] p-8 hover:border-neon-green/30 hover:bg-white/[0.03] transition-all duration-300 shadow-xl overflow-hidden cursor-default"
              id={`why-card-${benefit.id}`}
            >
              {/* Card top gradient glow, triggers on group-hover */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-neon-green/0 to-transparent group-hover:via-neon-green/60 transition-all duration-500" />
              
              <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-neon-green/0 blur-2xl group-hover:bg-neon-green/5 transition-all duration-500" />

              <div className="flex flex-col gap-6 h-full justify-between">
                <div>
                  {/* Category Indicator */}
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-gray-500 group-hover:text-neon-green transition-colors">
                    {benefit.category}
                  </span>

                  {/* Icon */}
                  <div className="mt-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-white border border-white/5 group-hover:bg-neon-green/10 group-hover:text-neon-green group-hover:border-neon-green/20 transition-all duration-300">
                    {getIcon(benefit.iconName)}
                  </div>

                  {/* Title */}
                  <h3 className="mt-6 font-sans text-lg font-bold text-white tracking-tight">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                {/* Subtle indicator bottom corner */}
                <div className="mt-4 flex justify-end">
                  <span className="font-mono text-xs text-white/5 group-hover:text-neon-green/30 transition-colors">
                    0{idx + 1}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
