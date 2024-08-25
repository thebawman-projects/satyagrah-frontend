import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../App.css";
import university1 from '../../images/u1.jpg'
import university2 from '../../images/u2.jpg'
import university3 from '../../images/u3.jpg'
import university4 from '../../images/u4.jpg'
import university5 from '../../images/u5.jpg'
import university6 from '../../images/u6.jpg'
import university7 from '../../images/u7.jpg'
import university8 from '../../images/u8.jpg'
import university9 from '../../images/u9.jpg'
import university10 from '../../images/u10.jpg'
import university11 from '../../images/u11.jpg'
import university12 from '../../images/u12.jpg'
import university13 from '../../images/u13.jpg'
import university14 from '../../images/u14.jpg'

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Autoplay, Navigation } from "swiper";

export default function University() {
  return (
    <section className="section">
      <div className="conatainer">
        <p className=" regulatory1 common-heading text-white ml-[-1.8rem] md:ml-2">Our Universities</p>
      </div>
      <div className="px-3 md:px-8 lg:px-16 ">
      <Swiper
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
            320: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
          640: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 30,
          },
        }}
        modules={[Autoplay,Navigation]}
        className="mySwiper primeSwiper z-[-2]"
      >
        <SwiperSlide><img src={university1} alt="Logo" /></SwiperSlide>
        <SwiperSlide><img src={university2} alt="Logo" /></SwiperSlide>
        <SwiperSlide><img src={university3}alt="Logo" /></SwiperSlide>
        <SwiperSlide><img src={university4} alt="Logo" /></SwiperSlide>
        <SwiperSlide><img src={university5} alt="Logo" /></SwiperSlide>
        <SwiperSlide><img src={university6} alt="Logo" /></SwiperSlide>
        <SwiperSlide><img src={university7} alt="Logo" /></SwiperSlide>
        <SwiperSlide><img src={university8} alt="Logo" /></SwiperSlide>
        <SwiperSlide><img src={university9} alt="Logo" /></SwiperSlide>
        <SwiperSlide><img src={university10} alt="Logo" /></SwiperSlide>
        <SwiperSlide><img src={university11} alt="Logo" /></SwiperSlide>
        <SwiperSlide><img src={university12} alt="Logo" /></SwiperSlide>
        <SwiperSlide><img src={university13} alt="Logo" /></SwiperSlide>
        <SwiperSlide><img src={university14} alt="Logo" /></SwiperSlide>
      </Swiper>
      </div>
    </section>
  );
}
