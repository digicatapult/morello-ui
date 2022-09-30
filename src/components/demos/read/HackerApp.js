import React from 'react'
import styled from 'styled-components'

import { Context } from '../../../utils/context'
import { IconText } from '../../shared/Common'

const IconWrapper = styled.div`
  position: absolute;
  left: 20px;
  bottom: 100px;
  width: 60px;
  text-align: center;
`

export default function Hacker(props) {
  const { readDemo, update } = React.useContext(Context)
  const { imageSrc, text, font } = props

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
        data-cy={'hacker-app-icon'}
        style={{ cursor: 'pointer' }}
        src={imageSrc}
        width={'60px'}
        height={'60px'}
        onClick={(e) =>
          renderModal(e, { type: 'readDemo', state: readDemo, update })
        }
      />
      <IconText {...font} data-cy={'hacker-app-icon-text'}>
        {text}
      </IconText>
    </IconWrapper>
  )
}
