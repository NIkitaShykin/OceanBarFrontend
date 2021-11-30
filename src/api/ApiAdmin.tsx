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
        instance.get(`${url}/order/orders`)
      ).then((resp) => {
        return resp
      })
    }
  },
  updateBookedTables(newData: any, id: string) {
    {
      return Promise.resolve<{data: {bookedUsers: BookingTablesType[]}}>(
        instance.patch(`${url}/booking/usersbooking/?id=${id}`, {
          name: newData?.name,
          phone: newData?.phone,
          date: newData?.date,
          time: newData?.time,
          amountofpeople: newData?.amountofpeople,
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
}
