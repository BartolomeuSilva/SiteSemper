# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # start dev server (HMR)
npm run build      # type-check (tsc -b) then bundle with Vite
npm run lint       # ESLint
npm run preview    # serve the dist/ build locally
./start.sh         # convenience: installs deps if missing, then runs dev
```

There are no tests configured in this project.

## Architecture

Single-page React 19 + TypeScript + Vite landing site for **Semper Technology**. The UI copy is in Brazilian Portuguese.

`src/App.tsx` composes the page top-to-bottom as a sequence of full-width section components:

```
Navbar → Hero → SocialProof → PageBioBuilder → LeadEngine
       → HowItWorks → Testimonials → Pricing → CTA → Footer
```

Sections alternate between **dark** (`surface-page` / `surface-card` backgrounds) and **light** (`surface-alt` / white backgrounds). The pattern is documented in the comments inside `App.tsx`.

### Design system

All design tokens live in `tailwind.config.js` — colors, typography scale, shadows, border-radii, background images, and custom animations. Never use raw hex values or arbitrary Tailwind brackets for things already covered there.

`src/index.css` adds utility classes that Tailwind's JIT can't generate on its own:

| Class | Purpose |
|---|---|
| `.glass-dark` / `.glass-light` | Glassmorphism backdrop blur panels |
| `.section-y` / `.section-y-lg` / `.section-y-hero` | Responsive vertical padding |
| `.text-gradient` / `.text-gradient-accent` | Transparent-fill gradient text |
| `.noise` | Subtle SVG noise overlay via `::after` |
| `.bg-grid-dark` / `.bg-grid-light` | 48 px dot-grid backgrounds |
| `.animate-flow` / `.animate-pulse-ring` / `.animate-float` / `.animate-shimmer` | Ambient CSS animations |

### Shared primitives (`src/components/`)

- **`Button`** — wraps `motion.button`; accepts `variant` (`primary` | `secondary` | `ghost`) and `size` (`sm` | `md` | `lg`). Extends `HTMLMotionProps<'button'>`.
- **`Badge`**, **`Card`**, **`Input`** — lightweight unstyled-first primitives; compose these rather than duplicating their patterns.

### Animation conventions

Framer Motion handles enter/exit transitions and micro-interactions (hover scale, tap scale). CSS keyframes in `index.css` handle ambient looping effects. Keep this separation — don't reach for JS animation where a CSS loop is enough.

### Fonts

Inter (display + body) and JetBrains Mono are loaded from Google Fonts in `index.css`. Reference them via the `font-display`, `font-body`, and `font-mono` Tailwind utilities defined in `tailwind.config.js`.
