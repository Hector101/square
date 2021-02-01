import { Text, Button, Flex } from '@chakra-ui/react'
import React from 'react'
import Link from 'next/link'

import withLayout from 'src/modules/shared/hoc/withLayout'
import PageHeader from 'src/modules/shared/components/PageHeader'

const NotFount = () => (
  <PageHeader title="Not Found">
    <Flex
      justify="flex-start"
      align="center"
      direction="column"
      mt={[16, null, 20]}
      w="100%"
      h="100vh"
    >
      <Text size="md" mb={8}>Page Not Found</Text>
      <Link href="/">
        <Button w="150px">
          Go Back Home
        </Button>
      </Link>
    </Flex>
  </PageHeader>
)

export default withLayout(NotFount, 'classic', {
  hasFooter: false,
})
