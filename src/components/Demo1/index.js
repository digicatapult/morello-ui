import React from 'react'
import styled from 'styled-components'

import Header from '../Header'
import HackerApp from './HackerApp'
import { Context } from '../../utils/context'
import { Background } from './Background'
import hackerIcon from '../../assets/images/hacker-app-icon.png'
import Box from './Box'
import Popup, { PopBody, PopFooter, PopHeader } from '../Popup'

const Wrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

export default function Demo1(props) {
  const state = React.useContext(Context)
  const {
    demo1: { isPasswordSet, showHackPopup, output },
  } = state

  const switchToMorello = (e) => {
    e.preventDefault()
    console.log(e)
  }

  console.log(state.demo1.output)

  return (
    <Background>
      {showHackPopup &&
      <Popup action={switchToMorello}>
        <PopHeader>{props.hackingOkTitle}</PopHeader>
        <PopBody>
          {`${JSON.stringify(state.demo1.output, null, 2)}`}
          {`${props.hackingOkBody} ${state.demo1.password}\n`}
        </PopBody>
        <PopFooter>
          {'Click on TRY to see how morello addresses this issue'}
        </PopFooter>
      </Popup>}
      <Header {...props} />
      <Wrapper>
        {isPasswordSet && (
          <HackerApp
            imageSrc={hackerIcon}
            text={'hacker app'}
            styles={{
              position: 'absolute',
              left: '20px',
              top: '200px',
              width: '100px',
              textAlign: 'center',
            }}
          />
        )}
        <Box {...props} background={'#343556'} />
      </Wrapper>

    </Background>
  )
}
