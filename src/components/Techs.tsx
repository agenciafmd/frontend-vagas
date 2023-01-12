import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import JavaScrit from '../assets/icons/icons8-javascript-100.png';
import Bootstrap from '../assets/icons/icons8-bootstrap-100.png';
import Git from '../assets/icons/icons8-git-100.png';
import jQuery from '../assets/icons/icons8-jquery-100.png';
import Next from '../assets/icons/icons8-next.js-100.png';
import Node from '../assets/icons/icons8-node-js-100.png';
import React from '../assets/icons/icons8-react-100-2.png';
import Api from '../assets/icons/icons8-rest-api-100.png';
import Sass from '../assets/icons/icons8-sass-100.png';
import Typescript from '../assets/icons/icons8-typescript-100.png';
import { Navigation, Pagination } from 'swiper';

export const Techs = () => {
    return(
        <section id='#technologies'>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={JavaScrit} alt="" />
                    <h5>JavaScrit</h5>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Bootstrap} alt="" />
                    <h5>Bootstrap</h5>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Git} alt="" />
                    <h5>Git</h5>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={jQuery} alt="" />
                    <h5>jQuery</h5>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Next} alt="" />
                    <h5>Next</h5>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Node} alt="" />
                    <h5>Node</h5>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={React} alt="" />
                    <h5>React</h5>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Api} alt="" />
                    <h5>Rest API</h5>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Sass} alt="" />
                    <h5>Sass</h5>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Typescript} alt="" />
                    <h5>Typescript</h5>
                </SwiperSlide>
            </Swiper>
            {/* <Container >
                <Row >
                    <Col >
                        <div className='d-flex flex-column align-items-center'>
                            <h2>Tecnologias</h2>
                            <Carousel className='d-flex flex-row align-content-center m-5'>
                                <Carousel.Item className='text-center'>
                                    <img src={JavaScrit} alt="" />
                                    <h5>JavaScrit</h5>
                                </Carousel.Item>
                                <Carousel.Item  className='text-center'>
                                    <img src={Bootstrap} alt="" />
                                    <h5>Bootstrap</h5>
                                </Carousel.Item>
                                <Carousel.Item className='text-center'>
                                    <img src={Git} alt="" />
                                    <h5>Git</h5>
                                </Carousel.Item>
                                <Carousel.Item className='text-center'>
                                    <img src={jQuery} alt="" />
                                    <h5>jQuery</h5>
                                </Carousel.Item>
                                <Carousel.Item className='text-center'>
                                    <img src={Next} alt="" />
                                    <h5>Next</h5>
                                </Carousel.Item>
                                <Carousel.Item className='text-center'>
                                    <img src={Node} alt="" />
                                    <h5>Node</h5>
                                </Carousel.Item>
                                <Carousel.Item className='text-center'>
                                    <img src={React} alt="" />
                                    <h5>React</h5>
                                </Carousel.Item>
                                <Carousel.Item className='text-center'>
                                    <img src={Api} alt="" />
                                    <h5>Rest API</h5>
                                </Carousel.Item>
                                <Carousel.Item className='text-center'>
                                    <img src={Sass} alt="" />
                                    <h5>Sass</h5>
                                </Carousel.Item>
                                <Carousel.Item className='text-center'>
                                    <img src={Typescript} alt="" />
                                    <h5>Typescript</h5>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container> */}
        </section>
    )
}