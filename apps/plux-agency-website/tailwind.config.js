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
      colors: {
        black: '#000',
        pink: '#FF65BE',
        turquoise: '#07B8BA',
        white: '#FFF',
        yellow: '#FFDA00',
      },
    },
    fontFamily: {
      bariol: ['var(--bariol-font)', ...fontFamily.serif],
      'gt-ultra-fine': ['var(--gt-ultra-fine)', ...fontFamily.serif],
    },
  },
  plugins: [],
};
