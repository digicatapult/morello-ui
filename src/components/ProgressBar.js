import React from 'react'
import styled from 'styled-components'

import { Txt_Demo1A, Row } from './shared/Common'

const Wrapper = styled.div((props) => props)
const BarBackground = styled.div((props) => props)
const Bar = styled.div((props) => ({
  width: `${props.progress}%`,
  ...props,
}))

const extractPassword = ({ output }) =>
  output
    .split('\n')
    .filter((x) => !!x)
    .pop()
    .split(':')
    .pop()
    .trim()

export default function ProgressBar({ update, demo1 }) {
  const [progress, setProgress] = React.useState(10)
  const { theme } = demo1

  async function fill() {
    for (let count = 0; count <= 98; count += 2) {
      setProgress(count)
      await new Promise((r) => setTimeout(r, 20))
    }
  }

  React.useEffect(() => {
    async function load() {
      const [, output] = await Promise.all([
        fill(),
        demo1.execute(`${demo1.binaryName}-${theme.arch}`, demo1.password),
      ])
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
  }, [demo1, theme, update])

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
          : `Your password is ${extractPassword(demo1.output)}!`}
      </Txt_Demo1A>
    </Row>
  )
}
