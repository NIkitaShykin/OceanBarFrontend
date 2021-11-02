<<<<<<< HEAD
import React from 'react'
// import data from '../../../pages/Menu/DB/foodData'
// import {useState} from 'react'


type ImgData = any

const SliderGallertItem = (props: ImgData) => {
  const imgWidth = '300px'
  const imgPadding = '10px'
=======
import { IngredientType } from '../../../redux/reducers/dishesReducer'
import { IngredientsType } from '../../../redux/reducers/dishesReducer'
import { DishType } from '../../../redux/reducers/dishesReducer'

type PropsType = {
  categoryDish: Array<DishType>
}

type ImgData = any

function SliderGallertItem(props: PropsType) {

  const imgWidth = "300px"
  const imgPadding = "10px"
>>>>>>> sprint_4

  return (
    <div style={{
      display: 'flex', flexWrap: 'wrap',
      justifyContent: 'center'
    }}>
<<<<<<< HEAD
      <img style={{width: imgWidth, padding: imgPadding}}
        className='d-block'
        src={props.imgData[0].image}
        alt='Second slide'
      />
      <img style={{width: imgWidth, padding: imgPadding}}
        className='d-block'
        src={props.imgData[1].image}
        alt='Second slide'
      />
      <img style={{width: imgWidth, padding: imgPadding}}
        className='d-block'
        src={props.imgData[2].image}
        alt='Second slide'
=======
     <img style={{ width: imgWidth, padding: imgPadding }}
        className="d-block"
        src={props.categoryDish[0].imageURL}
        // src={"https://img.poehalisnami.by/static/countries/c84/small/84_637145235972434334.jpg"}
        alt="Second slide"
      />
      <img style={{ width: imgWidth, padding: imgPadding }}
        className="d-block"
        src={props.categoryDish[1].imageURL}
        // src={"https://img.poehalisnami.by/static/countries/c84/small/84_637145235972434334.jpg"}
        alt="Second slide"
      />
      <img style={{ width: imgWidth, padding: imgPadding }}
        className="d-block"
        src={props.categoryDish[0].imageURL}
        // src={"https://img.poehalisnami.by/static/countries/c84/small/84_637145235972434334.jpg"}
        alt="Second slide"
>>>>>>> sprint_4
      />
    </div>
  )
}

export default SliderGallertItem
