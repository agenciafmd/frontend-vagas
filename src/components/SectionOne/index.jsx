import Image from 'next/image'
import claws from '../../assets/claws.svg'
import { Card } from './Card'
import { SectionOneCards, SectionOneContainer } from './style'

export function SectionOne() {
  return (
    <SectionOneContainer>
      <h1>Lorem Ipsim Dolor</h1>
      <SectionOneCards>
        <Image src={claws} alt="claws" className="bg--section_one" />
        <Card />
        <Card />
        <Card />
        <Card />
      </SectionOneCards>
    </SectionOneContainer>
  )
}
