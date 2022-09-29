import React from 'react'
import styled from 'styled-components'

import { Col, IconText } from '../../shared/Common'

import ConsoleIcon from '../../../assets/images/console-icon.png'

const IconWrapper = styled.div`
  width: 100px;
  overflow-wrap: break-word;
  text-align: center;
`

const ConsoleButtonWrapper = styled.div`
  position: absolute;
  bottom: 100px;
  right: 15%;
  width: 100px;
  overflow-wrap: break-word;
  pointer: cursor;
  text-align: center;
`

export const SecretDesktop = ({ icons, font = {} }) => {
  return (
    <Col styles={{ padding: '0px 10px', alignItems: 'flex-start' }}>
      {icons.map((icon) => (
        <IconWrapper key={icon.name}>
          <img
            src={icon.img}
            style={{ cursor: 'pointer' }}
            width={'60px'}
            height={'60px'}
          />
          <IconText {...font}>{icon.name}</IconText>
        </IconWrapper>
      ))}
    </Col>
  )
}

export const ConsoleButton = ({ update, state, font }) => {
  return (
    <ConsoleButtonWrapper
      onClick={(e) => {
        e.preventDefault()
        update({
          writeDemo: {
            ...state,
            showConsole: true,
          },
        })
      }}
    >
      <img
        src={ConsoleIcon}
        style={{ cursor: 'pointer' }}
        width={'60px'}
        height={'60px'}
      />
      <IconText {...font}>Console</IconText>
    </ConsoleButtonWrapper>
  )
}
