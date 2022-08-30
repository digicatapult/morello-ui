import React from 'react'
import styled from 'styled-components'
import { Context } from '../utils/context'



const Scene = styled.div`
  display: flex;
  flow-direction: column;
  position: relative;
  top: 0;
  left: 0;
  alignItems: center;
  height: 100%;
  width: 5%;
  transition: all 2s;

  &:hover {
    width: 100%;
  }
`

export default function MorelloSlider(demo1) {
  const { theme } = demo1

  return (
    <div {...theme.wrapper}>

    <Scene>
      <div>{'< - slide out'}</div>
    </Scene>
    </div>
  )
}
