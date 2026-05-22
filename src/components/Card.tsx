import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children, className = '', ...props }) => {
  return (
    <div
      className={['rounded-xl bg-surface-card border border-border-dark shadow-card overflow-hidden', className].join(' ')}
      {...props}
    >
      {children}
    </div>
  );
};
