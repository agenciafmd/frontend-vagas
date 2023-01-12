import { useWindowSize } from '../../hooks/useWindowSize.js'
import { Slider } from '../Slider/index.jsx'
import { CardRating } from './CardRating'
import { SectionTwoCards, SectionTwoContainer } from './style'

export function SectionTwo() {
  const { width } = useWindowSize()

  return (
    <SectionTwoContainer>
      <h1>Lorem Ipsum Dolor</h1>
      <SectionTwoCards>
        {width > 576 && (
          <>
            <CardRating rating={2} />
            <CardRating rating={1} />
            <CardRating rating={5} />
          </>
        )}

        {width <= 576 && (
          <Slider>
            <CardRating rating={2} />
            <CardRating rating={1} />
            <CardRating rating={5} />
          </Slider>
        )}
      </SectionTwoCards>
    </SectionTwoContainer>
  )
}
