import backgroundImgOsx from '../assets/images/osx-background.png'
import iconOsx from '../assets/images/hacker-app-icon-morello.png'
import lockIconOsx from '../assets/images/lock.png'

import backgroundImg from '../assets/images/background.png'
import iconImg from '../assets/images/hacker-app-icon.png'
import lockIconImg from '../assets/images/lock.png'

// LP TODO - a lot of properties are shared between morello and aarch64, abstract
export const Themes = (arch) => {
  const isCheri = arch === 'Morello'

  return {
    name: arch,
    font: isCheri
      ? { fontFamily: 'AktivGrotesk', color: '#000' }
      : { fontFamily: 'Monaco', color: '#fff' },
    arch: isCheri ? 'cheri' : 'aarch64',
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
    form: {
      input: isCheri
        ? {
            width: '300px',
            height: '60px',
            padding: '6px 12px',
            fontFamily: '000',
            fontStyle: 'normal',
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
            fontFamily: 'Monaco',
            fontStyle: 'normal',
            fontSize: '24px',
            speak: 'none',
          },
      label: {
        fontFamily: isCheri ? '000' : 'Monaco',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: isCheri ? '16px' : '24px',
        minHeight: '32px',
        display: 'inline-block',
        lineHeight: '32px',
        htmlFor: 'Password',
        color: isCheri ? '#000' : '#fff',
      },
      warning: {
        fontFamily: isCheri ? '000' : 'Monaco',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '14px',
        color: '#f00',
        margin: '5px',
        minHeight: '30px',
      },
      loginAttempt: {
        fontFamily: isCheri ? '000' : 'Monaco',
        fontSize: '14px',
        color: '#fff',
      },
      savePasswordButton: {
        width: '60px',
        height: '60px',
        background: `url(${isCheri ? lockIconOsx : lockIconImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right',
        backgroundSize: 'cover',
        border: '4px solid #FFFFFF',
        cursor: 'pointer',
        marginLeft: '2px',
        marginTop: '32px',
      },
      loginButton: {
        fontFamily: isCheri ? '000' : 'Monaco',
        fontSize: '16px',
        width: '100px',
        height: '50px',
        cursor: 'pointer',
        marginLeft: '2px',
        marginTop: '32px',
      },
    },
    wrapper: {
      backgroundImage: `url(${isCheri ? backgroundImgOsx : backgroundImg})`,
      backgroundSize: 'cover',
    },
    icons: {
      hackerIcon: isCheri ? iconOsx : iconImg,
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
            top: '50%',
            left: '50%',
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
            top: '50%',
            left: '50%',
            width: '586px',
            height: '258px',
            background: '#CE1C1C',
          },
      page: isCheri
        ? {
            position: 'relative',
            background: '#717171',
            color: '#818181',
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
