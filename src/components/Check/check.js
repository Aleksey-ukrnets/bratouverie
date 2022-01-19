import check from '../../assets/images/check.png'

import './style.scss'

const Check = () => {
  return (
    <section className="check">
      <div className="check__wrapper">
        <h3 className="check__title">Убедитесь сами</h3>
        <h6 className="check__subtitle">Перейдите на сайт и проверьте подлинность вещи</h6>
        <img className="check__img" src={check} alt='checkbrand.com' />
        <a href="https://checkbrand.com/" className="check__link">Проверить</a>
      </div>
    </section>
  )
}


export default Check;