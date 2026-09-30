import { CourseItem, DifferentialItem, TestimonialItem } from '../types';

export const CONTACT_INFO = {
  name: 'English Solutions RF',
  phone: '(54) 99255-4927',
  whatsappRaw: '5554992554927',
  address: 'Rua Marechal Rondon, 252 - Centro',
  cityStateZip: 'Erechim - RS, 99700-370',
  email: 'contato@englishsolutionsrf.com.br',
  hours: 'Segunda a Sexta: 07h30 às 21h30 | Sábados: 08h às 12h30',
  mapsUrl: 'https://maps.google.com/?q=Rua+Marechal+Rondon,+252+-+Centro,+Erechim+-+RS,+99700-370',
};

export const COURSES: CourseItem[] = [
  {
    id: 'english-conversation',
    language: 'ingles',
    title: 'Inglês Conversação Acelerada',
    tagline: 'Fale com naturalidade sem travar no pensamento.',
    description: 'Focado em quem quer destravar o speaking imediatamente. Você aprende a pensar em inglês sem o vício da tradução mental, dominando pronúncia, expressões reais e fluência para o cotidiano e viagens.',
    duration: '12 a 18 meses',
    level: 'Iniciante ao Avançado (A1 a C1)',
    classSize: 'Máximo 6 alunos por turma',
    popular: true,
    highlights: [
      'Simulações imersivas de situações reais de viagem e convivência',
      'Prática vocal intensiva em 85% de cada encontro',
      'Correção fonética refinada sem constrangimento',
      'Material didático internacional com áudios de nativos'
    ],
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'english-business',
    language: 'ingles',
    title: 'Business & Career English',
    tagline: 'Comunicação executiva para reuniões, apresentações e negociações.',
    description: 'Projetado para profissionais e líderes que precisam conduzir conference calls, responder e-mails estratégicos, participar de entrevistas globais e fechar negócios internacionais com autoridade.',
    duration: 'Módulos dinâmicos de 6 a 12 meses',
    level: 'Intermediário a Avançado (B1 a C2)',
    classSize: 'Até 5 alunos ou formato VIP 1-on-1',
    popular: true,
    highlights: [
      'Roleplay de reuniões globais, pitch de vendas e negociações',
      'Vocabulário específico para TI, agronegócio, engenharia e finanças',
      'Elaboração de relatórios corporativos e e-mails de alta clareza',
      'Simulação de entrevistas para cargos remotos em multinacionais'
    ],
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'english-certifications',
    language: 'ingles',
    title: 'Preparação para Exames (TOEFL, IELTS & Cambridge)',
    tagline: 'Pontuação alta garantida para mestrados, doutorados e vistos.',
    description: 'Treinamento focado nas exigências técnicas dos exames internacionais mais requisitados por universidades do exterior e processos de imigração para Canadá, EUA e Europa.',
    duration: '4 a 8 meses',
    level: 'Intermediário a Avançado (B1 a C2)',
    classSize: 'Máximo 5 alunos',
    popular: false,
    highlights: [
      'Simulados periódicos com o mesmo formato e tempo da prova real',
      'Correção minuciosa de essays (redação) e estratégias de listening',
      'Feedback individual sobre pronúncia e vocabulário acadêmico',
      'Materiais oficiais atualizados dos órgãos certificadores'
    ],
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'teens-future',
    language: 'ingles',
    title: 'Teens Global Fluency',
    tagline: 'Inglês interativo para jovens conquistarem o mundo.',
    description: 'Metodologia jovem e estimulante para adolescentes de 11 a 17 anos. Aulas dinâmicas que conectam cultura pop, games, intercâmbios e preparação para vestibulares e exames Cambridge.',
    duration: 'Módulos semestrais progressivos',
    level: 'Fundamental e Médio',
    classSize: 'Máximo 6 alunos',
    popular: false,
    highlights: [
      'Projetos temáticos com tecnologia, debates e criatividade',
      'Ambiente descontraído onde errar faz parte do aprendizado',
      'Desenvolvimento de pensamento crítico e oratória em inglês',
      'Apoio para aplicações em intercâmbio e high school internacional'
    ],
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop'
  }
];

