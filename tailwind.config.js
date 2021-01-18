const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blueGray: colors.blueGray,
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
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
