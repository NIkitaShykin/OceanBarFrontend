import {useDispatch} from 'react-redux'
import {
  deleteUserBookingTable,
  setUsersBookingTables, updateUsersBookingTables
} from '../../../../redux/actions'
import {ApiAdmin} from '../../../../api/ApiAdmin'
import {useEffect, useState} from 'react'
import {useAppSelector} from '../../../../redux/hooks'
import './Tables.scss'
import {Button, FormControl, Modal, Table} from 'react-bootstrap'
import {BookingTablesType} from '../../../../common/types/bookingTypes'
import {orderedToast} from '../../../../components/OrderToast/OrderedToast'

const OrderedTables = () => {
  const dispatch = useDispatch()
  const [isShowModal, setShowModal] = useState(false)
  const [isDeleteButton, setIsDeleteButton] = useState(false)
  const [changingFieldValue, setChangingFieldValue] = useState('')
  const [fieldName, setFieldName] = useState('')
  const [selectedRowId, setSelectedRowId] = useState('')
  const bookings = useAppSelector((state) => state.bookings.bookings)

  useEffect(() => {
    handleLoad()
  }, [])
  const handleLoad = () => {
    ApiAdmin.getBookedTables().then((el) => {
      dispatch(setUsersBookingTables(el.data.bookedUsers))
    })
  }
  const closeEditModal = () => {
    setShowModal(false)
    setIsDeleteButton(false)
  }
  const openEditModal = (id: any, value: any, name: any) => {
    setFieldName(name)
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
    ApiAdmin.deleteBookedTable(selectedRowId).then(() => {
      dispatch(deleteUserBookingTable(selectedRowId))
      closeEditModal()
    })
  }

  const onClickSaveButtonEditModal = () => {
    ApiAdmin.updateBookedTables(
      changingFieldValue,
      selectedRowId,
      fieldName
    ).then((el: any) => {
      dispatch(
        updateUsersBookingTables({
          booking: el.data.updatedBooking,
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
            <th>Имя</th>
            <th>Телефон</th>
            <th>Дата</th>
            <th>Время</th>
            <th>Количество гостей</th>
          </tr>
        </thead>
        {bookings.map((booking: BookingTablesType) => (
          <tr key={booking.id}>
            <td
              onClick={(e: any) => {
                e.stopPropagation()
                orderedToast('Нельзя изменить ID')
              }}
            >
              {booking.id}
            </td>
            <td
              onClick={() => {
                openEditModal(booking.id, booking.name, 'name')
              }}
            >
              {booking.name}
            </td>
            <td
              onClick={() => {
                openEditModal(booking.id, booking.phone, 'phone')
              }}
            >
              {booking.phone}
            </td>
            <td
              onClick={() => {
                openEditModal(booking.id, booking.date, 'date')
              }}
            >
              {booking.date}
            </td>
            <td
              onClick={() => {
                openEditModal(booking.id, booking.time, 'time')
              }}
            >
              {booking.time}
            </td>
            <td
              onClick={() => {
                openEditModal(
                  booking.id,
                  booking.amountofpeople,
                  'amountofpeople'
                )
              }}
              width={'14%'}
            >
              {booking.amountofpeople}
            </td>
            <td
              onClick={(e) => {
                e.stopPropagation()
              }}
              width={'10%'}
            >
              <Button
                onClick={() => {
                  openDeleteModal(booking.id)
                }}
                style={{backgroundColor: '#ff2828'}}
                variant='danger'
                size={'sm'}
              >
                Удалить
              </Button>
            </td>
          </tr>
        ))}
      </Table>
    )
  }
  return (
    <div>
      {isShowModal ? (
        <>
          <Modal show={isShowModal} onHide={closeEditModal}>
            <Modal.Header closeButton>
              <Modal.Title>
                Изменение данных для ID: {selectedRowId}
              </Modal.Title>
            </Modal.Header>
            {isDeleteButton ? (
              <div>Уверены что хотите удалить стол с ID: {selectedRowId}</div>
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
      ) : null}
      {arrayTables()}
    </div>
  )
}
export default OrderedTables
