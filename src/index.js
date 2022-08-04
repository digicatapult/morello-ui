import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import { ContextProvider, Context } from './context'
import App from './components/App'

// available in react 18?
//const root = ReactDOM.createRoot(document.getElementById('root'));

const Root = () => (
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <App />
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)


ReactDOM.render(<Root />, document.getElementById('root'));
