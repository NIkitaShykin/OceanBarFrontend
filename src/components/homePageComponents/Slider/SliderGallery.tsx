import {Carousel} from 'react-bootstrap'
import {useState} from 'react'
import {NavLink} from 'react-router-dom'
import {useAppSelector} from '../../../redux/hooks'
import {DishType} from '../../../common/types/dishesType'
import SliderGallertItem from './SliderGalleryItem'
import {PATH} from '../../../pages/menuPage/Menu/MenuRoutes'

const ControlledCarousel = () => {
  const allDishes = useAppSelector<Array<DishType>>((state) => state.dish)

  const desertDishes = allDishes.filter((dish) => {
    return dish.dishCategory === 'Десерты'
  })
  const oystersDishes = allDishes.filter((dish) => {
    return dish.dishCategory === 'Запеченные устрицы'
  })
  const platoDishes = allDishes.filter((dish) => {
    return dish.dishCategory === 'Плато'
  })
  const saladDishes = allDishes.filter((dish) => {
    return dish.dishCategory === 'Салаты'
  })
  const soupDishes = allDishes.filter((dish) => {
    return dish.dishCategory === 'Супы'
  })

  const [index, setIndex] = useState(1)
  const handleSelect = (selectedIndex: number) => {
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
