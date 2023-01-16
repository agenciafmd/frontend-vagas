import styled from 'styled-components';

export const Container = styled.div`
  h1 {
    color: #fff;
    font-size: 12rem;
  }

  @media (max-width: 768px) {
    h1 {
      padding-top: 8rem;
      font-size: 5rem;
    }
  }
  @media (max-width: 425px) {
    h1 {
      padding-top: 6rem;
      font-size: 3rem;
    }
  }
`;