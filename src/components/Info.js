import React from 'react'
import styled from 'styled-components'

import Header from './Header'

const Content = styled.div`
  display: grid;
  grid-area: body;
  grid-template-columns: minmax(auto, 60vw) minmax(auto, 20vw);
  justify-content: center;
  background: #f0f0f0;
  padding: 50px 0;
`

const ScreenshotPicture = styled.picture`
  margin-right: -100px;
`

const Screenshot = styled.img`
  max-width: 100%;
`

const QrCodeWrap = styled.a`
  align-self: end;
`

const QrCode = styled.img`
  min-width: 200px;
  max-width: 25vw;
`

export default function Demo1(props) {
  return (
    <>
      <Header {...props} showClose={true} />
      <Content>
        <ScreenshotPicture>
          <source srcSet={props.screenshot.webp} type={'image/webp'} />
          <source srcSet={props.screenshot.avif} type={'image/avif'} />
          <Screenshot
            data-cy={`${props.path}-screenshot`}
            src={props.screenshot.png}
            alt={`Image of website: ${props.link}`}
          />
        </ScreenshotPicture>
        <QrCodeWrap href={props.link}>
          <QrCode
            data-cy={`${props.path}-qr`}
            src={`${props.qrCode}`}
            alt={`QR code link to ${props.link}`}
          />
        </QrCodeWrap>
      </Content>
    </>
  )
}
