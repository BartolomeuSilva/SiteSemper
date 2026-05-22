import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ChevronRight, Users, Code, Wrench } from 'lucide-react';
import { Button } from './Button';
import { Badge } from './Badge';

const models = [
  {
    name: 'Projeto de Escopo Fechado',
    desc: 'Ideal para lançar MVPs, aplicativos ou novos produtos SaaS partindo do zero.',
    Icon: Code,
    iconStyle: 'bg-surface-elevated border-border-dark text-text-secondary',
    features: [
      'Discovery Técnico e Desenho de Arquitetura',
      'Escopo, prazos e custos bem definidos',
      'Design UX/UI Premium',
      'Desenvolvimento End-to-End',
      'Passagem de Conhecimento e Código Fonte',
    ],
    highlight: false,
    cta: 'Agendar Discovery',
  },
  {
    name: 'Squad Outsourcing (Dedicado)',
    desc: 'Um time completo e exclusivo de engenheiros focados 100% no seu projeto.',
    Icon: Users,
    iconStyle: 'bg-accent-subtle border-border-accent text-accent-primary',
    features: [
      'Alocação de Desenvolvedores Seniores',
      'Tech Lead / Arquiteto dedicado',
      'Metodologias Ágeis (Sprints, Dailies)',
      'Escalabilidade rápida do time',
      'Integração total com sua operação',
    ],
    highlight: true,
    cta: 'Montar meu Squad',
  },
  {
    name: 'Sustentação & Evolução',
    desc: 'Para softwares legados ou em produção que precisam de modernização ou suporte.',
    Icon: Wrench,
    iconStyle: 'bg-surface-elevated border-border-dark text-text-secondary',
    features: [
      'Refatoração de Código',
      'Migração para Cloud-Native',
      'Resolução de gargalos de performance',
      'Monitoramento 24/7 e SLAs de Correção',
      'Evolução contínua de features',
    ],
    highlight: false,
    cta: 'Falar com Especialista',
  },
];

export const Pricing: React.FC = () => {
  return (
    <section id="modelos" className="bg-surface-page section-y border-b border-border-dark relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent-primary/[0.05] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge className="mb-6">Modelos de Engajamento</Badge>
          <h2 className="font-display font-black text-section text-white mb-5">
            COMO TRABALHAMOS<span className="text-accent-primary">.</span>
          </h2>
          <p className="font-body text-lead text-text-secondary">
            Modelos flexíveis, projetados para se adaptar ao estágio e à complexidade da sua operação de software.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {models.map((model, i) => (
            <motion.div
              key={model.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.1, type: 'spring', stiffness: 200, damping: 25 }}
              className="relative group"
            >
              {model.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 px-3 py-0.5 bg-accent-primary text-white text-[10px] font-semibold rounded-md tracking-wide">
                  Mais escolhido
                </div>
              )}

              <div
                className={`relative h-full glass-dark rounded-2xl p-8 flex flex-col transition-all duration-300 group-hover:-translate-y-1 ${
                  model.highlight
                    ? 'border border-accent-primary/30 bg-[rgba(26,75,255,0.04)] shadow-pricing-featured'
                    : 'border border-border-dark hover:border-white/10'
                }`}
              >
                <div className="mb-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 border ${model.iconStyle}`}>
                    <model.Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-white mb-2">{model.name}</h3>
                  <p className="font-body text-sm text-text-secondary leading-relaxed">{model.desc}</p>
                </div>

                <div className="flex-1">
                  <ul className="space-y-3.5 mb-8">
                    {model.features.map((feat, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${model.highlight ? 'text-accent-primary' : 'text-text-muted'}`} />
                        <span className="font-body text-sm text-text-primary">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button variant={model.highlight ? 'primary' : 'secondary'} className="w-full mt-auto">
                  {model.cta}
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
