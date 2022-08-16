import React from 'react'
import styled from 'styled-components'

import Input from './Input'
import { Row } from '../Common'
import { Context } from '../../utils/context'

import crossIcon from '../../assets/images/cross.png'
import minimise from '../../assets/images/minus.png'
import icon from '../../assets/images/icon.png'

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

export const SavedText = styled.p((props) => ({
  fontFamily: 'Monaco',
  fontSize: '22px',
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

const Container = styled.div((props) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '826px',
  height: '626px',
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

export default function Box(props) {
  const { isPasswordSet } = React.useContext(Context)

  const date = new Date().toDateString().slice(0, 10)
  const time = new Date().toLocaleTimeString()

  return (
    <Container background={props.background}>
      <Row padding={'8px'} alignItems={'center'}>
        <Icon src={crossIcon} />
        <Icon src={minimise} />
        <Icon src={icon} />
        <Title>{props.windowTitle}</Title>
      </Row>
      <Row flex={'auto'}>
        <Body>
          {!isPasswordSet && (
            <>
              <Text>
                This application will store your password securely.
                <br />
                Please input a keyword of choice.
              </Text>
              <Input />
            </>
          )}
          {isPasswordSet && (
            <>
              <SavedText>
                last login: {date} {time}.
                <br />
                <br />
                Password Stored Safely
              </SavedText>
            </>
          )}
        </Body>
      </Row>
    </Container>
  )
}
