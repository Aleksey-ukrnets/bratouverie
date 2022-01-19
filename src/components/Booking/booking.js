import { Component, useEffect, useState } from 'react';
import BookingButton from '../Button-booking/booking-button';
import './style.scss'

export default class Booking extends Component {

  state = {
    uniqueNumber: ''
  }

  componentDidMount() {
    let myHeaders = new Headers();
    myHeaders.append("Authorization", "Token ac6627302b3e9d5bc649f50eedd48816131b5195");
    let requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    }
    fetch(`https://api.checkbrand.com/api/customer/`, requestOptions)
      .then(response => response.text())
      .then(result => {
        let num = JSON.parse(result).length + 1
        this.setState({ uniqueNumber: num })
      })
      .catch(error => console.log('error', error));
  }

  render() {
    return (
      <section className="booking">
        <div className="booking__wrapper">
          <div className="booking__main">
            <h3 className="booking__main-title">Забронируй <br />уникальный номер!</h3>
            <h4 className="booking__main-subtitle">CheckBrandcom </h4>
            <div className="booking__main-text">Стоимость аккаунтов дорожает на одну тысячу при каждом бронировании</div>
          </div>
          <div className="booking__right">
            <div className="booking__right-number">900-1000</div>

            <div className="booking__right-text">Уникальный номер: 100 000 Р</div>
            <div className="booking__btns">
              <div className="booking__right-num">900</div>
              <BookingButton setModal={this.props.setModal} name={'booking-btn'} />
            </div>
          </div>
        </div>
      </section>
    )
  }
}

