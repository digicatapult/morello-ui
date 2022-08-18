import React from 'react'

import { executeBinary } from '../utils/morello-api'
import Demo1 from '../components/Demo1'

export const demos = [
  {
    path: 'demo1',
    title: 'Do you believe your password is safe?',
    description: 'Out of Bounds write / Out of Bounds read. CWE Score 65.93',
    color: '#384D6C',
    windowTitle: 'SUPER_SAFE_APP.EXE',
    modalTitle: 'hacker.app',
    modalText:
      'Would you like to break into the system and reveal the password?',
    modalSuccess: 'Hacking completed. The password is:',
    Element: (props) => <Demo1 {...props} />,
    execute: async (password) => {
      try {
        const output = await executeBinary('demo1', { password })
        console.log(output)
        return output
      } catch (e) {
        console.log('handle error', e)
      } 
    },
  },
  {
    path: 'demo2',
    title: 'Do you think your files are safe?',
    description: 'Out of Bounds write / Out of Bounds read. CWE Score 65.93',
    color: '#6C3838',
    Element: () => <div>somee demo2 content</div>,
  },
  {
    path: 'demo3',
    title: 'Question number one two three?',
    description: 'Out of Bounds write / Out of Bounds read. CWE Score 65.93',
    color: '#0C1B32',
    Element: () => <div>somee demo3 content</div>, // main element
  },
  {
    path: 'demo4',
    title: 'Do you believe your password is safe?',
    description: 'Out of Bounds write / Out of Bounds read. CWE Score 65.93',
    color: '#6C7076',
    Element: () => <div>somee demo4 content</div>, // main element
  },
  {
    path: 'demo5',
    title: 'Do you believe your password is safe?',
    description: 'Out of Bounds write / Out of Bounds read. CWE Score 65.93',
    color: '#D1B44E',
    Element: () => <div>somee demo5 content</div>, // main element
  },
  {
    path: 'demo6',
    title: 'Do you believe your password is safe?',
    description: 'Out of Bounds write / Out of Bounds read. CWE Score 65.93',
    color: '#959728',
    Element: () => <div>somee demo6 content</div>, // main element
  },
  {
    path: 'demo7',
    title: 'Do you believe your password is safe?',
    description: 'Out of Bounds write / Out of Bounds read. CWE Score 65.93',
    color: '#4F6C38',
    Element: () => <div>somee demo7 content</div>, // main element
  },
  {
    path: 'demo8',
    title: 'Do you believe your password is safe?',
    description: '__description_placeholder',
    color: '#546278',
    Element: () => <div>somee demo8 content</div>, // main element
  },
]
