import styled from 'styled-components'

import backgroundImg from '../assets/images/osx-background.png'
import icon from '../assets/images/hacker-app-icon-morello.png'
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
      background:
        '-webkit-gradient(linear, left top, left bottom, from(#e0e0e0), to(#ffffff))',
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
      color: '#fff',
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
    icon,
    style: {
      position: 'absolute',
      left: '20px',
      top: '200px',
      width: '60px',
      textAlign: 'center',
    },
  },
  modal: {
    button: {
      display: 'inline-block',
      backgroundSize: '100% 60%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 50%',
      borderRadius: '5px',
      padding: '0px',
      boxSizing: 'border-box',
      minWidth: '200px',
      minHeight: '32px',
      maxHeight: '64px',
      border: '1 solid',
    },
    window: {
      display: 'flex',
      flexDirection: 'column',
      position: 'absolute',
      top: '40%',
      left: '40%',
      width: '585px',
      height: '258px',
      maxHeight: '358px',
      borderRadius: '6px',
      border: '1px solid #818181',
      boxShadow: '0px 0px 4px #818181',
    },
    page: {
      position: 'relative',
      background: '#212124',
      outlineOffset: '-10px',
      padding: '5px;',
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
      background: '#fff',
      width: '826px',
      height: '626px',
      border: '1px solid #818181',
      borderRadius: '6px',
      color: '#fff',
      boxShadow: '0px 0px 4px #818181',
    },
    windowBody: {},
  },
}
