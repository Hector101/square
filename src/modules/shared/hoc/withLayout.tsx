import { NextPage } from 'next'
import React from 'react'

import MainLayout from '../components/Layout/MainLayout'
import ClassicLayout from '../components/Layout/ClassicLayout'

const layouts = {
  main: MainLayout,
  classic: ClassicLayout,
}

function withLayout<T>(
  Component: NextPage<T>,
  variant: keyof typeof layouts = 'main',
  layoutsProps?: React.ComponentProps<typeof layouts[typeof variant]>
) {
  const Layout = layouts[variant]

  const WithLayoutComponent = (props: T) => (
    <Layout {...layoutsProps}>
      <Component {...props} />
    </Layout>
  )

  if ('getInitialProps' in Component) {
    WithLayoutComponent.getInitialProps = Component.getInitialProps
  }

  return WithLayoutComponent
}

export default withLayout
