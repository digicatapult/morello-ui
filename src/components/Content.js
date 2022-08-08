import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import { scenarios } from '../constants'
import Card from './Card'
import { Container, Item } from './Common'

function MainMenu() {
  const nav = useNavigate()

  return (
    <Container>
      {scenarios.map((details, i) => (
        <Item
          key={details.color}
          size={2.3}
          onClick={(e) => {
            e.preventDefault()
            nav(`/demo${i + 1}`, { replace: true })
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
        {scenarios.map(({ path, Element, ...props }) => (
          <Route key={path} path={path} element={<Element {...props} />} />
        ))}
        <Route path={'*'} element={<h1>not found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}
