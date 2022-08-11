import React from 'react'
import { Navigate } from 'react-router-dom'

import DemoOne from '../layout/Demo1'

function back(e) {
  e.preventDefault()
  return <Navigate to={'/'} />
}

function proceed(e) {
  e.preventDefault()
  console.log('proceeding....')
  return null
}

export const demos = [
  {
    path: 'demo1',
    title: 'Do you believe your password is safe?',
    description: 'Out of Bounds write / Out of Bounds read. CWE Score 65.93',
    color: '#384D6C',
    windowTitle: 'SUPER_SAFE_APP.EXE',
    other: {},
    back,
    proceed,
    Element: (props) => <DemoOne {...props} />,
    fn: () => {},
  },
  {
    path: 'demo2',
    title: 'Do you think your files are safe?',
    description: 'Out of Bounds write / Out of Bounds read. CWE Score 65.93',
    color: '#6C3838',
    other: {},
    back,
    proceed,
    Element: () => <div>somee demo2 content</div>,
    fn: () => {},
  },
  {
    path: 'demo3',
    title: 'Question number one two three?',
    description: 'Out of Bounds write / Out of Bounds read. CWE Score 65.93',
    color: '#0C1B32',
    other: {},
    back,
    proceed,
    Element: () => <div>somee demo3 content</div>, // main element
    fn: () => {},
  },
  {
    path: 'demo4',
    title: 'Do you believe your password is safe?',
    description: 'Out of Bounds write / Out of Bounds read. CWE Score 65.93',
    color: '#6C7076',
    other: {},
    back,
    proceed,
    Element: () => <div>somee demo4 content</div>, // main element
    fn1: () => {},
  },
  {
    path: 'demo5',
    title: 'Do you believe your password is safe?',
    description: 'Out of Bounds write / Out of Bounds read. CWE Score 65.93',
    color: '#D1B44E',
    other: {},
    back,
    fn1: () => {},
    proceed,
    Element: () => <div>somee demo5 content</div>, // main element
  },
  {
    path: 'demo6',
    title: 'Do you believe your password is safe?',
    description: 'Out of Bounds write / Out of Bounds read. CWE Score 65.93',
    color: '#959728',
    other: {},
    back,
    fn1: () => {},
    proceed,
    Element: () => <div>somee demo6 content</div>, // main element
  },
  {
    path: 'demo7',
    title: 'Do you believe your password is safe?',
    description: 'Out of Bounds write / Out of Bounds read. CWE Score 65.93',
    color: '#4F6C38',
    other: {},
    back,
    fn1: () => {},
    proceed,
    Element: () => <div>somee demo7 content</div>, // main element
  },
  {
    path: 'demo8',
    title: 'Do you believe your password is safe?',
    description: '__description_placeholder',
    color: '#546278',
    other: {},
    back,
    fn1: () => {},
    proceed,
    Element: () => <div>somee demo8 content</div>, // main element
  },
]
