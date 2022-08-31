import styled from 'styled-components'

import backgroundImg from '../assets/images/background.png'
import hacker from '../assets/images/hacker-app-icon.png'
import lockIcon from '../assets/images/lock.png'

export const Aarch64 = {
  name: 'Aarch64',
  arch: 'aarch64',
  header: {
    backgroundColor: '#384D6C',
    width: '100%',
    height: '164px',
  },
  progressBar: {
    wrapper: {
      height: '22px',
      width: '100%',
      padding: '0px 10px',
    },
    background: {
      height: '50%',
      width: '100%',
      background: '#979797',
      padding: '0px',
    },
    bar: {
      position: 'relative',
      height: '50%',
      top: '-50%',
      background: '#d9d9d9',
    },
  },
  password: {
    input: {
      width: '350px',
      backgroundColor: '#343556',
      border: '4px solid #FFFFFF',
      color: '#FFFFFF',
      height: '60px',
      fontSize: '48px',
      fontFamily: 'asterisk',
      speak: 'none',
      borderRight: 'none',
    },
    label: {
      fontFamily: 'Monaco',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '24px',
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
  menuItemWrap: {
    display: 'flex',
    width: '300px',
    padding: 2,
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
      position: 'relative',
      flexDirection: 'column',
      position: 'absolute',
      top: '40%',
      left: '40%',
      width: '586px',
      height: '258px',
      background: '#CE1C1C',
    },
    page: {
      padding: '10px',
      boxSizing: 'border-box',
      justifyContent: 'space-between',
      outline: '2px solid #ffffff',
      outlineOffset: '-10px',
      boxShadow: '24px 24px 1px rgba(0, 0, 0, 0.8)',
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
      display: 'flex',
      position: 'relative',
      flexDirection: 'column',
      width: '826px',
      height: '626px',
      boxShadow: '24px 24px 1px rgba(0, 0, 0, 0.8)',
      background: '#343556',
    },
    windowBody: {
      boxSizing: 'border-box',
      height: '100%',
      width: '100%',
      padding: '10px',
      outline: '2px solid #FFFFFF',
      outlineOffset: '-10px',
    },
  }
}
