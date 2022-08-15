import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import { Context } from '../utils/context'
import { demos } from '../fixtures/demos'
import Card from './Card'
import { Container, Spacer } from './Common'
import Header from './Header'

const ItemWrap = styled.div((props) => ({
  display: 'flex',
  padding: 2,
  backgroundColor: props.color,
}))

export default function MainMenu() {
  const state = React.useContext(Context)
  const nav = useNavigate()

  return (
    <Container
      size={10}
      style={{ flexDirection: 'column', justifyContent: 'center' }}
    >
      <Header />
      <Container
        size={10}
        style={{ justifyContent: 'flex-start', flexFlow: 'row wrap' }}
      >
        {demos.map((details) => (
          <ItemWrap
            key={details.color}
            onClick={(e) => {
              e.preventDefault()
              state.update({ counter: state.counter + 1 })
              nav(details.path, { replace: true })
            }}
          >
            <Card {...details} />
          </ItemWrap>
        ))}
      </Container>
      <Spacer size={100} />
    </Container>
  )
}
