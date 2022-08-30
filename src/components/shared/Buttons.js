import React from 'react'
import styled from 'styled-components'

import backgroundImg from '../../assets/images/osx-background.png'
import ArrowWhite from '../../assets/images/arrow-white.png'

export const ButtonBasic = styled.button`
  width: 20%;
  height: 50px;
  margin-left: 5px;
`

export function ButtonSide({ action, ...demo1 }) {
  const Arrow = styled.div`
    background-size: cover;
    background-image: url(${ArrowWhite});
    height: 33px;
    width: 55px;
    animation: stepIn 1.3s;
    animation-iteration-count: infinite;

    @keyframes stepIn {
      0% {
        margin-left: 10px;
      }
      30% {
        margin-left: 39px;
      }
      100% {
        margin-left: 10px;
      }
    }
  `

  const SideButton = styled.div`
    position: absolute;
    display: flex;
    z-index: 101;
    pointer: cursor;
    padding: 0px 20px;
    align-items: center;
    height: 694px;
    opacity: 0.6;
    top: 168px;
    width: auto;
    transition: all 0.6s;
    background-image: url(${backgroundImg});
  `

  return (
    <SideButton {...demo1} onClick={action}>
      <Arrow />
    </SideButton>
  )
}

export const Button = styled.button`
  font-size: 1em;
  font-weight: 600;
  padding: 10px 15px 10px 15px;
  color: #fff;
  background-color: #000;
  box-shadow: 0px 0px 4px #212124;
  border: 1px solid #212124;

  border-radius: 6px;

  &:hover {
    backgroundcolor: rgba(255, 255, 255, 0.5);
  }

  &:disabled {
    color: gray;
    opacity: 0.7;
    cursor: default;
  }
`
