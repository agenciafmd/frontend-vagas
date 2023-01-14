import styled, { css } from 'styled-components';

export const Link = styled.a`
  ${({ theme }) => css`
    text-decoration: none;
    color:${theme.colors.primaryColor};
    display: block;
    padding: 10px;
    margin: 5px;
    position: relative;
    border-bottom: solid 1px ${theme.colors.secondaryColor};

    &:hover{
      border-bottom: solid 1px ${theme.colors.primaryColor};
    }

  `}
`;
