/* eslint-disable no-invalid-this */
/* eslint-disable require-jsdoc */
import React from 'react'
import Cards from 'react-credit-cards'
import 'react-credit-cards/lib/styles.scss'
import 'react-credit-cards/es/styles-compiled.css'

export default class PaymentForm extends React.Component {
  [x: string]: any;
  state = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  };

  numberFocus = (e: { target: { name: any; }; }) => {
    this.setState({focus: e.target.name})
  }
  nameFocus = (e: any) => {
    this.setState({focus: e.target.name})
  }

  numberChange = (e: { target: { name: any; value: any; }; }) => {
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
  expiryFocus = (e: any) => {
    const {expiry, value} = e.target
    this.setState({[expiry]: value})
  }

  render() {
    return (
      <div>
        <div id='PaymentForm' style={{display: 'flex', padding: '20px'}}>
          <Cards
            cvc={this.state.cvc}
            expiry={this.state.expiry}
            focused={this.state.focus}
            name={this.state.name}
            number={this.state.number}
          />
          <div
          // style={{padding: '20px'}}
          >
            <form>
              <input style={{borderRadius: '5px', margin: '10px'}}
                type='tel'
                name='number'
                placeholder='Card Number'
                onChange={this.numberChange}
                onFocus={this.numberFocus}
              />
            </form>
            <form>
              <input style={{borderRadius: '5px', margin: '10px'}}
                type='tel'
                name='name'
                placeholder='Card Name'
                onChange={this.nameChange}
                onFocus={this.nameFocus}
              />
            </form>
            <form>
              <input style={{borderRadius: '5px', margin: '10px'}}
                type='tel'
                name='expiry'
                placeholder='Expiry time'
                onChange={this.expiryChange}
                onFocus={this.expiryFocus}
              />
            </form>
          </div>

        </div>
      </div>
    )
  }
}
