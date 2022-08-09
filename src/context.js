import React from 'react'

export const Context = React.createContext({
  ctx: true,
  update: () => {},
})

export const ContextProvider = ({ children }) => {
  const initState = {
    ctx: true,
    update: (newState) => setState({ ...state, ...newState }),
  }

  const [state, setState] = React.useState(initState)

  return <Context.Provider value={state}>{children}</Context.Provider>
}
