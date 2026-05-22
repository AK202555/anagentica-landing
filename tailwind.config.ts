import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#00c8ff',
          dark: '#00d4ff',
        },
        surface: {
          light: '#f5f5f7',
          dark: '#050b14',
        },
        navy: '#050b14',
      },
      fontFamily: {
        sans: [
          '-apple-system', 'BlinkMacSystemFont', '"SF Pro Display"',
          'var(--font-jakarta)', '"Helvetica Neue"', 'sans-serif',
        ],
      },
      borderRadius: {
        pill: '980px',
      },
      boxShadow: {
        card: '0 12px 40px rgba(0,0,0,0.10)',
        'card-dk': '0 16px 48px rgba(0,0,0,0.12)',
        cta: '3px 5px 30px rgba(0,0,0,0.22)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
