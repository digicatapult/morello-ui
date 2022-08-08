import React from 'react'
import styled from 'styled-components'
import { H1 } from './Common'

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

const Box = styled.div({
  position: 'absolute',
  left: '19.77%',
  right: '19.77%',
  top: '250px',
  bottom: '14.45%',
  width: '750px',
  height: '600px',
  background: '#343556',
  boxShadow: '24px 24px 1px rgba(0, 0, 0, 0.8)',
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
      <span>
        <H1>Close</H1>
        <RightCross />
        <LeftCross />
      </span>
      <Box> </Box>
    </HeaderStyle>
  )
}
