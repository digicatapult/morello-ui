import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

import Header from '../../shared/Header'
import { Context, initState } from '../../../utils/context'
import { extractLoginResult } from '../../../utils/write-demo-output'
import Box from '../../shared/Box'
import { Container } from '../../shared/Common'
import { ButtonSide } from '../../shared/Buttons'
import { Themes } from '../../../fixtures/themes'
import LoginForm from './LoginForm'
import { ConsoleButton, SecretDesktop } from './MiscComponents'
import Help from '../../shared/Help'

import Modal from '../../shared/Modal'

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
const failedLogin = (apiOutput) =>
  extractLoginResult(apiOutput) === 'Login failed'
const loginError = (apiOutput) => extractLoginResult(apiOutput) === 'error'

export default function WriteDemo(props) {
  const { execute, binaryName, helpContent } = props

  const nav = useNavigate()
  const state = React.useContext(Context)
  const { update, writeDemo } = state
  const { theme, showHelp, usernamePasswordPairs, output, showResponse } =
    writeDemo
  const demoState = { ...props, ...writeDemo }
  const isMorello = theme.name === 'Morello'
  const bin = `${binaryName}-${theme.arch}`
  const [animateLoginFailed, setAnimateLoginFailed] = React.useState(false)

  const switchToMorello = (e) => {
    e.preventDefault()
    update({
      writeDemo: {
        ...demoState,
        showHelp: false,
        fetching: false,
        output: undefined,
        showResponse: false,
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
          output: undefined,
          fetching: true,
        },
      })
      // TODO allow execute to handle states e.g. isFetching isError...
      const output = await execute(bin, usernamePasswordPairs)
      update({
        writeDemo: {
          ...demoState,
          fetching: false,
          output,
        },
      })
    }

    if (usernamePasswordPairs.length > 0) {
      attemptLogin()
    }
    // TODO address demoState dependency, gets trapped in re-rendering state
  }, [bin, execute, update, usernamePasswordPairs])

  useEffect(() => {
    update(initState)
  }, [update])

  useEffect(() => {
    if (isMorello && (failedLogin(output) || loginError(output))) {
      setAnimateLoginFailed(true)
      setTimeout(() => setAnimateLoginFailed(false), 1000)
    }
  }, [output, isMorello, setAnimateLoginFailed])

  return (
    <>
      <Header {...props} showClose={true} />
      <Wrapper {...theme.wrapper}>
        {successfulLogin(output) ? (
          <SecretDesktop font={theme.font} icons={props.secretDesktop} />
        ) : (
          <Box {...demoState} animate={animateLoginFailed}>
            <Container
              styles={{ height: '100%', paddingTop: '150px' }}
              size={10}
            >
              <LoginForm demoState={demoState} />
            </Container>
          </Box>
        )}
        {!isMorello
          ? successfulLogin(output) && <ButtonSide action={switchToMorello} />
          : (successfulLogin(output) || loginError(output)) && [
              <ButtonSide
                key={'write-demo-side-btn'}
                message={'Learn More'}
                action={() => {
                  nav('/write-demo-explainer')
                }}
              />,
              <ConsoleButton
                key={'write-demo-console-icon'}
                update={update}
                state={demoState}
                font={theme.font}
              />,
            ]}
        <Help theme={theme} content={helpContent} showContentState={showHelp} />
        {showResponse && (
          <Modal
            type={'writeDemo'}
            update={update}
            show={true}
            message={'Morellos authentication output'}
            args={`${binaryName}-${theme.arch} ${usernamePasswordPairs.join(
              ', '
            )}`}
            {...demoState}
          />
        )}
      </Wrapper>
    </>
  )
}
