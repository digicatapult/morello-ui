import React from 'react'

import { Container } from './Common'
import dsbdLogo from '../assets/images/logo.png'

export default function Header({ children, styles = {} }) {
  const logo = <img src={dsbdLogo} width={'120px'} height={'35px'} />

  return (
    <Container
      styles={{
        height: '80px',
        size: 10,
        padding: '10px 20px',
        justifyContent: 'flex-start',
        ...styles,
      }}
    >
      {children || logo}
    </Container>
  )
}
