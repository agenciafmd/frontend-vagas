import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="description" content="A landing page for frontend test" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/public/favicon.svg" type="svg" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
