import React from 'react'

import { Root, Container } from './Common'
import { Context } from '../context'
import Content from './Content'
import Header from './Header'

export default function Page() {
  const state = React.useContext(Context)

  return (
    <Root display='flex' justifyContent='center'>
      <Container maxWidth={1200} marging='50%'>
        <Header />
        <Content />
      </Container>
    </Root> 
  )
}
