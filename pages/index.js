import { Row } from 'react-bootstrap'
import bg from '../src/assets/banner/background.jpg'
import { Highlight } from '../src/components/Highlight'
import { SectionOne } from '../src/components/SectionOne'

const highlightcontent = [
  {
    thumb: bg
  }
]

export default function Home() {
  return (
    <>
      <Row className="m-0">
        <Highlight content={highlightcontent} />
      </Row>

      <Row className="m-0">
        <SectionOne />
      </Row>
    </>
  )
}
