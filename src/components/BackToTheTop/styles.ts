import styled from "styled-components";

export const Container = styled.div`
 
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 1rem;
  border-radius: 50%;
  background: #8baeca;
  cursor: pointer;
  z-index: 9999999;

  transition: 0.3s ease-in-out;
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }

  @media (max-width: 786px) {
    margin: 0rem .5rem 4.5rem 0rem;
  }
  @media (max-width: 425px) {
    margin: 0rem .5rem 3rem 0rem;
  }
`;