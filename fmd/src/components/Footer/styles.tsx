import { Title } from 'components/Heading/styles';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.primaryColor};
    color:${theme.colors.secondaryColor};
    width: 100vw;
    height: 220px;
    >${Title}{
      color:${theme.colors.secondaryColor};
    }

    @media ${theme.media.lteMedium} {
      flex-direction: column;
    }
  `}
`;

export const Rights = styled.p`
  ${({ theme }) => css`
    border-left: 1px solid ${theme.colors.secondaryColor};
    padding: 5px;
    margin: 0;
    @media ${theme.media.lteMedium} {
      border:none;
      border-top: 1px solid ${theme.colors.secondaryColor} ;
    }

  `}
`;
