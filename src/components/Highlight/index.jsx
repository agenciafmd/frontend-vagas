import Image from 'next/image'
import spotifyButton from '../../assets/spotify-button.svg'
import { Slider } from '../Slider'
import { SlideOption } from '../Slider/style'
import {
  Gradient,
  HighlightContainer,
  HighlightInfosBox,
  HighlightInfosContainer,
  HighlightThumbContainer
} from './style'

export function Highlight({ content }) {
  if (content.length === 0) return

  return (
    <HighlightContainer>
      <Slider amount={content[0].playlists.items}>
        {content[0].playlists.items.map((item, index) => {
          return (
            <SlideOption key={index + 1}>
              <HighlightThumbContainer>
                <Gradient />
                <Image
                  src={item.images[0].url}
                  alt="Banner"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </HighlightThumbContainer>

              <HighlightInfosContainer>
                <HighlightInfosBox>
                  <hr />
                  <h1>{item.name}</h1>
                </HighlightInfosBox>

                <p>{item.description}</p>

                <a
                  href={item.external_urls.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={spotifyButton}
                    alt="Spotify Button"
                    width={205}
                    height={77}
                    style={{ cursor: 'pointer' }}
                  />
                </a>
              </HighlightInfosContainer>
            </SlideOption>
          )
        })}
      </Slider>
    </HighlightContainer>
  )
}
