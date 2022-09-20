import React from 'react'
import styled from 'styled-components'

import { Context } from '../../../utils/context'

const IconWrapper = styled.div`
  position: absolute;
  left: 20px;
  bottom: 100px;
  width: 60px;
  text-align: center;
`

const IconText = styled.p`
  font-family: ${(props) => props.fontFamily};
  color: ${(props) => props.color};
  font-size: 16px;
  margin: 10px auto;
  color: #ffffff;
  line-height: 14px;
`

export default function Hacker(props) {
  const { readDemo, update } = React.useContext(Context)
  const { imageSrc, text, font } = props

  const renderModal = (e, { readDemo, update }) => {
    e.preventDefault()
    update({
      readDemo: {
        ...readDemo,
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
        onClick={(e) => renderModal(e, { readDemo, update })}
      />
      <IconText {...font}>{text}</IconText>
    </IconWrapper>
  )
}
