import React from 'react'
import styled from 'styled-components'

import { Container, Row } from './Common'
import { Context } from '../../utils/context'

const PasswordInput = styled.input(props => props)
const Label = styled.label(props => props)
const Button = styled.button((props) => props)

export default function Input({ theme }) {
  const { update, demo1 } = React.useContext(Context)
  const { password } = theme

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
    update({
      demo1: {
        ...demo1,
        isPasswordSet: true,
      },
    })
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
            onKeyDown={(e) => {
              // TODO figure this one
              if (e.key === 'Enter') {
                enterPassword(e)
              }
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
      </form>
    </Container>
  )
}