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

// Size gooes from 1 - 10 multiplied by 10
export const Container = styled.div(({ size = 1, styles = {} }) => ({
  ...params.flex,
  width: `${size * 10}%`,
  ...styles,
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

const Title = styled.p((props) => ({
  fontFamily: 'Monaco',
  fontWeight: 'bold',
  margin: '0px',
  paddingLeft: '10px',
  ...props,
}))

const Circle = styled.div`
  display: block;
  width: 12px;
  height: 12px;
  margin-left: 5px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`

const aarch64Icons = [crossIcon, icon, minimise]
const titleProps = {
  Aarch64: {
    icons: aarch64Icons.map((src) => (
      <Icon key={src} width={'26px'} height={'26px'} src={src} />
    )),
    text: {
      color: '#fff',
    },
    bar: {
      paddingTop: '4px',
      backgroudColor: '#343556',
    },
  },
  Morello: {
    icons: [
      <Circle key={'osx-title-btn-1'} color={'rgb(255, 59, 48)'} />,
      <Circle key={'osx-title-btn-2'} color={'rgb(255, 149, 0)'} />,
      <Circle key={'osx-title-btn-3'} color={'rgb(52, 199, 89)'} />,
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
      background:
        '-webkit-gradient(linear, left top, left bottom, color-stop(0.0, #40303f, color-stop(1.0, #212124)))',
      background: '-webkit-linear-gradient(top, #40303f, #212124)',
      color: '#4d494d',
      height: '30px',
      paddingLeft: '5px',
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
