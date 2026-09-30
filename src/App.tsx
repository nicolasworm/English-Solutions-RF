/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Courses } from './components/Courses';
import { Differentials } from './components/Differentials';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { ContactModal } from './components/ContactModal';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Footer } from './components/Footer';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalCourse, setModalCourse] = useState('');

  const handleOpenContact = (courseName?: string) => {
    if (courseName && typeof courseName === 'string') {
      setModalCourse(courseName);
    } else {
      setModalCourse('Inglês Conversação Acelerada');
    }
    setIsModalOpen(true);
  };

  const handleScrollToCourses = () => {
    const el = document.getElementById('cursos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-primary selection:text-white">
      {/* Sticky Header Navbar */}
      <Navbar onOpenContact={() => handleOpenContact()} />

      <main className="flex-grow">
        {/* 1. Hero / Início Section */}
        <Hero
          onOpenContact={() => handleOpenContact()}
          onExploreCourses={handleScrollToCourses}
        />

        {/* 2. Cursos Section (Inglês e Espanhol) */}
        <Courses onSelectCourse={(course) => handleOpenContact(course)} />

        {/* 3. Seção Sobre com os 6 diferenciais */}
        <Differentials onOpenContact={() => handleOpenContact()} />

        {/* 4. Seção Depoimentos com histórias reais de alunos de Erechim */}
        <Testimonials onOpenContact={() => handleOpenContact()} />

        {/* 5. Seção Contato / Agendamento com formulário e localização */}
        <ContactSection initialCourse={modalCourse} />
      </main>

      {/* Footer */}
      <Footer onOpenContact={() => handleOpenContact()} />

      {/* Global Quick Lead Conversion Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedCourse={modalCourse}
      />

      {/* Floating Pulse WhatsApp Button (54) 99255-4927 */}
      <WhatsAppButton />
    </div>
  );
}
