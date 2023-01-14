import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;    
  justify-content: center;

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
  height: 25rem;
  min-width: 15rem;
  min-height: 28rem;
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
    font-weight: 400;
    margin-top: 0.5rem;
  }
`;