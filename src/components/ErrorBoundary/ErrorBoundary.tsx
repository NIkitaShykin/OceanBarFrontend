import {Component} from 'react'
import './ErrorBoundary.scss'
interface IState {
  hasError: boolean
}

// eslint-disable-next-line require-jsdoc
export default class ErrorBoundary extends Component<any, IState> {
  state = {
    hasError: false,
  }
  // eslint-disable-next-line require-jsdoc
  componentDidCatch(error: any, info: {}) {
    this.setState({hasError: true})
  }

  // eslint-disable-next-line require-jsdoc
  render() {
    if (this.state.hasError) {
      return (
        <div className='App'>
          <p className={'errorBound'}>Ой! Произошла ошибка :(</p>
        </div>
      )
    } else {
      return this.props.children
    }
  }
}
