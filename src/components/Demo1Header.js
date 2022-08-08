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
      <H1>{title ? title : 'Placeholder'}</H1>
    </HeaderStle>
  )
}
