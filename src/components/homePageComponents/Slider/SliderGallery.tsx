import {Carousel} from 'react-bootstrap'
import {useState} from 'react'
import SliderGallertItem from './SliderGalleryItem'
import {NavLink} from 'react-router-dom'
import {PATH} from '../../../pages/menuPage/Menu/MenuRoutes'
import {useAppSelector} from '../../../redux/hooks'
import {DishType} from '../../../redux/reducers/dishesReducer'

function ControlledCarousel() {
  const allDishes = useAppSelector<Array<DishType>>((state) => state.dish)

  const desertDishes = allDishes.filter((dish) => {
    return dish.dishCategory == 'Десерты'
  })
    const oystersDishes = allDishes.filter((dish) => {
    return dish.dishCategory == 'Запеченные устрицы'
  })
  const platoDishes = allDishes.filter((dish) => {
    return dish.dishCategory == 'Плато'
  })
  const saladDishes = allDishes.filter((dish) => {
    return dish.dishCategory == 'Салаты'
  })
  const soupDishes = allDishes.filter((dish) => {
    return dish.dishCategory == 'Супы'
  })

  const [index, setIndex] = useState(1)
  const handleSelect = (selectedIndex: any) => {
    setIndex(selectedIndex)
  }

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} variant='dark'>
      <Carousel.Item>
        <NavLink to={PATH.DESSERT}>
          <SliderGallertItem categoryDish={desertDishes} />
        </NavLink>
      </Carousel.Item>
      <Carousel.Item>
        <NavLink to={PATH.SOUP}>
          <SliderGallertItem categoryDish={soupDishes} />
        </NavLink>
      </Carousel.Item>
      <Carousel.Item>
        <NavLink to={PATH.SALAD}>
          <SliderGallertItem categoryDish={saladDishes} />
        </NavLink>
      </Carousel.Item>
      <Carousel.Item>
        <NavLink to={PATH.OYSTERS}>
          <SliderGallertItem categoryDish={oystersDishes} />
        </NavLink>
      </Carousel.Item>
      <Carousel.Item>
        <NavLink to={PATH.PLATO}>
          <SliderGallertItem categoryDish={platoDishes} />
        </NavLink>
      </Carousel.Item>
    </Carousel>
  )
}

export default ControlledCarousel
