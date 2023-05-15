/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Thumbs } from 'swiper';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import 'react-lazy-load-image-component/src/effects/blur.css';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import { urlFor } from '../utils/client';

const ProductSwiper = ({ productImages }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className='w-full max-w-[360px]'>
      <Swiper
        loop
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs]}
      >
        {productImages.map((product) => (
          <SwiperSlide key={product.name}>
            <LazyLoadImage src={urlFor(product.image)} effect='blur' />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop
        spaceBetween={10}
        freeMode
        watchSlidesProgress
        slidesPerView={4}
        modules={[FreeMode, Thumbs]}
      >
        {productImages.map((product) => (
          <SwiperSlide key={product.name}>
            <LazyLoadImage
              src={urlFor(product.image)}
              effect='blur'
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

ProductSwiper.propTypes = {
  productImages: PropTypes.arrayOf(PropTypes.shape({})),
};

ProductSwiper.defaultProps = {
  productImages: [],
};

export default ProductSwiper;
