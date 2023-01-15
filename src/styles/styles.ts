import styled from "styled-components";
import Grass from "../assets/img/grass.png";

export const ChoosenStyled = styled.section`
  /* margin-top: 20px; */
  padding-top: 30px;
  margin-bottom: 20px;
  background-image: linear-gradient(to bottom, #8c8c8c, white);
  display: flex;
  flex-direction: column;
  gap: 20px;

  h2:first-child {
    margin: 0 auto;
    width: 70%;
    font-size: 24px;
    font-weight: bolder;
    color: #dfae3c;
    text-decoration: underline;
    text-align: center;
  }
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    gap: 20px;
    width: 70%;
    @media (min-width: 700px) {
      flex-direction: row;
      justify-content: space-around;
      gap: 10px;
    }
    @media (min-width: 1400px) {
      width: 60%;
    }
    @media (min-width: 1700px) {
      width: 40%;
    }

    li {
      position: relative;
      width: 80%;
      height: 300px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-top-left-radius: 16px;
      border-top-right-radius: 16px;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
      border: 2px solid black;
      background-image: linear-gradient(#49c600 55%, #2f8000);
      @media (min-width: 500px) {
        width: 60%;
      }
      @media (min-width: 700px) {
        width: 30%;
      }

      img:first-child {
        height: 128px;
        width: 100%;
        border-top-left-radius: 16px;
        border-top-right-radius: 16px;
        padding: 0 45px;
        background-image: url(${Grass}), linear-gradient(#71fff2 10%, #01b1e1);
        background-size: cover;
        background-position: bottom;
      }
      h2 {
        margin: 10px 4px 0 4px;
        font-weight: bold;
        font-size: 25px;
        border-bottom: 2px solid #5d0083;
        /* border-radius: 16px; */
        padding: 2px 4px;
        color: #5d0083;
      }
      button {
        margin-top: 70px;
        width: 60%;
        height: 36px;
        border: 2px solid #5d0083;
        font-size: 18px;
        border-radius: 16px;
        background-image: linear-gradient(#ff050d, #950206);
        color: #c4c4c4;
      }

      .icon {
        position: absolute;
        bottom: 65px;
        background-color: transparent;
        width: 50px;
        height: 50px;
      }
    }
  }
`;
