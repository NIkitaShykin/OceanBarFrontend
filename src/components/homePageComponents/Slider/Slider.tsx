
import {Row, Col} from 'react-bootstrap'
import SliderGallery from './SliderGallery'
import {AppStoreType} from '../../../redux/reducers/rootReducer'
import {useSelector} from 'react-redux'
import {DishType} from 'src/common/types/dishesType'

const Slider = () => {
  const allDishes =
   useSelector<AppStoreType, Array<DishType>>((state) => state.dish)

  return (
    <>
      <br/><br/>
      <Row >
        <Col> <h2> Предложение недели </h2> </Col>
      </Row>
      <Row className='justify-content-md-center'>
        <Col xs lg='1'></Col>
        <Col>
          { allDishes.length > 10 ? <SliderGallery/> : null }
        </Col>
        <Col xs lg='1'></Col>
      </Row>
      <br/><br/><br/><br/>
    </>

  )
}

export default Slider
