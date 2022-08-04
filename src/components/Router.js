import React from 'react'
import { Route } from 'react-router-dom'

export default function Router({ scenarios = [] }) {

  return  (
    <Routes path='/' element={<Content />}>
          {scenarios.map(({ path, Element, ...props }) => <Route path={path} element={<Element {...props} />} />)}
    </Routes>
  )
}
