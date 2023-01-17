import { 
  Container, 
  Heading, 
  Image, 
  Stack, 
  Text, 
  Box 
} from '@chakra-ui/react'
;
import { useEffect, useState } from 'react'
import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import './Swiper.css';

import Banner1 from '../assets/imgs/Banner1.jpg'
import Banner2 from '../assets/imgs/Banner2.jpg'
import Banner3 from '../assets/imgs/Banner3.jpg'


const Movie_Img = 'https://image.tmdb.org/t/p/w500/'

export function Home() {

  return (
    <div className='Container-div' id='Home'>
      <Swiper 
      modules={[Pagination, Autoplay]}
      slidesPerView={1}
      autoplay={{ delay: 2000 }}
      pagination={{ clickable: true }}
      loop={true}
      >
        <SwiperSlide>
          <Image src={Banner1} h={{ base: '70vh', md: '100vh'}} w='100vw'/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Banner2} h={{ base: '70vh', md: '100vh'}} w='100vw'/>
        </SwiperSlide>

        <SwiperSlide>
            <Image src={Banner3} h={{ base: '70vh', md: '100vh'}} w='100vw'/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}