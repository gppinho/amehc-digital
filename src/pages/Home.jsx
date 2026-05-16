import { Link } from "react-router-dom";
import { ArrowRight, Users, Award, FileText, Calendar, ChevronRight } from "lucide-react";

const stats = [
  { value: "500+", label: "Associados" },
  { value: "30+", label: "Anos de história" },
  { value: "20+", label: "Convênios ativos" },
  { value: "100%", label: "Dedicação" },
];

const noticias = [
  {
    id: 1,
    titulo: "Assembleia Geral Ordinária 2025",
    data: "10 Mai 2025",
    resumo: "Convocamos todos os associados para a Assembleia Geral Ordinária que ocorrerá no auditório do Hospital Conceição.",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80",
  },
  {
    id: 2,
    titulo: "Novo convênio com seguradora parceira",
    data: "02 Mai 2025",
    resumo: "A AMEHC firmou novo acordo que amplia os benefícios de seguro de vida para todos os médicos e odontólogos associados.",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
  },
  {
    id: 3,
    titulo: "Congresso de Medicina Hospitalar 2025",
    data: "25 Abr 2025",
    resumo: "Representantes da AMEHC participaram do Congresso Nacional trazendo novidades sobre gestão e qualidade assistencial.",
    img: "https://images.unsplash.com/photo-1582560475093-ba66accbc424?w=600&q=80",
  },
];

