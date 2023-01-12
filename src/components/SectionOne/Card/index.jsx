import Image from 'next/image'
import dino from '../../../assets/card/dino.png'
import footdino from '../../../assets/card/footdino.svg'
import {
  CardButton,
  CardContainer,
  CardImageContainer,
  CardInfos
} from './style'

export function Card() {
  return (
    <CardContainer>
      <CardImageContainer>
        <Image src={dino} alt="dino" />
      </CardImageContainer>
      <CardInfos>
        <h3>Lorem Ipsum</h3>
        <p>
          Quisque cursus nunc urna, eget ultricies orci accumsan at. Cras metus
          nibh, viverra vitae erat ut, lacinia interdum nisl.
        </p>
      </CardInfos>
      <CardButton>
        <Image src={footdino} alt="footdino" height={42} />
      </CardButton>

      <div className="bg" />
    </CardContainer>
  )
}
