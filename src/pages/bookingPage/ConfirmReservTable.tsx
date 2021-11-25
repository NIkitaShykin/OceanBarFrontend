
import {useHistory} from 'react-router-dom'
import {Card, Button} from 'react-bootstrap'

const ConfirmReservTable = (props:any) => {
  const history = useHistory()

  const handleClick = () => {
    props.isCompleteToggle()
    history.push('/')
  }
  return (
    <div className='registration-form'>
      <div className='container'>
        <Card className='shadow p-3 my-5 bg-body rounded'>
          <Card.Body>
            <Card.Title><h2>Столик забронирован!</h2></Card.Title>
            <Card.Text className='mb-5'>
            </Card.Text>
            <Button
              variant='outline-warning'
              type='button'
              onClick={() => handleClick()}
            >
              Ok
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default ConfirmReservTable


// const ConfirmReservTable = () => {
//   return (
//     <div className='cart'>
//       <div className='container'>
//         <h1>
//    Спасибо за вашу заявку ! Администратор свяжется с вами в течение 10 минут
//         </h1>
//       </div>
//     </div>
//   )
// }

// export default ConfirmReservTable
