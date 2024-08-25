import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../App.css";
import affiliation1 from '../../images/a1.jpg'
import affiliation2 from '../../images/a2.jpg'
import affiliation3 from '../../images/a3.jpg'
import affiliation4 from '../../images/a4.jpg'
import affiliation5 from '../../images/a5.jpg'
import affiliation6 from '../../images/a6.jpg'
import affiliation7 from '../../images/a7.jpg'
import affiliation8 from '../../images/a8.jpg'

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Autoplay, Navigation } from "swiper";

export default function Affiliation() {
  return (
    <section className="section">
      <div className="conatainer">
        <p className="common-heading regulatory text-gray-600 md:text-3xl sm:text-2xl p-2 ml-[-2rem] md:ml-2"> Regulatory Approvals, Affiliation & Accreditations</p>
      </div>
      <div className="px-3 md:px-8 lg:px-16 ">
      <Swiper
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          reverseDirection:true
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
        className="mySwiper primeSwiper"
      >
        <SwiperSlide><img src={affiliation1} alt="Satyagrah" /></SwiperSlide>
        <SwiperSlide><img src={affiliation2} alt="Satyagrah" /></SwiperSlide>
        <SwiperSlide><img src={affiliation3}alt="Satyagrah" /></SwiperSlide>
        <SwiperSlide><img src={affiliation4} alt="Satyagrah" /></SwiperSlide>
        <SwiperSlide><img src={affiliation5} alt="Satyagrah" /></SwiperSlide>
        <SwiperSlide><img src={affiliation6} alt="Satyagrah" /></SwiperSlide>
        <SwiperSlide><img src={affiliation7} alt="Satyagrah" /></SwiperSlide>
        <SwiperSlide><img src={affiliation8} alt="Satyagrah" /></SwiperSlide>
      </Swiper>
      </div>
    </section>
  );
}
