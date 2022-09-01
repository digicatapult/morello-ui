import styled from 'styled-components'

import backgroundImgOsx from '../assets/images/osx-background.png'
import iconOsx from '../assets/images/hacker-app-icon-morello.png'
import lockIconOsx from '../assets/images/lock.png'

import backgroundImg from '../assets/images/background.png'
import iconImg from '../assets/images/hacker-app-icon.png'
import lockIconImg from '../assets/images/lock.png'

// LP TODO - a lot of properties are shared between morello and aarch64, abstract
export const Themes = (arch) => {
  const isCheri = arch === 'Morello'
  const backgroundImage = isCheri ? backgroundImgOsx : backgroundImg
  const icon = isCheri ? iconOsx : iconImg
  const lockIcon = isCheri ? lockIconOsx : lockIconImg

  return {
    name: arch,
    arch: isCheri ? 'cheri' : 'aarch64',
    header: {
      backgroundColor: '#384D6C',
      width: '100%',
      zIndex: 999,
      height: '164px',
    },
    progressBar: {
      wrapper: {
        height: isCheri ? '12px' : '22px',
        width: '100%',
        ...(isCheri ? { marginLeft: '3%' } : {}),
        padding: '0px 10px',
      },
      background: {
        height: '50%',
        width: '100%',
        background: isCheri ? '#000' : '#979797',
        padding: '0px',
      },
      bar: {
        position: 'relative',
        height: '50%',
        top: '-50%',
        background: isCheri ? '#fff' : '#d9d9d9',
      },
    },
    password: {
      input: isCheri
        ? {
            width: '300px',
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
          }
        : {
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
        fontFamily: isCheri ? '000' : 'Monaco',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: isCheri ? '16px' : '24px',
        lineHeight: '32px',
        htmlFor: 'Password',
        color: isCheri ? '#000' : '#fff',
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
      button: isCheri
        ? {
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
          }
        : {},
      window: isCheri
        ? {
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
          }
        : {
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
      page: isCheri
        ? {
            position: 'relative',
            background: '#212124',
            outlineOffset: '-10px',
            padding: '5px;',
          }
        : {
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
      backgroundImage: `url(${backgroundImage})`,
      width: '100%',
      height: '860px',
    }),
    primary: {
      windowCont: isCheri
        ? {
            background: '#fff',
            width: '826px',
            height: '626px',
            border: '1px solid #818181',
            borderRadius: '6px',
            color: '#fff',
            boxShadow: '0px 0px 4px #818181',
          }
        : {
            display: 'flex',
            position: 'relative',
            flexDirection: 'column',
            width: '826px',
            height: '626px',
            boxShadow: '24px 24px 1px rgba(0, 0, 0, 0.8)',
            background: '#343556',
          },
      windowBody: isCheri
        ? {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: '100%',
            padding: '10px',
            paddingTop: '40px',
            color: '#fff',
          }
        : {
            boxSizing: 'border-box',
            height: '100%',
            width: '100%',
            padding: '10px',
            outline: '2px solid #FFFFFF',
            outlineOffset: '-10px',
          },
    },
  }
}
