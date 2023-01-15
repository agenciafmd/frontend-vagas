import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Main = styled.div`
  background: linear-gradient(to bottom, #9c9c9c, #ffffff);

  .first {
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
      background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
      background-size: 400% 400%;
      animation: gradient 15s ease infinite;

      @keyframes gradient {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      }
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

  div.news-main {
    width: 100%;
    height: 100vh;
    background-image:
      url(
        'https://i.picsum.photos/id/345/5000/3333.jpg?hmac=CofBoeQjE3aUDHo5XSGTqev1W_dTKjXh4PSQG2MXKvM'
      );
    background-size: cover;
    background-position: center;
  }

  div.hiddenX {
    overflow-x: hidden;
    
    div.news-content {
      display: flex;
      grid-template-columns: repeat(3, .25fr);
      justify-content: space-between;
      transform: translate3d(75%,0,0);
      animation: anima 7s linear infinite;

      font-size: 3rem;
      
      ::before, ::after {
        content: none;
        display: inherit;
      }
      
      ::after {
        transform: translate3d(100%,0,0);
      }
      
      @keyframes anima {
        from{transform: translate3d(100%,0,0)};
        to {transform: translate3d(-25%,0,0)};
      }
      
      span {
        padding: 0 1rem;
        color: #fff;
        background: #ff0000;
        border-radius: 1rem;

      }
    }
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