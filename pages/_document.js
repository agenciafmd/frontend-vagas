import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import theme, { inter } from '../src/styles/theme'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()]
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html
        lang="pt-br"
        className={`${inter.className} scroll-smooth`}
        style={{ scrollBehavior: 'smooth' }}
      >
        <Head>
          <meta
            name="description"
            content="Descubra as melhores playlists, os melhores albums e singles do momento no Spotify."
          />
          <meta name="theme-color" content={theme.pallete.primary.main} />
          <link rel="shortcut icon" href="favicon.svg" type="svg" />
          <link
            rel="canonical"
            href="https://menos-do-mesmo.vercel.app/"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
