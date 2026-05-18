import { useState } from "react";
import { Link } from "react-router-dom";

const COLORS = { navy: "#2E207A", gold: "#F5C518", white: "#FAFAFB", charcoal: "#1A1A1A" };

const estrutura = [
  {
    tabela: "noticia",
    descricao: "Notícias e informativos",
    campos: [
      { nome: "id", tipo: "INT AUTO_INCREMENT PK" },
      { nome: "titulo", tipo: "VARCHAR(200)" },
      { nome: "resumo", tipo: "VARCHAR(300)" },
      { nome: "descricao", tipo: "TEXT" },
      { nome: "imagem", tipo: "VARCHAR(500)" },
      { nome: "categoria", tipo: "VARCHAR(100)" },
      { nome: "dt_publicacao", tipo: "DATETIME" },
      { nome: "dt_validade", tipo: "DATETIME NULL" },
      { nome: "ativo", tipo: "TINYINT(1) DEFAULT 1" },
    ],
    pagina: "/noticias",
  },
  {
    tabela: "evento",
    descricao: "Agenda de eventos",
    campos: [
      { nome: "id", tipo: "INT AUTO_INCREMENT PK" },
      { nome: "titulo", tipo: "VARCHAR(200)" },
      { nome: "descricao", tipo: "TEXT" },
      { nome: "local", tipo: "VARCHAR(300)" },
      { nome: "data_inicio", tipo: "DATETIME" },
      { nome: "data_fim", tipo: "DATETIME NULL" },
      { nome: "tipo", tipo: "VARCHAR(100)" },
      { nome: "vagas", tipo: "INT NULL" },
      { nome: "ativo", tipo: "TINYINT(1) DEFAULT 1" },
    ],
    pagina: "/agenda",
  },
  {
    tabela: "convenio",
    descricao: "Convênios e benefícios",
    campos: [
      { nome: "id", tipo: "INT AUTO_INCREMENT PK" },
      { nome: "nome", tipo: "VARCHAR(200)" },
      { nome: "descricao", tipo: "TEXT" },
      { nome: "categoria", tipo: "VARCHAR(100)" },
      { nome: "logo", tipo: "VARCHAR(500)" },
      { nome: "link", tipo: "VARCHAR(500)" },
      { nome: "beneficios", tipo: "TEXT (JSON array)" },
      { nome: "ativo", tipo: "TINYINT(1) DEFAULT 1" },
    ],
    pagina: "/convenios",
  },
  {
    tabela: "documento",
    descricao: "Documentos da área do associado",
    campos: [
      { nome: "id", tipo: "INT AUTO_INCREMENT PK" },
      { nome: "nome", tipo: "VARCHAR(300)" },
      { nome: "arquivo", tipo: "VARCHAR(500)" },
      { nome: "categoria", tipo: "VARCHAR(100)" },
      { nome: "dt_publicacao", tipo: "DATETIME" },
      { nome: "nivel_acesso", tipo: "TINYINT(1) DEFAULT 1" },
    ],
    pagina: "/area-do-associado",
  },
  {
    tabela: "usuario",
    descricao: "Associados / usuários do sistema",
    campos: [
      { nome: "id", tipo: "INT AUTO_INCREMENT PK" },
      { nome: "nome", tipo: "VARCHAR(300)" },
      { nome: "email", tipo: "VARCHAR(200) UNIQUE" },
      { nome: "senha", tipo: "VARCHAR(255) (bcrypt)" },
      { nome: "crm", tipo: "VARCHAR(50)" },
      { nome: "especialidade", tipo: "VARCHAR(200)" },
      { nome: "nivel", tipo: "TINYINT (1=user, 99=admin)" },
      { nome: "ativo", tipo: "TINYINT(1) DEFAULT 0" },
      { nome: "dt_cadastro", tipo: "DATETIME" },
    ],
    pagina: "/area-do-associado",
  },
  {
    tabela: "contato",
    descricao: "Mensagens do formulário de contato",
    campos: [
      { nome: "id", tipo: "INT AUTO_INCREMENT PK" },
      { nome: "nome", tipo: "VARCHAR(200)" },
      { nome: "email", tipo: "VARCHAR(200)" },
      { nome: "telefone", tipo: "VARCHAR(50)" },
      { nome: "assunto", tipo: "VARCHAR(300)" },
      { nome: "mensagem", tipo: "TEXT" },
      { nome: "dt_envio", tipo: "DATETIME" },
      { nome: "lido", tipo: "TINYINT(1) DEFAULT 0" },
    ],
    pagina: "/contato",
  },
];

