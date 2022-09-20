import React from 'react'
import styled from 'styled-components'

import ArrowWhite from '../../assets/images/arrow-white.png'

export const ButtonBasic = styled.button`
  width: 20%;
  height: 50px;
  margin-left: 5px;
  border: 0;
  align-items: center;
  display: flex;
  justify-content: center;
`

const Arrow = styled.div`
  display: flex;
  background-size: cover;
  background-image: url(${ArrowWhite});
  height: 33px;
  width: 55px;
  margin-left: 1vw;
  margin-right: 1vw;
`

const SideButton = styled.div`
  position: absolute;
  display: flex;
  z-index: 101;
  cursor: pointer;
  padding: 0px 20px;
  align-items: center;
  height: calc(100vh - 164px);
  top: 164px;
  right: 0px;
  background-color: rgba(65, 106, 170, 0.6);
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;

  animation: stepIn 1.3s;
  animation-iteration-count: infinite;

  @keyframes stepIn {
    0% {
      padding-left: 1vw;
      padding-right: 1vw;
    }
    30% {
      padding-left: 2vw;
      padding-right: 2vw;
    }
    100% {
      padding-left: 1vw;
      padding-right: 1vw;
    }
  }
`
const LearnMessage = styled.p`
  color: rgba(255, 255, 255, 1);
  font-size: 25px;
  z-index: 50;
  font-family: AktivGrotesk;
  text-align: center;
  width: 10vw;
`

export function ButtonSide({ action, message = '' }) {
  return (
    <>
      <SideButton onClick={action}>
        <Arrow />
        <LearnMessage>{message}</LearnMessage>
      </SideButton>
    </>
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
  align-items: center;
  display: flex;
  justify-content: center

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

export const IconButton = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: ${(props) => props.background};
  box-shadow: ${(props) => props.boxShadow};
  border-radius: ${(props) => props.borderRadius};
  border: ${(props) => props.border};
`
