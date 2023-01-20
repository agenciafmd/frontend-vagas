import { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import { setItem } from '../src/common/storage'
import { Highlight } from '../src/components/Highlight'
import { Newsletter } from '../src/components/Newsletter'
import { SectionOne } from '../src/components/SectionOne'
import { SectionTwo } from '../src/components/SectionTwo'
import auth from '../src/service/auth'
import getFeaturedPlaylists from '../src/service/endpoints/getFeaturedPlaylists'
import getNewsAlbumsReleases from '../src/service/endpoints/getNewsAlbumsReleases'
import getRecommendations from '../src/service/endpoints/getRecommendations'

export default function Home({ authorization }) {
  const [highlightContent, setHighlightContent] = useState([])
  const [sectionOneContent, setSectionOneContent] = useState('')
  const [sectionTwoContent, setSectionTwoContent] = useState('')

  useEffect(() => {
    setItem('token', authorization.access_token)

    const triggersAPIEndpoints = async () => {
      const highlightResponse = await getFeaturedPlaylists()
      setHighlightContent(oldArr => [...oldArr, highlightResponse])

      const sectionOneResponse = await getNewsAlbumsReleases()
      setSectionOneContent(sectionOneResponse.albums.items)

      const sectionTwoResponse = await getRecommendations()
      setSectionTwoContent(sectionTwoResponse.tracks)
    }
    triggersAPIEndpoints()
  }, [])

  return (
    <>
      <Row className="m-0">
        <Highlight content={highlightContent} />
      </Row>

      <Row className="m-0">
        <SectionOne content={sectionOneContent} />
      </Row>

      <Row className="m-0">
        <SectionTwo content={sectionTwoContent} />
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
