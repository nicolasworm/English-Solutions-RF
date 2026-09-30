import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { CONTACT_INFO } from '../data/content';

export const WhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent(
    'Olá! Gostaria de mais informações sobre as aulas na English Solutions RF em Erechim.'
  )}`;

  return (
    <aside
      id="floating-whatsapp-container"
      aria-label="Atendimento via WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 pointer-events-auto"
    >
      {/* Tooltip Notification */}
      {showTooltip && (
        <div className="relative bg-surface p-3 rounded-2xl shadow-xl border border-border text-xs max-w-[220px] animate-fade-in hidden sm:block">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-1.5 right-1.5 p-1 text-muted-foreground hover:text-foreground"
            aria-label="Fechar aviso"
          >
            <X className="w-3 h-3" />
          </button>
          <p className="font-bold text-foreground">Dúvidas sobre turmas?</p>
          <p className="text-muted-foreground mt-0.5 text-[11px]">
            Converse agora com nossa equipe em Erechim: <strong>{CONTACT_INFO.phone}</strong>
          </p>
        </div>
      )}

      {/* Main WhatsApp Trigger Button */}
      <a
        id="whatsapp-floating-button"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
        aria-label="Falar conosco no WhatsApp"
      >
        {/* Subtle Pulse Ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />

        <MessageCircle className="w-6 h-6 shrink-0" />
        <span className="hidden sm:inline font-bold text-sm tracking-wide">
          Falar no WhatsApp
        </span>
      </a>
    </aside>
  );
};
