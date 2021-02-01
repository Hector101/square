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
}

const ClassicTopNav: React.FC<ClassicTopNavProps> = ({
  hasBorder = true,
}) => {
  return (
    <Flex
      justify="center"
      align="center"
      p={4}
      py={[4, 8]}
      borderBottom={hasBorder ? '1px' : 'none'}
      borderBottomColor="lightGray"
    >
      <Link href="/">
        <NavLogo src="/logo.png" />
      </Link>
    </Flex>
  )
}

export default ClassicTopNav
