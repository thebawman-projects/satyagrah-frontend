import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../App.css";
import review1 from '../../images/review1.png'
import review2 from '../../images/review2.png'
import review3 from '../../images/review3.png'
import review4 from '../../images/review4.png'
import review5 from '../../images/review5.png'
import review6 from '../../images/review6.png'
import review7 from '../../images/review7.png'
import review8 from '../../images/review8.png'
import review9 from '../../images/review9.png'
import review10 from '../../images/review10.png'
import review11 from '../../images/review11.png'
import review12 from '../../images/review12.png'

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Autoplay, Navigation } from "swiper";

export default function Reviews() {
  return (
    <section className="section z-[-1] ">
      <div className="conatainer">
        <h2 className="common-heading text-gray-600 ml-[-1.8rem] md:ml-2" >Our Students Speak</h2>
      </div>
      <div className="px-2 md:px-8">
      <Swiper
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
        }}
        modules={[Autoplay,Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={review2} alt="Reviews" /></SwiperSlide>
        <SwiperSlide><img src={review6} alt="Reviews" /></SwiperSlide>
        <SwiperSlide><img src={review5} alt="Reviews" /></SwiperSlide>
        <SwiperSlide><img src={review3} alt="Reviews" /></SwiperSlide>
        <SwiperSlide><img src={review7} alt="Reviews" /></SwiperSlide>
        <SwiperSlide><img src={review8} alt="Reviews" /></SwiperSlide>
        <SwiperSlide><img src={review1} alt="Reviews" /></SwiperSlide>
        <SwiperSlide><img src={review4} alt="Reviews" /></SwiperSlide>
        <SwiperSlide><img src={review9} alt="Reviews" /></SwiperSlide>
        <SwiperSlide><img src={review10} alt="Reviews" /></SwiperSlide>
        <SwiperSlide><img src={review11} alt="Reviews" /></SwiperSlide>
        <SwiperSlide><img src={review12} alt="Reviews" /></SwiperSlide>
      </Swiper>
      </div>
    </section>
  );
}
