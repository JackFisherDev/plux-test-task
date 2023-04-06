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
      backgroundSize: {
        '400%': '400%',
      },
      boxShadow: {
        footer: '0px 4px 28px rgba(0, 0, 0, 0.25)',
        photo: '0px 20px 60px rgba(255, 218, 0, 0.33)',
      },
      colors: {
        black: '#000',
        'black/48': 'rgba(0, 0, 0, 0.48)',
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
      gap: {
        23: '5.75rem', // 92px
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '30%, 70%': { opacity: 0 },
        },
      },
      letterSpacing: {
        tightest: '-0.03em',
        tighter: '-0.02em',
        tight: '-0.01em',
        wide: '0.03em',
        wider: '0.04em',
        widest: '0.05em',
      },
      lineHeight: {
        zero: 0,
      },
      spacing: {
        8.5: '2.125rem', // 34px
        9.5: '2.375rem', // 38px
        10.5: '2.625rem', // 42px
        13: '3.25rem', // 52px
        15: '3.75rem', // 60px
        18: '4.5rem', // 72px
        18.5: '4.625rem', // 74px
        21: '5.25rem', // 84px
        22: '5.5rem', // 88px
        27.5: '6.875rem', // 110px
        29.5: '7.375rem', // 118px
        30: '7.5rem', // 120px
        50: '12.5rem', // 200px
      },
    },
    fontFamily: {
      bariol: ['var(--bariol-font)', ...fontFamily.serif],
      'gt-ultra-fine': ['var(--gt-ultra-fine)', ...fontFamily.serif],
    },
  },
  plugins: [],
};
