import { Heading } from 'components/Heading';
import * as Styled from './styles';

export type FooterProps = {
  title?: string;
};

export const Footer = ({ title }: FooterProps) => {
  return (
    <Styled.Wrapper id="Footer">
      <Heading as="h4">{title}</Heading>
      <Styled.Rights> ® All rights reserved</Styled.Rights>
    </Styled.Wrapper>
  );
};
