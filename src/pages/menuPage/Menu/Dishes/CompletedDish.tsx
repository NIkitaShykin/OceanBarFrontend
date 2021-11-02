<<<<<<< HEAD
import React from 'react'
import './ComletedDish.scss'
// import {React, useState} from 'react'
import {useDispatch} from 'react-redux'
import {Row, Col, Modal, CloseButton} from 'react-bootstrap'
=======
import './Dish.scss'
import { useDispatch } from 'react-redux'
import { Row, Col, Modal, CloseButton } from 'react-bootstrap'
import { DishType } from '../../../../redux/reducers/dishesReducer'
>>>>>>> sprint_4
import {addDishToCart} from '../../../../redux/actions'
import {OrderedToast} from '../../../../components/OrderToast/OrderedToast'

import {TDish} from '../common'

type PropsType = {
  changeStatus: () => void
  currentDish: DishType
}

function CompletedDish(props: PropsType) {
  const dispatch = useDispatch()

  const ingredientList = props.currentDish.ingredients.map(el => {
    if (el.isAdded) return (
      <li style={{ lineHeight: "15px" }}><p>{el.name}</p></li>
    )
  })


  const orderDish = (name: string) => {
    // if (props.dishes.find((dish: TDish) => dish.id === props.currentDish.id)) {
    //   OrderedToast(`Блюдо "${props.currentDish.name}" уже в корзине!`)
    // }
    //  else {
      dispatch(
        addDishToCart({
          id: props.currentDish.id,
          name: props.currentDish.name,
          prise: props.currentDish.price,
          image: props.currentDish.imageURL,
          numberOfDishes: 1,
        })
      )
      OrderedToast(`Блюдо "${props.currentDish.name}" добавлено в корзину`)
    // }
  }


  const handleClose = () => {
    window.history.go(-1)
  }

  return (
    <>
      <div className={'title-dish'}>
        <h1>{props.currentDish.name}</h1>
      </div>
      <Row>
        <Col md={8} lg={8}>
          <div
            key={props.currentDish.id}
            style={{
                height: '100%', width: '100%',
                backgroundImage: `url(${props.currentDish.imageURL})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              } }
          />
        </Col>
        <Col md={4} lg={4}>
          <div className={'ingredients'}>
            <span>
              <Modal.Header className='border-0'>
                <CloseButton onClick={() => handleClose()} />
              </Modal.Header>
            </span>
            <div className={'changing'}>
              <span className={'composition'}>Состав</span>
              <span
                className={'change-ingr'}
                onClick={() => {
                  props.changeStatus()
                }}
              >
                Изменить
              </span>
            </div>

            <ul>
              {ingredientList}
            </ul>

            <br />
            <span>
              <h5>Вес: {props.currentDish?.weight}</h5>
            </span>
            <span>
              <h5>Калории: {props.currentDish?.calories}</h5>
            </span>
            <div className='line-dish'></div>
            <br />
            <div style={{ display: "flex", alignItems: "baseline" }}>
              <span style={{ fontSize: "15px" }}><h5>Стоимость:</h5></span>
              <span style={{ fontSize: "20px", marginLeft: "3px" }}>{props.currentDish?.price}</span>
              <span style={{ fontSize: "18px", marginLeft: "2px" }}>BYN</span>
            </div>
            <button
              className={'order-btn-dish'}
              onClick={() => {
                orderDish(props.currentDish.name)
              }}
            >
              Заказать
            </button>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default CompletedDish
