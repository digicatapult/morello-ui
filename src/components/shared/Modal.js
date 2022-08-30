import React from 'react'
import styled from 'styled-components'

import { Button, ButtonBasic } from './Buttons'
import { Txt_Demo1A, Col, Row, renderTitle, Spacer } from './Common'

const Window = styled.div(({ styles }) => styles)
const Page = styled(Col)((props) => props)

const renderActions = ({ update, demo1 }) => {
  const handleNo = (e) => {
    e.preventDefault()
    update({
      demo1: {
        ...demo1,
        renderModal: false,
        renderModalActions: true,
      },
    })
  }

  const handleYes = (e) => {
    e.preventDefault()
    update({
      demo1: {
        ...demo1,
        renderModalActions: false,
        showHackingProgress: true,
      },
    })
  }

  const btn = () => demo1.theme.name === 'Morello'
    ? [<Button id={'demo1-modal-btn-yes'} onClick={handleYes}>YES</Button>, <div style={{ width: '30px' }}/>,
      <Button id={'demo1-modal-btn-no'} onClick={handleNo}>NO</Button>]
    : [<ButtonBasic id={'demo1-modal-btn-no'} onClick={handleYes}>YES</ButtonBasic>,
      <ButtonBasic id={'demo1-modal-btn-no'} onClick={handleNo}>NO</ButtonBasic>]

  return (
    <Row justifyContent={'center'} padding={'10px'}>
      {btn()}
    </Row>
  )
}

export default function Modal({ update, demo1, ProgressBar }) {
  const { theme, showHackingProgress, renderModalActions } = demo1

  return (
    <Window id={'hacker-app-modal'} styles={theme.modal.window}>
      {renderTitle(demo1.modalTitle, theme.name)}
      <Row flex={'auto'}>
        <Page {...theme.modal.page}>
          <Txt_Demo1A {...demo1.txt_col}>{demo1.modalText}</Txt_Demo1A>
          <Spacer size={10} />
          
          {renderModalActions && renderActions({ demo1, update })}
          {showHackingProgress && (
            <Row height={'50px'} flex={'auto'} marginTop={'20px'}>
              <ProgressBar demo1={demo1} update={update} />
            </Row>
          )}
          {demo1?.switchToMorello && <Button onClick={demo1.switchToMorello}>TRY</Button>}
        </Page>
      </Row>
    </Window>
  )
}
