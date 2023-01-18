import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.scss";

export default function Testimonials() {
  return (
    <section className="Testimonials" id="testimonials">
      <div className="container">
        <h2>O que alunos e alunas dizem</h2>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Navigation, Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="card">
              <div className="icon">
                <div className="rectangle"></div>
                <img
                  src="/icon-user.svg"
                  alt="Icone Usuario"
                  className="user"
                />
              </div>
              <div className="text">
                <h3>Ricardo Paulino</h3>
                <img
                  src="/rating.svg"
                  alt="Icone Avaliações"
                  className="rating"
                />
                <p>O curso possui ótima organização e exemplos maravilhosos.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="icon">
                <div className="rectangle"></div>
                <img
                  src="/icon-user.svg"
                  alt="Icone Usuario"
                  className="user"
                />
              </div>
              <div className="text">
                <h3>Murilo Magno</h3>
                <img
                  src="/rating.svg"
                  alt="Icone Avaliações"
                  className="rating"
                />
                <p>
                  Intercalei com o curso de teoria o que facilitou bastante o
                  meu desenvolvimento!
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="icon">
                <div className="rectangle"></div>
                <img
                  src="/icon-user.svg"
                  alt="Icone Usuario"
                  className="user"
                />
              </div>
              <div className="text">
                <h3>Robson Oliveira</h3>
                <img
                  src="/rating.svg"
                  alt="Icone Avaliações"
                  className="rating"
                />
                <p>
                  Incrivelmente fácil aprender com vocês! A didática do
                  professor é primorosa.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="icon">
                <div className="rectangle"></div>
                <img
                  src="/icon-user.svg"
                  alt="Icone Usuario"
                  className="user"
                />
              </div>
              <div className="text">
                <h3>Giovanni Souza</h3>
                <img
                  src="/rating.svg"
                  alt="Icone Avaliações"
                  className="rating"
                />
                <p>
                  Estou muito satisfeito com o curso e todos os módulos
                  disponíveis
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="icon">
                <div className="rectangle"></div>
                <img
                  src="/icon-user.svg"
                  alt="Icone Usuario"
                  className="user"
                />
              </div>
              <div className="text">
                <h3>Matheus Costa</h3>
                <img
                  src="/rating.svg"
                  alt="Icone Avaliações"
                  className="rating"
                />
                <p>Gostei bastante do curso e evolui muito meu aprendizado</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
