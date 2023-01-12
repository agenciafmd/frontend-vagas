import Image from 'next/image'
import {
  Gradient,
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
    </HighlightContainer>
  )
}
