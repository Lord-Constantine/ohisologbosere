import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assests/avatar1.JPG";
import AVTR2 from "../../assests/avatar2.JPG";

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar: AVTR1,
    name: "Runo Saduwa @flutterwave",
    review:
      "Team player and a detailed oriented developer",
  },
  {
    avatar: AVTR2,
    name: "Philemon Akwagu @RoHealth",
    review:
      "Credible and detailed oriented",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      modules={[ Pagination ]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
      
        {data.map(({ avatar, name, review }) => (
          <SwiperSlide key={name} className="testimonial">
            <div className="client__avatar">
              <img src={avatar} alt="Avatar One" />
            </div>
            <h5 className="client__name">{name}</h5>
            <small className="client__review">{review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
