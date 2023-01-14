import styled, { css } from 'styled-components';

export const Wrapper = styled.header`
  ${({ theme }) => css`
  margin: 0;
  padding: 0;
  position: fixed;
  z-index: 5;
  width: 100%;
  top:0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color:${theme.colors.secondaryColor};
  `}
`;

export const LinksAndToggleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0px 20px 0px 5px;
`;
export const MenuIcon = styled.span`
  ${({ theme }) => css`
  display: none;

  @media ${theme.media.lteMedium} {
    display: block;
    font-size: 28px;
    padding: 10px;
    color:${theme.colors.primaryColor};
    margin-top: 5px;
    &:hover{
      color:darkgrey;
      cursor: pointer;
    }
  }
`}
`;
