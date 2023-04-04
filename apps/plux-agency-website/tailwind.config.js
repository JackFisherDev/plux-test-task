const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      backgroundImage: {
        'turquois-light':
          'radial-gradient(64% 51% at 99% 50%, rgba(7, 184, 186, 0.3) 0%, rgba(7, 184, 186, 0) 100%)',
        'pink-light':
          'radial-gradient(64% 51% at 99% 50%, rgba(255, 101, 190, 0.3) 0%, rgba(255, 101, 190, 0) 100%)',
      },
      colors: {
        black: '#000',
        pink: '#FF65BE',
        turquoise: '#07B8BA',
        white: '#FFF',
        yellow: '#FFDA00',
      },
      fontSize: {
        8: '2rem', // 32px
        50: '12.5rem', // 200px
      },
      fontWeight: {
        'medium-light': 250,
      },
      spacing: {
        18: '4.5rem', // 72px
      },
    },
    fontFamily: {
      bariol: ['var(--bariol-font)', ...fontFamily.serif],
      'gt-ultra-fine': ['var(--gt-ultra-fine)', ...fontFamily.serif],
    },
  },
  plugins: [],
};
