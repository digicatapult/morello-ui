import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { Container, Row } from './Common'
import { Context } from '../utils/context'
import lockIcon from '../assets/images/lock.png'

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

const ErrorMessage = styled.p({
  color: '#ff7272',
  fontFamily: 'Monaco',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '20px',
  lineHeight: '32px',
})

export default function Input() {
  const { update, demo1 } = React.useContext(Context)
  const [passwordMinError, SetPasswordMinError] = useState(false)
  const [passwordMaxError, SetPasswordMaxError] = useState(false)
  const passwordLowerBound = 1
  const passwordUpperBound = 4
  const passwordMaxBound = 16

  useEffect(() => {
    if (
      demo1.password.length === passwordLowerBound ||
      (demo1.password.length < passwordUpperBound &&
        demo1.password.length >= passwordLowerBound)
    ) {
      SetPasswordMinError(true)
    } else if (demo1.password.length === passwordMaxBound) {
      SetPasswordMaxError(true)
    } else {
      SetPasswordMinError(false)
      SetPasswordMaxError(false)
    }
  }, [demo1.password])

  const passwordChange = (e) => {
    e.preventDefault()
    update({
      demo1: {
        ...demo1,
        password: e.target.value,
      },
    })
  }

  const enterPassword = (e) => {
    e.preventDefault()
    if (demo1.password.length >= passwordUpperBound) {
      update({
        demo1: {
          ...demo1,
          isPasswordSet: true,
        },
      })
    }
  }

  return (
    <Container styles={{ height: '100%', paddingTop: '100px' }} size={10}>
      <form>
        <Label>insert your password</Label>
        <Row>
          <PasswordInput
            suggested={'shhhh-secret'}
            id={'Password'}
            type={'password'}
            maxLength={16}
            onChange={(e) => {
              passwordChange(e)
            }}
            onKeyDown={(e) => {
              // TODO figure this one
              if (e.key === 'Enter') {
                enterPassword(e)
              }
            }}
          />
          <Button
            id={'submit-password'}
            onClick={(e) => {
              enterPassword(e)
            }}
          />
        </Row>
        {passwordMinError && (
          <ErrorMessage>
            Minimum Password Length: <br /> {passwordUpperBound} Characters
          </ErrorMessage>
        )}
        {passwordMaxError && (
          <ErrorMessage>Maximum Password Reached</ErrorMessage>
        )}
      </form>
    </Container>
  )
}
