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

export const H1 = styled.h1((props) => ({
  fontFamily: 'AktivGrotesk',
  fontSize: '30px',
  lineHeight: '38px',
  color: '#FFFFFF',
  ...props,
}))

export const P1 = styled.p((props) => ({
  fontFamily: 'AktivGrotesk',
  fontSize: '9px',
  color: '#FFFFFF',
  lineHeight: '11.52px',
  ...props,
}))

export const P2 = styled.p({ fontSize: '0.5em', color: 'palevioletred' })
export const Root = styled.div((props) => ({
  display: 'block',
  alignItems: 'centeer',
  ...params.screen,
  ...props,
}))

export const Wrapper = styled.section(
  ({ width = '100%', height, ...props }) => ({
    ...params.flex,
    width,
    height,
    ...props,
  })
)

export const Item = styled.div(({ size = 1, ...props }) => ({
  ...params.flex,
  alignItems: 'center',
  width: `${size * 10}%`,
  padding: 2,
  ...props,
}))

export const Container = styled.div(({ size = 10, ...props }) => ({
  ...params.flex,
  flexFlow: 'row wrap',
  width: `${size * 10}%`,
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

export const Col = styled.div(({ size = 1, ...props }) => ({
  ...params.flex,
  flexDirection: 'column',
  alignItems: 'center',
  width: `${size * 10}%`,
  height: '100%',
  ...props,
}))
