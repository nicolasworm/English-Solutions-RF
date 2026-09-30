import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, CheckCircle2, Star, Users, Award, ShieldCheck, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../data/content';

interface HeroProps {
  onOpenContact: () => void;
  onExploreCourses: () => void;
}

// Simple Count-up component with threshold trigger
const StatCounter: React.FC<{ value: number; suffix?: string; prefix?: string }> = ({
  value,
  suffix = '',
  prefix = '',
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1600;
    const increment = value / (duration / 25);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 25);
    return () => clearInterval(timer);
  }, [value]);

  return (
    <span>
      {prefix}
      {count.toLocaleString('pt-BR')}
      {suffix}
    </span>
  );
};

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onExploreCourses }) => {
  // Stagger animation container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  };

  return (
    <section
      id="inicio"
      className="relative pt-20 pb-12 sm:pt-28 sm:pb-16 md:pt-36 md:pb-24 overflow-hidden bg-background"
    >
      {/* Subtle organic background gradients */}
      <div
        className="absolute top-0 right-1/4 w-96 h-96 bg-primary/8 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-10 left-10 w-80 h-80 bg-primary/5 rounded-full blur-2xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Main Hero Copy Column (7 cols) */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-start"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Pill Badge: Matrículas Abertas 2026 */}
            <motion.div variants={itemVariants} className="mb-3 sm:mb-5">
              <div
                id="hero-enrollment-badge"
                className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-bold bg-red-50 text-primary border border-red-200 shadow-xs"
              >
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="font-bold tracking-wide">Matrículas 2026</span>
                <span className="text-primary/40">·</span>
                <span className="text-foreground/80 font-semibold truncate">Máx. 6 Alunos / Sala</span>
              </div>
            </motion.div>

            {/* Main Headline (clamp hero) */}
            <motion.h1
              id="hero-main-title"
              variants={itemVariants}
              className="clamp-hero font-extrabold text-foreground tracking-tight max-w-2xl"
            >
              Fale com autoridade global.{' '}
              <span className="text-primary block mt-0.5 sm:mt-1">Sem travas. Sem anos perdidos.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              id="hero-subheadline"
              variants={itemVariants}
              className="mt-3 sm:mt-5 text-base sm:text-lg lg:text-xl text-foreground/75 font-normal leading-relaxed max-w-xl"
            >
              Na <strong className="text-foreground font-semibold">English Solutions RF</strong>, você aprende Inglês através de imersão comunicativa direta, turmas de até <strong className="text-primary font-bold">6 alunos</strong> e acompanhamento sob medida no Centro de Erechim - RS.
            </motion.p>

            {/* Quick Trust Checks */}
            <motion.div
              variants={itemVariants}
              className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 w-full max-w-lg text-xs sm:text-sm text-foreground/85"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary shrink-0" />
                <span>85% do tempo dedicado à fala</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary shrink-0" />
                <span>Zero tradução mental mecânica</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary shrink-0" />
                <span>Professores fluentes e certificados</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary shrink-0" />
                <span>Localização central e flexibilidade</span>
              </div>
            </motion.div>

            {/* Hero CTAs */}
            <motion.div
              variants={itemVariants}
              className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto"
            >
              <button
                id="hero-cta-contact-button"
                onClick={onOpenContact}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl text-sm sm:text-base font-bold text-white bg-primary hover:bg-primary-hover shadow-lg shadow-red-600/30 transition-all duration-200 cursor-pointer ring-2 ring-red-300/40"
              >
                <span>Entrar em contato</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-secondary-courses-button"
                onClick={onExploreCourses}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-6 sm:py-4 rounded-xl text-sm sm:text-base font-bold text-foreground/90 bg-surface hover:bg-red-50/50 hover:text-primary border-2 border-red-100 transition-all duration-200 cursor-pointer shadow-xs"
              >
                <span>Conhecer nossos cursos</span>
              </button>
            </motion.div>

            {/* Social Proof Mini Bar */}
            <motion.div
              variants={itemVariants}
              className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-border/80 w-full flex flex-wrap items-center gap-3 sm:gap-6"
            >
              <div className="flex -space-x-2">
                <img
                  className="inline-block h-8 w-8 sm:h-10 sm:w-10 rounded-full ring-2 ring-surface object-cover"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop"
                  alt="Aluna English Solutions RF"
                />
                <img
                  className="inline-block h-8 w-8 sm:h-10 sm:w-10 rounded-full ring-2 ring-surface object-cover"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
                  alt="Aluno English Solutions RF"
                />
                <img
                  className="inline-block h-8 w-8 sm:h-10 sm:w-10 rounded-full ring-2 ring-surface object-cover"
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop"
                  alt="Aluna English Solutions RF"
                />
                <div className="inline-flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full ring-2 ring-surface bg-primary text-white text-[11px] sm:text-xs font-bold">
                  +1.2k
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-foreground ml-1">4.9/5</span>
                </div>
                <span className="text-[11px] sm:text-xs text-muted-foreground font-medium">
                  Alunos fluentes formados em Erechim
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Visual Showcase Column (5 cols) */}
          <motion.div
            className="lg:col-span-5 relative mt-4 lg:mt-0"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Visual Image Card */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-red-100 border-t-4 border-t-primary card-shadow bg-surface shadow-md shadow-red-600/5">
                <img
                  id="hero-showcase-image"
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop"
                  alt="Estudantes conversando ativamente na aula de idiomas"
                  className="w-full h-60 sm:h-80 lg:h-[440px] object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent pointer-events-none" />

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 text-white">
                  <div className="inline-flex items-center gap-1 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-primary text-white text-[10px] sm:text-xs font-bold mb-1.5 shadow-md">
                    <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
                    <span>Erechim - RS · Centro</span>
                  </div>
                  <h3 className="font-heading font-bold text-sm sm:text-lg leading-snug drop-shadow-sm">
                    Aulas dinâmicas, imersivas e acolhedoras
                  </h3>
                </div>
              </div>

              {/* Floating Badge 1: Turmas de até 6 alunos */}
              <motion.div
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute -top-3 -left-2 sm:-left-6 bg-surface p-2.5 sm:p-3.5 rounded-xl border border-red-200 soft-shadow flex items-center gap-2.5 shadow-md"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-red-50 text-primary flex items-center justify-center shrink-0 border border-red-100">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs text-primary font-bold uppercase tracking-wider">Atenção total</p>
                  <p className="text-xs sm:text-sm font-heading font-bold text-foreground">Máx. 6 alunos / sala</p>
                </div>
              </motion.div>

              {/* Floating Badge 2: Método Comunicativo Direto */}
              <motion.div
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -bottom-3 -right-2 sm:-right-4 bg-surface p-2.5 sm:p-3.5 rounded-xl border border-red-200 soft-shadow flex items-center gap-2.5 shadow-md"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-red-50 text-primary flex items-center justify-center shrink-0 border border-red-100">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs text-primary font-bold uppercase tracking-wider">Método Comprovado</p>
                  <p className="text-xs sm:text-sm font-heading font-bold text-foreground">85% Prática Vocal</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Row with count-up numbers */}
        <motion.div
          id="hero-stats-strip"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 sm:mt-16 pt-6 sm:pt-10 border-t-2 border-red-100 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 lg:gap-8"
        >
          <div className="flex flex-col p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-red-50/40 border border-red-100/70">
            <span className="font-heading font-extrabold text-2xl sm:text-4xl text-primary tracking-tight">
              <StatCounter value={1200} suffix="+" />
            </span>
            <span className="text-xs font-semibold text-foreground/80 mt-0.5">
              Alunos fluentes formados
            </span>
          </div>

          <div className="flex flex-col p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-surface border border-red-100/70">
            <span className="font-heading font-extrabold text-2xl sm:text-4xl text-primary tracking-tight">
              <StatCounter value={6} prefix="Até " suffix=" alunos" />
            </span>
            <span className="text-xs font-semibold text-foreground/80 mt-0.5">
              Por turma para máxima fala
            </span>
          </div>

          <div className="flex flex-col p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-red-50/40 border border-red-100/70">
            <span className="font-heading font-extrabold text-2xl sm:text-4xl text-primary tracking-tight">
              <StatCounter value={98} suffix="%" />
            </span>
            <span className="text-xs font-semibold text-foreground/80 mt-0.5">
              Aprovação em exames e metas
            </span>
          </div>

          <div className="flex flex-col p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-surface border border-red-100/70">
            <span className="font-heading font-extrabold text-2xl sm:text-4xl text-primary tracking-tight">
              <StatCounter value={100} suffix="%" />
            </span>
            <span className="text-xs font-semibold text-foreground/80 mt-0.5">
              Acompanhamento humano
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
