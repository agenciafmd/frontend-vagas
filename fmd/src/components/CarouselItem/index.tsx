import { Heading } from 'components/Heading';
import * as Styled from './styles';

export type CarouselItemProps = {
  title: string;
  description: string;
  price: string;
  thumbnail: string;
};

export const CarouselItem = ({
  title,
  description,
  price,
}: CarouselItemProps) => {
  return (
    <Styled.Wrapper>
      <Styled.ProductContainer>
        <Heading as="h2">{title}</Heading>
        <Styled.DivisorTitleAndDescription />
        <p>{description}</p>
        <Styled.Price> $ {price},00</Styled.Price>
      </Styled.ProductContainer>
    </Styled.Wrapper>
  );
};
