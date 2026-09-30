import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BookOpen, Check, ArrowRight, Clock, Users, Globe2, Sparkles } from 'lucide-react';
import { COURSES } from '../data/content';
import { CourseItem } from '../types';

interface CoursesProps {
  onSelectCourse: (courseName: string) => void;
}

export const Courses: React.FC<CoursesProps> = ({ onSelectCourse }) => {
  return (
    <section id="cursos" className="py-12 sm:py-16 md:py-24 bg-surface relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4 sm:gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-bold bg-red-50 text-primary border border-red-200 mb-2.5 shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Programas Imersivos em Erechim</span>
            </div>
            <h2 className="clamp-section font-extrabold text-foreground tracking-tight">
              Cursos de Inglês desenhados para <span className="text-primary">sua vida real</span>
            </h2>
            <p className="mt-2.5 text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
              Diga adeus às turmas superlotadas e ao aprendizado puramente teórico. Aqui cada módulo é estruturado para você destravar a fala e atingir fluência prática com confiança.
            </p>
          </div>

          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-2 bg-red-50/70 rounded-xl border border-red-200 text-xs sm:text-sm font-bold text-primary shadow-xs self-start md:self-auto">
            <Globe2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary shrink-0" />
            <span>100% Imersão & Direct Communication</span>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {COURSES.map((course: CourseItem, index: number) => (
            <motion.div
              key={course.id}
              id={`course-card-${course.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
              whileHover={{ y: -4 }}
              className="flex flex-col bg-background rounded-2xl border border-border border-t-4 border-t-primary/30 hover:border-t-primary overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300"
            >
              {/* Course Image Header */}
              <div className="relative h-44 sm:h-52 w-full overflow-hidden bg-muted">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Language Tag Badge */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-surface/95 backdrop-blur-md text-foreground border border-red-100 shadow-sm">
                    <Globe2 className="w-3 h-3 text-primary" />
                    Inglês
                  </span>
                </div>

                {course.popular && (
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                    <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-black uppercase tracking-wider bg-primary text-white shadow-md shadow-red-600/30">
                      Destaque
                    </span>
                  </div>
                )}

                <div className="absolute bottom-2.5 left-3 right-3 sm:bottom-3 sm:left-4 sm:right-4 text-white">
                  <p className="text-xs font-medium text-white/90 truncate">{course.tagline}</p>
                </div>
              </div>

              {/* Course Content */}
              <div className="p-4 sm:p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-foreground mb-1.5 hover:text-primary transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                    {course.description}
                  </p>

                  {/* Meta Pills: Duration, Size */}
                  <div className="grid grid-cols-2 gap-2 mb-4 sm:mb-6 p-2.5 sm:p-3 rounded-xl bg-red-50/40 border border-red-100 text-[11px] sm:text-xs">
                    <div className="flex items-center gap-1.5 text-foreground/90 font-semibold">
                      <Clock className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-foreground/90 font-semibold">
                      <Users className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span>{course.classSize}</span>
                    </div>
                  </div>

                  {/* Highlights checklist */}
                  <div className="space-y-2 mb-6 sm:mb-8">
                    <p className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-primary">
                      O que você desenvolve:
                    </p>
                    {course.highlights.map((highlight, hIndex) => (
                      <div key={hIndex} className="flex items-start gap-2 text-xs text-foreground/85">
                        <div className="w-3.5 h-3.5 rounded-full bg-red-100 text-primary flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span className="leading-snug">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA: Entrar em contato */}
                <button
                  id={`cta-course-${course.id}`}
                  onClick={() => onSelectCourse(course.title)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-primary hover:bg-primary-hover shadow-md shadow-red-600/25 transition-all duration-200 cursor-pointer"
                >
                  <span>Entrar em contato</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Level diagnostic banner callout */}
        <div className="mt-8 sm:mt-14 p-5 sm:p-8 rounded-2xl bg-primary text-white border border-red-900/40 flex flex-col md:flex-row items-center justify-between gap-5 shadow-xl shadow-red-950/25 ring-2 ring-red-300/30">
          <div className="flex items-center gap-3.5 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white text-primary flex items-center justify-center shrink-0 shadow-md font-bold">
              <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h4 className="font-heading font-extrabold text-sm sm:text-lg text-white">
                Em dúvida sobre o seu nível atual?
              </h4>
              <p className="text-xs sm:text-sm text-white/90 mt-0.5 font-normal">
                Avaliação diagnóstica presencial ou online sem compromisso para indicar a turma ideal.
              </p>
            </div>
          </div>
          <button
            id="course-level-test-button"
            onClick={() => onSelectCourse('Avaliação de Nível Gratuita')}
            className="w-full md:w-auto px-5 py-3 sm:px-6 sm:py-3.5 rounded-xl text-xs sm:text-sm font-black text-primary bg-white hover:bg-red-50 shadow-lg transition-all duration-200 cursor-pointer shrink-0"
          >
            Agendar Teste Grátis
          </button>
        </div>
      </div>
    </section>
  );
};
