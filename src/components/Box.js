import React from 'react'
import styled from 'styled-components'

import Input from './shared/Input'
import { Row, Txt_Demo1A, renderTitle } from './shared/Common'
import { Context } from '../utils/context'
import Modal from './shared/Modal'
import ProgressBar from './ProgressBar'

const Window = styled.div((props) => props)
const Body = styled.div((props) => props)

export default function Box(props) {
  const { demo1, update, themes } = React.useContext(Context)
  const { isPasswordSet, renderModal } = demo1
  const theme = themes.Morello

  const date = new Date().toDateString().slice(0, 10)
  const time = new Date().toLocaleTimeString()

  const modalProps = { ...props, theme: theme.modal, demo1, update }

  return (
    <Window {...theme.primary.windowCont}>
      {renderModal &&
        Modal({
          ...modalProps,
          ProgressBar: (props) => <ProgressBar {...props} />,
        })}
      {renderTitle(props.windowTitle)}
      <Row flex={'auto'}>
        <Body {...theme.primary.windowBody}>
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
          {isPasswordSet && (
            <Txt_Demo1A>
              last login: {date} {time}.
              <br />
              <br />
              Password Stored Safely
            </Txt_Demo1A>
          )}
        </Body>
      </Row>
    </Window>
  )
}
