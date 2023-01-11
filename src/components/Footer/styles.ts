import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.footer)`
  width: 100%;
  height: 100px;
  background: black;
  color: white;
  bottom: 0;
  z-index: 99999;

  p {
    text-align: center;
    padding: 20px;
    
  }
`;