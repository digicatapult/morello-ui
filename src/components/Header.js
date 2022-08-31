import React from 'react'
import styled from 'styled-components'

import { H1, Row, Col, RowSpacer } from './shared/Common'
import closeIcon from '../assets/images/close-icon.png'

const HeaderStyle = styled.div((props) => props)
const CloseElement = styled.span({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
})

export default function Header(demo1) {
  const { theme } = demo1

  return (
    <HeaderStyle  data-cy={'header'} {...theme.header} backgroundColor={props.color || 'none'}>
      <Row height={'100%'}>
        <Col size={3} styles={{ paddingLeft: '50px', alignItems: 'start' }}>
          {demo1.title ? (
            <H1
              lineHeight={'58px'}
              letterSpacing={'-0.06em'}
              fontStyle={'normal'}
              fontWeight={'300'}
              fontSize={'45px'}
            >
              {demo1.title}
            </H1>
          ) : (
            <img src={demo1.logo} width={'140px'} height={'38px'} />
          )}
        </Col>
        <RowSpacer size={5} />
        <Col size={3} styles={{ paddingRight: '50px', alignItems: 'end' }}>
          {demo1.showClose && (
            <CloseElement
              onClick={(e) => {
                e.preventDefault()
                update({
                  demo1: {
                    ...demo1,
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
