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
  .content {

    button {
      width: 8rem;
      height: 2rem;
      border: none;
      border-radius: 5rem;
      background: #1c1c1c;
      color: #fff;
      font-size: 1rem;
      font-weight: 700;
      margin-top: 1rem;
      cursor: pointer;
      
      transition: all 0.6;
      
      &:hover {
        opacity: 0.8;
      }
    }
    input {
      width: 11rem;
      height: 2rem;
      padding: 1rem;
      margin-left: 1rem;
      border: none;
      border-radius: 0.5rem;
      background: #fff;
      color: #1c1c1c;
      font-size: 1rem;
    }
  }
`;