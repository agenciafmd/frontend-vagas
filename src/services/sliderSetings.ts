import { SwiperProps } from "swiper/react";

export const setingsHeader : SwiperProps= {
    slidesPerView: 1,
    navigation: true,
    pagination: {
      clickable: true,
    },
    autoplay: {
      delay: 5000,
    },
    loop: true,
  };

  export const setingsCard : SwiperProps = {
    navigation: true,
    pagination: {
      clickable: true,
    },
    loop: true,
    breakpoints: {
        300:{
            slidesPerView: 1,
            width: 450
        },
        700:{
            slidesPerView: 2,
            width: 950
        },
        900: {
            slidesPerView: 3,
            width: 1250
        }
    },
    spaceBetween: 50
  };

