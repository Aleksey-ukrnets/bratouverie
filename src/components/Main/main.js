import MainLogo from '../../assets/images/main.png'
import shoppingCart from '../../assets/images/shopping-cart.png'
import qranbook from '../../assets/images/qranbook.png'
import logo from '../../assets/images/logo.png'
import tShirt from '../../assets/images/t-shirt.png'

import './main.scss'
import MenuBurger from '../MenuBurger/menu-burger'
import BookingButton from '../Button-booking/booking-button'
import Modal from '../Modal/modal'
import { useState } from 'react'

const Main = ({ setModal }) => {
  const [isOpenModal, setVideoModal] = useState(false)

  return (
    <main className="main">
      <div className="main__header">
        <MenuBurger />
        <img className="main__logo" src={MainLogo} alt="main logo" />
        <div className="main__cart">
          <img className="main__cart-img" src={shoppingCart} alt="shopping-cart" />
          <div className="main__cart-count"></div>
        </div>
      </div>
      <div className="main__inner">
        <h2 className="main__title"> Одежда с технологией подтверждения подлинности</h2>
        <img className="main__subtitle" src={qranbook} alt="QR" />
        <div className="main__background">
          <img className="main__background-logo" src={logo} alt="bratouverie" />
          <img className="main__background-img" src={tShirt} alt="t-shirt" />
          <div className="circle circle-first"></div>
          <div className="circle circle-second"></div>
          <div className="circle circle-third"></div>
        </div>
        <div className="main__video" onClick={() => setVideoModal(true)}>
          <div className="main__video-circle">
            <span className="triangle-right"></span>
          </div>
          <div className="main__video-link">Смотреть видео</div>
        </div>
        <p className="main__sum">100 000 ₽</p>
        <BookingButton name={'main-btn'} setModal={setModal} />
        <Modal isOpenModal={isOpenModal} setModal={setVideoModal}>
          <div className='main__iframe'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/QBn62mNw2Ok" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </Modal>
      </div>
    </main>
  )
}

export default Main;
