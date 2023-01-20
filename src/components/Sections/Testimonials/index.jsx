import React, { useEffect, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import api from "../../../services/api";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.scss";

export default function Testimonials() {
  const [user1, setUser1] = useState();
  const [user2, setUser2] = useState();
  const [user3, setUser3] = useState();
  const [user4, setUser4] = useState();
  const [user5, setUser5] = useState();

  // Consumo API: Random User (https://randomuser.me/)
  useEffect(() => {
    api
      .get(`api/?gender=male&results=5`)
      .then((response) => {
        //console.log(response.data);
        setUser1(response.data.results[0].picture.medium);
        setUser2(response.data.results[1].picture.medium);
        setUser3(response.data.results[2].picture.medium);
        setUser4(response.data.results[3].picture.medium);
        setUser5(response.data.results[4].picture.medium);
      })
      .catch((error) => {
        console.error("erro" + error);
      });
  }, []);

  return (
    <section className="Testimonials" id="testimonials">
      <div className="container">
        <h2>O que os alunos dizem</h2>
        <Swiper
          data-aos="fade-down"
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
          breakpoints={{
            480: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <div className="card">
              <div className="icon">
                <div className="rectangle"></div>
                <img src={user1} alt="Icone Usuario" className="user" />
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
                <img src={user2} alt="Icone Usuario" className="user" />
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
                <img src={user3} alt="Icone Usuario" className="user" />
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
                <img src={user4} alt="Icone Usuario" className="user" />
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
                  disponíveis!
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="icon">
                <div className="rectangle"></div>
                <img src={user5} alt="Icone Usuario" className="user" />
              </div>
              <div className="text">
                <h3>Jorge Luiz</h3>
                <img
                  src="/rating.svg"
                  alt="Icone Avaliações"
                  className="rating"
                />
                <p>
                  Gostei bastante do curso e com ele pude evoluir muito meu
                  aprendizado!
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
