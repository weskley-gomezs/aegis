/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Sparkles, Globe, Cpu, Network, CheckCircle2 } from "lucide-react";

interface SolutionsProps {
  onOpenDiagnosis: () => void;
}

export default function Solutions({ onOpenDiagnosis }: SolutionsProps) {
  const solutions = [
    {
      id: "site",
      title: "Site Institucional Premium",
      subtitle: "A vitrine digital de elite da sua marca",
      description: "Mais do que um site bonito: uma plataforma institucional de carregamento instantâneo, projetada com técnicas avançadas de copywriting e SEO para atrair leads qualificados e posicionar sua empresa como líder incontestável de mercado.",
      icon: <Globe className="h-6 w-6 text-neon-green" />,
      bullets: [
        "Design 100% exclusivo, moderno e focado em alta conversão de leads",
        "Totalmente responsivo: navegação perfeita em celulares, tablets e computadores",
        "Otimização extrema para o Google (SEO) para liderar as buscas no seu nicho",
        "Performance ultra rápida (Core Web Vitals nota máxima)",
        "Painel Administrativo intuitivo para publicação ágil de serviços e notícias",
        "Vitrine de produtos, portfólio de projetos e cases de sucesso integrados"
      ],
      badge: "CONVERSÃO PREMIUM"
    },
    {
      id: "sistema",
      title: "Sistemas & SaaS Customizados",
      subtitle: "Sua operação operando em perfeita sincronia",
      description: "Desenvolvimento de softwares proprietários (CRMs, ERPs, Portais) desenhados especificamente para suprir as lacunas de sistemas engessados. Centralizamos e escalamos sua gestão sem taxas abusivas por usuário.",
      icon: <Cpu className="h-6 w-6 text-neon-green" />,
      bullets: [
        "Sistemas Web modernos, responsivos e escaláveis hospedados em nuvem",
        "Portais do Cliente de autoatendimento, onboarding e contratos",
        "Dashboards interativos de Business Intelligence (BI) em tempo real",
        "Módulos financeiros para cobranças recorrentes e conciliação automática",
        "Arquitetura de dados segura e conformidade rigorosa com a LGPD",
        "Integrações robustas via API com sistemas legados ou ERPs de mercado"
      ],
      badge: "CONTROLE MÁXIMO"
    },
    {
      id: "automacao",
      title: "Automação de Processos & WhatsApp Hub",
      subtitle: "Liberte sua equipe do trabalho manual repetitivo",
      description: "Integração de fluxos inteligentes e robôs de conversação que otimizam o suporte, eliminam erros de preenchimento manual e garantem que nenhum cliente ou lead fique sem retorno imediato.",
      icon: <Network className="h-6 w-6 text-neon-green" />,
      bullets: [
        "WhatsApp CRM integrado com múltiplos agentes e distribuição inteligente de leads",
        "Cobranças automáticas via WhatsApp e e-mail integradas ao Pix e Boleto",
        "Geração automática de propostas, relatórios e contratos em PDF",
        "Sincronização instantânea de bancos de dados, planilhas e ferramentas externas",
        "Notificações automáticas internas de vendas (Slack, WhatsApp, E-mail)",
        "Onboarding automatizado de novos clientes com assinatura digital de contratos"
      ],
      badge: "ESCALABILIDADE"
    }
  ];

  return (
    <section 
      className="relative py-24 bg-[#050505] overflow-hidden" 
      id="solutions"
    >
      {/* Background blur radial glow */}
      <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-neon-green/5 blur-3xl pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 h-96 w-96 rounded-full bg-neon-green/3 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
        
        {/* Section Title */}
        <div className="mb-16 md:mb-24 text-center max-w-3xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-widest text-neon-green font-bold block mb-4">
            NOSSAS SOLUÇÕES
          </span>
          <h2 className="font-sans text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            Soluções digitais <span className="font-serif italic text-neon-green font-light">sob medida</span> para sua empresa
          </h2>
          <p className="mt-4 text-base text-gray-400">
            Nossa equipe de engenharia desenvolve softwares de alto padrão estético e técnico. Unimos design de agência de elite com engenharia de software escalável de grande porte.
          </p>
        </div>

        {/* Big Cards Layout */}
        <div className="space-y-12" id="solutions-list">
          {solutions.map((sol, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={sol.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`glass-premium rounded-[32px] p-8 md:p-12 relative overflow-hidden transition-all duration-300 hover:border-neon-green/20 ${
                  isEven ? "" : ""
                }`}
                id={`sol-card-${sol.id}`}
              >
                {/* Background decorative visual line */}
                <div className="absolute top-0 bottom-0 left-0 w-[4px] bg-neon-green" />

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
                  
                  {/* Left part: Title & Description */}
                  <div className="lg:col-span-5 flex flex-col justify-between">
                    <div>
                      {/* Badge & Icon row */}
                      <div className="flex items-center gap-4 mb-6">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-neon-green/10 text-neon-green border border-neon-green/20 shadow-[0_0_15px_rgba(198,255,56,0.1)]">
                          {sol.icon}
                        </div>
                        <span className="font-mono text-[10px] font-bold tracking-widest text-neon-green bg-neon-green/10 border border-neon-green/20 px-3 py-1 rounded-full uppercase">
                          {sol.badge}
                        </span>
                      </div>

                      <h3 className="font-sans text-2xl font-bold tracking-tight text-white md:text-3xl">
                        {sol.title}
                      </h3>
                      
                      <p className="mt-2 text-sm font-semibold text-gray-300 font-mono">
                        {sol.subtitle}
                      </p>

                      <p className="mt-5 text-sm text-gray-400 leading-relaxed">
                        {sol.description}
                      </p>
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/5">
                      <button
                        onClick={onOpenDiagnosis}
                        className="group flex items-center gap-2 rounded-xl bg-neon-green px-5 py-3 text-xs font-bold text-black shadow-[0_0_15px_rgba(198,255,56,0.2)] hover:bg-white hover:shadow-[0_0_25px_rgba(198,255,56,0.4)] transition-all duration-300"
                        id={`btn-solution-cta-${sol.id}`}
                      >
                        Agendar Diagnóstico Grátis
                        <Sparkles className="h-3 w-3 text-black group-hover:scale-110 transition-transform" />
                      </button>
                    </div>
                  </div>

                  {/* Right part: Features Checklist Grid */}
                  <div className="lg:col-span-7 flex flex-col justify-center">
                    <div className="rounded-2xl border border-white/5 bg-[#000000]/20 p-6 md:p-8 space-y-4">
                      <h4 className="font-mono text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
                        O que está incluso na entrega
                      </h4>
                      
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {sol.bullets.map((bullet, idx) => (
                          <div 
                            key={idx} 
                            className="flex items-start gap-3 text-sm text-gray-300"
                          >
                            <CheckCircle2 className="h-4 w-4 text-neon-green shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{bullet}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
