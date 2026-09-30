import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, CheckCircle2, MessageSquare } from 'lucide-react';
import { TESTIMONIALS } from '../data/content';
import { TestimonialItem } from '../types';

interface TestimonialsProps {
  onOpenContact: () => void;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ onOpenContact }) => {
  return (
    <section id="depoimentos" className="py-12 sm:py-16 md:py-24 bg-surface relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-bold bg-red-50 text-primary border border-red-200 mb-2.5 shadow-xs">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>Avaliações Reais no Google · 5.0 Estrelas</span>
          </div>
          <h2 className="clamp-section font-extrabold text-foreground tracking-tight">
            O que dizem os nossos <span className="text-primary">alunos e famílias</span>
          </h2>
          <p className="mt-2.5 text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
            Depoimentos espontâneos deixados no Google sobre a experiência, metodologia e ambiente da English Solutions Rafaela França em Erechim - RS.
          </p>
        </div>

        {/* Testimonials 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
          {TESTIMONIALS.map((testimonial: TestimonialItem, index: number) => (
            <motion.div
              key={testimonial.id}
              id={`testimonial-card-${testimonial.id}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08, ease: 'easeOut' }}
              whileHover={{ y: -3 }}
              className="p-5 sm:p-8 rounded-2xl bg-background border border-border border-t-4 border-t-primary/30 hover:border-t-primary card-shadow flex flex-col justify-between transition-all duration-300 relative"
            >
              <Quote className="absolute top-4 right-4 sm:top-6 sm:right-6 w-7 h-7 sm:w-10 sm:h-10 text-primary/15 pointer-events-none" />

              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-[11px] sm:text-xs font-bold text-primary ml-1.5">
                    Avaliação 5.0
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-base text-foreground/85 leading-relaxed italic mb-4 sm:mb-6">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Author Info + Concrete Result */}
              <div className="pt-4 sm:pt-6 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover ring-2 ring-primary shrink-0"
                    loading="lazy"
                  />
                  <div>
                    <h3 className="font-heading font-bold text-xs sm:text-base text-foreground">
                      {testimonial.name}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-muted-foreground font-medium">
                      {testimonial.role} · <span className="text-foreground/80 font-semibold">{testimonial.companyOrCity}</span>
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-red-50 text-primary text-[11px] sm:text-xs font-bold border border-red-200 shrink-0 self-start sm:self-auto">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>{testimonial.result}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action Bar */}
        <div className="mt-8 sm:mt-14 p-5 sm:p-10 rounded-2xl bg-primary text-white flex flex-col md:flex-row items-center justify-between gap-5 shadow-xl shadow-red-600/30 ring-2 ring-red-300/40">
          <div>
            <h3 className="font-heading font-extrabold text-lg sm:text-2xl lg:text-3xl tracking-tight">
              Pronto para escrever sua própria história de fluência?
            </h3>
            <p className="text-xs sm:text-sm text-white/90 mt-1 max-w-xl">
              Agende um café conosco na Rua Marechal Rondon ou faça um teste de conversação online sem custo.
            </p>
          </div>
          <button
            id="testimonials-bottom-cta"
            onClick={onOpenContact}
            className="w-full md:w-auto px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl font-bold text-xs sm:text-sm bg-white text-primary hover:bg-red-50 shadow-lg transition-all duration-200 cursor-pointer shrink-0"
          >
            Entrar em contato
          </button>
        </div>
      </div>
    </section>
  );
};
