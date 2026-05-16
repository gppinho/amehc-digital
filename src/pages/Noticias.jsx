import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";

const noticias = [
  { id: 1, titulo: "Assembleia Geral Ordinária 2025", data: "10 Mai 2025", categoria: "Institucional", resumo: "Convocamos todos os associados para a Assembleia Geral Ordinária que ocorrerá no auditório do Hospital Conceição. Pauta completa disponível na Área do Associado.", img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80" },
  { id: 2, titulo: "Novo convênio com seguradora parceira", data: "02 Mai 2025", categoria: "Convênios", resumo: "A AMEHC firmou novo acordo que amplia os benefícios de seguro de vida para todos os médicos e odontólogos associados.", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80" },
  { id: 3, titulo: "Congresso de Medicina Hospitalar 2025", data: "25 Abr 2025", categoria: "Eventos", resumo: "Representantes da AMEHC participaram do Congresso Nacional trazendo novidades sobre gestão e qualidade assistencial.", img: "https://images.unsplash.com/photo-1582560475093-ba66accbc424?w=600&q=80" },
  { id: 4, titulo: "Reforma do espaço de convivência", data: "18 Abr 2025", categoria: "Institucional", resumo: "O espaço exclusivo para descanso dos associados no Hospital Conceição recebeu melhorias e nova iluminação.", img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80" },
  { id: 5, titulo: "Campanha de vacinação para associados", data: "10 Abr 2025", categoria: "Saúde", resumo: "A AMEHC em parceria com a Secretaria de Saúde promoveu campanha de imunização para médicos e odontólogos.", img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80" },
  { id: 6, titulo: "Eleições da diretoria biênio 2026-2028", data: "01 Abr 2025", categoria: "Institucional", resumo: "Abertas as inscrições para candidaturas ao processo eleitoral da próxima diretoria da AMEHC.", img: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=600&q=80" },
];

const categorias = ["Todas", "Institucional", "Convênios", "Eventos", "Saúde"];

export default function Noticias() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-gold" />
            <span className="font-jakarta text-gold text-sm font-medium tracking-widest uppercase">Notícias</span>
            <div className="h-px w-10 bg-gold" />
          </div>
          <h1 className="font-playfair text-5xl font-bold text-white" style={{ letterSpacing: "-0.02em" }}>
            Últimas Notícias
          </h1>
          <p className="font-jakarta text-white/60 mt-4 max-w-lg mx-auto text-sm leading-relaxed">
            Fique por dentro das novidades da AMEHC e da medicina gaúcha.
          </p>
        </div>
      </section>

      {/* Filtros */}
      <section className="bg-white border-b border-border sticky top-[70px] z-30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex gap-3 overflow-x-auto">
          {categorias.map((c) => (
            <button
              key={c}
              className={`px-5 py-2 rounded-full font-jakarta text-sm font-medium whitespace-nowrap transition-all ${
                c === "Todas" ? "bg-navy text-white" : "bg-gray-100 text-charcoal hover:bg-gold/10 hover:text-gold"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* Grid de notícias */}
      <section className="py-16 bg-clinical-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Destaque */}
          <div className="grid lg:grid-cols-2 gap-8 mb-10">
            <Link to={`/noticias/${noticias[0].id}`} className="group relative rounded-2xl overflow-hidden aspect-[16/9] lg:aspect-auto min-h-[340px]">
              <img src={noticias[0].img} alt={noticias[0].titulo} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="inline-block bg-gold text-navy font-jakarta text-xs font-bold px-3 py-1 rounded-full mb-3">{noticias[0].categoria}</span>
                <h2 className="font-playfair text-2xl font-bold text-white leading-snug mb-2">{noticias[0].titulo}</h2>
                <div className="flex items-center gap-2 text-white/60 font-jakarta text-xs">
                  <Calendar size={12} />
                  {noticias[0].data}
                </div>
              </div>
            </Link>
            <div className="flex flex-col gap-6">
              {noticias.slice(1, 3).map((n) => (
                <Link to={`/noticias/${n.id}`} key={n.id} className="group flex gap-5 bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-gold">
                  <div className="w-32 h-full shrink-0 overflow-hidden">
                    <img src={n.img} alt={n.titulo} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5">
                    <span className="font-jakarta text-xs text-gold font-medium">{n.categoria}</span>
                    <h3 className="font-playfair text-base font-bold text-navy mt-1 mb-2 leading-snug group-hover:text-gold transition-colors">{n.titulo}</h3>
                    <div className="flex items-center gap-2 text-charcoal/50 font-jakarta text-xs">
                      <Calendar size={11} />
                      {n.data}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Grid restante */}
          <div className="grid md:grid-cols-3 gap-8">
            {noticias.slice(3).map((n) => (
              <Link to={`/noticias/${n.id}`} key={n.id} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={n.img} alt={n.titulo} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 border-t-2 border-gold">
                  <span className="font-jakarta text-xs text-gold font-medium">{n.categoria}</span>
                  <h3 className="font-playfair text-lg font-semibold text-navy mt-2 mb-3 leading-snug group-hover:text-gold transition-colors">{n.titulo}</h3>
                  <p className="font-jakarta text-charcoal/60 text-sm leading-relaxed line-clamp-2">{n.resumo}</p>
                  <div className="flex items-center gap-2 text-charcoal/40 font-jakarta text-xs mt-4">
                    <Calendar size={12} />
                    {n.data}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}