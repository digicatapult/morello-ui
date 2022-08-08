import React from 'react'
import styled from 'styled-components'

import Header from '../components/Header'
import DemoHeader from '../components/Demo1Header'
import { Item, H1 } from '../components/Common'

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

function Demo1Title(title) {
  return [
    <Item size={6} height={'100%'}>
      <H1 {{
        lineHeight: '58px',
        letterSpacing: '-0.06em',
        fontSize: '45px',
      }}>
        {title ? title : 'Placeholder'}
      </H1>
    </Item>
    <Item size={4} height={'100%'} flexDirection={'column'}>
      <H1>Close</H1>
      <RightCross />
      <LeftCross />
    </Item>
  ]
}

export default function DemoOne({ title }) {
  console.log(backgroundDemoOne)
  return (
    <Background>
      <Header 
        style={{
          backgroundColor: '#384D6C',
          height: '164px',
        }}
        custom={Demo1Title(title)}
      />
    </Background>
  )
}
