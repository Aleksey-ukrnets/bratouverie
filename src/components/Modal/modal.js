import './modal.scss'


const Modal = ({ children, isOpenModal, setModal }) => {

  if (isOpenModal) {
    document.querySelector('body').style.position = 'fixed'
  } else {
    document.querySelector('body').style.position = 'static'
  }

  return (
    <div
      className={isOpenModal ? 'modal active' : 'modal'}
      onClick={() => {
        setModal(false)
      }}>
      <div className={isOpenModal ? 'modal__content active' : 'modal__content'}
        onClick={(e) => e.stopPropagation()}>
        {children}
        <button className='modal__btn'
          onClick={() => {
            setModal(false)
          }}>&times;</button>
      </div>
    </div>
  )
};

export default Modal;