import React from 'react'

import withLayout from 'src/modules/shared/hoc/withLayout'
import PageHeader from 'src/modules/shared/components/PageHeader'
import HomePage from 'src/modules/home/components/HomePage'

const Index = () => (
  <PageHeader title="Home">
    <HomePage />
  </PageHeader>
)

export default withLayout(Index, 'main', {
  hasFooter: false,
})
