import React, { useState, useCallback } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { CheckCircle2, ChevronRight, ArrowDown } from 'lucide-react';
import { Button } from './Button';
import { Badge } from './Badge';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { type: 'spring' as const, stiffness: 280, damping: 28, delay },
});

const TERMINAL = [
  { t: 'dim', v: '# deploy: semper_platform v2.4.1' },
  { t: 'cmd', v: '$ docker build --platform linux/amd64 .' },
  { t: 'ok',  v: '✓  Image built  [847 MB · 3.2s]' },
  { t: 'cmd', v: '$ kubectl apply -f ./k8s/prod/' },
  { t: 'ok',  v: '✓  deployment/api-gateway    4/4' },
  { t: 'ok',  v: '✓  deployment/auth-service   4/4' },
  { t: 'ok',  v: '✓  deployment/core-engine    4/4' },
  { t: 'acc', v: '→  p95: 12 ms  ·  uptime: 99.99%' },
  { t: 'dim', v: '# pipeline complete in 18.4s  ✓' },
];

export const Hero: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const spotX = useTransform(mouseX, [0, 1], ['10%', '90%']);
  const spotY = useTransform(mouseY, [0, 1], ['0%', '100%']);

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - r.left) / r.width);
    mouseY.set((e.clientY - r.top) / r.height);
  }, [mouseX, mouseY]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail('');
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section
      className="relative min-h-screen bg-surface-page overflow-hidden flex items-center section-y-hero"
      onMouseMove={onMouseMove}
    >
      {/* Backgrounds */}
      <div className="absolute inset-0 bg-grid-dark" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-[rgba(26,75,255,0.18)] to-transparent blur-[120px] pointer-events-none" />

      {/* Mouse spotlight */}
      <motion.div
        className="absolute pointer-events-none rounded-full"
        style={{
          left: spotX,
          top: spotY,
          width: 800,
          height: 800,
          x: '-50%',
          y: '-50%',
          background: 'radial-gradient(circle, rgba(26,75,255,0.08) 0%, transparent 60%)',
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,transparent_60%,#05050A_100%)] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left */}
        <div>
          <motion.div {...fadeUp(0)}>
            <Badge variant="accent" className="mb-8">
              Engenharia de Software de Alta Performance
            </Badge>
          </motion.div>

          <motion.h1
            {...fadeUp(0.05)}
            className="font-display font-black text-hero text-white leading-[0.92] tracking-[-0.04em] mb-7"
          >
            CONSTRUÍMOS{' '}
            <span className="relative inline-block">
              SISTEMAS.
              <span className="absolute -bottom-1 left-0 h-[3px] w-full bg-accent-primary rounded-full" />
            </span>
            <br />
            <span className="text-gradient-accent">VOCÊ ESCALA O NEGÓCIO.</span>
          </motion.h1>

          <motion.p {...fadeUp(0.1)} className="font-body text-lead text-text-secondary max-w-lg mb-10">
            Software House especializada em SaaS, Aplicativos Mobile, Sistemas Web e Desktop. Arquitetura escalável para empresas que não podem parar.
          </motion.p>

          <motion.form {...fadeUp(0.15)} onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mb-8">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu email corporativo"
              required
              className="flex-1 h-12 px-4 rounded-md bg-surface-elevated border border-border-dark-strong text-white placeholder:text-text-muted text-sm font-body outline-none focus:border-accent-primary focus:shadow-[0_0_0_3px_rgba(26,75,255,0.15)] transition-all"
            />
            <Button type="submit" variant="primary" size="md">
              Agendar Reunião Técnica
              <ChevronRight className="w-4 h-4" />
            </Button>
          </motion.form>

          <motion.div {...fadeUp(0.2)} className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[11px] text-text-muted">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-status-success animate-shimmer" />
              arch: cloud-native
            </span>
            <span>// stacks: state-of-the-art</span>
            <span>// dev: agile</span>
          </motion.div>

          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-5 flex items-center gap-2.5 px-4 py-3 rounded-md bg-status-success/10 border border-status-success/25 text-status-success font-mono text-xs"
            >
              <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
              Solicitação recebida. Entraremos em contato em breve.
            </motion.div>
          )}
        </div>

        {/* Right: Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 30, delay: 0.12 }}
          className="animate-float hidden lg:block"
        >
          <div className="relative w-full max-w-[500px] mx-auto">
            <div className="relative glass-dark rounded-xl overflow-hidden shadow-card-glow">
              {/* Title bar */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-border-dark bg-white/[0.01]">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                  <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <span className="w-3 h-3 rounded-full bg-[#28CA41]" />
                </div>
                <span className="font-mono text-[10px] text-text-muted">semper — deploy pipeline</span>
                <span className="font-mono text-[10px] text-status-success flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-status-success animate-pulse" />
                  LIVE
                </span>
              </div>

              {/* Terminal body */}
              <div className="p-5 h-[252px] space-y-0.5 font-mono text-[11px] leading-[1.9]">
                {TERMINAL.map((line, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 + i * 0.22, duration: 0.25 }}
                    className={
                      line.t === 'dim' ? 'text-text-muted' :
                      line.t === 'cmd' ? 'text-white font-semibold' :
                      line.t === 'ok'  ? 'text-status-success' :
                      line.t === 'acc' ? 'text-accent-primary font-semibold' :
                      'text-text-secondary'
                    }
                  >
                    {line.v}
                  </motion.p>
                ))}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.7, repeatType: 'reverse' }}
                  className="inline-block w-[7px] h-[13px] bg-white/50 align-middle"
                />
              </div>

              {/* Status footer */}
              <div className="flex items-center justify-between px-4 py-2.5 border-t border-border-dark font-mono text-[10px]">
                <span className="text-status-success flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-status-success" />
                  PIPELINE_OK
                </span>
                <span className="text-text-muted">pods: 4/4 running</span>
                <span className="text-text-muted">p95: 12ms</span>
              </div>
            </div>

            {/* Floating badge: Uptime */}
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 2.5, type: 'spring', stiffness: 260, damping: 22 }}
              className="absolute -right-5 top-6 glass-dark rounded-xl px-4 py-3 border border-border-dark shadow-card"
            >
              <p className="font-mono text-[9px] text-text-muted mb-0.5 tracking-widest">UPTIME</p>
              <p className="font-display font-black text-xl text-status-success leading-none">99.99%</p>
            </motion.div>

            {/* Floating badge: Requests */}
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 2.9, type: 'spring', stiffness: 260, damping: 22 }}
              className="absolute -left-5 -bottom-5 glass-dark rounded-xl px-4 py-3 border border-border-dark shadow-card"
            >
              <p className="font-mono text-[9px] text-text-muted mb-0.5 tracking-widest">REQS/MIN</p>
              <p className="font-display font-black text-xl text-accent-primary leading-none">1.2M+</p>
            </motion.div>
          </div>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-4 h-4 text-text-muted" />
        </motion.div>
        <span className="font-mono text-[9px] text-text-muted tracking-widest">SCROLL</span>
      </motion.div>
    </section>
  );
};
