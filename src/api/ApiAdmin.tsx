import axios from 'axios'
import {url} from './index'
import Cookies from 'js-cookie'
import {BookingTablesType} from '../common/types/bookingTypes'

const token = Cookies.get('token')

const instance = axios.create({
  url,
})
export const ApiAdmin = {
  getNewDishImgFileUrl(newDishImgFile?: any) {
    {
      return Promise.resolve(
        instance.post('menu/image', newDishImgFile, {
          headers: {Authorization: `Bearer ${token}`},
        })
      )
    }
  },
  setNewDish(newDish: any) {
    {
      return Promise.resolve(
        instance.post('menu/', newDish, {
          headers: {Authorization: `Bearer ${token}`},
        })
      )
    }
  },
  deleteDish(dishId: number) {
    {
      return Promise.resolve(
        instance.delete(`menu/${dishId}`, {
          headers: {Authorization: `Bearer ${token}`},
        })
      )
    }
  },
  getBookedTables() {
    {
      return Promise.resolve<{data: {bookedUsers: BookingTablesType[]}}>(
        instance.get(`${url}/booking/usersbooking`)
      ).then((resp) => {
        return resp
      })
    }
  },
  getAllOrders() {
    {
      return Promise.resolve<{data: {orders: []}}>(
        instance.get(`${url}/admin/order/`)
      ).then((resp) => {
        return resp
      })
    }
  },
  updateBookedTables(fieldValue: any, id: string, fieldName:any) {
    {
      return Promise.resolve<{data: {bookedUsers: BookingTablesType[]}}>(
        instance.patch(`${url}/booking/usersbooking/?id=${id}`, {
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
        instance.delete(`${url}/booking/usersbooking/?id=${id}`)
      ).then((resp) => {
        return resp
      })
    }
  },
  deleteOrder(id: string) {
    {
      return Promise.resolve(
        instance.delete(`${url}/admin/order/${id}`)
      ).then((resp) => {
        return resp
      })
    }
  },
  updateOrder(id: string, orderState:string) {
    {
      return Promise.resolve(
        instance.patch(`${url}/admin/order/${id}`, {
          state: orderState
        })
      ).then((resp) => {
        return resp
      })
    }
  },
}
