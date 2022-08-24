import React from 'react'
import styled from 'styled-components'

import crossIcon from '../assets/images/cross.png'
import minimise from '../assets/images/minus.png'
import icon from '../assets/images/icon.png'

const params = {
  screen: {
    width: '100%',
    height: '100%',
  },
  flex: {
    display: 'flex',
    justifyContent: 'center',
    flexGrow: 1,
  },
}

export const Icon = styled.img(({ source }) => ({
  width: '20px',
  height: '20px',
  marginLeft: '4px',
  src: `${source}`,
}))

export const H1 = styled.h1((props) => ({
  fontFamily: 'AktivGrotesk',
  fontSize: '30px',
  lineHeight: '38px',
  color: '#FFFFFF',
  ...props,
}))

// Icon heading text
export const H2 = styled.p({
  fontFamily: 'AktivGrotesk',
  fontSize: '16px',
  margin: '10px auto',
  color: '#FFFFFF',
  lineHeight: '11.52px',
})

/* move this to Common.js as part of typography */
export const Txt_Demo1A = styled.p((props) => ({
  fontFamily: 'Monaco',
  fontSize: '18px',
  color: '#FFFFFF',
  fontWeight: '100',
  margin: '0px',
  padding: '10px',
  ...props,
}))

export const P1 = styled.p((props) => ({
  fontFamily: 'AktivGrotesk',
  fontSize: '9px',
  color: '#FFFFFF',
  ...props,
}))

export const Root = styled.div((props) => ({
  display: 'block',
  alignItems: 'center',
  ...params.screen,
  ...props,
}))

// Size gooes from 1 - 10 multiplied by 10
export const Container = styled.div(({ size = 1, styles = {} }) => ({
  ...params.flex,
  width: `${size * 10}%`,
  ...styles,
}))

export const Title = styled.p((props) => ({
  fontFamily: 'Monaco',
  fontSize: '32px',
  color: '#FFFFFF',
  fontWeight: '100',
  margin: '0px',
  paddingLeft: '10px',
  ...props,
}))

export const Spacer = styled.div(({ size = 1 }) => ({
  width: '100%',
  height: `${size}px`,
}))

export const Row = styled.div((props) => ({
  display: 'flex',
  width: '100%',
  justifyContent: 'flex-start',
  flexDirection: 'row',
  ...props,
}))

export const Col = styled.div(({ size = 1, styles }) => ({
  ...params.flex,
  flexDirection: 'column',
  alignItems: 'center',
  width: `${size * 10}%`,
  height: '100%',
  ...styles,
}))

export const RowSpacer = styled.div(({ size = 1 }) => ({
  height: '100%',
  width: `${size * 10}%`,
}))

export const renderTitle = (title) => <Row paddingLeft={'5px'} alignItems={'center'}>
  <Icon src={crossIcon} />
  <Icon src={minimise} />
  <Icon src={icon} />
  <Title>{title}</Title>
</Row>
