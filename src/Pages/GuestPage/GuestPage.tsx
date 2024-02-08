import { useRef } from "react";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Crosssvg, Heartsvg, Starsvg, TelMsgsvg } from "../../assets/svg";
import styles from "./GuestPage.module.css";
import { SwiperRef } from "swiper/react";
type Props = {};

export const GuestPage = (_props: Props) => {
  const swiperRef = useRef<SwiperRef>(null);
  const notInterested = () => {
    // Your logic
    console.log("notinterested");
  };

  const interested = () => {
    // Your logic
    console.log("interested");
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
    <>
      <div className={styles.Wrapper}>
        <img src="https://source.unsplash.com/random" alt="" />
        <div className={styles.buttonWrapper}>
          <button onClick={slideLeft}>
            <Crosssvg />
          </button>
          <button onClick={slideRight} style={{ backgroundColor: "red" }}>
            <Heartsvg />
          </button>
          <button onClick={handleSuper}>
            <Starsvg />
          </button>
        </div>
        <div className={styles.ContentWrapper}>
          <div>
            <div>
              <h1>Jessica Parker, 23</h1>
              <p>Proffesional model</p>
            </div>
            <button>
              <TelMsgsvg />
            </button>
          </div>
        </div>
      </div>
      <Navbar />
    </>
  );
};
