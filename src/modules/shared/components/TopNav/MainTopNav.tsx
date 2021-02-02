import {
  Box,
  Flex,
  FlexProps,
  Text,
  Switch,
  FormControl,
  FormLabel,
} from '@chakra-ui/react'
import React from 'react'

type MainTopNavProps = FlexProps & {
  theme: 'light' | 'dark'
  toggleColorMode: () => void
}

const MainTopNav: React.FC<MainTopNavProps> = ({
  theme,
  toggleColorMode,
  ...props
}) => {
  return (
    <Flex
      w="100%"
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      py={[4, 6]}
      px={[4, 8]}
      h="80px"
      position="fixed"
      boxShadow={theme === "light" ? 'topNavShadow' : 'topNavShadowDarkMode'}
      zIndex="header"
      {...props}
    >
      <Flex align="center" mr={5} height={['25px', '35px']}>
        <Box
          as="img"
          src={theme === 'light' ? "/logo.png" : "/logo_light.png"}
          height="100%"
          objectFit="contain"
          alt="logo"
        />
        <Text size="lg" fontWeight="bold" ml={2}>Square</Text>
      </Flex>
      <FormControl
        display="inline-flex"
        alignItems="center"
        maxW="180px"
      >
        <FormLabel htmlFor="switch-color" mb={0}>
          Switch color mode
        </FormLabel>
        <Switch id="switch-color" onChange={toggleColorMode} />
      </FormControl>
    </Flex>
  )
}

export default MainTopNav
