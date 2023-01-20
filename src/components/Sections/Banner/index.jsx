import React from "react";
import Div100vh from "react-div-100vh";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.scss";

export default function Banner() {
  return (
    <Div100vh>
      <Swiper
        className="Banner"
        loop={true}
        effect={"fade"}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
      >
        <SwiperSlide className="slide1">
          <div className="container">
            <div className="content">
              <div className="title">
                <div className="divider"></div>
                <h1>Menos do mesmo na hora de tocar bateria!</h1>
              </div>
              <div className="description">
                <p>Aprenda como tocar bateria do zero com nosso curso online</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide2">
          <div className="container">
            <div className="content">
              <div className="title">
                <div className="divider"></div>
                <h1>Menos do mesmo na hora de tocar bateria!</h1>
              </div>
              <div className="description">
                <p>Aprenda como tocar bateria do zero com nosso curso online</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide3">
          <div className="container">
            <div className="content">
              <div className="title">
                <div className="divider"></div>
                <h1>Menos do mesmo na hora de tocar bateria!</h1>
              </div>
              <div className="description">
                <p>Aprenda como tocar bateria do zero com nosso curso online</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </Div100vh>
  );
}
