import React from 'react'
import styled from 'styled-components'

import DemoOneInput from './DemoOneInput'
import { Row } from '../Common'

import crossIcon from '../../assets/images/cross-demo-one.png'
import minimise from '../../assets/images/minus-demo-one.png'
import icon from '../../assets/images/icon-demo-one.png'

export const Title = styled.p((props) => ({
  fontFamily: 'Monaco',
  fontSize: '30px',
  color: '#FFFFFF',
  fontWeight: '100',
  margin: '0px',
  paddingLeft: '10px',
  ...props,
}))

export const Text = styled.p((props) => ({
  fontFamily: 'Monaco',
  fontSize: '12px',
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
  return (
    <Box background={props.background}>
      <Row padding={'8px'} alignItems={'center'}>
        <Icon src={crossIcon} />
        <Icon src={minimise} />
        <Icon src={icon} />
        <Title>{props.windowTitle}</Title>
      </Row>
      <Row flex={'auto'}>
        <Body>
          <Text>
            This application will store your password securely.
            <br />
            Please input a keyword of choice.
          </Text>
          <DemoOneInput />
        </Body>
      </Row>
    </Box>
  )
}
