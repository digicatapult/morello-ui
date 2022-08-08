import React from 'react'
import styled from 'styled-components'

import { P1 } from './Common'

import hackerAppIcon from '../assets/images/hacker-app-icon.png'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
  text-align: center;
`

const Icon = styled.img`
  padding: 0px 10px;
`

const IconText = styled(P1)`
  margin: 10px auto;
  font-size: 16px;
`

export default function HackerIcon(props) {
  const { iconText, startHack } = props

  return (
    <Wrapper onClick={startHack}>
      <Icon src={hackerAppIcon} />
      <IconText>{iconText}</IconText>
    </Wrapper>
  )
}
