import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MessageCircle, Phone, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { CONTACT_INFO } from '../data/content';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCourse?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  selectedCourse = '',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [course, setCourse] = useState(selectedCourse || 'Inglês Conversação Acelerada');
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (selectedCourse) {
      setCourse(selectedCourse);
    }
  }, [selectedCourse]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setIsSuccess(true);
  };

  const whatsappMessage = `Olá! Meu nome é ${name || 'Interessado'}. Gostaria de agendar uma aula experimental / tirar dúvidas sobre ${course} na English Solutions RF.`;
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative w-full max-w-lg bg-surface rounded-3xl border border-border border-t-4 border-t-primary shadow-2xl shadow-red-600/10 overflow-hidden p-6 sm:p-8 z-10"
          >
            {/* Close Button */}
            <button
              id="modal-close-button"
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-red-50 transition-colors"
              aria-label="Fechar modal"
            >
              <X className="w-5 h-5" />
            </button>

            {isSuccess ? (
              <div className="py-6 text-center">
                <div className="w-16 h-16 rounded-full bg-red-100 text-primary flex items-center justify-center mx-auto mb-4 ring-4 ring-red-50">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-heading font-extrabold text-2xl text-foreground">
                  Quase lá, <span className="text-primary">{name}</span>!
                </h3>
                <p className="text-sm text-muted-foreground mt-2 max-w-sm mx-auto">
                  Registramos seu contato. Para acelerar o agendamento da sua aula experimental sem fila, clique no botão abaixo para abrir nosso WhatsApp oficial:
                </p>

                <div className="mt-6 space-y-3">
                  <a
                    id="modal-success-open-whatsapp"
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-6 rounded-xl font-bold text-sm bg-primary hover:bg-primary-hover text-white flex items-center justify-center gap-2 shadow-lg shadow-red-600/30 transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Conectar pelo WhatsApp</span>
                  </a>

                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      onClose();
                    }}
                    className="w-full py-2.5 text-xs font-semibold text-muted-foreground hover:text-foreground"
                  >
                    Fechar janela
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-red-50 text-primary border border-red-200 mb-3 shadow-xs">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Atendimento Exclusivo</span>
                </div>

                <h3 className="font-heading font-extrabold text-2xl text-foreground tracking-tight">
                  Agende sua <span className="text-primary">Aula Experimental</span>
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                  Conheça nossa escola no Centro de Erechim - RS e descubra como destravar sua fala em semanas.
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-1.5">
                      Seu Nome *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Mariana Silveira"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-red-100 bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-1.5">
                      WhatsApp com DDD *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(54) 99999-9999"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-red-100 bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-1.5">
                      Curso de Interesse
                    </label>
                    <select
                      value={course}
                      onChange={(e) => setCourse(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-red-100 bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
                    >
                      <option value="Inglês Conversação Acelerada">Inglês Conversação Acelerada</option>
                      <option value="Business & Career English">Business & Career English</option>
                      <option value="Preparação para Exames (TOEFL, IELTS & Cambridge)">Preparação para Exames (TOEFL, IELTS & Cambridge)</option>
                      <option value="Teens Global Fluency">Teens Global Fluency</option>
                      <option value="Executivo VIP 1-on-1">Executivo VIP 1-on-1</option>
                      <option value="Avaliação de Nível Gratuita">Avaliação de Nível Gratuita</option>
                    </select>
                  </div>

                  <div className="pt-2 space-y-3">
                    <button
                      id="modal-submit-contact-button"
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-primary hover:bg-primary-hover shadow-lg shadow-red-600/30 ring-2 ring-red-300/40 transition-all flex items-center justify-center gap-2 cursor-pointer hover:-translate-y-0.5"
                    >
                      <span>Confirmar e receber contato</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <div className="relative flex py-1 items-center">
                      <div className="flex-grow border-t border-border"></div>
                      <span className="flex-shrink mx-3 text-[11px] text-muted-foreground uppercase font-bold tracking-wider">ou</span>
                      <div className="flex-grow border-t border-border"></div>
                    </div>

                    <a
                      id="modal-quick-whatsapp-link"
                      href={`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent('Olá! Gostaria de falar com a English Solutions RF pelo WhatsApp.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 px-4 rounded-xl font-semibold text-xs text-primary bg-red-50 hover:bg-red-100/70 border border-red-200 transition-colors flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4 text-primary" />
                      <span>Chamar agora no WhatsApp: {CONTACT_INFO.phone}</span>
                    </a>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
