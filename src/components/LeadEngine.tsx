import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, Zap, RefreshCw, Server, HardDrive, Shield } from 'lucide-react';
import { Badge } from './Badge';

interface RequestLog {
  id: string;
  time: string;
  src: string;
  dst: string;
  status: 'active' | 'synced';
}

const SRCS  = ['auth_service', 'core_api', 'payment_gateway'] as const;
const DSTS  = ['PostgreSQL', 'Redis Cache', 'AWS S3'] as const;

export const LeadEngine: React.FC = () => {
  const [logs, setLogs] = useState<RequestLog[]>([
    { id: 'req_7482', time: '17:19:10', src: 'core_api', dst: 'PostgreSQL', status: 'synced' },
    { id: 'req_3910', time: '17:19:08', src: 'auth_service', dst: 'Redis Cache', status: 'synced' },
    { id: 'req_9012', time: '17:19:05', src: 'payment_gateway', dst: 'AWS S3', status: 'synced' },
    { id: 'req_1049', time: '17:19:02', src: 'core_api', dst: 'PostgreSQL', status: 'synced' },
  ]);
  const [activeSrc, setActiveSrc]   = useState<string | null>(null);
  const [activeDst, setActiveDst]   = useState<string | null>(null);
  const [total, setTotal]           = useState(1_248_820);

  useEffect(() => {
    const iv = setInterval(() => {
      const id  = `req_${Math.floor(1000 + Math.random() * 9000)}`;
      const now = new Date().toTimeString().slice(0, 8);
      const src = SRCS[Math.floor(Math.random() * SRCS.length)];
      const dst = DSTS[Math.floor(Math.random() * DSTS.length)];

      setActiveSrc(src);
      setTimeout(() => { setActiveDst(dst); setTotal((t) => t + 14); }, 400);

      setLogs((prev) => [
        { id, time: now, src, dst, status: 'active' },
        ...prev.slice(0, 4),
      ]);

      setTimeout(() => {
        setLogs((prev) => prev.map((l) => l.id === id ? { ...l, status: 'synced' } : l));
      }, 1200);

      setTimeout(() => { setActiveSrc(null); setActiveDst(null); }, 1600);
    }, 2200);
    return () => clearInterval(iv);
  }, []);

  const srcIcons: Record<string, React.ReactNode> = {
    auth_service:     <Shield className="w-4 h-4" />,
    core_api:         <Server className="w-4 h-4" />,
    payment_gateway:  <Zap className="w-4 h-4" />,
  };
  const dstIcons: Record<string, React.ReactNode> = {
    'PostgreSQL':     <Database className="w-4 h-4" />,
    'Redis Cache':    <RefreshCw className="w-4 h-4" />,
    'AWS S3':         <HardDrive className="w-4 h-4" />,
  };

  return (
    <section id="arquitetura" className="relative bg-surface-page overflow-hidden border-b border-border-dark section-y">
      <div className="absolute inset-0 bg-grid-dark" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent-primary/[0.07] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ type: 'spring', stiffness: 280, damping: 28 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <Badge variant="accent" className="mb-6">
            Arquitetura & Escala
          </Badge>
          <h2 className="font-display font-black text-section text-white mb-5">
            CÓDIGO LIMPO.<br />
            <span className="text-gradient-accent">INFRAESTRUTURA ESCALÁVEL.</span>
          </h2>
          <p className="font-body text-lead text-text-secondary">
            Desenvolvemos usando as stacks mais robustas do mercado, garantindo que seu software suporte o crescimento exponencial da sua empresa.
          </p>
        </motion.div>

        {/* 3-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_220px] gap-6 items-start">

          {/* Sources */}
          <div className="space-y-3">
            <p className="font-mono text-[10px] text-text-muted uppercase tracking-wider mb-4">// Microsserviços</p>
            {SRCS.map((src) => {
              const active = activeSrc === src;
              return (
                <motion.div
                  key={src}
                  animate={{
                    borderColor: active ? '#1A4BFF' : 'rgba(255,255,255,0.08)',
                    backgroundColor: active ? 'rgba(26,75,255,0.06)' : '#0C0C14',
                  }}
                  transition={{ duration: 0.25 }}
                  className="flex items-center gap-3 p-3.5 rounded-lg border"
                >
                  <div className={`p-2 rounded-md transition-colors duration-200 ${active ? 'bg-accent-primary text-white' : 'bg-surface-elevated text-text-secondary'}`}>
                    {srcIcons[src]}
                  </div>
                  <div>
                    <p className="font-display font-bold text-xs text-white leading-none mb-0.5">{src.replace('_', ' ')}</p>
                    <p className="font-mono text-[9px] text-text-muted">status: up</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Central DB table */}
          <div className="glass-dark rounded-xl overflow-hidden shadow-card">
            <div className="flex items-center justify-between px-4 py-3 border-b border-border-dark">
              <div className="flex items-center gap-2">
                <Server className="w-4 h-4 text-accent-primary" />
                <span className="font-mono text-xs font-bold text-white">production_cluster.sys</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] text-text-muted flex items-center gap-1">
                  <RefreshCw className="w-3 h-3 text-status-success animate-spin" />
                  Live Trace
                </span>
                <span className="font-mono text-[10px] font-bold bg-accent-subtle text-accent-primary px-2 py-0.5 rounded-full">
                  {total.toLocaleString('pt-BR')} reqs/min
                </span>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full font-mono text-[11px] text-left">
                <thead>
                  <tr className="border-b border-border-dark text-text-muted">
                    <th className="px-4 py-2 font-normal">REQ_ID</th>
                    <th className="px-4 py-2 font-normal">HORA</th>
                    <th className="px-4 py-2 font-normal">SERVICE</th>
                    <th className="px-4 py-2 font-normal">DATABASE</th>
                    <th className="px-4 py-2 font-normal text-right">STATUS</th>
                  </tr>
                </thead>
                <tbody>
                  <AnimatePresence initial={false}>
                    {logs.map((log, i) => (
                      <motion.tr
                        key={log.id}
                        initial={{ opacity: 0, x: -12, backgroundColor: 'rgba(26,75,255,0.08)' }}
                        animate={{ opacity: 1, x: 0, backgroundColor: 'rgba(0,0,0,0)' }}
                        exit={{ opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 30, delay: i * 0.03, backgroundColor: { duration: 1.5 } }}
                        className="border-b border-border-dark/50 hover:bg-white/[0.015]"
                      >
                        <td className="px-4 py-2.5 font-bold text-white">{log.id}</td>
                        <td className="px-4 py-2.5 text-text-muted">{log.time}</td>
                        <td className="px-4 py-2.5 text-text-secondary">{log.src}</td>
                        <td className="px-4 py-2.5 text-accent-primary">{log.dst}</td>
                        <td className="px-4 py-2.5 text-right">
                          <span className="inline-flex items-center gap-1.5">
                            <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${log.status === 'active' ? 'bg-status-error animate-pulse' : 'bg-status-success'}`} />
                            <span className={log.status === 'active' ? 'text-status-error' : 'text-status-success'}>
                              {log.status === 'active' ? 'PROCESSING' : '200 OK'}
                            </span>
                          </span>
                        </td>
                      </motion.tr>
                    ))}
                  </AnimatePresence>
                </tbody>
              </table>
            </div>
          </div>

          {/* Destinations */}
          <div className="space-y-3">
            <p className="font-mono text-[10px] text-text-muted uppercase tracking-wider mb-4">// Data Layer</p>
            {DSTS.map((dst) => {
              const active = activeDst === dst;
              return (
                <motion.div
                  key={dst}
                  animate={{
                    borderColor: active ? '#00D46A' : 'rgba(255,255,255,0.08)',
                    backgroundColor: active ? 'rgba(0,212,106,0.05)' : '#0C0C14',
                  }}
                  transition={{ duration: 0.25 }}
                  className="flex items-center gap-3 p-3.5 rounded-lg border"
                >
                  <div className={`p-2 rounded-md transition-colors duration-200 ${active ? 'bg-status-success text-white' : 'bg-surface-elevated text-text-secondary'}`}>
                    {dstIcons[dst]}
                  </div>
                  <div>
                    <p className="font-display font-bold text-xs text-white leading-none mb-0.5">{dst}</p>
                    <p className="font-mono text-[9px] text-text-muted">operational</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
