import React from 'react'
import styled from 'styled-components'

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

export const Icon = styled.img(({ source, ...props }) => ({
  width: '16px',
  height: '10px',
  marginLeft: '4px',
  src: `${source}`,
  ...props,
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

// TODO extract title to a new file
import crossIcon from '../../assets/images/cross.png'
import minimise from '../../assets/images/minus.png'
import icon from '../../assets/images/icon.png'
import osx_crossIcon from '../../assets/images/osx-minimize.jpeg'
import osx_minimise from '../../assets/images/osx-maximize.jpeg'
import osx_icon from '../../assets/images/osx-icon.jpeg'

const Title = styled.p((props) => ({
  fontFamily: 'Monaco',
  fontWeight: 'bold',
  margin: '0px',
  paddingLeft: '10px',
  ...props,
}))

const Circle = styled.div(({ size = 1, color }) => ({
  display: 'block',
  width: `${size * 15}px`,
  height: `${size * 15}px`,
  marginLeft: '5px',
  borderRadius: '50px',
  backgroundColor: color,
}))

const titleProps = {
  Aarch64: {
    icons: [<Icon src={crossIcon}/>, <Icon src={minimise}/>, <Icon src={icon}/>],
    iconSize: {
      width: '20px',
      height: '20px',
    },
    text: {
      color: '#fff',
    },
    bar: {
      backgroudColor: '#343556',
    },
  },
  Morello: {
    icons: [
      <Circle color='rgb(255, 59, 48)'/>,
      <Circle color='rgb(255, 149, 0)'/>,
      <Circle color='rgb(52, 199, 89)'/>
    ],
    iconSize: {
      width: '16px',
      height: '10px',
    },
    text: {
      fontSize: '11pt',
      color: '#FFF',
    },
    bar: {
      background: '-webkit-gradient(linear, left top, left bottom, color-stop(0.0, #40303f, color-stop(1.0, #000)))',
      background: '-webkit-linear-gradient(top, #40303f, #000)',
      color: '#4d494d',
      height: '30px',
      borderTop: '1px solid #001',
      borderBottom: '1px solid #000',
      borderTopLeftRadius: '6px',
      borderTopRightRadius: '6px',
      userSelect: 'none',
    },
    addHoc: {},
  },
}

export const renderTitle = (title, arch) => {
  const props = titleProps[arch]

  return (
    <Row alignItems={'center'} {...props.bar}>
      {props.icons.map((icon) => icon)}
      <Title {...props.text}>{title}</Title>
    </Row>
  )
}