import React, { useState } from 'react'
import styled from 'styled-components'

import { Button, ButtonBasic } from '../../shared/Buttons'
import { DemoText, Col, Row } from '../../shared/Common'
import ProgressBar from './ProgressBar'
import Title from '../../shared/Title'

const Window = styled.div(({ styles }) => styles)
const Page = styled(Col)((props) => props)
const renderActions = ({ update, readDemo }) => {
  const handleNo = (e) => {
    e.preventDefault()
    update({
      readDemo: {
        ...readDemo,
        renderModal: false,
        renderModalActions: true,
      },
    })
  }

  const handleYes = (e) => {
    e.preventDefault()
    update({
      readDemo: {
        ...readDemo,
        renderModalActions: false,
        showHackingProgress: true,
      },
    })
  }

  const btn = () =>
    readDemo.theme.name === 'Morello'
      ? [
          <Button
            key={'read-demo-modal-btn-yes-1'}
            data-cy={'read-demo-modal-btn-yes-1'}
            onClick={handleYes}
          >
            YES
          </Button>,
          <div key={'div-1'} style={{ width: '30px' }} />,
          <Button
            key={'read-demo-modal-btn-no-1'}
            data-cy={'read-demo-modal-btn-no-1'}
            OnClick={handleNo}
          >
            NO
          </Button>,
        ]
      : [
          <ButtonBasic
            key={'read-demo-modal-btn-yes-2'}
            data-cy={'read-demo-modal-btn-yes-2'}
            onClick={handleYes}
          >
            YES
          </ButtonBasic>,
          <ButtonBasic
            key={'read-demo-modal-btn-no-2'}
            data-cy={'read-demo-modal-btn-no-2'}
            onClick={handleNo}
          >
            NO
          </ButtonBasic>,
        ]

  return (
    <Row justifyContent={'center'} padding={'10px'}>
      {btn()}
    </Row>
  )
}

export default function Modal({ update, readDemo }) {
  const { theme, showHackingProgress, renderModalActions } = readDemo

  const [showOutput, setShowOutput] = useState(false)
  const handleDetails = (e) => {
    e.preventDefault()
    setShowOutput(!showOutput)
  }

  return (
    <Window data-cy={'hacker-app-modal'} styles={theme.modal.window}>
      <Title title={readDemo.modalTitle} arch={theme.name} />
      <Row flex={'auto'}>
        <Page {...theme.modal.page} style={{ overFlow: 'scroll' }}>
          <DemoText {...readDemo.txt_col}>{readDemo.modalText}</DemoText>

          {renderModalActions && renderActions({ readDemo, update })}

          {showHackingProgress && (
            <Row height={'50px'} flex={'auto'} marginTop={'20px'}>
              <ProgressBar readDemo={readDemo} update={update} />
            </Row>
          )}
          {readDemo?.switchToMorello && (
            <Button onClick={readDemo.switchToMorello}>TRY</Button>
          )}
          {readDemo.output && <button onClick={handleDetails}>Details</button>}
          {showOutput && (
            <DemoText
              style={{
                boxShadow: 'inset 0 0 10px #000000',
                marginTop: '18px',
              }}
            >
              {JSON.stringify(readDemo.output)}
            </DemoText>
          )}
        </Page>
      </Row>
    </Window>
  )
}
