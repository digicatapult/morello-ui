import React from 'react'
import styled from 'styled-components'
import { H1, Row, Col, RowSpacer } from '../Common'
import closeIcon from '../../assets/images/close-icon.png'

const HeaderStyle = styled.div({
  backgroundColor: '#384D6C',
  width: '100%',
  height: '164px',
})

const CloseElement = styled.span({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
})

export default function DemoHeader({ title }) {
  const GoBack = () => {
    console.log('Go back a page')
  }

  return (
    <HeaderStyle>
      <Row height={'100%'}>
        <Col size={2} paddingLeft={'50px'} alignItems={'start'}>
          <H1
            lineHeight={'58px'}
            letterSpacing={'-0.06em'}
            fontStyle={'normal'}
            fontWeight={'300'}
            fontSize={'45px'}
          >
            {title ? title : 'Placeholder'}
          </H1>
        </Col>
        <RowSpacer size={5} />
        <Col size={3} paddingRight={'50px'} alignItems={'end'}>
          <CloseElement onClick={GoBack}>
            <H1>Close</H1>
            <img src={closeIcon} />
          </CloseElement>
        </Col>
      </Row>
    </HeaderStyle>
  )
}
