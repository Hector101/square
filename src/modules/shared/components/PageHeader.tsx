import React from 'react'
import Head from 'next/head'

type PageHeaderProps = {
  title: string
  description?: string
  image_url?: string
  ogType?: 'website'
  ogDescription?: string
}

const PageHeader: React.FC<PageHeaderProps> = ({
  children,
  title,
  description,
  image_url = '/img/logo.png',
  ogType = 'website',
  ogDescription,
}) => {
  return (
    <>
      <Head>
        <title>{title} | Spark</title>
        <meta name="description" content={description} />
        <meta name="theme-color" content="#4b5548" />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:image" content={image_url} />
        <meta property="og:site_name" content="Black Jobs" />
        <meta property="og:type" content={ogType} />
        <meta property="og:image:alt" content={title} />
      </Head>
      {children}
    </>
  )
}
export default PageHeader
