import React from 'react'
import styled from 'styled-components'

import { Txt_Demo1A, Col, Row, renderTitle } from './Common'
import ProgressBar from './Demo1/ProgressBar'

const Button = styled.button`
  width: 20%;
  height: 50px;
  margin-left: 5px;
`

const Window = styled.div((props) => ({
  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  ...props.styles,
}))

const Page = styled(Col)`
  padding: 5px;
  box-sizing: border-box;
  justify-content: space-between;
  outline: 2px solid #FFFFFF;
  outline-offset: -10px;
  box-shadow: 24px 24px 1px rgba(0, 0, 0, 0.8);
`

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
    <Row
      justifyContent={'center'}
      marginRight={'20px'}
      padding={'10px'}
    >
      <Button id={'demo1-modal-btn-yes'} onClick={handleYes}>
        YES
      </Button>
      <Button id={'demo1-modal-btn-no'} onClick={handleNo}>
        NO
      </Button>
    </Row >
  )
}

export default function Modal(props) {
  const { demo1 } = props
  const { showHackingProgress, renderModalActions } = demo1

  return (
    <Window
      id={'hacker-app-modal'}
      styles={{
        position: 'absolute',
        top: '40%',
        left: '40%',
        width: '586px',
        height: '258px',
        background: '#CE1C1C',
      }}
    >
      {renderTitle(demo1.modalTitle)}
      <Row flex={'auto'}>
        <Page>
          <Txt_Demo1A>{props.modalText}</Txt_Demo1A>
          {renderModalActions && renderActions(props)}
          {showHackingProgress && <Row flex={'auto'}>
              <ProgressBar {...props} />
            </Row>}
        </Page>
      </Row>
    </Window>
  )
}
