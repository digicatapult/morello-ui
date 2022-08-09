import React from 'react'
import styled from 'styled-components'
import { H1, Row, Col } from '../Common'

const HeaderStyle = styled.div({
  backgroundColor: '#384D6C',
  width: '100%',
  height: '164px',
})

const RightCross = styled.span({
  position: 'absolute',
  left: '96.63%',
  right: '1.39%',
  top: '35%',
  bottom: '92.77%',
  border: '2px solid #FFFFFF',
  transform: 'rotate(45deg)',
})

const LeftCross = styled.span({
  position: 'absolute',
  left: '96.63%',
  right: '1.39%',
  top: '35%',
  bottom: '92.77%',
  border: '2px solid #FFFFFF',
  transform: 'rotate(-45deg)',
})

export default function DemoHeader({ title }) {
  return (
    <HeaderStyle>
      <Row>
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
          <RightCross />
          <LeftCross />
        </Col>
      </Row>
    </HeaderStyle>
  )
}
