import React from 'react'
import styled from 'styled-components'

import Input from './Input'
import { Row, Txt_Demo1A, renderTitle } from './Common'
import { Context } from '../utils/context'
import Modal from './Modal'
import ProgressBar from './ProgressBar'

const Window = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 826px;
  height: 626px;
  box-shadow: 24px 24px 1px rgba(0, 0, 0, 0.8);
  background: ${(props) => props.background};
`

const Body = styled.div({
  boxSizing: 'border-box',
  height: '100%',
  width: '100%',
  padding: '10px',
  outline: '2px solid #FFFFFF',
  outlineOffset: '-10px',
})

export default function Box(props) {
  const { demo1, update } = React.useContext(Context)
  const { isPasswordSet, renderModal } = demo1

  const date = new Date().toDateString().slice(0, 10)
  const time = new Date().toLocaleTimeString()

  return (
    <Window background={props}>
      {renderModal &&
        Modal({
          ...props,
          demo1,
          update,
          ProgressBar: (props) => <ProgressBar {...props} />,
        })}
      {renderTitle(props.windowTitle)}
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
