import { Card } from './Card'
import { SectionOneCards, SectionOneContainer } from './style'

export function SectionOne({ content }) {
  if (content.length === 0) return

  return (
    <SectionOneContainer id="sectionOne">
      <h2>Novos Lançamentos</h2>
      <SectionOneCards>
        {content.map((album, index) => {
          return (
            <a
              key={index + 1}
              href={album.external_urls.spotify}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card
                title={album.name}
                sub={album.artists[0].name}
                thumb={album.images[1].url}
              />
            </a>
          )
        })}
      </SectionOneCards>
    </SectionOneContainer>
  )
}
