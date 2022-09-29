import React from 'react'
import styled from 'styled-components'
import { Context } from '../../utils/context'

import { IconButton } from './Buttons'

const Wrapper = styled.div`
  position: absolute;
  top: 200px;
  left: 50px;
`

const ContentWrapper = styled.div`
  max-width: 20vw;
  max-height: 60vh;
  padding: 10px;
  background: ${(props) => props.background};
  display: ${(props) => props.display};
  box-shadow: ${(props) => props.boxShadow};
  border-radius: ${(props) => props.borderRadius};
  border: ${(props) => props.border};
`

const ButtonText = styled.p`
  font-family: ${(props) => props.fontFamily};
  color: ${(props) => props.color};
  font-size: 24px;
`

const ContentText = styled.p`
  font-family: ${(props) => props.fontFamily};
  color: ${(props) => props.color};
  font-size: 16px;
  white-space: pre-line;
  text-align: left;
  margin: 0;
`

export default function Help({
  theme,
  content,
  showContentState,
}) {
  const { update, writeDemo: state } = React.useContext(Context)

  const toggle = () => {
    update({
      writeDemo: {
        ...state,
        showHelp: !state.showHelp,
      }
    })
  }
  return (
    <Wrapper>
      <IconButton
        background={theme.primary.window.background}
        boxShadow={theme.primary.window.boxShadow}
        borderRadius={theme.primary.window.borderRadius}
        border={theme.primary.window.border}
        onClick={toggle}
      >
        <ButtonText {...theme.font}>?</ButtonText>
      </IconButton>

      <ContentWrapper
        display={showContentState ? 'flex' : 'none'}
        background={theme.primary.window.background}
        boxShadow={theme.primary.window.boxShadow}
        borderRadius={theme.primary.window.borderRadius}
        border={theme.primary.window.border}
      >
        <ContentText {...theme.font}>{content}</ContentText>
      </ContentWrapper>
    </Wrapper>
  )
}
