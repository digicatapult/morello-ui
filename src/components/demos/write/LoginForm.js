import React, { useState, useEffect } from 'react'

import Input from '../../shared/Input'
import { Spinner } from '../../shared/Common'
import { extractLoginResult } from '../../../utils/write-demo-output'
import { Context } from '../../../utils/context'

const Button = styled.button((props) => props)
const LoginAttemptText = styled.p((props) => props)
const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const failedLogin = (apiOutput) =>
  extractLoginResult(apiOutput) === 'Login failed'
const loginError = (apiOutput) => extractLoginResult(apiOutput) === 'error'

export default function LoginForm({ demoState }) {
  const [usernameInput, setUsernameInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')
  const [someUsernameTyped, setSomeUsernameTyped] = useState(false)
  const [somePasswordTyped, setSomePasswordTyped] = useState(false)
  const {
    update,
    writeDemo: { output, fetching },
  } = React.useContext(Context)

  const usernameUpperBound = 16
  const passwordUpperBound = 16

  const noUsernameEntered = usernameInput.length === 0 && someUsernameTyped
  const usernameAtMaxLength = usernameInput.length >= usernameUpperBound
  const noPasswordEntered = passwordInput.length === 0 && somePasswordTyped
  const passwordAtMaxLength = passwordInput.length >= passwordUpperBound

  const enterUsernameAndPassword = async (e) => {
    setApiOutput('')
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
            passwordInput,
          ],
        },
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

  useEffect(() => {
    if (failedLogin(apiOutput) || loginError(apiOutput)) {
      setPasswordInput('')
      setSomePasswordTyped(false)
    }
  }, [apiOutput])

  return (
    <Form onSubmit={enterUsernameAndPassword}>
      <Input
        label={'Username'}
        theme={demoState.theme.form}
        setInputState={setUsernameInput}
        showInputError={usernameAtMaxLength || noUsernameEntered}
        InputErrorWarning={UsernameErrorWarning}
        cySelector={'username'}
        style={{ alignSelf: 'center' }}
      />
      <Input
        label={'Password'}
        theme={demoState.theme.form}
        value={passwordInput}
        setInputState={setPasswordInput}
        upperBound={passwordUpperBound}
        inputType={'password'}
        showInputError={passwordAtMaxLength || noPasswordEntered}
        InputErrorWarning={PasswordErrorWarning}
        cySelector={'password'}
        style={{ alignSelf: 'center' }}
      />
      <Button
        {...demoState.theme.form.loginButton}
        data-cy={'login'}
        type={'submit'}
        disabled={fetching}
      >
        {fetching ? <Spinner /> : `Login`}
      </Button>
      <LoginAttemptText
        {...demoState.theme.form.loginAttempt}
        visibility={
          failedLogin(output) || loginError(output) ? 'visible' : 'hidden'
        }
        data-cy={'login-attempt'}
      >
        {failedLogin(output) && `Incorrect username or password`}
        {loginError(output) &&
          `Suspicious activity detected - account locked`}
      </LoginAttemptText>
    </Form>
  )
}
