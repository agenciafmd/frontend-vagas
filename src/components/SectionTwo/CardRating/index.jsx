import Image from 'next/image'
import dino from '../../../assets/cardRating/dino.png'
import { Rating } from '../../Rating'
import {
  CardRatingContainer,
  CardRatingImageContainer,
  CardRatingInfos
} from './style'

export function CardRating({ rating }) {
  return (
    <CardRatingContainer>
      <CardRatingImageContainer>
        <hr />
        <Image src={dino} alt="alt" className="cardRatingImage" />
      </CardRatingImageContainer>

      <CardRatingInfos>
        <div className="cardRatingTitle">
          <h3>Lorem Ipsum!!</h3>
          <Rating value={rating} />
        </div>
        <p>
          Quisque cursus nunc urna, eget ultricies orci accumsan at. Cras metus
          nibh, viverra vitae erat ut, lacinia interdum nisl...
        </p>
      </CardRatingInfos>
    </CardRatingContainer>
  )
}
