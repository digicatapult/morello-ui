import React from 'react'
import styled from 'styled-components'

import Header from '../Header'
import HackerApp from '../HackerApp'
import { Context, initState } from '../../utils/context'
import Box from '../Box'
import { ButtonSide } from '../shared/Buttons'

const Wrapper = styled.div`
  grid-area: body;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  ${(props) => props}
`

export default function Demo1(props) {
  const state = React.useContext(Context)
  const demo1 = { ...state.demo1, ...props }
  const { update, Themes } = state
  const { theme } = demo1

  const switchToMorello = (e) => {
    e.preventDefault()
    const theme = Themes('Morello')
    theme.modal.page.background = '#717171'
    theme.modal.page.color = '#818181'

    update({
      demo1: {
        ...demo1,
        active: 'Morello',
        theme,
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

  React.useEffect(() => {
    update(initState)
  }, [update])

  return (
    <>
      <Header {...demo1} />
      <Wrapper {...theme.wrapper}>
        {demo1.showHackPopup && (
          <ButtonSide {...demo1} action={switchToMorello} />
        )}
        {demo1.isPasswordSet && (
          <HackerApp
            imageSrc={theme.icons.icon}
            text={'hacker app'}
            styles={theme.icons.style}
          />
        )}
        <Box {...demo1} />
      </Wrapper>
    </>
  )
}
