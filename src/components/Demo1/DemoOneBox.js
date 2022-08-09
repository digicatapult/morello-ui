import React from 'react'
import styled from 'styled-components'

import crossIcon from '../../assets/images/cross-demo-one.png'
import minimise from '../../assets/images/minus-demo-one.png'
import icon from '../../assets/images/icon-demo-one.png'

import { Row } from '../Common'

export const H1 = styled.h1((props) => ({
  fontFamily: 'Monaco',
  fontSize: '30px',
  color: '#FFFFFF',
  fontWeight: '100',
  margin: '0px',
  paddingLeft: '10px',
  ...props,
}))

export const H2 = styled.h2((props) => ({
  fontFamily: 'Monaco',
  fontSize: '18px',
  color: '#FFFFFF',
  fontWeight: '100',
  margin: '0px',
  padding: '10px',
  ...props,
}))

const Icon = styled.img(({ source }) => ({
  width: '40px',
  height: '40px',
  margin: '4px',
  src: `${source}`,
}))

const Box = styled.div((props) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '900px',
  height: '600px',
  boxShadow: '24px 24px 1px rgba(0, 0, 0, 0.8)',
  ...props,
}))

const Body = styled.div({
  boxSizing: 'border-box',
  height: '100%',
  width: '100%',
  padding: '10px',
  outline: '2px solid #FFFFFF',
  outlineOffset: '-10px',
})

export default function DemoOneBox(props) {
  const past = Date.now()
  return (
    <Box {...props}>
      <Row padding={'8px'} alignItems={'center'}>
        <Icon src={crossIcon} />
        <Icon src={minimise} />
        <Icon src={icon} />
        <H1>SUPER_SAFE_APP.EXE</H1>
      </Row>
      <Row flex={'auto'}>
        <Body>
          <H2>Last login: {past} on ttys001</H2>
        </Body>
      </Row>
    </Box>
  )
}
