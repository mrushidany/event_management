const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['var(--font-sarabun)', ...fontFamily.sans],
        roboto: ['var(--font-roboto)', ...fontFamily.sans],
        inter: ['var(--font-inter)', ...fontFamily.sans],
      }
    },
    colors: {
      'event' : {
        white : '#FFFFFF',
        pale_white : '#FAFAFB',
        gray : '#B9B9B9',
        pale : '#D0D0D0',
        dark_gray : '#A5A6A7',
        dark : '#0F0B10',
        light_dark : '#3A3A3A',
        darker : '#060405',
        black : '#000000',
        black_2 : '#111617',
      }
    },
  },
  plugins: [],
}
