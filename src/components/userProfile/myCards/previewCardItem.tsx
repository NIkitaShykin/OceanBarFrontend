/* eslint-disable no-invalid-this */
/* eslint-disable require-jsdoc */
import React from 'react'
import Cards from 'react-credit-cards'
import 'react-credit-cards/lib/styles.scss'
import 'react-credit-cards/es/styles-compiled.css'

type PropTypes = {
  card: any
}
export default class PaymentForm extends React.Component<PropTypes> {
  // constructor(props:any) {
  //   super(props)
  //   this.state = this.props.card.card
  // }

  [x: string]: any;
  state = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: ''
  };

  componentDidMount() {
    this.setState({...this.state, ...this.props.card
    })
  }

  render() {
    return (
      <div style={{height: '150px', margin: '10px'}} >

        <div id='PaymentForm'
          style={{transform: 'scale(0.5)',
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
          <div className='order-deletion' // onClick={() => onDeleteHandler()}
          >
            <i className='far fa-trash-alt icon-height delete-button'></i>
            {/* &#128465; */}
            {/* Урна */}
            <i style={{marginLeft: '-30px', fontSize: '15px'}}>удалить карту</i>
          </div>
        </div>

      </div>
    )
  }
}
