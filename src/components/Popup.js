import React from 'react';
import styled from 'styled-components'
import { Context } from '../utils/context';

import { Button } from './shared/Buttons';
import { H1, H2, P1, Row } from './Common';

const Popup = styled.div`
  position: absolute;
  z-index: 10;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.3);
  transition: 0.3s ease-in-out;
`

const Content = styled.div`
  width: 500px;
  z-index: 10;
  margin: 25% auto;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  transition: inherit;
  transform: translateY(-100px);
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05), 0 1px 3px 0 rgba(0, 0, 0, 0.09);
}`


export default function (props) {
  const ref = React.useRef();
  const { demo1: { showHackPopup } } = React.useContext(Context)
  const { addEventListener, removeEventListener } = window

  React.useEffect(() => {
    const clickOutside = (e) => {
      if (e.target == ref.current) setShow(false)
    }
    addEventListener('click', clickOutside);

    return () => removeEventListener('click', clickOutside);

  }, [props])

  if (!showHackPopup) {
    return null
  }

  return <Popup ref={ref}>
    <Content>
      {props.children}
      <Row padding={'0px 5px'} justifyContent={'flex-end'}>
        <Button onClick={props.action}>TRY</Button>
      </Row>
    </Content>
  </Popup>
}

export const PopHeader = props => {
  return <H1 textAlign={'center'} backgroundColor={'#40303f'} padding={'16px 20px'}>
    {props.children}
  </H1>
}

export const PopBody = (props) => {
  return <P1 borderBottom={'solid 1px #414A4C'} fontSize={'14px'} color={'black'} padding={'16px 20px'}>
    <H2 color={'#414A4C'}>Output:</H2>
    {props.children}
  </P1>
}

export const PopFooter = props => {
  return <P1 color={'#414A4C'} fontSize={'14px'} padding={'16px 20px'}>
    {props.children}
  </P1>
}
