import { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import { getItem, setItem } from '../src/common/storage'
import { Highlight } from '../src/components/Highlight'
import { Newsletter } from '../src/components/Newsletter'
import { SectionOne } from '../src/components/SectionOne'
import { SectionTwo } from '../src/components/SectionTwo'
import auth from '../src/service/auth'
import spotify from '../src/service/spotify'

export default function Home({ authorization }) {
  const [highlightContent, setHighlightContent] = useState([])

  useEffect(() => {
    setItem('token', authorization.access_token)

    const getEndpointForHighlight = async () => {
      try {
        const responseHighlight = await spotify.get(
          '/browse/featured-playlists',
          {
            headers: {
              Authorization: `Bearer ${getItem('token')}`
            }
          }
        )
        setHighlightContent(oldArr => [...oldArr, responseHighlight.data])
      } catch (error) {
        console.log(error.message, 'tycatch index l24')
      }
    }
    getEndpointForHighlight()
  }, [])

  return (
    <>
      <Row className="m-0">
        <Highlight content={highlightContent} />
      </Row>

      <Row className="m-0">
        <SectionOne />
      </Row>

      <Row className="m-0">
        <SectionTwo />
      </Row>

      <Row className="m-0">
        <Newsletter />
      </Row>
    </>
  )
}

export const getStaticProps = async () => {
  try {
    const response = await auth.post()
    const authorization = response.data

    return {
      props: { authorization },
      revalidate: authorization.expires_in
    }
  } catch (error) {
    console.log(error)
  }
}
