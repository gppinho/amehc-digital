import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";

export default function Contato() {
  const [enviado, setEnviado] = useState(false);
  const [form, setForm] = useState({ nome: "", email: "", assunto: "", mensagem: "" });
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
            <span className="font-jakarta text-gold text-sm font-medium tracking-widest uppercase">Contato</span>
            <div className="h-px w-10 bg-gold" />
          </div>
          <h1 className="font-playfair text-5xl font-bold text-white" style={{ letterSpacing: "-0.02em" }}>
            Fale Conosco
          </h1>
          <p className="font-jakarta text-white/60 mt-4 max-w-lg mx-auto text-sm leading-relaxed">
            Estamos à disposição para esclarecer dúvidas, receber sugestões e atender nossas associadas e associados.
          </p>
        </div>
      </section>

      <section className="py-16 bg-clinical-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-navy rounded-2xl p-8">
                <h3 className="font-playfair text-2xl font-bold text-white mb-6">Informações</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                      <MapPin size={16} className="text-gold" />
                    </div>
                    <div>
                      <p className="font-jakarta font-semibold text-white text-sm">Endereço</p>
                      <p className="font-jakarta text-white/60 text-sm leading-relaxed mt-1">
                        Hospital Nossa Senhora da Conceição<br />
                        Av. Francisco Trein, 596<br />
                        Porto Alegre – RS, 91350-200
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                      <Phone size={16} className="text-gold" />
                    </div>
                    <div>
                      <p className="font-jakarta font-semibold text-white text-sm">Telefone</p>
                      <a href="tel:+555133570100" className="font-jakarta text-white/60 text-sm hover:text-gold transition-colors mt-1 block">
                        (51) 3357-0100
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                      <Mail size={16} className="text-gold" />
                    </div>
                    <div>
                      <p className="font-jakarta font-semibold text-white text-sm">E-mail</p>
                      <a href="mailto:contato@amehc.org.br" className="font-jakarta text-white/60 text-sm hover:text-gold transition-colors mt-1 block">
                        contato@amehc.org.br
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                      <Clock size={16} className="text-gold" />
                    </div>
                    <div>
                      <p className="font-jakarta font-semibold text-white text-sm">Horário de Atendimento</p>
                      <p className="font-jakarta text-white/60 text-sm leading-relaxed mt-1">
                        Segunda a Sexta: 8h – 17h<br />
                        Sábados: 8h – 12h
                      </p>
                    </div>
                  </div>
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
                  <h2 className="font-playfair text-3xl font-bold text-navy mb-3">Mensagem enviada!</h2>
                  <p className="font-jakarta text-charcoal/60 text-base leading-relaxed max-w-md mx-auto">
                    Obrigado pelo contato. Responderemos em breve no e-mail informado.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="font-playfair text-3xl font-bold text-navy mb-8" style={{ letterSpacing: "-0.02em" }}>
                    Envie uma mensagem
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="font-jakarta text-sm font-medium text-charcoal/70 block mb-2">Nome *</label>
                        <input
                          required value={form.nome} onChange={(e) => set("nome", e.target.value)}
                          className="w-full border-0 border-b-2 border-gray-200 focus:border-gold outline-none py-3 font-jakarta text-charcoal bg-transparent transition-colors"
                          placeholder="Seu nome"
                        />
                      </div>
                      <div>
                        <label className="font-jakarta text-sm font-medium text-charcoal/70 block mb-2">E-mail *</label>
                        <input
                          required type="email" value={form.email} onChange={(e) => set("email", e.target.value)}
                          className="w-full border-0 border-b-2 border-gray-200 focus:border-gold outline-none py-3 font-jakarta text-charcoal bg-transparent transition-colors"
                          placeholder="seu@email.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="font-jakarta text-sm font-medium text-charcoal/70 block mb-2">Assunto *</label>
                      <select
                        required value={form.assunto} onChange={(e) => set("assunto", e.target.value)}
                        className="w-full border-0 border-b-2 border-gray-200 focus:border-gold outline-none py-3 font-jakarta text-charcoal bg-transparent transition-colors"
                      >
                        <option value="">Selecione um assunto</option>
                        <option>Informações sobre associação</option>
                        <option>Convênios e benefícios</option>
                        <option>Área do associado</option>
                        <option>Eventos e agenda</option>
                        <option>Outros</option>
                      </select>
                    </div>
                    <div>
                      <label className="font-jakarta text-sm font-medium text-charcoal/70 block mb-2">Mensagem *</label>
                      <textarea
                        required rows={5} value={form.mensagem} onChange={(e) => set("mensagem", e.target.value)}
                        className="w-full border-0 border-b-2 border-gray-200 focus:border-gold outline-none py-3 font-jakarta text-charcoal bg-transparent transition-colors resize-none"
                        placeholder="Escreva sua mensagem..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="flex items-center gap-2 px-8 py-3.5 bg-navy text-white font-jakarta font-semibold rounded-md hover:bg-navy/90 transition-all duration-200"
                    >
                      <Send size={16} />
                      Enviar mensagem
                    </button>
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