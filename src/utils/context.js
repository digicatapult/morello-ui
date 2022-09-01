import React from 'react'

import { Themes } from '../fixtures/themes'

export const initState = {
  Themes,
  demo1: {
    active: 'Aarch64',
    theme: Themes('Aarch64'),
    password: '',
    showHackPopup: false,
    isPasswordSet: false,
    renderModal: false,
    renderModalActions: true,
    showHackingProgress: false,
  },
}

// TODO this is more of an exammple how we can have a global
// state without 3rd parties e.g. redux
// this could be a single entity e.g. themeCtx
export const Context = React.createContext({
  Themes,
  demo1: {},
  update: () => {},
})

// this is a provider for initial and state updates
export const ContextProvider = ({ children }) => {
  // TOO update context or create separate update method for each demo e.g. demmo1-update
  const [state, setState] = React.useState({
    ...initState,
    update: (newState) => setState({ ...state, ...newState }),
  })

  return <Context.Provider value={state}>{children}</Context.Provider>
}
