import React from 'react'
import styled from 'styled-components'
import { H1 } from './Common'

const HeaderStle = styled.div({
  backgroundColor: '#384D6C',
  width: '100%',
  height: '164px',
  position: 'absolute',
})

export default function DemoHeader({ title }) {
  return (
    <HeaderStle>
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
    </HeaderStle>
  )
}
