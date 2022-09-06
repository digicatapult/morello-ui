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
const Warning = styled.p((props) => props)

export default function WriteDemo(props) {
  const state = React.useContext(Context)
  const writeDemo = { ...state.writeDemo, ...props }
  const { update } = state
  const { theme } = writeDemo

  const [demoOutput, SetDemoOutput] = useState('')

  const usernameUpperBound = 16
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
    if (writeDemo.usernamePasswordPairs.length > 0) {
      // TODO execute API
      SetDemoOutput('***PARSED API OUTPUT***')
    }
  }, [writeDemo.usernamePasswordPairs])

  const enterUsernameAndPassword = (e) => {
    e.preventDefault()
    update({
      writeDemo: {
        ...writeDemo,
        usernamePasswordPairs: [
          ...writeDemo.usernamePasswordPairs,
          [usernameInput, passwordInput],
        ],
      },
    })
  }

  return (
    <>
      <Header {...props} showClose={true} />
      <Wrapper {...theme.wrapper}>
        <Box {...writeDemo}>
          <Container styles={{ height: '100%', paddingTop: '150px' }} size={10}>
            <form onSubmit={enterUsernameAndPassword}>
              <Input
                label={'Username'}
                theme={writeDemo.theme.form}
                setInputState={SetUsernameInput}
                upperBound={usernameUpperBound}
                showInputError={usernameAtMaxLength || noUsernameEntered}
                InputErrorWarning={UsernameErrorWarning}
              />
              <Input
                label={'Password'}
                theme={writeDemo.theme.form}
                setInputState={SetPasswordInput}
                upperBound={passwordUpperBound}
                inputType={'password'}
                showInputError={passwordAtMaxLength || noPasswordEntered}
                InputErrorWarning={PasswordErrorWarning}
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
                  {...writeDemo.theme.form.loginButton}
                  id={'login'}
                  type={'submit'}
                >
                  Login
                </Button>
                <Warning
                  {...writeDemo.theme.form.warning}
                  visibility={demoOutput ? 'visible' : 'hidden'}
                >
                  {demoOutput}
                </Warning>
              </Container>
            </form>
          </Container>
        </Box>
      </Wrapper>
    </>
  )
}
