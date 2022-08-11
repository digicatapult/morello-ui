import React from 'react'
import ReactDOM from 'react-dom'

import { ContextProvider } from './utils/context'
import App from './components/App'
import GlobalFonts from './assets/fonts/fonts'

// available in react 18?
//const root = ReactDOM.createRoot(document.getElementById('root'));

const Root = () => (
  <React.StrictMode>
    <ContextProvider>
      <GlobalFonts />
      <App />
    </ContextProvider>
  </React.StrictMode>
)

ReactDOM.render(<Root />, document.getElementById('root'))
