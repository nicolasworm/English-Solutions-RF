import React from 'react';
import { ArrowUp, Phone, MapPin, Mail, Clock, MessageCircle, ShieldCheck } from 'lucide-react';
import { CONTACT_INFO } from '../data/content';

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-foreground text-background pt-10 sm:pt-16 pb-8 sm:pb-12 border-t-4 border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Footer Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 pb-8 sm:pb-12 border-b border-white/10">
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center font-heading font-black text-lg shadow-md shadow-red-600/40 ring-2 ring-red-400">
                ES
              </div>
              <span className="font-heading font-extrabold text-xl text-white tracking-tight">
                English Solutions<span className="text-primary ml-1 font-black">RF</span>
              </span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed max-w-sm">
              Escola de Idiomas especializada no ensino comunicativo de Inglês em Erechim - RS. Turmas de até 6 alunos e metodologia focada em fluência real para vida e carreira.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-white/75 bg-white/5 px-3 py-2 rounded-xl border border-white/10 w-fit">
              <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
              <span>Matrículas abertas para o semestre 2026 em Erechim</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-white">
              Navegação
            </h4>
            <ul className="space-y-2 text-sm text-white/75">
              <li>
                <a href="#inicio" className="hover:text-primary transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#cursos" className="hover:text-primary transition-colors">
                  Cursos & Idiomas
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-primary transition-colors">
                  6 Diferenciais
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-primary transition-colors">
                  Histórias de Alunos
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-primary transition-colors">
                  Agendar Aula Experimental
                </a>
              </li>
            </ul>
          </div>

          {/* Languages & Courses */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-white">
              Programas
            </h4>
            <ul className="space-y-2 text-sm text-white/75">
              <li>
                <button
                  onClick={onOpenContact}
                  className="hover:text-primary transition-colors text-left"
                >
                  Inglês Conversação Acelerada
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenContact}
                  className="hover:text-primary transition-colors text-left"
                >
                  Business & Career English
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenContact}
                  className="hover:text-primary transition-colors text-left"
                >
                  Preparação para Exames (TOEFL/IELTS)
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenContact}
                  className="hover:text-primary transition-colors text-left"
                >
                  Teens Global Fluency
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenContact}
                  className="hover:text-primary transition-colors text-left"
                >
                  Executivo VIP 1-on-1
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-white">
              Unidade Erechim
            </h4>
            <div className="space-y-2.5 text-xs text-white/75 leading-relaxed">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>
                  {CONTACT_INFO.address}
                  <br />
                  {CONTACT_INFO.cityStateZip}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a
                  href={`tel:${CONTACT_INFO.whatsappRaw}`}
                  className="hover:text-primary transition-colors font-bold text-white text-sm"
                >
                  {CONTACT_INFO.phone}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>{CONTACT_INFO.hours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>
            © {new Date().getFullYear()} English Solutions RF. Todos os direitos reservados.
            Rua Marechal Rondon, 252 - Centro, Erechim - RS.
          </p>

          <button
            id="footer-back-to-top-btn"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-white/80 hover:text-white px-3 py-1.5 rounded-lg border border-white/10 hover:border-white/30 transition-all cursor-pointer"
            aria-label="Voltar ao topo da página"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
