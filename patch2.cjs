const fs = require('fs');
const content = fs.readFileSync('./src/components/LeadModal.tsx', 'utf-8');

const target = `                {/* Simulated ROI Board - Extremely premium authority booster */}
                <div className="mt-8 rounded-2xl border border-neon-green/10 bg-gray-50 p-6 text-left">
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="h-4 w-4 text-neon-green" />
                    <span className="font-mono text-xs uppercase tracking-widest text-neon-green font-bold font-sans">Projeção Inicial Aegis Tech</span>
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed mb-6">
                    Com base no porte de <strong>{stats.label}</strong> e nos desafios mapeados por você, estimamos as seguintes otimizações preliminares após a implantação da nossa arquitetura premium:
                  </p>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                      <span className="block font-mono text-xs uppercase text-gray-500">Eficiência Operacional</span>
                      <span className="mt-1 block font-mono text-2xl font-bold text-neon-green">+{estimatedHoursSaved}h</span>
                      <span className="mt-0.5 block text-xs text-gray-600">De trabalho manual economizado por mês na sua equipe e rotinas</span>
                    </div>

                    <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                      <span className="block font-mono text-xs uppercase text-gray-500">Recuperação e Receita</span>
                      <span className="mt-1 block font-mono text-2xl font-bold text-gray-900">R$ {(estimatedSavings / 1000).toFixed(0)}k</span>
                      <span className="mt-0.5 block text-xs text-gray-600">Em receita potencial recuperada com automações e faturamento inteligente</span>
                    </div>
                  </div>

                  <div className="mt-5 flex items-start gap-2.5 rounded-lg bg-neon-green/5 p-3 text-xs text-neon-green border border-neon-green/10">
                    <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5" />
                    <span>Estes números representam médias coletadas em implantações reais. Apresentaremos o plano de engenharia completo e personalizado em nossa chamada de diagnóstico.</span>
                  </div>
                </div>`;

const replacement = ``;

fs.writeFileSync('./src/components/LeadModal.tsx', content.replace(target, replacement));
