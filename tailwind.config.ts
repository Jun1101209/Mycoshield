import type { Config } from 'tailwindcss';

/**
 * "Mycelium Signal" — a light, warm-paper palette for an environmental biotech
 * brand. Deep pine ink on warm paper, a confident botanical green as primary,
 * a living lime "signal" for data/tech accents, and a restrained ochre for
 * warmth. Natural first, quietly technical, never gaudy.
 */
const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Surfaces
        surface: '#FFFFFF', // elevated cards
        offwhite: '#FAFAF7', // warm paper page background
        mist: '#EFF1EA', // soft sage tint
        // Ink
        ink: '#13241C', // pine near-black (display headings)
        'ink-body': '#3A4A41', // muted deep sage for body
        'ink-muted': '#6B7A6F', // sage gray for secondary text
        // Structure
        hairline: '#E4E5DB',
        // Primary — botanical green
        botanical: {
          DEFAULT: '#1F6B43',
          deep: '#175434',
          soft: '#E4F0E4',
        },
        // Living "signal" lime — the data/tech pop, used sparingly
        signal: {
          DEFAULT: '#9BCB5B',
          deep: '#6FA23A',
          soft: '#EDF4DF',
        },
        // Warm ochre accent (kept under the old "amber" name to reuse tokens)
        amber: {
          DEFAULT: '#C6902F',
          deep: '#A9791F',
          soft: '#F6EDD6',
        },
        // Terracotta alert
        alert: {
          DEFAULT: '#C25A44',
          soft: '#F7E6E0',
        },
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        content: '72rem',
      },
      boxShadow: {
        card: '0 1px 2px rgba(19, 36, 28, 0.04), 0 10px 30px -14px rgba(19, 36, 28, 0.14)',
        'card-hover': '0 2px 4px rgba(19, 36, 28, 0.05), 0 18px 44px -18px rgba(19, 36, 28, 0.22)',
        lift: '0 28px 64px -26px rgba(19, 36, 28, 0.28)',
      },
      keyframes: {
        'pulse-dot': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.35' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1100%)' },
        },
        'spin-slow': {
          to: { transform: 'rotate(360deg)' },
        },
        'spore-drift': {
          '0%, 100%': { transform: 'translate(0, 0)', opacity: '0.35' },
          '50%': { transform: 'translate(4px, -6px)', opacity: '1' },
        },
        bob: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'pop-in': {
          from: { opacity: '0', transform: 'translateY(12px) scale(0.97)' },
          to: { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        'ring-pulse': {
          '0%': { transform: 'scale(1)', opacity: '0.5' },
          '70%, 100%': { transform: 'scale(1.6)', opacity: '0' },
        },
      },
      animation: {
        'pulse-dot': 'pulse-dot 2.4s ease-in-out infinite',
        scan: 'scan 4s linear infinite',
        'spin-slow': 'spin-slow 26s linear infinite',
        'spore-drift': 'spore-drift 5s ease-in-out infinite',
        bob: 'bob 4s ease-in-out infinite',
        'fade-in': 'fade-in 0.2s ease-out',
        'pop-in': 'pop-in 0.28s cubic-bezier(0.22, 1, 0.36, 1)',
        'ring-pulse': 'ring-pulse 2.4s ease-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
