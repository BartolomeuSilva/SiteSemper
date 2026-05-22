import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Calendar, MessageSquare, Circle } from 'lucide-react';
import { Button } from './Button';

export const CTA: React.FC = () => {
  return (
    <section className="relative py-44 bg-surface-page overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid-dark opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[700px] bg-gradient-cta blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-accent-primary/[0.08] blur-[60px] pointer-events-none rounded-full" />

      {/* Accent lines at top/bottom edges */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-primary/20 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 200, damping: 25 }}
        >
          <span className="inline-flex items-center gap-2 text-xs font-medium text-accent-primary bg-accent-primary/[0.10] px-3 py-1.5 rounded-md mb-8">
            <Circle className="w-1.5 h-1.5 fill-accent-primary text-accent-primary" />
            Vamos construir algo grande
          </span>

          <h2
            className="font-display font-black text-white tracking-tight leading-[0.92] mb-8"
            style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}
          >
            SEU PRÓXIMO SOFTWARE
            <br />
            <span className="text-gradient-accent">COMEÇA AQUI.</span>
          </h2>

          <p className="font-body text-lead text-text-secondary max-w-2xl mx-auto mb-12">
            Traga o seu desafio de engenharia. Nossa equipe de arquitetos e desenvolvedores está pronta para transformar sua visão em código de alta performance.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button variant="primary" size="lg">
              <Calendar className="w-5 h-5" />
              Agendar Reunião Técnica
              <ChevronRight className="w-5 h-5" />
            </Button>
            <Button variant="secondary" size="lg">
              <MessageSquare className="w-5 h-5" />
              Falar no WhatsApp
            </Button>
          </div>

          <p className="font-mono text-[11px] text-text-muted">
            // SLA de resposta em até 24h úteis
          </p>
        </motion.div>
      </div>
    </section>
  );
};
