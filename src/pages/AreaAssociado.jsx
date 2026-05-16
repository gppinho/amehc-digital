import { useState } from "react";
import { FileText, Download, Search, Calendar, Bell, ChevronRight, LogOut, User } from "lucide-react";
import { Link } from "react-router-dom";

const documentos = [
  { nome: "Estatuto Social AMEHC 2024", tipo: "PDF", data: "Jan 2024", categoria: "Institucional" },
  { nome: "Ata Assembleia Geral 2024", tipo: "PDF", data: "Mar 2024", categoria: "Atas" },
  { nome: "Relatório Financeiro 2023", tipo: "PDF", data: "Fev 2024", categoria: "Financeiro" },
  { nome: "Circular nº 01/2025 – Convênio Unimed", tipo: "PDF", data: "Jan 2025", categoria: "Circulares" },
  { nome: "Circular nº 02/2025 – Assembleia Maio", tipo: "PDF", data: "Abr 2025", categoria: "Circulares" },
  { nome: "Boletim Informativo Março 2025", tipo: "PDF", data: "Mar 2025", categoria: "Informativos" },
  { nome: "Contrato Seguro de Vida 2025", tipo: "PDF", data: "Jan 2025", categoria: "Contratos" },
  { nome: "Guia de Benefícios 2025", tipo: "PDF", data: "Jan 2025", categoria: "Informativos" },
];

const categorias = ["Todos", "Institucional", "Atas", "Financeiro", "Circulares", "Informativos", "Contratos"];

const avisos = [
  { texto: "Assembleia Geral em 28/05 – Confirme sua presença", data: "Hoje" },
  { texto: "Novo benefício disponível: Desconto em farmácias", data: "3 dias" },
  { texto: "Relatório financeiro do 1º trimestre publicado", data: "1 sem" },
];

export default function AreaAssociado() {
  const [busca, setBusca] = useState("");
  const [catAtiva, setCatAtiva] = useState("Todos");

  const docsFiltrados = documentos.filter((d) => {
    const matchBusca = d.nome.toLowerCase().includes(busca.toLowerCase());
    const matchCat = catAtiva === "Todos" || d.categoria === catAtiva;
    return matchBusca && matchCat;
  });

  return (
    <div className="min-h-screen bg-[#F0F2F5] pt-20">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-navy min-h-[calc(100vh-80px)] fixed left-0 top-20 hidden lg:flex flex-col">
          <div className="p-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center">
                <User size={18} className="text-navy" />
              </div>
              <div>
                <p className="font-jakarta text-white font-semibold text-sm">Dr. João Silva</p>
                <p className="font-jakarta text-white/50 text-xs">Médico Associado</p>
              </div>
            </div>
          </div>

          <nav className="p-4 flex-1">
            {[
              { icon: FileText, label: "Documentos", active: true },
              { icon: Calendar, label: "Agenda" },
              { icon: Bell, label: "Avisos" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.label}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-1 font-jakarta text-sm transition-all ${
                    item.active ? "bg-gold text-navy font-semibold" : "text-white/70 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <Icon size={17} />
                  {item.label}
                </button>
              );
            })}
          </nav>

          <div className="p-4 border-t border-white/10">
            <Link
              to="/login"
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-white/50 hover:text-white hover:bg-white/10 transition-all font-jakarta text-sm"
            >
              <LogOut size={17} />
              Sair
            </Link>
          </div>
        </aside>

        {/* Conteúdo */}
        <main className="lg:ml-64 flex-1 p-6 lg:p-10">
          {/* Header */}
          <div className="mb-8">
            <h1 className="font-playfair text-3xl font-bold text-navy">Área do Associado</h1>
            <p className="font-jakarta text-charcoal/60 text-sm mt-1">Bem-vindo, Dr. João. Aqui estão seus documentos e informações.</p>
          </div>

          {/* Avisos */}
          <div className="bg-navy rounded-xl p-6 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Bell size={18} className="text-gold" />
              <h3 className="font-playfair font-bold text-white text-lg">Avisos Recentes</h3>
            </div>
            <div className="space-y-3">
              {avisos.map((a) => (
                <div key={a.texto} className="flex items-center justify-between py-3 border-b border-white/10 last:border-0">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gold shrink-0" />
                    <span className="font-jakarta text-white/80 text-sm">{a.texto}</span>
                  </div>
                  <span className="font-jakarta text-white/40 text-xs shrink-0 ml-4">{a.data}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Documentos */}
          <div className="bg-white rounded-xl shadow-sm">
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <h3 className="font-playfair font-bold text-navy text-xl">Documentos</h3>
                <div className="relative">
                  <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-charcoal/40" />
                  <input
                    type="text"
                    placeholder="Buscar documento..."
                    value={busca}
                    onChange={(e) => setBusca(e.target.value)}
                    className="pl-9 pr-4 py-2 border border-gray-200 rounded-lg font-jakarta text-sm focus:outline-none focus:border-gold transition-colors w-64"
                  />
                </div>
              </div>

              {/* Filtros de categoria */}
              <div className="flex flex-wrap gap-2 mt-4">
                {categorias.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCatAtiva(cat)}
                    className={`px-4 py-1.5 rounded-full font-jakarta text-xs font-medium transition-all ${
                      cat === catAtiva ? "bg-navy text-white" : "bg-gray-100 text-charcoal hover:bg-gold/10 hover:text-gold"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="divide-y divide-gray-50">
              {docsFiltrados.length === 0 ? (
                <div className="p-12 text-center">
                  <FileText size={40} className="text-gray-200 mx-auto mb-3" />
                  <p className="font-jakarta text-charcoal/40 text-sm">Nenhum documento encontrado.</p>
                </div>
              ) : (
                docsFiltrados.map((doc) => (
                  <div key={doc.nome} className="flex items-center justify-between gap-4 p-5 hover:bg-gray-50 transition-colors group">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                        <FileText size={18} className="text-gold" />
                      </div>
                      <div>
                        <p className="font-jakarta font-semibold text-charcoal text-sm group-hover:text-navy transition-colors">{doc.nome}</p>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="font-jakarta text-xs text-charcoal/40">{doc.data}</span>
                          <span className="font-jakarta text-xs text-gold bg-gold/10 px-2 py-0.5 rounded-full">{doc.categoria}</span>
                        </div>
                      </div>
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 text-charcoal/60 rounded-lg font-jakarta text-xs hover:border-gold hover:text-gold transition-all opacity-0 group-hover:opacity-100">
                      <Download size={13} />
                      Baixar
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}