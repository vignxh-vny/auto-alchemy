import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#08090B',
        panel: '#111316',
        line: '#23262B',
        gold: '#D6AE48',
        'gold-soft': '#E5C879',
        red: '#C8372D',
        text: '#F5F3ED',
        muted: '#A5A5A5',
      },
      fontFamily: {
        head: ['var(--font-barlow)', 'Arial Narrow', 'Impact', 'sans-serif'],
        body: ['var(--font-dm)', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      borderRadius: {
        sm: '2px',
        DEFAULT: '2px',
      },
      keyframes: {
        rise: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'none' },
        },
      },
      animation: {
        rise: 'rise .9s cubic-bezier(.2,.7,.2,1) both',
      },
    },
  },
  plugins: [],
};

export default config;
