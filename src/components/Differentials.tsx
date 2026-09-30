import React from 'react';
import { motion } from 'motion/react';
import {
  MessageSquare,
  Users,
  Sparkles,
  GraduationCap,
  Target,
  Clock,
  CheckCircle,
  ShieldCheck,
  Award,
} from 'lucide-react';
import { DIFFERENTIALS } from '../data/content';
import { DifferentialItem } from '../types';

interface DifferentialsProps {
  onOpenContact: () => void;
}

export const Differentials: React.FC<DifferentialsProps> = ({ onOpenContact }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'MessageSquare':
        return <MessageSquare className="w-5 h-5" />;
      case 'Users':
        return <Users className="w-5 h-5" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5" />;
      case 'Target':
        return <Target className="w-5 h-5" />;
      case 'Clock':
        return <Clock className="w-5 h-5" />;
      default:
        return <Award className="w-5 h-5" />;
    }
  };

  return (
    <section id="diferenciais" className="py-12 sm:py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-8 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-bold bg-red-50 text-primary border border-red-200 mb-2.5 shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Por que a English Solutions RF?</span>
          </div>
          <h2 className="clamp-section font-extrabold text-foreground tracking-tight">
            6 pilares que garantem sua <span className="text-primary">fluência definitiva</span>
          </h2>
          <p className="mt-2.5 text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
            Eliminamos os vícios dos métodos arcaicos. Criamos uma metodologia viva, focada na realidade de Erechim e no ritmo acelerado de quem precisa de resultados concretos.
          </p>
        </div>

        {/* 6 Differentials Grid (3x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {DIFFERENTIALS.map((item: DifferentialItem, index: number) => (
            <motion.div
              key={item.id}
              id={`differential-card-${item.id}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05, ease: 'easeOut' }}
              whileHover={{ y: -3 }}
              className="group p-5 sm:p-8 rounded-2xl bg-surface border border-border border-t-4 border-t-primary/30 hover:border-t-primary card-shadow hover:border-primary/40 hover:shadow-lg hover:shadow-red-600/5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-red-50 text-primary border border-red-200 flex items-center justify-center transition-colors group-hover:bg-primary group-hover:text-white shadow-xs">
                    {getIcon(item.icon)}
                  </div>
                  <span className="font-heading font-black text-xl sm:text-2xl text-primary/60 group-hover:text-primary transition-colors">
                    {item.number}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-base sm:text-xl text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                  {item.description}
                </p>
              </div>

              {/* Metric Callout */}
              <div className="pt-3.5 border-t border-border flex items-baseline justify-between">
                <span className="font-heading font-extrabold text-base sm:text-lg text-primary">
                  {item.metric}
                </span>
                <span className="text-[11px] sm:text-xs text-muted-foreground font-semibold text-right">
                  {item.metricLabel}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Quick Action */}
        <div className="mt-8 sm:mt-14 text-center">
          <button
            id="differentials-cta-contact"
            onClick={onOpenContact}
            className="inline-flex items-center gap-2 px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-primary hover:bg-primary-hover shadow-lg shadow-red-600/30 transition-all duration-200 cursor-pointer"
          >
            <span>Quero viver essa experiência em Erechim</span>
            <CheckCircle className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
