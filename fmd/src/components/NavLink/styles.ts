import styled, { css } from 'styled-components';

export const Wrapper = styled.nav<{ iconClick: boolean }>`
  ${({ theme, iconClick }) => css`
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    @media ${theme.media.lteMedium} {
      ${iconClick ? `display:flex;` : 'display:none;'}
      padding:${theme.spacings.xxlarge} 0 ;
      position:absolute;
      z-index:0;
      flex-direction:column;
      top:50px;
      left:0;
      width:100vw;
      height: 100vh;
      background-color:${theme.colors.secondaryColor};

    }
  `}
`;
