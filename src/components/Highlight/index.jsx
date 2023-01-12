import Image from 'next/image'
import { Slider } from '../Slider'
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
      <Slider>
        {content.map((item, index) => {
          return (
            <div key={index + 1}>
              <HighlightThumbContainer>
                <Gradient />
                <Image src={item.thumb} alt="Banner" />
              </HighlightThumbContainer>

              <HighlightInfosContainer>
                <HighlightInfosBox>
                  <hr />
                  <h1>Lorem ipsum dolor sit amet</h1>
                </HighlightInfosBox>

                <p>
                  Quisque cursus nunc urna, eget ultricies orci accumsan at.
                  Cras metus nibh, viverra vitae erat ut, lacinia interdum nisl.
                </p>
              </HighlightInfosContainer>
            </div>
          )
        })}
      </Slider>
    </HighlightContainer>
  )
}
