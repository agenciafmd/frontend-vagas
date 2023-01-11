import { Inter } from '@next/font/google'

export const inter = Inter({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif']
})

export default {
  pallete: {
    primary: {
      main: '#000',
      text: '#fff'
    },
    secondary: {
      main: '#e9ff00'
    },
    background: {
      main: '#000',
      second: 'rgba(255, 255, 255, 0.1)'
    },
    error: {
      main: '#FF0000'
    }
  },
  typography: {
    fontFamily: inter.style.fontFamily,
    fonts: {},
    fontSize: '16px'
  }
}