export const DIFFERENTIALS: DifferentialItem[] = [
  {
    id: 'diff-1',
    number: '01',
    title: 'Método Comunicativo Direto',
    description: 'Você fala no idioma desde o primeiro minuto. Adeus regras gramaticais decoradas sem contexto; aqui o aprendizado acontece por uso prático e constante.',
    metric: '85%',
    metricLabel: 'do tempo de aula dedicado à fala',
    icon: 'MessageSquare'
  },
  {
    id: 'diff-2',
    number: '02',
    title: 'Turmas Reduzidas de Até 6 Alunos',
    description: 'Nada de salas lotadas onde você tem 2 minutos de voz por aula. Turmas ultralimitadas para que o professor conheça suas dificuldades pontuais.',
    metric: '6 alunos',
    metricLabel: 'limite máximo absoluto por sala',
    icon: 'Users'
  },
  {
    id: 'diff-3',
    number: '03',
    title: 'Imersão Sem Tradução Mental',
    description: 'Treinamos seu cérebro para associar significados diretamente a conceitos e imagens, eliminando o cansaço cognitivo de traduzir palavra por palavra.',
    metric: '3x mais',
    metricLabel: 'rapidez na retenção de vocabulário',
    icon: 'Sparkles'
  },
  {
    id: 'diff-4',
    number: '04',
    title: 'Professores Fluentes & Certificados',
    description: 'Corpo docente experiente com vivência no exterior, formação pedagógica e paixão genuína por destravar a fala de cada estudante.',
    metric: '100%',
    metricLabel: 'professores qualificados e certificados',
    icon: 'GraduationCap'
  },
  {
    id: 'diff-5',
    number: '05',
    title: 'Acompanhamento Individualizado',
    description: 'Feedbacks periódicos de pronúncia, sintaxe e evolução auditiva. Se você precisar de reforço pontual, temos mentorias de suporte sem burocracia.',
    metric: '1 a 1',
    metricLabel: 'alinhamento periódico de objetivos',
    icon: 'Target'
  },
  {
    id: 'diff-6',
    number: '06',
    title: 'Flexibilidade de Horários & Reposições',
    description: 'Sua rotina em Erechim é dinâmica? Oferecemos opções matutinas, vespertinas e noturnas, além de reposições práticas para você não perder ritmo.',
    metric: 'Turnos',
    metricLabel: 'manhã, tarde, noite e sábados',
    icon: 'Clock'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-google-1',
    name: 'Família ES',
    role: 'Alunas há 6 anos',
    companyOrCity: 'Avaliação real no Google',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop',
    stars: 5,
    quote: 'Metodologia de ensino excelente, professores altamente qualificados, ambiente acolhedor! Somos parte da ES há seis anos e já colhemos os frutos da nossa escolha em proporcionar o ensino da língua inglesa desde cedo para nossas filhas! É nítida a facilidade e desenvoltura delas, principalmente em viagens!',
    result: 'Fluência prática em viagens e no dia a dia',
    courseTaken: 'Inglês para Crianças e Jovens'
  },
  {
    id: 'test-google-2',
    name: 'Aluno do Programa Executivo',
    role: 'Trabalho Remoto Internacional',
    companyOrCity: 'Avaliação real no Google',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop',
    stars: 5,
    quote: 'Frequento a escola há mais de um ano e só tenho elogios a distribuir. No começo procurava um lugar para destravar meu aprendizado no inglês e recebi muito mais. Professores e funcionários muito educados e com um vasto conhecimento de inglês, que me encorajaram a perder o medo de falar. Uma metodologia de ensino que funciona, focada no aluno, possibilitando a evolução das skills sem medo de errar. Consegui atingir vários objetivos, como entender nativos falando, ler com fluência e o principal, trabalhar para outro país utilizando o inglês. Recomendo 100%',
    result: 'Contratado para trabalhar no exterior em Inglês',
    courseTaken: 'Business & Career English'
  },
  {
    id: 'test-google-3',
    name: 'Comunidade English Solutions',
    role: 'Mãe & Aluna ES',
    companyOrCity: 'Avaliação real no Google',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop',
    stars: 5,
    quote: 'Falar sobre a English Solutions Rafaela França, é falar de compromisso e comprometimento com alunos e colaboradores, ambiente diferenciado, e cada espaço é pensado e planejado para um aprendizado com qualidade, o empenho do ensinar com ética e responsabilidade. A energia contagia o ambiente, o coração de estar nesta escola. Parabéns a toda equipe!',
    result: 'Ambiente acolhedor e alta qualidade ética',
    courseTaken: 'English Solutions Rafaela França'
  }
];

export const FAQS = [
  {
    q: 'Nunca estudei o idioma ou sou muito travado para falar. Vou conseguir acompanhar?',
    a: 'Sim, absolutamente! Mais de 70% dos nossos alunos chegam dizendo que têm "trava" para falar. Nosso método foi criado justamente para quebrar essa inibição desde a primeira aula, em um ambiente amigável e sem julgamentos, com turmas de no máximo 6 pessoas.'
  },
  {
    q: 'Onde fica a escola física em Erechim?',
    a: 'Estamos no Centro de Erechim, na Rua Marechal Rondon, 252 (próximo aos principais pontos comerciais da cidade), com salas climatizadas, lounge de café para networking e ambiente acolhedor.'
  },
  {
    q: 'Como funciona a aula experimental gratuita?',
    a: 'Ao entrar em contato pelo site ou WhatsApp, agendamos um horário conveniente para você conhecer o espaço, tomar um café conosco e fazer um diagnóstico do seu nível e dos seus objetivos, sem qualquer compromisso de contratação.'
  },
  {
    q: 'Quais modalidades de Inglês são oferecidas?',
    a: 'Oferecemos programas completos e especializados em Inglês, abrangendo desde o nível iniciante absoluto até conversação acelerada, Business English executivo, preparação para certificações (TOEFL, IELTS, Cambridge) e turmas para adolescentes.'
  },
  {
    q: 'Quais são os formatos de aula disponíveis?',
    a: 'Oferecemos turmas reduzidas (máximo de 6 alunos para alta interação), duplas focadas ou o formato VIP 1-on-1 totalmente individual e adaptado à sua agenda. Facilitamos as formas de pagamento em cartão, boleto ou condições à vista.'
  }
];
