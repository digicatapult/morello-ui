import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

import { H1 } from './shared/Common'
import closeIcon from '../assets/images/close-icon.png'
import { Context } from '../utils/context'

const HeaderStyle = styled.div`
  ${(props) => props}
`
const CloseElement = styled.span({
  display: 'flex',
  height: '100%',
  alignItems: 'center',
  cursor: 'pointer',
})

export default function Header(props) {
  const {
    demo1: { theme },
  } = React.useContext(Context)
  const nav = useNavigate()

  return (
    <HeaderStyle
      data-cy={'header'}
      {...theme.header}
      backgroundColor={props.color || 'none'}
    >
      {props.title ? (
        <H1
          lineHeight={'58px'}
          letterSpacing={'-0.06em'}
          fontStyle={'normal'}
          fontWeight={'300'}
          fontSize={'45px'}
        >
          {props.title}
        </H1>
      ) : (
        <img src={props.logo} width={'140px'} height={'38px'} />
      )}

      {props.showClose && (
        <CloseElement
          data-cy={'header-close-btn'}
          onClick={(e) => {
            e.preventDefault()
            nav('/', { replace: false })
          }}
        >
          <H1>Close</H1>
          <img src={closeIcon} />
        </CloseElement>
      )}
    </HeaderStyle>
  )
}
