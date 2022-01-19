import { Component } from 'react'
import './style.scss'

import tShirt from '../../assets/images/t-shirt.jpg'
import qr from './qr.PNG'
import domane from './domane.PNG'
import clothes from './clothes.PNG'
import number from './clothes.PNG'
import owner from './clothes.PNG'
import top from './top violet.jpg'

export default class Unique extends Component {
  render() {
    return (
      <>
        <section className="unique">
          <div className="unique__wrapper">
            <h3 className="unique__title">Уникальность технологии</h3>
            <img className="unique__img" src={tShirt} alt="t-shirt" />
          </div>
          <div className="unique__list">
            <div className='unique__list-items'>
              <div className="unique__list-item">
                <div className="unique__list-title">Click qr</div>
                <div className="unique__list-circle">+</div>
              </div>
              <div className='unique__list-answer'><img src={qr} /></div>
            </div>
            <div className='unique__list-items'>
              <div className="unique__list-item">
                <div className="unique__list-title">Check owner</div>
                <div className="unique__list-circle">+</div>
              </div>
              <div className='unique__list-answer' ><img src={owner} /></div>
            </div>
            <div className='unique__list-items'>
              <div className="unique__list-item">
                <div className="unique__list-title">Check clothes</div>
                <div className="unique__list-circle">+</div>
              </div>
              <div className='unique__list-answer' ><img src={clothes} /></div>
            </div>
            <div className='unique__list-items'>
              <div className="unique__list-item">
                <div className="unique__list-title">Check domane</div>
                <div className="unique__list-circle">+</div>
              </div>
              <div className='unique__list-answer' ><img src={domane} /></div>
            </div>
            <div className='unique__list-items'>
              <div className="unique__list-item">
                <div className="unique__list-title">Check name</div>
                <div className="unique__list-circle">+</div>
              </div>
              <div className='unique__list-answer' >no image now</div>
            </div>
            <div className='unique__list-items'>
              <div className="unique__list-item">
                <div className="unique__list-title">Check number</div>
                <div className="unique__list-circle">+</div>
              </div>
              <div className='unique__list-answer' ><img src={number} /></div>
            </div>
            <div className='unique__list-items'>
              <div className="unique__list-item">
                <div className="unique__list-title">all coincided?  brand is
                  true  if not, failure</div>
                <div className="unique__list-circle">+</div>
              </div>
              <div className='unique__list-answer' >no image new</div>
            </div>
          </div>
        </section>
        { /* For desktop */}
        <section className="unique-desktop">
          <div className="container">
            <div className="unique-desktop__inner">
              <h2 className="unique-desktop__title">Уникальность технологии</h2>
              <div className="unique-desktop__block">
                <img className="unique-desktop__img" src={top} alt="фиолетовая топ bratouverie" />
                <div className="dot dot__qr">
                  <p className="title-unique title-unique__qr">click qr</p>
                  <img className="dot__qr-img img" src={qr} alt="click qr" />
                </div>
                <div className="dot dot__owner">
                  <p className="title-unique title-unique__owner">check owner</p>
                  <img className="dot__owner-img img" src={owner} alt="click qr" />
                </div>
                <div className="dot dot__dress">
                  <p className="title-unique title-unique__dress">check clothes</p>
                  <img className="dot__dress-img img" src={clothes} alt="click qr" />
                </div>
                <div className="dot dot__domane">
                  <p className="title-unique title-unique__domane">check domane</p>
                  <img className="dot__domane-img img" src={domane} alt="click qr" />
                </div>
                <div className="dot dot__name">
                  <p className="title-unique title-unique__name">check name</p>
                  <img className="dot__name-img img" src="" alt="click qr" />
                </div>
                <div className="dot dot__number">
                  <p className="title-unique title-unique__number">check number</p>
                  <img className="dot__number-img img" src={number} alt="click qr" />
                </div>
                <div className="dot dot__coincided">
                  <p className="title-unique title-unique__coincided">all coincided? <br /> brand is true  if not, <br /> failure</p>
                  <img className="dot__coincided-img img" src="" alt="click qr" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}

