import React from 'react'
import styled from 'styled-components'

import { Row } from './Common'

const InputBox = styled.input((props) => props)
const Label = styled.label((props) => props)
const Warning = styled.p((props) => props)

export default function Input({
  label,
  theme,
  value,
  setInputState,
  inputType = 'text',
  upperBound,
  cySelector,
  showInputError,
  InputErrorWarning,
  style,
}) {
  return (
    <div style={style}>
      <Label {...theme.label}>{label}</Label>
      <Row>
        <InputBox
          {...theme.input}
          data-cy={`${cySelector}`}
          type={inputType}
          maxLength={upperBound}
          value={value}
          onChange={(e) => {
            setInputState(e.target.value)
          }}
        />
      </Row>
      <Warning
        visibility={showInputError ? 'visible' : 'hidden'}
        {...theme.warning}
      >
        <InputErrorWarning />
      </Warning>
    </div>
  )
}
