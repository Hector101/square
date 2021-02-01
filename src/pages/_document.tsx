import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'

import { theme } from 'src/design/theme'

class MyDocument extends Document<{ lang: string }> {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)

    return {
      ...initialProps,
    }
  }

  render() {
    return (
      <Html lang={this.props.lang || 'en'} style={{ scrollBehavior: 'smooth' }}>
        <Head>
          <link rel="icon" type="image/png" href="/favicon.ico" />
          <meta charSet="utf-8" />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
