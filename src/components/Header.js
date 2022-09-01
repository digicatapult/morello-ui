import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

import { H1, Row, Col, RowSpacer } from './shared/Common'
import closeIcon from '../assets/images/close-icon.png'
import { Context, initState } from '../utils/context'

const HeaderStyle = styled.div((props) => props)
const CloseElement = styled.span({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
})

export default function Header(props) {
  const {
    demo1: { theme },
    update,
  } = React.useContext(Context)
  const nav = useNavigate()

  return (
    <HeaderStyle
      data-cy={'header'}
      {...theme.header}
      backgroundColor={props.color || 'none'}
    >
      <Row height={'100%'}>
        <Col size={3} styles={{ paddingLeft: '50px', alignItems: 'start' }}>
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
        </Col>
        <RowSpacer size={5} />
        <Col size={3} styles={{ paddingRight: '50px', alignItems: 'end' }}>
          {props.showClose && (
            <CloseElement
              data-cy={'header-close-btn'}
              onClick={(e) => {
                e.preventDefault()
                update(initState)
                nav('/', { replace: true })
              }}
            >
              <H1>Close</H1>
              <img src={closeIcon} />
            </CloseElement>
          )}
        </Col>
      </Row>
    </HeaderStyle>
  )
}
