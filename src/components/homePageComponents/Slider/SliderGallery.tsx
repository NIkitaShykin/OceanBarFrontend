import {Carousel} from 'react-bootstrap'
import {useState} from 'react'
import SliderGallertItem from './SliderGalleryItem'
import {NavLink} from 'react-router-dom'
import {PATH} from '../../../pages/menuPage/Menu/MenuRoutes'
import { useAppSelector } from '../../../redux/hooks'

function ControlledCarousel() {

  const allDishes = useAppSelector<any>(state => state.dish)
  
  const desertDishes = allDishes.filter(dish => {
    return dish.dishCategory=="Десерты"
  })
  const oystersDishes = allDishes.filter(dish => {
  return dish.dishCategory=="Запеченные устрицы"
})
const platoDishes = allDishes.filter(dish => {
  return dish.dishCategory=="Плато"
})
const saladDishes = allDishes.filter(dish => {
  return dish.dishCategory=="Салаты"
})
const soupDishes = allDishes.filter(dish => {
  return dish.dishCategory=="Супы"
})

const [index, setIndex] = useState(1)
  const handleSelect = (selectedIndex: any) => {
    setIndex(selectedIndex);
  };
 
  return (
    <Carousel activeIndex={index}
      onSelect={handleSelect}
      variant="dark"
      >
       <Carousel.Item>
        <NavLink to={PATH.DESSERT}>
          <SliderGallertItem categoryDish={allDishes}/>
         </NavLink>
      </Carousel.Item>
      <Carousel.Item>
        <NavLink to={PATH.SOUP}>
          <SliderGallertItem categoryDish={allDishes} />
        </NavLink>
      </Carousel.Item>
      <Carousel.Item>
        <NavLink to={PATH.SALAD}>
          <SliderGallertItem categoryDish={allDishes} />
        </NavLink>
      </Carousel.Item>
      <Carousel.Item>
        <NavLink to={PATH.OYSTERS}>
           <SliderGallertItem categoryDish={allDishes} />
        </NavLink>
      </Carousel.Item>
      <Carousel.Item>
        <NavLink to={PATH.PLATO}>
          <SliderGallertItem categoryDish={allDishes} />
        </NavLink>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;

