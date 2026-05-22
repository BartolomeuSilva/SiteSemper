import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const BRANDS = [
  'TechNova Solutions',
  'GlobalSaaS Inc.',
  'Acme Corp',
  'Nexus Fintech',
  'HealthSync Systems',
  'DataFlow Analytics',
  'CloudPeak Systems',
  'Vertex Software',
];

function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let cur = 0;
    const step = to / 55;
    const iv = setInterval(() => {
      cur += step;
      if (cur >= to) { setVal(to); clearInterval(iv); }
      else setVal(Math.floor(cur));
    }, 28);
    return () => clearInterval(iv);
  }, [inView, to]);

  return <span ref={ref}>{val}{suffix}</span>;
}

const STATS = [
  { to: 40,  suffix: '+',  label: 'Projetos Entregues' },
  { to: 98,  suffix: '%',  label: 'Satisfação dos Clientes' },
  { to: 12,  suffix: 'M+', label: 'Transações/Mês' },
  { to: 3,   suffix: 'x',  label: 'Mais Rápido no Mercado' },
];

export const SocialProof: React.FC = () => {
  return (
    <section className="bg-surface-page border-b border-border-dark overflow-hidden">

      {/* Stats bar */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-border-dark/50">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, type: 'spring', stiffness: 300, damping: 28 }}
            className="text-center"
          >
            <p className="font-display font-black text-4xl md:text-5xl text-white mb-1.5 tracking-tight tabular-nums">
              <Counter to={stat.to} suffix={stat.suffix} />
            </p>
            <p className="font-mono text-[10px] text-text-muted uppercase tracking-widest">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Marquee */}
      <div className="py-7">
        <div className="max-w-7xl mx-auto px-6 mb-4">
          <p className="text-center font-mono text-[10px] uppercase tracking-widest text-text-muted">
            Software Houses, Startups e Corporações que confiam na nossa engenharia
          </p>
        </div>
        <div className="relative flex overflow-x-hidden">
          <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-surface-page to-transparent z-10" />
          <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-surface-page to-transparent z-10" />
          <motion.div
            className="flex whitespace-nowrap gap-16 px-8 items-center"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, ease: 'linear', duration: 30 }}
          >
            {[...BRANDS, ...BRANDS].map((brand, i) => (
              <span
                key={i}
                className="font-display font-bold text-lg text-text-muted opacity-35 hover:opacity-75 transition-opacity duration-300 select-none"
              >
                {brand}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
