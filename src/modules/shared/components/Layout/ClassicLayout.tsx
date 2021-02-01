import { Box } from '@chakra-ui/react'
import React from 'react'

import ClassicTopNav from 'src/modules/shared/components/TopNav/ClassicTopNav'
import Footer from 'src/modules/shared/components/Footer/Footer'

type ClassicLayoutProps = {
  bgColor?: string
  hasFooter?: boolean
  hasBorder?: boolean
}

const ClassicLayout: React.FC<ClassicLayoutProps> = ({
  children,
  bgColor,
  hasFooter = true,
  hasBorder,
}) => {
  return (
    <Box minHeight="100vh" bgColor={bgColor || 'offwhite'} color="textPrimary">
      <ClassicTopNav hasBorder={hasBorder} />
      {children}
      {hasFooter && <Footer />}
    </Box>
  )
}

export default ClassicLayout
