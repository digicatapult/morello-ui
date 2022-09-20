import React from 'react'
import styled from 'styled-components'

import crossIcon from '../../assets/images/cross.png'
import minimise from '../../assets/images/minus.png'
import icon from '../../assets/images/icon.png'

import { Row } from './Common'

const TitleText = styled.p((props) => ({
  fontWeight: 'bold',
  margin: '0px',
  paddingLeft: '10px',
  fontFamily: props.fontFamily,
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

export const Icon = styled.img(({ source, ...props }) => ({
  width: '16px',
  height: '10px',
  marginLeft: '4px',
  src: `${source}`,
  ...props,
}))

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

export default function Title({ title, theme }) {
  const props = titleProps[theme.name]

  return (
    <Row alignItems={'center'} {...props.bar}>
      {props.icons.map((icon) => icon)}
      <TitleText {...theme.font} {...props.text}>
        {title}
      </TitleText>
    </Row>
  )
}
