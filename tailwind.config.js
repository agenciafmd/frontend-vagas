module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily : {
        inter : ['Inter', 'sans-serif'],
        marker: ['Permanent Marker', 'cursive'],
        sofia: ['Sofia Sans Condensed', 'sans-serif']
      },
      colors : {
        primary : {
          DEFAULT : '#000000'
        },
        secondary : {
          DEFAULT : '#D2E054'
        },
        tertiary : {
          DEFAULT : '#64BC46'
        },
        green : {
          DEFAULT : '#249045'
        },
        darkgreen:{
          DEFAULT: '#03120b'
        },
        lightgreen:{
          DEFAULT: '#64BC46'
        },
        yellow : {
          DEFAULT : '#F6FF81'
        },
        editor : {
          700 : '#252525',
          800 : '#171717',
          900 : '#0F0F0F',
        },
        gray : {
          200 : '#fcfcfc',
          300 : '#d3d3d3',
          400 : '#e8e8e8',
          500 : '#dddddd',
          600 : '#c4c4c4',
          700 : '#8c8c8c',
          800 : '#636363',
          900 : '#212020',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}