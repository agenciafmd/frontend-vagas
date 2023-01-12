import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Main = styled.div`
  .first {
    background: red;
    overflow: hidden;

    .offset {
      width: 100%;
      height: 100%;
    }

    .a {
      height: 100%;
      display: flex;
      align-items: flex-end;
      background: #f5f1ea;
    
      .left-side {
        width: 50%;
        height: 100%;
        background: #8baeca;
      }
      .right-side {
        width: 50%;
        height: 100%;

        .right-image {
          background-image: url('https://i.picsum.photos/id/447/1280/853.jpg?hmac=4DUUCOsHRIoYbNrPRYEUHOW7wCjM7TROrTrYFivtdPw');
          background-size: cover;
          background-position: center;
          height: 100%;
          width: 100%;
        }
      }
    }
    .b {
      width: 100%;
      height: 100%;
      background: #582534;
    }
    .c {
      width: 100%;
      height: 100%;
      background: #0a7397;
    }
  }
  .second {
    background: gray;
  }
  .third {
    background: yellow;
  }
  .fourth {
    background: blue;
  }

`;

export const Section = styled.div`
  position: relative;
`;

export const Sticky = styled(motion.div)`
  height: 100vh;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
`;