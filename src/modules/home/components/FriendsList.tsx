import {
  Flex,
  Text,
} from '@chakra-ui/react'
import React from 'react'

import FriendCard from './FriendCard'
import useFriendsList from 'src/hooks/useFriendsList'


const FriendsList = () => {

  const {
    loading,
    error,
    friendsList
  } = useFriendsList()

  if (loading || !friendsList.length) {
    return (
      <Flex
        w="100%"
        h="100vh"
        align="flex-start"
        justify="center"
        mt={10}
      >
       <Text size="lg">Fetching friends...</Text>
      </Flex>
    )
  }

  if (error) {
    return (
      <Flex
        w="100%"
        h="100vh"
        align="flex-start"
        justify="center"
        mt={10}
      >
        {error}
      </Flex>
    )
  }

  return (
    <Flex
      mt={8}
      flexWrap="wrap"
      align="stretch"
      justify="space-between"
    >
      {
        friendsList.map((friend) => (
          <FriendCard
            key={friend.name}
            friend={friend}
          />
        ))
      }
    </Flex>
  )
}

export default FriendsList
