import React from 'react'
import backgroundOld from '../assets/images/backgroundOld.png'

export default function DemoOne(props) {
  console.log(props)
  return (
    <div
      style={{
        backgroundImage: backgroundOld,
        width: '100%',
        height: '100%',
      }}
    >
      <div>
        <h1>Demo One</h1>
      </div>
    </div>
  )
}
