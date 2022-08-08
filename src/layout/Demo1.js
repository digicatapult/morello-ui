import React from 'react'
import styled from 'styled-components'

import DemoHeader from '../components/Demo1Header'

import backgroundDemoOne from '../assets/images/backgroundDemoOne.png' // whbt do we suffix with old??

const Background = styled.div(() => ({
  position: 'absolute',
  backgroundImage: `url(${backgroundDemoOne})`,
  backgroundRepeat: 'no-repeat',
  zIndex: '-5',
  padding: '0',
  position: 'fixed',
  top: '0',
  left: '0',
  minWidth: '100%',
  minHeight: '100%',
}))

export default function DemoOne({ title }) {
  console.log(backgroundDemoOne)
  return (
    <Background>
      <DemoHeader title={title} />
    </Background>
  )
}
