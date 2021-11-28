import axios from 'axios'
import {url as baseURL} from './index'
import Cookies from 'js-cookie'
import {bookingTablesType} from '../common/types/bookingTypes'

const token = Cookies.get('token')

const instance = axios.create({
  baseURL,
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
      return Promise.resolve<{data: {bookedUsers: bookingTablesType[]}}>(
        instance.get(`http://localhost:3001/api/booking/usersbooking`)
      ).then((resp) => {
        return resp
      })
    }
  },
}
