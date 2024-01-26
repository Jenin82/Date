import { ArrowLeftsvg, Filtersvg } from "../../assets/svg";
import styles from "./Dashboard.module.css";
import { useRef } from "react";

import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./styles.css";

// import required modules
import { EffectCards } from "swiper/modules";
import { Navbar } from "../../Components/Navbar/Navbar";

type Props = {};

export const Dashboard = (_props: Props) => {
  const swiperRef = useRef<SwiperRef>(null);

  const notInterested = () => {
    // Your logic
    console.log("notinterested")
  };

  const interested = () => {
    // Your logic
       console.log("interested");
  };

  const handleSwipe = (swiper: any) => {
    // Your swipe handling logic
    console.log();
  };

  const slideLeft = () => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slidePrev();
      notInterested();
    }
  };

  const slideRight = () => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slideNext();
      interested();
    }
  };

  const handleSuper = () => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slideNext();
      interested();
      console.log("Super");
    }
  };
  return (
    <div className={styles.Wrapper}>
      <div>
        <button>
          <ArrowLeftsvg />
        </button>
        <div>
          <h1>Discover</h1>
          <p>Chicago, II</p>
        </div>
        <button>
          <Filtersvg />
        </button>
      </div>
      <div>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          loop={true}
          className="MatchFinder"
          onSlideChange={handleSwipe}
          ref={swiperRef}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </div>
      <div>
        <button onClick={slideLeft}>False</button>
        <button onClick={slideRight}>True</button>
        <button onClick={handleSuper}>Super</button>
      </div>
      <div>
        <Navbar />
      </div>
    </div>
  );
};
