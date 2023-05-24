import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper";

// Component
import { Card } from "../../components";

// Constants
import { dummyCardData } from "../../constants";

import dummyImage from "../../assets/react.svg";

const Weekend = () => {
  return (
    <>
      <div
        className="font-VAGRounded text-[32px] text-center
      my-12
      "
      >
        This Weekend
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        navigation={true}
        className="px-28 mb-12"
      >
        {dummyCardData.map((card) => (
          <SwiperSlide>
            <Card
              image={dummyImage}
              title={card.title}
              date={card.Date}
              location={card.Location}
              price={card.Price}
              description={card.Description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Weekend;
