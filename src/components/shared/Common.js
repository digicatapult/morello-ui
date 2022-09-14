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

// Icon heading text
export const H2 = styled.p({
  fontFamily: 'AktivGrotesk',
  fontSize: '16px',
  margin: '10px auto',
  color: '#FFFFFF',
  lineHeight: '11.52px',
})

export const DemoText = styled.p((props) => ({
  fontFamily: 'Monaco',
  fontSize: '18px',
  color: '#FFFFFF',
  fontWeight: '100',
  margin: '0px',
  padding: '10px',
  ...props,
}))

export const OutputText = styled.p((props) => ({
  fontFamily: 'Monaco',
  fontSize: '18px',
  fontWeight: '100',
  margin: '0px',
  marginTop: '18px',
  background: 'black',
  color: 'limegreen',
  overflow: 'scroll',
  maxHeight: '170px',
  ...props,
}))

export const P1 = styled.p((props) => ({
  fontFamily: 'AktivGrotesk',
  fontSize: '9px',
  color: '#FFFFFF',
  ...props,
}))

// Size goes from 1 - 10 multiplied by 10
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
