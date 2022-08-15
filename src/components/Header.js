import React from 'react'

import { Container } from './Common'
import dsbdLogo from '../assets/images/logo.png'

export default function Header({ children, styles = {} }) {
  const logo = <img src={dsbdLogo} width={'120px'} height={'34px'} />

  return (
    <Container
      styles={{
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