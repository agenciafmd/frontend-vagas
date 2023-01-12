import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  padding: 0 80px;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 11rem;
    color: #fff;
  }
  p {
    font-size: 2rem;
    color: #fff;
  }

  .options {
    display: flex;
    flex-direction: row;
    align-items: space-between;
    justify-content: center;
    margin-top: 20px;

    button {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 200px;
      height: 200px;
      font-size: 2rem;
      margin: .5rem;
      border: none;
      border-radius: 10rem;
      background: #1c1c1c;
    }
    
    .free{
      color: #8baeca;
    }
    .premium{
      color: #ffd700;

      span {
        font-size: 1.5rem;
        color: #8baeca;
      }
    }
  }
`;