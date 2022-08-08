import React from 'react'

import { Root, Container } from './Common'
import { Context } from '../context'
import Content from './Content'

export default function Page() {
  const state = React.useContext(Context)
  console.log({ state })

  return (
    <Root display={'flex'} justifyContent={'center'}>
      <Container
        padding={'24px 24px'}
        maxHeight={'1024px'}
        maxWidth={'1366px'}
        marging={'50%'}
      >
        <Content />
      </Container>
    </Root>
  )
}
