import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  useColorModeValue,
} from '@chakra-ui/react'
import React, { useState } from 'react'

import { Friend } from 'src/utils/getFriendsList'

type FriendCardProps = {
  friend: Friend
}


const FriendCard: React.FC<FriendCardProps> = ({
  friend,
}) => {
  const [isFollowing, setIsFollowing] = useState(false)
  const bgColor = useColorModeValue('white', 'secondaryLight')

  const toggleFollow = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <Box
      bgColor={bgColor}
      borderRadius="15px"
      w={['100%', null, null, '480px']}
      flex={['flex: 0 100%', 'flex: 0 50%']}
      mb={8}
    >
      <Box
        as="img"
        src={friend.banner}
        objectFit="cover"
        w="100%"
        h="100px"
        borderTopRadius="15px"
      />
      <Flex p={4} w="100%">
        <Box
          as="img"
          src={friend.photo}
          objectFit="cover"
          minW="88px"
          h="88px"
          border={['3px solid white', '5px solid white']}
          borderRadius="round"
          transform="translateY(-40px)"
        />
        <Box ml={2} w="100%">
          <Flex
            align="flex-start"
            justify="space-between"
            direction={['column', 'row']}
          >
            <Box mb={[4, 0]}>
              <Heading as="h2" fontSize="24px">
                {friend.name}
              </Heading>
              <Text color="textSecondary">{friend.handle}</Text>
            </Box>
            <Button
              onClick={toggleFollow}
              variant={isFollowing ? 'primary' : 'outline'}
            >
              {isFollowing ? 'Following' : 'Follow'}
            </Button>
          </Flex>
          <Text mt={4}>{friend.content}</Text>
        </Box>
      </Flex>
    </Box>
  )
}

export default FriendCard
