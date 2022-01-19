import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/grid"
import "swiper/css/pagination"

import './style.scss'


class AssortmentSwiper extends Component {
  state = {
    image: [],
    error: false
  }

  componentDidMount() {
    let myHeaders = new Headers();
    myHeaders.append("Authorization", "Token ac6627302b3e9d5bc649f50eedd48816131b5195");
    let requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    }
    fetch(`https://api.checkbrand.com/api/photo/`, requestOptions)
      .then(response => response.text())
      .then(result => this.setState({ image: JSON.parse(result) }))
      .catch(error => {
        this.setState({ error: true })
      });
  }


  render() {
    return (
      <>
        <Swiper style={{
          '--swiper-pagination-color': 'rgb(206, 71, 155)',
          '--swiper-pagination-bullet-height': '12px',
          '--swiper-pagination-bullet-width': '12px',
        }} slidesPerView={1}
          spaceBetween={20} grabCursor={true} breakpoints={{
            "320": {
              "slidesPerView": 1,
              "spaceBetween": 20,

            },
            "420": {
              "slidesPerView": 2,
              "spaceBetween": 20,

            },
            "768": {
              "slidesPerView": 3,
              "spaceBetween": 20,
              'rows': 2
            },
            "1024": {
              "slidesPerView": 5,
              "spaceBetween": 20,
            },
            "1440": {
              "slidesPerView": 4,
              "spaceBetween": 20,
            }
          }} className="mySwiper">
          <div className='swiper__wrapper' >
            {
              this.state.image.map(i => {
                return (
                  <SwiperSlide key={i.id} className="swipe_second">
                    <img src={i.photo} />
                  </SwiperSlide>
                )
              })
            }
          </div>
        </Swiper>
      </>
    )
  }
}




const Assortment = () => {
  return (
    <section className="assortment">
      <div className="assortment__wrapper">
        <h3 className="assortment__title">Весь ассортимент</h3>
        <>
          {<AssortmentSwiper />}
        </>
      </div>
    </section>
  )
}
export default Assortment


