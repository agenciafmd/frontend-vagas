import { useWindowSize } from '../../hooks/useWindowSize.js'
import { Slider } from '../Slider/index.jsx'
import { CardRating } from './CardRating'
import { SectionTwoCards, SectionTwoContainer } from './style'

export function SectionTwo({ content }) {
  const { width } = useWindowSize()

  if (!content) return <></>

  return (
    <SectionTwoContainer>
      <h1>Recomendações</h1>
      <SectionTwoCards>
        {width > 576 && (
          <>
            {content.map((item, index) => {
              return (
                <a
                  key={index + 1}
                  href={item.external_urls.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CardRating
                    title={item.name}
                    sub={item.artists[0].name}
                    thumb={item.album.images[2].url}
                    rating={item.popularity / 20}
                  />
                </a>
              )
            })}
          </>
        )}

        {width <= 576 && (
          <Slider amount={content}>
            {content.map((item, index) => {
              return (
                <a
                  key={index + 1}
                  href={item.external_urls.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CardRating
                    title={item.name}
                    sub={item.artists[0].name}
                    thumb={item.album.images[2].url}
                    rating={item.popularity / 20}
                  />
                </a>
              )
            })}
          </Slider>
        )}
      </SectionTwoCards>
    </SectionTwoContainer>
  )
}
