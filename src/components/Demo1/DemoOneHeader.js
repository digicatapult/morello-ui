import React from 'react'
import styled from 'styled-components'
import { H1, Row, Col } from '../Common'

const HeaderStyle = styled.div({
  backgroundColor: '#384D6C',
  width: '100%',
  height: '164px',
})

export default function DemoHeader({ title }) {
  return (
    <HeaderStyle>
      <Row height={'100%'}>
        <Col size={1} paddingLeft={'100px'}>
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
        <Col size={4}>
          <H1>Close</H1>
        </Col>
      </Row>
    </HeaderStyle>
  )
}
