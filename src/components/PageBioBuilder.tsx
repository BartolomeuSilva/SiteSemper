import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Badge } from './Badge';

const featureList = [
  {
    title: 'SaaS & Sistemas Web',
    desc: 'Aplicações robustas, prontas para suportar milhares de usuários simultâneos.',
  },
  {
    title: 'Apps Mobile (iOS/Android)',
    desc: 'Código nativo e cross-platform fluido, focado na melhor experiência de uso.',
  },
  {
    title: 'Sistemas Desktop',
    desc: 'Softwares de alta performance para operações internas complexas e corporativas.',
  },
];

export const PageBioBuilder: React.FC = () => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setPhase((p) => (p + 1) % 4);
    }, 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="solucoes"
      className="relative bg-surface-alt overflow-hidden border-b border-border-light"
    >
      {/* Light grid */}
      <div className="absolute inset-0 bg-grid-light" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 section-y grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* ── Left copy ─────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ type: 'spring', stiffness: 280, damping: 28 }}
        >
          <Badge className="mb-7 bg-black/[0.05] text-text-dark-secondary">
            Nossas Soluções
          </Badge>

          <h2 className="font-display font-black text-section text-text-dark-primary mb-6">
            ENGENHARIA SOB MEDIDA.<br />
            <span className="text-accent-primary">DO BACKEND AO MOBILE.</span>
          </h2>

          <p className="font-body text-lead text-text-dark-secondary mb-10 max-w-md">
            Desenvolvemos ecossistemas tecnológicos completos, focados em performance, segurança e experiência do usuário (UX).
          </p>

          <div className="space-y-5">
            {featureList.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, type: 'spring', stiffness: 300, damping: 28 }}
                className="flex gap-4 items-start"
              >
                <div className="mt-0.5 w-5 h-5 rounded-full bg-accent-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="w-2 h-2 rounded-full bg-accent-primary" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-text-dark-primary text-sm mb-0.5">{f.title}</h4>
                  <p className="font-body text-xs text-text-dark-secondary leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Right: Phone mockup ───────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ type: 'spring', stiffness: 240, damping: 28, delay: 0.1 }}
          className="flex justify-center items-center relative h-[520px]"
        >
          {/* Editor panel (slides in) */}
          <motion.div
            animate={{ x: phase >= 2 ? 0 : 260, opacity: phase >= 2 ? 1 : 0 }}
            transition={{ type: 'spring', stiffness: 320, damping: 28 }}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-52 glass-dark rounded-xl p-4 shadow-card z-20"
          >
            <div className="flex items-center justify-between border-b border-border-dark pb-2 mb-3">
              <span className="font-mono text-[9px] text-accent-primary font-bold">API_CONFIG</span>
              <span className="font-mono text-[8px] px-1.5 py-0.5 rounded-full bg-status-success/10 text-status-success">200 OK</span>
            </div>
            <div className="font-mono text-[9px] text-text-secondary space-y-1 leading-relaxed">
              <div><span className="text-white">"stack"</span>: "react_native",</div>
              <div><span className="text-white">"backend"</span>: "node_microservices",</div>
              <div><span className="text-white">"auth"</span>: {"{"}</div>
              <div className="pl-3"><span className="text-white">"provider"</span>: <span className="text-status-success">"oauth2"</span></div>
              <div>{"}"}</div>
            </div>
          </motion.div>

          {/* Phone */}
          <motion.div
            animate={{
              borderColor: phase === 2 ? '#1A4BFF' : 'rgba(0,0,0,0.10)',
              boxShadow: phase === 2
                ? '0 20px 60px rgba(26,75,255,0.15), 0 0 0 2px rgba(26,75,255,0.4)'
                : '0 20px 60px rgba(0,0,0,0.06)',
            }}
            transition={{ duration: 0.25 }}
            className="relative w-[200px] h-[400px] bg-white border-2 rounded-[32px] p-3 flex flex-col items-center overflow-hidden z-10 shadow-apple"
          >
            {/* Notch */}
            <div className="w-20 h-5 bg-black rounded-b-2xl mb-4 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
            </div>

            {/* Avatar */}
            <div className="w-14 h-14 rounded-full bg-black/[0.04] border-2 border-black/[0.06] mb-2 flex items-center justify-center">
              <span className="font-display font-black text-[10px] text-text-dark-primary">App</span>
            </div>
            <p className="font-mono text-[9px] text-text-dark-secondary mb-5">v2.0_stable</p>

            {/* App modules */}
            <div className="w-full space-y-2 mb-5">
              {['📊 Dashboard Engine', '⚡ Gateway de Pagamento', '🔐 Auth System'].map((l) => (
                <div key={l} className="w-full h-8 bg-black/[0.03] border border-black/[0.05] rounded-lg flex items-center justify-center text-[8px] font-body text-text-dark-primary font-medium">
                  {l}
                </div>
              ))}
            </div>

            {/* Action button */}
            <div className="w-full bg-black/[0.02] border border-black/[0.05] rounded-xl p-2 mt-auto">
              <motion.div
                animate={{ backgroundColor: phase >= 2 ? '#1A4BFF' : '#09090B' }}
                transition={{ duration: 0.2 }}
                className="w-full h-8 rounded-lg flex items-center justify-center text-[9px] font-bold text-white cursor-default"
              >
                Deploy Build
              </motion.div>
            </div>
          </motion.div>

          {/* Cursor */}
          <motion.div
            animate={{
              x: phase === 0 ? 290 : phase === 1 ? 120 : phase === 2 ? 115 : 290,
              y: phase === 0 ? 80 : phase === 1 ? 310 : phase === 2 ? 300 : 80,
              scale: phase === 2 ? 0.85 : 1,
            }}
            transition={{ type: 'spring', stiffness: phase === 3 ? 120 : 320, damping: 26 }}
            className="absolute top-0 left-0 z-50 pointer-events-none drop-shadow-lg"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M3 3L11 20L13.5 13L20.5 10.5L3 3Z" fill="#09090B" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};
