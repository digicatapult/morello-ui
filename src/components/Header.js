import React from 'react'
import styled from 'styled-components'

import { H1, Row, Col, RowSpacer } from './shared/Common'
import closeIcon from '../assets/images/close-icon.png'
import { Context } from '../utils/context'

const HeaderStyle = styled.div((props) => props)
const CloseElement = styled.span({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
})

export default function Header(props) {
  const {
    demo1,
    demo1: { theme },
    update,
  } = React.useContext(Context)
  props = { ...demo1, ...props }

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
          {demo1.theme && (
            <CloseElement
              onClick={(e) => {
                e.preventDefault()
                update({
                  demo1: {
                    ...props,
                    password: '',
                    renderModal: false,
                    isPasswordSet: false,
                    renderModalActions: true,
                  },
                })
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
