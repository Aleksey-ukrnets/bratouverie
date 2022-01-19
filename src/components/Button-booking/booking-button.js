import './style.scss'

const BookingButton = ({ name, setModal }) => {
  return (
    <button onClick={() => setModal(true)} className={name}>Забронировать</button>
  )
}

export default BookingButton;