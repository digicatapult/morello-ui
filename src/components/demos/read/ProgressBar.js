import React from 'react'
import styled from 'styled-components'

import { DemoText, Row } from '../../shared/Common'

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

export default function ProgressBar({ update, readDemo }) {
  const [progress, setProgress] = React.useState(10)
  const { theme } = readDemo

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
        readDemo.execute(
          `${readDemo.binaryName}-${theme.arch}`,
          readDemo.password
        ),
      ])
      update({
        readDemo: {
          ...readDemo,
          renderExplainer:
            !!readDemo?.output?.status != 'success' && theme.name === 'Morello',
          output,
          showHackPopup: theme.name !== 'Morello',
        },
      })
    }
    if (!readDemo.output) load()
    else setProgress(100)
  }, [readDemo, theme, update])

  const showProgress = progress !== 100

  return showProgress ? (
    <Wrapper data-cy={'read-demo-progress-bar'} {...theme.progressBar.wrapper}>
      <DemoText>{`hacking in progress ${progress}%`}</DemoText>
      <BarBackground {...theme.progressBar.background} />
      <Bar progress={progress} {...theme.progressBar.bar} />
    </Wrapper>
  ) : (
    <Row>
      <DemoText wordWrap={'break-word'}>
        {readDemo.output.status != 'success'
          ? 'FAILURE. The password could not be revealed. - Display output?'
          : `Your password is ${extractPassword(readDemo.output)}!`}
      </DemoText>
    </Row>
  )
}
