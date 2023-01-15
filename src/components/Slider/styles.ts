import styled from "styled-components";


export const SwiperStyled = styled.div`
  position: relative;
  

  .swiper-pagination-bullet{
    background-color: white;
    width: 15px;
    height: 15px;
  }
  .swiper-pagination-bullet-active{
    background-color: red;
    width: 15px;
    height: 15px;
  }
  .swiper-button-next{
    color: red;
  }
  .swiper-button-prev{
    color: red;
  }
  img {
    width: 100%;
    height: 550px;
    z-index: -1;
  }
  h2 {
    margin-left: 25px;
    position: absolute;
    top: 390px;
    z-index: 3;
    font-size: 28px;
    color: white;
    font-weight: bold;
    border-bottom: 4px solid red;
    
    @media (min-width: 900px) {
        margin-left: 130px;
    }
  }
  p {
    margin-left: 25px;
    margin-left: 8px;
    position: absolute;
    top: 440px;
    z-index: 3;
    font-size: 18px;
    color: white;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    @media (min-width: 900px) {
        margin-left: 130px;
      }
  }
`;

