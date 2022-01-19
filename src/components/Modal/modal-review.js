import { Component } from 'react';
import Loader from '../../assets/loader';
import './modal.scss'
import ReviewForm from '../Review/review-form';

export default class ModalReview extends Component {
  constructor(props) {
    super(props)
  }
  state = {
    response: false,
    loading: false
  }

  componentWillUnmount() {
    this.state = {
      response: false,
      loading: false
    }
  }

  hanldlerResponse = (value) => {
    this.setState({ response: value })
  }

  hanldlerLoader = (value) => {
    this.setState({ loading: value })
  }

  render() {
    const { loading, response } = this.state;
    const responseMessage = response ? <h1 className='review__response'>Ваш отзыв отправлен на модерацию</h1> : null;
    const spinner = loading ? <Loader /> : null;
    const content = !(loading || response) ? <ReviewForm hanldlerResponse={this.hanldlerResponse} hanldlerLoader={this.hanldlerLoader} /> : null;

    if (this.props.isOpenReview) {
      document.querySelector('body').style.position = 'fixed'
    } else {
      document.querySelector('body').style.position = 'static'
    }

    return (
      <div
        className={this.props.isOpenReview ? 'modal active' : 'modal'}
        onClick={() => {
          this.setState({ response: false })
          this.props.setReview(false)
        }}>
        <div className={this.props.isOpenReview ? 'modal__content active' : 'modal__content'}
          onClick={(e) => e.stopPropagation()}>
          {responseMessage}
          {spinner}
          {content}
          <button className='modal__btn'
            onClick={() => {
              this.setState({ response: false })
              this.props.setReview(false)
            }}>&times;</button>
        </div>
      </div>
    )
  }
};
