import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import Input from '../../shared/Input'
import { Container, Spinner } from '../../shared/Common'
import { extractLoginResult } from '../../../utils/write-demo-output'

const Button = styled.button((props) => props)
const LoginAttemptText = styled.p((props) => props)

const failedLogin = (apiOutput) =>
  extractLoginResult(apiOutput) === 'Login failed'
const loginError = (apiOutput) => extractLoginResult(apiOutput) === 'error'

export default function LoginForm({
  demoState,
  showSpinner,
  setUsernamePasswordPairs,
  apiOutput,
}) {
  const [usernameInput, setUsernameInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')
  const [someUsernameTyped, setSomeUsernameTyped] = useState(false)
  const [somePasswordTyped, setSomePasswordTyped] = useState(false)

  const usernameUpperBound = 16
  const passwordUpperBound = 16

  const noUsernameEntered = usernameInput.length === 0 && someUsernameTyped
  const usernameAtMaxLength = usernameInput.length >= usernameUpperBound
  const noPasswordEntered = passwordInput.length === 0 && somePasswordTyped
  const passwordAtMaxLength = passwordInput.length >= passwordUpperBound

  const enterUsernameAndPassword = async (e) => {
    setSomeUsernameTyped(true)
    setSomePasswordTyped(true)
    e.preventDefault()

    if (usernameInput.length > 0 && passwordInput.length > 0) {
      setUsernamePasswordPairs((prev) => [
        ...prev,
        usernameInput,
        passwordInput,
      ])
    }
  }

  const UsernameErrorWarning = () => (
    <>
      {noUsernameEntered && <>Cannot be empty</>}
      {usernameAtMaxLength && <>Maximum length reached</>}
    </>
  )

  const PasswordErrorWarning = () => (
    <>
      {noPasswordEntered && <>Cannot be empty</>}
      {passwordAtMaxLength && <>Maximum length reached</>}
    </>
  )

  useEffect(() => {
    if (usernameInput.length > 0) {
      setSomeUsernameTyped(true)
    }
    if (passwordInput.length > 0) {
      setSomePasswordTyped(true)
    }
  }, [usernameInput, passwordInput])

  return (
    <form onSubmit={enterUsernameAndPassword}>
      <Input
        label={'Username'}
        theme={demoState.theme.form}
        setInputState={setUsernameInput}
        showInputError={usernameAtMaxLength || noUsernameEntered}
        InputErrorWarning={UsernameErrorWarning}
        cySelector={'username'}
      />
      <Input
        label={'Password'}
        theme={demoState.theme.form}
        setInputState={setPasswordInput}
        upperBound={passwordUpperBound}
        inputType={'password'}
        showInputError={passwordAtMaxLength || noPasswordEntered}
        InputErrorWarning={PasswordErrorWarning}
        cySelector={'password'}
      />
      <Container
        size={10}
        styles={{
          flexDirection: 'column',
          alignItems: 'center',
          gap: '30px',
        }}
      >
        <Button
          {...demoState.theme.form.loginButton}
          data-cy={'login'}
          type={'submit'}
          disabled={showSpinner}
        >
          {showSpinner ? <Spinner /> : `Login`}
        </Button>
        <LoginAttemptText
          {...demoState.theme.form.loginAttempt}
          visibility={
            failedLogin(apiOutput) || loginError(apiOutput)
              ? 'visible'
              : 'hidden'
          }
          data-cy={'login-attempt'}
        >
          {failedLogin(apiOutput) && `Incorrect username or password`}
          {loginError(apiOutput) &&
            `Suspicious activity detected - account locked`}
        </LoginAttemptText>
      </Container>
    </form>
  )
}
