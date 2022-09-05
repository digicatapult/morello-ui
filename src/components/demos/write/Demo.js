import React, { useState } from 'react'
import styled from 'styled-components'

import Header from '../../shared/Header'
import { Context, initState } from '../../../utils/context'
import Input from '../../shared/Input'
import Box from '../../shared/Box'
import { Container, Row, DemoText } from '../../shared/Common'

const Wrapper = styled.div`
  grid-area: body;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  ${(props) => props}
`
const Button = styled.button((props) => props)

export default function WriteDemo(props) {
  const state = React.useContext(Context)
  const demo2 = { ...state.demo2, ...props }
  const { update } = state
  const { theme } = demo2
  const isMorello = theme.name === 'Morello'

  const [usernameInput, SetUsernameInput] = useState('')
  const [passwordInput, SetPasswordInput] = useState('')

  React.useEffect(() => {
    update(initState)
  }, [update])

  const onInputEnter = () => {
    e.preventDefault()
    update({
      demo2: {
        ...demo2,
        isPasswordSet: true,
        usernamePasswordPairs: [
          ...demo2.usernamePasswordPairs,
          [usernameInput, passwordInput],
        ],
      },
    })
  }

  return (
    <>
      <Header {...props} showClose={true} />
      <Wrapper {...theme.wrapper}>
        <Box {...demo2}>
          <Row
            justifyContent={theme.name === 'Morello' ? 'center' : 'flex-start'}
            marginTop={isMorello ? '49px' : '0px'}
          >
            <DemoText {...theme.font}>
              This application will store your password securely.
              <br />
              Please input a keyword of choice.
            </DemoText>
          </Row>
          <Container styles={{ height: '100%', paddingTop: '100px' }} size={10}>
            <form>
              <Input
                label={'Username'}
                theme={demo2.theme.password}
                inputState={usernameInput}
                setInputState={SetUsernameInput}
              />
              <Input
                label={'Password'}
                theme={demo2.theme.password}
                inputState={passwordInput}
                setInputState={SetPasswordInput}
                inputType={'password'}
              />
              <Button
                {...demo2.theme.password.button}
                id={'submit-password'}
                onClick={(e) => {
                  enterPassword(e)
                }}
              />
            </form>
          </Container>
        </Box>
      </Wrapper>
    </>
  )
}
