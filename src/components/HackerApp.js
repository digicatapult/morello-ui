import React from 'react'

import { Col, H2 } from './shared/Common'
import { Context } from '../utils/context'

// usage <Icon imageSrc={cardArrow} text={'txt'} styles={{ width: '100px', textAlign: 'center'}}/>
export default function Hacker(props) {
  const { demo1, update } = React.useContext(Context)
  const { imageSrc, text, styles } = props

  const renderModal = (e, { demo1, update }) => {
    e.preventDefault()
    update({
      demo1: {
        ...demo1,
        renderModal: true,
      },
    })
  }

  return (
    <Col
      id={'hacker-app'}
      styles={{
        ...styles,
        cursor: 'pointer',
      }}
      onClick={(e) => renderModal(e, { demo1, update })}
    >
      <img style={{ padding: '0px 10px' }} src={imageSrc} width={'60px'} height={'60px'} />
      <H2>{text}</H2>
    </Col>
  )
}
