import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import MainMenu from './MainMenu'
import { demos } from '../demos'

export default function Content() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exec path={'/'} element={<MainMenu />} />
        {demos.map(({ path, Element, ...props }) => (
          <Route key={path} path={path} element={<Element {...props} />} />
        ))}
        <Route path={'*'} element={<h1>not found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}
