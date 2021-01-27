const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      padding: {
        small: '0.1rem'
      },
      margin: {
        small: '0.1rem'
      },
      width: {
        18: '4.5rem',
        22: '5.5rem',
        26: '6.5rem',
        30: '7.5rem',
        34: '8.5rem',
        38: '9.5rem'
      },
      minWidth: {
        5: '1.25rem'
      },
      minHeight: {
        5: '1.25rem'
      },
      boxShadow: {
        'dark-header': '0px 2px 7px 0px rgba(0,0,0,0.6)',
        'light-header': '0px 2px 10px 0px rgba(0,0,0,0.005), 0px 1px 5px -1px rgba(0,0,0,0.03)'
      },
      colors: {
        blueGray: colors.blueGray,
        amber: colors.amber,
        lime: colors.lime,
        teal: colors.teal,
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
          placeholder: '#475569'
        }
      }
    }
  },
  variants: {
    extend: {
      backgroundOpacity: ['dark'],
      fontWeight: ['dark'],
      boxShadow: ['dark'],
      opacity: ['disabled'],
      borderOpacity: ['dark']
      // borderWidth: ['dark'],
    }
  },
  plugins: []
};
