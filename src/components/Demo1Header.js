import React from 'react'
import styled from 'styled-components'
import { H1, P1 } from './Common'

const HeaderStyle = styled.div({
  backgroundColor: '#384D6C',
  width: '100%',
  height: '164px',
  position: 'absolute',
})

const RightCross = styled.span({
  position: 'absolute',
  left: '96.63%',
  right: '1.39%',
  top: '35%',
  bottom: '92.77%',

  border: '2px solid #FFFFFF',
  transform: 'rotate(45deg)',
})

const LeftCross = styled.span({
  position: 'absolute',
  left: '96.63%',
  right: '1.39%',
  top: '35%',
  bottom: '92.77%',

  border: '2px solid #FFFFFF',
  transform: 'rotate(-45deg)',
})

export default function DemoHeader({ title }) {
  return (
    <HeaderStyle>
      <H1
        position={'absolute'}
        lineHeight={'58px'}
        letterSpacing={'-0.06em'}
        left={'2.49%'}
        right={'61.39%'}
        top={'2.44%'}
        bottom={'82.91%'}
        fontStyle={'normal'}
        fontWeight={'300'}
        fontSize={'45px'}
      >
        {title ? title : 'Placeholder'}
      </H1>
      <P1>Close</P1>
      <RightCross />
      <LeftCross />
    </HeaderStyle>
  )
}
