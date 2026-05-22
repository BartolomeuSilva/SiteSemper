import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<InputProps> = ({ className = '', ...props }) => {
  return (
    <input
      className={[
        'w-full h-11 px-4 rounded-md bg-surface-elevated border border-border-dark',
        'text-white placeholder:text-text-muted text-sm font-body',
        'outline-none focus:border-accent-primary',
        'focus:shadow-[0_0_0_3px_rgba(26,75,255,0.15)]',
        'transition-all duration-200',
        className,
      ].join(' ')}
      {...props}
    />
  );
};
