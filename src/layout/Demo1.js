import React from 'react'

import DemoHeader from '../components/Demo1/DemoOneHeader'

import { DemoOneBackground } from '../components/Demo1/DemoOneBackground'
import DemoOneBox from '../components/Demo1/DemoOneBox'

export default function DemoOne({ title }) {
  return (
    <DemoOneBackground>
      <DemoHeader title={title} />
      <DemoOneBox />
    </DemoOneBackground>
  )
}
