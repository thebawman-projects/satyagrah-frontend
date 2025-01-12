import { Swiper, SwiperSlide } from "swiper/react";
import "../../App.css";
import Banner1 from '../../images/updatedBanner104.jpeg'
import Banner2 from '../../images/banner2.png'
import Banner3 from '../../images/updatedBanner101.jpg'
import Banner4 from '../../images/updatedBanner102.jpg'
import Banner5 from '../../images/banner5.png'
import Banner6 from '../../images/banner6.png'
import Banner7 from '../../images/updatedBanner103.jpg'
import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Navigation, Pagination } from "swiper";

export default function Slider() {
  return (
    <>
    <div className="">
      <Swiper 
      pagination={true}
      navigation={false}
      loop={true}
      autoplay = {{
        delay:2500,
        disableOnInteraction:false,
        reverseDirection:true
      }}
       modules={[Pagination, Navigation, Autoplay]} className="mySwiper">
        <SwiperSlide>
          <img src={Banner1} alt="Banner" />
        </SwiperSlide>
         <SwiperSlide>
          <img src={Banner7} alt="Banner" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Banner6} alt="Banner" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Banner2} alt="Banner" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Banner4} alt="Banner" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Banner5} alt="Banner" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Banner3} alt="Banner" />
        </SwiperSlide>
      </Swiper>
      </div>
    </>
  );
}
