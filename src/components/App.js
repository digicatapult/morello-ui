import React from 'react'

import { Root, Container } from './Common'
import Router from './Router'

export default function App() {
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
        <Router />
      </Container>
    </Root>
  )
}
