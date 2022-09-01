import React from 'react'
import styled from 'styled-components'

import { Txt_Demo1A, Row } from './shared/Common'

const Wrapper = styled.div((props) => props)
const BarBackground = styled.div((props) => props)
const Bar = styled.div((props) => ({
  width: `${props.progress}%`,
  ...props,
}))

export default function ProgressBar({ update, demo1 }) {
  const [progress, setProgress] = React.useState(10)
  const { theme, execute } = demo1

  async function fill() {
    for (let count = 0; count <= 98; count += 2) {
      setProgress(count)
      await new Promise((r) => setTimeout(r, 20))
    }
  }

  React.useEffect(() => {
    async function load() {
      await fill()
      const output = await execute(demo1.password, theme.arch)
      update({
        demo1: {
          ...demo1,
          output,
          showHackPopup: theme.name === 'Morello' ? false : true,
        },
      })
    }
    if (!demo1.output) load()
    else setProgress(100)
  }, [])

  const showProgress = progress !== 100

  return showProgress ? (
    <Wrapper id={'demo1-progress-bar'} {...theme.progressBar.wrapper}>
      <Txt_Demo1A>{`hacking in progress ${progress}%`}</Txt_Demo1A>
      <BarBackground {...theme.progressBar.background} />
      <Bar progress={progress} {...theme.progressBar.bar} />
    </Wrapper>
  ) : (
    <Row>
      <Txt_Demo1A wordWrap={'break-word'}>
        {demo1.output.status != 'success'
          ? 'FAILURE. The password could not be revealed. - Display output?'
          : `Your password is ${demo1.password}!`}
      </Txt_Demo1A>
    </Row>
  )
}
