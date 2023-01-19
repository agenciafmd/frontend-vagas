import { useEffect } from 'react'
import { Row } from 'react-bootstrap'
import bg from '../src/assets/banner/background.jpg'
import { setItem } from '../src/common/storage'
import { Highlight } from '../src/components/Highlight'
import { Newsletter } from '../src/components/Newsletter'
import { SectionOne } from '../src/components/SectionOne'
import { SectionTwo } from '../src/components/SectionTwo'
import auth from '../src/service/auth'

const highlightcontent = [
  {
    thumb: bg
  }
]

export default function Home({ authorization }) {
  useEffect(() => {
    setItem('token', authorization.access_token)
  }, [])

  return (
    <>
      <Row className="m-0">
        <Highlight content={highlightcontent} />
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
      revalidate: 3600
    }
  } catch (error) {
    console.log(error)
  }
}
