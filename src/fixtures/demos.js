import React from 'react'

import { executeBinary } from '../utils/morello-api'
import Demo from '../components/Demo'
import AccessDemo from '../components/AccessDemo'

export const demos = [
  {
    path: 'demo1',
    // TODO group by A and B
    binaryName: 'out-of-bounds-read',
    title: 'Are your secrets really safe?',
    description: 'Out of Bounds write. CWE Score 65.93',
    color: '#384D6C',
    windowTitle: 'SUPER_SAFE_APP.EXE',
    modalTitle: 'hacker.app',
    modalText:
      'Would you like to break into the system and reveal the password?',
    hackingOkBody: 'The password is:',
    hackingOkTitle: 'Hacking completed.',
    Element: (props) => <Demo {...props} />,
    execute: async (args, arch = 'aarch64') => {
      try {
        // TODO updadte with V2
        // currently API ddoes not allow other types...
        const params =
          args.length > 1 && typeof args !== 'string' ? [...args] : [args]
        const output = await executeBinary(`out-of-bounds-read-${arch}`, {
          params,
        })
        return output
      } catch (e) {
        console.log('TODO: handle error', e)
      }
    },
  },
  {
    path: 'demo2',
    binaryName: 'out-of-bounds-access',
    title: 'Is your password what you think it is?',
    description: 'Out of Bounds write. CWE Score 65.93',
    color: '#384D6C',
    windowTitle: 'SUPER_SAFE_APP.EXE',
    modalTitle: 'hacker.app',
    Element: (props) => <AccessDemo {...props} />,
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
