import React from 'react'
import styled from 'styled-components'

import { Txt_Demo1A } from '../Common'

const Wrapper = styled.div`
  height: 22px;
  width: 100%;
  padding: 0px 10px;
`

const BarBackground = styled.div`
  height: 50%;
  width: 100%;
  background: #979797;
  padding: 0px;
`

const Bar = styled.div`
  position: relative;
  height: 50%;
  top: -50%;
  width: ${(props) => props.progress}%;
  background: #d9d9d9;
`

export default function ProgressBar(props) {
  const { progress } = props

  return (
    <Wrapper>
      <Txt_Demo1A>{`hacking in progress ${progress}%`}</Txt_Demo1A>
      <BarBackground />
      <Bar progress={progress} />
    </Wrapper>
  )
}
