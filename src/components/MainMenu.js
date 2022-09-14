import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import { demos } from '../fixtures/demos'
import Card from './shared/Card'
import Header from './shared/Header'
import dsbdLogo from '../assets/images/logo.png'

const ItemWrap = styled.div`
  display: flex;
  width: 100%;
  min-width: 180px;
  background-color: ${(props) => props.color};
  &:nth-child(3n) {
    grid-column: 4;
  }
`

const CardLayout = styled.div`
  display: grid;
  grid-template-columns: 3fr 3fr 1fr 3fr;
  gap: 10px;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0px 50px 50px 50px;
`

export default function MainMenu() {
  const nav = useNavigate()

  return (
    <>
      <Header logo={dsbdLogo} showClose={false} />
      <CardLayout data-cy={'main-menu-container'}>
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
