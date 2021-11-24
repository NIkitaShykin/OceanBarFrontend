/* eslint-disable no-invalid-this */
/* eslint-disable require-jsdoc */
import React from 'react'
import Cards from 'react-credit-cards'
import {Button} from 'react-bootstrap'
import 'react-credit-cards/lib/styles.scss'
import 'react-credit-cards/es/styles-compiled.css'
import {Row, Col} from 'react-bootstrap'
import {BankCardType} from '../../../common/types/bankCardTypes'
import './NewBankCardForm.scss'

type PropTypes = {
  returnCard: (card: BankCardType ) => void
}

export default class PaymentForm extends React.Component<PropTypes> {
[x: string]: any;
  state = {cvc: '', expiry: '', focus: '', name: '', number: ''}

  fieldFocus = (e: any) => {
    this.setState({focus: e.target.name})
  }

  numberChange = (e: any) => {
    const {name, value} = e.target

    if ( e.target.value.length<17) {
      this.setState({[name]: value})
    }
  }
  nameChange = (e: any) => {
    const {name, value} = e.target
    this.setState({[name]: value})
  }
  expiryChange = (e:any) => {
    const {name, value} = e.target
    if ( e.target.value.length<5) {
      this.setState({[name]: value})
    }
  }
  cvcChange = (e:any) => {
    const {name, value} = e.target
    if ( e.target.value.length<4) {
      this.setState({[name]: value})
    }
  }

  render() {
    const handleSubmit=()=>{
      const id=Date.now()
      this.props.returnCard({...this.state, id})
    }

    return (
      <div style={{height: '100%', margin: '10px'}} >

        <div id='PaymentForm' >
          <Row>
            <Col xs={'auto'} sm={1} md={6} lg={6}>
            </Col>
            <Col xs={'auto'} sm={7} md={5} lg={6}>
              Введите реквизиты карты
            </Col>
            <br/>
            <br/>
          </Row>
          <Row>
            <Col xs={'auto'} sm={9} md={7} lg={6}>
              <Cards
                cvc={this.state.cvc}
                expiry={this.state.expiry}
                focused={this.state.focus}
                name={this.state.name}
                number={this.state.number}
              />
            </Col>

            <Col xs={'auto'} sm={4} md={4} lg={6}>
              <div style={{marginLeft: '50px'}}>

                <form style={{display: 'flex',
                  flexDirection: 'column'}}>
                  <span style={{fontSize: '10px'}}>Имя владельца</span>
                  <input style={{borderRadius: '5px', height: '25px',
                    marginTop: '-6px', width: '200px', border: '1px solid',
                    fontSize: '10px'}}
                  type='text'
                  name='name'
                  placeholder='&hellip;'
                  onChange={this.nameChange}
                  onFocus={this.fieldFocus}
                  />
                </form>

                <form style={{display: 'flex', flexDirection: 'column'}}>
                  <span style={{fontSize: '10px'}}>Номер карты</span>
                  <input style={{borderRadius: '5px', height: '25px',
                    marginTop: '-5px', width: '200px', border: '1px solid',
                    fontSize: '10px'}}
                  type='number'
                  name='number'
                  placeholder='&hellip;'
                  onChange={this.numberChange}
                  onFocus={this.fieldFocus}
                  />
                </form>

                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '200px'
                }}>

                  <form
                    style={{display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <span style={{fontSize: '10px'}}>Срок действия</span>
                    <input style={{borderRadius: '5px', height: '25px',
                      marginTop: '-5px', width: '70px', border: '1px solid',
                      fontSize: '10px'}}
                    type='number'
                    name='expiry'
                    placeholder='мм/гг'
                    onChange={this.expiryChange}
                    onFocus={this.fieldFocus}
                    className='testtt'
                    />
                  </form>


                  <form
                    style={{display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <span style={{fontSize: '10px'}}>CVV</span>
                    <input style={{borderRadius: '5px', height: '25px',
                      marginTop: '-5px', width: '50px', border: '1px solid',
                      fontSize: '10px'}}
                    type='number'
                    name='cvc'
                    placeholder='***'
                    onChange={this.cvcChange}
                    onFocus={this.fieldFocus}
                    />
                  </form>

                </div>
                <br/>
                <Button
                  style={{
                    borderRadius: '10px',
                    width: '200px',
                    color: 'white',
                    backgroundColor: '#ff9e05'
                  }}
                  variant='outline-warning'
                  type='submit'
                  onClick={() => handleSubmit()}
                >
          Готово
                </Button>

              </div>
            </Col>
          </Row>


        </div>
        <br/>
      </div>
    )
  }
}
