import './Dish.scss'
import { useDispatch } from 'react-redux'
import { Row, Col, Modal, CloseButton } from 'react-bootstrap'
import { DishType } from '../../../../redux/reducers/dishesReducer'

type PropsType = {
  changeStatus?: () => void
  currentDish: DishType
}

function CompletedDish(props: PropsType) {
  const dispatch = useDispatch()

  const ingredientList = props.currentDish.ingredients.map(el => {
    if (el.isAdded) return (
      <li style={{ lineHeight: "15px" }}><p>{el.name}</p></li>
    )
  })

  const orderDish = () => {
  }


  const handleClose = () => {
    window.history.go(-1)
  }

  return (
    <>
      {/* <div className={'main-dish'}> */}
      <div className={'title-dish'}>
        <h1>{props.currentDish.name}</h1>
      </div>
      <Row>
        <Col md={8} lg={8}>
          <div
            key={props.currentDish.id}
            style={{
                height: '100%', width: '100%',
                backgroundImage: `url(${props.currentDish.imageURL})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              } }
          />
          {/* <img
            className={'image'}
            style={
              {         
                  // height: '150px', width: '100%',
                  // backgroundImage: `url(${props.currentDish.imageURL})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  //  width: '50%', height: 'auto'
                }
            }
            src={props.currentDish.imageURL}
            // src={"https://oceanbarmenu.s3.eu-north-1.amazonaws.com/%D0%9F%D0%BB%D0%B0%D1%82%D0%BE/%D0%9F%D0%BB%D0%B0%D1%82%D0%BE%D0%9A%D1%80%D0%B0%D0%B1%D1%8B%D0%9C%D0%BE%D0%BB%D0%BB%D1%8E%D1%81%D0%BA%D0%B8.jpg"}
            alt='dish image'
          /> */}
        </Col>
        <Col md={4} lg={4}>
          <div className={'ingredients'}>
            <span>
              <Modal.Header className='border-0'>
                <CloseButton onClick={() => handleClose()} />
              </Modal.Header>
            </span>
            <div className={'changing'}>
              <span className={'composition'}>Состав</span>
              <span
                className={'change-ingr'}
                onClick={() => {
                  props.changeStatus()
                }}
              >
                Изменить
              </span>
            </div>

            <ul>
              {ingredientList}
            </ul>

            <br />
            <span>
              <h5>Вес: {props.currentDish?.weight}</h5>
            </span>
            <span>
              <h5>Калории: {props.currentDish?.calories}</h5>
            </span>
            <div className='line-dish'></div>
            <br />
            <div style={{ display: "flex", alignItems: "baseline" }}>
              <span style={{ fontSize: "15px" }}><h5>Стоимость:</h5></span>
              <span style={{ fontSize: "20px", marginLeft: "3px" }}>{props.currentDish?.price}</span>
              <span style={{ fontSize: "18px", marginLeft: "2px" }}>BYN</span>
            </div>
            <button
              className={'order-btn-dish'}
              onClick={() => {
                orderDish()
              }}
            >
              Заказать
            </button>
          </div>
        </Col>
      </Row>
      {/* </div> */}
    </>
  )
}

export default CompletedDish
