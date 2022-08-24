import React from 'react'
import styled from 'styled-components'

import { Txt_Demo1A, Col, Row, renderTitle, Spacer } from './Common'
import ProgressBar from '../ProgressBar'
import { Context } from '../../utils/context'

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
    update({
      demo1: {
        ...demo1,
        renderModalActions: false,
        showHackingProgress: true,
      },
    })
  }

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

export default function Modal(props) {
  const { demo1, theme } = props
  const { showHackingProgress, renderModalActions } = demo1

  return (
    <Window
      id={'hacker-app-modal'}
      styles={theme.window}
    >
      {renderTitle(demo1.modalTitle)}
      <Row flex={'auto'}>
        <Page {...theme.page}>
          <Txt_Demo1A>{props.modalText}</Txt_Demo1A>
          <Spacer size={10} />
          {renderModalActions && renderActions(props)}
          {showHackingProgress && (
            <Row flex={'auto'} marginTop={'20px'}>
              <ProgressBar {...props} />
            </Row>
          )}
        </Page>
      </Row>
    </Window>
  )
}
