import React from 'react'
import styled from 'styled-components'

import { Row } from './Common'

const InputBox = styled.input((props) => props)
const Label = styled.label((props) => props)
const Warning = styled.p((props) => props)

export default function Input({
  label,
  theme,
  setInputState,
  inputType = 'text',
  upperBound = 16,
  id = '',
  showInputError,
  InputErrorWarning,
}) {
  return (
    <div>
      <Label {...theme.label}>{label}</Label>
      <Row>
        <InputBox
          {...theme.input}
          id={id}
          type={inputType}
          maxLength={upperBound}
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
