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
        'hero' : 'linear-gradient(90deg, rgba(3, 21, 43, 0.6) 0%, rgba(0, 0, 0, 0) 105.07%)',
        'blue_gradient' : 'linear-gradient(89.7deg, #00FCE3 0.23%, #00D6FA 99.74%)',
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
        black_0 : '#AAAAAA',
        black : '#000000',
        black_2 : '#111617',
      }
    },
  },
  plugins: [],
}
