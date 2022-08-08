import React from 'react'

export const Context = React.createContext({
  update: () => {},
})

export const ContextProvider = ({ children }) => {
  const initState = {
    update: (newState) => setState({ ...state, ...newState }),
  }

  const [state, setState] = React.useState(initState)

  return <Context.Provider value={state}>{children}</Context.Provider>
}
