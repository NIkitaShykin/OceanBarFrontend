import {Button, FormControl, Modal, Table} from 'react-bootstrap'
import {OrdersType} from '../../../../common/types/bookingTypes'
import {useState} from 'react'
import {ApiAdmin} from '../../../../api/ApiAdmin'
import {deleteUserOrder, updateUserOrder} from '../../../../redux/actions'
import {useDispatch} from 'react-redux'

const OrdersBooking = ({orders}: any) => {
  const dispatch = useDispatch()

  const [isShowModal, setShowModal] = useState(false)
  const [isDeleteButton, setIsDeleteButton] = useState(false)
  const [changingFieldValue, setChangingFieldValue] = useState('')
  const [selectedRowId, setSelectedRowId] = useState('')

  const closeEditModal = () => {
    setShowModal(false)
    setIsDeleteButton(false)
  }
  const openEditModal = (id: any, value: any, name: any) => {
    setChangingFieldValue(value)
    setSelectedRowId(id)
    setShowModal(true)
  }
  const openDeleteModal = (id: any) => {
    setSelectedRowId(id)
    setIsDeleteButton(true)
    setShowModal(true)
  }
  const onClickDeleteButtonEditModal = () => {
    ApiAdmin.deleteOrder(selectedRowId).then(() => {
      dispatch(deleteUserOrder(selectedRowId))
      closeEditModal()
    })
  }

  const onClickSaveButtonEditModal = () => {
    ApiAdmin.updateOrder(
      selectedRowId,
      changingFieldValue
    ).then((el: any) => {
      dispatch(
        updateUserOrder({
          order: el.data.updatedOrder,
          id: selectedRowId
        })
      )
      closeEditModal()
    })
  }
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
              <tr key={el.id}>
                <td>{el.id}</td>
                <td>{el.price}</td>
                <td onClick={() => {
                  openEditModal(el.id, el.state, 'state')
                }}>{el.state}</td>
                <td>{el.date}</td>
                <td>{el.time}</td>
                <td width={'14%'}>{el.tableSize}</td>
                <td width={'14%'}>
                  {el.paymentType ? el.paymentType : 'Наличными'}
                </td>
                <Button
                  onClick={() => {
                    openDeleteModal(el.id)
                  }}
                  style={{backgroundColor: '#ff2828'}}
                  variant='danger'
                  size={'sm'}
                >
                  Удалить
                </Button>
              </tr>
            )
          }
        })}
      </Table>
    )
  }
  return <div>
    {isShowModal ? (
      <>
        <Modal show={isShowModal} onHide={closeEditModal}>
          <Modal.Header closeButton>
            <Modal.Title>
              Изменение данных для ID: {selectedRowId}
            </Modal.Title>
          </Modal.Header>
          {isDeleteButton ? (
            <div>Уверены что хотите удалить заказ с ID: {selectedRowId}</div>
          ) : (
            <Modal.Body>
              <FormControl
                aria-label='Small'
                defaultValue={changingFieldValue}
                onChange={(e) => {
                  setChangingFieldValue(e.target.value)
                }}
                aria-describedby='inputGroup-sizing-sm'
              />
            </Modal.Body>
          )}

          <Modal.Footer>
            <Button variant='secondary' onClick={closeEditModal}>
              Закрыть
            </Button>
            <Button
              variant='primary'
              onClick={() => {
                isDeleteButton ?
                  onClickDeleteButtonEditModal() :
                  onClickSaveButtonEditModal()
              }}
            >
              {isDeleteButton ? <div>Удалить</div> : <div>Сохранить</div>}
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    ) : null}{arrayTables()}</div>
}

export default OrdersBooking
