/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "motion/react";
import { Sparkles, ArrowRight, Layers, ShieldCheck, HeartHandshake } from "lucide-react";
import { Metric } from "../types";

export default function Metrics() {
  const metrics: Metric[] = [
    {
      id: "personalizado",
      value: "100%",
      label: "Exclusividade",
      description: "Nossos sistemas e sites são desenvolvidos do zero, alinhados à identidade e regras de negócio específicas da sua empresa."
    },
    {
      id: "prototipo",
      value: "48h",
      label: "Velocidade",
      description: "Entregamos uma demonstração visual interativa do seu novo site e portal para validação antes de escrever qualquer código."
    },
    {
      id: "suporte",
      value: "24/7",
      label: "Disponibilidade",
      description: "Oferecemos monitoramento constante de servidores e suporte prioritário a qualquer hora do dia ou da noite para urgências."
    },
    {
      id: "integracao",
      value: "∞",
      label: "Integrações",
      description: "Conectamos nossa arquitetura com qualquer software acadêmico, contábil, CRM ou banco de dados legado em uso."
    }
  ];

  return (
    <section 
      className="relative py-20 bg-[#050505] overflow-hidden border-t border-white/5" 
      id="metrics"
    >
      {/* Background neon dots or grids */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
        
        {/* Core stats grid container */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4" id="metrics-grid">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-3xl border border-white/5 bg-[#000000]/40 p-8 hover:border-neon-green/30 hover:bg-white/[0.01] transition-all duration-300 shadow-xl overflow-hidden cursor-default"
              id={`metric-box-${metric.id}`}
            >
              {/* Highlight green glow inside card */}
              <div className="absolute -left-12 -bottom-12 h-24 w-24 rounded-full bg-neon-green/0 blur-xl group-hover:bg-neon-green/5 transition-all duration-500" />

              <div className="flex flex-col justify-between h-full space-y-6">
                <div>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-gray-500 group-hover:text-neon-green transition-colors">
                    {metric.label}
                  </span>
                  
                  {/* Big Number Accent */}
                  <div className="mt-4 font-sans text-5xl md:text-6xl font-extrabold text-white tracking-tight group-hover:text-neon-green transition-colors">
                    {metric.value}
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-sans text-sm font-semibold text-white">
                    {metric.id === "personalizado" && "Projetos Personalizados"}
                    {metric.id === "prototipo" && "Protótipo Inicial"}
                    {metric.id === "suporte" && "Suporte Assistido"}
                    {metric.id === "integracao" && "Possibilidades Integradas"}
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {metric.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
