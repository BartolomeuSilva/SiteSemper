import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Soluções', id: 'solucoes' },
    { label: 'Arquitetura', id: 'arquitetura' },
    { label: 'Processo', id: 'processo' },
    { label: 'Modelos', id: 'modelos' },
  ];

  return (
    <AnimatePresence>
      {scrolled && (
        <motion.nav
          initial={{ opacity: 0, y: -16, x: '-50%' }}
          animate={{ opacity: 1, y: 0, x: '-50%' }}
          exit={{ opacity: 0, y: -16, x: '-50%' }}
          transition={{ type: 'spring', stiffness: 400, damping: 32 }}
          className="fixed top-4 left-1/2 z-50 w-[92%] max-w-5xl"
        >
          <div className="glass-dark rounded-full h-14 px-5 flex items-center justify-between shadow-nav">
            {/* Logo */}
            <span className="font-display font-black text-lg tracking-tighter text-white select-none">
              SEMPER<span className="text-accent-primary">.</span>
            </span>

            {/* Links */}
            <div className="hidden md:flex items-center gap-7">
              {links.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="font-body text-sm text-text-secondary hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA */}
            <Button variant="primary" size="sm">
              Agendar Reunião
            </Button>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};
