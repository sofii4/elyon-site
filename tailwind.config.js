/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        elyon: {
          navy:   '#1e325c',
          gold:   '#d7b46a',
          'gold-light': '#e8cc96',
          'gold-dark':  '#b8943e',
          dark:   '#1d1d1b',
          'dark-2': '#2a2a28',
          'gray': '#6b6b68',
          'light': '#f5f3ee',
        },
      },
      fontFamily: {
        aktiv: ['"Aktiv Grotesk"', 'sans-serif'],
        arimo: ['"Arimo"', 'sans-serif'],
      },
      backgroundImage: {
        'concrete': "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80')",
      },
      animation: {
        'slide-up': 'slideUp 0.8s ease forwards',
        'fade-in':  'fadeIn 1s ease forwards',
        'scroll-left': 'scrollLeft 40s linear infinite',
      },
      keyframes: {
        slideUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        scrollLeft: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
