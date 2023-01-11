import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.header)`
  width: 100%;
  height: 100px;
  background: rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  z-index: 99999;
`;