import React from 'react'
import styled from 'styled-components'

import { H1, P1 } from './Common'

const Indicator = styled.div`
  display: flex;
  opacity: 0.8;
  @media screen and (hover: hover) {
    opacity: 0.4;
  }
  width: 100%;
  justify-content: flex-end;
  align-items: start;
  flex-direction: row;
  margin-top: 10px;
  transition: all 0.5s;
`

const Paper = styled.div`
  display: grid;
  height: 100%;
  grid-template-rows: 1fr auto auto;
  opacity: 1;
  cursor: pointer;
  padding: 10px 20px;
  background: ${(props) => props.color};
  transition: opacity 0.1s;
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
      opacity: 1;
    }
  }
`

const SubTitle = styled(P1)`
  min-height: 4ch;
  margin-bottom: 0;
`

export default function Card(props) {
  const { title, description, isDemo, icon } = props

  return (
    <Paper {...props}>
      <Indicator>
        <img width={'64px'} height={'64px'} src={icon} />
      </Indicator>
      <H1>{title}</H1>
      <SubTitle>
        {isDemo ? <b>Bug type: </b> : null}
        {description}
      </SubTitle>
    </Paper>
  )
}
