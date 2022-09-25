import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

import Header from '../../shared/Header'
import { Context, initState } from '../../../utils/context'
import { extractLoginResult } from '../../../utils/write-demo-output'
import Box from '../../shared/Box'
import { Container, Col, IconText } from '../../shared/Common'
import { ButtonSide } from '../../shared/Buttons'
import { Themes } from '../../../fixtures/themes'
import LoginForm from './LoginForm'
import Help from '../../shared/Help'

import ConsoleIcon from '../../../assets/images/console-icon.png'
import Modal from '../read/Modal'

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

const ConsoleButtonWrapper = styled.div`
  position: absolute;
  bottom: 100px;
  right: 15%;
  width: 100px;
  overflow-wrap: break-word;
  pointer: cursor;
  text-align: center;
`

const successfulLogin = (apiOutput) =>
  extractLoginResult(apiOutput) === 'Login succeeded'
const failedLogin = (apiOutput) =>
  extractLoginResult(apiOutput) === 'Login failed'
const loginError = (apiOutput) => extractLoginResult(apiOutput) === 'error'

const ConsoleButton = ({ update, state }) => {
  return (
    <ConsoleButtonWrapper
      onClick={(e) => {
        e.preventDefault()
        update({
          writeDemo: {
            ...state,
            showResponse: true,
          },
        })
      }}
    >
      <img
        src={ConsoleIcon}
        style={{ cursor: 'pointer' }}
        width={'60px'}
        height={'60px'}
      />
      <IconText>Console</IconText>
    </ConsoleButtonWrapper>
  )
}

const SecretDesktop = ({ icons }) => {
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
          <IconText>{icon.name}</IconText>
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
  const { theme, showHelp, usernamePasswordPairs, output, showResponse } =
    demoState
  const isMorello = theme.name === 'Morello'
  const bin = `${binaryName}-${theme.arch}`
  const [animateLoginFailed, setAnimateLoginFailed] = useState(false)

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
  }, [bin, demoState, execute, update, usernamePasswordPairs])

  useEffect(() => {
    update(initState)
  }, [update])

  useEffect(() => {
    if (isMorello && (failedLogin(apiOutput) || loginError(apiOutput))) {
      setAnimateLoginFailed(true)
      setTimeout(() => setAnimateLoginFailed(false), 1000)
    }
  }, [apiOutput, isMorello, setAnimateLoginFailed])

  return (
    <>
      <Header {...props} showClose={true} />
      <Wrapper {...theme.wrapper}>
        {successfulLogin(output) ? (
          <SecretDesktop icons={props.secretDesktop} />
        ) : (
          <Box {...demoState}>
            <Container
              styles={{ height: '100%', paddingTop: '150px' }}
              size={10}
            >
              <LoginForm demoState={demoState} />
            </Container>
            <Help
              theme={theme}
              content={helpContent}
              showContentState={showHelp}
            />
            <Box {...demoState} animate={animateLoginFailed}>
              <Container
                styles={{ height: '100%', paddingTop: '150px' }}
                size={10}
              >
                <LoginForm
                  demoState={demoState}
                  showSpinner={awaitingApi}
                  setUsernamePasswordPairs={setUsernamePasswordPairs}
                  apiOutput={apiOutput}
                  setApiOutput={setApiOutput}
                />
              </Container>
            </Box>
          </>
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
              />,
            ]}
        <Help theme={theme} content={helpContent} showContentState={showHelp} />
        {showResponse && (
          <Modal
            type={'writeDemo'}
            update={update}
            show={true}
            message={'Morellow authentication output'}
            args={`${binaryName}-${theme.arch} ${usernamePasswordPairs.join(
              ', '
            )}`}
            {...demoState}
            {...props}
          />
        )}
      </Wrapper>
    </>
  )
}
