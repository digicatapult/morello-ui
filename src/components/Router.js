import React from 'react'
import { Route, Routes } from 'react-router-dom'

export default function Router({ scenarios = [] }) {
  return <Routes>
    {scenarios.map(({ path, Element, ...rest }) => {
      return <Route path={path} element={<Element {...rest} />}/>
    })}
  </Routes>
}
