import styled, { css } from "styled-components";

interface iButtonProps {
  on: boolean;
}
export const ButtonStyled = styled.button<iButtonProps>`
  margin-top: 70px;
  width: 60%;
  height: 36px;
  border: 2px solid #5d0083;
  font-size: 18px;
  border-radius: 16px;
  ${({ on }) => {
    switch (on) {
      default:
      case true:
        return css`
          color: #c4c4c4;
          background-image: linear-gradient(#ff050d, #950206);
        `;
      case false:
        return css`
          background-image: linear-gradient(#b4b6bd, #848586);
          color: black;
        `;
    }
  }}
`;
