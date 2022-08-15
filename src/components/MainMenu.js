import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import { demos } from '../fixtures/demos'
import Card from './Card'
import { Container } from './Common'

const ItemWrap = styled.div((props) => ({
  display: 'flex',
  width: '300px',
  padding: 2,
  backgroundColor: props.color,
}))

export default function MainMenu() {
  const nav = useNavigate()

  return (
    <Container
      size={10}
      style={{ justifyContent: 'flex-start', flexFlow: 'row wrap' }}
    >
      {demos.map((details) => (
        <ItemWrap
          key={details.color}
          onClick={(e) => {
            e.preventDefault()
            nav(details.path, { replace: true })
          }}
        >
          <Card {...details} />
        </ItemWrap>
      ))}
    </Container>
  )
}