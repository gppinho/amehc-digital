import { Shield, Target, Eye, Users } from "lucide-react";

const valores = [
  { icon: Shield, titulo: "Ética", desc: "Compromisso inabalável com os princípios éticos da medicina e odontologia." },
  { icon: Users, titulo: "Solidariedade", desc: "Cuidamos dos nossos associados como cuidamos dos nossos pacientes." },
  { icon: Target, titulo: "Excelência", desc: "Buscamos sempre o melhor para nossos membros e para a medicina." },
  { icon: Eye, titulo: "Transparência", desc: "Gestão aberta e participativa em todas as decisões da associação." },
];

const diretoria = [
  { nome: "Dr. João Silva", cargo: "Presidente", especialidade: "Clínica Médica" },
  { nome: "Dra. Maria Santos", cargo: "Vice-Presidente", especialidade: "Cardiologia" },
  { nome: "Dr. Carlos Oliveira", cargo: "Secretário Geral", especialidade: "Cirurgia Geral" },
  { nome: "Dra. Ana Costa", cargo: "Tesoureira", especialidade: "Odontologia" },
];

export default function Sobre() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-navy overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1200&q=80')" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-gold" />
            <span className="font-jakarta text-gold text-sm font-medium tracking-widest uppercase">Sobre a AMEHC</span>
            <div className="h-px w-10 bg-gold" />
          </div>
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-6" style={{ letterSpacing: "-0.02em" }}>
            Nossa História
          </h1>
          <p className="font-jakarta text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Décadas de dedicação à valorização dos profissionais de saúde do Hospital Conceição.
          </p>
        </div>
      </section>

      {/* História */}
      <section className="py-24 bg-clinical-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&q=80"
                alt="Hospital Conceição"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-10 bg-gold" />
                <span className="font-jakarta text-gold text-sm font-medium tracking-widest uppercase">Nossa Trajetória</span>
              </div>
              <h2 className="font-playfair text-4xl font-bold text-navy mb-6" style={{ letterSpacing: "-0.02em" }}>
                Mais de 30 anos representando a medicina
              </h2>
              <p className="font-jakarta text-charcoal/70 text-base leading-relaxed mb-5">
                A AMEHC nasceu do sonho de médicos e odontólogos comprometidos com a melhoria das condições de trabalho e com a valorização da categoria no Hospital Nossa Senhora da Conceição, em Porto Alegre, RS.
              </p>
              <p className="font-jakarta text-charcoal/70 text-base leading-relaxed mb-5">
                Ao longo dos anos, construímos uma rede sólida de benefícios, convênios e ações que fortalecem não apenas a vida profissional, mas também a qualidade de vida de cada associado e de suas famílias.
              </p>
              <p className="font-jakarta text-charcoal/70 text-base leading-relaxed">
                Hoje, somos reconhecidos como uma das associações médicas mais atuantes do estado, sempre na vanguarda das discussões sobre saúde, ética e valorização profissional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão, Valores */}
      <section className="py-24 bg-[#F3F5F8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-px w-10 bg-gold" />
              <span className="font-jakarta text-gold text-sm font-medium tracking-widest uppercase">Identidade</span>
              <div className="h-px w-10 bg-gold" />
            </div>
            <h2 className="font-playfair text-4xl font-bold text-navy" style={{ letterSpacing: "-0.02em" }}>
              Missão, Visão e Valores
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl p-8 border-t-2 border-gold shadow-sm">
              <h3 className="font-playfair text-2xl font-bold text-navy mb-4">Missão</h3>
              <p className="font-jakarta text-charcoal/70 text-sm leading-relaxed">
                Representar, defender e valorizar os médicos e odontólogos do Hospital Conceição, promovendo benefícios, educação continuada e condições de trabalho dignas.
              </p>
            </div>
            <div className="bg-navy rounded-xl p-8 border-t-2 border-gold shadow-sm">
              <h3 className="font-playfair text-2xl font-bold text-gold mb-4">Visão</h3>
              <p className="font-jakarta text-white/70 text-sm leading-relaxed">
                Ser reconhecida como a maior referência em representação médica do Rio Grande do Sul, com associados satisfeitos e engajados na construção de uma medicina melhor.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 border-t-2 border-gold shadow-sm">
              <h3 className="font-playfair text-2xl font-bold text-navy mb-4">Propósito</h3>
              <p className="font-jakarta text-charcoal/70 text-sm leading-relaxed">
                Acreditar que médicos e odontólogos valorizados entregam uma medicina de maior qualidade, gerando impacto positivo para toda a sociedade.
              </p>
            </div>
          </div>

          {/* Valores */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {valores.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.titulo} className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                    <Icon size={22} className="text-gold" />
                  </div>
                  <h4 className="font-playfair font-bold text-navy text-lg mb-2">{v.titulo}</h4>
                  <p className="font-jakarta text-charcoal/60 text-xs leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Diretoria */}
      <section className="py-24 bg-clinical-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-px w-10 bg-gold" />
              <span className="font-jakarta text-gold text-sm font-medium tracking-widest uppercase">Gestão 2024–2026</span>
              <div className="h-px w-10 bg-gold" />
            </div>
            <h2 className="font-playfair text-4xl font-bold text-navy" style={{ letterSpacing: "-0.02em" }}>
              Nossa Diretoria
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {diretoria.map((d) => (
              <div key={d.nome} className="group text-center bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border-t-2 border-gold">
                <div className="w-20 h-20 rounded-full bg-navy/10 flex items-center justify-center mx-auto mb-4">
                  <span className="font-playfair font-bold text-navy text-2xl">{d.nome.charAt(4)}</span>
                </div>
                <h4 className="font-playfair font-bold text-navy text-lg leading-snug">{d.nome}</h4>
                <p className="font-jakarta text-gold font-medium text-sm mt-1">{d.cargo}</p>
                <p className="font-jakarta text-charcoal/50 text-xs mt-1">{d.especialidade}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}