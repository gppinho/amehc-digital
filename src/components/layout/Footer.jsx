import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="border-t-2 border-gold" />
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center">
                <span className="text-navy font-playfair font-bold text-lg">A</span>
              </div>
              <div>
                <div className="font-playfair font-bold text-white text-xl">AMEHC</div>
                <div className="text-gold text-xs font-jakarta">Associação dos Médicos e Odontólogos</div>
              </div>
            </div>
            <p className="text-white/70 font-jakarta text-sm leading-relaxed max-w-sm">
              Representando e valorizando os profissionais de saúde do Hospital Conceição desde nossa fundação. Unidos pela excelência médica.
            </p>
            <div className="flex gap-3 mt-6">
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold hover:text-navy flex items-center justify-center transition-all duration-200">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold hover:text-navy flex items-center justify-center transition-all duration-200">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold hover:text-navy flex items-center justify-center transition-all duration-200">
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-playfair font-semibold text-gold mb-5 text-sm uppercase tracking-widest">Navegação</h4>
            <ul className="space-y-3">
              {[
                { label: "Sobre a AMEHC", href: "/sobre" },
                { label: "Notícias", href: "/noticias" },
                { label: "Agenda", href: "/agenda" },
                { label: "Convênios", href: "/convenios" },
                { label: "Associe-se", href: "/associe-se" },
                { label: "Contato", href: "/contato" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="font-jakarta text-sm text-white/70 hover:text-gold transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold inline-block" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-playfair font-semibold text-gold mb-5 text-sm uppercase tracking-widest">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
                <span className="font-jakarta text-sm text-white/70 leading-relaxed">
                  Hospital Nossa Senhora da Conceição<br />Porto Alegre – RS
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-gold shrink-0" />
                <a href="tel:+555133570100" className="font-jakarta text-sm text-white/70 hover:text-gold transition-colors">
                  (51) 3357-0100
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-gold shrink-0" />
                <a href="mailto:contato@amehc.org.br" className="font-jakarta text-sm text-white/70 hover:text-gold transition-colors">
                  contato@amehc.org.br
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-jakarta text-xs text-white/50">
            © {new Date().getFullYear()} AMEHC – Todos os direitos reservados.
          </p>
          <Link to="/area-do-associado" className="font-jakarta text-xs text-gold hover:underline">
            Área do Associado
          </Link>
        </div>
      </div>
    </footer>
  );
}