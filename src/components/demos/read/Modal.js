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

// giving default value to avoid bugs in case this is undefined
const renderActions = ({ update, type = 'readDemo', ...props }) => {
  const handleNo = (e) => {
    e.preventDefault()
    update({
      [type]: {
        ...props,
        renderModal: false,
        renderModalActions: true,
      },
    })
  }
  const handleYes = (e) => {
    e.preventDefault()
    update({
      [type]: {
        ...props,
        renderModalActions: false,
        showHackingProgress: true,
      },
    })
  }

  const btn = ({ cyPrefix = '' }) =>
    props.theme.name === 'Morello'
      ? [
          <Button key={'read-demo-modal-btn-yes-1'} onClick={handleYes}>
            <DemoText
              data-cy={`${cyPrefix}modal-btn-yes-cheri`}
              {...props.theme.font}
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
              {...props.theme.font}
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
              {...props.theme.font}
              color={'#000'}
              margin={'0'}
            >
              YES
            </DemoText>
          </ButtonBasic>,
          <ButtonBasic key={'read-demo-modal-btn-no-2'} onClick={handleNo}>
            <DemoText
              data-cy={`${cyPrefix}modal-btn-no-aarch64`}
              {...props.theme.font}
              color={'#000'}
              margin={'0'}
            >
              NO
            </DemoText>
          </ButtonBasic>,
        ]
  return (
    <Row justifyContent={'center'} padding={'10px'}>
      {btn({ cyPrefix: `${props.path}-` })}
    </Row>
  )
}

export default function Modal({ update, readDemo, ProgressBar }) {
  const { theme, showHackingProgress, renderModalActions } = readDemo

  return (
    <Window data-cy={`${props.path}-modal`} styles={theme.modal.window}>
      <Title title={props.modalTitle} theme={theme} />
      <Row>
        <Page {...theme.modal.page}>
          <DemoText
            data-cy={`${props.path}-modal-text`}
            {...props.theme.font}
            color={'#fff'}
          >
            {props.message || props.modalText}
          </DemoText>
          {renderModalActions && renderActions({ ...props, update, type })}
          {showHackingProgress && (
            <ProgressBar readDemo={props} update={update} />
          )}
          {props.output && (
            <Console
              executable={props.args}
              output={props.output.output}
              show={props.show}
            />
          )}
        </Page>
      </Row>
    </Window>
  )
}
