/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion } from "motion/react";
import { Sparkles, ArrowUpRight, CheckCircle2, ShieldCheck, Users, TrendingUp, TrendingDown, AlertTriangle } from "lucide-react";

interface HeroProps {
  onOpenDiagnosis: () => void;
}

export default function Hero({ onOpenDiagnosis }: HeroProps) {
  const [isAfter, setIsAfter] = useState(false);

  const handleScrollToPortfolio = () => {
    const element = document.getElementById("portfolio");
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
    <section 
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-28 pb-16 grid-bg"
      id="hero"
    >
      {/* Background glow radial */}
      <div className="absolute inset-0 glow-radial-green pointer-events-none" />

      {/* Futuristic absolute decorative glowing circles */}
      <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-neon-green/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 h-80 w-80 rounded-full bg-neon-green/3 blur-3xl pointer-events-none" />

      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Column Left: Text & Pitch */}
          <div className="lg:col-span-7 text-left space-y-8">
            
            {/* Upper Premium Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-neon-green/20 bg-neon-green/5 px-4 py-1.5 backdrop-blur-md"
              id="hero-badge"
            >
              <Sparkles className="h-3.5 w-3.5 text-neon-green animate-pulse" />
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-neon-green">
                Arquitetura Digital de Elite para Empresas
              </span>
            </motion.div>

            {/* Giant Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-sans text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl leading-none"
              id="hero-title"
            >
              Tecnologia que <br className="hidden sm:inline" />
              faz seu negócio <br />
              <span className="font-serif font-light italic text-neon-green relative">
                escala.
                {/* Underline decorative glow path */}
                <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-neon-green/30 blur-[1px]" />
              </span>
            </motion.h1>

            {/* Subtexts */}
            <div className="space-y-4 max-w-2xl">
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-sans text-lg font-medium text-gray-200 md:text-xl"
              >
                Sites Premium, Sistemas Personalizados e Automações desenvolvidos sob medida para o Amplo Mercado Corporativo.
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-base text-gray-400 leading-relaxed"
              >
                Transformamos processos operacionais lentos em plataformas digitais de alta performance que geram receita, integram equipes, automatizam tarefas repetitivas e profissionalizam a gestão da sua empresa.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4"
              id="hero-buttons-container"
            >
              <button
                onClick={onOpenDiagnosis}
                className="group relative flex items-center justify-center gap-2.5 rounded-full bg-neon-green px-8 py-4.5 text-sm font-bold text-black shadow-[0_0_25px_rgba(198,255,56,0.3)] hover:bg-white hover:shadow-[0_0_35px_rgba(198,255,56,0.5)] transition-all duration-300"
                id="hero-cta-main"
              >
                Solicitar Diagnóstico
                <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={handleScrollToPortfolio}
                className="group flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4.5 text-sm font-bold text-white hover:border-white/30 hover:bg-white/10 transition-all duration-300"
                id="hero-cta-secondary"
              >
                Ver Portfólio
              </button>
            </motion.div>

            {/* Social Proof / Security indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/5 pt-8 text-xs text-gray-500 font-mono"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-neon-green" />
                <span>CÓDIGO PROPRIETÁRIO DE ALTA PERFORMANCE</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-neon-green" />
                <span>INTEGRADO COM LGPD E SEGURANÇA MÁXIMA</span>
              </div>
            </motion.div>

          </div>

          {/* Column Right: Elegant Interactive Futuristic Graphic Card */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 50, damping: 20, delay: 0.2 }}
              className="relative mx-auto max-w-md"
            >
              {/* Radial glow background specifically behind card */}
              <div className="absolute inset-0 bg-neon-green/10 rounded-[32px] blur-2xl -z-10" />

              {/* Main card */}
              <div 
                className="glass-premium rounded-[32px] p-6 md:p-8 relative overflow-hidden"
                id="hero-interactive-dashboard"
              >
                {/* Tech style grid/dots inside card */}
                <div className="absolute right-4 top-4 font-mono text-[9px] text-gray-600 tracking-wider">
                  SYSTEM STATE: ACTIVE // AE-CORE.v1
                </div>

                {/* Dashboard top window controls */}
                <div className="flex items-center gap-1.5 mb-8">
                  <span className="h-2 w-2 rounded-full bg-red-500/60" />
                  <span className="h-2 w-2 rounded-full bg-yellow-500/60" />
                  <span className="h-2 w-2 rounded-full bg-neon-green/60" />
                </div>

                <div className="space-y-4">
                  {/* Scenario Toggle Buttons */}
                  <div className="flex rounded-xl bg-white/5 p-1 border border-white/10" id="scenario-toggle-container">
                    <button
                      onClick={() => setIsAfter(false)}
                      className={`flex-1 rounded-lg py-2.5 text-xs font-mono font-bold tracking-wider transition-all duration-300 flex items-center justify-center gap-1.5 ${
                        !isAfter 
                          ? "bg-red-500/20 text-red-400 border border-red-500/30 shadow-[0_0_15px_rgba(239,68,68,0.15)]" 
                          : "text-gray-400 hover:text-white"
                      }`}
                      id="btn-scenario-before"
                    >
                      <TrendingDown className="h-3.5 w-3.5" />
                      Antes da AEGIS
                    </button>
                    <button
                      onClick={() => setIsAfter(true)}
                      className={`flex-1 rounded-lg py-2.5 text-xs font-mono font-bold tracking-wider transition-all duration-300 flex items-center justify-center gap-1.5 ${
                        isAfter 
                          ? "bg-neon-green/20 text-neon-green border border-neon-green/30 shadow-[0_0_20px_rgba(198,255,56,0.25)]" 
                          : "text-gray-400 hover:text-white"
                      }`}
                      id="btn-scenario-after"
                    >
                      <TrendingUp className="h-3.5 w-3.5 animate-bounce" />
                      Depois da AEGIS
                    </button>
                  </div>

                  {/* Interactive Chart Container */}
                  <div className="relative rounded-2xl border border-white/5 bg-black/40 p-4 overflow-hidden" id="interactive-chart-box">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Resultado Real do Seu Negócio</span>
                      <span className={`font-mono text-xs font-bold px-2 py-0.5 rounded-full ${isAfter ? "bg-neon-green/10 text-neon-green" : "bg-red-500/10 text-red-400"}`}>
                        {isAfter ? "ESCALANDO // EFICIÊNCIA MÁXIMA" : "ESTAGNADO // CAOS OPERACIONAL"}
                      </span>
                    </div>

                    {/* Chart SVG */}
                    <div className="relative h-48 w-full">
                      <svg className="w-full h-full overflow-visible" viewBox="0 0 400 200" preserveAspectRatio="none">
                        <defs>
                          {/* Green Line Gradient */}
                          <linearGradient id="greenGlow" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#c6ff38" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="#c6ff38" stopOpacity="1" />
                          </linearGradient>
                          {/* Red Line Gradient */}
                          <linearGradient id="redGlow" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#ef4444" stopOpacity="0.1" />
                            <stop offset="100%" stopColor="#ef4444" stopOpacity="0.6" />
                          </linearGradient>
                        </defs>

                        {/* Coordinate Grid Lines */}
                        <g stroke="rgba(255,255,255,0.03)" strokeWidth="1">
                          <line x1="40" y1="30" x2="380" y2="30" />
                          <line x1="40" y1="75" x2="380" y2="75" />
                          <line x1="40" y1="120" x2="380" y2="120" />
                          <line x1="40" y1="165" x2="380" y2="165" />
                          
                          <line x1="120" y1="30" x2="120" y2="165" />
                          <line x1="200" y1="30" x2="200" y2="165" />
                          <line x1="280" y1="30" x2="280" y2="165" />
                        </g>

                        {/* Axes */}
                        <line x1="40" y1="20" x2="40" y2="175" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                        <line x1="30" y1="165" x2="390" y2="165" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />

                        {/* Axes Labels */}
                        <text x="15" y="25" fill="#6b7280" fontSize="8" fontFamily="monospace" transform="rotate(-90 15 25)" textAnchor="end">RESULTADOS</text>
                        <text x="385" y="182" fill="#6b7280" fontSize="8" fontFamily="monospace" textAnchor="end">TEMPO</text>

                        {/* BEFORE Curve (dashed red path) */}
                        <motion.path
                          d="M 40,150 Q 210,152 380,155"
                          fill="none"
                          stroke="url(#redGlow)"
                          strokeWidth="2"
                          strokeDasharray="4 4"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1 }}
                        />

                        {/* AFTER Curve (solid neon-green path with subtle glow) */}
                        <motion.path
                          d="M 40,150 Q 180,130 380,35"
                          fill="none"
                          stroke="url(#greenGlow)"
                          strokeWidth={isAfter ? "3.5" : "1.5"}
                          strokeOpacity={isAfter ? "1" : "0.3"}
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          style={{
                            filter: isAfter ? "drop-shadow(0px 0px 8px rgba(198,255,56,0.5))" : "none"
                          }}
                        />

                        {/* Floating "Você" Dot & Label that animates along coordinates */}
                        <motion.g
                          animate={{ 
                            x: isAfter ? 330 : 150, 
                            y: isAfter ? 55 : 151 
                          }}
                          transition={{ type: "spring", stiffness: 90, damping: 14 }}
                        >
                          {/* Ripple Circle */}
                          <motion.circle
                            r="15"
                            fill="none"
                            stroke={isAfter ? "#c6ff38" : "#ef4444"}
                            strokeWidth="1.5"
                            animate={{ scale: [1, 1.7, 1], opacity: [0.6, 0, 0.6] }}
                            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                          />
                          {/* Inner Circle */}
                          <circle
                            r="6.5"
                            fill={isAfter ? "#c6ff38" : "#ef4444"}
                            className="transition-colors duration-300"
                            style={{
                              filter: isAfter ? "drop-shadow(0px 0px 6px #c6ff38)" : "drop-shadow(0px 0px 4px #ef4444)"
                            }}
                          />
                          {/* Perfect positioning label inside SVG */}
                          <foreignObject
                            x="-50"
                            y="-40"
                            width="100"
                            height="35"
                            className="overflow-visible pointer-events-none"
                          >
                            <div className="flex flex-col items-center">
                              <span className={`rounded px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-widest shadow-lg ${
                                isAfter 
                                  ? "bg-neon-green text-black font-sans" 
                                  : "bg-red-500 text-white font-sans"
                              }`}>
                                Você
                              </span>
                              <div className={`h-1 w-1 rotate-45 -mt-[2px] ${
                                isAfter ? "bg-neon-green" : "bg-red-500"
                              }`} />
                            </div>
                          </foreignObject>
                        </motion.g>
                      </svg>
                    </div>
                  </div>

                  {/* Impact Explainer Box */}
                  <div className={`rounded-2xl p-4 border transition-all duration-500 ${
                    isAfter 
                      ? "border-neon-green/20 bg-neon-green/5 shadow-[inset_0_0_15px_rgba(198,255,56,0.05)]" 
                      : "border-red-500/10 bg-red-500/5 shadow-[inset_0_0_15px_rgba(239,68,68,0.02)]"
                  }`} id="impact-explainer-box">
                    {isAfter ? (
                      <div className="space-y-2.5">
                        <div className="flex items-center gap-2 text-neon-green">
                          <CheckCircle2 className="h-4 w-4 shrink-0" />
                          <span className="font-mono text-xs font-bold uppercase tracking-wider">Cenário com AEGIS: Sucesso Integrado</span>
                        </div>
                        <p className="text-xs text-gray-300 leading-relaxed">
                          Sua operação roda em piloto automático. Leads do WhatsApp e Instagram são filtrados e atendidos instantaneamente. Contratos são assinados em minutos de forma digital e o faturamento é gerado de forma recorrente sem esforço humano.
                        </p>
                        <div className="grid grid-cols-2 gap-2 pt-1 font-mono text-[9px] text-neon-green">
                          <div className="flex items-center gap-1 bg-white/5 px-2 py-1 rounded border border-white/5">
                            <span>● LEADS CAPTADOS:</span>
                            <span className="font-bold">+124%</span>
                          </div>
                          <div className="flex items-center gap-1 bg-white/5 px-2 py-1 rounded border border-white/5">
                            <span>● TEMPO ECONOMIZADO:</span>
                            <span className="font-bold">42h/mês</span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-2.5">
                        <div className="flex items-center gap-2 text-red-400">
                          <AlertTriangle className="h-4 w-4 shrink-0" />
                          <span className="font-mono text-xs font-bold uppercase tracking-wider">Cenário Sem AEGIS: Caos e Perda</span>
                        </div>
                        <p className="text-xs text-gray-400 leading-relaxed">
                          Sua equipe gasta horas em planilhas dispersas e redigitando dados. O atendimento de potenciais clientes no WhatsApp é demorado, fazendo você perder vendas. Cobranças financeiras manuais consomem tempo e elevam a inadimplência.
                        </p>
                        <div className="grid grid-cols-2 gap-2 pt-1 font-mono text-[9px] text-red-400">
                          <div className="flex items-center gap-1 bg-white/5 px-2 py-1 rounded border border-white/5">
                            <span>● LEADS PERDIDOS:</span>
                            <span className="font-bold">FALHA</span>
                          </div>
                          <div className="flex items-center gap-1 bg-white/5 px-2 py-1 rounded border border-white/5">
                            <span>● TRABALHO MANUAL:</span>
                            <span className="font-bold">EXCESSO</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Aesthetic footer detail inside the card */}
                <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4 text-[10px] text-gray-500 font-mono">
                  <span>AEGIS SUITE v3.5</span>
                  <span>ENCRYPTED SECURE SSL</span>
                </div>
              </div>

              {/* Floating micro accent cards for depth layout */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 hidden sm:flex items-center gap-2 rounded-2xl border border-white/10 bg-[#0c0c0cb0] px-4 py-2.5 backdrop-blur-md shadow-2xl"
              >
                <div className="h-2 w-2 rounded-full bg-neon-green animate-ping" />
                <span className="font-mono text-[10px] text-white">48h PROTÓTIPO INICIAL</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-2 rounded-2xl border border-white/10 bg-[#0c0c0cb0] px-4 py-2.5 backdrop-blur-md shadow-2xl"
              >
                <span className="text-neon-green font-bold">100%</span>
                <span className="font-mono text-[10px] text-gray-400">PERSONALIZADO</span>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
