import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
  display:flex;
  align-items: center;
  justify-content: center;
  color:${theme.colors.primaryColor};
  background-color: ${theme.colors.secondaryColor};
  width: 100%;
  height: 400px;
  margin: 0;
  @media ${theme.media.lteMedium} {
    flex-direction: column;
  }
  `}
`;

export const Price = styled.div`
  ${({ theme }) => css`
  padding: 10px;
  border: 1px solid ${theme.colors.primaryColor};
  text-align: center;
  font-size: 25px;

  `}
`;
export const ProductContainer = styled.div`
  ${() => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  `}
`;
export const DivisorTitleAndDescription = styled.hr`
  ${() => css`
  display: block;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  margin-left: auto;
  margin-right: auto;
  border-style: inset;
  border-width: 1px;
  width: 100px;
  `}

`;
