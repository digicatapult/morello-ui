import React from 'react'
import styled from 'styled-components'

import DemoHeader from '../components/Demo1/Header'

import { DemoOneBackground } from '../components/Demo1/Background'
import DemoOneBox from '../components/Demo1/Box'
//import { Context } from '../utils/context'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

export default function DemoOne(props) {
  return (
    <DemoOneBackground>
      <DemoHeader title={props.title} />
      <Wrapper>
        <DemoOneBox {...props} background={'#343556'} />
      </Wrapper>
    </DemoOneBackground>
  )
}