const paginas = [
  { rota: "/index.php", nome: "Home", desc: "Hero + stats + últimas notícias + convênios + CTA" },
  { rota: "/sobre.php", nome: "Sobre", desc: "História + missão + visão + diretoria" },
  { rota: "/noticias.php", nome: "Notícias", desc: "Lista com filtro por categoria + paginação" },
  { rota: "/noticia.php?id=", nome: "Notícia detalhe", desc: "Conteúdo completo da notícia" },
  { rota: "/agenda.php", nome: "Agenda", desc: "Lista de eventos futuros" },
  { rota: "/convenios.php", nome: "Convênios", desc: "Grid de convênios por categoria" },
  { rota: "/associe-se.php", nome: "Associe-se", desc: "Formulário de pré-cadastro com steps" },
  { rota: "/contato.php", nome: "Contato", desc: "Formulário + dados de contato" },
  { rota: "/area-associado.php", nome: "Área do Associado", desc: "Login + documentos + avisos (sessão PHP)" },
  { rota: "/admin/", nome: "Painel Admin", desc: "CRUD de notícias, eventos, documentos, convênios" },
];

const passos = [
  {
    num: "01",
    titulo: "Ambiente de desenvolvimento",
    itens: [
      "Instalar XAMPP (Apache + PHP 8+ + MySQL)",
      "Criar banco: CREATE DATABASE amehc CHARACTER SET utf8mb4;",
      "Configurar vhost local: amehc.local",
    ],
  },
  {
    num: "02",
    titulo: "Estrutura de pastas",
    itens: [
      "/amehc/index.php, sobre.php, noticias.php...",
      "/amehc/includes/ → config.php, header.php, footer.php, functions.php",
      "/amehc/admin/ → painel de gestão (protegido por sessão)",
      "/amehc/assets/css/ → style.css, admin.css",
      "/amehc/assets/js/ → main.js",
      "/amehc/assets/img/ → logo + uploads",
      "/amehc/uploads/ → imagens e documentos enviados",
    ],
  },
  {
    num: "03",
    titulo: "Banco de dados",
    itens: [
      "Executar os CREATE TABLE das 6 entidades definidas",
      "Criar tabela 'configuracoes' para dados gerais do site",
      "Inserir registros de exemplo (admin, convênios iniciais)",
      "Criar índices nas colunas de busca (titulo, dt_publicacao, ativo)",
    ],
  },
  {
    num: "04",
    titulo: "includes/config.php",
    itens: [
      "define('DB_HOST', 'localhost');",
      "define('DB_NAME', 'amehc');",
      "define('DB_USER', 'root');",
      "define('DB_PASS', '');",
      "Conexão PDO: $pdo = new PDO(...) com try/catch",
      "define('SITE_URL', 'https://amehc.com.br');",
    ],
  },
  {
    num: "05",
    titulo: "includes/functions.php",
    itens: [
      "sanitize($input) → htmlspecialchars + strip_tags",
      "formatDate($date) → formato brasileiro",
      "uploadImage($file, $dir) → validação + renomear + mover",
      "sendEmail($to, $subject, $body) → PHPMailer + SMTP",
      "isLoggedIn() → verificação de sessão",
      "isAdmin() → verificação de nível de acesso",
    ],
  },
  {
    num: "06",
    titulo: "Frontend (CSS/JS)",
    itens: [
      "Importar Google Fonts: Playfair Display + Plus Jakarta Sans",
      "CSS Variables: --navy: #2E207A; --gold: #F5C518;",
      "Navbar fixa com scroll detection (JS)",
      "Menu mobile (hamburger) em JS puro",
      "Smooth scroll e animações de entrada (IntersectionObserver)",
      "Slider de notícias na home (Swiper.js CDN)",
    ],
  },
  {
    num: "07",
    titulo: "Área do Associado (autenticação)",
    itens: [
      "session_start() em todo header.php",
      "Login: SELECT + password_verify() (nunca MD5!)",
      "Logout: session_destroy() + redirect",
      "Proteção de páginas: if (!isLoggedIn()) header('Location: login.php');",
      "Recuperação de senha: token único + email + prazo 1h",
    ],
  },
  {
    num: "08",
    titulo: "Painel Administrativo (/admin)",
    itens: [
      "Login separado com verificação nivel = 99",
      "CRUD de Notícias (criar/editar/excluir + upload de imagem)",
      "CRUD de Eventos + controle de ativo/inativo",
      "CRUD de Documentos (upload PDF + controle de acesso)",
      "Gestão de Convênios + logo",
      "Visualização de mensagens de contato",
      "Listagem de associados cadastrados",
    ],
  },
  {
    num: "09",
    titulo: "Hospedagem (KingHost recomendado)",
    itens: [
      "Plano PHP com MySQL (já compatível com o dump existente)",
      "Criar banco de dados no painel KingHost",
      "Upload via FTP (FileZilla) ou Git",
      "Configurar config.php com dados de produção",
      "Configurar SMTP para envio de e-mails",
      "Ativar SSL (Let's Encrypt gratuito no painel)",
    ],
  },
  {
    num: "10",
    titulo: "SEO e performance",
    itens: [
      "Meta tags dinâmicas por página (title + description)",
      "Open Graph para compartilhamento em redes sociais",
      "Sitemap.xml gerado automaticamente via PHP",
      "Compressão de imagens no upload (GD Library)",
      "Cache de consultas frequentes com arquivos .cache",
      "Arquivo .htaccess com URLs amigáveis (mod_rewrite)",
    ],
  },
];

