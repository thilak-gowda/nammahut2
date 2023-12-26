import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import ProductStructure from './product';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function Swpcorosil(props) {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><ProductStructure /></SwiperSlide>
        <SwiperSlide><ProductStructure /></SwiperSlide>
        <SwiperSlide><ProductStructure /></SwiperSlide>
        <SwiperSlide><ProductStructure /></SwiperSlide>
        <SwiperSlide><ProductStructure /></SwiperSlide>
        <SwiperSlide><ProductStructure /></SwiperSlide>
        <SwiperSlide><ProductStructure /></SwiperSlide>
        <SwiperSlide><ProductStructure /></SwiperSlide>
        <SwiperSlide><ProductStructure /></SwiperSlide>
      </Swiper>
    </>
  );
}
