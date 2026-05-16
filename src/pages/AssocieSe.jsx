import { useState } from "react";
import { CheckCircle, ArrowRight, User, Mail, Phone, Stethoscope, MessageSquare } from "lucide-react";

const etapas = ["Dados Pessoais", "Dados Profissionais", "Confirmação"];

const beneficios = [
  "Acesso a convênios exclusivos",
  "Plano de saúde com desconto",
  "Assessoria jurídica gratuita",
  "Participação em assembleias",
  "Eventos e confraternizações",
  "Educação continuada",
];

export default function AssocieSe() {
  const [etapa, setEtapa] = useState(0);
  const [enviado, setEnviado] = useState(false);
  const [form, setForm] = useState({
    nome: "", email: "", telefone: "",
    crm: "", especialidade: "", categoria: "medico", mensagem: "",
  });

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-gold" />
            <span className="font-jakarta text-gold text-sm font-medium tracking-widest uppercase">Associe-se</span>
            <div className="h-px w-10 bg-gold" />
          </div>
          <h1 className="font-playfair text-5xl font-bold text-white" style={{ letterSpacing: "-0.02em" }}>
            Faça Parte da AMEHC
          </h1>
          <p className="font-jakarta text-white/60 mt-4 max-w-lg mx-auto text-sm leading-relaxed">
            Junte-se a centenas de profissionais de saúde que já fazem parte da nossa associação.
          </p>
        </div>
      </section>

      <section className="py-16 bg-clinical-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Benefícios */}
            <div className="lg:col-span-2">
              <div className="bg-navy rounded-2xl p-8 sticky top-28">
                <h3 className="font-playfair text-2xl font-bold text-white mb-2">Por que se associar?</h3>
                <div className="h-px bg-gold w-12 mb-6" />
                <ul className="space-y-4">
                  {beneficios.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <CheckCircle size={16} className="text-gold mt-0.5 shrink-0" />
                      <span className="font-jakarta text-white/80 text-sm">{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 p-5 bg-white/10 rounded-xl">
                  <p className="font-jakarta text-white/70 text-xs leading-relaxed">
                    A associação está aberta a médicos e odontólogos do quadro funcional do Hospital Nossa Senhora da Conceição.
                  </p>
                </div>
              </div>
            </div>

            {/* Formulário */}
            <div className="lg:col-span-3">
              {enviado ? (
                <div className="text-center py-20">
                  <div className="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={40} className="text-gold" />
                  </div>
                  <h2 className="font-playfair text-3xl font-bold text-navy mb-3">Solicitação enviada!</h2>
                  <p className="font-jakarta text-charcoal/60 text-base leading-relaxed max-w-md mx-auto">
                    Recebemos seu pedido de associação. Nossa equipe entrará em contato em até 48 horas para confirmar seus dados e finalizar o processo.
                  </p>
                </div>
              ) : (
                <>
                  {/* Progress */}
                  <div className="mb-10">
                    <div className="flex items-center gap-0">
                      {etapas.map((e, i) => (
                        <div key={e} className="flex items-center flex-1 last:flex-none">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-jakarta font-bold text-sm transition-all ${i <= etapa ? "bg-gold text-navy" : "bg-gray-200 text-gray-400"}`}>
                            {i + 1}
                          </div>
                          <div className="flex-1 last:hidden">
                            <div className={`h-0.5 transition-all ${i < etapa ? "bg-gold" : "bg-gray-200"}`} />
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between mt-2">
                      {etapas.map((e, i) => (
                        <span key={e} className={`font-jakarta text-xs ${i === etapa ? "text-navy font-semibold" : "text-charcoal/40"}`}>{e}</span>
                      ))}
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {etapa === 0 && (
                      <>
                        <h2 className="font-playfair text-2xl font-bold text-navy mb-6">Dados Pessoais</h2>
                        <div>
                          <label className="font-jakarta text-sm font-medium text-charcoal/70 block mb-2">Nome completo *</label>
                          <input
                            required value={form.nome} onChange={(e) => set("nome", e.target.value)}
                            className="w-full border-0 border-b-2 border-gray-200 focus:border-gold outline-none py-3 font-jakarta text-charcoal bg-transparent transition-colors"
                            placeholder="Dr. João da Silva"
                          />
                        </div>
                        <div>
                          <label className="font-jakarta text-sm font-medium text-charcoal/70 block mb-2">E-mail *</label>
                          <input
                            required type="email" value={form.email} onChange={(e) => set("email", e.target.value)}
                            className="w-full border-0 border-b-2 border-gray-200 focus:border-gold outline-none py-3 font-jakarta text-charcoal bg-transparent transition-colors"
                            placeholder="joao@email.com"
                          />
                        </div>
                        <div>
                          <label className="font-jakarta text-sm font-medium text-charcoal/70 block mb-2">Telefone *</label>
                          <input
                            required value={form.telefone} onChange={(e) => set("telefone", e.target.value)}
                            className="w-full border-0 border-b-2 border-gray-200 focus:border-gold outline-none py-3 font-jakarta text-charcoal bg-transparent transition-colors"
                            placeholder="(51) 99999-9999"
                          />
                        </div>
                        <div className="pt-4">
                          <button
                            type="button" onClick={() => setEtapa(1)}
                            disabled={!form.nome || !form.email || !form.telefone}
                            className="flex items-center gap-2 px-8 py-3.5 bg-navy text-white font-jakarta font-semibold rounded-md hover:bg-navy/90 disabled:opacity-40 transition-all"
                          >
                            Próximo <ArrowRight size={16} />
                          </button>
                        </div>
                      </>
                    )}

                    {etapa === 1 && (
                      <>
                        <h2 className="font-playfair text-2xl font-bold text-navy mb-6">Dados Profissionais</h2>
                        <div>
                          <label className="font-jakarta text-sm font-medium text-charcoal/70 block mb-2">Categoria *</label>
                          <select
                            value={form.categoria} onChange={(e) => set("categoria", e.target.value)}
                            className="w-full border-0 border-b-2 border-gray-200 focus:border-gold outline-none py-3 font-jakarta text-charcoal bg-transparent transition-colors"
                          >
                            <option value="medico">Médico(a)</option>
                            <option value="odontólogo">Odontólogo(a)</option>
                          </select>
                        </div>
                        <div>
                          <label className="font-jakarta text-sm font-medium text-charcoal/70 block mb-2">CRM / CRO *</label>
                          <input
                            required value={form.crm} onChange={(e) => set("crm", e.target.value)}
                            className="w-full border-0 border-b-2 border-gray-200 focus:border-gold outline-none py-3 font-jakarta text-charcoal bg-transparent transition-colors"
                            placeholder="RS 123456"
                          />
                        </div>
                        <div>
                          <label className="font-jakarta text-sm font-medium text-charcoal/70 block mb-2">Especialidade</label>
                          <input
                            value={form.especialidade} onChange={(e) => set("especialidade", e.target.value)}
                            className="w-full border-0 border-b-2 border-gray-200 focus:border-gold outline-none py-3 font-jakarta text-charcoal bg-transparent transition-colors"
                            placeholder="Cardiologia, Clínica Médica..."
                          />
                        </div>
                        <div>
                          <label className="font-jakarta text-sm font-medium text-charcoal/70 block mb-2">Mensagem (opcional)</label>
                          <textarea
                            rows={3} value={form.mensagem} onChange={(e) => set("mensagem", e.target.value)}
                            className="w-full border-0 border-b-2 border-gray-200 focus:border-gold outline-none py-3 font-jakarta text-charcoal bg-transparent transition-colors resize-none"
                            placeholder="Alguma observação..."
                          />
                        </div>
                        <div className="pt-4 flex gap-3">
                          <button type="button" onClick={() => setEtapa(0)} className="px-6 py-3 border border-gray-200 text-charcoal font-jakarta font-medium rounded-md hover:border-navy transition-all text-sm">
                            Voltar
                          </button>
                          <button
                            type="submit" disabled={!form.crm}
                            className="flex items-center gap-2 px-8 py-3.5 bg-gold text-navy font-jakarta font-bold rounded-md hover:bg-gold/90 disabled:opacity-40 transition-all"
                          >
                            Enviar solicitação <ArrowRight size={16} />
                          </button>
                        </div>
                      </>
                    )}
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}