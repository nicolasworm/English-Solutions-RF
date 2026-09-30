import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Menu, X, ArrowUpRight, MessageCircle, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../data/content';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Cursos', href: '#cursos' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Segurança', href: '#seguranca' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Red Announcement Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-primary text-white text-[11px] sm:text-xs font-semibold py-1 px-3 sm:px-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-1.5 sm:gap-2 mx-auto sm:mx-0">
            <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-wider bg-white text-primary">
              Matrículas 2026
            </span>
            <span className="truncate text-[11px] sm:text-xs">
              Turmas VIP de até 6 alunos em Erechim · Foco 85% em conversação
            </span>
          </div>
          <a
            href="#contato"
            onClick={(e) => handleNavClick(e, '#contato')}
            className="hidden sm:inline-flex items-center gap-1 font-bold underline underline-offset-2 hover:text-white/90 shrink-0"
          >
            Agendar Diagnóstico Gratuito →
          </a>
        </div>
      </div>

      <header
        id="main-navbar"
        className={`fixed top-6 sm:top-7 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-surface/95 backdrop-blur-md shadow-md border-b border-border py-2 sm:py-3'
            : 'bg-surface/80 backdrop-blur-sm py-2.5 sm:py-4 border-b border-border/50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo with Red Accent */}
            <a
              id="brand-logo-link"
              href="#inicio"
              onClick={(e) => handleNavClick(e, '#inicio')}
              className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none"
              aria-label="English Solutions RF - Página Inicial"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-heading font-black text-sm sm:text-lg shadow-md shadow-red-600/30 transition-transform duration-200 group-hover:scale-105 ring-2 ring-red-200">
                ES
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-base sm:text-xl tracking-tight leading-none text-foreground">
                  English Solutions<span className="text-primary ml-1 font-black">RF</span>
                </span>
                <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase text-primary/80 mt-0.5">
                  Escola de Idiomas · Erechim
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav id="desktop-nav-menu" className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  id={`nav-link-${link.label.toLowerCase()}`}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm font-semibold text-foreground/80 hover:text-primary transition-colors py-1 relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[2.5px] bg-primary rounded-full transition-all duration-200 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                id="navbar-phone-action"
                href={`tel:${CONTACT_INFO.whatsappRaw}`}
                className="flex items-center gap-2 text-xs font-bold text-foreground/90 hover:text-primary px-3.5 py-2.5 rounded-xl border border-red-200 bg-red-50/50 hover:bg-red-50 transition-all shadow-xs"
                title="Telefone de atendimento"
              >
                <Phone className="w-3.5 h-3.5 text-primary" />
                <span>{CONTACT_INFO.phone}</span>
              </a>

              <button
                id="navbar-cta-contact-button"
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 text-sm font-bold text-white bg-primary hover:bg-primary-hover px-5 py-2.5 rounded-xl shadow-md shadow-red-600/25 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Entrar em contato</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Menu Trigger */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                id="mobile-phone-shortcut"
                onClick={onOpenContact}
                className="p-2 text-primary hover:bg-red-50 rounded-xl border border-red-200"
                aria-label="Contatar escola"
              >
                <MessageCircle className="w-5 h-5" />
              </button>
              <button
                id="mobile-menu-toggle-button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl border border-border text-foreground hover:bg-muted focus:outline-none cursor-pointer"
                aria-label="Abrir menu de navegação"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
            />
            <motion.aside
              id="mobile-navigation-drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 280 }}
              className="fixed top-0 right-0 bottom-0 w-[82%] max-w-sm bg-surface z-50 flex flex-col shadow-2xl p-6 overflow-y-auto border-l border-border"
            >
              <div className="flex items-center justify-between pb-4 border-b border-border">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center font-heading font-black text-sm">
                    ES
                  </div>
                  <span className="font-heading font-bold text-base text-foreground">
                    English Solutions RF
                  </span>
                </div>
                <button
                  id="mobile-drawer-close-btn"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted"
                  aria-label="Fechar menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-6 flex flex-col gap-2 flex-grow">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    id={`mobile-link-${link.label.toLowerCase()}`}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="px-4 py-3 rounded-xl text-base font-semibold text-foreground/90 hover:text-primary hover:bg-primary-light transition-colors flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
                  </a>
                ))}
              </div>

              <div className="pt-4 border-t border-border flex flex-col gap-3">
                <div className="flex items-center gap-2 text-xs text-muted-foreground px-2">
                  <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>{CONTACT_INFO.address}, Erechim - RS</span>
                </div>
                <button
                  id="mobile-drawer-cta-button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenContact();
                  }}
                  className="w-full py-3 px-4 rounded-xl font-semibold text-white bg-primary hover:bg-primary-hover transition-colors text-center text-sm shadow-sm"
                >
                  Entrar em contato
                </button>
                <a
                  id="mobile-drawer-whatsapp-btn"
                  href={`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent('Olá! Gostaria de agendar uma aula experimental na English Solutions RF.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 transition-colors text-center text-xs flex items-center justify-center gap-2 border border-emerald-200"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>Falar no WhatsApp: {CONTACT_INFO.phone}</span>
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
