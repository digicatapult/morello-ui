import React from 'react'
import styled from 'styled-components'

import { Context } from '../utils/context'
import { Txt_Demo1A } from './shared/Common'

const Wrapper = styled.div((props) => props)
const BarBackground = styled.div(props => props)

const Bar = styled.div((props) => ({
  width: `${props.progress}%`,
  ...props,
}))

export default function ProgressBar({ update, execute, theme }) {
  const [progress, setProgress] = React.useState(2)
  const { demo1 } = React.useContext(Context)

  async function fill() {
    for (let count = 0; count <= 98; count += 2) {
      await new Promise((r) => setTimeout(r, 20))
      setProgress(count)
    }
  }

  React.useEffect(() => {
    async function load() {
      await fill()
      update({
        name: 'Morello',
        demo1: {
          ...demo1,
          output: await execute(demo1.password),
          showHackPopup: true,
        },
      })
      setProgress(100)
    }
    if (!demo1.output) load()
  }, [demo1, update, execute])

  const showProgress = progress != 100

  return showProgress ? (
    <Wrapper id={'demo1-progress-bar'} {...theme.progressBar.wrapper}>
      <Txt_Demo1A>{`hacking in progress ${progress}%`}</Txt_Demo1A>
      <BarBackground {...theme.progressBar.background}/>
      <Bar progress={progress} {...theme.progressBar.bar}/>
    </Wrapper>
  ) : null
}
