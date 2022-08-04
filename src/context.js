import React from 'react'

export const Context = React.createContext({
  a: 'a',
  update: () => {}
})

export const ContextProvider = ({ children }) => {
  const update = (newState) => {
    setState({ ...state, ...newState })
  }

  const initState = {
    a: 'a',
    update,
  } 

  const [state, setState] = React.useState(initState)

  return <Context.Provider value={state}>{children}</Context.Provider>
}