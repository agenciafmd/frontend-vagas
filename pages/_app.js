import 'bootstrap/dist/css/bootstrap.min.css'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { Layout } from '../src/components/Layout'
import { GlobalStyle } from '../src/styles/global'
import theme from '../src/styles/theme'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="description" content="A landing page for frontend test" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/public/favicon.svg" type="svg" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}
