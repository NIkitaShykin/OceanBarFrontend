import {Table} from 'react-bootstrap'
import {OrdersType} from '../../../../common/types/bookingTypes'

const OrdersDelivery = ({orders}: any) => {
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
            <th>Тип оплаты</th>
            <th>Адрес</th>
          </tr>
        </thead>
        {orders.map((el: OrdersType) => {
          if (el.type === 'Доставка') {
            return (
              <tbody key={el.id}>
                <tr key={el.id}>
                  <td>{el.id}</td>
                  <td>{el.price}</td>
                  <td>{el.state}</td>
                  <td>{el.date}</td>
                  <td>{el.time}</td>
                  <td width={'14%'}>{el.paymentType}</td>
                  <td width={'25%'}>{el.address}</td>
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

export default OrdersDelivery
