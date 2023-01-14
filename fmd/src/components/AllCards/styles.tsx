import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
  width: 100vw;
  background-color: ${theme.colors.secondaryColor};
  color: ${theme.colors.primaryColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  `}
`;

export const CardContainer = styled.div<{
  slider: boolean;
}>`
  ${({ theme, slider }) => css`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  align-items: center;

  ${
    slider
      ? css`
      @media (min-width: 1446px) {
        justify-content: center;

      }
      flex-wrap: nowrap;
      overflow-x: scroll;
      overflow-y: hidden;
    /* width */
    ::-webkit-scrollbar {
      /* width: 5px; */
      height: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      border-radius: 7px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background:${theme.colors.primaryColor};
      border-radius: 5px;
    }
      `
      : css`
      justify-content: center;
      @media ${theme.media.lteMedium} {
        flex-direction: column;
      }`
  }

  `}
`;
