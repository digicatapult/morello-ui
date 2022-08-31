import styled from 'styled-components'

import backgroundImg from '../assets/images/osx-background.png'
import hacker from '../assets/images/hacker-app-icon.png'
import lockIcon from '../assets/images/lock.png'

export const Morello = {
  name: 'Morello',
  arch: 'cheri',
  header: {
    backgroundColor: '#384D6C',
    width: '100%',
    height: '164px',
  },   
  progressBar: {
    wrapper: {
      height: '12px',
      width: '90%',
      marginLeft: '3%',
      padding: '0px 10px',
    },
    background: {
      height: '50%',
      width: '100%',
      background: '#000',
      padding: '0px',
    },
    bar: {
      position: 'relative',
      height: '50%',
      top: '-50%',
      background: '#fff',
      borderRadius: '5px',
    },
  },
  password: {
    input: {
      width: '250px',
      padding: '6px 12px',
      fontSize: '1.6em',
      color: '#787878',
      letterSpacing: '-0.02em',
      textShadow: '0px 1px 0px #fff',
      outline: 'none',
      background: '-webkit-gradient(linear, left top, left bottom, from(#e0e0e0), to(#ffffff))',
      background: '-moz-linear-gradient(top,  #e0e0e0,  #ffffff)',
      borderRadius: '3px',
      border: '1px solid #717171',
      marginRight: '20px',
    },
    label: {
      fontFamily: 'AktivGrotesk',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '16px',
      lineHeight: '32px',
      htmlFor: 'Password',
      color: '#FFFFFF',
    },
    button: {
      width: '70px',
      background: `url(${lockIcon})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right',
      backgroundSize: 'cover',
      border: '4px solid #FFFFFF',
      borderLeft: 'none',
      cursor: 'pointer',
    },
  },
  wrapper: {
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  icons: {
    hacker,
    style: {
      position: 'absolute',
      left: '20px',
      top: '200px',
      width: '100px',
      textAlign: 'center',
    },
  },
  modal: {
    button: {},
    window: {
      display: 'flex',
      flexDirection: 'column',
      position: 'absolute',
      top: '40%',
      left: '40%',
      width: '586px',
      height: '258px',
      borderRadius: '6px',
      border: '1px solid #818181',
      boxShadow: '0px 0px 4px #818181',
    },
    page: {
      position: 'relative',
      background: '#212124',
      outlineOffset: '-10px',
    },
  },
  Background: styled.div({
    display: 'flex',
    flexDirection: 'column',
    backgroundImage: `url(${backgroundImg})`,
    width: '100%',
    height: '860px',
  }),
  primary: {
    windowCont: {
      background: '#212124',
      width: '826px',
      height: '626px',
      border: '1px solid #818181',
      borderRadius: '6px',
      color: '#fff',
      boxShadow: '0px 0px 4px #818181',
    },
    windowBody: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      width: '100%',
      padding: '10px',
      paddingTop: '40px',
      color: '#fff',
    },
  }
}
