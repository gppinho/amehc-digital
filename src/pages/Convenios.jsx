import { CheckCircle, ExternalLink } from "lucide-react";

const convenios = [
  {
    categoria: "Saúde e Bem-estar",
    icone: "🏥",
    items: [
      {
        nome: "Plano de Saúde – Unimed",
        desc: "Plano de saúde com cobertura nacional e condições especiais de mensalidade para associados e dependentes.",
        beneficios: ["Cobertura nacional", "Rede credenciada ampla", "Desconto em mensalidade", "Incluindo dependentes"],
      },
      {
        nome: "Seguro de Vida – Bradesco",
        desc: "Seguro de vida individual e em grupo com coberturas abrangentes para morte, invalidez e doenças graves.",
        beneficios: ["Morte natural e acidental", "Invalidez permanente", "Doenças graves", "Assistência funeral"],
      },
    ],
  },
  {
    categoria: "Jurídico e Financeiro",
    icone: "⚖️",
    items: [
      {
        nome: "Assessoria Jurídica – CJM",
        desc: "Atendimento jurídico especializado em direito médico, defesa do CRM, responsabilidade civil e trabalhista.",
        beneficios: ["Direito médico", "Defesa no CRM", "Responsabilidade civil", "Consultas gratuitas"],
      },
      {
        nome: "Crédito Facilitado – Sicredi",
        desc: "Linhas de crédito com taxas diferenciadas para compra de equipamentos, reforma de consultório ou veículos.",
        beneficios: ["Taxas reduzidas", "Prazos estendidos", "Análise simplificada", "Sem burocracia"],
      },
    ],
  },
  {
    categoria: "Educação e Cultura",
    icone: "📚",
    items: [
      {
        nome: "Cursos e Congressos – CFM",
        desc: "Acesso com desconto a congressos médicos nacionais, cursos de atualização e pós-graduação em parceria com universidades.",
        beneficios: ["Desconto em congressos", "Pós-graduação parceira", "EAD disponível", "Certificação reconhecida"],
      },
      {
        nome: "Biblioteca Virtual – UpToDate",
        desc: "Acesso subsidiado à maior base de dados clínicos do mundo, com informações atualizadas sobre diagnóstico e tratamento.",
        beneficios: ["Acesso completo", "Mobile e desktop", "Subsidiado pela AMEHC", "Atualização constante"],
      },
    ],
  },
  {
    categoria: "Farmácias e Medicamentos",
    icone: "💊",
    items: [
      {
        nome: "Programa Farmácias Parceiras",
        desc: "Descontos de até 30% em medicamentos em redes parceiras como Panvel e Drogasil, mediante apresentação de carteirinha.",
        beneficios: ["Até 30% de desconto", "Redes Panvel e Drogasil", "Genéricos e referência", "Validade nacional"],
      },
    ],
  },
];

export default function Convenios() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-gold" />
            <span className="font-jakarta text-gold text-sm font-medium tracking-widest uppercase">Benefícios</span>
            <div className="h-px w-10 bg-gold" />
          </div>
          <h1 className="font-playfair text-5xl font-bold text-white" style={{ letterSpacing: "-0.02em" }}>
            Convênios e Vantagens
          </h1>
          <p className="font-jakarta text-white/60 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            Como associado da AMEHC, você tem acesso a um portfólio exclusivo de benefícios pensados para você e sua família.
          </p>
        </div>
      </section>

      {/* Convênios */}
      <section className="py-16 bg-clinical-white">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          {convenios.map((cat) => (
            <div key={cat.categoria}>
              <div className="flex items-center gap-4 mb-8">
                <span className="text-3xl">{cat.icone}</span>
                <div>
                  <div className="h-px w-8 bg-gold mb-2" />
                  <h2 className="font-playfair text-2xl font-bold text-navy">{cat.categoria}</h2>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {cat.items.map((item) => (
                  <div key={item.nome} className="bg-white rounded-xl p-8 shadow-sm border-t-2 border-gold hover:shadow-md transition-all duration-300">
                    <h3 className="font-playfair text-xl font-bold text-navy mb-3">{item.nome}</h3>
                    <p className="font-jakarta text-charcoal/70 text-sm leading-relaxed mb-5">{item.desc}</p>
                    <ul className="space-y-2">
                      {item.beneficios.map((b) => (
                        <li key={b} className="flex items-center gap-3 font-jakarta text-sm text-charcoal/70">
                          <CheckCircle size={15} className="text-gold shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Nota */}
      <section className="py-12 bg-navy/5 border-t border-gold/20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="font-jakarta text-charcoal/60 text-sm">
            Para utilizar os benefícios, apresente sua carteirinha de associado da AMEHC. Dúvidas?{" "}
            <a href="/contato" className="text-gold font-medium hover:underline">Entre em contato conosco.</a>
          </p>
        </div>
      </section>
    </div>
  );
}