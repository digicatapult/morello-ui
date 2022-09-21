import React from 'react'
import styled from 'styled-components'

import { Row } from './Common'
import Title from './Title'

const Window = styled.div`
  @keyframes shake {
    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%,
    80% {
      transform: translate3d(2px, 0, 0);
    }

    30%,
    50%,
    70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%,
    60% {
      transform: translate3d(4px, 0, 0);
    }
  }
  animation: shake 1s linear infinite;
  ${(props) => props}
`
const Body = styled.div((props) => props)

export default function Box(props) {
  const { theme } = props

  return (
    <Window
      data-cy={'content-container'}
      {...theme.primary.window}
      {...theme.primary.demoWindow}
      animationPlayState={props.animate ? 'running' : 'paused'}
    >
      <Title title={props.windowTitle} arch={theme.name} />
      <Row flex={'auto'}>
        <Body {...theme.primary.windowBody}>{props.children}</Body>
      </Row>
    </Window>
  )
}
