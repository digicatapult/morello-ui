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

const ExplainerImage = styled.img`
  position: relative;
  left: -${({ crop: { left } }) => left}px;
  top: -${({ crop: { top } }) => top}px;
`

export default function Explainer(props) {
  const { images, crop, nativeSize } = props
  const explainerRef = React.useRef()
  const [currentSlide, setCurrentSlide] = React.useState(0)

  const imageCount = images.length
  const prevSlide = React.useCallback(() => {
    if (currentSlide !== 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }, [currentSlide])
  const nextSlide = React.useCallback(() => {
    if (currentSlide !== imageCount - 1) {
      setCurrentSlide(currentSlide + 1)
    }
  }, [currentSlide, imageCount])

  React.useEffect(() => {
    const eventListener = (event) => {
      switch (event.key) {
        case 'ArrowRight':
          return nextSlide()
        case 'ArrowLeft':
          return prevSlide()
        default:
          return
      }
    }
    window.addEventListener('keydown', eventListener)
    return () => {
      window.removeEventListener('keydown', eventListener)
    }
  }, [nextSlide, prevSlide])

  return (
    <>
      <Header {...props} showClose={true} />
      <ExplainerWrapper explainerSize={nativeSize} crop={crop}>
        <ExplainerImage
          src={images[currentSlide]}
          ref={explainerRef}
          onClick={nextSlide}
          frameBorder={'0'}
          width={nativeSize.width}
          height={nativeSize.height}
          crop={crop}
        />
      </ExplainerWrapper>
    </>
  )
}
