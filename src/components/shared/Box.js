import React from 'react'
import styled from 'styled-components'

import { Row } from './Common'
import Title from './Title'

const Window = styled.div((props) => props)
const Body = styled.div((props) => props)

export default function Box(props) {
  const { theme } = props

  return (
    <Window
      data-cy={'content-container'}
      {...theme.primary.window}
      {...theme.primary.demoWindow}
    >
      <Title title={props.windowTitle} theme={theme} />
      <Row flex={'auto'}>
        <Body {...theme.primary.windowBody}>{props.children}</Body>
      </Row>
    </Window>
  )
}
