/* eslint-disable max-len */
import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Button, Image, Modal} from 'react-bootstrap'
import {Form} from 'react-bootstrap'
import {
  minusOneDish,
  plusOneDish,
  removeDishFromCart,
} from '../../redux/actions'
import {orderedToast} from '../OrderToast/OrderedToast'

import './Cart.scss'
import {ApiCart} from '../../api/ApiCart'
import Cookies from 'js-cookie'

interface IOrderItemProps {
  id: number
  name: string
  price: string
  image: string
  numberOfDishes: number
  position: number
}

const OrderItem: React.FunctionComponent<IOrderItemProps> = ({
  id,
  name,
  price,
  image,
  numberOfDishes,
  position,
}) => {
  let withoutIng: any
  const dispatch = useDispatch()
  let [counter, setCounter] = useState(numberOfDishes)
  const [show, setShow] = useState(false)
  const handleClose = () => {
    setShow(false)
  }
  const handleConfirm = () => {
    withoutIng.map((el: any) => {})
    // check index of ingredinets if they deleted
    setShow(false)
  }
  const ingredients = useSelector((state: any) => state.cart)
  const handleShow = () => setShow(true)
  const token = Cookies.get('token')
  const onDeleteHandler = () => {
    ApiCart.deleteDishFromCart(position, Cookies.get('token')).then(() => {
      console.log('deleted')
    })
    dispatch(removeDishFromCart(id))
    // eslint-disable-next-line new-cap
    orderedToast(`Блюдо "${name}" удалено из корзины`)
  }

  return (
    <div className='order-item shadow' id={String(id)}>
      <div className='order-block order-img'>
        <Image className='rounded-3' src={image} width={80} height={80} />
      </div>

      <div className='order-block order-details'>
        <span className='order-title bold'>{name}</span>
        <span>{Number(price) * numberOfDishes} BYN</span>
        <a onClick={handleShow} style={{cursor: 'pointer'}}>
          Изменить состав
        </a>
      </div>
      {show ? (
        <>
          <Modal autoFocus={true} show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Изменение состава</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {ingredients.dishes.map((el: any) => {
                if (el.id === id) {
                  withoutIng = []
                  return el.ingredients.map((ing: any, index: number) => {
                    return (
                      <ul key={index}>
                        <Form.Check
                          onChange={(e) => {
                            withoutIng.push(index)
                          }}
                          defaultChecked={true}
                          type='checkbox'
                          label={`${ing.name}`}
                        />
                      </ul>
                    )
                  })
                }
              })}
            </Modal.Body>
            <Modal.Footer>
              <Button variant='warning' onClick={handleClose}>
                Отменить
              </Button>
              <Button variant='success' onClick={handleConfirm}>
                Сохранить
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      ) : null}
      <div className='order-block order-counter'>
        <button
          className='control'
          onClick={() => {
            if (counter > 1) {
              setCounter(--counter)
              ApiCart.updateDishInCart(position, counter, token).then(() => {
                console.log(numberOfDishes)
              })
              dispatch(minusOneDish({id: id, numberOfDishes: counter}))
            } else {
              onDeleteHandler()
            }
          }}
        >
          -
        </button>
        <span className='counter'>{counter < 0 ? 0 : counter}</span>
        <button
          className='control'
          onClick={() => {
            setCounter(++counter)
            ApiCart.updateDishInCart(position, counter, token).then(() => {
              console.log(numberOfDishes)
            })
            dispatch(plusOneDish({id: id, numberOfDishes: counter}))
          }}
        >
          +
        </button>
      </div>

      <div className='order-block'>
        <div className='order-deletion' onClick={() => onDeleteHandler()}>
          <i className='far fa-trash-alt icon-height delete-button'></i>
        </div>
      </div>
    </div>
  )
}

export default OrderItem
