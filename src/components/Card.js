import React from 'react'
import styled from 'styled-components'

import { H1, Wrapper, P1, Spacer } from './Common'

const cardStyle = {
  display: 'block',
  width: '320px', 
  height: '355px'
}

export default function Card(props) {
  console.log({ props })
  return (
    <Wrapper backgroundColor={props.color || 'green'} flexFlow='column wrap'>
      <Spacer size={182} />
      <H1>{props.title}</H1>
      <P1>{props.description}</P1>
    </Wrapper>
  ) 
}
