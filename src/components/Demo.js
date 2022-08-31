import React, { useEffect } from 'react'
import styled from 'styled-components'

import Header from './Header'
import HackerApp from './HackerApp'
import { Context } from '../utils/context'
import Box from './Box'
import Popup, { PopBody, PopFooter, PopHeader } from './shared/Popup'

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

  console.log('main : ', demo1)
  return (
    <Background>
      {demo1.showHackPopup && (
        <Popup action={(e) => switchToMorello(e)}>
          <PopHeader>{demo1.hackingOkTitle}</PopHeader>
          <PopBody>
            {`${JSON.stringify(demo1.output)}\n\n
            Click on TRY to see how morello addresses this issue`}
          </PopBody>
          <PopFooter>
            {`${demo1.hackingOkBody} ${demo1.password}`}
          </PopFooter>
        </Popup>
      )}
      <Header {...demo1} showClose={true} />
      <Wrapper {...theme.wrapper}>
        {demo1.isPasswordSet && (
          <HackerApp
            imageSrc={theme.icons.hacker}
            text={'hacker app'}
            styles={theme.icons.style}
          />
        )}
        <Box {...demo1}/>
      </Wrapper>
    </Background>
  )
}
