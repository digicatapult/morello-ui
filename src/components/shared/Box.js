import React from 'react'
import styled from 'styled-components'

import { Row } from './Common'
import Title from './Title'

const Window = styled.div((props) => props)
const Body = styled.div((props) => ({
  width: '100%',
  ...props,
}))

export default function Box(props) {
  const { theme } = props

  return (
    <Window {...theme.primary.windowCont}>
      <Title title={props.windowTitle} arch={theme.name} />
      <Row flex={'auto'}>
        <Body {...theme.primary.windowBody}>{props.children}</Body>
      </Row>
    </Window>
  )
}
