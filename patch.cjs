const fs = require('fs');
const content = fs.readFileSync('./src/components/LeadModal.tsx', 'utf-8');

const target = `  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.mainPainPoints.length === 0) {
      alert("Por favor, selecione pelo menos um desafio para o diagnóstico.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(3);
    }, 1800);
  };`;

const replacement = `  const handleSubmit = async (e: React.FormEvent) => {
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
          _subject: \`Novo Lead Aegis Tech: \${formData.companyName}\`,
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
  };`;

fs.writeFileSync('./src/components/LeadModal.tsx', content.replace(target, replacement));
