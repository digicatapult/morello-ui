import React from 'react'

import { Row } from './Common'
import Title from './Title'
import { Window } from './Common'

export default function Box(props) {
  const { theme } = props

  return (
    <Window
      data-cy={'content-container'}
      style={{
        ...theme.primary.window,
        ...theme.primary.demoWindow,
        animationPlayState: props.animate ? 'running' : 'paused',
      }}
    >
      <Title title={props.windowTitle} theme={theme} />
      <Row flex={'auto'}>
        <div style={theme.primary.windowBody}>{props.children}</div>
      </Row>
    </Window>
  )
}
