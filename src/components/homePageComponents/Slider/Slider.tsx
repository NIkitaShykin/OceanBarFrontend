import {Row, Col} from 'react-bootstrap'
// import {useSelector} from 'react-redux'

import SliderGallery from './SliderGallery'
// import {AppStoreType} from '../../../redux/reducers/rootReducer'
import {DishType} from '../../../common/types/dishesType'
import Spinner from '../../../components/Spinner/Spinner'
import {useAppSelector} from '../../../redux/hooks'

const Slider = () => {
  const allDishes =
   useAppSelector<DishType[]>((state) => state.dish.dishes)

  return (
    <>
      <br/><br/>
      <Row >
        <Col> <h2> Предложение недели </h2> </Col>
      </Row>
      <Row className='justify-content-md-center'>
        <Col xs lg='1'></Col>
        <Col>
          <SliderGallery/>
          {/* { allDishes.length < 10 && <Spinner/>}
          { allDishes.length > 10 ? <SliderGallery/> : null } */}
        </Col>
        <Col xs lg='1'></Col>
      </Row>
      <br/><br/><br/><br/>
    </>

  )
}

export default Slider
