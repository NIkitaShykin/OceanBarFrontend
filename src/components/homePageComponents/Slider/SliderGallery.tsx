import React from 'react'
import {Carousel} from 'react-bootstrap'
import data from '../../../pages/Menu/DB/foodData'
import {useState} from 'react'
import SliderGallertItem from './SliderGalleryItem'
import {NavLink} from 'react-router-dom'
import {PATH} from '../../../pages/Menu/MenuRoutes'

function ControlledCarousel() {
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
          <SliderGallertItem imgData={data[0]}/>
         </NavLink>
      </Carousel.Item>
      <Carousel.Item>
        <NavLink to={PATH.SOUP}>
          <SliderGallertItem imgData={data[1]} />
        </NavLink>
      </Carousel.Item>
      <Carousel.Item>
        <NavLink to={PATH.SALAD}>
          <SliderGallertItem imgData={data[2]} />
        </NavLink>
      </Carousel.Item>
      <Carousel.Item>
        <NavLink to={PATH.OYSTERS}>
           <SliderGallertItem imgData={data[3]} />
        </NavLink>
      </Carousel.Item>
      <Carousel.Item>
        <NavLink to={PATH.PLATO}>
          <SliderGallertItem imgData={data[4]} />
        </NavLink>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;