const componentesVisuais = [
  { nome: "Navbar", desc: "Logo + links + botão Área do Associado. Fundo transparente → navy sólido ao scroll.", cor: "navy" },
  { nome: "Hero", desc: "Full height, imagem de fundo médica, overlay gradiente navy, h1 playfair, 2 botões CTA.", cor: "navy" },
  { nome: "Stats Bar", desc: "Barra navy/90 na base do hero: 500+ Associados | 30+ Anos | 20+ Convênios | 100% Dedicação.", cor: "gold" },
  { nome: "Seção Sobre", desc: "2 colunas: texto left + imagem right com card flutuante gold '30+ anos'.", cor: "white" },
  { nome: "Cards Notícias", desc: "Grid 3 colunas, imagem 16:9, borda-top gold, título navy, data gold.", cor: "white" },
  { nome: "Grid Convênios", desc: "Fundo navy, 6 cards 2x3, ícone emoji, título branco, desc branco/60.", cor: "navy" },
  { nome: "CTA Banner", desc: "Fundo navy, título centrado, 2 botões: gold (associar) + outline (contato).", cor: "navy" },
  { nome: "Footer", desc: "Navy, logo, links, contato, redes sociais, barra gold na base.", cor: "navy" },
];

export default function PlanoExportacao() {
  const [aba, setAba] = useState("layout");

  return (
    <div className="min-h-screen bg-gray-50 pt-20 font-jakarta">
      {/* Header */}
      <div className="bg-navy text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-10 bg-gold" />
            <span className="text-gold text-sm font-medium tracking-widest uppercase">Exportação</span>
          </div>
          <h1 className="font-playfair text-4xl font-bold text-white mb-2">Guia Completo AMEHC</h1>
          <p className="text-white/70 text-sm">Layout + Plano de Execução PHP/MySQL</p>
        </div>
      </div>

      {/* Abas */}
      <div className="bg-white border-b border-gray-200 sticky top-[72px] z-40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex gap-1 overflow-x-auto">
            {[
              { id: "layout", label: "🎨 Layout" },
              { id: "banco", label: "🗄️ Banco de Dados" },
              { id: "paginas", label: "📄 Páginas PHP" },
              { id: "passos", label: "🚀 Plano de Execução" },
              { id: "codigo", label: "💻 Código Base" },
            ].map((a) => (
              <button
                key={a.id}
                onClick={() => setAba(a.id)}
                className={`px-5 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                  aba === a.id ? "border-gold text-navy" : "border-transparent text-gray-500 hover:text-navy"
                }`}
              >
                {a.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* ABA: LAYOUT */}
        {aba === "layout" && (
          <div className="space-y-10">
            <div>
              <h2 className="font-playfair text-2xl font-bold text-navy mb-2">Paleta de Cores</h2>
              <p className="text-gray-500 text-sm mb-6">Copie estes valores para o Canva</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { cor: "#2E207A", nome: "Navy (Principal)", hex: "#2E207A" },
                  { cor: "#F5C518", nome: "Gold (Destaque)", hex: "#F5C518" },
                  { cor: "#FAFAFB", nome: "Branco Clínico", hex: "#FAFAFB" },
                  { cor: "#1A1A1A", nome: "Carvão (Texto)", hex: "#1A1A1A" },
                ].map((c) => (
                  <div key={c.hex} className="rounded-xl overflow-hidden shadow-sm border border-gray-100">
                    <div className="h-24" style={{ backgroundColor: c.cor }} />
                    <div className="p-3 bg-white">
                      <p className="font-semibold text-sm text-gray-800">{c.nome}</p>
                      <p className="text-xs text-gray-500 font-mono mt-1">{c.hex}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-playfair text-2xl font-bold text-navy mb-2">Tipografia</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Títulos</p>
                  <p className="font-playfair text-3xl font-bold text-navy">Playfair Display</p>
                  <p className="text-sm text-gray-500 mt-2">Bold 700/800 · Serifada · Google Fonts</p>
                  <p className="text-xs text-gray-400 mt-3 font-mono">@import url('fonts.googleapis.com/css2?family=Playfair+Display...')</p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Corpo de texto</p>
                  <p className="font-jakarta text-2xl font-medium text-navy">Plus Jakarta Sans</p>
                  <p className="text-sm text-gray-500 mt-2">Regular 400 / Medium 500 / SemiBold 600 · Google Fonts</p>
                  <p className="text-xs text-gray-400 mt-3 font-mono">family=Plus+Jakarta+Sans:wght@300;400;500;600;700</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-playfair text-2xl font-bold text-navy mb-2">Componentes Visuais</h2>
              <p className="text-gray-500 text-sm mb-6">Estrutura de cada seção para recriar no Canva</p>
              <div className="space-y-4">
                {componentesVisuais.map((c) => (
                  <div key={c.nome} className="bg-white rounded-xl p-5 border border-gray-100 flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-lg shrink-0 flex items-center justify-center text-xs font-bold"
                      style={{
                        backgroundColor: c.cor === "navy" ? "#2E207A" : c.cor === "gold" ? "#F5C518" : "#F3F5F8",
                        color: c.cor === "gold" ? "#2E207A" : "#fff",
                      }}
                    >
                      {c.nome.slice(0, 2)}
                    </div>
                    <div>
                      <p className="font-semibold text-navy">{c.nome}</p>
                      <p className="text-sm text-gray-500 mt-1">{c.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-playfair text-2xl font-bold text-navy mb-2">Mockup das Seções (Home)</h2>
              <div className="space-y-3 rounded-xl overflow-hidden border border-gray-200 shadow-lg">
                {/* Navbar mockup */}
                <div className="px-8 py-3 flex justify-between items-center" style={{ background: "#2E207A" }}>
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-8 rounded-full" style={{ background: "#F5C518" }} />
                  </div>
                  <div className="flex gap-6">
                    {["Sobre","Notícias","Agenda","Convênios","Contato"].map(l => (
                      <span key={l} className="text-white/80 text-xs">{l}</span>
                    ))}
                  </div>
                  <div className="px-4 py-1.5 rounded text-xs font-bold" style={{ background: "#F5C518", color: "#2E207A" }}>
                    Área do Associado
                  </div>
                </div>
                {/* Hero mockup */}
                <div className="relative flex items-center px-12 py-16" style={{ background: "linear-gradient(to right, rgba(46,32,122,0.95) 50%, rgba(46,32,122,0.6))", minHeight: 200 }}>
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="h-px w-8" style={{ background: "#F5C518" }} />
                      <span className="text-xs tracking-widest" style={{ color: "#F5C518" }}>HOSPITAL CONCEIÇÃO</span>
                    </div>
                    <p className="font-playfair text-2xl font-bold text-white mb-1">Associação dos</p>
                    <p className="font-playfair text-2xl font-bold" style={{ color: "#F5C518" }}>Médicos e Odontólogos</p>
                    <p className="text-white/70 text-xs mt-2 max-w-xs">Unindo profissionais de saúde em prol da medicina de excelência.</p>
                    <div className="flex gap-3 mt-4">
                      <div className="px-5 py-2 rounded text-xs font-bold" style={{ background: "#F5C518", color: "#2E207A" }}>Conheça a AMEHC →</div>
                      <div className="px-5 py-2 rounded text-xs border text-white border-white/50">Associe-se</div>
                    </div>
                  </div>
                  {/* Stats bar */}
                  <div className="absolute bottom-0 left-0 right-0 px-8 py-3 flex justify-around" style={{ background: "rgba(46,32,122,0.9)" }}>
                    {["500+ Associados","30+ Anos","20+ Convênios","100% Dedicação"].map(s => (
                      <div key={s} className="text-center">
                        <p className="text-xs font-bold" style={{ color: "#F5C518" }}>{s.split(" ")[0]}</p>
                        <p className="text-white/60 text-xs">{s.split(" ").slice(1).join(" ")}</p>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Notícias mockup */}
                <div className="px-8 py-8" style={{ background: "#F3F5F8" }}>
                  <p className="font-playfair text-lg font-bold mb-4" style={{ color: "#2E207A" }}>Últimas Notícias</p>
                  <div className="grid grid-cols-3 gap-4">
                    {["Assembleia 2025","Novo Convênio","Congresso 2025"].map(t => (
                      <div key={t} className="rounded-lg overflow-hidden bg-white shadow-sm">
                        <div className="h-20 bg-gray-200" />
                        <div className="p-3 border-t-2" style={{ borderColor: "#F5C518" }}>
                          <p className="text-xs font-semibold" style={{ color: "#2E207A" }}>{t}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Footer mockup */}
                <div className="px-8 py-5 flex justify-between items-center text-xs" style={{ background: "#2E207A" }}>
                  <span className="text-white/50">© 2025 AMEHC – Todos os direitos reservados</span>
                  <span style={{ color: "#F5C518" }}>Área do Associado</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ABA: BANCO DE DADOS */}
        {aba === "banco" && (
          <div className="space-y-8">
            <div>
              <h2 className="font-playfair text-2xl font-bold text-navy mb-1">Estrutura do Banco MySQL</h2>
              <p className="text-gray-500 text-sm mb-6">6 tabelas principais para o site dinâmico</p>
            </div>
            {estrutura.map((t) => (
              <div key={t.tabela} className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm">
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100" style={{ background: "#2E207A" }}>
                  <div>
                    <p className="font-mono font-bold text-white text-sm">{t.tabela}</p>
                    <p className="text-white/60 text-xs mt-0.5">{t.descricao}</p>
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full font-medium" style={{ background: "#F5C518", color: "#2E207A" }}>
                    {t.pagina}
                  </span>
                </div>
                <div className="divide-y divide-gray-50">
                  {t.campos.map((c) => (
                    <div key={c.nome} className="flex justify-between items-center px-6 py-3">
                      <code className="text-sm font-mono text-navy font-medium">{c.nome}</code>
                      <code className="text-xs text-gray-400 font-mono">{c.tipo}</code>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm">
              <div className="px-6 py-4 border-b border-gray-100" style={{ background: "#1A1A1A" }}>
                <p className="font-mono font-bold text-white text-sm">SQL de criação (exemplo: tabela noticia)</p>
              </div>
              <pre className="p-6 text-xs font-mono text-gray-700 overflow-x-auto leading-relaxed bg-gray-50">{`CREATE TABLE noticia (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(200) NOT NULL,
  resumo VARCHAR(300),
  descricao TEXT NOT NULL,
  imagem VARCHAR(500),
  categoria VARCHAR(100),
  dt_publicacao DATETIME DEFAULT CURRENT_TIMESTAMP,
  dt_validade DATETIME NULL,
  ativo TINYINT(1) DEFAULT 1,
  INDEX idx_ativo (ativo),
  INDEX idx_dt (dt_publicacao)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;`}</pre>
            </div>
          </div>
        )}

        {/* ABA: PÁGINAS PHP */}
        {aba === "paginas" && (
          <div className="space-y-6">
            <div>
              <h2 className="font-playfair text-2xl font-bold text-navy mb-1">Páginas do Site</h2>
              <p className="text-gray-500 text-sm mb-6">{paginas.length} arquivos PHP necessários</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {paginas.map((p) => (
                <div key={p.rota} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: "#2E207A" }}>
                      <span className="text-white text-xs font-bold">PHP</span>
                    </div>
                    <div>
                      <p className="font-semibold text-navy">{p.nome}</p>
                      <code className="text-xs text-gray-400 font-mono">{p.rota}</code>
                      <p className="text-sm text-gray-500 mt-1">{p.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm mt-6">
              <div className="px-6 py-4 border-b border-gray-100" style={{ background: "#1A1A1A" }}>
                <p className="font-mono font-bold text-white text-sm">Exemplo: noticias.php (lógica principal)</p>
              </div>
              <pre className="p-6 text-xs font-mono text-gray-700 overflow-x-auto leading-relaxed bg-gray-50">{`<?php
require_once 'includes/config.php';
require_once 'includes/functions.php';

// Paginação
$pagina = isset($_GET['p']) ? (int)$_GET['p'] : 1;
$limite = 9;
$offset = ($pagina - 1) * $limite;

// Filtro de categoria
$categoria = isset($_GET['cat']) ? sanitize($_GET['cat']) : '';

// Query
$sql = "SELECT * FROM noticia WHERE ativo = 1";
if ($categoria) $sql .= " AND categoria = :cat";
$sql .= " ORDER BY dt_publicacao DESC LIMIT :limite OFFSET :offset";

$stmt = $pdo->prepare($sql);
if ($categoria) $stmt->bindParam(':cat', $categoria);
$stmt->bindParam(':limite', $limite, PDO::PARAM_INT);
$stmt->bindParam(':offset', $offset, PDO::PARAM_INT);
$stmt->execute();
$noticias = $stmt->fetchAll(PDO::FETCH_ASSOC);

include 'includes/header.php';
?>

<!-- HTML das notícias aqui -->
<?php foreach ($noticias as $n): ?>
  <article class="card-noticia">
    <a href="noticia.php?id=<?= $n['id'] ?>">
      <img src="uploads/<?= $n['imagem'] ?>" alt="<?= htmlspecialchars($n['titulo']) ?>">
      <h2><?= htmlspecialchars($n['titulo']) ?></h2>
      <p><?= htmlspecialchars($n['resumo']) ?></p>
    </a>
  </article>
<?php endforeach; ?>

<?php include 'includes/footer.php'; ?>`}</pre>
            </div>
          </div>
        )}

        {/* ABA: PLANO */}
        {aba === "passos" && (
          <div className="space-y-6">
            <div>
              <h2 className="font-playfair text-2xl font-bold text-navy mb-1">Plano de Execução</h2>
              <p className="text-gray-500 text-sm mb-6">10 etapas para construir o site do zero</p>
            </div>
            {passos.map((p) => (
              <div key={p.num} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="flex items-center gap-4 px-6 py-4 border-b border-gray-100">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0" style={{ background: "#2E207A", color: "#F5C518" }}>
                    {p.num}
                  </div>
                  <h3 className="font-semibold text-navy text-base">{p.titulo}</h3>
                </div>
                <ul className="px-6 py-4 space-y-2">
                  {p.itens.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#F5C518" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* ABA: CÓDIGO BASE */}
        {aba === "codigo" && (
          <div className="space-y-6">
            <div>
              <h2 className="font-playfair text-2xl font-bold text-navy mb-1">Código Base Reutilizável</h2>
              <p className="text-gray-500 text-sm mb-6">Copie e cole para começar mais rápido</p>
            </div>

            {[
              {
                titulo: "includes/config.php",
                codigo: `<?php
define('DB_HOST', 'localhost');
define('DB_NAME', 'amehc');
define('DB_USER', 'root');
define('DB_PASS', '');
define('SITE_URL', 'https://amehc.com.br');
define('UPLOAD_DIR', __DIR__ . '/../uploads/');

try {
    $pdo = new PDO(
        "mysql:host=".DB_HOST.";dbname=".DB_NAME.";charset=utf8mb4",
        DB_USER, DB_PASS,
        [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
         PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC]
    );
} catch (PDOException $e) {
    die('Erro de conexão: ' . $e->getMessage());
}
session_start();`,
              },
              {
                titulo: "includes/functions.php",
                codigo: `<?php
function sanitize($input) {
    return htmlspecialchars(strip_tags(trim($input)));
}

function formatDate($date) {
    return date('d/m/Y', strtotime($date));
}

function isLoggedIn() {
    return isset($_SESSION['usuario_id']);
}

function isAdmin() {
    return isset($_SESSION['nivel']) && $_SESSION['nivel'] == 99;
}

function redirect($url) {
    header("Location: " . SITE_URL . $url);
    exit;
}

function uploadImage($file, $dir = 'noticias') {
    $ext = pathinfo($file['name'], PATHINFO_EXTENSION);
    $nome = uniqid() . '.' . $ext;
    $destino = UPLOAD_DIR . $dir . '/' . $nome;
    if (move_uploaded_file($file['tmp_name'], $destino)) {
        return $dir . '/' . $nome;
    }
    return false;
}`,
              },
              {
                titulo: "assets/css/style.css (variáveis)",
                codigo: `:root {
  --navy: #2E207A;
  --gold: #F5C518;
  --white: #FAFAFB;
  --charcoal: #1A1A1A;
  --font-title: 'Playfair Display', serif;
  --font-body: 'Plus Jakarta Sans', sans-serif;
}

* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  font-family: var(--font-body);
  background: var(--white);
  color: var(--charcoal);
}

h1, h2, h3, h4 {
  font-family: var(--font-title);
}

.btn-gold {
  background: var(--gold);
  color: var(--navy);
  font-weight: 700;
  padding: 12px 32px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  transition: opacity 0.2s;
}

.btn-gold:hover { opacity: 0.9; }

.btn-outline {
  border: 1px solid rgba(255,255,255,0.4);
  color: white;
  background: transparent;
  padding: 12px 32px;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s;
}

.btn-outline:hover { background: rgba(255,255,255,0.1); }`,
              },
              {
                titulo: "assets/js/main.js (navbar scroll)",
                codigo: `// Navbar scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile menu
const menuBtn = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
menuBtn?.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

// Animações de entrada
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));`,
              },
            ].map((bloco) => (
              <div key={bloco.titulo} className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm">
                <div className="px-6 py-3 border-b border-gray-100 flex items-center gap-3" style={{ background: "#1A1A1A" }}>
                  <span className="text-xs font-mono text-gray-300">{bloco.titulo}</span>
                </div>
                <pre className="p-6 text-xs font-mono text-gray-700 overflow-x-auto leading-relaxed bg-gray-50 whitespace-pre-wrap">
                  {bloco.codigo}
                </pre>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Bottom nav */}
      <div className="border-t border-gray-200 bg-white py-6 mt-10">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="text-sm text-gray-500 hover:text-navy">← Voltar ao site</Link>
          <p className="text-xs text-gray-400">AMEHC · Plano de exportação completo</p>
        </div>
      </div>
    </div>
  );
}