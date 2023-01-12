import Image from 'next/image'
import arrowLeft from '../../../src/assets/arrowLeft.svg'
import arrowRight from '../../../src/assets/arrowRight.svg'
import {
  Gradient,
  HighlighPagination,
  HighlightContainer,
  HighlightInfosBox,
  HighlightInfosContainer,
  HighlightThumbContainer
} from './style'

export function Highlight({ content }) {
  return (
    <HighlightContainer>
      <HighlightThumbContainer>
        <Gradient />
        <Image src={content[0].thumb} alt="Banner" />
      </HighlightThumbContainer>

      <HighlightInfosContainer>
        <HighlightInfosBox>
          <hr />
          <h1>Lorem ipsum dolor sit amet</h1>
        </HighlightInfosBox>

        <p>
          Quisque cursus nunc urna, eget ultricies orci accumsan at. Cras metus
          nibh, viverra vitae erat ut, lacinia interdum nisl.
        </p>
      </HighlightInfosContainer>

      <HighlighPagination>
        <div className="ellipses">
          <div className="ellipse active" />
          <div className="ellipse" />
          <div className="ellipse" />
        </div>
        <div className="arrows">
          <Image src={arrowRight} alt="arrow right" />
          <Image src={arrowLeft} alt="arrow left" />
        </div>
      </HighlighPagination>
    </HighlightContainer>
  )
}
