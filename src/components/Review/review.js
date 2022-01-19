import female from '../../assets/images/ж.jpg'
import male from '../../assets/images/м.jpg'

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination"
import './style.scss'


import SwiperCore, { Pagination } from 'swiper';

SwiperCore.use([Pagination]);

function ReviewSwipper() {
  return (
    <div className="review__slider">
      <>
        <Swiper style={{ '--swiper-pagination-color': 'rgb(206, 71, 154)' }} slidesPerView={1} spaceBetween={10} pagination={{
          "clickable": true
        }} breakpoints={{
          "540": {
            "slidesPerView": 2,
            "spaceBetween": 20
          },
          "768": {
            "slidesPerView": 4,
            "spaceBetween": 40
          },
          "1024": {
            "slidesPerView": 5,
            "spaceBetween": 50
          }
        }} className="my__swiper">
          <SwiperSlide className="swipe"><img src={female} /></SwiperSlide>
          <SwiperSlide className="swipe"><img src={male} /></SwiperSlide>
          <SwiperSlide src={female} className="swipe"><img src={female} /></SwiperSlide>
          <SwiperSlide className="swipe"><img src={male} /></SwiperSlide>
          <SwiperSlide src={female} className="swipe"><img src={female} /></SwiperSlide>
          <SwiperSlide className="swipe"><img src={male} /></SwiperSlide>
          <SwiperSlide src={female} className="swipe"><img src={female} /></SwiperSlide>
          <SwiperSlide className="swipe"><img src={male} /></SwiperSlide>
          <SwiperSlide src={female} className="swipe"><img src={female} /></SwiperSlide>
        </Swiper>
      </>
    </div>
  )
}


const Review = ({ setReview }) => {
  return (
    <section className="review">
      <div className="review__wrapper">
        <h3 className="review__title">Фото довольных клиентов</h3>
        {<ReviewSwipper />}
        <div onClick={() => setReview(true)} className="review__btn">Разместить фото</div>
      </div>
    </section>
  )
}
export default Review