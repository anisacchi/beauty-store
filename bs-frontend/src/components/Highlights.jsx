/* eslint-disable import/no-unresolved */
import React, { useEffect, useRef } from 'react';
import { register } from 'swiper/element/bundle';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { highlight1, highlight2, highlight3 } from '../assets';

register();

const Highlights = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      navigation: true,
      pagination: true,
      loop: true,
      injectStyles: [
        `
          swiper-container { max-width: 1024px }
          .swiper-button-next,
          .swiper-button-prev {
            border-radius: 100%;
            width: 40px;
            height: 40px;
            background-color: rgba(250, 250, 250, 0.5);
            background-position: center;
            background-repeat: no-repeat;
            background-size: 24px;
          }
          .swiper-button-next {
            background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iIzAwMDAwMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiPjxwYXRoIGQ9Ik0xODEuNjYsMTMzLjY2bC04MCw4MGE4LDgsMCwwLDEtMTEuMzItMTEuMzJMMTY0LjY5LDEyOCw5MC4zNCw1My42NmE4LDgsMCwwLDEsMTEuMzItMTEuMzJsODAsODBBOCw4LDAsMCwxLDE4MS42NiwxMzMuNjZaIj48L3BhdGg+PC9zdmc+')
          }
          .swiper-button-prev {
            background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iIzAwMDAwMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiPjxwYXRoIGQ9Ik0xNjUuNjYsMjAyLjM0YTgsOCwwLDAsMS0xMS4zMiwxMS4zMmwtODAtODBhOCw4LDAsMCwxLDAtMTEuMzJsODAtODBhOCw4LDAsMCwxLDExLjMyLDExLjMyTDkxLjMxLDEyOFoiPjwvcGF0aD48L3N2Zz4=');
          }
          .swiper-button-next:hover,
          .swiper-button-prev:hover {
            box-shadow: 0 8px 24px rgba(97, 97, 97, 0.25);
          }
          .swiper-button-next::after,
          .swiper-button-prev::after {
            content: "";
          }
          .swiper-pagination-bullet {
            background-color: #E68B86;
          }
        `,
      ],
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);

  return (
    <div
      className='pt-20 pb-4 flex w-full justify-center'
    >
      <swiper-container
        ref={swiperRef}
        init='false'
        autoplay-delay='3000'
        pagination-clickable='true'
        autoplay-disable-on-interaction='false'
      >
        <swiper-slide><LazyLoadImage src={highlight1} alt='Highlight Banner' effect='blur' /></swiper-slide>
        <swiper-slide><LazyLoadImage src={highlight2} alt='Highlight Banner' effect='blur' /></swiper-slide>
        <swiper-slide><LazyLoadImage src={highlight3} alt='Highlight Banner' effect='blur' /></swiper-slide>
      </swiper-container>
    </div>
  );
};

export default Highlights;
