import { createRef, Component } from "react";

const styles = {
  textarea: {
    width: '98%',
    margin: '0 auto',
    height: '200px',
    borderRadius: '10px',
    fontFamily: 'Gilroy Regular',
    fontSize: '18px',
    resize: 'none',
    padding: '2%'
  },
  review__btn: {
    display: 'block',
    borderRadius: 28,
    backgroundColor: "#ec1fc0",
    width: '260px',
    height: '55px',
    color: '#ffff',
    fontFamily: 'Gilroy Regular',
    fontSize: '16px',
    margin: '20px auto',
    border: 'none'
  }
}

export default class ReviewForm extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
    this.fileInput = createRef();
  }

  componentWillUnmount() {
    this.state = {
      text: ''
    }
  }

  handleChangeText = (event) => {
    this.setState({ text: event.target.value });
  }

  handlerSubmit = (e) => {
    this.props.hanldlerLoader(true)
    e.preventDefault()
    let formdata = new FormData()
    formdata.append('photo', this.fileInput.current.files[0])
    formdata.append('comment', this.state.text)
    let myHeaders = new Headers();
    myHeaders.append("Authorization", "Token ac6627302b3e9d5bc649f50eedd48816131b5195");
    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    }
    fetch('https://api.checkbrand.com/api/comments/', requestOptions)
      .then(response => response.text())
      .then(result => {
        this.props.hanldlerLoader(false)
        this.props.hanldlerResponse(true)
        this.setState({ response: true })
      })
      .catch(error => console.log('error', error));
  }

  render() {
    return (
      <div>
        <h4 className='review__title'>Оставить отзыв</h4>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div className="center">
            <div className="form-input">
              <div className="preview">
                <img id="file-ip-1-preview" />
              </div>
              <label htmlFor="file-ip-1">Добавить фото</label>
              <input type="file" id="file-ip-1"
                accept='image/png, image/PNG, image/jpeg, image/webp'
                ref={this.fileInput}
                onChange={
                  (e) => {
                    if (e.target.files.length > 0) {
                      let src = URL.createObjectURL(e.target.files[0]);
                      let preview = document.getElementById("file-ip-1-preview");
                      preview.src = src;
                      preview.style.display = "block";
                    }
                  }} />
            </div>
            <textarea style={styles.textarea} value={this.state.value} onChange={this.handleChangeText} placeholder='Текст отзыва'></textarea>
          </div>
          <button style={styles.review__btn} onClick={this.handlerSubmit}>Продолжить</button>
        </form>
      </div>
    )
  }
} 