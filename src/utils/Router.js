import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import MainMenu from '../components/MainMenu'
import { demos } from '../fixtures/demos'
import { Context } from './context'

export default function Router() {
  const state = React.useContext(Context)

  return (
    <BrowserRouter>
      <Routes>
        <Route exec path={'/'} element={<MainMenu {...state.demo1} />} />
        {demos.map(({ path, Element, ...props }) => (
          <Route key={path} path={path} element={<Element {...props} />} />
        ))}
        <Route path={'*'} element={<h1>not found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}
