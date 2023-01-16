import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  padding: 0 80px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  div.content {
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    letter-spacing: 0.2rem;
    margin-bottom: 20px;
    background: rgba(0, 0, 0, 0.9);
  
    h1 {
      font-size: 8rem;
      font-weight: 100;
      color: #fff;
    }
  }

  div.fone-icons {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: #fff;

    p {
      font-size: 1.5rem;
      font-weight: 100;
      margin: 20px;
    }

    div.icons {
      display: flex;
    }
  }

  @media (max-width: 768px) {
    div.content {
      h1 {
        font-size: 3.2rem;
      }
      p {
        font-size: 1rem;
      }
      div.fone-icons {
        flex-direction: column;
      }
    }
  }
  @media (max-width: 425px) {
    div.content {
      h1 {
        font-size: 3rem;
      }
      p {
        font-size: .4rem;
      }
      div.fone-icons {
        flex-direction: column;
      }
    }
  }
`;