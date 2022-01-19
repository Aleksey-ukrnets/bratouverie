import { useEffect, useState } from 'react'
import QR from '../../assets/images/qr1.png'
import qranbook from '../../assets/images/qranbook_booking.png'
import Pagination from './pagination'
import './style.scss'

const UniqueQR = ({ link, setPayment }) => {

  return (
    <>
      <h3 className='qr__main'>Оформление заказа</h3>
      <h4 className='qr__title'>Ваш индивидуальный QR код</h4>
      <img className='qr__img' src={QR} alt='qr' />
      <h5 className='qr__subtitle' >Уникальная технология</h5>
      <img className='qr__logo' src={qranbook} alt='qranbook' />
      <p className='qr__text'>Позволяет защитить брендовую вещь от подделывания. Технология проходит сдадию патентования. Любое нарушение прав присекается по закону. Никто не сможет позволить себе приобрести вещь, подобную вашей, дешевле по стоимости, не опозорившись при проверке</p>
      <p className='qr__text'> После оплаты ваше фото появится на checkbrand.com и вы сможете проверить работоспособность QR кода</p>
      <div className='qr__sum'>2000 ₽</div>
      <a className='qr__payment' target='_blank' onClick={() => setPayment(true)} href={link}>Перейти к оплате</a>
      <Pagination step={4} />
    </>
  )
}

export default UniqueQR;