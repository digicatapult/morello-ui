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

  return (
    <Row justifyContent={'center'} padding={'10px'}>
      {btn()}
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
    <Window data-cy={`${path}-modal`} styles={theme.modal.window}>
      <Title title={state.modalTitle} arch={theme.name} />
      <Row>
        <Page {...theme.modal.page}>
          <DemoText {...state.txt_col}>{details || state.modalText}</DemoText>

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
