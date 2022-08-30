import React from 'react'
import styled from 'styled-components'
import { Context } from '../utils/context'
import backgroundImg from '../assets/images/osx-background.png'
import Modal from './shared/Modal'

import ArrowWhite from '../assets/images/arrow-WHITE.png'
import { Morello } from '../fixtures/morello-theme'

const Arrow = styled.div`
  background-size: cover;
  background-image: url(${ArrowWhite});
  height: 33px;
  width: 55px;
  animation: stepIn 1.3s;
  animation-iteration-count: infinite;

  @keyframes stepIn {
    0% {margin-left: 10px;}
    30% {margin-left: 39px;}
    100% {margin-left: 10px;}
  }
`

const SideButton = styled.div`
  position: absolute;
  display: flex;
  z-index: 101;
  pointer: cursor;
  padding: 0px 20px;
  align-items: center;
  height: 700px;
  opacity: 0.5;
  top: 168px;
  width: ${props => props.expanded ? '1366px' : 'auto'};
  transition: all 0.5s;
  background-image: url(${backgroundImg});
  pointer: cursor;

  &:hover {
    opacity: 1;
  }
`

export default function MorelloSlider(demo1) {
  const { update, ...rest } = React.useContext(Context)
  const [expanded, setExpanded] = React.useState(false)
  Morello.modal.page.background = '#fff'

  if(!expanded) return (
    <SideButton onClick={(e) => {
      e.preventDefault()
      setExpanded(true)
    }}>
      <Arrow />
    </SideButton>
  )

  return (
    <SideButton>
      {Modal({
        update,
        demo1: {
          ...rest,
          ...demo1,
          theme: Morello,
          modalTitle: 'Try Morello',
          modalText: 'Would you like to try on the a new morello hardware?',
        },
        ProgressBar: () => null,
        txt: { color: '#000'}
      })}
    </SideButton>
  )
}
