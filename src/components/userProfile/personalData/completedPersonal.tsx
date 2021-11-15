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
        <Col sm={1}><div className='user-name'><h5>&#128100;</h5></div></Col>
        <Col sm={4}><div className='user-name'>
          <h5>{user.name}</h5></div></Col>
        <Col sm={7}></Col>
      </Row>
      <Row>
        <Col sm={1}><div className='user-name'><h5> &#128101; </h5></div></Col>
        <Col sm={4}><div className='user-name'>
          <h5>{user.secondname}</h5></div></Col>
        <Col sm={7}></Col>
      </Row>
      <Row>
        <Col sm={1}><div className='user-name'><h5>&#128386; </h5></div></Col>
        <Col sm={4}><div className='user-name'>
          <h5>{user.email}</h5></div></Col>
        <Col sm={7}></Col>
      </Row>
      <Row>
        <Col sm={1}><div className='user-name'><h5>&#9742;</h5></div></Col>
        <Col sm={4}><div className='user-name'>
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
