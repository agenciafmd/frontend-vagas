import { ReactNode } from "react";

import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperProps } from "swiper/react";

import { SwiperStyled,SwiperCardStyled } from "./styles";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

interface iSliderProps {
  children: ReactNode;
  setings: SwiperProps;
  card: boolean;
}

const Slider = ({ children, setings, card }: iSliderProps) => {
  return (
    <>
      {!card ? (
        <SwiperStyled>
          <Swiper modules={[Navigation, Pagination, Autoplay]} {...setings}>
            {children}
          </Swiper>
        </SwiperStyled>
      ) : (
        <SwiperCardStyled>
            <h2 className="section-title" id="pokedex">Pokedex</h2>
          <Swiper modules={[Navigation, Pagination]} {...setings}>
            {children}
          </Swiper>
        </SwiperCardStyled>
      )}
    </>
  );
};

export default Slider;
