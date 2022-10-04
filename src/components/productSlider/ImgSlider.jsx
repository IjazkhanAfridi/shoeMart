import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper';

export default function App() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className='mySwiper2'
      >
        <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-1.jpg' alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-2.jpg' alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-3.jpg' alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-4.jpg' alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-5.jpg' alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-6.jpg' alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-7.jpg' alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-8.jpg' alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-9.jpg' alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-10.jpg' alt='' />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className='mySwiper'
      >
        <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-1.jpg' alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-2.jpg' alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-3.jpg' alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-4.jpg' alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-5.jpg' alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-6.jpg' alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-7.jpg' alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-8.jpg' alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-9.jpg' alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-10.jpg' alt='' />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
