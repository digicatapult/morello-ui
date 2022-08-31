import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

import Header from './Header'
import HackerApp from './HackerApp'
import { Context } from '../utils/context'
import Box from './Box'
import Popup, { PopBody, PopFooter, PopHeader } from './shared/Popup'

const Wrapper = styled.div((props) => props)

export default function Demo1(props) {
  const nav = useNavigate()
  const state = React.useContext(Context)
  const { theme } = props
  const { Background } = theme
  const {
    demo1: { isPasswordSet, showHackPopup },
  } = state

  const switchToMorello = (e) => {
    e.preventDefault()
    state.update({
      active: 'Morello',
      demo1: {
        ...Object.keys(state.demo1).reduce((out, next) => {
          out[next] = typeof next == 'string' ? '' : false
          return out
        }, {}),
        renderModalActions: true,
      },
    })
    nav('/demo1?type=dsbd', { replace: true })
  }

  return (
    <Background>
      {showHackPopup && (
        <Popup action={switchToMorello}>
          <PopHeader>{props.hackingOkTitle}</PopHeader>
          <PopBody>
            {`${JSON.stringify(state.demo1.output)}\n\n
            Click on TRY to see how morello addresses this issue`}
          </PopBody>
          <PopFooter>
            {`${props.hackingOkBody} ${state.demo1.password}`}
          </PopFooter>
        </Popup>
      )}
      <Header {...props} showClose={true} />
      <Wrapper {...theme.wrapper}>
        {isPasswordSet && (
          <HackerApp
            imageSrc={theme.icons.hacker}
            text={'hacker app'}
            styles={theme.icons.style}
          />
        )}
        <Box {...props}/>
      </Wrapper>
    </Background>
  )
}
