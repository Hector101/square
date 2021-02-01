import { Box, Flex, useColorModeValue, useColorMode } from '@chakra-ui/react'
import React from 'react'

import MainTopNav from 'src/modules/shared/components/TopNav/MainTopNav'
import Footer from 'src/modules/shared/components/Footer/Footer'

const px = [5, 5, 10]

export interface MainLayoutProps {
  theme?: 'light' | 'dark'
  hasFooter?: boolean
  maxW?: string
}

const MainLayout: React.FC<MainLayoutProps> = ({
  theme = 'light',
  children,
  hasFooter = true,
  maxW = '2100px'
}) => {
  const { toggleColorMode, colorMode } = useColorMode()
  const color = useColorModeValue('textPrimary', 'white')
  const bgColor = useColorModeValue('offwhite', 'secondary')
  const navBgColor = useColorModeValue('white', 'secondaryLight')

  return (
    <Box bgColor={bgColor}>
      <Box
        color={color}
        maxW={maxW}
        m="0 auto"
        position="relative"
      >
        <MainTopNav
          theme={colorMode}
          toggleColorMode={toggleColorMode}
          bgColor={navBgColor}
          color={color}
        />
        <Flex direction="column" minH="calc(100vh - 80px)" px={0} mx={0} pt={0}>
          <Box
            flexGrow={1}
            flexShrink={0}
          >
            {children}
          </Box>
          {hasFooter && <Box as={Footer} flexGrow={0} flexShrink={0} px={px} />}
        </Flex>
      </Box>
    </Box>
  )
}

export default MainLayout
