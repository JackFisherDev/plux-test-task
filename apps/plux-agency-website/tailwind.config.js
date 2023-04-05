const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,styles,pages,components,common}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      animation: {
        blink: 'blink 1.5s linear infinite',
      },
      backgroundImage: {
        'turquois-light':
          'radial-gradient(64% 51% at 99% 50%, rgba(7, 184, 186, 0.3) 0%, rgba(7, 184, 186, 0) 100%)',
        'pink-light':
          'radial-gradient(64% 51% at 99% 50%, rgba(255, 101, 190, 0.3) 0%, rgba(255, 101, 190, 0) 100%)',
      },
      boxShadow: {
        footer: '0px 4px 28px rgba(0, 0, 0, 0.25)',
        photo: '0px 20px 60px rgba(255, 218, 0, 0.33)',
      },
      colors: {
        black: '#000',
        pink: '#FF65BE',
        turquoise: '#07B8BA',
        white: '#FFF',
        'white/5': 'rgba(255, 255, 255, 0.05)',
        'white/8': 'rgba(255, 255, 255, 0.08)',
        'white/14': 'rgba(255, 255, 255, 0.14)',
        'white/15': 'rgba(255, 255, 255, 0.15)',
        yellow: '#FFDA00',
      },
      dropShadow: {
        'small-photo': 'drop-shadow(0px 20px 68px rgba(255, 218, 0, 0.32))',
        'large-photo': 'drop-shadow(0px 22px 73px rgba(0, 0, 0, 0.32))',
      },
      fontSize: {
        8: '2rem', // 32px
        10: '2.5rem', // 40px
        50: '12.5rem', // 200px
      },
      fontWeight: {
        'medium-light': 250,
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '30%, 70%': { opacity: 0.2 },
        },
      },
      spacing: {
        10.5: '2.625rem', // 42px
        18: '4.5rem', // 72px
        18.5: '4.625rem', // 74px
        22: '5.5rem', // 88px
        27.5: '6.875rem', // 110px
        30: '7.5rem', // 120px
      },
    },
    fontFamily: {
      bariol: ['var(--bariol-font)', ...fontFamily.serif],
      'gt-ultra-fine': ['var(--gt-ultra-fine)', ...fontFamily.serif],
    },
  },
  plugins: [],
};
