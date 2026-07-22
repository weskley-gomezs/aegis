/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Check, ArrowRight, Sparkles, Building, Users, AlertTriangle, Loader2, ArrowUpRight } from "lucide-react";
import { DiagnosisLead } from "../types";

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LeadModal({ isOpen, onClose }: LeadModalProps) {
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<DiagnosisLead>({
    name: "",
    email: "",
    whatsapp: "",
    companyName: "",
    role: "Sócio / Diretor Geral",
    companySize: "50-150",
    mainPainPoints: [],
    additionalInfo: ""
  });

  const roles = ["Sócio / Diretor Geral", "Gerente de Operações", "Diretor de TI / CTO", "Gerente de Vendas / CMO", "Outro"];
  const sizeOptions = [
    { label: "Até 50 colaboradores", value: "Até 50", hours: 15, currentLoss: 45000 },
    { label: "50 a 150 colaboradores", value: "50-150", hours: 30, currentLoss: 95000 },
    { label: "151 a 500 colaboradores", value: "151-500", hours: 55, currentLoss: 220000 },
    { label: "501 a 1000 colaboradores", value: "501-1000", hours: 90, currentLoss: 480000 },
    { label: "Mais de 1000 colaboradores", value: "Mais de 1000", hours: 160, currentLoss: 900000 }
  ];

  const painPoints = [
    { id: "leads", label: "Captação ineficiente ou perda de leads qualificados" },
    { id: "financeiro", label: "Inadimplência recorrente ou faturamento manual" },
    { id: "whatsapp", label: "Time sobrecarregado com mensagens sem triagem" },
    { id: "sistemas", label: "Ausência de uma plataforma ou ERP integrado" },
    { id: "site", label: "Site antigo, lento ou com design pouco premium" },
    { id: "processos", label: "Controle em planilhas dispersas e falta de dados" }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const togglePainPoint = (id: string) => {
    setFormData(prev => {
      const active = prev.mainPainPoints.includes(id);
      const updated = active 
        ? prev.mainPainPoints.filter(p => p !== id)
        : [...prev.mainPainPoints, id];
      return { ...prev, mainPainPoints: updated };
    });
  };

  const getActiveSizeStats = () => {
    const opt = sizeOptions.find(o => o.value === formData.companySize) || sizeOptions[1];
    return opt;
  };

  const handleNext = () => {
    if (step === 1 && (!formData.name || !formData.whatsapp || !formData.companyName)) {
      alert("Por favor, preencha os campos obrigatórios.");
      return;
    }
    setStep(prev => prev + 1);
  };

  const handleBack = () => {
    setStep(prev => prev - 1);
  };

  const handleWhatsAppRedirect = () => {
    const painPointsLabels = formData.mainPainPoints
      .map(id => painPoints.find(p => p.id === id)?.label)
      .filter(Boolean)
      .join(", ");
    
    const message = `Olá Weskley! Acabei de solicitar um diagnóstico para minha empresa no site da Aegis Tech.

*Nome:* ${formData.name}
*Empresa:* ${formData.companyName}
*Cargo/Função:* ${formData.role}
*Tamanho:* ${formData.companySize} colaboradores
*WhatsApp:* ${formData.whatsapp}
*E-mail:* ${formData.email || "Não informado"}

*Desafios Mapeados:*
${painPointsLabels || "Nenhum selecionado"}

*Detalhes Adicionais:*
${formData.additionalInfo || "Nenhum adicional informado"}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5561996507712?text=${encodedMessage}`, "_blank");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.mainPainPoints.length === 0) {
      alert("Por favor, selecione pelo menos um desafio para o diagnóstico.");
      return;
    }
    setLoading(true);

    try {
      await fetch("https://formsubmit.co/ajax/weskleygomez@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `Novo Lead Aegis Tech: ${formData.companyName}`,
          Nome: formData.name,
          Email: formData.email,
          WhatsApp: formData.whatsapp,
          Empresa: formData.companyName,
          Cargo: formData.role,
          Tamanho: formData.companySize,
          Desafios: formData.mainPainPoints.map(id => {
            return painPoints.find(p => p.id === id)?.label || id;
          }).join(', '),
          Detalhes: formData.additionalInfo || "Nenhum detalhe adicional"
        }),
      });
      setLoading(false);
      setStep(3);
    } catch (error) {
      console.error("Erro ao enviar email:", error);
      alert("Ocorreu um erro ao enviar a solicitação. Por favor, tente novamente ou entre em contato pelo WhatsApp.");
      setLoading(false);
    }
  };

  const resetForm = () => {
    setStep(1);
    setFormData({
      name: "",
      email: "",
      whatsapp: "",
      companyName: "",
      role: "Sócio / Diretor Geral",
      companySize: "50-150",
      mainPainPoints: [],
      additionalInfo: ""
    });
    onClose();
  };

  const stats = getActiveSizeStats();
  // Computed premium estimates
  const estimatedHoursSaved = Math.round(stats.hours * 0.8);
  const estimatedSavings = Math.round(stats.currentLoss * 0.35);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetForm}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            id="modal-overlay"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative z-10 w-full max-w-2xl overflow-hidden rounded-3xl border border-neon-green/20 bg-white/95 p-6 md:p-10 shadow-[0_0_50px_rgba(198,255,56,0.1)] backdrop-blur-xl"
            id="modal-content"
          >
            {/* Background glowing line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-neon-green to-transparent" />

            {/* Close Button */}
            <button
              onClick={resetForm}
              className="absolute top-6 right-6 rounded-full border border-gray-200 bg-gray-100 p-2 text-gray-600 hover:border-neon-green/40 hover:text-gray-900 transition-all duration-300"
              id="close-modal-btn"
            >
              <X className="h-5 w-5" />
            </button>

            {step < 3 && (
              <div className="mb-6 flex items-center gap-2">
                <span className="font-mono text-xs text-neon-green uppercase tracking-widest">Passo {step} de 2</span>
                <div className="h-[2px] flex-1 bg-gray-200">
                  <div 
                    className="h-full bg-neon-green transition-all duration-300" 
                    style={{ width: `${(step / 2) * 100}%` }}
                  />
                </div>
              </div>
            )}

            {/* STEP 1: Basic Info */}
            {step === 1 && (
              <div>
                <div className="mb-8">
                  <h3 className="font-sans text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
                    Solicitar <span className="font-serif italic text-neon-green">Orçamento Gratuito</span>
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Preencha os dados abaixo. Analisaremos o ecossistema digital da sua empresa para identificar gargalos operacionais e oportunidades de escala comercial.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-gray-600">Seu Nome *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Ex: Roberto Alencar"
                        className="w-full rounded-xl border border-gray-200 bg-gray-100 px-4 py-3 text-sm text-gray-900 focus:border-neon-green/50 focus:outline-none transition-all duration-300"
                        id="input-lead-name"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-gray-600">Seu Whatsapp *</label>
                      <input
                        type="tel"
                        name="whatsapp"
                        required
                        value={formData.whatsapp}
                        onChange={handleInputChange}
                        placeholder="Ex: (11) 99999-9999"
                        className="w-full rounded-xl border border-gray-200 bg-gray-100 px-4 py-3 text-sm text-gray-900 focus:border-neon-green/50 focus:outline-none transition-all duration-300"
                        id="input-lead-whatsapp"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-gray-600">E-mail Corporativo</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Ex: roberto@empresa.com.br"
                        className="w-full rounded-xl border border-gray-200 bg-gray-100 px-4 py-3 text-sm text-gray-900 focus:border-neon-green/50 focus:outline-none transition-all duration-300"
                        id="input-lead-email"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-gray-600">Seu Cargo / Função</label>
                      <select
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border border-gray-200 bg-gray-100 px-4 py-3 text-sm text-gray-900 focus:border-neon-green/50 focus:outline-none transition-all duration-300"
                        id="select-lead-role"
                      >
                        {roles.map(r => (
                          <option key={r} value={r}>{r}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-gray-600">Nome da Empresa *</label>
                      <div className="relative">
                        <input
                          type="text"
                          name="companyName"
                          required
                          value={formData.companyName}
                          onChange={handleInputChange}
                          placeholder="Ex: Vanguard Logística"
                          className="w-full rounded-xl border border-gray-200 bg-gray-100 pl-10 pr-4 py-3 text-sm text-gray-900 focus:border-neon-green/50 focus:outline-none transition-all duration-300"
                          id="input-lead-company"
                        />
                        <Building className="absolute top-3.5 left-3.5 h-4 w-4 text-gray-500" />
                      </div>
                    </div>
                    <div>
                      <label className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-gray-600">Nº de Colaboradores</label>
                      <div className="relative">
                        <select
                          name="companySize"
                          value={formData.companySize}
                          onChange={handleInputChange}
                          className="w-full rounded-xl border border-gray-200 bg-gray-100 pl-10 pr-4 py-3 text-sm text-gray-900 focus:border-neon-green/50 focus:outline-none transition-all duration-300"
                          id="select-lead-size"
                        >
                          {sizeOptions.map(opt => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                          ))}
                        </select>
                        <Users className="absolute top-3.5 left-3.5 h-4 w-4 text-gray-500" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex justify-end">
                  <button
                    onClick={handleNext}
                    className="group flex items-center gap-2 rounded-xl bg-neon-green px-6 py-3.5 text-sm font-semibold text-white hover:bg-white hover:shadow-[0_0_20px_rgba(198,255,56,0.3)] transition-all duration-300"
                    id="btn-lead-step1-next"
                  >
                    Próximo Passo
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: Main challenges */}
            {step === 2 && (
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <h3 className="font-sans text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
                    Quais são os principais <span className="font-serif italic text-neon-green">desafios</span> atuais?
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Selecione as opções que mais representam os gargalos na sua empresa hoje.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                  {painPoints.map(point => {
                    const selected = formData.mainPainPoints.includes(point.id);
                    return (
                      <button
                        type="button"
                        key={point.id}
                        onClick={() => togglePainPoint(point.id)}
                        className={`flex items-center gap-3 rounded-2xl border p-4 text-left transition-all duration-300 ${
                          selected
                            ? "border-neon-green bg-neon-green/10 text-gray-900 shadow-[0_0_15px_rgba(198,255,56,0.1)]"
                            : "border-gray-200 bg-gray-100 text-gray-700 hover:border-gray-300"
                        }`}
                        id={`btn-challenge-${point.id}`}
                      >
                        <div className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border text-black transition-all ${
                          selected 
                            ? "border-neon-green bg-neon-green" 
                            : "border-gray-300 bg-transparent"
                        }`}>
                          {selected && <Check className="h-3.5 w-3.5 stroke-[3]" />}
                        </div>
                        <span className="text-sm font-medium">{point.label}</span>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-4">
                  <label className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-gray-600">Quer detalhar algo a mais? (Opcional)</label>
                  <textarea
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleInputChange}
                    placeholder="Sistemas legados em uso, integrações desejadas, canais de captação..."
                    rows={3}
                    className="w-full rounded-xl border border-gray-200 bg-gray-100 px-4 py-3 text-sm text-gray-900 focus:border-neon-green/50 focus:outline-none transition-all duration-300 resize-none"
                    id="textarea-lead-extra"
                  />
                </div>

                <div className="mt-8 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="rounded-xl border border-black bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-gray-50 transition-all duration-300"
                    id="btn-lead-step2-back"
                  >
                    Voltar
                  </button>

                  <button
                    type="submit"
                    disabled={loading}
                    className="group flex items-center gap-2 rounded-xl bg-neon-green px-6 py-3.5 text-sm font-semibold text-white hover:bg-white hover:shadow-[0_0_20px_rgba(198,255,56,0.3)] transition-all duration-300 disabled:opacity-50"
                    id="btn-lead-step2-submit"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Processando...
                      </>
                    ) : (
                      <>
                        Enviar Solicitação
                        <Sparkles className="h-4 w-4 animate-pulse text-black" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}

            {/* STEP 3: Premium success state & customized stats projection */}
            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-neon-green/10 text-neon-green shadow-[0_0_25px_rgba(198,255,56,0.2)]">
                  <Check className="h-8 w-8 stroke-[3]" />
                </div>

                <h3 className="font-sans text-3xl font-bold tracking-tight text-gray-900">
                  Diagnóstico <span className="font-serif italic text-neon-green">Iniciado!</span>
                </h3>
                <p className="mx-auto mt-3 max-w-lg text-sm text-gray-600">
                  Olá <strong>{formData.name}</strong>, obrigado por confiar na nossa tecnologia para a <strong>{formData.companyName}</strong>. Sua solicitação foi recebida com sucesso por <strong>Weskley Gomez</strong> e nossa equipe técnica de elite já começou a mapear o seu ecossistema.
                </p>



                <p className="mt-6 text-xs text-gray-500">
                  Clique no botão abaixo para iniciar o atendimento imediato via WhatsApp ou aguarde nosso contato no número <strong>{formData.whatsapp}</strong>.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    onClick={handleWhatsAppRedirect}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-neon-green px-6 py-3.5 text-sm font-bold text-white hover:bg-white hover:shadow-[0_0_20px_rgba(198,255,56,0.3)] transition-all duration-300"
                    id="btn-whatsapp-direct"
                  >
                    Falar com Weskley no WhatsApp
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                  <button
                    onClick={resetForm}
                    className="w-full sm:w-auto rounded-xl border border-black bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-gray-50 transition-all duration-300"
                    id="btn-close-lead-success"
                  >
                    Voltar ao Site
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
