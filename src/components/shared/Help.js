import React from 'react'
import styled from 'styled-components'

import { IconButton } from './Buttons'

const Wrapper = styled.div`
  position: absolute;
  top: 200px;
  left: 50px;
`

const ContentWrapper = styled.div`
  max-width: 500px;
  max-height: 400px;
  padding: 10px;
  background: ${(props) => props.background};
  display: ${(props) => props.display};
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
  setShowContentState,
}) {
  const toggle = () => {
    setShowContentState(!showContentState)
  }

  return (
    <Wrapper>
      <IconButton background={theme.help.background} onClick={toggle}>
        <ButtonText {...theme.font}>?</ButtonText>
      </IconButton>

      <ContentWrapper
        display={showContentState ? 'flex' : 'none'}
        background={theme.help.background}
      >
        <ContentText {...theme.font}>{content}</ContentText>
      </ContentWrapper>
    </Wrapper>
  )
}
