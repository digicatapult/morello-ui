import React from 'react';
import ReactDOM from 'react-dom';

import { ContextProvider } from './context'
import App from './components/App'

// available in react 18?
//const root = ReactDOM.createRoot(document.getElementById('root'));

const Root = () => (
  <React.StrictMode>
    <ContextProvider>
        <App />
    </ContextProvider>
  </React.StrictMode>
)


ReactDOM.render(<Root />, document.getElementById('root'));
