import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
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

  const nav = useNavigate()
  const [passwordInput, setPasswordInput] = useState('')
  const [someInputTyped, setSomeInputTyped] = useState(false)
  const passwordUpperBound = 16
  const readDemo = { ...state.readDemo, ...props }

  const { update } = state
  const { theme, renderExplainer } = readDemo

  const date = new Date().toDateString().slice(0, 10)
  const time = new Date().toLocaleTimeString()
  const isMorello = theme.name === 'Morello'

  const noPasswordEntered = passwordInput.length === 0 && someInputTyped
  const passwordAtMaxLength = passwordInput.length === passwordUpperBound

  const InputErrorWarning = () => (
    <>
      {noPasswordEntered && <>Cannot be empty</>}
      {passwordAtMaxLength && <>Maximum length reached</>}
    </>
  )

  const switchToMorello = (e) => {
    e.preventDefault()

    update({
      readDemo: {
        ...readDemo,
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
    setSomeInputTyped(true)

    if (passwordInput.length > 0) {
      update({
        readDemo: {
          ...readDemo,
          isPasswordSet: true,
          password: passwordInput,
        },
      })
    }
  }

  useEffect(() => {
    if (passwordInput.length > 0) {
      setSomeInputTyped(true)
    }
  }, [passwordInput])

  useEffect(() => {
    update(initState)
  }, [update])

  return (
    <>
      <Header {...readDemo} />
      <Wrapper {...theme.wrapper}>
        {readDemo.showHackPopup && (
          <ButtonSide {...readDemo} action={switchToMorello} />
        )}
        {renderExplainer && (
          <ButtonSide
            {...readDemo}
            message={'Learn More'}
            action={(e) => {
              nav('/read-demo-explainer')
              e.preventDefault()
              readDemo.renderExplainer = false
            }}
          />
        )}
        {readDemo.isPasswordSet && (
          <HackerApp imageSrc={theme.icons.hackerIcon} text={'hacker app'} />
        )}
        <Box {...readDemo}>
          {!readDemo.isPasswordSet && (
            <>
              <Row
                justifyContent={isMorello ? 'center' : 'flex-start'}
                marginTop={isMorello ? '70px' : '0px'}
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
                  marginTop: '100px',
                }}
                size={10}
              >
                <form onSubmit={enterPassword}>
                  <Container size={10}>
                    <Input
                      label={'insert your password'}
                      theme={readDemo.theme.form}
                      setInputState={setPasswordInput}
                      inputType={'password'}
                      upperBound={passwordUpperBound}
                      cySelector={'password'}
                      showInputError={passwordAtMaxLength || noPasswordEntered}
                      InputErrorWarning={InputErrorWarning}
                    />
                    <Button
                      {...readDemo.theme.form.savePasswordButton}
                      type={'submit'}
                      data-cy={'submit-password'}
                    />
                  </Container>
                </form>
              </Container>
            </>
          )}
          {readDemo.isPasswordSet && isMorello && (
            <Col size={10}>
              <Row justifyContent={'center'} marginTop={'70px'}>
                <img src={KeychainIcon} />
                <DemoText {...theme.font}>
                  This application will store your password securely.
                  <br />
                  Please input a keyword of choice.
                </DemoText>
              </Row>
              <Row justifyContent={'center'} marginTop={'100px'}>
                <DemoText {...theme.font}>
                  Password has been submitted. Now you can attempt to hack
                </DemoText>
              </Row>
            </Col>
          )}
          {readDemo.isPasswordSet && !isMorello && (
            <DemoText {...theme.font}>
              last login: {date} {time}.
              <br />
              <br />
              Password Stored Safely
            </DemoText>
          )}
        </Box>
        {readDemo.renderModal &&
          Modal({
            update,
            readDemo,
            ProgressBar: (props) => <ProgressBar {...props} />,
          })}
      </Wrapper>
    </>
  )
}
