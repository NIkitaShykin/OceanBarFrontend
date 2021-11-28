import {useDispatch} from 'react-redux'
import {setUsersBookingTables} from '../../../../redux/actions'
import {ApiAdmin} from '../../../../api/ApiAdmin'
import {useEffect} from 'react'
import {useAppSelector} from '../../../../redux/hooks'
import './Tables.scss'
import {Table} from 'react-bootstrap'
import {bookingTablesType} from '../../../../common/types/bookingTypes'

const OrderedTables = () => {
  const dispatch = useDispatch()
  const handleLoad = () => {
    ApiAdmin.getBookedTables().then((el) => {
      dispatch(setUsersBookingTables(el.data.bookedUsers))
    })
  }
  useEffect(() => {
    handleLoad()
  }, [])
  const tables = useAppSelector((state) => state.tables.tables)
  const arrayTables = () => {
    return (
      <Table hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Имя</th>
            <th>Телефон</th>
            <th>Дата</th>
            <th>Время</th>
            <th>Количество гостей</th>
          </tr>
        </thead>
        {tables.map((el: bookingTablesType) => (
          <tbody key={el.id}>
            <tr>
              <td>{el.id}</td>
              <td>{el.name}</td>
              <td>{el.phone}</td>
              <td>{el.date}</td>
              <td>{el.time}</td>
              <td>{el.amountofpeople}</td>
            </tr>
          </tbody>
        ))}
      </Table>
    )
  }
  return <div>{arrayTables()}</div>
}
export default OrderedTables
