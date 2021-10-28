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
      <li><p>{el.name}</p></li>
    )
  })

  const orderDish = () => {
    // dispatch(
    // actionCreaterName(
    // [
    //   { user: "email" },
    //   { dishId: `${props.currentDish.id}` },
    //   { ingredients: [`${props.currentDish?.ingredients}`] }
    // ]
    // ))
    // ------------------------------------------------------------------------------
    // 1) или целиком обект отправлять на бэк, чтобы потом там по id заново это блюдо
    //  не искать и не перепаршивать в него новые ингридиенты с новой структурой?
    // 2) В каком виде отправлять ингридиенты, если стрингой потом для корзины из
    // заново парсить нужно будет в объект? 
    // -------------------------------------------------------------------------------
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
          <img
            className={'image'}
            style={{ width: '100%', height: 'auto' }}
            // src={props.currentDish.image}
            src={"https://img.poehalisnami.by/static/countries/c84/small/84_637145235972434334.jpg"}
            alt='dish image'
          />
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
