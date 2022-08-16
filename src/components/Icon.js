import React from 'react'

import { Col, H2 } from './Common'

// usage <Icon imageSrc={cardArrow} text={'txt'} styles={{ width: '100px', textAlign: 'center'}}/>
export default function Icon(props) {
  const { imageSrc, text, action, styles } = props

  return (
    <Col {...styles} cursor={'pointer'} onClick={action}>
      <img style={{ padding: '0px 10px' }} src={imageSrc} />
      <H2>{text}</H2>
    </Col>
  )
}
