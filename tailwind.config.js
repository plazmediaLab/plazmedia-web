const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blueGray: colors.blueGray,
        amber: colors.amber,
        brand: {
          50: '#f8f2ff',
          100: '#f1e6fe',
          200: '#dbbffd',
          300: '#c699fc',
          400: '#9b4dfa',
          500: '#7000f8',
          600: '#6500df',
          700: '#5400ba',
          800: '#430095',
          900: '#37007a'
        },
        background: {
          brand: '#1D1D1B',
          dark: '#0D1017',
          middle: '#1A202E',
          light: '#292848'
        },
        font: {
          light: '#e2e8f0',
          secondary: '#97a6ba',
          placeholder: '#475569',
          alternative: '#14D8C3'
        }
      }
    }
  },
  variants: {
    extend: {
      backgroundOpacity: ['dark']
    }
  },
  plugins: []
};
