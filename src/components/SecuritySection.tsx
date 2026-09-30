import React from 'react';
import { ShieldCheck, Lock, EyeOff, Server, KeyRound, FileCheck, CheckCircle2 } from 'lucide-react';

export const SecuritySection: React.FC = () => {
  const securityFeatures = [
    {
      icon: ShieldCheck,
      title: 'Conformidade LGPD & Privacidade',
      description: 'Tratamento rigoroso de dados pessoais em total acordo com a Lei Geral de Proteção de Dados. Seus dados nunca são vendidos ou compartilhados.',
    },
    {
      icon: Lock,
      title: 'Criptografia End-to-End & SSL',
      description: 'Navegação e formulários protegidos com certificado de segurança SSL de 256 bits e protocolo HTTPS encriptado em todas as conexões.',
    },
    {
      icon: EyeOff,
      title: 'Ocultação de Chaves & API Keys',
      description: 'Proteção avançada de credenciais com armazenamento isolado de secrets no servidor, sem exposição no código cliente.',
    },
    {
      icon: Server,
      title: 'Servidores & Banco Sanitizado',
      description: 'Consultas parametrizadas contra injeção de dados, controle rigoroso de upload e prevenção ativa contra vazamentos de informações.',
    },
    {
      icon: KeyRound,
      title: 'Proteção Anti-Spam & Rate Limit',
      description: 'Sistemas inteligentes de bloqueio a bots e limitação de requisições por IP para garantir estabilidade e navegação fluida.',
    },
    {
      icon: FileCheck,
      title: 'Cabeçalhos & Auditoria de Segurança',
      description: 'Cabeçalhos de segurança HTTPS configurados, auditoria constante de dependências e politicas de acesso restrito (RLS).',
    },
  ];

  return (
    <section id="seguranca" className="py-12 sm:py-16 md:py-20 bg-background border-y border-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-red-50 text-primary border border-red-200 mb-3 shadow-xs">
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span>Segurança, Privacidade & Tecnologia</span>
          </div>
          <h2 className="clamp-section font-extrabold text-foreground tracking-tight">
            Compromisso com a <span className="text-primary">Segurança dos seus Dados</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
            Plataforma projetada dentro dos mais altos padrões de proteção da informação, criptografia e normas brasileiras de privacidade.
          </p>
        </div>

        {/* 6 Grid items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {securityFeatures.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-surface p-5 sm:p-6 rounded-2xl border border-red-100 hover:border-red-300 transition-all duration-200 shadow-2xs hover:shadow-md hover:-translate-y-0.5 group"
              >
                <div className="w-11 h-11 rounded-xl bg-red-50 text-primary border border-red-200 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-base text-foreground mb-1.5 flex items-center gap-2">
                  <span>{item.title}</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Security Trust Badges Bar */}
        <div className="mt-10 sm:mt-12 p-4 sm:p-5 rounded-2xl bg-surface border border-red-200/80 flex flex-wrap items-center justify-between gap-4 text-center sm:text-left shadow-2xs">
          <div className="flex items-center gap-3 mx-auto sm:mx-0">
            <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-xs sm:text-sm text-foreground">
                Ambiente 100% Verificado & Protegido
              </p>
              <p className="text-[11px] sm:text-xs text-muted-foreground">
                Seus dados de agendamento são encriptados e processados de forma confidencial.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 mx-auto sm:mx-0 text-[11px] font-bold text-foreground">
            <span className="px-3 py-1 bg-background border border-border rounded-lg shadow-2xs flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-emerald-600" /> SSL 256-bit
            </span>
            <span className="px-3 py-1 bg-background border border-border rounded-lg shadow-2xs flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-primary" /> LGPD OK
            </span>
            <span className="px-3 py-1 bg-background border border-border rounded-lg shadow-2xs flex items-center gap-1.5">
              <Server className="w-3.5 h-3.5 text-slate-600" /> API Protected
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
