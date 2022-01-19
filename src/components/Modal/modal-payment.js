import { useEffect, useState } from 'react';
import '../Modal/modal.scss'
import UniqueQR from '../Form-booking/unique-qr';

const ModalPayment = ({ isOpenPayment, setPaymentModal }) => {

  const [link, setLink] = useState()
  const [payment, setPayment] = useState(false)


  useEffect(() => {
    let link = sessionStorage.getItem('link')
    setLink(link)
  })


  if (isOpenPayment) {
    document.querySelector('body').style.position = 'fixed'
  } else {
    document.querySelector('body').style.position = 'static'
  }

  return (
    <div
      className={isOpenPayment ? 'modal active' : 'modal'}
      onClick={() => {
        setPaymentModal(false)
        setPayment(false)
      }}>
      <div className={isOpenPayment ? 'modal__content active' : 'modal__content'}
        onClick={(e) => e.stopPropagation()}>
        {
          payment ? <h1 className='title'>Следите за статусом оплаты на своем email</h1> : <UniqueQR payment={payment} link={link} setPayment={setPayment} />
        }
        <button className='modal__btn'
          onClick={() => {
            setPaymentModal(false)
            setPayment(false)
          }}>&times;</button>
      </div>
    </div>
  )
};

export default ModalPayment;