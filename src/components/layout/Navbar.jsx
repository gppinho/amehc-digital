import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, LogIn } from "lucide-react";

const links = [
  { label: "Sobre", href: "/sobre" },
  { label: "Notícias", href: "/noticias" },
  { label: "Agenda", href: "/agenda" },
  { label: "Convênios", href: "/convenios" },
  { label: "Associe-se", href: "/associe-se" },
  { label: "Contato", href: "/contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = location.pathname === "/";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled || !isHome
          ? "bg-navy/95 backdrop-blur-[12px] shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center">
            <span className="text-navy font-playfair font-bold text-sm">A</span>
          </div>
          <div>
            <div className="font-playfair font-bold text-white text-lg leading-tight">AMEHC</div>
            <div className="text-gold text-xs font-jakarta leading-tight hidden sm:block">Associação Médica</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`font-jakarta text-sm font-medium transition-colors duration-200 hover:text-gold ${
                location.pathname === link.href ? "text-gold" : "text-white/90"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/area-do-associado"
            className="flex items-center gap-2 px-5 py-2.5 rounded-md border border-gold/60 text-gold text-sm font-jakarta font-medium hover:bg-gold hover:text-navy transition-all duration-200 animate-glow-pulse"
          >
            <LogIn size={15} />
            Área do Associado
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-navy/98 backdrop-blur-md border-t border-white/10 px-6 py-4">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-white/90 hover:text-gold font-jakarta text-sm border-b border-white/10 last:border-0"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/area-do-associado"
            onClick={() => setMobileOpen(false)}
            className="mt-4 flex items-center justify-center gap-2 w-full py-3 rounded-md bg-gold text-navy font-jakarta font-semibold text-sm"
          >
            <LogIn size={15} />
            Área do Associado
          </Link>
        </div>
      )}
    </header>
  );
}