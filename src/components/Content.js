import React from 'react'
import { useNavigate } from 'react-router-dom'

import { SCENARIOS } from '../constants'
import Card from './Card'
import { Container, Item, Wrapper } from './Common'
import Router from './Router'

function MainMenu(props) {
  const nav = useNavigate()

  return (
    <Container>
      {SCENARIOS.map((details, i) => 
        <Item size={2.5} onClick={(e) => {
          e.preventDefault()
          nav(`/demo/${i + 1}`, { replace: true })
        }}>
          <Card {...details} />
        </Item>
      )}
    </Container>
  )
}

export default function Content() {
  return <Wrapper height='90%'>
    <Router
      scenarios={[ 
        ...SCENARIOS,
        { path: '/', Element: () => <MainMenu /> }
      ]}
    />
  </Wrapper>
}
