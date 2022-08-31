import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import { demos } from '../fixtures/demos'
import Card from './shared/Card'
import { Container } from './shared/Common'
import Header from './Header'
import dsbdLogo from '../assets/images/logo.png'

const ItemWrap = styled.div(({styles}) => styles)

export default function MainMenu(props) {
  const nav = useNavigate()

  return (
    <>
      <Header logo={dsbdLogo} {...props}/>
      <Container
        size={10}
        style={{
          justifyContent: 'center',
          flexFlow: 'row wrap',
        }}
      >
        {demos.map((details) => (
          <ItemWrap
            styles={{
              display: 'flex',
              width: '300px',
              padding: 2,
              backgroundColor: props.color,
            }}
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
    </>
  )
}
