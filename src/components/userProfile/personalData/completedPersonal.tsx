import {UserType} from '../../../common/types/userTypes'
import {AppStoreType} from '../../../redux/reducers/rootReducer'
import Spinner from '../../Spinner/Spinner'
import {useSelector} from 'react-redux'
import {Col, Row} from 'react-bootstrap'

type PropsType = {
  changeStatus: (status:boolean) => void
}

const completedPersonal = (props:PropsType) => {
  const user =
   useSelector<AppStoreType, UserType>((state) => state.user.userProfile)
  const loading =
   useSelector<AppStoreType, boolean>((state) => state.user.isLoading)

  return (
    <div className='info-block'>
      { loading && <Spinner/> }
      <br/>
      <Row>
        <Col>
          <div className='user-name'>
            <h5>{user && user.name}</h5>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className='user-name'>
            <h5>{user && user.secondname}</h5>
          </div>
        </Col>
      </Row>
      <Row>
        <Col >
          <div className='user-name'>
            <h5>{user && user.email}</h5>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className='user-name'>
            <h5>{user && user.phone}</h5>
          </div>
        </Col>
      </Row>
      <br/>
      <button
        className='btn btn-outline-warning offset-md-9'
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
