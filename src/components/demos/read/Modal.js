import React from 'react'
import styled from 'styled-components'

import { Button, ButtonBasic } from '../../shared/Buttons'
import { DemoText, Col, Row } from '../../shared/Common'
import Title from '../../shared/Title'
import Console from '../../shared/Console'

const Window = styled.div(({ styles }) => styles)
const Page = styled(Col)`
  ${(props) => props}
`

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

  const btn = ({ cyPrefix = '' }) =>
    readDemo.theme.name === 'Morello'
      ? [
          <Button
            key={'read-demo-modal-btn-yes-1'}
            data-cy={`${cyPrefix}modal-btn-yes-cheri`}
            onClick={handleYes}
          >
            YES
          </Button>,
          <div key={'div-1'} style={{ width: '30px' }} />,
          <Button
            key={'read-demo-modal-btn-no-1'}
            data-cy={`${cyPrefix}modal-btn-no-cheri`}
            onClick={handleNo}
          >
            NO
          </Button>,
        ]
      : [
          <ButtonBasic
            key={'read-demo-modal-btn-yes-2'}
            data-cy={`${cyPrefix}modal-btn-yes-aarch64`}
            onClick={handleYes}
          >
            YES
          </ButtonBasic>,
          <ButtonBasic
            key={'read-demo-modal-btn-no-2'}
            data-cy={`${cyPrefix}modal-btn-no-aarch64`}
            onClick={handleNo}
          >
            NO
          </ButtonBasic>,
        ]

  return (
    <Row justifyContent={'center'} padding={'10px'}>
      {btn({})}
    </Row>
  )
}

export default function Modal({ update, readDemo, ProgressBar }) {
  const {
    theme,
    showHackingProgress,
    renderModalActions,
    output,
    binaryName,
    password,
  } = readDemo

  const executableAndArgs = `${binaryName}-${theme.arch} ${password} -32 ${
    -32 + password.length
  }`

  return (
    <Window data-cy={'modal-main'} styles={theme.modal.window}>
      <Title title={readDemo.modalTitle} arch={theme.name} />
      <Row>
        <Page {...theme.modal.page}>
          <DemoText data-cy={'modal-main-text'} {...readDemo.txt_col}>
            {readDemo.modalText}
          </DemoText>

          {renderModalActions && renderActions({ readDemo, update })}
          {showHackingProgress && (
            <ProgressBar readDemo={readDemo} update={update} />
          )}
          {readDemo?.switchToMorello && (
            <Button onClick={readDemo.switchToMorello}>TRY</Button>
          )}
          {output ? (
            <Console executable={executableAndArgs} output={output.output} />
          ) : null}
        </Page>
      </Row>
    </Window>
  )
}
