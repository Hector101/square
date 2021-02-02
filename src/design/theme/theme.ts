import { extendTheme } from '@chakra-ui/react'
import { components } from './components'
import typography from './typography'

const space = {
  px: '1px',
  '0': '0rem',
  '1': '0.25rem',
  '2': '0.5rem',
  '3': '0.75rem',
  '4': '1rem',
  '5': '1.25rem',
  '6': '1.5rem',
  '8': '2rem',
  '10': '2.5rem',
  '12': '3rem',
  '16': '4rem',
  '20': '5rem',
  '24': '6rem',
  '32': '8rem',
  '40': '10rem',
  '48': '12rem',
  '56': '14rem',
  '64': '16rem',
}

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
}

const sizes = {
  boxed: '1300px',

  heightXl: '57px',
  heightXlMobile: '50px',

  heightLg: '50px',
  heightLgMobile: '38px',

  heightMd: '42px',
  heightMdMobile: '32px',

  heightSm: '32px',
  heightSmMobile: '24px',
}

const fontWeights = {
  normal: '400',
  bold: '600',
}

const fontSizes = {
  lg: ['1', null, '1.25rem'],
  md: ['.8125rem', null, '1.0rem'],
  sm: ['.6875rem', null, '.8125rem'],
  xs: ['.6875rem', null, '.6875rem'],
}

const colors = {
  transparent: 'transparent',
  current: 'currentColor',
  black: '#000',
  white: '#fff',
  disabled: '#E0E2DF',
  primary: '#0062FF',
  secondary: '#14141b',
  secondaryLight: '#1c1d25',
  textPrimary: '#44444F',
  textSecondary: '#92929D',
  headerPrimary: '#171725',
  offwhite: '#FAFAFB',
  lightGray: '#DDDDDD',
  lightGray2: '#cbd5e0',
}

const shadows = {
  sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl:
    '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  outline: '0 0 0 3px rgba(66, 153, 225, 0.6)',
  inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
  topNavShadow: 'inset 0px -1px 0px #E2E2EA',
  topNavShadowDarkMode: 'inset 0px -1px 0px #292932',
  none: 'none',
}

const zIndices = {
  hide: -1,
  auto: 'auto',
  base: 0,
  header: 1,
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  toast: 1700,
  tooltip: 1800,
}

const radii = {
  none: '0',
  sm: '0.125rem',
  md: '0.25rem',
  lg: '0.5rem',
  round: '50%',
  full: '9999px',
}

const opacity = {
  '0': '0',
  '20%': '0.2',
  '40%': '0.4',
  '60%': '0.6',
  '80%': '0.8',
  '100%': '1',
}

const borders = {
  none: 0,
  '1px': '1px solid',
  '2px': '2px solid',
  '4px': '4px solid',

  disabled: `1px solid ${colors.disabled}`,
  primary: `1px solid ${colors.primary}`,
}

const durations = {
  instant: '0s',
  quick: '0.2s',
  default: '0.4s',
  slow: '0.6s',
  verySlow: '0.9s',
}

const easings = {
  default: 'ease-in-out',
}

const transitions = {
  allEase: 'all ease 500ms',
  cspEase: 'opacity ease 500ms'
}

const globalStyles = {
  color: `rgb(30, 45, 43)`,
  fontFamily: 'body',
  'a:hover': {
    cursor: 'pointer',
  },
  '*': `
  @font-face {
    font-family: Inter;
    src: url("https://fonts.googleapis.com/css2?family=Roboto");
    font-display: swap;
    font-weight: 400;
  }
  @font-face {
    font-family: 'Poppins';
    src: url("https://fonts.googleapis.com/css2?family=Poppins");
    font-display: swap;
    font-weight: 400;
  }
  `,
}

const customTheme = {
  styles: {
    global: globalStyles,
  },
  config,
  zIndices,
  radii,
  opacity,
  borders,
  colors,
  durations,
  easings,
  ...typography,
  sizes,
  shadows,
  space,
  fontWeights,
  fontSizes,
  components,
  transitions,
}

export type CustomTheme = typeof customTheme

export default extendTheme(customTheme)
