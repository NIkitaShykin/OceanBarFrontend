import { useState } from 'react'
import './maybeIntresting.scss'
import ListItem from '../../pages/menuPage/Menu/Assortment/ListItem'
import { DishType } from '../../redux/reducers/dishesReducer'
import { useAppSelector } from '../../redux/hooks'


function CompletedDish() {

  const allDishes = useAppSelector<Array<DishType>>(state => state.dish)
  const intrestingDishes = allDishes.filter(dish => {
    return dish.dishCategory !== "только для вип клиентов"
  })

  let [index, setIndex] = useState(0)
  const handleSelect = (selectedIndex: string) => {
    if (selectedIndex == "previous" && index > 0) { setIndex(--index) }
    if (selectedIndex == "next" && index < (intrestingDishes.length - 4)) { setIndex(++index) }
  }

  let y
  let i = index
  if (intrestingDishes.length < 4) {
    y = index + intrestingDishes.length
  }
  else { y = index + 4 }

  const sliderDishes: Array<DishType> = []
  for (i; i < y; i++) {
    sliderDishes.push(intrestingDishes[i])
  }

 
  return (
    <div className={'may-be-intresting'}>
      <h2 style={{ paddingLeft: "15%" }}>Вас так же могут заинтересовать</h2>
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <i className='arrow bi bi-arrow-left-circle'
          onClick={() => { handleSelect("previous") }}
        ></i>
        <ListItem isIntresting={true} data={sliderDishes} />
        <i className='arrow bi bi-arrow-right-circle'
          onClick={() => { handleSelect("next") }}
        ></i>
      </div>
    </div>
  )
}

export default CompletedDish
