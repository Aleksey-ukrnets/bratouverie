import Booking from "./components/Booking/booking";
import Check from "./components/Check/check";
import Main from "./components/Main/main";
import Review from "./components/Review/review";
import Social from "./components/Social/social";
import Unique from "./components/Unique/unique";
import Work from "./components/Work/work";
import BookingForm from "./components/Form-booking/form";
import Assortment from "./components/Assortment/assortment";
import ModalPhoto from "./components/Modal/modal-photo";

import './App.scss'
import { useState } from "react";
import Modal from "./components/Modal/modal";
import ModalPayment from "./components/Modal/modal-payment";
import ModalReview from "./components/Modal/modal-review";
import ErrorBoundry from "./components/ErrorBoundry/errorBoundry";

const App = () => {
  const [isOpenModal, setModal] = useState(false)
  const [isOpenPhotoModal, setPhotoModal] = useState(false)
  const [isOpenPayment, setPaymentModal] = useState(false)
  const [isOpenReview, setReview] = useState(false)

  return (
    <>
      <Main setModal={setModal} />
      <Unique />
      <Work />
      <Check />
      <Booking setModal={setModal} />
      <Review setReview={setReview} />
      <ErrorBoundry>
        <Assortment />
      </ErrorBoundry>
      <Social />
      <Modal setModal={setModal} isOpenModal={isOpenModal}>
        <h3 className="title">Оформление заказа</h3>
        <BookingForm setModal={setModal} setPhotoModal={setPhotoModal} />
      </Modal>
      <ModalPhoto isOpenModalPhoto={isOpenPhotoModal} setPhotoModal={setPhotoModal} setPaymentModal={setPaymentModal} />
      <ModalPayment isOpenPayment={isOpenPayment} setPaymentModal={setPaymentModal} />
      <ModalReview isOpenReview={isOpenReview} setReview={setReview} />
    </>
  );
}

export default App;
