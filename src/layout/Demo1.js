import React from 'react'
import styled from 'styled-components'

import Header from '../components/Demo1/Header'

import { Background } from '../components/Demo1/Background'
import Box from '../components/Demo1/Box'
//import { Context } from '../utils/context'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

export default function Demo(props) {
  return (
    <Background>
      <Header title={props.title} />
      <Wrapper>
        <Box {...props} background={'#343556'} />
      </Wrapper>
    </Background>
  )
}
