import React, { useState } from 'react'
import styled from 'styled-components'

import Header from '../../shared/Header'
import HackerApp from './HackerApp'
import { Context, initState } from '../../../utils/context'
import Box from '../../shared/Box'
import { ButtonSide } from '../../shared/Buttons'
import { Col, Row, DemoText, Container } from '../../shared/Common'
import Input from '../../shared/Input'
import ProgressBar from './ProgressBar'
import Modal from './Modal'
import KeychainIcon from '../../../assets/images/keychain-strip.png'
import { Themes } from '../../../fixtures/themes'

const Wrapper = styled.div`
  grid-area: body;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  ${(props) => props}
`
const Button = styled.button((props) => props)

export default function ReadDemo(props) {
  const state = React.useContext(Context)
  const [passwordInput, SetPasswordInput] = useState('')
  const demo1 = { ...state.demo1, ...props }

  const { update } = state
  const { theme } = demo1

  const date = new Date().toDateString().slice(0, 10)
  const time = new Date().toLocaleTimeString()
  const isMorello = theme.name === 'Morello'

  const switchToMorello = (e) => {
    e.preventDefault()

    update({
      demo1: {
        ...demo1,
        theme: Themes('Morello'),
        output: undefined,
        password: '',
        showHackPopup: false,
        isPasswordSet: false,
        renderModal: false,
        renderModalActions: true,
        showHackingProgress: false,
      },
    })
  }

  const enterPassword = (e) => {
    e.preventDefault()
    if (passwordInput.length > 0) {
      update({
        demo1: {
          ...demo1,
          isPasswordSet: true,
          password: passwordInput,
        },
      })
    }
  }

  React.useEffect(() => {
    update(initState)
  }, [update])

  return (
    <>
      <Header {...demo1} />
      <Wrapper {...theme.wrapper}>
        {demo1.showHackPopup && (
          <ButtonSide {...demo1} action={switchToMorello} />
        )}
        {demo1.isPasswordSet && (
          <HackerApp imageSrc={theme.icons.hackerIcon} text={'hacker app'} />
        )}
        <Box {...demo1}>
          {!demo1.isPasswordSet && (
            <>
              <Row
                justifyContent={isMorello ? 'center' : 'flex-start'}
                marginTop={isMorello ? '49px' : '0px'}
              >
                {isMorello && <img src={KeychainIcon} />}
                <DemoText {...theme.font}>
                  This application will store your password securely.
                  <br />
                  Please input a keyword of choice.
                </DemoText>
              </Row>
              <Container
                styles={{
                  paddingTop: '100px',
                }}
                size={10}
              >
                <form onSubmit={enterPassword}>
                  <Container size={10}>
                    <Input
                      label={'insert your password'}
                      theme={demo1.theme.password}
                      inputState={passwordInput}
                      setInputState={SetPasswordInput}
                      inputType={'password'}
                    />
                    <Button {...demo1.theme.password.button} type={'submit'} />
                  </Container>
                </form>
              </Container>
            </>
          )}
          {demo1.isPasswordSet && isMorello && (
            <Col size={10}>
              <Row justifyContent={'center'} marginTop={'49px'}>
                <img src={KeychainIcon} />
                <DemoText {...theme.font}>
                  This application will store your password securely.
                  <br />
                  Please input a keyword of choice.
                </DemoText>
              </Row>
              <Row justifyContent={'center'}>
                <DemoText {...theme.font}>
                  Password has been submitted. Now you can attempt to hack
                </DemoText>
              </Row>
            </Col>
          )}
          {demo1.isPasswordSet && !isMorello && (
            <DemoText {...theme.font}>
              last login: {date} {time}.
              <br />
              <br />
              Password Stored Safely
            </DemoText>
          )}
        </Box>
        {demo1.renderModal &&
          Modal({
            update,
            demo1,
            ProgressBar: (props) => <ProgressBar {...props} />,
          })}
      </Wrapper>
    </>
  )
}
