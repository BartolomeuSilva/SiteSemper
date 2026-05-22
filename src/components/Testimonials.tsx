import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Activity, Server, Clock } from 'lucide-react';

function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let cur = 0;
    const step = to / 50;
    const iv = setInterval(() => {
      cur += step;
      if (cur >= to) { setVal(to); clearInterval(iv); }
      else setVal(Math.floor(cur));
    }, 30);
    return () => clearInterval(iv);
  }, [inView, to]);

  return <span ref={ref}>{val}{suffix}</span>;
}

const stats = [
  { icon: Activity, countTo: 99, suffix: '.99%', label: 'Uptime de Infra',            color: 'text-status-success' },
  { icon: Server,   countTo: 45, suffix: '%↓',   label: 'Redução de Custos Cloud',    color: 'text-accent-primary' },
  { icon: Clock,    countTo: 3,  suffix: 'x',    label: 'Aceleração Time-to-Market',  color: 'text-white' },
];

const testimonials = [
  {
    quote: 'A arquitetura cloud-native que a Semper desenvolveu permitiu que nosso SaaS escalasse de 10k para 200k usuários simultâneos sem nenhuma queda de performance.',
    author: 'CTO, SaaS Global',
    role: 'Escalabilidade de Alta Performance',
    stars: 5,
  },
  {
    quote: 'Substituímos nosso legado monolítico por um ecossistema de microsserviços. O resultado foi um deploy 3x mais rápido e custos de servidor cortados pela metade.',
    author: 'Diretor de Engenharia, TechCorp',
    role: 'Modernização de Legado',
    stars: 5,
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section className="bg-surface-page section-y border-b border-border-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display font-black text-section text-white mb-5">
            RESULTADOS COMPROVADOS
            <br className="hidden sm:block" />
            <span className="text-gradient-accent">EM ESCALA.</span>
          </h2>
          <p className="font-body text-lead text-text-secondary">
            Não entregamos apenas código. Entregamos arquitetura que reduz custos e multiplica a capacidade de processamento.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: 'spring', stiffness: 300, damping: 25 }}
              className="relative glass-dark rounded-2xl p-8 border border-border-dark text-center group hover:border-accent-primary/30 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-accent-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-full bg-surface-elevated flex items-center justify-center text-text-muted mb-5 mx-auto group-hover:text-white transition-colors duration-300">
                  <s.icon className="w-4 h-4" />
                </div>
                <p className={`font-display font-black text-5xl mb-3 tabular-nums ${s.color}`}>
                  <Counter to={s.countTo} suffix={s.suffix} />
                </p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-text-secondary">{s.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, type: 'spring', stiffness: 200, damping: 25 }}
              className="relative p-8 rounded-2xl bg-surface-elevated border border-border-dark hover:border-accent-primary/20 transition-all duration-300 group overflow-hidden"
            >
              {/* Decorative quote mark */}
              <span className="absolute top-2 right-5 font-display font-black text-[110px] text-white/[0.025] leading-none select-none group-hover:text-white/[0.04] transition-colors duration-300 pointer-events-none">
                "
              </span>

              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-5">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent-primary text-accent-primary" />
                ))}
              </div>

              <p className="font-body text-text-primary text-base leading-relaxed mb-8 relative z-10">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-accent-primary/15 flex items-center justify-center border border-accent-primary/25 flex-shrink-0">
                  <span className="font-display font-bold text-sm text-accent-primary">
                    {t.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-display font-bold text-sm text-white">{t.author}</p>
                  <p className="font-mono text-[10px] text-text-muted mt-0.5">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
