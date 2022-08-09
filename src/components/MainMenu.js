import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import { demos } from '../demos'
import Card from './Card'
import { Container } from './Common'

const ItemWrap = styled.div((props) => ({
  display: 'flex',
  flexGrow: 1,
  width: '23%',
  padding: 2,
  backgroundColor: props.color,
}))

export default function MainMenu() {
  const nav = useNavigate()

  return (
    <Container size={10} flexFlow={'row wrap'}>
      {demos.map((details) => (
        <ItemWrap
          key={details.color}
          size={2.3}
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
