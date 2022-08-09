import { createGlobalStyle } from 'styled-components'
import AktivGroteskWoff from './AktivGrotesk.woff'
import AktivGroteskWoff2 from './AktivGrotesk.woff2'
import asterisk from './asterisk.woff'
import asteriskWoff2 from './asterisk.woff2'

export default createGlobalStyle`
    @font-face {
        font-family: 'AktivGrotesk';
        src: local('Aktiv Grotesk'), local('AktivGrotesk'),
        url(${AktivGroteskWoff2}) format('woff2'),
        url(${AktivGroteskWoff}) format('woff');
        font-style: normal;
    }
    @font-face {
        font-family: 'asterisk';
        src: local('asterisk'),
        url('${asteriskWoff2}') format('woff2'),
        url('${asterisk}') format('woff'),
        font-weight: normal;
        font-style: normal;
    }
`
