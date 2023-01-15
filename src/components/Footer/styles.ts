import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.footer)`
  width: 100%;
  height: 20rem;
  background: black;
  color: white;
  bottom: 0;
  box-shadow: 0px -1px 5px 0px rgba(0, 0, 0, 0.75);
  z-index: 99999;

  
  div.footer1 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;

    p {
      padding-top: .6rem;
    }
  }
  
  div.footer2 {
   padding-top: 3rem;
    p {
      text-align: center;
      
      span {
        display: felx;
        margin-top: 10px;
        justify-content: center;
      }
    }
  }


  div.footer3 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    div.icons {
      padding: 1rem;
    }
    h3 {
      padding: 1rem;
    }
  }
`;