import React from 'react'
import styled from 'styled-components'

import Header from './Header'
import { Background } from './Background'
import Box from './Box'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

export default function Demo1(props) {
  return (
    <Background>
      <Header {...props} />
      <Wrapper>
        <Box {...props} background={'#343556'} />
      </Wrapper>
    </Background>
  )
}
