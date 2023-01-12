import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.header)`
  width: 100%;
  height: 100px;
  padding: 3rem;
  background: rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 2rem;
    font-weight: 700;
    color: #8baeca;
  }
  a {
    text-decoration: none;
    color: #8baeca;
    font-size: 1.2rem;
    font-weight: 400;

    transition: color 0.2s;

    &:hover {
      color: #fff;
    }
  }

  #menu {
    display: flex;
    list-style: none;
    gap: 1rem;

    a {
      display: block;
      padding: 1rem;
    }
  }

  #btn-mobile {
    display: none;
  }
  
  @media (max-width: 768px) {
    #btn-mobile {
      display: flex;
      padding: .5rem 1rem;
      font-size: 1rem;
      border: none;
      background: transparent;
      cursor: pointer;
      gap: 1rem;
    }
    #hamburger {
      width: 20px;
      color: #8baeca;
      border-top: 3px solid;
    }
    #hamburger::after, #hamburger::before  {
      content: '';
      display: block;
      width: 20px;
      height: 3px;
      background: currentColor;
      margin-top: 5px;
      position: relative;

      transition: all 0.6s;
    }
    #nav.active #hamburger {
      border-top-color: transparent;
      color: #660000;
    }
    #nav.active #hamburger::after {
      transform: rotate(-135deg);
      top: -8px;
    }
    #nav.active #hamburger::before {
      transform: rotate(135deg);
    }
    #menu {
      display: none;
      position: absolute;
      width: 100%;
      top: 100px; 
      right: 0px;
      background: rgba(0, 0, 0, 0.1);
      text-align: center;
      justify-content: center;

      transition: all 0.6s;
      
      li {
        &:hover {
          background: #8baeca;
          border-radius: 5px;
        }
      }
    }
    #nav.active #menu {
      display: block;
    }
  }
`;