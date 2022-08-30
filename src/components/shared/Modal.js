import React from 'react'
import styled from 'styled-components'

import { Txt_Demo1A, Col, Row, renderTitle, Spacer } from './Common'

const Button = styled.button`
  width: 20%;
  height: 50px;
  margin-left: 5px;
`
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
    // returns a password 
    // 
    update({
      demo1: {
        ...demo1,
        renderModalActions: false,
        showHackingProgress: true,
      },
    })
  }

  // TODO adjust for morello theme
  return (
    <Row justifyContent={'center'} marginRight={'20px'} padding={'10px'}>
      <Button id={'demo1-modal-btn-yes'} onClick={handleYes}>
        YES
      </Button>
      <Button id={'demo1-modal-btn-no'} onClick={handleNo}>
        NO
      </Button>
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
          <Txt_Demo1A>{demo1.modalText}</Txt_Demo1A>
          <Spacer size={10} />
          
          {renderModalActions && renderActions({ demo1, update })}
          {showHackingProgress && (
            <Row height={'50px'} flex={'auto'} marginTop={'20px'}>
              <ProgressBar demo1={demo1} update={update} />
            </Row>
          )}
        </Page>
      </Row>
    </Window>
  )
}
