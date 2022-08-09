import React from 'react'
import styled from 'styled-components'

const Box = styled.div({
  position: 'absolute',
  left: '25%',
  right: '25%',
  top: '250px',
  bottom: '14.45%',
  width: '900px',
  height: '600px',
  background: '#343556',
  boxShadow: '24px 24px 1px rgba(0, 0, 0, 0.8)',
})

const BoxBorder = styled.div({
  boxSizing: 'border-box',

  position: 'absolute',
  left: '1%',
  right: '1%',
  top: '10%',
  bottom: '1%',

  background: '#343556',
  border: '2px solid #FFFFFF',
})

export default function DemoOneBox() {
  return (
    <Box>
      <BoxBorder />
    </Box>
  )
}
