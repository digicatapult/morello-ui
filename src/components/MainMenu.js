import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import { demos } from '../fixtures/demos'
import Card from './shared/Card'
import { Container } from './shared/Common'
import Header from './shared/Header'
import dsbdLogo from '../assets/images/logo.png'

const ItemWrap = styled.div`
  display: flex;
  flex-basis: 20%;
  min-width: 180px;
  background-color: ${(props) => props.color};
`

const CardLayout = styled(Container)`
  flex-flow: row wrap;
  gap: 10px;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0px 50px 50px 50px;
`

export default function MainMenu() {
  const nav = useNavigate()

  return (
    <>
      <Header logo={dsbdLogo} showClose={false} />
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
