import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

import Header from '../../shared/Header'
import { Context, initState } from '../../../utils/context'
import { extractLoginResult } from '../../../utils/write-demo-output'
import Box from '../../shared/Box'
import { Container, H2 } from '../../shared/Common'
import { ButtonSide } from '../../shared/Buttons'
import { Themes } from '../../../fixtures/themes'
import SecretDesktop from './SecretDesktop'
import LoginForm from './LoginForm'
import Help from '../../shared/Help'

import ConsoleIcon from '../../../assets/images/console-icon.png'
import Console from '../../shared/Console'

const Wrapper = styled.div`
  grid-area: body;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  ${(props) => props}
`

const ConsoleButtonWrapper = styled.div`
  position: absolute;
  bottom: 100px;
  right: 15%;
  width: 100px;
  overflow-wrap: break-word;
  pointer: cursor;
  text-align: center;
`

const ConsoleButton = ({ update, state }) => {
  return (
    <ConsoleButtonWrapper
      onClick={(e) => {
        e.preventDefault()
        update({
          writeDemo: {
            ...state,
            showConsole: true,
          }
        })
      }}
    >
      <img
        src={ConsoleIcon}
        style={{ cursor: 'pointer' }}
        width={'60px'}
        height={'60px'}
      />
      <H2>Console</H2>
    </ConsoleButtonWrapper>
  )
}

const successfulLogin = (response) =>
  extractLoginResult(response) === 'Login succeeded'
const loginError = (response) => extractLoginResult(response) === 'error'

export default function WriteDemo(props) {
  const { execute, binaryName, helpContent } = props

  const nav = useNavigate()
  const state = React.useContext(Context)
  const { update, writeDemo: demoState } = state
  const { theme, showHelp, fetching, usernamePasswordPairs, response, showConsole } = demoState
  const isMorello = theme.name === 'Morello'

  const switchToMorello = (e) => {
    e.preventDefault()
    update({
      writeDemo: {
        ...demoState,
        showHelp: false,
        fetching: false,
        response: undefined,
        showConsole: false,
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
  }, [usernamePasswordPairs])

  useEffect(() => {
    update(initState)
  }, [])

  return (
    <>
      <Header {...props} showClose={true} />
      <Wrapper {...theme.wrapper}>
        {successfulLogin(response) ? (
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
                response={response}
              />
            </Container>
          </Box>
        )}
        {!isMorello
          ? successfulLogin(response) && <ButtonSide action={switchToMorello} />
          : (successfulLogin(response) || loginError(response)) && 
              [<ButtonSide
                message={'Learn More'}
                action={() => {
                  nav('/write-demo-explainer')
                }}
              />,
              <ConsoleButton update={update} state={demoState} />
              ]
            }
        <Help
          theme={theme}
          content={helpContent}
          showContentState={showHelp}
        />
      {showConsole && <Console
        executable={`${binaryName}-${theme.arch} ${usernamePasswordPairs.join(', ')}`}
        output={response.output}
      />}
      </Wrapper>
    </>
  )
}
