import React from 'react'

import { Root } from './Common'
import { Context } from '../context'
import Content from './Content'
import Header from './Header'


export default function Page() {
  const state = React.useContext(Context)
  console.log(state)

  return (
    <Root>
      <Header />
      <Content />
    </Root> 
  )
}
