const defaultProps = {
  variant: 'primary',
}

const variants = {
  primary: {
    color: 'primary',
    _hover: {
      color: 'primaryLight',
    },
    _disabled: {
      color: 'disabled',
    },
  },
  secondary: {
    color: 'secondary',
    _hover: {
      color: 'secondaryLight',
    },
    _disabled: {
      color: 'disabled',
    },
  },
}

export const Link = {
  defaultProps,
  variants,
}
