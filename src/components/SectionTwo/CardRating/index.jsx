import Image from 'next/image'
import { Rating } from '../../Rating'
import {
  CardRatingContainer,
  CardRatingImageContainer,
  CardRatingInfos
} from './style'

export function CardRating({ title, sub, thumb, rating }) {
  return (
    <CardRatingContainer>
      <CardRatingImageContainer>
        <hr />
        <Image
          src={thumb}
          alt="alt"
          className="cardRatingImage"
          width={85}
          height={85}
        />
      </CardRatingImageContainer>

      <CardRatingInfos>
        <div className="cardRatingTitle">
          <h3>{title}</h3>
          <Rating value={rating} />
        </div>
        <span>{sub}</span>
      </CardRatingInfos>
    </CardRatingContainer>
  )
}
