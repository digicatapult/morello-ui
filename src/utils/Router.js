import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { RefreshTimer } from './refreshTimer'

import MainMenu from '../components/MainMenu'
import { demos } from '../fixtures/demos'

export default function Router() {
  return (
    <BrowserRouter>
      <RefreshTimer />
      <Routes>
        <Route exec path={'/'} element={<MainMenu />} />
        {demos.map(({ Element, ...props }) => (
          <Route
            key={props.path}
            path={props.path}
            element={<Element {...props} />}
          />
        ))}
        <Route path={'*'} element={<h1>not found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}
