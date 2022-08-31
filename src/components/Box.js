import React from 'react'
import styled from 'styled-components'

import Input from './shared/Input'
import { Row, Txt_Demo1A, renderTitle } from './shared/Common'
import { Context } from '../utils/context'
import Modal from './shared/Modal'
import KeychainIcon from '../assets/images/keychain-strip.png'
import ProgressBar from './ProgressBar'

const Window = styled.div((props) => props)
const Body = styled.div((props) => ({
  width: '100%',
  ...props,
}))

export default function Box(props) {
  const { demo1, update } = React.useContext(Context)
  const { isPasswordSet, renderModal } = demo1
  const { theme } = props

  const date = new Date().toDateString().slice(0, 10)
  const time = new Date().toLocaleTimeString()
  const modalProps = { ...props, demo1, update }
  const isMorello = theme.name === 'Morello'
  const font = isMorello 
    ? { fontFamily: 'AktivGrotesk', color: '#fff' }
    : { fontFamily: 'Monaco', color: '#000' }

  return (
    <Window {...theme.primary.windowCont}>
      {renderModal &&
        Modal({
          ...modalProps,
          ProgressBar: (props) => <ProgressBar {...props} />,
        })}
      {renderTitle(props.windowTitle, theme.name)}
      <Row flex={'auto'}>
        <Body {...theme.primary.windowBody}>
          {(!isPasswordSet || isMorello) && (
            <>
            <Row justifyContent={'center'} marginTop={isMorello ? '49px' : '0px'}>
              {isMorello && <img src={KeychainIcon} width={50}/>}
              <Txt_Demo1A {...font}>
                This application will store your password securely.
                <br />
                Please input a keyword of choice.
              </Txt_Demo1A>
            </Row>
            <Input theme={theme}/>
            </>
          )}
          {(isPasswordSet && !isMorello) && (
            <Txt_Demo1A {...font}>
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
