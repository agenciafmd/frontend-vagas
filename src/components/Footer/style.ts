import styled from "styled-components";

export const FooterStyled = styled.footer`
  background-color: black;
  width: 100%;
  height: 250px;
  color: #dca441;

  div {
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    gap: 30px;
    flex-direction: column;
    align-items: center;
    padding-top: 45px;

    @media (min-width: 700px) {
      gap: 0;
      padding-right: 25px;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
    }
  }
  p {
    font-size: 25px;
  }
  img {
    width: 150px;
    height: 150px;
  }
`;
