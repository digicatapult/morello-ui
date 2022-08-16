import React from 'react'
import styled from 'styled-components'

import Input from './Input'
import { Col, Row, Spacer, Txt_Demo1A } from '../Common'
import { Context } from '../../utils/context'
import ProgressBar from './ProgressBar'

import crossIcon from '../../assets/images/cross.png'
import minimise from '../../assets/images/minus.png'
import icon from '../../assets/images/icon.png'

/* Same should be moved to Common.js as part of typography */
export const Title = styled.p((props) => ({
  fontFamily: 'Monaco',
  fontSize: '32px',
  color: '#FFFFFF',
  fontWeight: '100',
  margin: '0px',
  paddingLeft: '10px',
  ...props,
}))

const Icon = styled.img(({ source }) => ({
  width: '20px',
  height: '20px',
  marginLeft: '4px',
  src: `${source}`,
}))

const Container = styled.div((props) => ({
  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  width: '826px',
  height: '626px',
  boxShadow: '24px 24px 1px rgba(0, 0, 0, 0.8)',
  ...props,
}))

const Body = styled.div({
  boxSizing: 'border-box',
  height: '100%',
  width: '100%',
  padding: '10px',
  outline: '2px solid #FFFFFF',
  outlineOffset: '-10px',
})

function Modal(props) {
  const [modal, setModal] = React.useState({
    renderActions: true,
    showHacking: false,
  })
  const { update, demo1 } = React.useContext(Context)

  const handleNo = (e) => {
    e.preventDefault()
    update({
      demo1: {
        ...demo1,
        renderModal: false,
      }
    })
  }

  const handleYes = (e) => {
    e.preventDefault()
    setModal({
      renderActions: false,
      showHacking: true,
    })
  }

  return (
    <Container
      position={'absolute'}
      top={'40%'}
      left={'40%'}
      width={'586px'}
      height={'258px'}
      background={'#CE1C1C'}
    >
      <Row paddingLeft={'5px'} alignItems={'center'}>
        <Icon src={crossIcon} />
        <Icon src={minimise} />
        <Icon src={icon} />
        <Title>{props.modalTitle}</Title>
      </Row>
      <Row flex={'auto'}>
        <Col
          padding={'5px'}
          boxSizing={'border-box'}
          justifyContent={'space-between'}
          outline={'2px solid #FFFFFF'}
          outlineOffset={'-10px'}
        >
          <Txt_Demo1A>{props.modalText}</Txt_Demo1A>
          {modal.renderActions && <Row justifyContent={'flex-end'} marginRight={'20px'} padding={'10px'}>
            <button onClick={handleYes}>yes</button>
            <button onClick={handleNo}>no</button>
          </Row>}
          {modal.showHacking && <Row flex={'auto'}>
            <ProgressBar progress={2}/>
          </Row>}
        </Col>
      </Row>
    </Container>
  )
}

export default function Box(props) {
  const { demo1: { isPasswordSet, renderModal } } = React.useContext(Context)

  const date = new Date().toDateString().slice(0, 10)
  const time = new Date().toLocaleTimeString()

  return (
    <Container background={props.background}>
      {renderModal && Modal(props)}
      <Row paddingLeft={'5px'} alignItems={'center'}>
        <Icon src={crossIcon} />
        <Icon src={minimise} />
        <Icon src={icon} />
        <Title>{props.windowTitle}</Title>
      </Row>
      <Row flex={'auto'}>
        <Body>
          {!isPasswordSet && (
            <>
              <Txt_Demo1A>
                This application will store your password securely.
                <br />
                Please input a keyword of choice.
              </Txt_Demo1A>
              <Input />
            </>
          )}
          {isPasswordSet && <Txt_Demo1A>
            last login: {date} {time}.
            <br />
            <br />
            Password Stored Safely
          </Txt_Demo1A>}
        </Body>
      </Row>
    </Container>
  )
}
