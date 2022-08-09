import styled from 'styled-components'

import backgroundDemoOne from '../../assets/images/background-demo-one.png'

export const DemoOneBackground = styled.div(() => ({
  position: 'absolute',
  backgroundImage: `url(${backgroundDemoOne})`,
  backgroundRepeat: 'no-repeat',
  zIndex: '-5',
  padding: '0',
  position: 'fixed',
  top: '0',
  left: '0',
  minWidth: '100%',
  minHeight: '100%',
}))
