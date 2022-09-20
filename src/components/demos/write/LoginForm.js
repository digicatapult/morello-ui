import React, { useState, useEffect } from 'react'

import Input from '../../shared/Input'
import { Container, Spinner } from '../../shared/Common'
import { extractLoginResult } from '../../../utils/write-demo-output'
import { Context } from '../../../utils/context'

const failedLogin = (apiOutput) =>
  extractLoginResult(apiOutput) === 'Login failed'
const loginError = (apiOutput) => extractLoginResult(apiOutput) === 'error'

export default function LoginForm({
  demoState,
  showSpinner,
}) {
  const [usernameInput, setUsernameInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')
  const [someUsernameTyped, setSomeUsernameTyped] = useState(false)
  const [somePasswordTyped, setSomePasswordTyped] = useState(false)
  const { update, response } = React.useContext(Context)

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
      update({
        writeDemo: {
          ...demoState,
          usernamePasswordPairs: [
            ...demoState.usernamePasswordPairs,
            usernameInput,
            passwordInput
          ]
        }
      })
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
        <button
          style={demoState.theme.form.loginButton}
          data-cy={'login'}
          type={'submit'}
          disabled={showSpinner}
        >
          {showSpinner ? <Spinner /> : `Login`}
        </button>
        <p
          {...demoState.theme.form.loginAttempt}
          visibility={
            failedLogin(response) || loginError(response)
              ? 'visible'
              : 'hidden'
          }
          data-cy={'login-attempt'}
        >
          {failedLogin(response) && `Incorrect username or password`}
          {loginError(response) &&
            `Suspicious activity detected - account locked`}
        </p>
      </Container>
    </form>
  )
}
