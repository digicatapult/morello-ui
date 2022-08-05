import React from 'react'
import styled from 'styled-components'

import { H1, P1, Spacer } from './Common'

const Paper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 320px; 
  height: 355px;
  padding: 10px 20px;
  background-color: ${props => props.color};
  transition: all .7s;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05), 0 1px 3px 0 rgba(0, 0, 0, 0.09);
  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background-color: red;
  };
`

export default function Card(props) {
  const { title, description } = props

  return (
    <Paper {...props} >
      <Spacer size={182} />
      <H1>{title}</H1>
      <P1><b>Bug type: </b>{description}</P1>
    </Paper>
  ) 
}
