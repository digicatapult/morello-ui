import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import { demos } from '../demos'
import Card from './Card'
import { Container, Item } from './Common'

function MainMenu() {
  const nav = useNavigate()

  return (
    <Container>
      {demos.map((details) => (
        <Item
          key={details.color}
          size={2.3}
          onClick={(e) => {
            e.preventDefault()
            nav(details.path, { replace: true })
          }}
        >
          <Card {...details} />
        </Item>
      ))}
    </Container>
  )
}

export default function sContent() {
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
