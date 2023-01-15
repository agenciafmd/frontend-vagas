import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding: 0 5rem;
  position: absolute;
  
  h1 {
    font-size: 3rem;
    font-weight: 700;
    color: #1c1c1c;
  }
  p {
    font-size: 1.5rem;
    font-weight: 400;
    color: #1c1c1c;
  }
  label {
    font-size: 1rem;
    font-weight: 700;
    color: #1c1c1c;
    margin-top: 2rem;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;

    button {
      width: 100%;
      height: 2.5rem;
      margin-top: 1.2rem;
      border: none;
      border-radius: 5rem;
      background: #1c1c1c;
      color: #fff;
      font-size: 1rem;
      font-weight: 700;
      cursor: pointer;
      
      transition: all 0.6;
      
      &:hover {
        opacity: 0.8;
      }
    }
    div.email, div.name {
      span {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 0.5rem;
        font-size: 1rem;
        font-weight: 700;
        color: #ff0000;
      }
      input {
        width: 18rem;
        height: 2.5rem;
        padding: 1rem;
        border: none;
        border-radius: 0.5rem;
        background: #fff;
        color: #1c1c1c;
        font-size: .8rem;
      }
    }
  }
`;