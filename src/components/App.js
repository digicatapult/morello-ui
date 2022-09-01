import React from 'react'

import { Root, Container } from './shared/Common'
import Router from '../utils/Router'

export default function App() {
  return (
    <Root display={'flex'} justifyContent={'center'} flexDirection={'row'}>
      <Container
        size={10}
        styles={{
          flexDirection: 'column',
          overflow: 'hidden',
          maxHeight: '1024px',
          maxWidth: '1366px',
        }}
      >
        <Router />
      </Container>
    </Root>
  )
}
