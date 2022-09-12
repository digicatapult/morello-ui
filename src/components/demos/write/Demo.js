import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import Header from '../../shared/Header'
import { Context, initState } from '../../../utils/context'
import Input from '../../shared/Input'
import Box from '../../shared/Box'
import { Container, Spinner } from '../../shared/Common'
import { ButtonSide } from '../../shared/Buttons'
import { Themes } from '../../../fixtures/themes'
import SecretDesktop from './SecretDesktop'

const Wrapper = styled.div`
  grid-area: body;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  ${(props) => props}
`
const Button = styled.button((props) => props)
const LoginAttemptText = styled.p((props) => props)

const extractLoginResult = (output) => {
  if (output.status === 'error') return 'error'

  return output.output
    ?.split('\n')
    .filter((x) => !!x)
    .pop()
}

const successfulLogin = (apiOutput) =>
  extractLoginResult(apiOutput) === 'Login succeeded'
const failedLogin = (apiOutput) =>
  extractLoginResult(apiOutput) === 'Login failed'
const loginError = (apiOutput) => extractLoginResult(apiOutput) === 'error'

export default function WriteDemo(props) {
  const { execute, binaryName } = props

  const state = React.useContext(Context)
  const { update, writeDemo: demoState } = state
  const { theme } = demoState
  const isMorello = theme.name === 'Morello'

  const usernameUpperBound = 24
  const passwordUpperBound = 16

  const [awaitingApi, setAwaitingApi] = useState(false)
  const [apiOutput, setApiOutput] = useState('')
  const [usernamePasswordPairs, SetUsernamePasswordPairs] = useState([])
  const [usernameInput, setUsernameInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')
  const [someUsernameTyped, setSomeUsernameTyped] = useState(false)
  const [somePasswordTyped, setSomePasswordTyped] = useState(false)

  const noUsernameEntered = usernameInput.length === 0 && someUsernameTyped
  const usernameAtMaxLength = usernameInput.length === usernameUpperBound
  const noPasswordEntered = passwordInput.length === 0 && somePasswordTyped
  const passwordAtMaxLength = passwordInput.length === passwordUpperBound

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

  const resetStates = () => {
    setAwaitingApi(false)
    setApiOutput('')
    SetUsernamePasswordPairs([])
    setUsernameInput('')
    setPasswordInput('')
    setSomeUsernameTyped(false)
    setSomePasswordTyped(false)
  }

  const switchToMorello = (e) => {
    e.preventDefault()
    resetStates()
    update({
      writeDemo: {
        ...demoState,
        theme: Themes('Morello'),
      },
    })
  }

  useEffect(() => {
    if (usernameInput.length > 0) {
      setSomeUsernameTyped(true)
    }
    if (passwordInput.length > 0) {
      setSomePasswordTyped(true)
    }
  }, [usernameInput, passwordInput])

  useEffect(() => {
    update(initState)
  }, [update])

  useEffect(() => {
    const attemptLogin = async () => {
      setAwaitingApi(true)
      const output = await execute(
        `${binaryName}-${theme.arch}`,
        usernamePasswordPairs
      )
      setApiOutput(output)
      setAwaitingApi(false)
    }

    if (usernamePasswordPairs.length > 0) {
      attemptLogin()
    }
  }, [usernamePasswordPairs, execute, binaryName, theme])

  const enterUsernameAndPassword = async (e) => {
    e.preventDefault()
    setSomeUsernameTyped(true)
    setSomePasswordTyped(true)

    if (usernameInput.length > 0 && passwordInput.length > 0) {
      SetUsernamePasswordPairs((prev) => [
        ...prev,
        usernameInput,
        passwordInput,
      ])
    }
  }

  return (
    <>
      <Header {...props} showClose={true} />
      <Wrapper {...theme.wrapper}>
        {successfulLogin(apiOutput) ? (
          <>
            <SecretDesktop {...theme.font} />
            {!isMorello && <ButtonSide action={switchToMorello} />}
          </>
        ) : (
          <Box {...demoState}>
            <Container
              styles={{ height: '100%', paddingTop: '150px' }}
              size={10}
            >
              <form onSubmit={enterUsernameAndPassword}>
                <Input
                  label={'Username'}
                  theme={demoState.theme.form}
                  setInputState={setUsernameInput}
                  upperBound={usernameUpperBound}
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
                    disabled={awaitingApi}
                  >
                    {awaitingApi ? <Spinner /> : `Login`}
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
                      `Hack attempt detected - locked out!`}
                  </LoginAttemptText>
                </Container>
              </form>
            </Container>
          </Box>
        )}
      </Wrapper>
    </>
  )
}
