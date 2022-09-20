import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

import Header from '../../shared/Header'
import { Context } from '../../../utils/context'
import { extractLoginResult } from '../../../utils/write-demo-output'
import Box from '../../shared/Box'
import { Container } from '../../shared/Common'
import { ButtonSide } from '../../shared/Buttons'
import { Themes } from '../../../fixtures/themes'
import SecretDesktop from './SecretDesktop'
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

const successfulLogin = (apiOutput) =>
  extractLoginResult(apiOutput) === 'Login succeeded'
const loginError = (apiOutput) => extractLoginResult(apiOutput) === 'error'

export default function WriteDemo(props) {
  const { execute, binaryName, helpContent } = props

  const nav = useNavigate()
  const state = React.useContext(Context)
  const { update, writeDemo: demoState, showHelp, fetching, usernamePasswordPairs } = state
  const { theme } = demoState
  const isMorello = theme.name === 'Morello'

  const switchToMorello = (e) => {
    e.preventDefault()
    update({
      writeDemo: {
        ...demoState,
        showHelp: false,
        fetching: false,
        response: undefined,
        usernamePasswordPairs: [],
        theme: Themes('Morello'),
      },
    })
  }

  useEffect(() => {
    const attemptLogin = async () => {
      update({
        writeDemo: {
          ...demoState,
          fetching: true,
        }
      })
      setAwaitingApi(true)
      const output = await execute(
        `${binaryName}-${theme.arch}`,
        usernamePasswordPairs
      )
      update({
        writeDemo: {
          ...demoState,
          fetching: false,
          response: output,
        }
      })
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
          <SecretDesktop {...theme.font} />
        ) : (
          <Box {...demoState}>
            <Container
              styles={{ height: '100%', paddingTop: '150px' }}
              size={10}
            >
              <LoginForm
                demoState={demoState}
                showSpinner={fetching}
                apiOutput={apiOutput}
              />
            </Container>
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
        <Help
          theme={theme}
          content={helpContent}
          showContentState={showHelp}
          setShowContentState={setShowHelp}
        />
      </Wrapper>
    </>
  )
}
