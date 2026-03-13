/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', '"Noto Sans JP"', 'sans-serif'],
        serif: ['Lora', 'serif'],
      },
      colors: {
        pop: {
          green: '#4ADE80',
          greenlight: '#DCFCE7',
          greenaccent: '#15803D',
          cyan: '#67E8F9',
          yellow: '#FDE047',
          purple: '#D8B4FE',
          text: '#334155',
        },
      },
      animation: {
        'ken-burns': 'kenBurns 20s ease-out infinite alternate',
        'bounce-slow': 'bounce 3s infinite',
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        kenBurns: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.15)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
    },
  },
  plugins: [],
};
