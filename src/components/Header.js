import React from 'react'
import { Container } from './Common'
import dsbdLogo from '../assets/images/logo.png'

export default function Header({ custom }) {
  const logo = <img src={dsbdLogo} width={'120px'} height={'35px'} />

  return (
    <Container
      height={'80px'}
      padding={'10px 20px'}
      justifyContent={'flex-start'}
    >
      {custom || logo}
    </Container>
  )
}
