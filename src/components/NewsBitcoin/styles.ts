import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  min-height: 100vh;
  flex-direction: column;

  div.bitcoin{
    width: 100%;
    height: 100%;
    padding: 1rem;
    display: flex;
    justify-content: end justify;
    align-items: center;
    
    img {
      width: 70px;
      height: 70px;
    }
    
    h1 {
      font-size: 3rem;
      font-weight: 700;
      margin-left: 1rem;
      color: #fff;
    }
  }

  @media (max-width: 768px) {
    div.bitcoin {
      img {
        width: 50px;
        height: 50px;
      }
      h1 {
        font-size: 1.5rem;
      }
    }
  }
  @media (max-width: 425px) {
    div.bitcoin {
      position: relative;
      top: -26px;
      img {
        width: 40px;
        height: 40px;
      }
      h1 {
        font-size: 1rem;
      }
    }
  }
`;

export const Carousel = styled(motion.div)`
  cursor: grab;
  overflow: hidden;
`;

export const Inner = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Item = styled(motion.div)`
  width: 15rem;
  min-width: 15rem;
  min-height: 29rem;
  padding: 1rem;
  margin: 1rem;
  border-radius: 0.5rem;
  background: #fff;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.8);
  
  
  img {
    width: 100%;
    max-height: 9rem;
    padding: 1rem;
    object-fit: cover;
    pointer-events: none;
  }
  h1 {
    font-size: 1rem;
    font-weight: 600;
    margin-top: 1rem;
  }
  p {
    font-size: .8rem;
    font-weight: 300;
    margin-top: 0.5rem;
    word-wrap: break-word;
  }
`;