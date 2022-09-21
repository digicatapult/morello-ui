import React from 'react'
import styled from 'styled-components'

import { Button, ButtonBasic } from '../../shared/Buttons'
import { DemoText, Col, Row } from '../../shared/Common'
import Title from '../../shared/Title'
import Console from '../../shared/Console'

const Window = styled.div(({ styles }) => styles)
const Page = styled(Col)`${(props) => props}`

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

export default function Modal({ update, ...props }) {
  const {
    theme,
    showHackingProgress,
    renderModalActions,
    output: response,
    message,
    ProgressBar,
    path
  } = props
  
  return (
    <Window data-cy={`${path}-modal`} styles={theme.modal.window}>
      <Title title={props.modalTitle} theme={theme} />
      <Row>
        <Page {...theme.modal.page}>
          <DemoText
            data-cy={'modal-main-text'}
            {...props.theme.font}
            color={'#fff'}
          >
            {messsage || props.modalText}
          </DemoText>
          {renderModalActions && renderActions({ ...props, update, type: props.type })}
          {showHackingProgress && <ProgressBar readDemo={props} update={update} />}
          {response ? (
            <Console executable={props.args} output={response.output} show={props.show} />
          ) : null}
        </Page>
      </Row>
    </Window>
  )
}
