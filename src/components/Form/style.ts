import styled from "styled-components";

export const FormSDivStyled = styled.div`
  margin: 0 auto;
  margin-top: 23px;
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-image: linear-gradient(to bottom, white 70%, black);
  height: 250px;
  @media (min-width: 700px) {
    height: 350px;
  }
  h2 {
    margin: 25px 0;
    font-weight: bold;
    font-size: 35px;
    color: #011fa5;
  }

  form {
    max-width: 1400px;
    width: 80%;
    padding: 25px;
    border: 2px solid blue;
    background-image: linear-gradient(45deg, #dca441, red 70%);
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    height: 100px;

    @media (min-width: 700px) {
      width: 70%;
      height: 150px;
    }
    @media (min-width: 900px) {
      width: 50%;
      height: 150px;
    }

    div {
      display: flex;
      flex-direction: column;
      width: 80%;
      gap: 15px;
      input {
        width: 90%;
        height: 35px;
        padding: 0 10px;
        @media (min-width: 700px) {
          height: 50px;
        }
      }
      span {
        color: blue;
        @media (min-width: 900px) {
          font-size: 20px;
        }
      }
    }

    button {
      background-color: #011fa5;
      border: 2px solid #dca441;
      border-radius: 20px;
      color: #dca441;
      width: 25%;
      height: 35px;
      font-size: 21px;
      @media (min-width: 700px) {
        height: 50px;
      }
    }
  }
`;
