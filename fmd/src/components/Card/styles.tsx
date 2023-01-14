import styled, { css } from 'styled-components';
import { Title } from '../Heading/styles';
export const Wrapper = styled.div`
  ${({ theme }) => css`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 280px;
  width: 280px;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.primaryColor};
  color:${theme.colors.secondaryColor};
  border-radius: 30px 30px 0 0;
  margin: 40px;
  margin-top: 40px;
  padding-top: 90px;
  height: 350px;
  word-wrap: break-word;

>${Title}{
  color:${theme.colors.secondaryColor};
  margin-top: 70px;
  position: absolute;
  top: 3rem;
}
  `}
`;

export const Thumb = styled.img`
  ${() => css`
  width: 120px;
  height: 100px;
  position: absolute;
  top: -3rem;
  border-radius: 30px;
  `}
`;

export const Btn = styled.button`
  ${({ theme }) => css`
  position: absolute;
  background-color: ${theme.colors.secondaryColor};
  color: ${theme.colors.primaryColor};
  bottom: -3rem;
  padding: 15px;
  border-radius: 15px;
  outline: none;
  border: ${theme.colors.secondaryColor} 3px solid;
  font-weight: 200;
  &:hover{
    cursor: pointer;
  }
  `}
`;

export const Description = styled.p`
  ${() => css`
  width: 80%;
  text-align: justify;
`}
`;

export const Price = styled.p`
  ${() => css`
  position: absolute;
  bottom: 0;

  `}
`;
