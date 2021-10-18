import React from 'react'
import foodData from '../DB/foodData'
import {useParams} from 'react-router-dom'
import './ComletedDish.scss'
import DishIngredients from './DishIngridients'
import ListItem from '../Assortment/ListItem'

function CompletedDish(props: any) {
  const token = useParams<{token: string}>()

  // @ts-ignore
  const dish = foodData[0].find((el) => el.id == token.token)

  // const orderDish = () => {
  //   // send dishID and Ingridients to..
  //   // and redirect page to
  // }

  return (
    <div className={'main-dish'}>
      <div className={'title-dish'}>
        <h1>{dish.name}</h1>
      </div>
      <div className={'image-dish'}>
        <i className='arrow bi bi-arrow-left-circle'></i>
        <img className={'image'} src={dish.image} alt='' />
        <i className='arrow bi bi-arrow-right-circle'></i>
        <div className={'ingredients'}>
          <div className={'changing'}>
            <span className={'composition'}>Состав</span>
            <span className={'change-ingr'}>Изменить</span>
          </div>
          <DishIngredients ingredients={dish?.ingredients} isShifting={false} />
          <button className={'order-btn'}>Заказать</button>
        </div>
      </div>
      <div className={'may-be-intresting'}>
        <h2>Вас так же могут заинтересовать</h2>
        <ListItem isIntresting={true} data={foodData[0]} />
      </div>
    </div>
  )
}

export default CompletedDish
