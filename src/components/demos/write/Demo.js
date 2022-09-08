import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import Header from '../../shared/Header'
import { Context, initState } from '../../../utils/context'
import Input from '../../shared/Input'
import Box from '../../shared/Box'
import { Container } from '../../shared/Common'

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

export default function WriteDemo(props) {
  const state = React.useContext(Context)
  const { execute, binaryName } = props
  const { update } = state
  const demoState = state.writeDemo
  const { theme } = demoState

  const [demoOutput, SetDemoOutput] = useState('')
  const [usernamePasswordPairs, SetUsernamePasswordPairs] = useState([])

  const usernameUpperBound = 24
  const passwordUpperBound = 16
  const [usernameInput, SetUsernameInput] = useState('')
  const [passwordInput, SetPasswordInput] = useState('')
  const [someUsernameTyped, SetSomeUsernameTyped] = useState(false)
  const [somePasswordTyped, SetSomePasswordTyped] = useState(false)

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

  useEffect(() => {
    if (usernameInput.length > 0) {
      SetSomeUsernameTyped(true)
    }
    if (passwordInput.length > 0) {
      SetSomePasswordTyped(true)
    }
  }, [usernameInput, passwordInput])

  useEffect(() => {
    update(initState)
  }, [update])

  useEffect(() => {
    const attemptLogin = async () => {
      const output = await execute(
        `${binaryName}-${theme.arch}`,
        usernamePasswordPairs
      )
      console.log(output)
      //SetDemoOutput(output)
    }

    attemptLogin()
  }, [usernamePasswordPairs, execute, binaryName, theme])

  const enterUsernameAndPassword = async (e) => {
    e.preventDefault()
    SetSomeUsernameTyped(true)
    SetSomePasswordTyped(true)

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
        <Box {...demoState}>
          <Container styles={{ height: '100%', paddingTop: '150px' }} size={10}>
            <form onSubmit={enterUsernameAndPassword}>
              <Input
                label={'Username'}
                theme={demoState.theme.form}
                setInputState={SetUsernameInput}
                upperBound={usernameUpperBound}
                showInputError={usernameAtMaxLength || noUsernameEntered}
                InputErrorWarning={UsernameErrorWarning}
                cySelector={'username'}
              />
              <Input
                label={'Password'}
                theme={demoState.theme.form}
                setInputState={SetPasswordInput}
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
                >
                  Login
                </Button>
                <LoginAttemptText
                  {...demoState.theme.form.loginAttempt}
                  visibility={demoOutput ? 'visible' : 'hidden'}
                  data-cy={'login-attempt'}
                >
                  {demoOutput}
                </LoginAttemptText>
              </Container>
            </form>
          </Container>
        </Box>
      </Wrapper>
    </>
  )
}
