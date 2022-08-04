import React from 'react'
import { useNavigate } from 'react-router-dom'

import { scenarios } from '../constants'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Card from './Card'
import { Container, Item, Wrapper } from './Common'

function MainMenu(props) {
  const nav = useNavigate()

  return (
    <Container>
      {scenarios.map((details, i) =>
        <Item size={2.5} onClick={(e) => {
          e.preventDefault()
          nav(`/demo${i + 1}`, { replace: true })
        }}>
          <Card {...details} />
        </Item>
      )}
    </Container>
  )
}

export default function Content() {
  return <Wrapper height='90%'>
    <BrowserRouter>
      <Routes>
        <Route exec path='/' element={<MainMenu />} />
        {scenarios.map(({ path, Element, ...props }) => {
          return <Route path={path} element={<Element {...props} />} />
        })}
        <Route path='*' element={<h1>not found</h1>} />
      </Routes>
    </BrowserRouter>
  </Wrapper>
}
