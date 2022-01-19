import { Component } from "react"

export default class ErrorBoundry extends Component {
  state = {
    error: false
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
    this.setState({
      error: true
    })
  }

  render() {
    if (this.state.error) {
      return <h1>Что-то пошло не так...</h1>
    }

    return this.props.children;
  }
}