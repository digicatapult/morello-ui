import React from 'react'
import styled from 'styled-components'

import DemoHeader from '../components/Demo1Header'

import backgroundDemoOne from '../assets/images/backgroundDemoOne.png' // whbt do we suffix with old??

const Background = styled.div(() => ({
  position: 'absolute',
  display: 'block',
  backgroundImage: `url(${backgroundDemoOne})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'auto',
  width: '1920px',
  height: '1080px',
  zIndex: '-5',
  padding: '0',
}))

export default function DemoOne({ title }) {
  console.log(backgroundDemoOne)
  return (
    <Background>
      <DemoHeader title={title} />
    </Background>
  )
}
