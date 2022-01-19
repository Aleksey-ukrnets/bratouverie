import { useEffect, useRef, useState } from 'react';
import Pagination from '../Form-booking/pagination';
import Loader from '../../assets/loader'
import './modal.scss'

const ModalPhoto = ({ isOpenModalPhoto, setPhotoModal, setPaymentModal }) => {

  const photo = useRef();
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (isOpenModalPhoto) {
      let id = sessionStorage.getItem('id')
      let myHeaders = new Headers();
      myHeaders.append("Authorization", "Token ac6627302b3e9d5bc649f50eedd48816131b5195");
      let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      }
      fetch(`https://api.checkbrand.com/api/customer/${id}/`, requestOptions)
        .then(response => response.text())
        .then(result => {
          const data = JSON.parse(result)
          sessionStorage.setItem('email', data.email)
          sessionStorage.setItem('phone', data.phone)
        })
        .catch(error => console.log('error', error));
    }
  })

  const handlerSubmit = (e) => {
    setLoading(true)
    e.preventDefault()
    let id = sessionStorage.getItem('id')
    let email = sessionStorage.getItem('email')
    let phone = sessionStorage.getItem('phone')
    let myHeaders = new Headers();
    myHeaders.append("Authorization", "Token ac6627302b3e9d5bc649f50eedd48816131b5195");
    let formdata = new FormData()
    formdata.append("photo", photo.current.files[0])
    formdata.append("email", email)
    formdata.append("phone", phone)
    let requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    }
    fetch(`https://api.checkbrand.com/api/customer/${id}/`, requestOptions)
      .then(response => response.text())
      .then(result => {
        setLoading(false)
        const data = JSON.parse(result)
        sessionStorage.setItem('link', data.payment_url)
        setPhotoModal(false)
        setPaymentModal(true)
      })
      .catch(error => console.log('error', error));
  }

  if (isOpenModalPhoto) {
    document.querySelector('body').style.position = 'fixed'
  } else {
    document.querySelector('body').style.position = 'static'
  }

  return (
    <div
      className={isOpenModalPhoto ? 'modal active' : 'modal'}
      onClick={() => {
        setPhotoModal(false)
      }}>
      <div className={isOpenModalPhoto ? 'modal__content active' : 'modal__content'}
        onClick={(e) => e.stopPropagation()}>
        {
          loading ? <Loader /> :
            <>
              <h4 className='photo__title'>Оформление заказа</h4>
              <p className='photo__subtitle'>Фото для регистрации на https://checkbrand.com</p>
              <div className="center">
                <div className='form-input'>
                  <div className='preview'>
                    <img id='file-ip-2-preview' />
                  </div>
                  <label htmlFor="file-ip-2">Добавить фото</label>
                  <input
                    id="file-ip-2"
                    type="file"
                    ref={photo}
                    accept='image/png, image/PNG, image/jpeg, image/webp'
                    onChange={
                      (e) => {
                        if (e.target.files.length > 0) {
                          let src = URL.createObjectURL(e.target.files[0]);
                          let preview = document.getElementById("file-ip-2-preview");
                          preview.src = src;
                          preview.style.display = "block";
                        }
                      }}
                  />
                </div>
                <button className='photo__btn' onClick={handlerSubmit}>Продолжить</button>
              </div>
            </>
        }
        <Pagination step={3} />
        <button className='modal__btn'
          onClick={() => {
            setPhotoModal(false)
          }}>&times;</button>
      </div>
    </div>
  )
};

export default ModalPhoto;