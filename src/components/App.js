import React from 'react'
import { Root, Container } from './Common'
import Router from './Router'

export default function App() {
  return (
    <Root display={'flex'} justifyContent={'center'}>
      <Container
        styles={{
          maxHeight: '1080px',
          maxWidth: '1920px',
        }}
      >
        <Router />
      </Container>
    </Root>
  )
}
