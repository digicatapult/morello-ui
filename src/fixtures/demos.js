import React from 'react'

import { executeBinary } from '../utils/morello-api'
import Demo from '../components/Demos/Demo1'
import AccessDemo from '../components/AccessDemo'
import Info from '../components/Info'

export const demos = [
  {
    path: 'demo1',
    isDemo: true,
    // TODO group by A and B
    binaryName: 'out-of-bounds-readV2',
    title: 'Are your secrets really safe?',
    description: 'Out of Bounds read. CWE Score 24.9',
    color: '#384D6C',
    windowTitle: 'SUPER_SAFE_APP.EXE',
    modalTitle: 'hacker.app',
    modalText:
      'Would you like to break into the system and reveal the password?',
    hackingOkBody: 'The password is:',
    hackingOkTitle: 'Hacking completed.',
    Element: (props) => <Demo {...props} showClose={true} />,
    execute: async (executable, args) => {
      const params =
        args.length > 1 && typeof args !== 'string'
          ? [...args, -32, 32]
          : [args, -32, -32 + args.length]
      const output = await executeBinary(executable, {
        params,
      })
      return output
    },
  },
  {
    path: 'demo2',
    isDemo: true,
    binaryName: 'out-of-bounds-access',
    title: 'Is your password what you think it is?',
    description: 'Out of Bounds write. CWE Score 65.93',
    color: '#6C3838',
    windowTitle: 'SUPER_SAFE_APP.EXE',
    modalTitle: 'hacker.app',
    Element: (props) => <AccessDemo {...props} />,
  },
  {
    path: 'about-dsbd',
    title: 'About Digital Security by Design',
    description: 'About the Digital Security by Design ISCF Challenge',
    color: '#0C1B32',
    Element: (props) => <Info {...props} />, // main element
    imageName: 'dsbd-info-screenshot',
    qrCode: 'dsbd-info-qr',
    link: 'https://www.dsbd.tech/',
  },
  {
    path: 'learn-morello',
    title: 'Learn about the ARM Morello CPU',
    description: 'Learn more about the ARM Morello CPU',
    color: '#6C7076',
    Element: (props) => <Info {...props} />, // main element
    imageName: 'arm-morello-screenshot',
    qrCode: 'arm-morello-qr',
    link: 'https://www.arm.com/architecture/cpu/morello',
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
