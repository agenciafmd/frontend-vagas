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
  }
  
  @media (max-width: 768px) {
    padding: 0 3rem;

    h1 {
      font-size: 1.5rem;
    }
    p {
      font-size: .6rem;
    }
    label {
      font-size: .7rem;
    }
    form {
      div.email, div.name {
        span {
          font-size: .6rem;
        }
        input {
          width: 10rem;
          height: 1.5rem;
          padding: .5rem;
          font-size: .6rem;
        }
      }
      button {
        width: 100%;
        height: 1.5rem;
        margin-top: .5rem;
        font-size: .6rem;
      }
    }
  }
  @media (max-width: 425px) {
    padding: 0 1rem;

    h1 {
      font-size: 1rem;
    }
    p {
      font-size: .5rem;
    }
    label {
      font-size: .5rem;
    }
    form {
      div.email, div.name {
        span {
          font-size: .5rem;
        }
        input {
          width: 8rem;
          height: 1rem;
          padding: .4rem;
          font-size: .5rem;
        }
      }
      button {
        width: 100%;
        height: 1.3rem;
        margin-top: .4rem;
        font-size: .5rem;
      }
    }
  }
`;