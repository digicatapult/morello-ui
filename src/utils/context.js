import React from 'react'

import { Morello } from '../fixtures/morello-theme'
import { Aarch64 } from '../fixtures/aarch64-theme'
// TODO this is more of an exammple how we can have a global
// state without 3rd parties e.g. redux
// this could be a single entity e.g. themeCtx
export const Context = React.createContext({
  active: 'Morello',
  themes: {
    Aarch64, 
    Morello,
  },
  demo1: {
    password: '',
    showHackPopup: false,
    isPasswordSet: false,
    renderModal: false,
    renderModalActions: true,
    showHackingProgress: false,
  },
  update: () => {},
})

// this is a provider for initial and state updates
export const ContextProvider = ({ children }) => {
  // TOO update context or create separate update method for each demo e.g. demmo1-update
  const initState = {
    active: 'Morello',
    themes: {
      Aarch64, 
      Morello,
    },
    demo1: {
      password: '',
      showHackPopup: false,
      isPasswordSet: false,
      renderModal: false,
      renderModalActions: true,
      showHackingProgress: false,
    },
    update: (newState) => setState({ ...state, ...newState }),
  }

  const [state, setState] = React.useState(initState)

  return <Context.Provider value={state}>{children}</Context.Provider>
}
