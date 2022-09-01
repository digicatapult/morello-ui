import React from 'react'
import styled from 'styled-components'
import { Context } from '../../utils/context'

import { Button } from './Buttons'
import { H2, P1, renderTitle, Row } from './Common'

const footerProps = {
  fontSize: '16px',
  color: '#414A4C',
  padding: '6px 10px',
}
const bodyProps = {
  color: '#414A4C',
  fontSize: '14px',
  padding: '16px 20px',
}

// TODDO: move
const Popup = styled.div`
  position: absolute;
  z-index: 10;
  left: 0;
  top: 0;
  width: 10%;
  height: 100%;
  overflow: auto;
  transition: 0.3s ease-in-out;
  border-radius: '6px',
  border: '1px solid #818181',
  box-shadow: '0px 0px 4px #818181',
`

const Content = styled.div`
  width: 100px;
  z-index: 10;
  height: 100%;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  transition: inherit;
}`

// TODO convert inti a slicer
export default function PopupBox(props) {
  const ref = React.useRef()
  const {
    demo1: { showHackPopup },
  } = React.useContext(Context)
  /*eslint-disable */
  const { addEventListener, removeEventListener } = window

  // **TODO - timer?
  // TODO reviewe this, leaving for time being as we might need to cancel popup
  // if leaving add an option for clickOutside check
  /*eslint-disable */
  React.useEffect(() => {
    const clickOutside = (e) => {
      // if (e.target == ref.current) setShow(false)
    }
    addEventListener('click', clickOutside)

    return () => removeEventListener('click', clickOutside)
  }, [props])

  if (!showHackPopup) {
    return null
  }

  return (
    <Popup ref={ref}>
      <Content>
        {renderTitle('some txt', 'Morello')}
        {props.children}
        <Row
          boxSizing={'border-box'}
          padding={'0px 5px'}
          justifyContent={'flex-end'}
        >
          <Button onClick={(e) => props.action(e)}>TRY</Button>
        </Row>
      </Content>
    </Popup>
  )
}

export const PopBody = (props) => {
  return (
    <div style={{...bodyProps}}>
      <H2 color={'#414A4C'}>Output:</H2>
      {props.children}
    </div>
  )
}

export const PopFooter = (props) => {
  return <P1 {...footerProps}>{props.children}</P1>
}
