import React from 'react'
import { Root, Container, Spacer } from './Common'
import Router from './Router'
import Header from './Header'

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
        <Header />
        <Router />
        <Spacer size={100} />
      </Container>
    </Root>
  )
}