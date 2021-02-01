import { Flex, Box, Text } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <>
      <Box
        width="100%"
        bg="secondary"
        color="offwhite"
        py={6}
        px={5}
      >
        <Flex
          justify="flex-start"
          align="center"
        >
          <Text size="md">
              © 2021 Square
          </Text>
        </Flex>
      </Box>
    </>
  )
}

export default Footer
