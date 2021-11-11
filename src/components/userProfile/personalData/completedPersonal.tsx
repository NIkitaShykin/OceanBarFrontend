import {UserType} from '../../../common/types/userTypes'
import {AppStoreType} from '../../../redux/reducers/rootReducer'
import {useSelector} from 'react-redux'
import {Col, Row} from 'react-bootstrap'

type PropsType = {
  changeStatus: (status:boolean) => void
}

const completedPersonal = (props:PropsType) => {
  const user =
  useSelector<AppStoreType, UserType>((state) => state.user)


  return (
    <div className='info-block'>
      <Row>
      &#128100;
        <Col sm={3}><div className='user-name'><h5>Имя </h5></div></Col>
        <Col sm={2}><div className='user-name'>
          <h5>{user.name}</h5></div></Col>
        <Col sm={7}></Col>
      </Row>
      <Row>
      &#128101;
        <Col sm={3}><div className='user-name'><h5>Фамилия </h5></div></Col>
        <Col sm={2}><div className='user-name'>
          <h5>{user.secondname}</h5></div></Col>
        <Col sm={7}></Col>
      </Row>
      <Row>
      &#128386;
        <Col sm={3}><div className='user-name'><h5>Емейл </h5></div></Col>
        <Col sm={2}><div className='user-name'>
          <h5>{user.email}</h5></div></Col>
        <Col sm={7}></Col>
      </Row>
      <Row>
      &#9742;
        <Col sm={3}><div className='user-name'><h5>Телефон</h5></div></Col>
        <Col sm={2}><div className='user-name'>
          <h5>{user.phone}</h5></div></Col>
        <Col sm={7}></Col>
      </Row>
      <br/>
      <button
        className='btn btn-outline-warning offset-md-10'
        onClick={()=>{
          props.changeStatus(false)
        }}
      >
        Изменить
      </button>

    </div>

  )
}

export default completedPersonal
