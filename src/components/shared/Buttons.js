import React from 'react'
import styled from 'styled-components'

import backgroundImg from '../../assets/images/osx-background.png'
import ArrowWhite from '../../assets/images/arrow-white.png'

export const ButtonBasic = styled.button`
  width: 20%;
  height: 50px;
  margin-left: 5px;
  border: 0;
`

export function ButtonSide({
  action,
  learnMore = false,
  message = 'Learn More',
}) {
  const Arrow = styled.div`
    display: flex;
    flex-dirction: column;
    background-size: cover;
    background-image: url(${ArrowWhite});
    height: 33px;
    width: 55px;
    animation: stepIn 1.3s;
    animation-iteration-count: infinite;
    margin-right: 2vw;

    @keyframes stepIn {
      0% {
        margin-left: 1vw;
      }
      30% {
        margin-left: 4vw;
      }
      100% {
        margin-left: 1vw;
      }
    }
  `

  const SideButton = styled.div`
    position: absolute;
    display: flex;
    z-index: 101;
    cursor: pointer;
    padding: 0px 20px;
    align-items: center;
    height: calc(100vh - 164px);
    opacity: 0.6;
    top: 164px;
    right: 0px;
    width: auto;
    transition: all 0.6s;
    background-image: url(${backgroundImg});
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
  `
  const LearnMessage = styled.p`
    color: rgba(255, 255, 255, 1);
    font-size: 25px;
    z-index: 50;
    font-family: AktivGrotesk;
  `

  return (
    <div>
      <SideButton onClick={action}>
        <Arrow />
        {learnMore && <LearnMessage>{message}</LearnMessage>}
      </SideButton>
    </div>
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
