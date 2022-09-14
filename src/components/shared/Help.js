import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: absolute;
  top: 200px;
  left: 50px;
`

const Button = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: ${(props) => props.background};
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
      <Button background={theme.help.background} onClick={toggle}>
        <ButtonText {...theme.font}>?</ButtonText>
      </Button>

      <ContentWrapper
        display={showContentState ? 'flex' : 'none'}
        background={theme.help.background}
      >
        <ContentText {...theme.font}>{content}</ContentText>
      </ContentWrapper>
    </Wrapper>
  )
}
