import Cookies from 'js-cookie'
import {BookingTablesType} from '../common/types/bookingTypes'
import {$api} from './ApiAuth'

const token = Cookies.get('token')

export const ApiAdmin = {
  getNewDishImgFileUrl(newDishImgFile?: any) {
    {
      return Promise.resolve(
        $api.post('menu/image', newDishImgFile, {
          headers: {Authorization: `Bearer ${token}`},
        })
      )
    }
  },
  setNewDish(newDish: any) {
    {
      return Promise.resolve(
        $api.post('menu/', newDish, {
          headers: {Authorization: `Bearer ${token}`},
        })
      )
    }
  },
  deleteDish(dishId: number) {
    {
      return Promise.resolve(
        $api.delete(`menu/${dishId}`, {
          headers: {Authorization: `Bearer ${token}`},
        })
      )
    }
  },
  getBookedTables() {
    {
      return Promise.resolve<{data: {bookedUsers: BookingTablesType[]}}>(
        $api.get(`booking/usersbooking`)
      ).then((resp) => {
        return resp
      })
    }
  },
  getAllOrders() {
    {
      return Promise.resolve<{data: {orders: []}}>(
        $api.get('admin/order/')
      )
    }
  },
  updateBookedTables(fieldValue: any, id: string, fieldName:any) {
    {
      return Promise.resolve<{data: {bookedUsers: BookingTablesType[]}}>(
        $api.patch(`booking/usersbooking/?id=${id}`, {
          [fieldName]: fieldValue
        })
      ).then((resp) => {
        return resp
      })
    }
  },
  deleteBookedTable(id: string) {
    {
      return Promise.resolve<{data: {bookedUsers: BookingTablesType[]}}>(
        $api.delete(`booking/usersbooking/?id=${id}`)
      ).then((resp) => {
        return resp
      })
    }
  },
  deleteOrder(id: string) {
    {
      return Promise.resolve(
        $api.delete(`admin/order/${id}`)
      ).then((resp) => {
        return resp
      })
    }
  },
  updateOrder(id: string, orderState:string) {
    {
      return Promise.resolve(
        $api.patch(`admin/order/${id}`, {
          state: orderState
        })
      ).then((resp) => {
        return resp
      })
    }
  },
}
