import styled from 'styled-components'

const params = {
  w: '100%',
  h: 800,
  flex: {
    display: 'flex',
    justifyContent: 'flex-start',
    justifyContent: 'flex-start',
    flexGrow: 1,
  }
}

export const H1 = styled.h1({ fontSize: '1.75em', color: 'palevioletred', textAlign: 'center' })
export const H2 = styled.h1({ fontSize: '1.5em', color: 'palevioletred' })
export const P1 = styled.p({ fontSize: '0.75em', color: 'palevioletred' })
export const P2 = styled.p({ fontSize: '0.5em', color: 'palevioletred' })

export const Root = styled.div(props => ({
  display: 'block',
  width: params.w,
  height: params.h,
  backgroundColor: 'red',
  ...props,
}))

export const Wrapper = styled.section(({ width = '100%', height, ...props}) => ({
  width: props.width,
  height: props.height,
  ...props,
}))


export const Item = styled.div(({ size = 1, ...props }) => ({
  ...params.flex,
  alignItems: 'center',
  width: `${size * 10}%`,
  height: '100%',
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

export const Container = styled.div(({ size = 10, ...props }) => ({
  ...params.flex,
  flexFlow: 'row wrap',
  width: `${size * 10}%`,
  ...props,
}))


