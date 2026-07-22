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
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-28 pb-16 grid-bg bg-white"
      id="hero"
    >
      {/* Background glow radial */}
      <div className="absolute inset-0 glow-radial-green pointer-events-none" />

      {/* Futuristic absolute decorative glowing circles */}
      <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-neon-green/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 h-80 w-80 rounded-full bg-neon-green/5 blur-3xl pointer-events-none" />

      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Column Left: Text & Pitch */}
          <div className="lg:col-span-7 text-left space-y-8">
            
            {/* Upper Premium Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 , filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-1.5 backdrop-blur-md"
              id="hero-badge"
            >
              <Sparkles className="h-3.5 w-3.5 text-neon-green animate-pulse" />
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-gray-700">
                Arquitetura Digital de Elite para Empresas
              </span>
            </motion.div>

            {/* Giant Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-sans text-4xl font-extrabold tracking-tight text-black sm:text-5xl md:text-6xl lg:text-7xl leading-none"
              id="hero-title"
            >
              Tecnologia que <br className="hidden sm:inline" />
              faz seu negócio <br />
              <span className="font-serif font-light italic text-neon-green relative">
                escalar.
                {/* Underline decorative glow path */}
                <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-neon-green/50 blur-[1px]" />
              </span>
            </motion.h1>

            {/* Subtexts */}
            <div className="space-y-4 max-w-2xl">
              <motion.h2
                initial={{ opacity: 0, y: 15 , filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-sans text-lg font-medium text-gray-700 md:text-xl"
              >
                Sites Profissionais, Sistemas Personalizados e Digitalização de Processos desenvolvidos sob medida.
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 15 , filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-base text-gray-600 leading-relaxed"
              >
                Transformamos fluxos operacionais complexos em plataformas digitais de alta performance que integram equipes, automatizam processos empresariais e organizam a gestão da sua empresa, sem mensalidades abusivas.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 , filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4"
              id="hero-buttons-container"
            >
              <button
                onClick={onOpenDiagnosis}
                className="group relative flex items-center justify-center gap-2.5 rounded-full bg-neon-green px-8 py-4.5 text-sm font-bold text-white shadow-sm hover:opacity-90 transition-all duration-300"
                id="hero-cta-main"
              >
                Solicitar Orçamento
                <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={handleScrollToPortfolio}
                className="group flex items-center justify-center gap-2 rounded-full border border-black bg-white px-8 py-4.5 text-sm font-bold text-black hover:bg-gray-50 transition-all duration-300"
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
              className="flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-gray-200 pt-8 text-xs text-gray-500 font-mono"
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
                className="glass-premium rounded-[32px] p-6 md:p-8 relative overflow-hidden border border-gray-200"
                id="hero-interactive-dashboard"
              >
                {/* Tech style grid/dots inside card */}
                <div className="absolute right-4 top-4 font-mono text-[9px] text-gray-400 tracking-wider">
                  SYSTEM STATE: ACTIVE // AE-CORE.v1
                </div>

                {/* Dashboard top window controls */}
                <div className="flex items-center gap-1.5 mb-8">
                  <span className="h-2 w-2 rounded-full bg-red-400" />
                  <span className="h-2 w-2 rounded-full bg-yellow-400" />
                  <span className="h-2 w-2 rounded-full bg-neon-green" />
                </div>

                <div className="space-y-4">
                  {/* Scenario Toggle Buttons */}
                  <div className="relative flex rounded-xl bg-gray-50 p-1 border border-gray-200 isolate" id="scenario-toggle-container">
                    <button
                      onClick={() => setIsAfter(false)}
                      className={`relative flex-1 rounded-lg py-2.5 text-xs font-mono font-bold tracking-wider transition-colors duration-300 flex items-center justify-center gap-1.5 z-10 ${
                        !isAfter 
                          ? "text-gray-900" 
                          : "text-gray-400 hover:text-gray-700"
                      }`}
                      id="btn-scenario-before"
                    >
                      <TrendingDown className="h-3.5 w-3.5" />
                      Antes da AEGIS
                      {!isAfter && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute inset-0 bg-white rounded-lg border border-gray-200 shadow-sm -z-10"
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                    </button>
                    <button
                      onClick={() => setIsAfter(true)}
                      className={`relative flex-1 rounded-lg py-2.5 text-xs font-mono font-bold tracking-wider transition-colors duration-300 flex items-center justify-center gap-1.5 z-10 ${
                        isAfter 
                          ? "text-neon-green" 
                          : "text-gray-400 hover:text-gray-700"
                      }`}
                      id="btn-scenario-after"
                    >
                      <TrendingUp className="h-3.5 w-3.5 text-neon-green" />
                      Depois da AEGIS
                      {isAfter && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute inset-0 bg-white rounded-lg border border-gray-200 shadow-sm -z-10"
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                    </button>
                  </div>

                  {/* Interactive Chart Container */}
                  <div className="relative rounded-2xl border border-gray-100 bg-white p-4 overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]" id="interactive-chart-box">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Resultado Real do Seu Negócio</span>
                      <span className={`font-mono text-xs font-bold px-2 py-0.5 rounded-full ${isAfter ? "bg-neon-green/20 text-neon-green" : "bg-red-50 text-red-500"}`}>
                        {isAfter ? "ESCALANDO // EFICIÊNCIA" : "ESTAGNADO // DESORGANIZADO"}
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
                        <g stroke="rgba(0,0,0,0.05)" strokeWidth="1">
                          <line x1="40" y1="30" x2="380" y2="30" />
                          <line x1="40" y1="75" x2="380" y2="75" />
                          <line x1="40" y1="120" x2="380" y2="120" />
                          <line x1="40" y1="165" x2="380" y2="165" />
                          
                          <line x1="120" y1="30" x2="120" y2="165" />
                          <line x1="200" y1="30" x2="200" y2="165" />
                          <line x1="280" y1="30" x2="280" y2="165" />
                        </g>

                        {/* Axes */}
                        <line x1="40" y1="20" x2="40" y2="175" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
                        <line x1="30" y1="165" x2="390" y2="165" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />

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
                      ? "border-neon-green/40 bg-neon-green/5" 
                      : "border-gray-200 bg-gray-50"
                  }`} id="impact-explainer-box">
                    {isAfter ? (
                      <div className="space-y-2.5">
                        <div className="flex items-center gap-2 text-neon-green">
                          <CheckCircle2 className="h-4 w-4 shrink-0" />
                          <span className="font-mono text-xs font-bold uppercase tracking-wider">Cenário com AEGIS: Gestão Integrada</span>
                        </div>
                        <p className="text-xs text-gray-700 leading-relaxed">
                          Os processos da sua empresa são centralizados e organizados. A gestão de operações ganha produtividade, a comunicação entre setores é simplificada e a equipe atinge máxima eficiência com menos esforço.
                        </p>
                        <div className="grid grid-cols-2 gap-2 pt-1 font-mono text-[9px] text-gray-800">
                          <div className="flex items-center gap-1 bg-white px-2 py-1 rounded border border-gray-200 shadow-sm">
                            <span className="text-gray-500">● PRODUTIVIDADE:</span>
                            <span className="font-bold">+124%</span>
                          </div>
                          <div className="flex items-center gap-1 bg-white px-2 py-1 rounded border border-gray-200 shadow-sm">
                            <span className="text-gray-500">● TEMPO LIVRE:</span>
                            <span className="font-bold">42h/mês</span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-2.5">
                        <div className="flex items-center gap-2 text-gray-600">
                          <AlertTriangle className="h-4 w-4 shrink-0" />
                          <span className="font-mono text-xs font-bold uppercase tracking-wider">Cenário Sem AEGIS: Processos Manuais</span>
                        </div>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          Sua equipe gasta horas em planilhas dispersas, sistemas que não conversam entre si e redigitando dados. Processos operacionais são demorados e a falta de integração causa ruídos e perda de informações.
                        </p>
                        <div className="grid grid-cols-2 gap-2 pt-1 font-mono text-[9px] text-gray-700">
                          <div className="flex items-center gap-1 bg-white px-2 py-1 rounded border border-gray-200">
                            <span className="text-gray-500">● INTEGRAÇÃO:</span>
                            <span className="font-bold">FALHA</span>
                          </div>
                          <div className="flex items-center gap-1 bg-white px-2 py-1 rounded border border-gray-200">
                            <span className="text-gray-500">● RETRABALHO:</span>
                            <span className="font-bold">ALTO</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Aesthetic footer detail inside the card */}
                <div className="mt-6 flex items-center justify-between border-t border-gray-200 pt-4 text-[10px] text-gray-400 font-mono">
                  <span>AEGIS SUITE v3.5</span>
                  <span>ENCRYPTED SECURE SSL</span>
                </div>
              </div>

              {/* Floating micro accent cards for depth layout */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 hidden sm:flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-4 py-2.5 shadow-lg"
              >
                <div className="h-2 w-2 rounded-full bg-neon-green animate-ping" />
                <span className="font-mono text-[10px] text-gray-800 font-medium">SOB MEDIDA</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-4 py-2.5 shadow-lg"
              >
                <span className="text-neon-green font-bold">100%</span>
                <span className="font-mono text-[10px] text-gray-600 font-medium">PERSONALIZADO</span>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
