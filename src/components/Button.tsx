import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}) => {
  const sizes = {
    sm: 'h-8 px-4 text-xs',
    md: 'h-11 px-6 text-sm',
    lg: 'h-13 px-8 text-base',
  };

  const variants = {
    primary: [
      'bg-accent-primary text-white font-semibold',
      'hover:bg-accent-hover',
      'shadow-[0_0_0_1px_rgba(26,75,255,0.5),0_4px_20px_rgba(26,75,255,0.3)]',
      'hover:shadow-[0_0_0_1px_rgba(26,75,255,0.8),0_4px_28px_rgba(26,75,255,0.45)]',
    ].join(' '),
    secondary: [
      'bg-transparent text-white font-medium',
      'border border-border-dark-strong hover:border-white/25',
      'hover:bg-white/5',
    ].join(' '),
    ghost: [
      'bg-transparent text-text-secondary font-medium',
      'hover:text-white hover:bg-white/5',
    ].join(' '),
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      className={[
        'inline-flex items-center justify-center gap-2 cursor-pointer',
        'rounded-md transition-all duration-200 outline-none',
        'font-display tracking-tight select-none',
        sizes[size],
        variants[variant],
        className,
      ].join(' ')}
      {...props}
    >
      {children}
    </motion.button>
  );
};
