import { Link as ChakraLink, LinkProps as ChakraLinkProps } from '@chakra-ui/react'
import NextLink from 'next/link'
import React from 'react'

type LinkProps = Omit<ChakraLinkProps, 'as'> & {
  href: string
  as?: string
  isInternal?: boolean
  onClick?: () => void
}

const Link: React.FC<LinkProps> = ({
  href,
  isInternal = true,
  onClick = () => {},
  as,
  children,
  ...rest
}) => {
  if (isInternal) {
    return (
      <NextLink href={href} as={as} passHref>
        <ChakraLink onClick={onClick} {...rest}>
          {children}
        </ChakraLink>
      </NextLink>
    )
  }

  return (
    <ChakraLink href={href} onClick={onClick} {...rest}>
      {children}
    </ChakraLink>
  )
}

export default Link
