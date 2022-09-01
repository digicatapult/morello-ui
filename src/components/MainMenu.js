import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import { demos } from '../fixtures/demos'
import Card from './shared/Card'
import { Container } from './shared/Common'
import Header from './Header'
import dsbdLogo from '../assets/images/logo.png'

const ItemWrap = styled.div`
  display: flex;
  flex-basis: 20vw;
  min-width: 10rem;
  background-color: ${(props) => props.color};
`

const CardLayout = styled(Container)`
  flex-flow: row wrap;
  gap: 20px;
  padding: 20px;
`

export default function MainMenu(props) {
  const nav = useNavigate()

  return (
    <>
      <Header logo={dsbdLogo} {...props} showClose={false} />
      <CardLayout data-cy={'main-menu-container'} size={10}>
        {demos.map((details) => (
          <ItemWrap
            styles={{}}
            key={details.color}
            onClick={(e) => {
              e.preventDefault()
              nav(details.path, { replace: false })
            }}
          >
            <Card {...details} />
          </ItemWrap>
        ))}
      </CardLayout>
    </>
  )
}
