import React from 'react'
import styled from 'styled-components'
import Router from '../utils/Router'

const Root = styled.div`
  display: grid;
  grid-template-areas:
    'header'
    'body';
  grid-template-rows: 164px 1fr;
  width: 100vw;
  height: 100vh;
`

var now = new Date()
var millisecondsUntil5 =
  new Date(now.getFullYear(), now.getMonth(), now.getDate(), 5, 0, 0, 0) - now
if (millisecondsUntil5 < 0) {
  millisecondsUntil5 += 86400000 // it's after 10am, try 10am tomorrow.
}

// console.log(millisecondsUntil5)

// setTimeout(() => {
//   location.href = '/'
//   console.log('Hello World!')
// }, 10000)

export default function App() {
  return (
    <Root>
      <Router />
    </Root>
  )
}
