const defaultProps = {
  variant: 'primary',
  size: 'md',
}

export const Button = {
  defaultProps,
  baseStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'none',
    lineHeight: 'tight',
    pt: '2px',
    fontWeight: 'bold',
    fontFamily: 'body',
    px: 4,
  },

  sizes: {
    lg: {
      minHeight: ['heightLgMobile', null, 'heightLg'],
      fontSize: ['buttonLgMobile', null, 'buttonLg'],
    },

    md: {
      minHeight: ['heightMdMobile', null, 'heightMd'],
      fontSize: ['buttonMdMobile', null, 'buttonMd'],
    },
    sm: {
      minHeight: ['heightSmMobile', null, 'heightSm'],
      fontSize: ['buttonSmMobile', null, 'buttonSm'],
    },
  },
  variants: {
    primary: {
      width: '100%',
      minWidth: [null, null, '120px'],
      bg: 'primary',
      color: 'offwhite',
      _hover: {
        bgColor: 'primaryLight',
      },
      _disabled: {
        bgColor: 'disabled',
        color: 'textPrimary',
        border: '1px',
        borderColor: 'disabled'
      },
    },
    secondary: {
      width: '100%',
      py: 3,
      px: 6,
      bg: 'secondary',
      color: 'white',
      border: 'primary',
      _hover: {
        bg: 'secondaryLight',
        color: 'textPrimary',
        border: 'primaryLight',
      },
      _disabled: {
        bg: 'disabled',
        color: 'textPrimary',
        border: 'disabled',
      },
    },

    outline: {
      width: '100%',
      minWidth: [null, null, '190px'],
      bg: 'transparent',
      border: 'primary',
      color: 'buttonText',
      _hover: {
        bg: 'primary',
        color: 'whiteSands',
      },
      _disabled: {
        border: 'disabled',
        color: 'disabled',
        bg: 'transparent',
      },
    },

    'outline-gray': {
      width: '100%',
      minWidth: [null, null, '190px'],
      bg: 'transparent',
      border: '1px solid',
      borderColor: 'lightGray',
      _disabled: {
        border: 'disabled',
        color: 'disabled',
        bg: 'transparent',
      },
    },

    'outline-white': {
      width: '100%',
      minWidth: [null, null, '190px'],
      bg: 'transparent',
      border: 'whiteSands',
      color: 'whiteSands',
      _hover: {
        color: 'headerPrimary',
        border: 'headerPrimary',
      },
      _disabled: {
        border: 'disabled',
        color: 'disabled',
        bg: 'transparent',
      },
    },
    blank: {
      display: 'inline-block',
      border: 'none',
      lineHeight: 'inherit',
      minWidth: 'auto',
      minHeight: 'auto',
      width: 'auto',
      height: 'auto',
      fontWeight: 'inherit',
      fontFamily: 'inherit',
      pt: 0,
      px: 0,
      p: 0,
      background: 'none',
    },
  },
}
