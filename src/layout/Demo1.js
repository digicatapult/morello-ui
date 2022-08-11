import React from 'react'

import DemoHeader from '../components/Demo1/DemoOneHeader'

import { DemoOneBackground } from '../components/Demo1/DemoOneBackground'
import DemoOneBox from '../components/Demo1/DemoOneBox'
import { Wrapper } from '../components/Common'

export default function DemoOne(props) {
  return (
    <DemoOneBackground>
      <DemoHeader title={props.title} />
      <Wrapper alignItems={'center'}>
        <DemoOneBox {...props} background={'#343556'} />
      </Wrapper>
    </DemoOneBackground>
  )
}
