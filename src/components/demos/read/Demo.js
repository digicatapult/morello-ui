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
  const { update, readDemo } = React.useContext(Context)
  const state = { ...readDemo, ...props }

  const nav = useNavigate()
  const [passwordInput, setPasswordInput] = useState('')
  const [someInputTyped, setSomeInputTyped] = useState(false)
  const passwordUpperBound = 16

  const { theme, renderExplainer } = state

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
        ...state,
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
          ...state,
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
      <Header {...state} />
      <Wrapper {...theme.wrapper}>
        {state.showHackPopup && (
          <ButtonSide {...state} action={switchToMorello} />
        )}
        {renderExplainer && (
          <ButtonSide
            {...state}
            message={'Learn More'}
            action={(e) => {
              nav('/read-demo-explainer')
              e.preventDefault()
              state.renderExplainer = false
            }}
          />
        )}
        {state.isPasswordSet && (
          <HackerApp imageSrc={theme.icons.hackerIcon} text={'hacker app'} />
        )}
        <Box {...state}>
          {!state.isPasswordSet && (
            <Col size={10}>
              <Row
                justifyContent={isMorello ? 'center' : 'flex-start'}
                marginTop={isMorello ? '120px' : '0px'}
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
                      theme={state.theme.form}
                      setInputState={setPasswordInput}
                      inputType={'password'}
                      upperBound={passwordUpperBound}
                      cySelector={'password'}
                      showInputError={passwordAtMaxLength || noPasswordEntered}
                      InputErrorWarning={InputErrorWarning}
                    />
                    <Button
                      {...state.theme.form.savePasswordButton}
                      type={'submit'}
                      data-cy={'submit-password'}
                    />
                  </Container>
                </form>
              </Container>
            </Col>
          )}
          {state.isPasswordSet && isMorello && (
            <Col size={10}>
              <Row justifyContent={'center'} marginTop={'120px'}>
                <img src={KeychainIcon} />
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
                <DemoText {...theme.font}>
                  Password has been submitted. Now you can attempt to hack
                </DemoText>
              </Container>
            </Col>
          )}
          {state.isPasswordSet && !isMorello && (
            <DemoText {...theme.font}>
              last login: {date} {time}.
              <br />
              <br />
              Password Stored Safely
            </DemoText>
          )}
        </Box>
        {state.renderModal &&
          Modal({
            update,
            type: 'readDemo',
            state,
            ProgressBar: (props) => <ProgressBar {...props} />,
          })}
      </Wrapper>
    </>
  )
}
