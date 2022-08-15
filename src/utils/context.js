import React from 'react'

// TODO this is more of an exammple how we can have a global
// state without 3rd parties e.g. redux
// this could be a single entity e.g. themeCtx
export const Context = React.createContext({
  ctx: true,
  counter: 0,
  password: '',
  isPasswordSet: false,
  update: () => {},
})

// this is a provider for initial and state updates
export const ContextProvider = ({ children }) => {
  const initState = {
    ctx: true,
    counter: 0,
    password: '',
    isPasswordSet: false,
    update: (newState) => setState({ ...state, ...newState }),
  }

  const [state, setState] = React.useState(initState)

  return <Context.Provider value={state}>{children}</Context.Provider>
}
