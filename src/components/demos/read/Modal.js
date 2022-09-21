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
          <Button key={'read-demo-modal-btn-yes-1'} onClick={handleYes}>
            <DemoText
              data-cy={`${cyPrefix}modal-btn-yes-cheri`}
              {...readDemo.theme.font}
              color={'#fff'}
              margin={'0'}
            >
              YES
            </DemoText>
          </Button>,
          <div key={'div-1'} style={{ width: '30px' }} />,
          <Button key={'read-demo-modal-btn-no-1'} onClick={handleNo}>
            <DemoText
              data-cy={`${cyPrefix}modal-btn-no-cheri`}
              {...readDemo.theme.font}
              color={'#fff'}
              margin={'0'}
            >
              NO
            </DemoText>
          </Button>,
        ]
      : [
          <ButtonBasic key={'read-demo-modal-btn-yes-2'} onClick={handleYes}>
            <DemoText
              data-cy={`${cyPrefix}modal-btn-yes-aarch64`}
              {...readDemo.theme.font}
              color={'#000'}
              margin={'0'}
            >
              YES
            </DemoText>
          </ButtonBasic>,
          <ButtonBasic key={'read-demo-modal-btn-no-2'} onClick={handleNo}>
            <DemoText
              data-cy={`${cyPrefix}modal-btn-no-aarch64`}
              {...readDemo.theme.font}
              color={'#000'}
              margin={'0'}
            >
              NO
            </DemoText>
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
    secret,
  } = readDemo

  const executableAndArgs = `${binaryName}-${theme.arch} ${secret} -32 ${
    -32 + secret.length
  }`

  return (
    <Window data-cy={'modal-main'} styles={theme.modal.window}>
      <Title title={readDemo.modalTitle} theme={theme} />
      <Row>
        <Page {...theme.modal.page}>
          <DemoText
            data-cy={'modal-main-text'}
            {...readDemo.theme.font}
            color={'#fff'}
          >
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
