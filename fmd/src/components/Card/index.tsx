import { Heading } from 'components/Heading';
import * as Styled from './styles';

export type CardProps = {
  thumbnail: string;
  title: string;
  description: string;
  price: string;
};

export const Card = ({ title, description, price, thumbnail }: CardProps) => {
  return (
    <Styled.Wrapper>
      <Styled.Thumb src={thumbnail} alt={title} />
      <Heading as="h3">{title}</Heading>
      <Styled.Description>{description}</Styled.Description>
      <Styled.Price>${price}</Styled.Price>
      <Styled.Btn>BUY IT!</Styled.Btn>
    </Styled.Wrapper>
  );
};
