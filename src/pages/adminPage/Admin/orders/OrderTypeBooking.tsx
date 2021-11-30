import {Table} from 'react-bootstrap'
import {OrdersType} from '../../../../common/types/bookingTypes'

const OrdersBooking = ({orders}: any) => {
  const arrayTables = () => {
    return (
      <Table hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Стоимость(руб.)</th>
            <th>Состояние</th>
            <th>Дата</th>
            <th>Время</th>
            <th>Количество гостей</th>
            <th>Тип оплаты</th>
          </tr>
        </thead>
        {orders.map((el: OrdersType) => {
          if (el.type === 'Бронирование стола') {
            return (
              <tbody key={el.id}>
                <tr key={el.id}>
                  <td>{el.id}</td>
                  <td>{el.price}</td>
                  <td>{el.state}</td>
                  <td>{el.date}</td>
                  <td>{el.time}</td>
                  <td width={'14%'}>{el.tableSize}</td>
                  <td width={'14%'}>
                    {el.paymentType ? el.paymentType : 'Наличными'}
                  </td>
                </tr>
              </tbody>
            )
          }
        })}
      </Table>
    )
  }
  return <div>{arrayTables()}</div>
}

export default OrdersBooking
