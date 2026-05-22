import React from 'react';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'success' | 'accent';
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  className = '',
  ...props
}) => {
  const variants = {
    default: 'bg-white/[0.06] text-text-secondary',
    success: 'bg-status-success/[0.12] text-status-success',
    accent:  'bg-accent-primary/[0.12] text-accent-primary',
  };

  return (
    <span
      className={[
        'inline-flex items-center gap-2',
        'px-3 py-1.5 rounded-md',
        'text-xs font-medium tracking-wide select-none',
        variants[variant],
        className,
      ].join(' ')}
      {...props}
    >
      {children}
    </span>
  );
};
