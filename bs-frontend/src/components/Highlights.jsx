/* eslint-disable import/no-unresolved */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import { highlight1, highlight2, highlight3 } from '../assets';

import 'react-lazy-load-image-component/src/effects/blur.css';
import 'swiper/css';
import 'swiper/css/pagination';

const Highlights = () => {
  const pagination = {
    clickable: true,
    bulletActiveClass: 'bg-primary-200 opacity-100',
  };
  return (
    <div className='w-full pt-20 mb-2 flex justify-center items-center'>
      <div className='max-w-[1024px] w-full'>
        <Swiper
          loop
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={pagination}
          modules={[Autoplay, Pagination]}
        >
          <SwiperSlide><LazyLoadImage src={highlight1} effect='blur' /></SwiperSlide>
          <SwiperSlide><LazyLoadImage src={highlight2} effect='blur' /></SwiperSlide>
          <SwiperSlide><LazyLoadImage src={highlight3} effect='blur' /></SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Highlights;
