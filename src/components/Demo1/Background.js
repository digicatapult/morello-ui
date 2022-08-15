import styled from 'styled-components'

import background from '../../assets/images/background.png'

export const Background = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
  backgroundImage: `url(${background})`,
  width: '1920px',
  height: '1080px',
}))
