import React from 'react'
import { Root, Container } from './Common'
// import { Context } from '../context'
import Router from './Router'
import Header from './Header'

export default function Page() {
  // const state = React.useContext(Context)
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
      </Container>
    </Root>
  )
}
