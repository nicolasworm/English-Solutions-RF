import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  CheckCircle2,
  Calendar,
  Sparkles,
  ChevronDown,
} from 'lucide-react';
import { CONTACT_INFO, FAQS } from '../data/content';
import { ContactFormData } from '../types';

interface ContactSectionProps {
  initialCourse?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialCourse = '' }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    email: '',
    course: initialCourse || 'Inglês Conversação Acelerada',
    preferredTime: 'Noite (18h às 21h30)',
    level: 'Iniciante / Destravar fala',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Simulate instant lead registration and offer direct WhatsApp transfer
    setIsSubmitted(true);
  };

  const generateWhatsAppUrl = () => {
    const text = `Olá! Meu nome é ${formData.name}. Gostaria de agendar uma aula experimental/diagnóstico na English Solutions RF. Curso: ${formData.course} (${formData.preferredTime}). Telefone: ${formData.phone}`;
    return `https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contato" className="py-12 sm:py-16 md:py-24 bg-surface relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-bold bg-red-50 text-primary border border-red-200 mb-2.5 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Atendimento & Matrículas 2026</span>
          </div>
          <h2 className="clamp-section font-extrabold text-foreground tracking-tight">
            Venha tomar um café conosco em <span className="text-primary">Erechim</span>
          </h2>
          <p className="mt-2.5 text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
            Preencha o formulário para agendar seu diagnóstico gratuito de nível ou chame nossa equipe no WhatsApp. Sem compromisso.
          </p>
        </div>

        {/* 12-col grid: Form (7 cols) + Contact Details & Map (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-start">
          {/* Form Card (7 cols) */}
          <div className="lg:col-span-7 bg-background p-5 sm:p-8 md:p-10 rounded-3xl border border-border border-t-4 border-t-primary card-shadow shadow-lg shadow-red-600/5">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-10 text-center flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full bg-red-100 text-primary flex items-center justify-center mb-4 ring-4 ring-red-50">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-heading font-extrabold text-2xl text-foreground">
                  Solicitação Recebida com Sucesso!
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base mt-2 max-w-md">
                  Obrigado, <strong className="text-primary font-bold">{formData.name}</strong>! Nossa equipe pedagógica entrará em contato pelo número informado para agendar sua aula experimental.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full justify-center">
                  <a
                    id="contact-success-whatsapp-redirect"
                    href={generateWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-primary hover:bg-primary-hover text-white shadow-lg shadow-red-600/30 transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Abrir no WhatsApp Agora</span>
                  </a>

                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-bold text-sm bg-surface hover:bg-red-50 hover:text-primary text-foreground border border-red-200 transition-colors cursor-pointer"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              </motion.div>
            ) : (
              <form id="lead-generation-form" onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2">
                      Seu Nome Completo *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Ex: João da Silva"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-red-100 bg-surface text-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm transition-all shadow-2xs"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2">
                      WhatsApp / Telefone *
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      placeholder="(54) 99999-9999"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-red-100 bg-surface text-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm transition-all shadow-2xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2">
                      E-mail
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="seu.email@exemplo.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-red-100 bg-surface text-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm transition-all shadow-2xs"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-course-select" className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2">
                      Curso de Interesse
                    </label>
                    <select
                      id="contact-course-select"
                      value={formData.course}
                      onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-red-100 bg-surface text-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm transition-all cursor-pointer shadow-2xs"
                    >
                      <option value="Inglês Conversação Acelerada">Inglês Conversação Acelerada</option>
                      <option value="Business & Career English">Business & Career English</option>
                      <option value="Preparação para Exames (TOEFL, IELTS & Cambridge)">Preparação para Exames (TOEFL, IELTS & Cambridge)</option>
                      <option value="Teens Global Fluency">Teens Global Fluency</option>
                      <option value="Executivo VIP 1-on-1">Executivo VIP 1-on-1</option>
                      <option value="Avaliação de Nível Gratuita">Avaliação de Nível Gratuita</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-time-select" className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2">
                      Turno Preferencial
                    </label>
                    <select
                      id="contact-time-select"
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-red-100 bg-surface text-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm transition-all cursor-pointer shadow-2xs"
                    >
                      <option value="Manhã (07h30 às 11h30)">Manhã (07h30 às 11h30)</option>
                      <option value="Tarde (13h30 às 17h30)">Tarde (13h30 às 17h30)</option>
                      <option value="Noite (18h às 21h30)">Noite (18h às 21h30)</option>
                      <option value="Sábados (08h às 12h30)">Sábados (08h às 12h30)</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-level-select" className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2">
                      Como avalia seu nível atual?
                    </label>
                    <select
                      id="contact-level-select"
                      value={formData.level}
                      onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-red-100 bg-surface text-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm transition-all cursor-pointer shadow-2xs"
                    >
                      <option value="Iniciante do Zero">Iniciante do Zero</option>
                      <option value="Compreendo mas travo na fala">Compreendo mas travo na fala</option>
                      <option value="Intermediário (preciso polir)">Intermediário (preciso polir)</option>
                      <option value="Avançado / Foco em Negócios">Avançado / Foco em Negócios</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2">
                    Objetivo Principal (opcional)
                  </label>
                  <textarea
                    id="contact-message"
                    rows={3}
                    placeholder="Ex: Preciso do inglês para viagens a trabalho e reuniões com a matriz da empresa..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-red-100 bg-surface text-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm transition-all shadow-2xs"
                  />
                </div>

                <div className="pt-2">
                  <button
                    id="contact-form-submit-button"
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl font-bold text-base text-white bg-primary hover:bg-primary-hover shadow-lg shadow-red-600/30 ring-2 ring-red-300/40 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer hover:-translate-y-0.5"
                  >
                    <span>Entrar em contato e agendar aula experimental</span>
                    <Send className="w-4 h-4" />
                  </button>
                  <p className="text-[11px] text-center text-muted-foreground mt-3 font-medium">
                    🔒 Seus dados estão protegidos. Não enviamos spam nem compartilhamos suas informações.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Contact Details & School Location Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Contact Card */}
            <div className="p-8 rounded-3xl bg-background border border-border border-t-4 border-t-primary/40 card-shadow space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="font-heading font-bold text-xl text-foreground">
                  Canais Diretos de Atendimento
                </h3>
                <span className="text-[11px] font-bold text-primary uppercase tracking-wider bg-red-50 px-2.5 py-1 rounded-full border border-red-200">
                  Erechim - RS
                </span>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-primary border border-red-200 flex items-center justify-center shrink-0 shadow-xs">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-primary">
                      Endereço em Erechim
                    </p>
                    <p className="font-semibold text-foreground mt-0.5">
                      {CONTACT_INFO.address}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {CONTACT_INFO.cityStateZip}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-primary border border-red-200 flex items-center justify-center shrink-0 shadow-xs">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-primary">
                      Telefone & WhatsApp
                    </p>
                    <a
                      href={`tel:${CONTACT_INFO.whatsappRaw}`}
                      className="font-bold text-foreground hover:text-primary transition-colors text-base block mt-0.5"
                    >
                      {CONTACT_INFO.phone}
                    </a>
                    <p className="text-xs text-muted-foreground">
                      Atendimento rápido e personalizado
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-primary border border-red-200 flex items-center justify-center shrink-0 shadow-xs">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-primary">
                      Horário de Funcionamento
                    </p>
                    <p className="font-medium text-foreground text-xs leading-relaxed mt-0.5">
                      {CONTACT_INFO.hours}
                    </p>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Action Pill */}
              <a
                id="contact-direct-whatsapp-pill"
                href={`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent('Olá! Gostaria de falar com a equipe da English Solutions RF em Erechim.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl font-bold text-sm bg-primary hover:bg-primary-hover text-white flex items-center justify-center gap-2 shadow-lg shadow-red-600/30 transition-all cursor-pointer hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Conversar direto pelo WhatsApp</span>
              </a>
            </div>

            {/* Location Visual Map Card */}
            <div className="rounded-3xl overflow-hidden border border-red-100 border-t-4 border-t-primary/30 card-shadow bg-background">
              <div className="p-4 bg-red-50/40 border-b border-red-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-xs font-bold text-foreground">Localização Central e Fácil Acesso</span>
                </div>
                <a
                  id="open-google-maps-link"
                  href={CONTACT_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-primary hover:underline"
                >
                  Abrir no Google Maps →
                </a>
              </div>
              <div className="relative h-44 w-full bg-slate-50 flex items-center justify-center p-6 text-center">
                <div className="max-w-xs">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-2 shadow-md shadow-red-600/40 animate-bounce">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <p className="font-bold text-sm text-foreground">Rua Marechal Rondon, 252</p>
                  <p className="text-xs text-muted-foreground mt-0.5 font-medium">
                    Centro, Erechim - RS · Fácil estacionamento e acesso rápido
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQs Accordion */}
        <div className="mt-20 pt-16 border-t border-border max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-foreground">
              Dúvidas <span className="text-primary">Frequentes</span>
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              Respostas diretas para as perguntas mais comuns dos nossos alunos em Erechim.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <div
                key={index}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  openFaq === index
                    ? 'border-primary/40 bg-red-50/30 shadow-xs'
                    : 'border-border bg-background hover:border-red-200'
                }`}
              >
                <button
                  id={`faq-toggle-${index}`}
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-5 text-left font-heading font-semibold text-foreground flex items-center justify-between gap-4 transition-colors cursor-pointer text-sm sm:text-base"
                >
                  <span className={openFaq === index ? 'text-primary font-bold' : ''}>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-200 shrink-0 ${
                      openFaq === index ? 'rotate-180 text-primary' : 'text-muted-foreground'
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-red-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
