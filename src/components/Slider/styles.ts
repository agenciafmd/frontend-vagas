import styled from "styled-components";

export const SwiperStyled = styled.div`
  position: relative;

  .swiper-pagination-bullet {
    background-color: white;
    width: 15px;
    height: 15px;
  }
  .swiper-pagination-bullet-active {
    background-color: red;
    width: 15px;
    height: 15px;
  }
  .swiper-button-next {
    color: red;
  }
  .swiper-button-prev {
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

export const SwiperCardStyled = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  margin-top: 152px;
  padding: 25px;

  .section-title{
     font-size: 32px;
     text-decoration: underline;
     color: #A40000;
  }
  .swiper{
    padding: 25px;
  }
  .swiper-slide{
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient( black 50%, #DCA441);
    height: 250px;
    border-radius: 16px;
    margin-bottom: 5px;
  }
  li{
    display: flex;

    h2{
      color: #c4c4c4;
      margin-bottom: 15px;
      font-size: 28px;
      text-decoration: underline;
    }
   
    img{
      width: 150px;
      height: 150px;
      border-bottom: 2px solid black ;
    }
    .icon{
      width: 80px;
      height: 80px;
      border-bottom: none;
      margin-left: 15px;
    }
  }
  .swiper-pagination-bullet {
    background-color: black;
    width: 10px;
    height: 10px;
  }
  .swiper-pagination-bullet-active {
    background-color: red;
    width: 10px;
    height: 10px;
  }
  .swiper-button-next {
    color: red;
  }
  .swiper-button-prev {
    color: red;
  }
`;
