import {Row, Col} from 'react-bootstrap'

import SliderGallery from './SliderGallery'
import Spinner from '../../../components/Spinner/Spinner'
import {useAppSelector} from '../../../redux/hooks'

const Slider = () => {
  const allDishes = useAppSelector((state) => state.dish.dishes)
  const isLoading = useAppSelector((state) => state.dish.isLoading
  )

  return (
    <>
      <br/><br/>
      <Row >
        <Col> <h2> Предложение недели </h2> </Col>
      </Row>
      <Row className='justify-content-md-center'>
        <Col xs lg='1'></Col>
        <Col>

          { isLoading && <Spinner/>}
          { allDishes.length > 10 ? <SliderGallery/> : null }
        </Col>
        <Col xs lg='1'></Col>
      </Row>
      <br/><br/><br/><br/>
    </>

  )
}

export default Slider
