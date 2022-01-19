import tShirt from '../../assets/images/work/t-shirt.png'
import phone from '../../assets/images/work/phone.png'
import computer from '../../assets/images/work/computer.png'
import qr from '../../assets/images/work/qr.png'
import click from '../../assets/images/work/click.png'
import block from '../../assets/images/work/block.png'

import './style.scss'

const Work = () => {
  return (
    <section className="work">
      <div className="work__wrapper">
        <h3 className="work__title">Как это работает ?</h3>
        <div className="cart">
          <div className="cart__item">
            <div className="cart__circle">
              <img className="cart__img" src={tShirt} alt="t-shirt icon" />
            </div>
            <p className="cart__descrip">Создание уникальной <br /> одежды</p>
          </div>
          <div className="cart__item">
            <div className="cart__circle">
              <img className="cart__img" src={phone} alt="phone icon" />
            </div>
            <p className="cart__descrip">Одежда попадает в лицензионный магазин </p>
          </div>
          <div className="cart__item">
            <div className="cart__circle">
              <img className="cart__img" src={computer} alt="computer icon" />
            </div>
            <p className="cart__descrip">Регистрация покупателя в приложении CheckBrandcom</p>
          </div>
          <div className="cart__item">
            <div className="cart__circle">
              <img className="cart__img" src={qr} alt="qr icon" />
            </div>
            <p className="cart__descrip">Пользователь сканирует <br /> QR на новой вещи</p>
          </div>
          <div className="cart__item">
            <div className="cart__circle">
              <img className="cart__img" src={click} alt="click icon" />
            </div>
            <p className="cart__descrip">Вводит полученный в приложении закрытый ключ</p>
          </div>
          <div className="cart__item">
            <div className="cart__circle">
              <img className="cart__img" src={block} alt="block icon" />
            </div>
            <p className="cart__descrip">Вещь закрепляется в аккаунте пользователя как его собственность</p>
          </div>
        </div>
        <div className="work__descrip">
          <p className="work__text">
            Убедиться в подленности вещи можно только на <a className='work__text-link' href='https://checkbrand.com/'>https://checkbrand.com</a></p>
        </div>
      </div>
    </section>
  )
}

export default Work;