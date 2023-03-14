import "./popup.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper";
type ShowItem = {
  card: {
    id: number;
    name: string;
    artists: string;
    image: string[];
    price: number;
  };
  handleItem: (id: number) => void;
};
function Popup({ card, handleItem }: ShowItem) {
  const { id } = useParams();
  useEffect(() => {
    handleItem(parseInt(id ? id : "0"));
    console.log("shitty code");
  });
  return (
    <div className="popup" key={card.id}>
      <div className="item-container">
        <div className="image-container">
          <Swiper
            modules={[Pagination, Autoplay]}
            autoplay={{ delay: 4000, disableOnInteraction: true }}
            slidesPerView={1}
            speed={150}
            loop={true}
            spaceBetween={0}
            pagination={{ clickable: true }}
          >
            {card.image.map((image) => {
              return (
                <SwiperSlide>
                  <img src={image} alt="item" />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="content">
          <h2 className="name">{card.name}</h2>
          <div className="category-show artist">
            <span>{card.artists}</span>
          </div>
          <h3 className="price">
            <span className="currency">EGP</span>
            <span className="value">{card.price}</span>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Popup;
