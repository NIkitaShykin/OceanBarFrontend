/* eslint-disable no-invalid-this */
/* eslint-disable require-jsdoc */
import React from 'react'
import Cards from 'react-credit-cards'
import {BankCardType} from '../../../common/types/bankCardTypes'
import 'react-credit-cards/lib/styles.scss'
import 'react-credit-cards/es/styles-compiled.css'

type PropTypes = {
  card: BankCardType,
  cardNumber: number,
  deleteCard: (cardNumber: number) => void
}
export default class PaymentForm extends React.Component<PropTypes> {
  state = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: ''
  };

  componentDidMount() {
    this.setState({...this.state, ...this.props.card,
    })
  }

  render() {
    return (
      <div style={{height: '150px', margin: '10px'}}
        key={this.props.card.id}
        test-key={this.props.card.id}
      >
        <div id='PaymentForm'
          style={{transform: 'scale(0.6)',
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
        <div style={{paddingLeft: '250px', marginTop: '-105px'}}
          className='order-block'
        >
          <div className='order-deletion'
            style={{display: 'flex'}}
            onClick={() => this.props.deleteCard(this.props.cardNumber)}
          >
            <i className=
              'far fa-trash-alt icon-height delete-button'></i>
          </div>
        </div>

      </div>
    )
  }
}
