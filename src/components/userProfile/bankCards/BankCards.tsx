/* eslint-disable no-invalid-this */
/* eslint-disable require-jsdoc */
import React from 'react'
import Cards from 'react-credit-cards'
import 'react-credit-cards/lib/styles.scss'
import 'react-credit-cards/es/styles-compiled.css'

export default class PaymentForm extends React.Component {
  [x: string]: any;
  state = {
    cvc: '345',
    expiry: '0822',
    focus: '',
    name: 'Ben Bernanke',
    number: '4245841464354390'
  };
  preview: any;

  fieldFocus = (e: any) => {
    this.setState({focus: e.target.name})
  }

  numberChange = (e: any) => {
    const {name, value} = e.target
    this.setState({[name]: value})
  }
  nameChange = (e: any) => {
    const {name, value} = e.target
    this.setState({[name]: value})
  }
  expiryChange = (e:any) => {
    const {name, value} = e.target
    this.setState({[name]: value})
  }
  cvcChange = (e:any) => {
    const {name, value} = e.target
    this.setState({[name]: value})
  }


  render() {
    return (
      <div
        // className='order-item shadow' id={'1'}
        style={{height: '150px', margin: '10px'}}
      >

        <div id='PaymentForm'
          style={{transform: 'scale(0.3)',
            width: '100px',
            paddingLeft: '40px'
          }} >
          <Cards
            cvc={this.state.cvc}
            expiry={this.state.expiry}
            focused={this.state.focus}
            name={this.state.name}
            number={this.state.number}
          />
        </div>
        <div
          style={{paddingLeft: '180px', marginTop: '-105px'}}
          className='order-block'
        >
          <div className='order-deletion'
            // onClick={() => onDeleteHandler()}
          >
            <i className='far fa-trash-alt icon-height delete-button'></i>
          </div>
        </div>

      </div>
    )
  }
}
