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
import OutOfBoundsWriteImages from '../assets/images/out-of-bounds-write-explainer/OutOfBoundsWriteImages'

import bugIcon from '../assets/images/bug-icon.svg'
import learnIcon from '../assets/images/learn-icon.svg'
import arrowIcon from '../assets/images/double-right-icon.svg'

// demo 2 (write) desktop icons
import MyDocumentsIcon from '../assets/images/my-documents.png'
import MyDownloadsIcon from '../assets/images/my-downloads.png'
import MyMusicIcon from '../assets/images/my-music.png'
import MyVideosIcon from '../assets/images/my-videos.png'
import TextIcon from '../assets/images/text-icon.png'
import JpegIcon from '../assets/images/jpeg-icon.png'

export const demos = [
  {
    path: 'read-demo',
    isDemo: true,
    // TODO group by A and B
    binaryName: 'out-of-bounds-readV2',
    title: 'Are your secrets really safe?',
    description: 'Out of Bounds Read. CWE Score 24.9',
    color: '#384D6C',
    icon: bugIcon,
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
<<<<<<< HEAD
    icon: bugIcon,
    windowTitle: 'SUPER_SAFE_APP.EXE',
    modalTitle: 'CONSOLE.EXE',
=======
    secretDesktop: [
      {
        name: 'Documents',
        img: MyDocumentsIcon,
      },
      {
        name: 'Downloads ',
        img: MyDownloadsIcon,
      },
      {
        name: 'Music',
        img: MyMusicIcon,
      },
      {
        name: 'Videos',
        img: MyVideosIcon,
      },
      {
        name: 'passwords.txt',
        img: TextIcon,
      },
      {
        name: 'BankingDetails.txt',
        img: TextIcon,
      },
      {
        name: 'SecretPhoto.jpg',
        img: JpegIcon,
      },
    ],
>>>>>>> main
    helpContent: `
      The username is root.
      \nPassword can be changed by attempting to login with a username that is longer than 16 characters to perform an out of bounds write. 
      The password will be replaced with the out of bounds characters. 
      \ne.g. if 'root------------123' is attempted for a username, the password is now '123'.
    `,
    Element: (props) => <WriteDemo {...props} />,
    execute: async (executable, params) => {
      return await executeBinary(executable, {
        params,
      })
    },
  },
  {
    path: 'about-dsbd',
    title: 'About Digital Security by Design',
    description: 'About the Digital Security by Design ISCF Challenge',
    color: '#6C7076',
    icon: arrowIcon,
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
    icon: learnIcon,
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
    icon: learnIcon,
    Element: (props) => <Explainer {...props} />, // main element
    images: OutOfBoundsWriteImages,
    nativeSize: {
      width: 960,
      height: 540,
    },
  },
  {
    path: 'learn-morello',
    title: 'Learn about the ARM Morello CPU',
    description: 'Learn more about the ARM Morello CPU',
    color: '#546278',
    icon: arrowIcon,
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
