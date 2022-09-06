import React from 'react'

import { executeBinary } from '../utils/morello-api'
import Demo from '../components/Demos/Demo1'
import AccessDemo from '../components/AccessDemo'
import Info from '../components/Info'

import MorelloQR from '../assets/images/arm-morello-qr.svg'
import MorelloScreenShotWebP from '../assets/images/arm-morello-screenshot.webp'
import MorelloScreenShotAvif from '../assets/images/arm-morello-screenshot.avif'
import MorelloScreenShotPng from '../assets/images/arm-morello-screenshot.png'

import DsbdQR from '../assets/images/dsbd-info-qr.svg'
import DsbdScreenShotWebP from '../assets/images/dsbd-info-screenshot.webp'
import DsbdScreenShotAvif from '../assets/images/dsbd-info-screenshot.avif'
import DsbdScreenShotPng from '../assets/images/dsbd-info-screenshot.png'
import ExplainerSlides from '../components/ExplainerSlides'
import ExplainerSVG from '../components/ExplainerSVG'

import OutOfBoundsReadImages from '../assets/images/out-of-bounds-read-explainer/OutOfBoundsReadImages'

export const demos = [
  {
    path: 'demo1',
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
    screenshot: {
      webp: DsbdScreenShotWebP,
      avif: DsbdScreenShotAvif,
      png: DsbdScreenShotPng,
    },
    qrCode: DsbdQR,
    link: 'https://www.dsbd.tech/',
  },
  {
    path: 'learn-morello',
    title: 'Learn about the ARM Morello CPU',
    description: 'Learn more about the ARM Morello CPU',
    color: '#6C7076',
    Element: (props) => <Info {...props} />, // main element
    screenshot: {
      webp: MorelloScreenShotWebP,
      avif: MorelloScreenShotAvif,
      png: MorelloScreenShotPng,
    },
    qrCode: MorelloQR,
    link: 'https://www.arm.com/architecture/cpu/morello',
  },
  {
    path: 'demo1-explainer',
    title: 'What is an Out of Bounds Read?',
    description:
      'Learn about Out of Bounds Read Exploits and How Morello Prevents Them',
    color: '#D1B44E',
    Element: (props) => <ExplainerSlides {...props} />, // main element
    explainerSrc:
      'https://docs.google.com/presentation/d/e/2PACX-1vRBsF3-PUSnIngjH47sdH3xvSEHVFFyKOxTx21kCAYNaCdyHZ-rt8_jlJT_pvwx-DpGPfhWLq9VExcm/embed?start=false&loop=false&delayms=3000',
    nativeSize: {
      width: 1440,
      height: 839,
    },
    crop: {
      left: 7,
      right: 7,
      top: 7,
      bottom: 40,
    },
  },
  {
    path: 'demo1-explainer-svg',
    title: 'What is an Out of Bounds Read?',
    description:
      'Learn about Out of Bounds Read Exploits and How Morello Prevents Them',
    color: '#D1B44E',
    Element: (props) => <ExplainerSVG {...props} />, // main element
    images: OutOfBoundsReadImages,
    nativeSize: {
      width: 1440,
      height: 839,
    },
    crop: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    },
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
