import Image from 'next/image'
import { CardContainer, CardImageContainer, CardInfos } from './style'

export function Card({ title, sub, thumb }) {
  return (
    <CardContainer>
      <CardImageContainer>
        <Image src={thumb} alt="Thumb" width={250} height={250} />
      </CardImageContainer>
      <CardInfos>
        <h3>{title}</h3>
        <span>{sub}</span>
      </CardInfos>
    </CardContainer>
  )
}
