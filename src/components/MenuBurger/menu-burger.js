import logo from '../../assets/images/main.png'
import phone from '../../assets/images/phone-call.png'
import search from '../../assets/images/search.png'

import React, { useState, useEffect } from "react";
import './menu-burger.scss'

const MenuBurger = () => {

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen])

  return (
    <>
      <div className={isOpen ? 'burger-btn active' : 'burger-btn'}
        onClick={() => setIsOpen(!isOpen)}>
        <span />
      </div>

      <div className={isOpen ? 'menu__burger active' : 'menu__burger'}
        onClick={() => setIsOpen(false)}>
        <div className='blur'>
          <div className='menu__burger-content'>
            <div className="menu__burger-wrapper">
              <div className={isOpen ? 'menu__burger-close active' : 'menu__burger-close'}
                onClick={() => setIsOpen(false)}>&times;</div>
              <img className="menu__burger-logo" src={logo} alt="logo" />
              <a href="https://www.instagram.com/bratouverie.shop/" className="menu__burger-text">bratouverie.shop</a>
              <a className="menu__burger-link" href="https://www.instagram.com/checkbrandcom/">checkbrand.com</a>
              <div className="menu__burger-btns">
                <button className="menu__burger-btn">Личный кабинет</button>
                <button className="menu__burger-btn">Выход</button>
              </div>
              <div className="menu__burger-icon">
                <img className="menu__burger-img phone" src={phone} alt="phone call" />
                <img className="menu__burger-img search" src={search} alt="search" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default MenuBurger