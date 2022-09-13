import React from 'react'

import { executeBinary } from '../utils/morello-api'
import ReadDemo from '../components/demos/read/Demo'
import WriteDemo from '../components/demos/write/Demo'
import Info from '../components/Info'

import MorelloQR from '../assets/images/arm-morello-qr.svg'
import MorelloScreenShotWebP from '../assets/images/arm-morello-screenshot.webp'
import MorelloScreenShotAvif from '../assets/images/arm-morello-screenshot.avif'
import MorelloScreenShotPng from '../assets/images/arm-morello-screenshot.png'

import DsbdQR from '../assets/images/dsbd-info-qr.svg'
import DsbdScreenShotWebP from '../assets/images/dsbd-info-screenshot.webp'
import DsbdScreenShotAvif from '../assets/images/dsbd-info-screenshot.avif'
import DsbdScreenShotPng from '../assets/images/dsbd-info-screenshot.png'
import Explainer from '../components/Explainer'

import OutOfBoundsReadImages from '../assets/images/out-of-bounds-read-explainer/OutOfBoundsReadImages'

export const demos = [
  {
    path: 'read-demo',
    isDemo: true,
    // TODO group by A and B
    binaryName: 'out-of-bounds-readV2',
    title: 'Are your secrets really safe?',
    description: 'Out of Bounds Read. CWE Score 24.9',
    color: '#384D6C',
    windowTitle: 'SUPER_SAFE_APP.EXE',
    modalTitle: 'hacker.app',
    modalText:
      'Would you like to break into the system and reveal the password?',
    hackingOkBody: 'The password is:',
    hackingOkTitle: 'Hacking completed.',
    Element: (props) => <ReadDemo {...props} showClose={true} />,
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
    path: 'write-demo',
    isDemo: true,
    binaryName: 'out-of-bounds-access',
    title: 'Is your password what you think it is?',
    description: 'Out of Bounds write. CWE Score 65.93',
    color: '#6C3838',
    windowTitle: 'SUPER_SAFE_APP.EXE',
    modalTitle: 'hacker.app',
    Element: (props) => <WriteDemo {...props} />,
    execute: async (executable, params) => {
      return await executeBinary(executable, {
        params,
      })
    },
  },
  {
    path: '',
    title: 'Placeholder Tile',
    description: 'Remove me please I am a placeholder',
    color: '#0C1B32',
    Element: () => <></>,
  },
  {
    path: 'about-dsbd',
    title: 'About Digital Security by Design',
    description: 'About the Digital Security by Design ISCF Challenge',
    color: '#6C7076',
    Element: (props) => <Info {...props} />, // main element
    screenshot: {
      webp: DsbdScreenShotWebP,
      avif: DsbdScreenShotAvif,
      png: DsbdScreenShotPng,
    },
    qrCode: DsbdQR,
    link: 'https://www.dsbd.tech/',
  },
  {
    path: 'read-demo-explainer',
    title: 'What is an Out of Bounds Read?',
    description:
      'Learn about Out of Bounds Read Exploits and How Morello Prevents Them',
    color: '#D1B44E',
    Element: (props) => <Explainer {...props} />, // main element
    images: OutOfBoundsReadImages,
    nativeSize: {
      width: 960,
      height: 540,
    },
  },
  {
    path: 'write-demo-explainer',
    title: 'What is an Out of Bounds Write?',
    description:
      'Learn about Out of Bounds Write Exploits and How Morello Prevents Them',
    color: '#959728',
    Element: (props) => <Explainer {...props} />, // main element
    images: [],
    nativeSize: {
      width: 960,
      height: 540,
    },
  },
  {
    path: '',
    title: 'Placeholder Tile',
    description: 'Remove me please I am a placeholder',
    color: '#4F6C38',
    Element: () => <></>,
  },
  {
    path: 'learn-morello',
    title: 'Learn about the ARM Morello CPU',
    description: 'Learn more about the ARM Morello CPU',
    color: '#546278',
    Element: (props) => <Info {...props} />, // main element
    screenshot: {
      webp: MorelloScreenShotWebP,
      avif: MorelloScreenShotAvif,
      png: MorelloScreenShotPng,
    },
    qrCode: MorelloQR,
    link: 'https://www.arm.com/architecture/cpu/morello',
  },
]
