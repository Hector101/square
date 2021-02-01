const baseStyle = {
  field: {
    width: '100%',
    outline: 0,
    position: 'relative',
    appearance: 'none',
    transition: 'all 0.2s',
    // account for weight font baseline
    pt: '2px',
  },
}

const commonSizeStyle = {
  xl: {
    height: ['heightXlMobile', null, 'heightXl'],
    fontSize: '1rem',
    px: 5,
  },
  lg: {
    height: ['heightLgMobile', null, 'heightLg'],
    fontSize: ['1rem', null, '1.25rem'],
    px: 4,
  },
  md: {
    height: ['heightMdMobile', null, 'heightMd'],
    fontSize: ['.8125rem', null, '1rem'],
    px: [2, null, 3],
  },
  sm: {
    height: ['heightSmMobile', null, 'heightSm'],
    fontSize: ['.6875rem', null, '.8125rem'],
    px: 2,
  },
}

const sizes = {
  xl: {
    field: commonSizeStyle.xl,
    addon: commonSizeStyle.xl,
  },
  lg: {
    field: commonSizeStyle.lg,
    addon: commonSizeStyle.lg,
  },
  md: {
    field: commonSizeStyle.md,
    addon: commonSizeStyle.md,
  },
  sm: {
    field: commonSizeStyle.sm,
    addon: commonSizeStyle.sm,
  },
}

const variants = {
  outline: {
    field: {
      bg: 'white',
      borderColor: 'lightGray',
      color: 'textPrimary',

      _focus: {
        border: 'none',
        borderColor: 'lightGray',
        boxShadow: '0 0 0 1px lightGray',
      },

      _hover: {},
      _invalid: {
        bg: 'white',
        borderColor: 'formError',
        boxShadow: '0 0 0 1px transparent',
      },
      _disabled: {
        bg: 'disabled',
        border: 'disabled',
        color: 'offwhite',
      },
    },
  },

  underline: {
    field: {
      bg: 'transparent',
      borderColor: 'lightGray',
      borderBottom: '1px',
      borderTop: 'none',
      borderLeft: 'none',
      borderRight: 'none',
      color: 'textPrimary',

      _focus: {
        border: '1px',
        borderColor: 'lightGray',
      },

      _hover: {},
      _invalid: {
        bg: 'disabled',
        borderColor: 'lightGray',
      },
      _disabled: {
        bg: 'disabled',
        borderColor: 'disabled',
        color: 'offwhite',
      },
    },
  },
}

const defaultProps = {
  size: 'md',
  variant: 'outline',
}

export const Input = {
  parts: {
    field: '',
    addon: '',
  },
  defaultProps,
  baseStyle,
  sizes,
  variants,
}
