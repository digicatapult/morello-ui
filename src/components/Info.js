import React from 'react'
import styled from 'styled-components'

import Header from './Header'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

const Content = styled.div`
  display: flex;
  background: #F0F0F0;
  justify-content: center;
  height 100%;
  padding-top: 32px;
  padding-left: 16px;
  padding-right: 16px;
`

const ScreenshotPicture = styled.picture`
  align-self: start;
`

const Screenshot = styled.img`
  max-width: 100%;
`

const QrCodeWrap = styled.a`
  margin-left: -100px;
  align-self: end;
`

const QrCode = styled.img`
  max-width: 400px;
`

export default function Demo1(props) {
  return (
    <Wrapper>
      <Header {...props} showClose={true} />
      <Content>
        <ScreenshotPicture>
          <source srcSet={`${props.imageName}.webp`} type={'image/webp'} />
          <source srcSet={`${props.imageName}.avif`} type={'image/avif'} />
          <Screenshot
            src={`${props.imageName}.png`}
            alt={`Image of website: ${props.link}`}
          />
        </ScreenshotPicture>
        <QrCodeWrap href={props.link}>
          <QrCode
            src={`${props.qrCode}.svg`}
            alt={`QR code link to ${props.link}`}
          />
        </QrCodeWrap>
      </Content>
    </Wrapper>
  )
}
