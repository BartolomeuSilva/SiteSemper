import React from 'react';
import { motion } from 'framer-motion';
import { Search, GitBranch, Rocket } from 'lucide-react';

const steps = [
  {
    num: '01',
    Icon: Search,
    title: 'Discovery & Arquitetura',
    desc: 'Reuniões técnicas para definir o escopo, stack tecnológica e arquitetura ideal. Sem chute — só decisão baseada em dados.',
    cmd: '$ semper analyze --project ./requirements.md',
    out: '→ Stack: React · Node.js · PostgreSQL · AWS ECS',
  },
  {
    num: '02',
    Icon: GitBranch,
    title: 'Desenvolvimento Ágil',
    desc: 'Sprints quinzenais, entregas contínuas e visibilidade total do progresso. Você acompanha cada linha de código.',
    cmd: '$ git push origin feature/payment-gateway-v2',
    out: '→ PR #148 · CI/CD: all checks passed (12/12)',
  },
  {
    num: '03',
    Icon: Rocket,
    title: 'Deploy & Sustentação',
    desc: 'Lançamento seguro em infraestrutura cloud e monitoramento contínuo. Sua operação não para, nem no dia do go-live.',
    cmd: '$ kubectl rollout status deployment/api-gateway',
    out: '→ Rollout complete. Replicas: 4/4 · Uptime: 99.99%',
  },
];

export const HowItWorks: React.FC = () => {
  return (
    <section id="processo" className="relative bg-surface-page section-y border-b border-border-dark overflow-hidden">
      <div className="absolute inset-0 bg-grid-dark opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header — left-aligned for editorial feel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ type: 'spring', stiffness: 280, damping: 28 }}
          className="mb-20"
        >
          <h2 className="font-display font-black text-section text-white tracking-tight">
            PROCESSO DE DESENVOLVIMENTO<span className="text-accent-primary">.</span>
          </h2>
          <p className="font-body text-lead text-text-secondary mt-4 max-w-md">
            Da ideia ao deploy — um processo rigoroso que elimina incertezas e entrega software real.
          </p>
        </motion.div>

        {/* Steps as editorial rows */}
        <div className="divide-y divide-border-dark">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.1, type: 'spring', stiffness: 260, damping: 28 }}
              className="group py-12 grid grid-cols-1 lg:grid-cols-[160px_1fr_1fr] gap-8 lg:gap-12 items-start -mx-6 px-6 hover:bg-white/[0.012] transition-colors duration-300"
            >
              {/* Step number + icon */}
              <div className="flex lg:flex-col items-center lg:items-start gap-4 lg:gap-3">
                <span className="font-mono font-bold text-[72px] leading-none text-white/[0.05] select-none group-hover:text-white/[0.09] transition-colors duration-500">
                  {step.num}
                </span>
                <div className="w-9 h-9 rounded-lg bg-accent-subtle border border-border-accent flex items-center justify-center flex-shrink-0">
                  <step.Icon className="w-4 h-4 text-accent-primary" />
                </div>
              </div>

              {/* Title + description */}
              <div className="pt-1">
                <h3 className="font-display font-bold text-2xl text-white mb-3 leading-tight">{step.title}</h3>
                <p className="font-body text-text-secondary text-base leading-relaxed">{step.desc}</p>
              </div>

              {/* Mini terminal */}
              <div className="glass-dark rounded-xl p-4 border border-border-dark group-hover:border-accent-primary/20 transition-colors duration-300">
                <p className="font-mono text-[11px] text-white mb-2 leading-relaxed">{step.cmd}</p>
                <p className="font-mono text-[11px] text-status-success leading-relaxed">{step.out}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
