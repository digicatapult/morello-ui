import React from 'react'
import styled from 'styled-components'

import { Row } from '../Common'

import crossIcon from '../../assets/images/cross-demo-one.png'
import minimise from '../../assets/images/minus-demo-one.png'
import icon from '../../assets/images/icon-demo-one.png'

const Image = styled.img(({ source }) => ({
  width: '40px',
  height: '40px',
  src: `${source}`,
}))

//<img width={'40px'} height={'40px'} src={crossIcon} />

export default function BoxIcons() {
  return (
    <Row>
      <img width={'40px'} height={'40px'} src={crossIcon} />
      <img width={'40px'} height={'40px'} src={minimise} />
      <img width={'40px'} height={'40px'} src={icon} />
    </Row>
  )
}
