import {Component} from 'react'

import './ErrorBoundary.scss'

interface IState {
  hasError: boolean
}

export default class ErrorBoundary extends Component<any, IState> {
  state = {
    hasError: false,
  }

  componentDidCatch(error: any, info: {}) {
    console.log('error', error)
    console.log('info', info)
    this.setState({hasError: true})
  }

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
