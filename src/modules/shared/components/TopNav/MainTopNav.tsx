import { Box, BoxProps, Flex, FlexProps, Text, Switch } from '@chakra-ui/react'
import React from 'react'

const Hamburger = (
  { bgColor, ...rest }: BoxProps & { display: string[]; onClick: () => void; bgColor?: string; }
) => (
  <Box
    as="button"
    aria-label="Navigation Menu"
    backgroundColor="transparent"
    border="none"
    width="16px"
    marginRight="15px"
    position="relative"
    bottom="1px"
    cursor="pointer"
    p={0}
    {...rest}
  >
    {[...Array(3)].map((_, index) => (
      <Text
        key={`menu-${index}`}
        as="span"
        height="1px"
        display="block"
        marginBottom="4px"
        bgColor={bgColor}
      />
    ))}
  </Box>
)

type MainTopNavProps = FlexProps & {
  theme: 'light' | 'dark'
  toggleColorMode: () => void
}

const MainTopNav: React.FC<MainTopNavProps> = ({
  theme,
  toggleColorMode,
  ...props
}) => {
  const [showNavButton, setShowNavButton] = React.useState(false)

  const handleToggle = () => setShowNavButton(!showNavButton)

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      py={[4, 6]}
      px={[4, 8, 16]}
      h="80px"
      boxShadow={theme === "light" ? 'topNavShadow' : 'topNavShadowDarkMode'}
      w="100%"
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
      <Hamburger
        display={['block', 'block', 'none']}
        onClick={handleToggle}
        bgColor={theme === 'light' ? 'secondary' : 'white'}
      />
      <Switch
        id="switch-color"
        onChange={toggleColorMode}
      />
    </Flex>
  )
}

export default MainTopNav
