import React from 'react'

import { Root, Container } from './Common'
import { Context } from '../context'
import Content from './Content'
import Header from './Header'

export default function Page() {
  const state = React.useContext(Context)
  console.log(state)

  return (
    <Root width='80%'>
      <Container width='100%' justifyContent='center' >
        <Header />
        <Content />
      </Container>
    </Root> 
  )
}