const convenios = [
  { icon: "🏥", titulo: "Plano de Saúde", desc: "Condições especiais para associados e dependentes." },
  { icon: "🛡️", titulo: "Seguro de Vida", desc: "Proteção financeira com coberturas abrangentes." },
  { icon: "⚖️", titulo: "Assessoria Jurídica", desc: "Suporte especializado em direito médico." },
  { icon: "💊", titulo: "Farmácias Parceiras", desc: "Descontos exclusivos em medicamentos." },
  { icon: "📚", titulo: "Educação Continuada", desc: "Acesso a cursos e congressos com desconto." },
  { icon: "🏦", titulo: "Financiamentos", desc: "Crédito facilitado para equipamentos e consultórios." },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-screen min-h-[600px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=1600&q=85')" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(27,58,92,0.92) 50%, rgba(27,58,92,0.35) 100%)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-gold" />
              <span className="font-jakarta text-gold text-sm font-medium tracking-widest uppercase">Hospital Conceição</span>
            </div>
            <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6" style={{ letterSpacing: "-0.02em" }}>
              Associação dos<br />
              <span className="text-gold">Médicos e<br />Odontólogos</span>
            </h1>
            <p className="font-jakarta text-white/80 text-lg leading-relaxed mb-10 max-w-xl">
              Unindo profissionais de saúde do Hospital Conceição em prol da medicina de excelência, defesa dos direitos e valorização da classe médica.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/sobre"
                className="flex items-center gap-2 px-8 py-3.5 bg-gold text-navy font-jakarta font-semibold rounded-md hover:bg-gold/90 transition-all duration-200 text-sm"
              >
                Conheça a AMEHC
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/associe-se"
                className="flex items-center gap-2 px-8 py-3.5 border border-white/50 text-white font-jakarta font-medium rounded-md hover:bg-white/10 transition-all duration-200 text-sm"
              >
                Associe-se
              </Link>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-navy/90 backdrop-blur-md border-t border-gold/30">
          <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-playfair text-2xl font-bold text-gold">{s.value}</div>
                <div className="font-jakarta text-white/70 text-xs mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section className="py-24 bg-clinical-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-10 bg-gold" />
                <span className="font-jakarta text-gold text-sm font-medium tracking-widest uppercase">Quem Somos</span>
              </div>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-navy mb-6" style={{ letterSpacing: "-0.02em" }}>
                Uma associação com propósito
              </h2>
              <p className="font-jakarta text-charcoal/70 text-base leading-relaxed mb-6">
                A AMEHC – Associação dos Médicos e Odontólogos do Hospital Conceição – foi fundada para representar, defender e valorizar os profissionais de saúde que atuam no Hospital Nossa Senhora da Conceição, em Porto Alegre.
              </p>
              <p className="font-jakarta text-charcoal/70 text-base leading-relaxed mb-8">
                Trabalhamos incansavelmente para promover condições de trabalho dignas, oferecer benefícios exclusivos e fortalecer os laços entre os profissionais da saúde de nossa instituição.
              </p>
              <Link
                to="/sobre"
                className="inline-flex items-center gap-2 text-navy font-jakarta font-semibold text-sm hover:text-gold transition-colors duration-200"
              >
                Saiba mais sobre a AMEHC
                <ChevronRight size={16} />
              </Link>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=800&q=80"
                  alt="Profissionais de saúde"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-navy/20" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-gold rounded-xl p-6 shadow-xl">
                <div className="font-playfair text-3xl font-bold text-navy">30+</div>
                <div className="font-jakarta text-navy text-sm mt-1">Anos representando<br />nossos associados</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notícias */}
      <section className="py-24 bg-[#F3F5F8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-px w-10 bg-gold" />
                <span className="font-jakarta text-gold text-sm font-medium tracking-widest uppercase">Notícias</span>
              </div>
              <h2 className="font-playfair text-4xl font-bold text-navy" style={{ letterSpacing: "-0.02em" }}>Últimas Notícias</h2>
            </div>
            <Link to="/noticias" className="hidden md:flex items-center gap-2 text-navy font-jakarta text-sm font-semibold hover:text-gold transition-colors">
              Ver todas <ArrowRight size={15} />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {noticias.map((n) => (
              <Link to={`/noticias/${n.id}`} key={n.id} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={n.img} alt={n.titulo} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 border-t-2 border-gold">
                  <span className="font-jakarta text-xs text-gold font-medium">{n.data}</span>
                  <h3 className="font-playfair text-lg font-semibold text-navy mt-2 mb-3 leading-snug group-hover:text-gold transition-colors">
                    {n.titulo}
                  </h3>
                  <p className="font-jakarta text-charcoal/60 text-sm leading-relaxed">{n.resumo}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8 md:hidden">
            <Link to="/noticias" className="inline-flex items-center gap-2 text-navy font-jakarta text-sm font-semibold hover:text-gold transition-colors">
              Ver todas as notícias <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Convênios */}
      <section className="py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-px w-10 bg-gold" />
              <span className="font-jakarta text-gold text-sm font-medium tracking-widest uppercase">Benefícios</span>
              <div className="h-px w-10 bg-gold" />
            </div>
            <h2 className="font-playfair text-4xl font-bold text-white" style={{ letterSpacing: "-0.02em" }}>
              Convênios e Vantagens
            </h2>
            <p className="font-jakarta text-white/60 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
              Como associado da AMEHC, você tem acesso a benefícios exclusivos que fazem a diferença no seu dia a dia.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {convenios.map((c) => (
              <div key={c.titulo} className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-gold/40 rounded-xl p-6 transition-all duration-300 cursor-default border-t-2 border-t-gold">
                <div className="text-3xl mb-4">{c.icon}</div>
                <h3 className="font-playfair text-white font-semibold text-lg mb-2">{c.titulo}</h3>
                <p className="font-jakarta text-white/60 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/convenios"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-navy font-jakarta font-semibold rounded-md hover:bg-gold/90 transition-all duration-200 text-sm"
            >
              Ver todos os convênios <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Associe-se */}
      <section className="py-24 bg-clinical-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-navy rounded-2xl p-12 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-gold/10 -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-gold/5 translate-y-1/2 -translate-x-1/2" />
            <div className="relative z-10 text-center">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4" style={{ letterSpacing: "-0.02em" }}>
                Faça parte da <span className="text-gold">AMEHC</span>
              </h2>
              <p className="font-jakarta text-white/70 text-lg leading-relaxed max-w-xl mx-auto mb-10">
                Junte-se a centenas de médicos e odontólogos que já fazem parte da maior associação do Hospital Conceição.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/associe-se"
                  className="flex items-center gap-2 px-10 py-4 bg-gold text-navy font-jakarta font-bold rounded-md hover:bg-gold/90 transition-all duration-200"
                >
                  Quero me associar <ArrowRight size={16} />
                </Link>
                <Link
                  to="/contato"
                  className="flex items-center gap-2 px-10 py-4 border border-white/30 text-white font-jakarta font-medium rounded-md hover:bg-white/10 transition-all duration-200"
                >
                  Falar com a AMEHC
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}