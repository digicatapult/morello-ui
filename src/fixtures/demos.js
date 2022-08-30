import React from 'react'

import { executeBinary } from '../utils/morello-api'
import Demo from '../components/Demo'
import Info from '../components/Info'

export const demos = [
  {
    path: 'demo1',
    // TODO group by A and B
    binaryName: 'out-of-bounds-read',
    title: 'Do you believe your password is safe?',
    description: 'Out of Bounds write / Out of Bounds read. CWE Score 65.93',
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
    title: 'Do you think your files are safe?',
    description: 'Out of Bounds write / Out of Bounds read. CWE Score 65.93',
    color: '#6C3838',
    Element: () => <div>somee demo2 content</div>,
  },
  {
    path: 'learn-morello',
    title: 'Learn about the ARM Morello CPU',
    description: 'Learn more about the ARM Morello CPU',
    color: '#0C1B32',
    Element: (props) => <Info {...props} />, // main element
    imageName: 'arm-morello-screenshot',
    qrCode: 'arm-morello-qr',
    link: 'https://www.arm.com/architecture/cpu/morello',
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
