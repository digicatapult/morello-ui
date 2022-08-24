import styled from 'styled-components'

import background from '../assets/images/background.png'

export const Background = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
  backgroundImage: `url(${background})`,
  width: '100%',
  height: '860px',
}))
