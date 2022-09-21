import React from 'react'
import styled from 'styled-components'

import { H2 } from '../../shared/Common'
import { Context } from '../../../utils/context'

const IconWrapper = styled.div`
  position: absolute;
  left: 20px;
  bottom: 100px;
  width: 60px;
  text-align: center;
`
export default function Hacker(props) {
  const { readDemo, update } = React.useContext(Context)
  const { imageSrc, text } = props

  const renderModal = (e, { state, update }) => {
    e.preventDefault()
    update({
      readDemo: {
        ...state,
        renderModal: true,
      },
    })
  }

  return (
    <IconWrapper data-cy={'hacker-app'}>
      <img
        style={{ cursor: 'pointer' }}
        src={imageSrc}
        width={'60px'}
        height={'60px'}
        onClick={(e) => renderModal(e, { type: 'readDemmo', state: readDemo, update })}
      />
      <H2>{text}</H2>
    </IconWrapper>
  )
}