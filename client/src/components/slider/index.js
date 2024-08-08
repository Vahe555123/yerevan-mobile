import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import img from "../../assets/image/xiaomiPad.png"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export const SliderPage = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        
      >
        <SwiperSlide><img src={img} /></SwiperSlide>
        <SwiperSlide><img src={img} /></SwiperSlide>
        <SwiperSlide><img src={img} /></SwiperSlide>
       

      </Swiper>
    </>
  );
}
