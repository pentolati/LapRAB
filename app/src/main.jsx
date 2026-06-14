import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { FauxbaseProvider } from 'fauxbase-react'
import { BrowserRouter } from 'react-router-dom'
import theme from './theme'
import App from './App'
import { fb } from './fauxbase'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <FauxbaseProvider client={fb}>
          <App />
        </FauxbaseProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
