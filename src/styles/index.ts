import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Main = styled.div`
  .first {
    /* background: red; */
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
          background-image: 
            url(
              'https://i.picsum.photos/id/447/1280/853.jpg?hmac=4DUUCOsHRIoYbNrPRYEUHOW7wCjM7TROrTrYFivtdPw'
            );
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
      background-image: linear-gradient(to right, #0a7397, #1c1c1c);
    }
    .c {
      width: 100%;
      height: 100%;
      background-image:
        url(
          'https://i.picsum.photos/id/946/5000/3572.jpg?hmac=o__WbAcVSi9EvwRNEm2Z6vdOF_S5pMuW6L4zuXhsSvM'
        );
      background-size: cover;
      background-position: center;
    }
  }
  .second {
    background-image: 
      url(
        'https://i.picsum.photos/id/474/4288/2848.jpg?hmac=qOXPlChs-058LiF4XKEk4fhZAwNP7JpIbsiMRKU19oE'
      );
    background-size: cover;
    background-position: center;
  }
  .third {
    background-image: 
      url(
        'https://i.picsum.photos/id/903/5000/3333.jpg?hmac=vVM4lWd0r8EfyVfslHRgjKjiY90FwM_brwJpzdKcXvg'
      );
    background-size: cover;
    background-position: center;
  }
  .fourth {
    background-image:
      url(
        'https://i.picsum.photos/id/855/5000/3333.jpg?hmac=plFPjVKm__JX994YSgieXxj7LBnlggL0Qd3DGQcfv5E'
      );
    background-size: cover;
    background-position: center;
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