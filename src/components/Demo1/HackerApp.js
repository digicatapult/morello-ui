import React from 'react'

import { Col, H2 } from '../Common'
import { Context } from '../../utils/context'

// usage <Icon imageSrc={cardArrow} text={'txt'} styles={{ width: '100px', textAlign: 'center'}}/>
export default function Icon(props) {
  const { demo1, update } = React.useContext(Context)
  const { imageSrc, text, styles } = props

  const renderModal = (e) => {
    e.preventDefault()
    update({
      demo1: {
        ...demo1,
        renderModal: true,
      },
    })
  }

  return (
    <Col {...styles} cursor={'pointer'} onClick={(e) => renderModal(e)}>
      <img style={{ padding: '0px 10px' }} src={imageSrc} />
      <H2>{text}</H2>
    </Col>
  )
}
