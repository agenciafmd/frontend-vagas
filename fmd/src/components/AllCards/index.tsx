import { CardProps } from '../Card';
import { Card } from 'components/Card';
import { Heading } from 'components/Heading';
import * as Styled from './styles';

export type AllCardsProps = {
  cardData: CardProps[];
  slider?: boolean;
  id?: string;
};

export const AllCards = ({
  cardData,
  slider = false,
  id = 'Cards',
}: AllCardsProps) => {
  return (
    <Styled.Wrapper id={id}>
      <Heading as="h2">Cards {slider ? 'Slider' : ''}</Heading>
      <Styled.CardContainer slider={slider}>
        {cardData.map((card) => (
          <Card
            description={card.description}
            key={Math.random() * 154}
            price={card.price}
            thumbnail={card.thumbnail}
            title={card.title}
          ></Card>
        ))}
      </Styled.CardContainer>
    </Styled.Wrapper>
  );
};
