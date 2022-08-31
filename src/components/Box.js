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

export default function Box(demo1) {
  const { update } = React.useContext(Context)
  const { theme, isPasswordSet, renderModal } = demo1

  const date = new Date().toDateString().slice(0, 10)
  const time = new Date().toLocaleTimeString()
  const isMorello = theme.name === 'Morello'
  const font = isMorello 
    ? { fontFamily: 'AktivGrotesk', color: '#000' }
    : { fontFamily: 'Monaco', color: '#fff' }

  return (
    <Window {...theme.primary.windowCont}>
      {renderModal &&
        Modal({
          update,
          demo1,
          ProgressBar: (props) => <ProgressBar {...props} />,
        })}
      {renderTitle(demo1.windowTitle, theme.name)}
      <Row flex={'auto'}>
        <Body {...theme.primary.windowBody}>
          {(!isPasswordSet) && (
            <>
            <Row justifyContent={theme.name === 'Morello' ? 'center' : 'flex-start'} marginTop={isMorello ? '49px' : '0px'}>
              {isMorello && <img src={KeychainIcon} width={50}/>}
              <Txt_Demo1A {...font}>
                This application will store your password securely.
                <br />
                Please input a keyword of choice.
              </Txt_Demo1A>
            </Row>
            <Input {...demo1}/>
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
