import { Row } from 'react-bootstrap'
import bg from '../src/assets/banner/background.jpg'
import { Highlight } from '../src/components/Highlight'
import { Newsletter } from '../src/components/Newsletter'
import { SectionOne } from '../src/components/SectionOne'
import { SectionTwo } from '../src/components/SectionTwo'
import { useWindowSize } from '../src/hooks/useWindowSize'

const highlightcontent = [
  {
    thumb: bg
  }
]

export default function Home() {
  const { width } = useWindowSize()

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

      {/* <Row className="m-0">{width > 576 && <Newsletter />}</Row> */}
      <Row className="m-0">
        <Newsletter />
      </Row>
    </>
  )
}
