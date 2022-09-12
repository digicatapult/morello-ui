import React from 'react'
import styled from 'styled-components'

import directoryIcon from '../../../assets/images/directory-icon.png'
import fileIcon from '../../../assets/images/file-icon.png'

const Wrapper = styled.div`
  display: flex;
  gap: 50px;
  position: relative;
  bottom: 150px;
`

const IconWrapper = styled.div`
  width: 80px;
  height: 80px;
  text-align: center;
`

const Text = styled.p`
  font-size: 14px;
  color: #fff;
  font-family: ${(props) => props.fontFamily || 'Monaco'};
`

export default function SecretDesktop(theme) {
  return (
    <Wrapper>
      <IconWrapper>
        <img style={{ cursor: 'pointer' }} src={directoryIcon} width={'80%'} />
        <Text {...theme}>Secrets</Text>
      </IconWrapper>
      <IconWrapper>
        <img style={{ cursor: 'pointer' }} src={fileIcon} width={'80%'} />
        <Text {...theme}>Secret Doc</Text>
      </IconWrapper>
      <IconWrapper>
        <img style={{ cursor: 'pointer' }} src={directoryIcon} width={'80%'} />
        <Text {...theme}>More Secrets</Text>
      </IconWrapper>
    </Wrapper>
  )
}
