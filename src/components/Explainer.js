import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

import Header from './shared/Header'
import { ButtonSide } from './shared/Buttons'

const ExplainerWrapper = styled.div`
  width: min(
    calc(100vw - 20vw),
    calc((100vh - 10vh - 164px) * ${({ aspectRatio }) => aspectRatio})
  );
  height: min(
    calc(100vh - 10vh - 164px),
    calc((100vw - 20vw) / ${({ aspectRatio }) => aspectRatio})
  );
  overflow: hidden;
  align-self: center;
  justify-self: center;
`

const ExplainerImage = styled.img`
  width: 100%;
  height: 100%;
`

export default function Explainer(props) {
  const { images, nativeSize } = props
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const nav = useNavigate()

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

  const isLastSlide = currentSlide >= images.length - 1

  return (
    <>
      <Header {...props} showClose={true} />
      <ExplainerWrapper aspectRatio={nativeSize.width / nativeSize.height}>
        <ExplainerImage
          src={images[currentSlide]}
          width={nativeSize.width}
          height={nativeSize.height}
          onClick={nextSlide}
        />
      </ExplainerWrapper>
      {isLastSlide && (
        <ButtonSide
          message={'Back to Menu'}
          action={(e) => {
            nav('/')
            e.preventDefault()
          }}
        />
      )}
    </>
  )
}
