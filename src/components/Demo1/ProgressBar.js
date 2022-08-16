import React from 'react'
import styled from 'styled-components'

import { P1 } from '../Common'

const Wrapper = styled.div`
  height: 100px;
  width: 100%;
  flex-direction: column;
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

const Label = styled(P1)`
  margin: 10px auto;
  font-size: 16px;
`

export default function ProgressBar(props) {
  const { progress } = props

  return (
    <Wrapper>
      <Label>{`hacking in progress ${progress}%`}</Label>
      <BarBackground />
      <Bar progress={progress} />
    </Wrapper>
  )
}
