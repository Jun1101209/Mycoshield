import type { Config } from 'tailwindcss';

/**
 * The "BeeHero" matrix: ~80% white/off-white surfaces, high-contrast slate ink,
 * and a disciplined accent budget (marigold-amber + deep botanical green).
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
        surface: '#FFFFFF',
        offwhite: '#F8F9FA',
        mist: '#F1F5F9',
        // Ink
        ink: '#0F172A',
        'ink-body': '#1E293B',
        'ink-muted': '#64748B',
        // Structure
        hairline: '#E2E8F0',
        // Accents (used sparingly, <=20% of the page)
        amber: {
          DEFAULT: '#EAB308',
          deep: '#D97706',
          soft: '#FEF3C7',
        },
        botanical: {
          DEFAULT: '#14532D',
          deep: '#0F5132',
          soft: '#DCFCE7',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        content: '72rem',
      },
      boxShadow: {
        card: '0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px -12px rgba(15, 23, 42, 0.10)',
        'card-hover': '0 2px 4px rgba(15, 23, 42, 0.05), 0 16px 40px -16px rgba(15, 23, 42, 0.18)',
        lift: '0 24px 60px -24px rgba(15, 23, 42, 0.22)',
      },
      keyframes: {
        'pulse-dot': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.35' },
        },
        'scan': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1100%)' },
        },
      },
      animation: {
        'pulse-dot': 'pulse-dot 2.4s ease-in-out infinite',
        'scan': 'scan 4s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
