import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, LogIn } from "lucide-react";
import AmehcLogo from "./AmehcLogo";

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHome
          ? "bg-navy/97 backdrop-blur-[12px] shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <AmehcLogo size="md" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7">
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
            className="flex items-center gap-2 px-5 py-2.5 rounded-md bg-gold text-navy text-sm font-jakarta font-bold hover:bg-gold/90 transition-all duration-200"
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

      {/* Barra colorida (replica a barra do site original) */}
      {(scrolled || !isHome) && (
        <div className="h-1 w-full" style={{ background: "linear-gradient(to right, #2E207A, #F5C518, #2E207A)" }} />
      )}

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-navy backdrop-blur-md border-t border-white/10 px-6 py-4">
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
            className="mt-4 flex items-center justify-center gap-2 w-full py-3 rounded-md bg-gold text-navy font-jakarta font-bold text-sm"
          >
            <LogIn size={15} />
            Área do Associado
          </Link>
        </div>
      )}
    </header>
  );
}