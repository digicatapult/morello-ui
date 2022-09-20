import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

import Header from '../../shared/Header'
import { Context, initState } from '../../../utils/context'
import { extractLoginResult } from '../../../utils/write-demo-output'
import Box from '../../shared/Box'
import { Container, Col, H2 } from '../../shared/Common'
import { ButtonSide } from '../../shared/Buttons'
import { Themes } from '../../../fixtures/themes'
import LoginForm from './LoginForm'
import Help from '../../shared/Help'

const Wrapper = styled.div`
  grid-area: body;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  ${(props) => props}
`

const IconWrapper = styled.div`
  width: 100px;
  overflow-wrap: break-word;
  text-align: center;
`

const successfulLogin = (apiOutput) =>
  extractLoginResult(apiOutput) === 'Login succeeded'
const loginError = (apiOutput) => extractLoginResult(apiOutput) === 'error'

const renderDesktopIcons = (icons) => {
  return (
    <Col styles={{ padding: '0px 10px', alignItems: 'flex-start' }}>
      {icons.map((icon) => (
        <IconWrapper key={icon.name}>
          <img
            src={icon.img}
            style={{ cursor: 'pointer' }}
            width={'60px'}
            height={'60px'}
          />
          <H2>{icon.name}</H2>
        </IconWrapper>
      ))}
    </Col>
  )
}

export default function WriteDemo(props) {
  const { execute, binaryName, helpContent } = props

  const nav = useNavigate()
  const state = React.useContext(Context)
  const { update, writeDemo: demoState } = state
  const { theme } = demoState
  const isMorello = theme.name === 'Morello'

  const [showHelp, setShowHelp] = useState(false)
  const [awaitingApi, setAwaitingApi] = useState(false)
  const [apiOutput, setApiOutput] = useState('')
  const [usernamePasswordPairs, setUsernamePasswordPairs] = useState([])

  const resetStates = () => {
    setShowHelp(false)
    setAwaitingApi(false)
    setApiOutput('')
    setUsernamePasswordPairs([])
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

  return (
    <>
      <Header {...props} showClose={true} />
      <Wrapper {...theme.wrapper}>
        {successfulLogin(apiOutput) ? (
          renderDesktopIcons(props.secretDesktop)
        ) : (
          <Box {...demoState}>
            <Container
              styles={{ height: '100%', paddingTop: '150px' }}
              size={10}
            >
              <LoginForm
                demoState={demoState}
                showSpinner={awaitingApi}
                setUsernamePasswordPairs={setUsernamePasswordPairs}
                apiOutput={apiOutput}
              />
            </Container>
            <Help
              theme={theme}
              content={helpContent}
              showContentState={showHelp}
              setShowContentState={setShowHelp}
            />
          </Box>
        )}
        {!isMorello
          ? successfulLogin(apiOutput) && (
              <ButtonSide action={switchToMorello} />
            )
          : (successfulLogin(apiOutput) || loginError(apiOutput)) && (
              <ButtonSide
                message={'Learn More'}
                action={() => {
                  nav('/write-demo-explainer')
                }}
              />
            )}
      </Wrapper>
    </>
  )
}
