import { Row } from 'react-bootstrap'
import bg from '../src/assets/banner/background.jpg'
import { Highlight } from '../src/components/Highlight'

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
    </>
  )
}
