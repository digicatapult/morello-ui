import styled from 'styled-components'

import backgroundDemoOne from '../../assets/images/background-demo-one.png'

export const DemoOneBackground = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
  backgroundImage: `url(${backgroundDemoOne})`,
  width: '1920px',
  height: '1080px',
}))
