import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import { demos } from '../fixtures/demos'
import Card from './shared/Card'
import Header from './shared/Header'
import logo from '../assets/images/logo.svg'

const headerHeight = '164px'
const layoutPadding = '50px'
const gridGap = '10px'
const cardArea = `(100vh - ${headerHeight} - ${layoutPadding} - ${gridGap})`

const ItemWrap = styled.div`
  max-width: calc(${cardArea} / 2);
  min-width: 180px;
  background-color: ${(props) => props.color};
  &:nth-child(3n) {
    max-width: calc(${cardArea} * 1 / 3);
    grid-column: 4;
  }
`

const CardLayout = styled.div`
  display: grid;
  grid-template-columns: auto auto 1fr 2.5fr;
  grid-template-rows: repeat(2, calc(${cardArea} / 2));
  gap: ${gridGap};
  max-width: 1350px;
  margin: 0 auto;
  padding: 0px ${layoutPadding} ${layoutPadding} ${layoutPadding};
`

export default function MainMenu() {
  const nav = useNavigate()

  const demoCount = demos.length / 2 - 1

  return (
    <>
      <Header logo={logo} showClose={false} />
      <CardLayout data-cy={'main-menu-container'} demoCount={demoCount}>
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
