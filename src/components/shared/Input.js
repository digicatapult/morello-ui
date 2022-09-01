import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { Container, Row } from './Common'
import { Context } from '../../utils/context'

const PasswordInput = styled.input((props) => props)
const Label = styled.label((props) => props)
const Button = styled.button((props) => props)
const Warning = styled.p((props) => props)

export default function Input(demo1) {
  const { update } = React.useContext(Context)
  const { password } = demo1.theme
  const [passwordMinError, SetPasswordMinError] = useState(false)
  const [passwordMaxError, SetPasswordMaxError] = useState(false)
  const passwordUpperBound = 16

  useEffect(() => {
    if (demo1.password.length === passwordUpperBound) {
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
    if (demo1.password.length === 0) {
      SetPasswordMinError(true)
    } else if (demo1.password.length > 0) {
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
        <Label {...password.label}>insert your password</Label>
        <Row>
          <PasswordInput
            {...password.input}
            suggested={'shhhh-secret'}
            id={'Password'}
            type={'password'}
            maxLength={16}
            onChange={(e) => {
              passwordChange(e)
            }}
          />
          <Button
            {...password.button}
            id={'submit-password'}
            onClick={(e) => {
              enterPassword(e)
            }}
          />
        </Row>
        {passwordMinError && (
          <Warning {...password.warning}>
            Password is too short, must be <br /> at least {passwordUpperBound}{' '}
            characters
          </Warning>
        )}
        {passwordMaxError && (
          <Warning {...password.warning}>
            Maximum password length reached
          </Warning>
        )}
      </form>
    </Container>
  )
}
