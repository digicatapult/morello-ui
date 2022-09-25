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
import Modal from '../../shared/Modal'
import KeyIcon from '../../../assets/images/key.svg'
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

const Key = styled.img`
  margin: 0px 25px 25px 0px;
`

export default function ReadDemo(props) {
  const { update, readDemo } = React.useContext(Context)
  const state = { ...readDemo, ...props }

  const nav = useNavigate()
  const [secretInput, setSecretInput] = useState('')
  const [someInputTyped, setSomeInputTyped] = useState(false)
  const secretUpperBound = 16

  const { theme, renderExplainer } = state

  const date = new Date().toDateString().slice(0, 10)
  const time = new Date().toLocaleTimeString()
  const isMorello = theme.name === 'Morello'

  const noSecretEntered = secretInput.length === 0 && someInputTyped
  const secretAtMaxLength = secretInput.length === secretUpperBound

  const InputErrorWarning = () => (
    <>
      {noSecretEntered && <>Cannot be empty</>}
      {secretAtMaxLength && <>Maximum length reached</>}
    </>
  )

  const switchToMorello = (e) => {
    e.preventDefault()
    setSecretInput('')
    setSomeInputTyped(false)
    update({
      readDemo: {
        ...state,
        theme: Themes('Morello'),
        output: undefined,
        secret: '',
        showHackPopup: false,
        isSecretSet: false,
        renderModal: false,
        renderModalActions: true,
        showHackingProgress: false,
      },
    })
  }

  const enterSecret = (e) => {
    e.preventDefault()
    setSomeInputTyped(true)

    if (secretInput.length > 0) {
      update({
        readDemo: {
          ...state,
          isSecretSet: true,
          secret: secretInput,
        },
      })
    }
  }

  useEffect(() => {
    if (secretInput.length > 0) {
      setSomeInputTyped(true)
    }
  }, [secretInput])

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
        {readDemo.isSecretSet && (
          <HackerApp
            imageSrc={theme.icons.hackerIcon}
            text={'hacker app'}
            font={theme.font}
          />
        )}
        <Box {...readDemo}>
          {!readDemo.isSecretSet && (
            <Col size={10}>
              <Row
                justifyContent={isMorello ? 'center' : 'flex-start'}
                marginTop={isMorello ? '120px' : '0px'}
              >
                {isMorello && <Key width={'50px'} src={KeyIcon} />}
                <DemoText {...theme.font}>
                  This application will store your secret securely.
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
                <form onSubmit={enterSecret}>
                  <Container size={10}>
                    <Input
                      label={'Insert your secret'}
                      theme={state.theme.form}
                      setInputState={setSecretInput}
                      inputType={'password'}
                      upperBound={secretUpperBound}
                      cySelector={'secret-input-box'}
                      showInputError={secretAtMaxLength || noSecretEntered}
                      InputErrorWarning={InputErrorWarning}
                    />
                    <Button
                      {...state.theme.form.savePasswordButton}
                      type={'submit'}
                      data-cy={'submit-secret-btn'}
                    />
                  </Container>
                </form>
              </Container>
            </Col>
          )}
          {state.isSecretSet && isMorello && (
            <Col size={10}>
              <Row justifyContent={'center'} marginTop={'120px'}>
                <Key width={'50px'} src={KeyIcon} />
                <DemoText {...theme.font}>
                  This application will store your secret securely.
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
                  Your secret has been saved successfully!
                </DemoText>
              </Container>
            </Col>
          )}
          {state.isSecretSet && !isMorello && (
            <DemoText {...theme.font}>
              last login: {date} {time}.
              <br />
              <br />
              Secret Stored Safely
            </DemoText>
          )}
        </Box>
        {state.renderModal && (
          <Modal
            type={'readDemo'}
            update={update}
            {...{
              ...state,
              ProgressBar: ({ update, readDemo }) => (
                <ProgressBar update={update} readDemo={readDemo} />
              ),
            }}
          />
        )}
      </Wrapper>
    </>
  )
}
