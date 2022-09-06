import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { Row } from './Common'

const InputBox = styled.input((props) => props)
const Label = styled.label((props) => props)
const Warning = styled.p((props) => props)

export default function Input({
  label,
  theme,
  inputState,
  setInputState,
  inputType = 'text',
  upperBound = 16,
  id = '',
}) {
  const [inputMinError, SetInputMinError] = useState(false)
  const [inputMaxError, SetInputMaxError] = useState(false)
  const [someInputTyped, SetSomeInputTyped] = useState(false)

  useEffect(() => {
    if (inputState.length > 0) {
      SetSomeInputTyped(true)
    }
    SetInputMaxError(inputState.length === upperBound)
    SetInputMinError(inputState.length === 0 && someInputTyped)
  }, [inputState, someInputTyped, upperBound])

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
        visibility={inputMinError || inputMaxError ? 'visible' : 'hidden'}
        {...theme.warning}
      >
        {inputMinError && <>Cannot be empty</>}
        {inputMaxError && <>Maximum length reached</>}
      </Warning>
    </div>
  )
}
