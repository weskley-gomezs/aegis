/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, ArrowRight, X, ExternalLink, Globe } from "lucide-react";
import { Project } from "../types";

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: "sistenext",
      title: "SisteNext - CRM Avançado & Pipelines",
      category: "CRM & Vendas",
      description: "Plataforma avançada de relacionamento e CRM. Unifica canais de vendas, funis dinâmicos de conversão, automação de tarefas comerciais e relatórios analíticos integrados para acelerar resultados de equipes comerciais.",
      imageSrc: "https://i.imgur.com/NwRgPRA.png",
      projectLink: "https://sistenext.vercel.app/",
      features: [
        "Gestão visual de funis de vendas com arrastar-e-soltar e automações associadas",
        "Disparos automáticos e controle de conversas integradas para aumento de conversão",
        "Dashboards de Business Intelligence (BI) com metas e performance do time",
        "Controle de acesso com segurança granular em total conformidade com a LGPD"
      ]
    },
    {
      id: "brikscontrol",
      title: "BriksControl - Gestão de Alvenaria",
      category: "ERP de Engenharia & Construção",
      description: "Sistema avançado voltado para o controle, modulação e gestão logística/financeira de blocos (bricks) e materiais para obras de alvenaria estrutural de alta complexidade.",
      imageSrc: "https://i.imgur.com/REg92iR.png",
      projectLink: "https://brikscontrol.vercel.app/",
      features: [
        "Cálculo automático de modulação de blocos estruturais por pavimento",
        "Controle de estoque de materiais em tempo real com alertas de ressuprimento",
        "Cronograma financeiro integrado ao progresso físico da obra",
        "Interface responsiva otimizada para tablets e celulares em campo"
      ]
    },
    {
      id: "uraplanilha",
      title: "uRaplanilha - Gestão de Delivery",
      category: "Plataforma SaaS / Alimentos",
      description: "Painel intuitivo desenvolvido especialmente para iniciantes no setor de alimentação e delivery organizarem seu estoque, faturamento, pedidos e controle de insumos de forma simplificada.",
      imageSrc: "https://i.imgur.com/uAv39Fm.png",
      projectLink: "https://uraplanilha.vercel.app/",
      features: [
        "Lançamento simplificado de pedidos e controle rápido de fluxo de caixa diário",
        "Ficha técnica e precificação inteligente baseada no custo dos ingredientes",
        "Interface amigável que substitui planilhas de forma 100% amigável",
        "Suporte a relatórios mensais automáticos para análise de lucratividade rápida"
      ]
    },
    {
      id: "colegio-reacao-interno",
      title: "Colégio Reação - ERP de Gestão Interna",
      category: "Sistema Escolar Customizado",
      description: "Plataforma interna robusta desenvolvida para a equipe administrativa e pedagógica gerir matrículas, controle de presença, histórico acadêmico e gestão de mensalidades/inadimplência.",
      imageSrc: "https://i.imgur.com/Y6PaaNh.png",
      projectLink: "https://app.colegioreacao.com/",
      features: [
        "Módulo completo de controle acadêmico e notas integradas por disciplina",
        "Controle de adimplência escolar com régua de cobrança automática via e-mail e canais",
        "Área restrita de professores para lançamento de faltas e planos de aula",
        "Geração instantânea de contratos, declarações e relatórios pedagógicos"
      ]
    },
    {
      id: "colegio-reacao-site",
      title: "Colégio Reação - Portal Institucional",
      category: "Site Institucional Premium",
      description: "Portal completo e moderno do Colégio Reação. Focado em captação de novas matrículas, navegação fluida, acessibilidade extrema e integração direta com o sistema de atendimento e área do aluno.",
      imageSrc: "https://i.imgur.com/XfTP4SR.png",
      projectLink: "https://colegioreacao.com/",
      features: [
        "Design institucional altamente profissional e otimizado para celulares",
        "Área de agendamento de visitas presenciais integrado diretamente ao comercial",
        "Velocidade de carregamento extrema e SEO focado em buscas geolocalizadas",
        "Seção estruturada para apresentação dos diferenciais pedagógicos e atividades"
      ]
    },
    {
      id: "dl-magic-paper",
      title: "DL MAGIC PAPER - Catálogo Virtual",
      category: "E-commerce & Catálogo Digital",
      description: "Catálogo virtual refinado para a papelaria DL MAGIC PAPER. Conta com exibição de produtos em alta definição, categorização inteligente por coleções e envio de pedidos direto para o WhatsApp.",
      imageSrc: "https://i.imgur.com/GlQVG2t.png",
      projectLink: "https://dl-paper.vercel.app/",
      features: [
        "Catálogo interativo com filtros ultra-rápidos e busca instantânea de itens",
        "Carrinho de compras dinâmico integrado para finalização rápida no WhatsApp",
        "Layout focado na experiência visual e no apelo estético dos produtos",
        "Painel de atualização super ágil para cadastro de novos produtos e ofertas"
      ]
    }
  ];

  return (
    <section 
      className="relative py-24 bg-[#050505] overflow-hidden" 
      id="portfolio"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl text-left">
            <span className="font-mono text-xs uppercase tracking-widest text-neon-green font-bold block mb-4">
              PORTFÓLIO DE PROJETOS DE ELITE
            </span>
            <h2 className="font-sans text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
              Nossa tecnologia em <span className="font-serif italic text-neon-green font-light">operação real</span>
            </h2>
            <p className="mt-4 text-base text-gray-400">
              Conheça alguns dos ecossistemas digitais de alto nível desenvolvidos pela nossa equipe. Projetos que aliam requinte visual, engenharia segura e excelente retorno financeiro para as marcas.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-2 font-mono text-[10px] text-gray-500 uppercase tracking-widest border border-white/5 bg-white/[0.01] px-4 py-2 rounded-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-neon-green animate-pulse" />
            <span>RESULTADOS DE ALTA PERFORMANCE</span>
          </div>
        </div>

        {/* Big Premium Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="portfolio-grid">
          {projects.map((proj) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="group rounded-3xl border border-white/5 bg-white/[0.01] overflow-hidden hover:border-neon-green/30 hover:bg-white/[0.02] transition-all duration-300 flex flex-col justify-between"
              id={`portfolio-card-${proj.id}`}
            >
              <div>
                {/* Image Wrap */}
                <div className="relative aspect-video overflow-hidden border-b border-white/5 bg-black">
                  <img
                    src={proj.imageSrc}
                    alt={proj.title}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95 group-hover:brightness-100"
                  />
                  {/* Subtle glass overlay tag */}
                  <span className="absolute bottom-4 left-4 font-mono text-[10px] font-bold tracking-widest text-neon-green bg-[#050505]/80 backdrop-blur-md px-3 py-1 rounded-full border border-neon-green/20">
                    {proj.category}
                  </span>

                  {/* Direct Link External Overlay on hover */}
                  {proj.projectLink && (
                    <a
                      href={proj.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-lg bg-black/60 text-white border border-white/10 hover:bg-neon-green hover:text-black hover:border-neon-green transition-all duration-300 opacity-0 group-hover:opacity-100"
                      title="Acessar demonstração / site"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>

                {/* Info block */}
                <div className="p-6 md:p-8 space-y-4">
                  <h3 className="font-sans text-lg font-bold text-white tracking-tight leading-snug group-hover:text-neon-green transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">
                    {proj.description}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 md:p-8 pt-0 space-y-3">
                <button
                  onClick={() => setSelectedProject(proj)}
                  className="group/btn flex items-center justify-between w-full rounded-2xl border border-white/5 bg-white/5 px-5 py-4 text-xs font-bold text-white hover:border-neon-green/40 hover:bg-neon-green/5 transition-all duration-300"
                  id={`btn-portfolio-detail-${proj.id}`}
                >
                  <span>Ver Detalhes Técnicos</span>
                  <ArrowRight className="h-4 w-4 text-gray-500 group-hover/btn:text-neon-green group-hover/btn:translate-x-1 transition-all" />
                </button>

                {proj.projectLink && (
                  <a
                    href={proj.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full rounded-2xl border border-neon-green/10 bg-neon-green/[0.02] px-5 py-3 text-xs font-bold text-neon-green hover:bg-neon-green hover:text-black hover:border-neon-green transition-all duration-300"
                    id={`link-portfolio-visit-${proj.id}`}
                  >
                    <Globe className="h-3.5 w-3.5" />
                    Acessar Projeto Live
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Project Specifications Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
              id="spec-modal-overlay"
            />

            {/* Spec Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative z-10 w-full max-w-2xl rounded-3xl border border-neon-green/20 bg-[#0a0a0a] p-6 md:p-10 shadow-2xl overflow-hidden"
              id="spec-modal-panel"
            >
              {/* Closing Trigger */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 rounded-full border border-white/10 bg-white/5 p-2 text-gray-400 hover:border-neon-green/40 hover:text-white transition-all"
                id="btn-close-spec-modal"
              >
                <X className="h-5 w-5" />
              </button>

              <span className="font-mono text-[10px] font-bold text-neon-green uppercase tracking-widest mb-2 block">
                {selectedProject.category}
              </span>
              
              <h3 className="font-sans text-2xl font-bold tracking-tight text-white mb-4 pr-12 md:text-3xl">
                {selectedProject.title}
              </h3>

              <div className="mb-6 rounded-2xl overflow-hidden border border-white/5 aspect-video bg-black relative group">
                <img
                  src={selectedProject.imageSrc}
                  alt={selectedProject.title}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover"
                />
                {selectedProject.projectLink && (
                  <a
                    href={selectedProject.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    <span className="flex items-center gap-2 rounded-xl bg-neon-green px-5 py-3 text-xs font-bold text-black shadow-lg">
                      <Globe className="h-4 w-4" />
                      Visitar Sistema no Ar
                      <ExternalLink className="h-3.5 w-3.5" />
                    </span>
                  </a>
                )}
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-mono text-[10px] text-gray-500 uppercase tracking-widest mb-3">
                    Resultados e Engenharia Aplicada
                  </h4>
                  <div className="space-y-3">
                    {selectedProject.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm text-gray-300 leading-relaxed">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-neon-green/10 text-neon-green font-mono text-[10px] font-bold mt-0.5">
                          ✓
                        </span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-gray-500 font-mono">
                    <span className="h-1.5 w-1.5 rounded-full bg-neon-green" />
                    <span>ENTREGA COMPLETA E EXCLUSIVA</span>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center gap-3">
                    {selectedProject.projectLink && (
                      <a
                        href={selectedProject.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto flex items-center justify-center gap-1.5 rounded-xl border border-white/10 px-4 py-2.5 text-xs font-bold text-white hover:bg-white/5 transition-all"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        Acessar Demo
                      </a>
                    )}
                    <button
                      onClick={() => {
                        setSelectedProject(null);
                        // Trigger contact smooth scroll
                        const contactEl = document.getElementById("contact");
                        if (contactEl) {
                          contactEl.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      className="w-full sm:w-auto rounded-xl bg-neon-green px-5 py-2.5 text-xs font-bold text-black hover:bg-white transition-all duration-300"
                      id="btn-spec-interest"
                    >
                      Quero algo similar
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
