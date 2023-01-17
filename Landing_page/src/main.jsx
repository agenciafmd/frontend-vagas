import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from './lib/theme'
import './Global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
