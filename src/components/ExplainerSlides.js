import React from 'react'
import styled from 'styled-components'

import Header from './Header'

const ExplainerWrapper = styled.div`
  width: calc(
    ${({ explainerSize: { width } }) => width}px -
      ${({ crop: { left, right } }) => left + right}px
  );
  height: calc(
    ${({ explainerSize: { height } }) => height}px -
      ${({ crop: { top, bottom } }) => top + bottom}px
  );
  overflow: hidden;
  margin: 0px auto;
`

const ExplainerFrame = styled.iframe`
  position: relative;
  left: -${({ crop: { left } }) => left}px;
  top: -${({ crop: { top } }) => top}px;
`

export default function Explainer(props) {
  const { explainerSrc, crop, nativeSize } = props
  const explainerRef = React.useRef()

  React.useEffect(() => {
    explainerRef.current.focus()
  })

  return (
    <>
      <Header {...props} showClose={true} />
      <ExplainerWrapper explainerSize={nativeSize} crop={crop}>
        <ExplainerFrame
          src={explainerSrc}
          ref={explainerRef}
          frameBorder={'0'}
          width={nativeSize.width}
          height={nativeSize.height}
          crop={crop}
        />
      </ExplainerWrapper>
    </>
  )
}
