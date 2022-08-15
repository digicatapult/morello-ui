import React from 'react'
import styled from 'styled-components'

import { Container, Row } from '../Common'
import { Context } from '../../utils/context'
import lockIcon from '../../assets/images/lock.png'

const PasswordInput = styled.input({
  width: '350px',
  backgroundColor: '#343556',
  border: '4px solid #FFFFFF',
  color: '#FFFFFF',
  height: '60px',
  fontSize: '48px',
  fontFamily: 'asterisk',
  speak: 'none',
  borderRight: 'none',
})

const Label = styled.label({
  fontFamily: 'Monaco',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '24px',
  lineHeight: '32px',
  htmlFor: 'Password',
  color: '#FFFFFF',
})

const Button = styled.button({
  width: '70px',
  background: `url(${lockIcon})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right',
  backgroundSize: 'cover',
  border: '4px solid #FFFFFF',
  borderLeft: 'none',
  cursor: 'pointer',
})

export default function Input() {
  const { update } = React.useContext(Context)

  const passwordChange = (e) => {
    e.preventDefault()
    update({ password: e.target.value })
  }

  const enterPassword = (e) => {
    e.preventDefault()
    update({ isPasswordSet: true })
  }

  return (
    <Container styles={{ height: '100%', paddingTop: '100px' }} size={10}>
      <form>
        <Label>insert your password</Label>
        <Row>
          <PasswordInput
            id={'Password'}
            type={'password'}
            maxLength={16}
            onChange={(e) => {
              passwordChange(e)
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                enterPassword(e)
              }
            }}
          />
          <Button
            onClick={(e) => {
              enterPassword(e)
            }}
          />
        </Row>
      </form>
    </Container>
  )
}
