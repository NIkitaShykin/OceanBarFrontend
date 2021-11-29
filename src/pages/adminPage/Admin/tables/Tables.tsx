import {useDispatch} from 'react-redux'
import {
  deleteUserBookingTable,
  setUsersBookingTables,
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
  const [show, setShow] = useState(false)
  const [deleteTable, setDeleteTable] = useState(false)
  const [target, setTarget] = useState('')
  const [id, setId] = useState('')
  const tables = useAppSelector((state) => state.tables.tables)

  useEffect(() => {
    handleLoad()
  }, [])
  const handleLoad = () => {
    ApiAdmin.getBookedTables().then((el) => {
      dispatch(setUsersBookingTables(el.data.bookedUsers))
    })
  }
  const handleClose = () => {
    setShow(false)
    setDeleteTable(false)
  }
  const handleShow = (target: any) => {
    setTarget(target.innerText)
    setShow(true)
  }
  const handleDelete = (id: any) => {
    ApiAdmin.deleteBookedTable('298').then((el) => {
      dispatch(deleteUserBookingTable('298'))
      handleClose()
    })
  }

  // how to get id
  const handleSave = (target: any) => {
    ApiAdmin.updateBookedTables(target, '300').then((el) => {
      // dispatch(
      //   updateUsersBookingTables({
      //     booking: el.data.bookedUsers,
      //     id: el.data.bookedUsers.id,
      //   })
      // )
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
        {tables.map((el: BookingTablesType) => (
          <tbody key={el.id}>
            <tr
              onClick={(e: any) => {
                handleShow(e.target)
              }}
              key={el.id}
            >
              <td
                onClick={(e: any) => {
                  setId(e.target.innerText)
                  e.stopPropagation()
                  orderedToast('Нельзя изменить ID')
                }}
              >
                {el.id}
              </td>
              <td>{el.name}</td>
              <td>{el.phone}</td>
              <td>{el.date}</td>
              <td>{el.time}</td>
              <td width={'14%'}>{el.amountofpeople}</td>
              <td
                onClick={(e) => {
                  e.stopPropagation()
                }}
                width={'10%'}
              >
                <Button
                  onClick={(e) => {
                    setShow(true)
                    setDeleteTable(true)
                  }}
                  variant='danger'
                  size={'sm'}
                >
                  Удалить
                </Button>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    )
  }
  return (
    <div>
      {show ? (
        <>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Изменение данных {id}</Modal.Title>
            </Modal.Header>
            {deleteTable ? (
              <div>Уверены что хотите удалить стол с ID: {id}</div>
            ) : (
              <Modal.Body>
                <FormControl
                  aria-label='Small'
                  defaultValue={target}
                  onChange={(e) => {
                    setTarget(e.target.value)
                  }}
                  aria-describedby='inputGroup-sizing-sm'
                />
              </Modal.Body>
            )}

            <Modal.Footer>
              <Button variant='secondary' onClick={handleClose}>
                Закрыть
              </Button>
              <Button
                variant='primary'
                onClick={() => {
                  deleteTable ? handleDelete(id) : handleSave(target)
                }}
              >
                {deleteTable ? <div>Удалить</div> : <div>Сохранить</div>}
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
