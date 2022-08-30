import React, { useEffect } from 'react'
import styled from 'styled-components'

import Header from './Header'
import HackerApp from './HackerApp'
import { Context } from '../utils/context'
import Box from './Box'
import MorelloSlider from './MorelloSlider'

const Wrapper = styled.div((props) => props)

export default function Demo1(props) {
  const state = React.useContext(Context)
  const demo1 = { ...state.demo1, ...props }
  const { update, themes } = state
  const { theme } = demo1
  const { Background } = theme

  const switchToMorello = (e) => {
    e.preventDefault()
    update({
      demo1: {
        ...demo1,
        active: 'Morello',
        theme: themes['Morello'],
        output: undefined,
        password: '',
        showHackPopup: false,
        isPasswordSet: false,
        renderModal: false,
        renderModalActions: true,
        showHackingProgress: false,
      },
    })
  }

  return (
    <Background>
      {demo1.showHackPopup && <MorelloSlider {...demo1} />}
      <Header {...demo1} showClose={true} />
      <Wrapper {...theme.wrapper}>
        {demo1.isPasswordSet && (
          <HackerApp
            imageSrc={theme.icons.icon}
            text={'hacker app'}
            styles={theme.icons.style}
          />
        )}
        <Box {...demo1} />
      </Wrapper>
    </Background>
  )
}
