/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { AlertCircle, CheckCircle, ArrowRight, Ban, Check } from "lucide-react";
import { ProblemComparison } from "../types";

export default function ProblemsSolved() {
  const comparisons: ProblemComparison[] = [
    {
      id: "1",
      problem: "Atendimento lento de leads pelo WhatsApp, perdendo potenciais clientes para concorrentes.",
      solution: "Atendimento e triagem automatizada com roteamento inteligente de leads 24h por dia."
    },
    {
      id: "2",
      problem: "Planilhas confusas, faturamento em atraso e dados dispersos em múltiplas ferramentas.",
      solution: "Centralização e gestão unificada em dashboards administrativos e relatórios em tempo real."
    },
    {
      id: "3",
      problem: "Retrabalho administrativo de equipes, contratos manuais e lentidão no onboarding.",
      solution: "Fluxo de onboarding digital automatizado e assinatura eletrônica de contratos imediatos."
    },
    {
      id: "4",
      problem: "Cobranças financeiras manuais cansativas e taxa de inadimplência fora do controle operacional.",
      solution: "Automação com avisos de cobrança recorrente inteligentes via WhatsApp e faturas integradas."
    },
    {
      id: "5",
      problem: "Site institucional obsoleto, lento e incapaz de gerar autoridade ou capturar novas reuniões.",
      solution: "Site Premium de carregamento ultra-veloz focado em conversão e com design visual elegante."
    },
    {
      id: "6",
      problem: "Tempo excessivo de gerentes e diretores focado em tarefas de rotina manuais repetitivas.",
      solution: "Automação de fluxos e dados integrados, liberando o time para o que gera receita e escala."
    }
  ];

  return (
    <section 
      className="relative py-24 bg-white overflow-hidden border-t border-gray-200" 
      id="problems"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-3/4 bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20 text-center max-w-3xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-widest text-red-400 font-bold block mb-4">
            TRANSFORMAÇÃO PRÁTICA
          </span>
          <h2 className="font-sans text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            A ponte entre o caos operacional e a <span className="font-serif italic text-neon-green font-light">eficiência máxima</span>
          </h2>
          <p className="mt-4 text-base text-gray-600">
            Veja como substituímos processos empresariais manuais, demorados e estressantes por fluxos tecnológicos fluidos que otimizam o tempo da sua equipe e encantam seus clientes.
          </p>
        </div>

        {/* Comparative Side-by-Side Bento Grid / Flex Cards */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2" id="problems-comparison-container">
          
          {/* Left Block: Traditional Pain Points (❌) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-red-500/10 bg-gray-50 p-8 md:p-10 shadow-2xl relative overflow-hidden"
            id="traditional-chaos-block"
          >
            <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-red-500/5 blur-3xl" />
            
            <div className="flex items-center gap-3 mb-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10 text-red-400">
                <Ban className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-sans text-xl font-bold text-gray-900">Como é hoje (O Gargalo)</h3>
                <span className="font-mono text-[10px] text-red-400/80 uppercase tracking-wider">Processos manuais limitantes</span>
              </div>
            </div>

            <motion.div 
              className="space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
              }}
            >
              {comparisons.map((item, idx) => (
                <motion.div 
                  key={item.id}
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  whileHover={{ x: 5, backgroundColor: "rgba(239, 68, 68, 0.03)" }}
                  className="flex items-start gap-4 p-2 rounded-lg border-b border-transparent last:pb-0 transition-colors"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-500/10 text-red-400 font-mono text-xs font-bold shadow-sm">
                    ❌
                  </span>
                  <div>
                    <h4 className="font-sans text-sm font-semibold text-gray-700">
                      {idx + 1}. {item.problem.split(" ")[0]} {item.problem.split(" ")[1]} {item.problem.split(" ")[2]}
                    </h4>
                    <p className="mt-1 text-xs text-gray-500 leading-relaxed">
                      {item.problem}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Block: The Aegis Core Solution (✅) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-neon-green/20 bg-neon-green/[0.01] p-8 md:p-10 shadow-[0_0_50px_rgba(198,255,56,0.05)] relative overflow-hidden"
            id="aegis-optimized-block"
          >
            <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-neon-green/5 blur-3xl" />
            
            <div className="flex items-center gap-3 mb-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neon-green/10 text-neon-green shadow-[0_0_15px_rgba(198,255,56,0.1)]">
                <Check className="h-5 w-5 stroke-[3]" />
              </div>
              <div>
                <h3 className="font-sans text-xl font-bold text-gray-900">Com a Aegis Tech (O Futuro)</h3>
                <span className="font-mono text-[10px] text-neon-green uppercase tracking-wider">Eficiência digital garantida</span>
              </div>
            </div>

            <motion.div 
              className="space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
              }}
            >
              {comparisons.map((item, idx) => (
                <motion.div 
                  key={item.id}
                  variants={{
                    hidden: { opacity: 0, x: 10 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  whileHover={{ x: -5, backgroundColor: "rgba(198, 255, 56, 0.05)" }}
                  className="flex items-start gap-4 p-2 rounded-lg border-b border-transparent last:pb-0 transition-colors cursor-default"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-neon-green/10 text-neon-green font-mono text-xs font-bold shadow-[0_0_8px_rgba(198,255,56,0.2)]">
                    ✅
                  </span>
                  <div>
                    <h4 className="font-sans text-sm font-semibold text-neon-green">
                      {item.solution.split(" ")[0]} {item.solution.split(" ")[1]} {item.solution.split(" ")[2]}
                    </h4>
                    <p className="mt-1 text-xs text-gray-700 leading-relaxed">
                      {item.solution}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
