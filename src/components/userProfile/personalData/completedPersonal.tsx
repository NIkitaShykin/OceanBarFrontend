import {UserType} from '../../../common/types/userTypes'
import {AppStoreType} from '../../../redux/reducers/rootReducer'
import Spinner from '../../Spinner/Spinner'
import {useSelector} from 'react-redux'
import {Col, Row} from 'react-bootstrap'

type PropsType = {
  changeStatus: (status:boolean) => void
}

const completedPersonal = (props:PropsType) => {
  // eslint-disable-next-line max-len
  const user = useSelector<AppStoreType, UserType>((state) => state.user.userProfile)
  // eslint-disable-next-line max-len
  const loading = useSelector<AppStoreType, boolean>((state) => state.user.isLoading)


  return (
    <div className='info-block'>
      { loading && <Spinner/> }
      <br/>
      <Row>
        <Col xs={'auto'} sm={3} md={3} lg={3}>
          <div className='user-name'><h5>Имя</h5></div>
        </Col>
        <Col sm={4}>
          <div className='user-name'>
            <h5>{user.name}</h5></div></Col>
        <Col sm={7}></Col>
      </Row>
      <Row>
        <Col xs={'auto'} sm={3} md={3} lg={3}>
          <div className='user-name'><h5>Фамилия</h5></div>
        </Col>
        <Col sm={4}><div className='user-name'>
          <h5>{user.secondname}</h5></div></Col>
        <Col sm={7}></Col>
      </Row>
      <Row>
        <Col xs={'auto'} sm={3} md={3} lg={3}>
          <div className='user-name'><h5>Емейл</h5></div>
        </Col>
        <Col sm={4}><div className='user-name'>
          <h5>{user.email}</h5></div></Col>
        <Col sm={7}></Col>
      </Row>
      <Row>
        <Col xs={'auto'} sm={3} md={3} lg={3}>
          <div className='user-name'><h5>Телефон</h5></div>
        </Col>
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
