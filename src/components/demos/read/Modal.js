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

const renderActions = ({ update, state, type }) => {
  const handleNo = (e) => {
    e.preventDefault()
    update({
      [type]: {
        ...state,
        renderModal: false,
        renderModalActions: true,
      },
    })
  }

  const handleYes = (e) => {
    e.preventDefault()
    update({
      [type]: {
        ...state,
        renderModalActions: false,
        showHackingProgress: true,
      },
    })
  }

<<<<<<< HEAD
<<<<<<< HEAD
  const btn = () =>
    state.theme.name === 'Morello'
      ? [
        <Button
          key={`${state.path}-modal-btn-yes-1`}
          data-cy={`${state.path}-modal-btn-yes-1`}
          onClick={handleYes}
        >
          YES
        </Button>,
        <div key={'div-1'} style={{ width: '30px' }} />,
        <Button
          key={`${state.path}-modal-btn-no-1`}
          data-cy={`${state.path}-modal-btn-no-1`}
          OnClick={handleNo}
        >
          NO
        </Button>,
      ]
      : [
        <ButtonBasic
          key={`${state.path}-modal-btn-yes-2`}
          data-cy={`${state.path}-modal-btn-yes-2`}
          onClick={handleYes}
        >
          YES
        </ButtonBasic>,
        <ButtonBasic
          key={`${state.path}-modal-btn-no-2`}
          data-cy={`${state.path}-modal-btn-no-2`}
          onClick={handleNo}
        >
          NO
        </ButtonBasic>,
      ]
=======
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
=======
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
>>>>>>> main
          </ButtonBasic>,
        ]
>>>>>>> main

  return (
    <Row justifyContent={'center'} padding={'10px'}>
      {btn({})}
    </Row>
  )
}

export default function Modal({ type, update, state, ProgressBar, details = undefined }) {
  const {
    theme,
    showHackingProgress,
    renderModalActions,
    output,
    binaryName,
    password,
    path
  } = state

  const executableAndArgs = `${binaryName}-${theme.arch} ${password} -32 ${-32 + password.length}`

  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <Window data-cy={`${path}-modal`} styles={theme.modal.window}>
      <Title title={state.modalTitle} arch={theme.name} />
      <Row>
        <Page {...theme.modal.page}>
          <DemoText {...state.txt_col}>{details || state.modalText}</DemoText>
=======
    <Window data-cy={'modal-main'} styles={theme.modal.window}>
      <Title title={readDemo.modalTitle} arch={theme.name} />
      <Row>
        <Page {...theme.modal.page}>
          <DemoText data-cy={'modal-main-text'} {...readDemo.txt_col}>
            {readDemo.modalText}
          </DemoText>
>>>>>>> main
=======
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
>>>>>>> main

          {renderModalActions && renderActions({ state, update, type })}
          {showHackingProgress && <ProgressBar readDemo={state} update={update} />}
          {output ? (
            <Console executable={executableAndArgs} output={output.output} />
          ) : null}
        </Page>
      </Row>
    </Window>
  )
}
