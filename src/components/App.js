import React from 'react'

import { Root, Container } from './shared/Common'
import Router from '../utils/Router'
import { Context } from '../utils/context'

export default function App() {
  const { themes, active } = React.useContext(Context)
  const theme = themes[active || 'Aarch64']

  return (
    <Root display={'flex'} justifyContent={'center'}>
      <Container
        size={10}
        styles={{
          flexDirection: 'column',
          maxHeight: '1024px',
          maxWidth: '1366px',
        }}
      >
        <Router theme={theme}/>
      </Container>
    </Root>
  )
}
