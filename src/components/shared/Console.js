import React, { useState } from 'react'
import styled from 'styled-components'
import { DemoText } from './Common'

const ConsoleWrapper = styled.div`
  width: 100%;
`

const ConsoleWindow = styled.div`
  outline: 1px solid white;
  background: black;
  margin: 0px;
  overflow: scroll;
  min-height: ${({ showConsole }) => (showConsole ? '100px' : '2px')};
  max-height: ${({ showConsole }) => (showConsole ? '200px' : '2px')};
  padding: ${({ showConsole }) => (showConsole ? '10px' : '0px')};

  > p {
    font-family: Monaco;
    color: limegreen;
    font-size: 12px;
    font-weight: 100;
    margin: 0;
    line-height: 1.5;
  }
`

const OutputTest = styled.p`
  white-space: pre-line;
`

export default function Console({ executable, output }) {
  const [showConsole, setShowConsole] = useState(false)

  const toggleDetails = () => setShowConsole(!showConsole)

  const caret = showConsole ? 'v' : '>'

  return (
    <ConsoleWrapper>
      <DemoText paddingBottom={'5px'} onClick={toggleDetails}>
        Details {caret}
      </DemoText>
      <ConsoleWindow showConsole={showConsole}>
        <p>demo@morello-box $ ./{executable}</p>
        <OutputTest>{output}</OutputTest>
      </ConsoleWindow>
    </ConsoleWrapper>
  )
}
