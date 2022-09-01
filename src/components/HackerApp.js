import React from 'react'
import styled from 'styled-components'

import { H2 } from './shared/Common'
import { Context } from '../utils/context'

const IconWrapper = styled.div`
  ${(props) => props.styles}
`

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
    <IconWrapper id={'hacker-app'} styles={styles}>
      <img
        style={{ cursor: 'pointer' }}
        src={imageSrc}
        width={'60px'}
        height={'60px'}
        onClick={(e) => renderModal(e, { demo1, update })}
      />
      <H2>{text}</H2>
    </IconWrapper>
  )
}
