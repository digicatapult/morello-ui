import React from 'react'
import styled from 'styled-components'

import { Row } from '../Common'

import crossIcon from '../../assets/images/cross-demo-one.png'
import minimise from '../../assets/images/minus-demo-one.png'
import icon from '../../assets/images/icon-demo-one.png'

const Image = styled.img`
  width: 40px;
  height: 40px;
  padding: 8px;
`

export default function BoxIcons() {
  return (
    <Row>
      <Image src={crossIcon} />
      <Image src={minimise} />
      <Image src={icon} />
    </Row>
  )
}
