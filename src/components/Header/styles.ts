import styled from "styled-components";

export const HeaderStyled = styled.div`
  position: relative;

  div:first-child {
    position: absolute;
    display: flex;
    width: 100%;
    justify-content: space-between;
    backdrop-filter: blur(7px);
    padding: 10px 25px;
    z-index: 3;
    .logo {
      width: 150px;
      height: 70px;
      @media (min-width: 900px) {
        margin-left: 130px;
      }
    }
  }

  .menu-btn {
    width: 40px;
    height: 40px;
    margin-top: 15px;
    cursor: pointer;
    @media (min-width: 700px) {
      display: none;
    }
  }
  .link-div {
    display: none;
    @media (min-width: 700px) {
      display: flex;
      gap: 25px;
    }
    @media (min-width: 900px) {
        margin-right: 130px;
      }
    a {
      margin-top: 20px;
      border-bottom: 3px solid red;
      text-decoration: none;
      color: white;
      font-size: 20px;
    }
  }

  .menu {
    position: absolute;
    border-right: 2px solid red;
    border-top: 2px solid red;
    width: 40%;
    height: 190px;
    top: 30px;
    right: 15px;
    z-index: 22;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 15px;
    @media (min-width: 700px) {
      display: none;
    }

    button {
      background-color: transparent;
      color: white;
      font-size: 35px;
      border: none;
      font-weight: bold;
      margin-right: 15px;
      margin-bottom: 5px;
      cursor: pointer;
    }
    a {
      background-color: red;
      padding: 2px 7px;
      color: white;
      text-decoration: none;
      font-size: 18px;
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }
  }
`;
