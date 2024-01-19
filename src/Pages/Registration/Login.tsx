import styles from "./Registration.module.css";

// import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./styles.css";

import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
type Props = {};

export const Login = (_props: Props) => {
  return (
    <div className={styles.Wrapper}>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
          // additional configurations
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className={styles.swiperSection}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>{" "}
        <div className="signup">
          <h1>Sign In</h1>
          <p>
            Users going through a vetting process to ensure you never match with
            bots.
          </p>
          <div>
            <input type="email" placeholder="email"/>
            <input type="text" placeholder="password"/>
          </div>
        </div>
      </Swiper>
      <div>
        <button>Sign In</button>
        <p>
          Not have an account?&nbsp;<a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
};
