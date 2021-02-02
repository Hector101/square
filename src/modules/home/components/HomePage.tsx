import { Box, Heading } from '@chakra-ui/react'
import React from 'react'

import FriendsList from './FriendsList'

const HomePage = () => {
  return (
    <Box maxW="1024px" mx="auto" p={[8, null, null, 0]}>
      <Heading size="sm" mt={8}>Friends List</Heading>
      <FriendsList />
    </Box>
  )
}

export default HomePage
