import React from 'react'
import styled from 'styled-components'

import { H1, P1, Spacer } from './Common'
import cardArrow from '../assets/images/card-arrow.png'

const Indicator = styled.div`
  display: flex;
  opacity: 0;
  width: 100%;
  justify-content: flex-end;
  flex-direction: row;
  margin-top: 10px;
  transition: all 0.5s;
`

const Paper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  opacity: 1;
  width: 317px;
  height: 355px;
  cursor: pointer;
  padding: 10px 20px;
  background: ${(props) => props.color};
  transition: all 0.1s;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05), 0 1px 3px 0 rgba(0, 0, 0, 0.09);

  -webkit-tap-highlight-color: transparent; /* remove tap highlight */

  &:focus {
    outline: 0 !important;
    box-shadow: none;
  }
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.3),
      0 6px 20px 0 rgba(0, 0, 0, 0.29);
    opacity: 0.6;
    ${Indicator} {
      opacity: 0.6;
    }
  }
`

export default function Card(props) {
  const { title, description } = props

  return (
    <Paper {...props}>
      <Indicator>
        <img width={'21px'} height={'21px'} src={cardArrow} />
      </Indicator>
      <Spacer size={182} />
      <H1>{title}</H1>
      <P1>
        <b>Bug type: </b>
        {description}
      </P1>
    </Paper>
  )
}
