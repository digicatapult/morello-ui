import React from 'react'

import { Context } from '../utils/context'
import { Container, H1 } from './Common'
import dsbdLogo from '../assets/images/logo.png'

export default function Header({ children, styles = {} }) {
  const logo = <img src={dsbdLogo} width={'120px'} height={'34px'} />
  const state = React.useContext(Context)

  return (
    <Container
      size={7.5}
      styles={{
        margin: 'auto',
        height: '80px',
        padding: '10px 20px',
        alignItems: 'center',
        justifyContent: 'flex-start',
        ...styles,
      }}
    >
      {children || logo}
    </Container>
  )
}
