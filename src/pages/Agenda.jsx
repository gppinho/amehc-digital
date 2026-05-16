import { Calendar, Clock, MapPin, Users, ArrowRight } from "lucide-react";

const eventos = [
  {
    id: 1,
    titulo: "Assembleia Geral Ordinária",
    data: "28 Mai 2025",
    hora: "19h00",
    local: "Auditório do Hospital Conceição",
    tipo: "Institucional",
    desc: "Reunião anual para prestação de contas e votação das pautas da associação.",
    vagas: "Aberto a todos os associados",
  },
  {
    id: 2,
    titulo: "Curso de Suporte Avançado de Vida",
    data: "14 Jun 2025",
    hora: "08h00 – 18h00",
    local: "Centro de Treinamento HNSC",
    tipo: "Educação",
    desc: "Treinamento prático de ressuscitação cardiopulmonar e suporte avançado de vida para médicos e residentes.",
    vagas: "20 vagas disponíveis",
  },
  {
    id: 3,
    titulo: "Coquetel de Confraternização AMEHC",
    data: "28 Jun 2025",
    hora: "20h00",
    local: "Clube Leopoldina Juvenil – Porto Alegre",
    tipo: "Social",
    desc: "Evento social anual para celebrar as conquistas da AMEHC e fortalecer os laços entre os associados.",
    vagas: "Exclusivo para associados e acompanhantes",
  },
  {
    id: 4,
    titulo: "Simpósio de Gestão Hospitalar",
    data: "12 Jul 2025",
    hora: "09h00 – 17h00",
    local: "Centro de Eventos FIERGS",
    tipo: "Educação",
    desc: "Painel de especialistas debatendo inovação, sustentabilidade e liderança na gestão hospitalar moderna.",
    vagas: "50 vagas para associados",
  },
  {
    id: 5,
    titulo: "Reunião de Diretoria – Aberta aos Associados",
    data: "30 Jul 2025",
    hora: "18h30",
    local: "Sede AMEHC – Hospital Conceição",
    tipo: "Institucional",
    desc: "Reunião mensal de diretoria com abertura para participação e sugestões dos associados.",
    vagas: "Aberto a todos os associados",
  },
];

const tipoColors = {
  Institucional: "bg-navy/10 text-navy",
  Educação: "bg-gold/15 text-gold",
  Social: "bg-green-100 text-green-700",
};

export default function Agenda() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-gold" />
            <span className="font-jakarta text-gold text-sm font-medium tracking-widest uppercase">Agenda</span>
            <div className="h-px w-10 bg-gold" />
          </div>
          <h1 className="font-playfair text-5xl font-bold text-white" style={{ letterSpacing: "-0.02em" }}>
            Próximos Eventos
          </h1>
          <p className="font-jakarta text-white/60 mt-4 max-w-lg mx-auto text-sm leading-relaxed">
            Acompanhe a agenda de eventos, assembleias e atividades da AMEHC.
          </p>
        </div>
      </section>

      {/* Lista de eventos */}
      <section className="py-16 bg-clinical-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-6">
            {eventos.map((evento) => {
              const [dia, mes, ano] = evento.data.split(" ");
              return (
                <div key={evento.id} className="group flex gap-0 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                  {/* Data */}
                  <div className="w-24 bg-navy flex flex-col items-center justify-center py-8 shrink-0">
                    <span className="font-playfair font-bold text-gold text-3xl leading-none">{dia}</span>
                    <span className="font-jakarta text-white/70 text-xs uppercase tracking-wider mt-1">{mes}</span>
                    <span className="font-jakarta text-white/40 text-xs">{ano}</span>
                  </div>

                  {/* Conteúdo */}
                  <div className="flex-1 p-6 border-l-4 border-gold">
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div>
                        <span className={`inline-block font-jakarta text-xs font-semibold px-3 py-1 rounded-full mb-3 ${tipoColors[evento.tipo] || "bg-gray-100 text-gray-600"}`}>
                          {evento.tipo}
                        </span>
                        <h3 className="font-playfair text-xl font-bold text-navy mb-2 group-hover:text-gold transition-colors">
                          {evento.titulo}
                        </h3>
                        <p className="font-jakarta text-charcoal/60 text-sm leading-relaxed mb-4">{evento.desc}</p>
                        <div className="flex flex-wrap gap-4 text-xs font-jakarta text-charcoal/50">
                          <span className="flex items-center gap-1.5"><Clock size={12} className="text-gold" /> {evento.hora}</span>
                          <span className="flex items-center gap-1.5"><MapPin size={12} className="text-gold" /> {evento.local}</span>
                          <span className="flex items-center gap-1.5"><Users size={12} className="text-gold" /> {evento.vagas}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}