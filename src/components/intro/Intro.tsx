import "./intro.css";
import image1 from "./img/img1.jpg";
import image2 from "./img/img2.jpg";
import image3 from "./img/img3.jpg";
import image4 from "./img/img4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper";
import "swiper/css";
import "swiper/swiper-bundle.css";
import Slide from "./Slide";
function Intro() {
  return (
    <div className="intro">
      <div className="slider">
        <Swiper
          modules={[Autoplay, EffectFade]}
          spaceBetween={0}
          speed={800}
          effect="fade"
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className="slider-container"
        >
          <SwiperSlide>
            <Slide image={image4} header="Very Special Gifts" />
          </SwiperSlide>
          <SwiperSlide>
            <Slide
              image={image1}
              header="Artists with 10+ years of experience"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slide image={image2} header="Fully customizable orders" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Intro;
