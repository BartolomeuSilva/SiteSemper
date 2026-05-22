/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark surface system
        'surface-page':       '#05050A',
        'surface-card':       '#0C0C14',
        'surface-elevated':   '#141420',
        'surface-alt':        '#F5F5F7',

        // Text – Dark mode
        'text-primary':       '#FFFFFF',
        'text-secondary':     '#9191A4',
        'text-muted':         '#52525E',
        'text-on-accent':     '#FFFFFF',

        // Text – Light mode
        'text-dark-primary':  '#09090B',
        'text-dark-secondary':'#52525E',

        // Accent
        'accent-primary':    '#1A4BFF',
        'accent-hover':      '#0035E8',
        'accent-subtle':     'rgba(26,75,255,0.10)',
        'accent-glow':       'rgba(26,75,255,0.25)',

        // Status
        'status-success':    '#00D46A',
        'status-error':      '#FF3B3B',
        'status-warning':    '#FFB800',

        // Borders
        'border-dark':       'rgba(255,255,255,0.08)',
        'border-dark-strong':'rgba(255,255,255,0.14)',
        'border-light':      'rgba(0,0,0,0.08)',
        'border-accent':     'rgba(26,75,255,0.40)',
      },

      fontFamily: {
        display: ['Inter', 'system-ui', 'sans-serif'],
        body:    ['Inter', 'system-ui', 'sans-serif'],
        mono:    ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },

      fontSize: {
        'hero':     ['clamp(3.5rem, 9vw, 7.5rem)', { lineHeight: '0.92', letterSpacing: '-0.04em', fontWeight: '800' }],
        'section':  ['clamp(2rem, 4vw, 3.5rem)',   { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '700' }],
        'lead':     ['clamp(1rem, 1.5vw, 1.2rem)',  { lineHeight: '1.65', fontWeight: '400' }],
      },

      borderRadius: {
        'sm':   '6px',
        'md':   '10px',
        'lg':   '16px',
        'xl':   '24px',
        'full': '9999px',
      },

      boxShadow: {
        'card':      '0 0 0 1px rgba(255,255,255,0.06), 0 1px 2px rgba(0,0,0,0.6), 0 4px 16px rgba(0,0,0,0.35)',
        'card-glow': '0 0 0 1px rgba(26,75,255,0.32), 0 1px 2px rgba(0,0,0,0.6), 0 4px 20px rgba(0,0,0,0.35)',
        'nav':       '0 0 0 1px rgba(255,255,255,0.07), 0 2px 8px rgba(0,0,0,0.45)',
        'apple':     '0 1px 3px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.05)',
        'pricing-featured': '0 0 0 1px rgba(26,75,255,0.38), 0 1px 2px rgba(0,0,0,0.6), 0 8px 24px rgba(0,0,0,0.35)',
      },

      backgroundImage: {
        'grid-dark':  "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
        'grid-light': "linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)",
        'noise':      "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
        'gradient-hero': 'radial-gradient(ellipse 80% 60% at 50% -20%, rgba(26,75,255,0.18) 0%, transparent 70%)',
        'gradient-cta':  'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(26,75,255,0.12) 0%, transparent 70%)',
      },

      backgroundSize: {
        'grid': '48px 48px',
      },

      animation: {
        'flow': 'flow 1.2s linear infinite',
        'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
      },

      keyframes: {
        flow: {
          'to': { strokeDashoffset: '-40' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(0.97)' },
          '50%':       { opacity: '1',   transform: 'scale(1.03)' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.5' },
          '50%':      { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
