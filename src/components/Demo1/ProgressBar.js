import React from 'react'
import styled from 'styled-components'

import { Context } from '../../utils/context'
import { Txt_Demo1A } from '../Common'

const Wrapper = styled.div`
  height: 22px;
  width: 100%;
  padding: 0px 10px;
`

const BarBackground = styled.div`
  height: 50%;
  width: 100%;
  background: #979797;
  padding: 0px;
`

const Bar = styled.div`
  position: relative;
  height: 50%;
  top: -50%;
  width: ${(props) => props.progress}%;
  background: #d9d9d9;
`

export default function ProgressBar({ update, execute }) {
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
        demo1: {
          ...demo1,
          showHackPopup: true,
          output: await execute(demo1.password),
        },
      })
      setProgress(100)
    }
    if (!demo1.output) load()
  }, [demo1, update, execute])

  const showProgress = progress != 100

  return showProgress ? (
    <Wrapper id={'demo1-progress-bar'}>
      <Txt_Demo1A>{`hacking in progress ${progress}%`}</Txt_Demo1A>
      <BarBackground />
      <Bar progress={progress} s />
    </Wrapper>
  ) : null
}
