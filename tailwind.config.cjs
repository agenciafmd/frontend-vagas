/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    colors: {
      'yellow': '#DBAC2C',
      'yellow-dark': '#C47F17',
      'yellow-light': '#F1E9C9',

      'purple-dark': '#4B2995',
      'purple': '#8047F8',
      'purple-light': '#EBE5F9',

      'base-title': '#272221',
      'base-subtitle': '#403937',
      'base-text': '#574F4D',
      'base-label': '#8D8686',

      'base-hover': '#D7D5D5',
      'base-button': '#E6E5E5',
      'base-input': '#EDEDED',
      'base-card': '#F3F2F2',

      'background': '#fafafa',
      'white': '#ffffff',
    },

    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
      baloo: '"Baloo 2", sans-serif',
    },

    fontSize: {
      xs: '0.625rem', //10px
      sm: '0.75rem', //12px
      md: '0.875rem', //14px
      base: '1rem', //16px
      xl: '1.125rem', //18px
      '2xl': '1.25rem', //20px
      '3xl': '1.5rem', //24px
      '4xl': '2rem', //32px
      '5xl': '3rem', //48px
    },

    extend: {
      backgroundImage: {
        'background-header': "url('./src/assets/background.svg')"
      },

      keyframes: {
        fadeDown: {
          'from': {
            opacity: 0,
            transform: 'translateY(-20%)',
          },
          'to': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
      },

      animation: {
        'fade-down': 'fadeDown 1s',
      },

    },
  },
  plugins: [],
}
