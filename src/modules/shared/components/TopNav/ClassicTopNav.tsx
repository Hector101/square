import { Flex, chakra } from '@chakra-ui/react'

import Link from 'src/modules/shared/components/Link'

const NavLogo = chakra('img', {
  baseStyle: {
    maxWidth: '200px',
    display: 'flex',
    margin: 'auto',
  },
})

type ClassicTopNavProps = {
  hasBorder?: boolean
  theme: 'light' | 'dark'
}

const ClassicTopNav: React.FC<ClassicTopNavProps> = ({
  hasBorder = true,
  theme,
}) => {
  return (
    <Flex
      justify="center"
      align="center"
      p={4}
      py={[4, 8]}
      boxShadow={theme === "light" ? 'topNavShadow' : 'topNavShadowDarkMode'}
    >
      <Link href="/">
        <NavLogo src="/logo.png" />
      </Link>
    </Flex>
  )
}

export default ClassicTopNav
